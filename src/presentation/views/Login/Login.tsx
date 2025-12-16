import React, { useContext, useState } from 'react';
import axios from 'axios';
import { BuildingOfficeIcon, UsersIcon } from '@heroicons/react/24/outline';

import './login.scss';
import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';
import { CenterLayout } from '@/presentation/layouts';
import { Circle } from '@/presentation/components/atoms/Circle/Circle';
import {
    Button,
    FormRegisterEmpresa,
    SelectTypeUserButton,
    TemplateCenter,
    TemplateRow,
    Title,
} from '@/presentation/components';
import { useNavigateService } from '@/presentation/routes/useNavigateService';
import { useTokenStore } from '@/store/zustand/useTokenStore';

interface LoginProps {
    // add your props here
}

export const Login = () => {
    const { TypeLogin, setTypeLogin } = useContext(PresentacionalContext);

    const [loginEmpresa, setLoginEmpresa] = useState({
        email_contacto: '',
        password: '',
    });

    const handleChangeLoginEmpresa = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginEmpresa({
            ...loginEmpresa,
            [e.target.name]: e.target.value,
        });
    };

    console.log('loginEmpresa:', loginEmpresa);

    const dataInputsFieldEmpresa = [
        {
            inputProps: {
                name: 'email_contacto',
                type: 'text',
                placeholder: 'Business email address',
                value: loginEmpresa.email_contacto,
                onChange: handleChangeLoginEmpresa,
            },
        },
        {
            labelProps: { label: 'Password' },
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                value: loginEmpresa.password,
                onChange: handleChangeLoginEmpresa,
            },
        },
    ];

    const { goToDashboard, goToRegister } = useNavigateService();
    const { setToken } = useTokenStore();

    const URL_BASE = import.meta.env.VITE_URL_BASE;

    const API_URL_LOGIN_EMPRESA = `${URL_BASE}/auth/auth/login`;
    console.log('API_URL_LOGIN_EMPRESA:', API_URL_LOGIN_EMPRESA);

    const loginEmpresaFetch = async (empresa: typeof loginEmpresa) => {
        try {
            const response = await axios.post(API_URL_LOGIN_EMPRESA, empresa);
            console.log('Login empresa:', response.data);
            setLoginEmpresa({
                email_contacto: '',
                password: '',
            });
            setToken(response.data.access_token);
            goToDashboard();
            return response.data;
        } catch (error: any) {
            console.error(
                'Error al hacer login con empresa:',
                error.response?.data || error.message
            );
            throw error;
        }
    };

    const handleSubmitLoginEmpresa = async () => {
        await loginEmpresaFetch(loginEmpresa);
    };

    const [loginUsuario, setLoginUsuario] = useState({
        email: '',
        password: '',
    });

    const handleChangeLoginUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginUsuario({
            ...loginUsuario,
            [e.target.name]: e.target.value,
        });
    };

    console.log('loginUsuario:', loginUsuario);

    const dataInputsFieldUsuario = [
        {
            inputProps: {
                name: 'email',
                type: 'text',
                placeholder: 'User email address',
                value: loginUsuario.email,
                onChange: handleChangeLoginUsuario,
            },
        },
        {
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                value: loginUsuario.password,
                onChange: handleChangeLoginUsuario,
            },
        },
    ];

    const API_URL_LOGIN_USUARIO = 'http://3.238.179.242:8000/usuarios/usuarios/login';

    const loginUsuarioFetch = async (usuario: typeof loginUsuario) => {
        try {
            const response = await axios.post(API_URL_LOGIN_USUARIO, usuario);
            console.log('Login usuario:', response.data);
            setLoginUsuario({
                email: '',
                password: '',
            });
            setToken(response.data.access_token);
            goToDashboard();
            return response.data;
        } catch (error: any) {
            console.error(
                'Error al hacer login con usuario:',
                error.response?.data || error.message
            );
            throw error;
        }
    };

    const handleSubmitLoginUsuario = async () => {
        await loginUsuarioFetch(loginUsuario);
    };

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <CenterLayout>
                <Circle className="circle" />
                <Circle className="circle-two" />
                <TemplateCenter>
                    <Title text="Sign in" subText="Welcome Back!" />
                    <TemplateRow>
                        <SelectTypeUserButton
                            isActive={TypeLogin === 'empresa' ? true : false}
                            onClick={() => setTypeLogin('empresa')}
                            children={
                                <BuildingOfficeIcon
                                    className={`${TypeLogin === 'empresa' ? 'buttonActive__icon' : 'select-type-user-button__icon'}`}
                                />
                            }
                        />
                        <SelectTypeUserButton
                            isActive={TypeLogin === 'usuario' ? true : false}
                            onClick={() => setTypeLogin('usuario')}
                            children={
                                <UsersIcon
                                    className={`${TypeLogin === 'usuario' ? 'buttonActive__icon' : 'select-type-user-button__icon'}`}
                                />
                            }
                        />
                    </TemplateRow>

                    {TypeLogin === 'empresa' && (
                        <>
                            <FormRegisterEmpresa
                                buttonProps={{
                                    textButton: 'Login',
                                    onClick: handleSubmitLoginEmpresa,
                                }}
                                inputsFieldData={dataInputsFieldEmpresa}
                            />
                            <p className="link" onClick={goToRegister}>
                                Forgot Your Password?
                            </p>
                        </>
                    )}
                    {TypeLogin === 'usuario' && (
                        <>
                            <FormRegisterEmpresa
                                buttonProps={{
                                    textButton: 'Login',
                                    onClick: handleSubmitLoginUsuario,
                                }}
                                inputsFieldData={dataInputsFieldUsuario}
                            />
                            <p className="link" onClick={goToRegister}>
                                Forgot Your Password?
                            </p>
                        </>
                    )}
                </TemplateCenter>
                <p className="link" onClick={goToRegister}>
                    Company Sign Up
                </p>
                <span className="nameApp">Flowbee © 2025</span>
            </CenterLayout>
        </>
    );
};
