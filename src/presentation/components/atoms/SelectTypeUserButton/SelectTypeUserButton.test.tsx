import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { SelectTypeUserButton } from './SelectTypeUserButton';

describe('<SelectTypeUserButton />', () => {
    it('should render without crashing', () => {
        render(<SelectTypeUserButton />);
        expect(screen.getByText('SelectTypeUserButton works!')).toBeInTheDocument();
    });
});
