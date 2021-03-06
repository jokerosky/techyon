import React from 'react';
import { Link } from 'react-router-dom';
import { MarketingAppRoutesTree } from 'shared/marketing-app-core';

import UserPicImg from './avatar-placeholder.png';

export interface UserPicProps {
    img?: string;
};

export const UserPic: React.FC<UserPicProps> = props => {
    const { img } = props;
    return <Link to={MarketingAppRoutesTree.account.root}>
        <img alt='user pic' src={img || UserPicImg} />
    </Link>
}