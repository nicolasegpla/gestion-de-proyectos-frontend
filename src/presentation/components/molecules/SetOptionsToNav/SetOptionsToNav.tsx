import React from 'react';

import { ButtonUser } from '@/presentation/components';
import './set-options-to-nav.scss';

interface SetOptionsToNavProps {
    propsButtonUser: React.ComponentProps<typeof ButtonUser>;
}

export const SetOptionsToNav = ({ propsButtonUser }: SetOptionsToNavProps) => {
    return (
        <div className="set-options-to-nav">
            <ButtonUser {...propsButtonUser} />
        </div>
    );
};
