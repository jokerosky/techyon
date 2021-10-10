import React, { ReactElement } from 'react';
import { ChangeEventType } from 'shared/ui-kit/types';

import './InputElement.scss'

export enum InputType {
    text = 'text',
    password = 'password'
}




export interface InputElementProps {
    type: InputType;
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    readonly?: boolean;
    disabled?: boolean;

    valid?: boolean;

    labelAdornment?: ReactElement;
    tabIndex?: number;

    onChange?: ChangeEventType;
}

export const InputElement: React.FC<InputElementProps> = props => {
    const { type, id, label, labelAdornment, value, tabIndex, onChange } = props;

    const labelElement = label ? <label htmlFor={id}>{label}</label> : null;

    const labelArea = labelElement || labelAdornment ? <div className="label-area">
        {labelElement}
        {labelAdornment}
    </div> : null;

    return <div className='input-element'>
        {labelArea}
        <input type={type} id={id} className={value ? 'filled' : ''} value={value || ''} onChange={onChange} tabIndex={tabIndex} />
    </div>
}