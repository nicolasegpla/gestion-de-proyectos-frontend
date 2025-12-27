import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { TemplatePrimary } from './TemplatePrimary';

describe('<TemplatePrimary />', () => {
    it('should render without crashing', () => {
        render(<TemplatePrimary />);
        expect(screen.getByText('TemplatePrimary works!')).toBeInTheDocument();
    });
});
