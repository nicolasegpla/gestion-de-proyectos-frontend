import React from 'react';
import './basic-option.scss';

interface BasicOptionProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    className?: string;
}

export const BasicOption = ({ onClick, label, icon, className = '' }: BasicOptionProps) => {
    return (
        <button type="button" onClick={onClick} className={`basic-option ${className}`.trim()}>
            <span className="basic-option__icon">{icon}</span>
            <span className="basic-option__label">{label}</span>
        </button>
    );
};
