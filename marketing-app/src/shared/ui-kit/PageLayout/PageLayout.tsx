import React from 'react';
import { PageHeader, PageHeaderProps } from './PageHeader';

import './PageLayout.scss';

export interface PageLayoutProps extends PageHeaderProps {
    showBackgound?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = props => {
    const { children, headerTitle, headerActions, showDivider, showBackgound } = props;

    return <div className={`page-layout ${showBackgound ? 'background' : ''}`}>
        <PageHeader headerTitle={headerTitle} headerActions={headerActions} showDivider={showDivider} />
        <main>{children}</main>
    </div>
}