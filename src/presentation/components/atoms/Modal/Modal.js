import { jsx as _jsx } from "react/jsx-runtime";
import './modal.scss';
import { createPortal } from 'react-dom';
export function Modal({ children }) {
    return createPortal(_jsx("div", { className: "modal", style: { display: children ? 'flex' : 'none' }, children: children }), document.getElementById('modal'));
}
