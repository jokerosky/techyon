import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {

  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <>
        <h1>Something went wrong.</h1>
        <h2>Error message: [{this.state.error.message}]</h2></>
    }

    return this.props.children;
  }
}