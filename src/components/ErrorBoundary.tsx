"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-2xl bg-red-50 border border-red-200 px-8 py-10 text-center">
            <p className="text-brand-navy font-semibold mb-2">Something went wrong</p>
            <p className="text-gray-600 text-sm">
              Please reload the page or{" "}
              <a href="/contact" className="text-brand-teal underline">
                contact us directly
              </a>
              .
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
