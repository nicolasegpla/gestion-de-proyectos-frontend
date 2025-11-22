import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { StarLayout } from '@/presentation/layouts';
import './tikets.scss';
import {
    Button,
    FormRegisterEmpresa,
    Modal,
    TemplateCenter,
    TemplateHead,
} from '@/presentation/components';
import { useNavigateService } from '@/presentation/routes/useNavigateService';
import { useTokenStore } from '@/store/zustand/useTokenStore';
import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';
import { a } from 'vitest/dist/chunks/suite.d.FvehnV49.js';

const Tikets = () => {
    const { goToHistorias } = useNavigateService();
    const { IdTicket, CrearTicketEstado, setCrearTicketEstado } = useContext(PresentacionalContext);

    const { token } = useTokenStore();
    console.log(token);

    const [Reload, setReload] = React.useState(false);
    const [DataTickets, setDataTickets] = React.useState([]);

    const API_URL = `http://3.238.179.242:8000/tickets/tickets/historia/${IdTicket}`;

    async function getProyectos(token: string) {
        // English comment: token must be a valid JWT string without "Bearer " prefix.
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    }

    async function load() {
        if (!token) throw new Error('No token found');

        const historias = await getProyectos(token);
        setDataTickets(historias);
        console.log(historias);
    }

    useEffect(() => {
        load();
    }, [Reload]);

    console.log(DataTickets);

    interface CrearTicketsProps {
        asunto: string;
        descripcion: string;
        estado: string;
        prioridad: string;
        historia_usuario_id: number | null;
    }

    const [CrearTicket, setCrearTicket] = useState<CrearTicketsProps>({
        asunto: '',
        descripcion: 'string',
        estado: 'abierto',
        prioridad: 'media',
        historia_usuario_id: 0,
    });

    useEffect(() => {
        setCrearTicket({
            ...CrearTicket,
            historia_usuario_id: IdTicket,
        });
    }, [IdTicket]);

    const handleChangeCrearTicket = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCrearTicket({
            ...CrearTicket,
            [e.target.name]: e.target.value,
        });
    };

    const dataInputsFieldCrearTickets = [
        {
            labelProps: { label: 'Asunto' },
            inputProps: {
                name: 'asunto',
                type: 'text',
                placeholder: 'Asunto del ticket',
                value: CrearTicket.asunto,
                onChange: handleChangeCrearTicket,
            },
        },
    ];

    const API_URL_CREAR_TICKET = 'http://3.238.179.242:8000/tickets/tickets/';

    const crearTicket = async (ticket: typeof CrearTicket) => {
        try {
            const response = await axios.post(API_URL_CREAR_TICKET, ticket, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Ticket creado:', response.data);
            setCrearTicket({
                asunto: '',
                descripcion: 'string',
                estado: 'abierto',
                prioridad: 'media',
                historia_usuario_id: IdTicket,
            });
            setCrearTicketEstado(false);
            return response.data;
        } catch (error: any) {
            console.error('Error al registrar Ticket:', error.response?.data || error.message);
            throw error;
        }
    };

    const handleSubmitCrearTicket = async () => {
        await crearTicket(CrearTicket);
        setReload(!Reload);
    };

    const [PatchTicket, setPatchTicket] = useState({
        estado: '',
    });

    const [IdTicketActualizar, setIdTicketActualizar] = useState<number | null>(null);

    const API_URL_ACTUALIZAR_TICKET = `http://3.238.179.242:8000/tickets/tickets/${IdTicketActualizar}/estado`;

    const actualizarTicket = async (ticket: typeof PatchTicket) => {
        try {
            const response = await axios.patch(API_URL_ACTUALIZAR_TICKET, ticket, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Ticket actualizado:', response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error al registrar Ticket:', error.response?.data || error.message);
            throw error;
        }
    };

    const handleSubmitActualizarTicket = async () => {
        await actualizarTicket(PatchTicket);
        setReload(!Reload);
    };

    const handleChangePatchTicket = (estado: string, IdTicket: number | null) => {
        setIdTicketActualizar(IdTicket);
        setPatchTicket({
            ...PatchTicket,
            estado: estado,
        });
    };

    useEffect(() => {
        handleSubmitActualizarTicket();
    }, [IdTicketActualizar, PatchTicket]);

    const API_URL_TICKETS = 'http://3.238.179.242:8000/tickets/tickets';

    async function deleteTicket(ticketId: number) {
        if (!token) throw new Error('No se encontró token para autenticación.');

        const { data } = await axios.delete(
            `${API_URL_TICKETS}/${ticketId}`, // ✅ ID en la URL
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return data;
    }

    const handleDeleteTicket = async (ticketId: number) => {
        await deleteTicket(ticketId);
        setReload(!Reload);
    };

    return (
        <>
            <StarLayout>
                <TemplateHead>
                    <h1>Tickets</h1>
                    <Button textButton="Volver a Historias" onClick={() => goToHistorias()} />
                    <Button textButton="Crear Ticket" onClick={() => setCrearTicketEstado(true)} />
                </TemplateHead>
                <div className="container-table">
                    <table className="container-table__table">
                        <thead className="container-table__table__thead">
                            <tr className="container-table__table__thead__tr">
                                <th className="container-table__table__thead__tr__th">Nombre</th>
                                <th className="container-table__table__thead__tr__th">Estado</th>
                                <th className="container-table__table__thead__tr__th">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="container-table__table__tbody">
                            {DataTickets.map((ticket: any) => (
                                <tr
                                    onClick={() => {
                                        console.log('test');
                                    }}
                                    key={ticket.id}
                                    className="container-table__table__tbody__tr"
                                >
                                    <td className="container-table__table__tbody__tr__td">
                                        {ticket.asunto}
                                    </td>
                                    <td className="container-table__table__tbody__tr__td">
                                        {ticket.estado == 'abierto' ? (
                                            <button
                                                onClick={() =>
                                                    handleChangePatchTicket('cerrado', ticket.id)
                                                }
                                                className="open"
                                            >
                                                Abierto
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    handleChangePatchTicket('abierto', ticket.id)
                                                }
                                                className="close"
                                            >
                                                Cerrado
                                            </button>
                                        )}
                                    </td>
                                    <td className="container-table__table__tbody__tr__td">
                                        <button
                                            className="btn-eliminar"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteTicket(ticket.id);
                                                console.log('Eliminar', ticket.id);
                                            }}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {CrearTicketEstado && (
                    <Modal>
                        <TemplateCenter>
                            <FormRegisterEmpresa
                                buttonProps={{
                                    textButton: 'Crear Ticket',
                                    onClick: () => handleSubmitCrearTicket(),
                                }}
                                inputsFieldData={dataInputsFieldCrearTickets}
                            />
                            <Button
                                textButton="Cerrar"
                                onClick={() => setCrearTicketEstado(false)}
                            />
                        </TemplateCenter>
                    </Modal>
                )}
            </StarLayout>
        </>
    );
};

export default Tikets;
