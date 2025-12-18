import { useRegisterBusinessViewModel } from '@/presentation/viewmodels/useRegisterBusinessViewModel';
import { CenterLayout } from '@/presentation/layouts';
import { Circle, FormRegisterEmpresa, TemplateCenter, Title } from '@/presentation/components';
import './register.scss';

export const Register = () => {
    const viewModelRegister = useRegisterBusinessViewModel();

    return (
        <>
            <CenterLayout>
                <Circle className="circle" />
                <Circle className="circle-two" />
                <TemplateCenter>
                    <Title text="Sign up" subText="Get Started!" />
                    <FormRegisterEmpresa
                        buttonProps={{
                            textButton: 'Registrar empresa',
                            onClick: viewModelRegister.handleRegisterBusiness,
                        }}
                        inputsFieldData={viewModelRegister.dataInputsField}
                    />
                </TemplateCenter>
                <p className="link" onClick={viewModelRegister.goToLogin}>
                    Already have an account? Sign in
                </p>
                <span className="nameApp">Flowbee © 2025</span>
            </CenterLayout>
        </>
    );
};
