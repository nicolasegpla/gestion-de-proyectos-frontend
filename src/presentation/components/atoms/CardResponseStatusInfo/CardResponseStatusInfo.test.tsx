import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { CardResponseStatusInfo } from './CardResponseStatusInfo';

describe('<CardResponseStatusInfo />', () => {
    it('should render without crashing', () => {
        render(<CardResponseStatusInfo />);
        expect(screen.getByText('CardResponseStatusInfo works!')).toBeInTheDocument();
    });
});
