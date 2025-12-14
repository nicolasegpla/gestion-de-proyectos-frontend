import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Register } from './Register';
describe('<Register />', () => {
    it('should render without crashing', () => {
        render(_jsx(Register, {}));
        expect(screen.getByText('Register works!')).toBeInTheDocument();
    });
});
