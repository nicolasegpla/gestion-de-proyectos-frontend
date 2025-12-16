import React from 'react';

import { Input } from '@/presentation/components';
import './input-field.scss';

interface InputFieldProps {
    inputProps: React.ComponentProps<typeof Input>;
}

export const InputField = ({ inputProps }: InputFieldProps) => {
    return (
        <div className="input-field">
            <Input {...inputProps} />
        </div>
    );
};
