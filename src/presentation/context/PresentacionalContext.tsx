import React, { createContext } from 'react';

interface ModalData {
    state: boolean;
    type: string;
}

interface PresentacionalContextProps {
    PrimerEstado: boolean;
    setPrimerEstado: (value: boolean) => void;
    TypeLogin: string;
    setTypeLogin: (value: string) => void;
    CrearProyectoEstado: boolean;
    setCrearProyectoEstado: (value: boolean) => void;
    IdHistoria: number | null;
    setIdHistoria: (value: number | null) => void;
    CrearHistoriaEstado: boolean;
    setCrearHistoriaEstado: (value: boolean) => void;
    IdTicket: number | null;
    setIdTicket: (value: number | null) => void;
    CrearTicketEstado: boolean;
    setCrearTicketEstado: (value: boolean) => void;
    ModalVisible: ModalData;
    setModalVisible: ({ state, type }: { state: boolean; type: string }) => void;
}

const PresentacionalContext = createContext<PresentacionalContextProps>({
    PrimerEstado: false,
    setPrimerEstado: () => {},
    TypeLogin: '',
    setTypeLogin: () => {},
    CrearProyectoEstado: false,
    setCrearProyectoEstado: () => {},
    IdHistoria: null,
    setIdHistoria: () => {},
    CrearHistoriaEstado: false,
    setCrearHistoriaEstado: () => {},
    IdTicket: null,
    setIdTicket: () => {},
    CrearTicketEstado: false,
    setCrearTicketEstado: () => {},
    ModalVisible: {
        state: false,
        type: '',
    },
    setModalVisible: () => {},
});

const PresentacionalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [PrimerEstado, setPrimerEstado] = React.useState(true);
    const [TypeLogin, setTypeLogin] = React.useState('empresa');
    const [CrearProyectoEstado, setCrearProyectoEstado] = React.useState(false);
    const [IdHistoria, setIdHistoria] = React.useState<number | null>(null);
    const [CrearHistoriaEstado, setCrearHistoriaEstado] = React.useState(false);
    const [IdTicket, setIdTicket] = React.useState<number | null>(null);
    const [CrearTicketEstado, setCrearTicketEstado] = React.useState(false);
    const [ModalVisible, setModalVisible] = React.useState({
        state: false,
        type: '',
    });

    return (
        <PresentacionalContext.Provider
            value={{
                PrimerEstado,
                setPrimerEstado,
                TypeLogin,
                setTypeLogin,
                CrearProyectoEstado,
                setCrearProyectoEstado,
                IdHistoria,
                setIdHistoria,
                CrearHistoriaEstado,
                setCrearHistoriaEstado,
                IdTicket,
                setIdTicket,
                CrearTicketEstado,
                setCrearTicketEstado,
                ModalVisible,
                setModalVisible,
            }}
        >
            {children}
        </PresentacionalContext.Provider>
    );
};

export { PresentacionalContext, PresentacionalContextProvider };
