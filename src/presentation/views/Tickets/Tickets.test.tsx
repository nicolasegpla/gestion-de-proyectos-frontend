import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Tickets } from './Tickets';

describe('<Tickets />', () => {
    it('should render without crashing', () => {
        render(<Tickets />);
        expect(screen.getByText('Tickets works!')).toBeInTheDocument();
    });
});
