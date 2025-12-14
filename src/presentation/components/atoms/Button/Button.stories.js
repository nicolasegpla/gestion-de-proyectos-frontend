import { Button } from './Button';
const meta = {
    title: 'presentation/components/atoms/Button',
    component: Button,
    tags: ['autodocs'],
};
export default meta;
export const Primary = {
    args: {
        textButton: 'Click Me',
        onClick: () => {
            console.log('Button clicked');
        },
    },
};
