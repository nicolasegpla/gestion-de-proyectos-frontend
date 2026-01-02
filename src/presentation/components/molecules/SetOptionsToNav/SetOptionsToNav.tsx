import React from 'react';

import { ButtonIcon, ButtonUser } from '@/presentation/components';
import './set-options-to-nav.scss';

interface SetOptionsToNavProps {
    propsButtonUser: React.ComponentProps<typeof ButtonUser>;
    propsButtonIconUser: React.ComponentProps<typeof ButtonIcon>;
    propsButtonIconAdd: React.ComponentProps<typeof ButtonIcon>;
}

export const SetOptionsToNav = ({
    propsButtonUser,
    propsButtonIconUser,
    propsButtonIconAdd,
}: SetOptionsToNavProps) => {
    return (
        <div className="set-options-to-nav">
            <ButtonIcon {...propsButtonIconUser} />
            <ButtonIcon {...propsButtonIconAdd} />
            <ButtonUser {...propsButtonUser} />
        </div>
    );
};
