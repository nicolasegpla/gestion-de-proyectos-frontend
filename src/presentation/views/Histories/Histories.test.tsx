import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Histories } from './Histories';

describe('<Histories />', () => {
    it('should render without crashing', () => {
        render(<Histories />);
        expect(screen.getByText('Histories works!')).toBeInTheDocument();
    });
});
