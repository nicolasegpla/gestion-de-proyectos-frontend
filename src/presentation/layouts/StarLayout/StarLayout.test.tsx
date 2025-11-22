import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { StarLayout } from './StarLayout';

describe('<StarLayout />', () => {
    it('should render without crashing', () => {
        render(<StarLayout />);
        expect(screen.getByText('StarLayout works!')).toBeInTheDocument();
    });
});
