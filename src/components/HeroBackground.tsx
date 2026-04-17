"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: Node[] = [];
    const MAX_DIST = 200;
    const SPEED = 0.15;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function init() {
      resize();
      nodes.length = 0;

      const w = canvas!.width;
      const h = canvas!.height;

      // Adaptive node count: fewer on narrow screens
      const NODE_COUNT = w < 640 ? 22 : 38;

      for (let i = 0; i < NODE_COUNT; i++) {
        // 70% of nodes biased toward lower 55% of canvas (buildings/river zone)
        const inLowerZone = Math.random() < 0.7;
        const y = inLowerZone
          ? h * 0.45 + Math.random() * h * 0.55
          : Math.random() * h * 0.5;

        nodes.push({
          x: Math.random() * w,
          y,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
        });
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx.strokeStyle = `rgba(255, 252, 240, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      for (const n of nodes) {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 7);
        g.addColorStop(0, "rgba(255, 252, 240, 0.9)");
        g.addColorStop(0.4, "rgba(255, 252, 240, 0.3)");
        g.addColorStop(1, "rgba(255, 252, 240, 0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      for (const n of nodes) {
        n.x = Math.min(n.x, canvas!.width);
        n.y = Math.min(n.y, canvas!.height);
      }
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
