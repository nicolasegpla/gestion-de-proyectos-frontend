import './button-user.scss';

interface ButtonUserProps {
    initials: string;
    onclik: () => void;
}

export const ButtonUser = ({ initials, onclik }: ButtonUserProps) => {
    return (
        <button className="button-user" onClick={onclik}>
            {initials}
        </button>
    );
};
