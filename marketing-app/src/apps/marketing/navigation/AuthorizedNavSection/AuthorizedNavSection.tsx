import React from 'react';
import { MarketingAppRoutesTree } from 'apps/marketing';
import { NavBarItem, NavBarItemProps } from '../NavBarItem/NavBarItem';
import { UserPic } from '../UserPic/UserPic';

import { ReactComponent as Camera } from 'apps/marketing/assets/camera.svg';
import { ReactComponent as Library } from 'apps/marketing/assets/library.svg';

import './AuthorizedNavSection.scss';

export interface AuthorizedNavSectionProps {

}

export const AuthorizedNavSection: React.FC<AuthorizedNavSectionProps> = props => {
    const navItems = [
        {
            to: MarketingAppRoutesTree.createVideo,
            icon: <Camera />,
            title: 'Create video'
        },
        {
            to: MarketingAppRoutesTree.savedVideos,
            icon: <Library />,
            title: 'Library'
        },

    ] as NavBarItemProps[];

    return <div className="authorized-nav">
        <nav>
            {navItems.map(item => <NavBarItem key={`${item.to}-${item.title}`}
                to={item.to}
                icon={item.icon}
                title={item.title} />)}
        </nav>

        <UserPic />
    </div>
}