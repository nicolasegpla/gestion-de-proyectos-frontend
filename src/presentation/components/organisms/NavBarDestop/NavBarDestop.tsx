import React from 'react';

import { Logo, SetOptionsToNav, ButtonIcon } from '@/presentation/components/';

import { PlusIcon, UserPlusIcon } from '@heroicons/react/24/outline';

import './nav-bar-destop.scss';
import { useLoginBusinessViewModel } from '@/presentation/viewmodels/useLoginBusinessViewModel';
import { getInitalsName } from '@/presentation/utils/basicFunctions';

interface NavBarDestopProps {
    //propsButtonIconUser: React.ComponentProps<typeof ButtonIcon>;
    //propsButtonIconAdd: React.ComponentProps<typeof ButtonIcon>;
}

export const NavBarDestop = ({}: NavBarDestopProps) => {
    const viewModelBusiness = useLoginBusinessViewModel();

    const onclickButtonUser = () => {
        console.log('onclickButtonUser');
    };

    const propsButtonIconAdd = {
        icon: <UserPlusIcon className="button-icon__icon" />,
    };

    const propsButtonIconUser = {
        icon: <PlusIcon className="button-icon__icon" />,
    };

    return (
        <div className="nav-bar-destop">
            <Logo text="FlowBee" />
            <SetOptionsToNav
                propsButtonUser={{
                    initials: viewModelBusiness.nameUser
                        ? getInitalsName(viewModelBusiness.nameUser)
                        : 'NN',
                    onclik: onclickButtonUser,
                }}
                propsButtonIconAdd={propsButtonIconAdd}
                propsButtonIconUser={propsButtonIconUser}
            />
        </div>
    );
};
