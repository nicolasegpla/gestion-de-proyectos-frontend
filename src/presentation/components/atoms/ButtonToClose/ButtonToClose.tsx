import { XMarkIcon } from '@heroicons/react/24/outline';
import './button-to-close.scss';

interface ButtonToCloseProps {
    onClick?: () => void;
}

export const ButtonToClose = ({ onClick }: ButtonToCloseProps) => {
    return (
        <button onClick={onClick} className="button-to-close">
            <span className="button-to-close__span">
                <XMarkIcon className="icons-global" />
            </span>
        </button>
    );
};
