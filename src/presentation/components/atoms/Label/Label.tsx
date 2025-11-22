import './label.scss';

interface LabelProps {
    label: string;
}

export const Label = ({ label }: LabelProps) => {
    return <label className="label">{label}</label>;
};
