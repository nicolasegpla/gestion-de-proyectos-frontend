import React, { useContext } from 'react';

import { Logo, SetOptionsToNav, ButtonIcon } from '@/presentation/components/';

import { PlusIcon, UserPlusIcon } from '@heroicons/react/24/outline';

import './nav-bar-destop.scss';
import { useLoginBusinessViewModel } from '@/presentation/viewmodels/useLoginBusinessViewModel';
import { getInitalsName } from '@/presentation/utils/basicFunctions';
import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';

interface NavBarDestopProps {
    //propsButtonIconUser: React.ComponentProps<typeof ButtonIcon>;
    //propsButtonIconAdd: React.ComponentProps<typeof ButtonIcon>;
}

export const NavBarDestop = ({}: NavBarDestopProps) => {
    const viewModelBusiness = useLoginBusinessViewModel();
    const globalresentationalContext = useContext(PresentacionalContext);

    const onclickButtonUser = () => {
        console.log('onclickButtonUser');
        globalresentationalContext.setModalVisible({
            state: true,
            type: 'add-user',
        });
    };

    const onclickButtonItems = () => {
        console.log('onclickButtonUser');
        globalresentationalContext.setModalVisible({
            state: true,
            type: 'add-items',
        });
    };

    const propsButtonIconAdd = {
        icon: <UserPlusIcon className="button-icon__icon" />,
        onClick: onclickButtonUser,
    };

    const propsButtonIconUser = {
        icon: <PlusIcon className="button-icon__icon" />,
        onClick: onclickButtonItems,
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
