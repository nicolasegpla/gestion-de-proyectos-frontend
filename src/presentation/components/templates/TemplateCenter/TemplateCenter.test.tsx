import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { TemplateCenter } from './TemplateCenter';

describe('<TemplateCenter />', () => {
    it('should render without crashing', () => {
        render(<TemplateCenter />);
        expect(screen.getByText('TemplateCenter works!')).toBeInTheDocument();
    });
});
