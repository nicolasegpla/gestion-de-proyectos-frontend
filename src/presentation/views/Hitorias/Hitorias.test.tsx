import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Hitorias } from './Hitorias';

describe('<Hitorias />', () => {
    it('should render without crashing', () => {
        render(<Hitorias />);
        expect(screen.getByText('Hitorias works!')).toBeInTheDocument();
    });
});
