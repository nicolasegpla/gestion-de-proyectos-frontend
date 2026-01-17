import { ButtonToClose } from '@/presentation/components';

import './nav-modal.scss';

interface NavModalProps {
    title?: string;
    onClose: () => void;
}

export const NavModal = ({ title, onClose }: NavModalProps) => {
    return (
        <nav className={`nav-modal ${title ? 'title-visible' : 'title-non-visible'}`}>
            {title && <p className="title-visible__title">{title}</p>}
            <ButtonToClose onClick={onClose} />
        </nav>
    );
};
