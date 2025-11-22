import React from 'react';
import './template-head.scss';

interface TemplateHeadProps {
    children: React.ReactNode;
}

export const TemplateHead = ({ children }: TemplateHeadProps) => {
    return <div className="template-head">{children}</div>;
};
