import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { ErrorBoundary } from 'shared/infrastructure/ErrorBoundary';
import { MarketingApp } from './MarketingApp';

// purpose oth te component provide all necessary global dependencies like React Router,
// later here also should be added dependency injection conexts (like translations and global configuration)
export const MarketingAppWrapper: React.FC = props => {

    return (
        <ErrorBoundary>
            <Router>
                <MarketingApp />
            </Router>
        </ErrorBoundary>)
}