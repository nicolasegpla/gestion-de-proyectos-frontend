import './circle.scss';

interface CircleProps {
    className?: string;
}

export const Circle = ({ className }: CircleProps) => {
    return <div className={className}></div>;
};
