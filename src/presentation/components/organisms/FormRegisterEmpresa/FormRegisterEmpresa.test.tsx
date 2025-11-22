import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { FormRegisterEmpresa } from './FormRegisterEmpresa';

describe('<FormRegisterEmpresa />', () => {
    it('should render without crashing', () => {
        render(<FormRegisterEmpresa />);
        expect(screen.getByText('FormRegisterEmpresa works!')).toBeInTheDocument();
    });
});
