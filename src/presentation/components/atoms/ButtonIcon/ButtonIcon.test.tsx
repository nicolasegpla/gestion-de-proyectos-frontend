import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ButtonIcon } from './ButtonIcon';

describe('<ButtonIcon />', () => {
    it('should render without crashing', () => {
        render(<ButtonIcon />);
        expect(screen.getByText('ButtonIcon works!')).toBeInTheDocument();
    });
});
