import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Logo } from './Logo';

describe('<Logo />', () => {
    it('should render without crashing', () => {
        render(<Logo />);
        expect(screen.getByText('Logo works!')).toBeInTheDocument();
    });
});
