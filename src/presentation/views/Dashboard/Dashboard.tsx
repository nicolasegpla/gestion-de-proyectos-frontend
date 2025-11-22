import React from 'react';
import axios from 'axios';

import { StarLayout } from '@/presentation/layouts';

import './dashboard.scss';
import {
    Button,
    FormRegisterEmpresa,
    Modal,
    TemplateCenter,
    TemplateHead,
} from '@/presentation/components';
import { useTokenStore } from '@/store/zustand/useTokenStore';

import { useContext, useEffect, useState } from 'react';

import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';
import { useNavigateService } from '@/presentation/routes/useNavigateService';

const Dashboard = () => {
    const { token } = useTokenStore();
    console.log(token);

    const [Reload, setReload] = useState(false);
    const { goToHistorias } = useNavigateService();

    const { CrearProyectoEstado, setCrearProyectoEstado, setIdHistoria } =
        useContext(PresentacionalContext);

    const [DataProyectos, setDataProyectos] = useState([]);

    const API_URL = 'http://3.238.179.242:8000/proyectos/proyectos/';

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

        const proyectos = await getProyectos(token);
        setDataProyectos(proyectos);
        console.log(proyectos);
    }

    useEffect(() => {
        load();
    }, [Reload]);

    console.log(DataProyectos);

    const [CrearProyecto, setCrearProyecto] = useState({
        nombre: '',
        descripcion: '',
    });

    const handleChangeCrearProyecto = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCrearProyecto({
            ...CrearProyecto,
            [e.target.name]: e.target.value,
        });
    };

    const dataInputsFieldCrearProyecto = [
        {
            labelProps: { label: 'Nombre' },
            inputProps: {
                name: 'nombre',
                type: 'text',
                placeholder: 'Nombre del proyecto',
                value: CrearProyecto.nombre,
                onChange: handleChangeCrearProyecto,
            },
        },
        {
            labelProps: { label: 'Descripción' },
            inputProps: {
                name: 'descripcion',
                type: 'text',
                placeholder: 'Descripción del proyecto',
                value: CrearProyecto.descripcion,
                onChange: handleChangeCrearProyecto,
            },
        },
    ];

    console.log('CrearProyecto:', CrearProyecto);

    const API_URL_CREAR_PROYECTO = 'http://3.238.179.242:8000/proyectos/proyectos/';

    const crearProyecto = async (proyecto: typeof CrearProyecto) => {
        try {
            const response = await axios.post(API_URL_CREAR_PROYECTO, proyecto, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Usuario registrado:', response.data);
            setCrearProyecto({
                nombre: '',
                descripcion: '',
            });
            setCrearProyectoEstado(false);
            return response.data;
        } catch (error: any) {
            console.error('Error al registrar usuario:', error.response?.data || error.message);
            throw error;
        }
    };

    const handleSubmitCrearProyecto = async () => {
        await crearProyecto(CrearProyecto);
        setReload(!Reload);
    };

    return (
        <>
            <StarLayout>
                <TemplateHead>
                    <h1>Proyectos</h1>
                    <Button
                        textButton="Nuevo Proyecto"
                        onClick={() => setCrearProyectoEstado(true)}
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
                            {DataProyectos.map((proyecto: any) => (
                                <tr
                                    onClick={() => {
                                        setIdHistoria(proyecto.id);
                                        goToHistorias();
                                    }}
                                    key={proyecto.id}
                                    className="container-table__table__tbody__tr"
                                >
                                    <td className="container-table__table__tbody__tr__td">
                                        {proyecto.nombre}
                                    </td>
                                    <td className="container-table__table__tbody__tr__td">
                                        {proyecto.descripcion}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {CrearProyectoEstado && (
                    <Modal>
                        <TemplateCenter>
                            <FormRegisterEmpresa
                                buttonProps={{
                                    textButton: 'Crear proyecto',
                                    onClick: () => handleSubmitCrearProyecto(),
                                }}
                                inputsFieldData={dataInputsFieldCrearProyecto}
                            />
                            <Button
                                textButton="Cerrar"
                                onClick={() => setCrearProyectoEstado(false)}
                            />
                        </TemplateCenter>
                    </Modal>
                )}
            </StarLayout>
        </>
    );
};

export default Dashboard;
