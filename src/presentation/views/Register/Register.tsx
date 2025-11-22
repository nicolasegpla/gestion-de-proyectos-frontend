import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import './register.scss';
import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';
import { Button, FormRegisterEmpresa, TemplateCenter } from '@/presentation/components';
import { CenterLayout } from '@/presentation/layouts';
import { useNavigateService } from '@/presentation/routes/useNavigateService';

export const Register = () => {
    const { TypeRegister, setTypeRegister } = useContext(PresentacionalContext);

    const [RegisterEmpresa, setRegisterEmpresa] = useState({
        nombre: '',
        identificacion_tributaria: '',
        email_contacto: '',
        telefono_contacto: '',
        direccion: '',
        pais: '',
        ciudad: '',
        password: '',
    });

    function handleChangeRegisterEmpresa(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setRegisterEmpresa({ ...RegisterEmpresa, [name]: value });
    }

    console.log('RegisterEmpresa:', RegisterEmpresa);

    const dataInputsField = [
        {
            labelProps: { label: 'Nombre de la empresa' },
            inputProps: {
                name: 'nombre',
                type: 'text',
                placeholder: 'nombre de la empresa',
                value: RegisterEmpresa.nombre,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'NIT' },
            inputProps: {
                name: 'identificacion_tributaria',
                type: 'text',
                placeholder: 'NIT',
                value: RegisterEmpresa.identificacion_tributaria,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'Email' },
            inputProps: {
                name: 'email_contacto',
                type: 'text',
                placeholder: 'Email',
                value: RegisterEmpresa.email_contacto,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'Telefono' },
            inputProps: {
                name: 'telefono_contacto',
                type: 'text',
                placeholder: 'Telefono',
                value: RegisterEmpresa.telefono_contacto,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'Direccion' },
            inputProps: {
                name: 'direccion',
                type: 'text',
                placeholder: 'Direccion',
                value: RegisterEmpresa.direccion,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'Pais' },
            inputProps: {
                name: 'pais',
                type: 'text',
                placeholder: 'Pais',
                value: RegisterEmpresa.pais,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'Ciudad' },
            inputProps: {
                name: 'ciudad',
                type: 'text',
                placeholder: 'Ciudad',
                value: RegisterEmpresa.ciudad,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'Password' },
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                value: RegisterEmpresa.password,
                onChange: handleChangeRegisterEmpresa,
            },
        },
    ];

    const { goToLogin } = useNavigateService();

    const API_URL = 'http://3.238.179.242:8000/auth/auth/registro';

    const registrarEmpresa = async (empresa: typeof RegisterEmpresa) => {
        try {
            const response = await axios.post(API_URL, empresa);
            console.log('Registro exitoso:', response.data);
            setRegisterEmpresa({
                nombre: '',
                identificacion_tributaria: '',
                email_contacto: '',
                telefono_contacto: '',
                direccion: '',
                pais: '',
                ciudad: '',
                password: '',
            });
            goToLogin();
            return response.data;
        } catch (error: any) {
            console.error('Error en el registro:', error.response?.data || error.message);
            throw error;
        }
    };

    const handleSubmit = async () => {
        await registrarEmpresa(RegisterEmpresa);
    };

    const [RegisterUsuario, setRegisterUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        rol: 'usuario',
        empresa_id: 0,
    });

    function handleChangeRegisterUsuario(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setRegisterUsuario({ ...RegisterUsuario, [name]: value });
    }

    console.log('RegisterUsuario:', RegisterUsuario);

    const inputuserdata = [
        {
            labelProps: { label: 'Nombre completo' },
            inputProps: {
                name: 'nombre',
                type: 'text',
                placeholder: 'Nombre completo',
                value: RegisterUsuario.nombre,
                onChange: handleChangeRegisterUsuario,
            },
        },
        {
            labelProps: { label: 'Email' },
            inputProps: {
                name: 'email',
                type: 'text',
                placeholder: 'Email',
                value: RegisterUsuario.email,
                onChange: handleChangeRegisterUsuario,
            },
        },
        {
            labelProps: { label: 'Password' },
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                value: RegisterUsuario.password,
                onChange: handleChangeRegisterUsuario,
            },
        },
    ];

    const API_URL_REGISTER_USER = 'http://3.238.179.242:8000/usuarios/usuarios/';

    const crearUsuario = async (usuario: typeof RegisterUsuario) => {
        try {
            const response = await axios.post(API_URL_REGISTER_USER, usuario);
            console.log('Usuario registrado:', response.data);
            setRegisterUsuario({
                nombre: '',
                email: '',
                password: '',
                rol: 'usuario',
                empresa_id: 0,
            });
            goToLogin();
            return response.data;
        } catch (error: any) {
            console.error('Error al registrar usuario:', error.response?.data || error.message);
            throw error;
        }
    };

    const handleSubmitRegisterUser = async () => {
        await crearUsuario(RegisterUsuario);
    };

    const [optionsSelect, setOptionsSelect] = useState<Array<{ id: number; nombre: string }>>([]);

    const API_URL_GET_EMPRESAS = 'http://3.238.179.242:8000/auth/auth/resumen';

    const obtenerResumen = async () => {
        try {
            const response = await axios.get(API_URL_GET_EMPRESAS);
            console.log('Resumen recibido:', response.data);
            setOptionsSelect(response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error al obtener resumen:', error.response?.data || error.message);
            throw error;
        }
    };

    useEffect(() => {
        obtenerResumen();
    }, []);

    console.log('optionsSelect:', optionsSelect);

    return (
        <>
            <CenterLayout>
                {TypeRegister === 'none' && (
                    <TemplateCenter>
                        <h1>Seleccionar tipo de registro</h1>
                        <TemplateCenter>
                            <Button
                                textButton="Registrar Empresa"
                                onClick={() => setTypeRegister('empresa')}
                            />
                            <Button
                                textButton="Registrar Usuario"
                                onClick={() => setTypeRegister('usuario')}
                            />
                            <p className="link" onClick={goToLogin}>
                                Login
                            </p>
                        </TemplateCenter>
                    </TemplateCenter>
                )}
                {TypeRegister === 'empresa' && (
                    <TemplateCenter>
                        <h1>Registrar Empresa</h1>
                        <FormRegisterEmpresa
                            buttonProps={{ textButton: 'Registrar empresa', onClick: handleSubmit }}
                            inputsFieldData={dataInputsField}
                        />
                    </TemplateCenter>
                )}
                {TypeRegister === 'usuario' && (
                    <TemplateCenter>
                        <h1>Registrar Usuario</h1>
                        <TemplateCenter>
                            <FormRegisterEmpresa
                                buttonProps={{
                                    textButton: 'Registrar usuario',
                                    onClick: handleSubmitRegisterUser,
                                }}
                                inputsFieldData={inputuserdata}
                                isSelectRequired={true}
                                selectValue={RegisterUsuario.empresa_id}
                                selectName="empresa_id"
                                onSelectChange={(e) =>
                                    setRegisterUsuario({
                                        ...RegisterUsuario,
                                        empresa_id: Number(e.target.value),
                                    })
                                }
                                optionsSelect={optionsSelect}
                            />
                        </TemplateCenter>
                    </TemplateCenter>
                )}
            </CenterLayout>
        </>
    );
};
