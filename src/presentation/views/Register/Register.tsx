import React, { useState } from 'react';
import axios from 'axios';

import './register.scss';
import { Circle, FormRegisterEmpresa, TemplateCenter, Title } from '@/presentation/components';
import { CenterLayout } from '@/presentation/layouts';
import { useNavigateService } from '@/presentation/routes/useNavigateService';

export const Register = () => {
    const [RegisterEmpresa, setRegisterEmpresa] = useState({
        nombre: '',
        email_contacto: '',
        password: '',
    });

    function handleChangeRegisterEmpresa(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setRegisterEmpresa({ ...RegisterEmpresa, [name]: value });
    }

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
                email_contacto: '',
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

    return (
        <>
            <CenterLayout>
                <Circle className="circle" />
                <Circle className="circle-two" />
                <TemplateCenter>
                    <Title text="Sign up" subText="Get Started!" />
                    <FormRegisterEmpresa
                        buttonProps={{ textButton: 'Registrar empresa', onClick: handleSubmit }}
                        inputsFieldData={dataInputsField}
                    />
                </TemplateCenter>
                <p className="link" onClick={goToLogin}>
                    Already have an account? Sign in
                </p>
                <span className="nameApp">Flowbee © 2025</span>
            </CenterLayout>
        </>
    );
};
