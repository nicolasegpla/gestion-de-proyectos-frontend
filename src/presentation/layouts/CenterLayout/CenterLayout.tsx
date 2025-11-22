import React from 'react';
import './center-layout.scss';

interface CenterLayoutProps {
    children: React.ReactNode;
}

export const CenterLayout = ({ children }: CenterLayoutProps) => {
    return <div className="center-layout">{children}</div>;
};
