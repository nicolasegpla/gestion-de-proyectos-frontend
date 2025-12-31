import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ButtonUser } from './ButtonUser';

describe('<ButtonUser />', () => {
    it('should render without crashing', () => {
        render(<ButtonUser />);
        expect(screen.getByText('ButtonUser works!')).toBeInTheDocument();
    });
});
