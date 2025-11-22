import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { TemplateHead } from './TemplateHead';

describe('<TemplateHead />', () => {
    it('should render without crashing', () => {
        render(<TemplateHead />);
        expect(screen.getByText('TemplateHead works!')).toBeInTheDocument();
    });
});
