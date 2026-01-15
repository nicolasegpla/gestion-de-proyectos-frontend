import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { BasicOption } from './BasicOption';

describe('<BasicOption />', () => {
    it('should render without crashing', () => {
        render(<BasicOption />);
        expect(screen.getByText('BasicOption works!')).toBeInTheDocument();
    });
});
