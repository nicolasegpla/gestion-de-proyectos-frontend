import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { NavBarDestop } from './NavBarDestop';

describe('<NavBarDestop />', () => {
    it('should render without crashing', () => {
        render(<NavBarDestop />);
        expect(screen.getByText('NavBarDestop works!')).toBeInTheDocument();
    });
});
