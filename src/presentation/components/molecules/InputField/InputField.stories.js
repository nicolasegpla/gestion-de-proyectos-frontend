import { InputField } from './InputField';
const meta = {
    title: 'presentation/components/molecules/InputField',
    component: InputField,
    tags: ['autodocs'],
};
export default meta;
export const Primary = {
    args: {
        labelProps: {
            label: 'Label works!',
        },
        inputProps: {
            type: 'text',
            placeholder: 'Placeholder',
            value: '',
            onChange: () => { },
            name: 'name',
        },
    },
};
