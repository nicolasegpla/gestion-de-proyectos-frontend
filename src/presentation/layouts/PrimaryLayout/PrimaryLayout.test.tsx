import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { PrimaryLayout } from './PrimaryLayout';

describe('<PrimaryLayout />', () => {
    it('should render without crashing', () => {
        render(<PrimaryLayout />);
        expect(screen.getByText('PrimaryLayout works!')).toBeInTheDocument();
    });
});
