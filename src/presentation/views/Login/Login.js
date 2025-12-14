import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useState } from 'react';
import axios from 'axios';
import './login.scss';
import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';
import { CenterLayout } from '@/presentation/layouts';
import { Button, FormRegisterEmpresa, TemplateCenter } from '@/presentation/components';
import { useNavigateService } from '@/presentation/routes/useNavigateService';
import { useTokenStore } from '@/store/zustand/useTokenStore';
export const Login = ({}) => {
    const { TypeLogin, setTypeLogin } = useContext(PresentacionalContext);
    const [loginEmpresa, setLoginEmpresa] = useState({
        email_contacto: '',
        password: '',
    });
    const handleChangeLoginEmpresa = (e) => {
        setLoginEmpresa({
            ...loginEmpresa,
            [e.target.name]: e.target.value,
        });
    };
    console.log('loginEmpresa:', loginEmpresa);
    const dataInputsFieldEmpresa = [
        {
            labelProps: { label: 'Email contacto' },
            inputProps: {
                name: 'email_contacto',
                type: 'text',
                placeholder: 'email_contacto',
                value: loginEmpresa.email_contacto,
                onChange: handleChangeLoginEmpresa,
            },
        },
        {
            labelProps: { label: 'Password' },
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'password',
                value: loginEmpresa.password,
                onChange: handleChangeLoginEmpresa,
            },
        },
    ];
    const { goToDashboard, goToRegister } = useNavigateService();
    const { setToken } = useTokenStore();
    const API_URL_LOGIN_EMPRESA = 'http://3.238.179.242:8000/auth/auth/login';
    const loginEmpresaFetch = async (empresa) => {
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
        }
        catch (error) {
            console.error('Error al hacer login con empresa:', error.response?.data || error.message);
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
    const handleChangeLoginUsuario = (e) => {
        setLoginUsuario({
            ...loginUsuario,
            [e.target.name]: e.target.value,
        });
    };
    console.log('loginUsuario:', loginUsuario);
    const dataInputsFieldUsuario = [
        {
            labelProps: { label: 'Email' },
            inputProps: {
                name: 'email',
                type: 'text',
                placeholder: 'email',
                value: loginUsuario.email,
                onChange: handleChangeLoginUsuario,
            },
        },
        {
            labelProps: { label: 'Password' },
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'password',
                value: loginUsuario.password,
                onChange: handleChangeLoginUsuario,
            },
        },
    ];
    const API_URL_LOGIN_USUARIO = 'http://3.238.179.242:8000/usuarios/usuarios/login';
    const loginUsuarioFetch = async (usuario) => {
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
        }
        catch (error) {
            console.error('Error al hacer login con usuario:', error.response?.data || error.message);
            throw error;
        }
    };
    const handleSubmitLoginUsuario = async () => {
        await loginUsuarioFetch(loginUsuario);
    };
    return (_jsx(_Fragment, { children: _jsxs(CenterLayout, { children: [TypeLogin === 'none' && (_jsxs(TemplateCenter, { children: [_jsx("h1", { children: "Seleccionar tipo de Login" }), _jsxs(TemplateCenter, { children: [_jsx(Button, { textButton: "Login Empresa", onClick: () => setTypeLogin('empresa') }), _jsx(Button, { textButton: "Login Usuario", onClick: () => setTypeLogin('usuario') }), _jsx("p", { className: "link", onClick: goToRegister, children: "Register" })] })] })), TypeLogin === 'empresa' && (_jsxs(TemplateCenter, { children: [_jsx("h1", { children: "Login Empresa" }), _jsx(FormRegisterEmpresa, { buttonProps: {
                                textButton: 'Login empresa',
                                onClick: handleSubmitLoginEmpresa,
                            }, inputsFieldData: dataInputsFieldEmpresa })] })), TypeLogin === 'usuario' && (_jsxs(TemplateCenter, { children: [_jsx("h1", { children: "Login Usuario" }), _jsx(FormRegisterEmpresa, { buttonProps: {
                                textButton: 'Login usuario',
                                onClick: handleSubmitLoginUsuario,
                            }, inputsFieldData: dataInputsFieldUsuario })] }))] }) }));
};
