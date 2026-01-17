import React, { useContext } from 'react';

import './primary-layout.scss';
import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';
import { Modal } from '@/presentation/components';

interface PrimaryLayoutProps {
    children: React.ReactNode;
}

export const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
    const globalresentationalContext = useContext(PresentacionalContext);
    return (
        <div className="primary-layout">
            {children}
            {globalresentationalContext.ModalVisible.state &&
                globalresentationalContext.ModalVisible.type === 'add-user' && (
                    <Modal>
                        <h1>es el modal add user</h1>
                    </Modal>
                )}
            {globalresentationalContext.ModalVisible.state &&
                globalresentationalContext.ModalVisible.type === 'add-items' && (
                    <Modal>
                        <h1>es el modal add items</h1>
                    </Modal>
                )}
        </div>
    );
};
