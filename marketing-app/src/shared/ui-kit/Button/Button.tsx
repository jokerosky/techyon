import React from 'react';

import './Button.scss';

export interface ButtonProps {
    color: 'primary' | 'secondary',
    type?: 'button' | 'reset' | 'submit';

    onClick?: () => void;
}


export const Button: React.FC<ButtonProps> = props => {
    const { color, children, type, onClick } = props;


    return <button className={`${color}`} type={type} onClick={onClick}>
        {children}
    </button>
}