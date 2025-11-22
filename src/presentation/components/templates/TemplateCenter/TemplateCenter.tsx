import React from 'react';
import './template-center.scss';

interface TemplateCenterProps {
    children: React.ReactNode;
}

export const TemplateCenter = ({ children }: TemplateCenterProps) => {
    return <div className="template-center">{children}</div>;
};
