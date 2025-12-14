import { jsx as _jsx } from "react/jsx-runtime";
import './button.scss';
export const Button = ({ textButton, onClick }) => {
    return (_jsx("button", { className: "button", onClick: onClick, children: textButton }));
};
