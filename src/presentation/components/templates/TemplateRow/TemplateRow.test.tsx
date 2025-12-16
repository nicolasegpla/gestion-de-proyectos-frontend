import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { TemplateRow } from './TemplateRow';

describe('<TemplateRow />', () => {
    it('should render without crashing', () => {
        render(<TemplateRow />);
        expect(screen.getByText('TemplateRow works!')).toBeInTheDocument();
    });
});
