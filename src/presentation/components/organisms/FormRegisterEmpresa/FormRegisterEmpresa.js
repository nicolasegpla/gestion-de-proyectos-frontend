import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Label } from '../../atoms';
import { InputField } from '../../molecules';
import './form-register-empresa.scss';
export const FormRegisterEmpresa = ({ buttonProps, inputsFieldData, isSelectRequired = false, selectValue, selectName, onSelectChange, optionsSelect, }) => {
    const defaultInputsFieldData = [
        {
            labelProps: { label: 'Nombre de la empresa' },
            inputProps: {
                name: 'nombre',
                type: 'text',
                placeholder: 'Ej: BuildTix',
                value: '',
                onChange: () => { },
            },
        },
        {
            labelProps: { label: 'Nombre de la empresa' },
            inputProps: {
                name: 'nombre',
                type: 'text',
                placeholder: 'Ej: BuildTix',
                value: '',
                onChange: () => { },
            },
        },
    ];
    return (_jsxs("div", { className: "form-register-empresa", children: [(inputsFieldData || defaultInputsFieldData).map((inputFieldData, index) => {
                return _jsx(InputField, { ...inputFieldData }, index);
            }), isSelectRequired && (_jsxs("div", { children: [_jsx(Label, { label: "Seleccione una empresa" }), _jsxs("select", { className: "form-register-empresa__select", value: selectValue, name: selectName, onChange: onSelectChange, children: [_jsx("option", { selected: true, value: "", children: "selecciona una empresa" }), optionsSelect?.map((option) => (_jsx("option", { value: option.id, children: option.nombre }, option.id)))] })] })), _jsx(Button, { ...buttonProps })] }));
};
