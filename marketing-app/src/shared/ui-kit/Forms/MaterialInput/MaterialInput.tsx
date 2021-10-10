import React from 'react';
import { ChangeEventType } from 'shared/ui-kit/types';

import './MaterialInput.scss';

export interface MaterialInputProps {
    value: string;
    focus?: boolean;

    onChange: ChangeEventType;
}

export const MaterialInput: React.FC<MaterialInputProps> = props => {
    const { value, onChange, focus } = props;
    return <input autoFocus={focus} type='text' className='material-input' value={value} onChange={onChange} />;
}