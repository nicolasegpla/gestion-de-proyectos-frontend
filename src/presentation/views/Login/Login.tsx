import { useContext } from 'react';
import { BuildingOfficeIcon, UsersIcon } from '@heroicons/react/24/outline';

import { PresentacionalContext } from '@/presentation/context/PresentacionalContext';
import { useNavigateService } from '@/presentation/routes/useNavigateService';
import { useLoginBusinessViewModel } from '@/presentation/viewmodels/useLoginBusinessViewModel';
import { useLoginUserViewModel } from '@/presentation/viewmodels/useLoginUserViewModel';
import { CenterLayout } from '@/presentation/layouts';
import { Circle } from '@/presentation/components/atoms/Circle/Circle';
import {
    CardResponseStatusInfo,
    FormRegisterEmpresa,
    SelectTypeUserButton,
    TemplateCenter,
    TemplateRow,
    Title,
} from '@/presentation/components';
import './login.scss';

export const Login = () => {
    const { TypeLogin, setTypeLogin } = useContext(PresentacionalContext);
    const { goToRegister } = useNavigateService();

    const businessViewModel = useLoginBusinessViewModel();
    const userViewModel = useLoginUserViewModel();

    return (
        <>
            <CenterLayout>
                <Circle className="circle" />
                <Circle className="circle-two" />
                {businessViewModel.error && (
                    <CardResponseStatusInfo
                        text={businessViewModel.error}
                        styleStatus={`${businessViewModel.error === 'Empresa no encontrada' ? 'status-warning' : 'status-error'}`}
                    />
                )}

                {userViewModel.errorUser && (
                    <CardResponseStatusInfo
                        text={userViewModel.errorUser}
                        styleStatus={`${userViewModel.errorUser === 'El usuario no existe' ? 'status-warning' : 'status-error'}`}
                    />
                )}
                <TemplateCenter>
                    <Title text="Sign in" subText="Welcome Back!" />
                    <TemplateRow>
                        <SelectTypeUserButton
                            isActive={TypeLogin === 'empresa'}
                            onClick={() => {
                                setTypeLogin('empresa');
                                businessViewModel.clearInputs();
                            }}
                            children={
                                <BuildingOfficeIcon
                                    className={`${TypeLogin === 'empresa' ? 'buttonActive__icon' : 'select-type-user-button__icon'}`}
                                />
                            }
                        />
                        <SelectTypeUserButton
                            isActive={TypeLogin === 'usuario'}
                            onClick={() => {
                                setTypeLogin('usuario');
                                userViewModel.clearInputs();
                            }}
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
                                    textButton: businessViewModel.isLoading
                                        ? 'Loading...'
                                        : 'Login',
                                    onClick: businessViewModel.isLoading
                                        ? () => {}
                                        : businessViewModel.handleLoginBusiness,
                                }}
                                inputsFieldData={businessViewModel.dataInputsFieldEmpresa}
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
                                    textButton: userViewModel.isLoadingUser
                                        ? 'Loading...'
                                        : 'Login',
                                    onClick: userViewModel.isLoadingUser
                                        ? () => {}
                                        : userViewModel.handleLoginUser,
                                }}
                                inputsFieldData={userViewModel.dataInputsFieldUsuario}
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
