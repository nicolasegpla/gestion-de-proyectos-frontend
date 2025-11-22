import React from 'react';

import { Button, Label } from '../../atoms';
import { InputField } from '../../molecules';
import './form-register-empresa.scss';

interface FormRegisterEmpresaProps {
    buttonProps: React.ComponentProps<typeof Button>;
    inputsFieldData: Array<React.ComponentProps<typeof InputField>>;
    isSelectRequired?: boolean;
    selectValue?: number;
    selectName?: string;
    onSelectChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    optionsSelect?: Array<{ id: number; nombre: string }>;
}

export const FormRegisterEmpresa = ({
    buttonProps,
    inputsFieldData,
    isSelectRequired = false,
    selectValue,
    selectName,
    onSelectChange,
    optionsSelect,
}: FormRegisterEmpresaProps) => {
    const defaultInputsFieldData: Array<React.ComponentProps<typeof InputField>> = [
        {
            labelProps: { label: 'Nombre de la empresa' },
            inputProps: {
                name: 'nombre',
                type: 'text',
                placeholder: 'Ej: BuildTix',
                value: '',
                onChange: () => {},
            },
        },
        {
            labelProps: { label: 'Nombre de la empresa' },
            inputProps: {
                name: 'nombre',
                type: 'text',
                placeholder: 'Ej: BuildTix',
                value: '',
                onChange: () => {},
            },
        },
    ];

    return (
        <div className="form-register-empresa">
            {(inputsFieldData || defaultInputsFieldData).map((inputFieldData, index) => {
                return <InputField key={index} {...inputFieldData} />;
            })}
            {isSelectRequired && (
                <div>
                    <Label label="Seleccione una empresa" />
                    <select
                        className="form-register-empresa__select"
                        value={selectValue}
                        name={selectName}
                        onChange={onSelectChange}
                    >
                        <option selected value="">
                            selecciona una empresa
                        </option>
                        {optionsSelect?.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.nombre}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <Button {...buttonProps} />
        </div>
    );
};
