import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Input } from './Input';

describe('<Input />', () => {
    it('should render without crashing', () => {
        render(<Input />);
        expect(screen.getByText('Input works!')).toBeInTheDocument();
    });
});
