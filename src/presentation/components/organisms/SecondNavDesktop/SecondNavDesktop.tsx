import React from 'react';

import './second-nav-desktop.scss';
import { navigationOptions } from '@/presentation/constants';
import { useNavigateService } from '@/presentation/routes/useNavigateService';

interface SecondNavDesktopProps {}

export const SecondNavDesktop = ({}: SecondNavDesktopProps) => {
    const navigateOptions = useNavigateService();

    return (
        <nav className="second-nav-desktop">
            <ul className="second-nav-desktop__list">
                {navigationOptions.map((option) => (
                    <li
                        onClick={() => navigateOptions.defaultNavigate(option.path)}
                        key={option.id}
                        className="second-nav-desktop__list__item"
                    >
                        <span className="second-nav-desktop__list__item__icon">{option.icon}</span>
                        <p className="second-nav-desktop__list__item__title">{option.title}</p>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
