import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Login } from './Login';
describe('<Login />', () => {
    it('should render without crashing', () => {
        render(_jsx(Login, {}));
        expect(screen.getByText('Login works!')).toBeInTheDocument();
    });
});
