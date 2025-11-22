import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Label } from './Label';

describe('<Label />', () => {
    it('should render without crashing', () => {
        render(<Label />);
        expect(screen.getByText('Label works!')).toBeInTheDocument();
    });
});
