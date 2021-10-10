import React from 'react';

import './Fab.scss';

export interface FabProps {
    onClick?: () => void;

}

export const Fab: React.FC<FabProps> = props => {
    const { children, onClick } = props;
    return <button onClick={onClick} className="fab" >{children}</button>;
}