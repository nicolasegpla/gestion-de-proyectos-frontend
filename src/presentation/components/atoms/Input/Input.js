import { jsx as _jsx } from "react/jsx-runtime";
import './input.scss';
export const Input = ({ type, placeholder, value, onChange, name }) => {
    return (_jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, name: name, className: "input" }));
};
