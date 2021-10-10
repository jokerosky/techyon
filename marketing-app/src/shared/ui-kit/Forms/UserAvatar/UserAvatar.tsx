import React from 'react';

// import AvatarPlaceholder from './user-avatar.svg';
import DefaultAvatar from './default-avatar.jpg';
import './UserAvatar.scss';

export interface UserAvatarProps {
    avatar: string;
    name?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = props => {
    const { avatar, name } = props;
    return <img className="user-avatar" alt={name || "user avatar"} src={avatar || DefaultAvatar} ></img>
}