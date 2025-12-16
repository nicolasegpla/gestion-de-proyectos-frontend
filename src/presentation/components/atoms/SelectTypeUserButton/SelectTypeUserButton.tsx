import React from 'react';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import './select-type-user-button.scss';

interface SelectTypeUserButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    isActive: boolean;
}

export const SelectTypeUserButton = ({
    isActive = true,
    children = (
        <BuildingOfficeIcon
            className={`${isActive ? 'buttonActive__icon' : 'select-type-user-button__icon'}`}
        />
    ),
    onClick,
}: SelectTypeUserButtonProps) => {
    return (
        <div
            onClick={onClick}
            className={`${isActive ? 'buttonActive' : 'select-type-user-button'}`}
        >
            {children}
        </div>
    );
};
