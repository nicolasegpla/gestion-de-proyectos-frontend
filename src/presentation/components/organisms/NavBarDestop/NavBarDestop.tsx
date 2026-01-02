import React from 'react';

import { Logo, SetOptionsToNav, ButtonIcon } from '@/presentation/components/';

import './nav-bar-destop.scss';

interface NavBarDestopProps {
    logoProps: string;
    onclikButtonUser: () => void;
    initialsButtonUser: string;
    propsButtonIconUser: React.ComponentProps<typeof ButtonIcon>;
    propsButtonIconAdd: React.ComponentProps<typeof ButtonIcon>;
}

export const NavBarDestop = ({
    logoProps,
    onclikButtonUser,
    initialsButtonUser,
    propsButtonIconUser,
    propsButtonIconAdd,
}: NavBarDestopProps) => {
    return (
        <div className="nav-bar-destop">
            <Logo text={logoProps} />
            <SetOptionsToNav
                propsButtonUser={{ initials: initialsButtonUser, onclik: onclikButtonUser }}
                propsButtonIconAdd={propsButtonIconAdd}
                propsButtonIconUser={propsButtonIconUser}
            />
        </div>
    );
};
