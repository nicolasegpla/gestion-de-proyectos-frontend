import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { NavBarMobile } from './NavBarMobile';

describe('<NavBarMobile />', () => {
    it('should render without crashing', () => {
        render(<NavBarMobile />);
        expect(screen.getByText('NavBarMobile works!')).toBeInTheDocument();
    });
});
