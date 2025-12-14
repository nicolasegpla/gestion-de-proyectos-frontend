import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input, Label } from '@/presentation/components';
import './input-field.scss';
export const InputField = ({ labelProps, inputProps }) => {
    return (_jsxs("div", { className: "input-field", children: [_jsx(Label, { ...labelProps }), _jsx(Input, { ...inputProps })] }));
};
