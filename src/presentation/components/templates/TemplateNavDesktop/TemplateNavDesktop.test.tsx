import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { TemplateNavDesktop } from './TemplateNavDesktop';

describe('<TemplateNavDesktop />', () => {
    it('should render without crashing', () => {
        render(<TemplateNavDesktop />);
        expect(screen.getByText('TemplateNavDesktop works!')).toBeInTheDocument();
    });
});
