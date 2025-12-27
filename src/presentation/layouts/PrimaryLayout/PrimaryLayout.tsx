import React from 'react';
import './primary-layout.scss';

interface PrimaryLayoutProps {
    children: React.ReactNode;
}

export const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
    return <div className="primary-layout">{children}</div>;
};
