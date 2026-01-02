import React from 'react';
import './button-icon.scss';

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}

export const ButtonIcon = ({ icon, className, ...props }: ButtonIconProps) => {
    return (
        <button className={`button-icon ${className || ''}`.trim()} {...props}>
            <span className="button-icon__span">{icon}</span>
        </button>
    );
};
