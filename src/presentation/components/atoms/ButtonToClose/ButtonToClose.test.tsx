import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ButtonToClose } from './ButtonToClose';

describe('<ButtonToClose />', () => {
    it('should render without crashing', () => {
        render(<ButtonToClose />);
        expect(screen.getByText('ButtonToClose works!')).toBeInTheDocument();
    });
});
