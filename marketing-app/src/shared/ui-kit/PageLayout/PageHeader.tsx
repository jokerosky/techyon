import React, { ReactElement } from 'react';
import './PageLayout.scss';

export interface PageHeaderProps {
    headerTitle: string | ReactElement;
    headerActions?: ReactElement;

    showDivider?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = props => {
    const { showDivider, headerTitle, headerActions } = props;

    const isString = typeof headerTitle === 'string';
    const titleElement = isString ? <h1>{headerTitle}</h1> : headerTitle;

    return <header className={`page-header ${showDivider ? 'divider' : ''}`}>
        {titleElement}
        {headerActions}
    </header>
}