import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Tikets } from './Tikets';

describe('<Tikets />', () => {
    it('should render without crashing', () => {
        render(<Tikets />);
        expect(screen.getByText('Tikets works!')).toBeInTheDocument();
    });
});
