import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { NavModal } from './NavModal';

describe('<NavModal />', () => {
    it('should render title and call onClose prop', () => {
        const onCloseMock = vi.fn();

        render(<NavModal title="Test Title" onClose={onCloseMock} />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();

        // Simulamos click en el botón de cerrar (asumiendo que ButtonToClose es un botón)
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onCloseMock).toHaveBeenCalled();
    });
});
