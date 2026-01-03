import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { SecondNavDesktop } from './SecondNavDesktop';

describe('<SecondNavDesktop />', () => {
    it('should render without crashing', () => {
        render(<SecondNavDesktop />);
        expect(screen.getByText('SecondNavDesktop works!')).toBeInTheDocument();
    });
});
