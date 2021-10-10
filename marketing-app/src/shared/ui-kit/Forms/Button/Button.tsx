import React from 'react';

import './Button.scss';

export interface ButtonProps {
    color: 'default' | 'primary' | 'secondary';
    type?: 'button' | 'reset' | 'submit';
    size?: 'small' | 'big';

    onClick?: () => void;
}


export const Button: React.FC<ButtonProps> = props => {
    const { color, children, type, size, onClick } = props;


    return <button className={`${color} ${size}`} type={type} onClick={onClick}>
        {children}
    </button>
}