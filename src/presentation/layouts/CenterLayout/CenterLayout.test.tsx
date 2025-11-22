import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { CenterLayout } from './CenterLayout';

describe('<CenterLayout />', () => {
    it('should render without crashing', () => {
        render(<CenterLayout />);
        expect(screen.getByText('CenterLayout works!')).toBeInTheDocument();
    });
});
