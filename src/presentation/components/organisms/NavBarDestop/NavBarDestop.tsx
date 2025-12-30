import React from 'react';

import { Logo } from '@/presentation/components/';

import './nav-bar-destop.scss';

interface NavBarDestopProps {
    logoProps: string;
}

export const NavBarDestop = ({ logoProps }: NavBarDestopProps) => {
    return (
        <div className="nav-bar-destop">
            <Logo text={logoProps} />
        </div>
    );
};
