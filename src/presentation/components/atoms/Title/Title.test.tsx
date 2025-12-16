import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Title } from './Title';

describe('<Title />', () => {
    it('should render without crashing', () => {
        render(<Title />);
        expect(screen.getByText('Title works!')).toBeInTheDocument();
    });
});
