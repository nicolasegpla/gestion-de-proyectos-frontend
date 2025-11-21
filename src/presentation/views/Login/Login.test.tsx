import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Login } from './Login';

describe('<Login />', () => {
    it('should render without crashing', () => {
        render(<Login />);
        expect(screen.getByText('Login works!')).toBeInTheDocument();
    });
});
