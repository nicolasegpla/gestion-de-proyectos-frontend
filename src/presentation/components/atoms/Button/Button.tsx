import './button.scss';

interface ButtonProps {
    textButton: string;
    onClick: () => void;
}

export const Button = ({ textButton, onClick }: ButtonProps) => {
    return (
        <button className="button" onClick={onClick}>
            {textButton}
        </button>
    );
};
