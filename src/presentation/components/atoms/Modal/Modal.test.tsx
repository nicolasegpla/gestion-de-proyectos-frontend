import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Modal } from './Modal';

describe('<Modal />', () => {
    it('should render without crashing', () => {
        render(<Modal />);
        expect(screen.getByText('Modal works!')).toBeInTheDocument();
    });
});
