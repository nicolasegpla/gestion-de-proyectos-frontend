import React from 'react';
import './template-nav-desktop.scss';

interface TemplateNavDesktopProps {
    children: React.ReactNode;
}

export const TemplateNavDesktop = ({ children }: TemplateNavDesktopProps) => {
    return <div className="template-nav-desktop">{children}</div>;
};
