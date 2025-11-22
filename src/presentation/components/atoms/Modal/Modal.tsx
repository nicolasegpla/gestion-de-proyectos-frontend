import React from 'react';
import './modal.scss';
import { createPortal } from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
    return createPortal(
        <div className="modal" style={{ display: children ? 'flex' : 'none' }}>
            {children}
        </div>,
        document.getElementById('modal') as Element
    );
}
