import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Circle } from './Circle';

describe('<Circle />', () => {
    it('should render without crashing', () => {
        render(<Circle />);
        expect(screen.getByText('Circle works!')).toBeInTheDocument();
    });
});
