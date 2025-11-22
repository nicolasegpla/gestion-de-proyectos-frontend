import React from 'react';
import './star-layout.scss';

interface StarLayoutProps {
    children: React.ReactNode;
}

export const StarLayout = ({ children }: StarLayoutProps) => {
    return <div className="star-layout">{children}</div>;
};
