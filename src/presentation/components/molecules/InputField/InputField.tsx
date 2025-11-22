import React from 'react';

import { Input, Label } from '@/presentation/components';
import './input-field.scss';

interface InputFieldProps {
    labelProps: React.ComponentProps<typeof Label>;
    inputProps: React.ComponentProps<typeof Input>;
}

export const InputField = ({ labelProps, inputProps }: InputFieldProps) => {
    return (
        <div className="input-field">
            <Label {...labelProps} />
            <Input {...inputProps} />
        </div>
    );
};
