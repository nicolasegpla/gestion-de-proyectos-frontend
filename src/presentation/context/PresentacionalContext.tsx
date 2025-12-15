import React, { createContext } from 'react';

interface PresentacionalContextProps {
    PrimerEstado: boolean;
    setPrimerEstado: (value: boolean) => void;
    TypeRegister: string;
    setTypeRegister: (value: string) => void;
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
}

const PresentacionalContext = createContext<PresentacionalContextProps>({
    PrimerEstado: false,
    setPrimerEstado: () => {},
    TypeRegister: '',
    setTypeRegister: () => {},
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
});

const PresentacionalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [PrimerEstado, setPrimerEstado] = React.useState(true);
    const [TypeRegister, setTypeRegister] = React.useState('none');
    const [TypeLogin, setTypeLogin] = React.useState('empresa');
    const [CrearProyectoEstado, setCrearProyectoEstado] = React.useState(false);
    const [IdHistoria, setIdHistoria] = React.useState<number | null>(null);
    const [CrearHistoriaEstado, setCrearHistoriaEstado] = React.useState(false);
    const [IdTicket, setIdTicket] = React.useState<number | null>(null);
    const [CrearTicketEstado, setCrearTicketEstado] = React.useState(false);
    return (
        <PresentacionalContext.Provider
            value={{
                PrimerEstado,
                setPrimerEstado,
                TypeRegister,
                setTypeRegister,
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
            }}
        >
            {children}
        </PresentacionalContext.Provider>
    );
};

export { PresentacionalContext, PresentacionalContextProvider };
