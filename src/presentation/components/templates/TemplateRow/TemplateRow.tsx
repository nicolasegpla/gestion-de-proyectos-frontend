import React from 'react';
import './template-row.scss';

interface TemplateRowProps {
    children: React.ReactNode;
}

export const TemplateRow = ({ children }: TemplateRowProps) => {
    return <div className="template-row">{children}</div>;
};
