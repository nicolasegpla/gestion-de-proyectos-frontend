import React from 'react';
import axios from 'axios';

import { StarLayout } from '@/presentation/layouts';
import './hitorias.scss';
import {
    Button,
    FormRegisterEmpresa,
    Modal,
    TemplateCenter,
    TemplateHead,
} from '@/presentation/components';

import { useContext, useEffect, useState } from 'react';

import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';
import { useTokenStore } from '@/store/zustand/useTokenStore';
import { useNavigateService } from '@/presentation/routes/useNavigateService';

const Hitorias = () => {
    const { IdHistoria, CrearHistoriaEstado, setCrearHistoriaEstado, setIdTicket } =
        useContext(PresentacionalContext);

    const { goToDashboard, goToTickets } = useNavigateService();

    const { token } = useTokenStore();
    console.log(token);

    const [Reload, setReload] = useState(false);

    const [DataHistorias, setDataHistorias] = useState([]);

    const API_URL = `http://3.238.179.242:8000/historias-usuario/historias-usuario/proyecto/${IdHistoria}`;

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
        setDataHistorias(historias);
        console.log(historias);
    }

    useEffect(() => {
        load();
    }, [Reload]);

    console.log(DataHistorias);

    interface CrearHistoriaProps {
        titulo: string;
        descripcion: string;
        estado: string;
        prioridad: string;
        proyecto_id: number | null;
    }

    const [CrearHistoria, setCrearHistoria] = useState<CrearHistoriaProps>({
        titulo: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: 'media',
        proyecto_id: 0,
    });

    useEffect(() => {
        setCrearHistoria({
            ...CrearHistoria,
            proyecto_id: IdHistoria,
        });
    }, [IdHistoria]);

    const handleChangeCrearHitoria = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCrearHistoria({
            ...CrearHistoria,
            [e.target.name]: e.target.value,
        });
    };

    const dataInputsFieldCrearHistoria = [
        {
            labelProps: { label: 'Titulo' },
            inputProps: {
                name: 'titulo',
                type: 'text',
                placeholder: 'Titulo de la historia',
                value: CrearHistoria.titulo,
                onChange: handleChangeCrearHitoria,
            },
        },
        {
            labelProps: { label: 'Descripción' },
            inputProps: {
                name: 'descripcion',
                type: 'text',
                placeholder: 'Descripción de la historia',
                value: CrearHistoria.descripcion,
                onChange: handleChangeCrearHitoria,
            },
        },
    ];

    console.log('CrearHistoria:', CrearHistoria);

    const API_URL_CREAR_HISTORIA = 'http://3.238.179.242:8000/historias-usuario/historias-usuario/';

    const crearHistoria = async (historia: typeof CrearHistoria) => {
        try {
            const response = await axios.post(API_URL_CREAR_HISTORIA, historia, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Historia creada:', response.data);
            setCrearHistoria({
                titulo: '',
                descripcion: '',
                estado: 'pendiente',
                prioridad: 'media',
                proyecto_id: 0,
            });
            setCrearHistoriaEstado(false);
            return response.data;
        } catch (error: any) {
            console.error('Error al registrar historia:', error.response?.data || error.message);
            throw error;
        }
    };

    const handleSubmitCrearHitoria = async () => {
        await crearHistoria(CrearHistoria);
        setReload(!Reload);
    };

    return (
        <>
            <StarLayout>
                <TemplateHead>
                    <h1>Historias de Usuario</h1>
                    <Button textButton="Volver a Proyectos" onClick={() => goToDashboard()} />
                    <Button
                        textButton="Crear Historia"
                        onClick={() => setCrearHistoriaEstado(true)}
                    />
                </TemplateHead>
                <div className="container-table">
                    <table className="container-table__table">
                        <thead className="container-table__table__thead">
                            <tr className="container-table__table__thead__tr">
                                <th className="container-table__table__thead__tr__th">Nombre</th>
                                <th className="container-table__table__thead__tr__th">
                                    Descripción
                                </th>
                            </tr>
                        </thead>
                        <tbody className="container-table__table__tbody">
                            {DataHistorias.map((historia: any) => (
                                <tr
                                    onClick={() => {
                                        setIdTicket(historia.id);
                                        goToTickets();
                                    }}
                                    key={historia.id}
                                    className="container-table__table__tbody__tr"
                                >
                                    <td className="container-table__table__tbody__tr__td">
                                        {historia.titulo}
                                    </td>
                                    <td className="container-table__table__tbody__tr__td">
                                        {historia.descripcion}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {CrearHistoriaEstado && (
                    <Modal>
                        <TemplateCenter>
                            <FormRegisterEmpresa
                                buttonProps={{
                                    textButton: 'Crear Historia',
                                    onClick: () => handleSubmitCrearHitoria(),
                                }}
                                inputsFieldData={dataInputsFieldCrearHistoria}
                            />
                            <Button
                                textButton="Cerrar"
                                onClick={() => setCrearHistoriaEstado(false)}
                            />
                        </TemplateCenter>
                    </Modal>
                )}
            </StarLayout>
        </>
    );
};

export default Hitorias;
