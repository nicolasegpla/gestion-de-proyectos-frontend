import React from 'react';

import { Logo, SetOptionsToNav } from '@/presentation/components/';

import './nav-bar-destop.scss';

interface NavBarDestopProps {
    logoProps: string;
    onclikButtonUser: () => void;
    initialsButtonUser: string;
}

export const NavBarDestop = ({
    logoProps,
    onclikButtonUser,
    initialsButtonUser,
}: NavBarDestopProps) => {
    return (
        <div className="nav-bar-destop">
            <Logo text={logoProps} />
            <SetOptionsToNav
                propsButtonUser={{ initials: initialsButtonUser, onclik: onclikButtonUser }}
            />
        </div>
    );
};
