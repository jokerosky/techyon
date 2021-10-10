import React from 'react';

import './Chip.scss';

export interface ChipProps {
    readonly?: boolean;
    active?: boolean;

    onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = props => {
    const { children, readonly, active, onClick } = props;
    return <span className={`chip ${active ? 'active' : ''}`} onClick={onClick}>{children}</span>;
}