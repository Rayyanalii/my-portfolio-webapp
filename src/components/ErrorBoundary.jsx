import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Canvas render error:", error, info);
    }

    render() {
        const { fallback } = this.props;

        if (this.state.hasError) {
            return fallback || <div>Something went wrong.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
