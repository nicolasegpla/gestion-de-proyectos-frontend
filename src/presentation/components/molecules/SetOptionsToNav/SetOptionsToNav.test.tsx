import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { SetOptionsToNav } from './SetOptionsToNav';

describe('<SetOptionsToNav />', () => {
    it('should render without crashing', () => {
        render(<SetOptionsToNav />);
        expect(screen.getByText('SetOptionsToNav works!')).toBeInTheDocument();
    });
});
