import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext } from 'react';
const PresentacionalContext = createContext({
    PrimerEstado: false,
    setPrimerEstado: () => { },
    TypeRegister: '',
    setTypeRegister: () => { },
    TypeLogin: '',
    setTypeLogin: () => { },
    CrearProyectoEstado: false,
    setCrearProyectoEstado: () => { },
    IdHistoria: null,
    setIdHistoria: () => { },
    CrearHistoriaEstado: false,
    setCrearHistoriaEstado: () => { },
    IdTicket: null,
    setIdTicket: () => { },
    CrearTicketEstado: false,
    setCrearTicketEstado: () => { },
});
const PresentacionalContextProvider = ({ children }) => {
    const [PrimerEstado, setPrimerEstado] = React.useState(true);
    const [TypeRegister, setTypeRegister] = React.useState('none');
    const [TypeLogin, setTypeLogin] = React.useState('none');
    const [CrearProyectoEstado, setCrearProyectoEstado] = React.useState(false);
    const [IdHistoria, setIdHistoria] = React.useState(null);
    const [CrearHistoriaEstado, setCrearHistoriaEstado] = React.useState(false);
    const [IdTicket, setIdTicket] = React.useState(null);
    const [CrearTicketEstado, setCrearTicketEstado] = React.useState(false);
    return (_jsx(PresentacionalContext.Provider, { value: {
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
        }, children: children }));
};
export { PresentacionalContext, PresentacionalContextProvider };
