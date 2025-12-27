import React from 'react';
import './template-primary.scss';

interface TemplatePrimaryProps {
    children: React.ReactNode;
}

export const TemplatePrimary = ({ children }: TemplatePrimaryProps) => {
    return <div className="template-primary">{children}</div>;
};
