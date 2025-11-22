import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { InputField } from './InputField';

describe('<InputField />', () => {
    it('should render without crashing', () => {
        render(<InputField />);
        expect(screen.getByText('InputField works!')).toBeInTheDocument();
    });
});
