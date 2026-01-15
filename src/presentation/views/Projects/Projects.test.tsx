import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Projects } from './Projects';

describe('<Projects />', () => {
    it('should render without crashing', () => {
        render(<Projects />);
        expect(screen.getByText('Projects works!')).toBeInTheDocument();
    });
});
