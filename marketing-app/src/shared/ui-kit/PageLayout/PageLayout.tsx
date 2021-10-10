import React from 'react';
import { PageHeader, PageHeaderProps } from './PageHeader';

import './PageLayout.scss';

export interface PageLayoutProps extends PageHeaderProps {
    showBackgound?: boolean;

    flexDirection?: 'column' | 'row';
}

export const PageLayout: React.FC<PageLayoutProps> = props => {
    const { children, headerTitle, headerActions, showDivider, showBackgound, flexDirection } = props;

    return <div className={`page-layout 
    ${showBackgound ? 'background' : ''}`}>
        <PageHeader headerTitle={headerTitle} headerActions={headerActions} showDivider={showDivider} />
        <main className={`${flexDirection ? flexDirection : ''}`}>{children}</main>
    </div>
}