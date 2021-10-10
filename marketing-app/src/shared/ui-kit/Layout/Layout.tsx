import React, { ReactElement } from 'react';
import 'shared/ui-kit/utils.scss';
import './Layout.scss';

export interface LayoutProps {
    navbar: ReactElement;
}


export const Layout: React.FC<LayoutProps> = props => {
    const { children, navbar } = props;

    return <div className="layout" >
        {navbar}
        <div className="flex-1">
            {children}
        </div>
    </div>
}