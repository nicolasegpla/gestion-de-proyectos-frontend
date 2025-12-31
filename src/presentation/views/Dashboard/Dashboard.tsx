import { PrimaryLayout } from '@/presentation/layouts';
import './dashboard.scss';
import { NavBarDestop, NavBarMobile, TemplatePrimary } from '@/presentation/components';
import { useLoginBusinessViewModel } from '@/presentation/viewmodels/useLoginBusinessViewModel';
import { getInitalsName } from '@/presentation/utils/basicFunctions';

const Dashboard = () => {
    const viewModelBusiness = useLoginBusinessViewModel();
    return (
        <PrimaryLayout>
            <NavBarDestop
                logoProps="FlowBee"
                onclikButtonUser={() => {}}
                initialsButtonUser={
                    viewModelBusiness.nameUser ? getInitalsName(viewModelBusiness.nameUser) : 'CT'
                }
            />
            <NavBarMobile />
            <TemplatePrimary>
                <h2>add your components here</h2>
            </TemplatePrimary>
        </PrimaryLayout>
    );
};

export default Dashboard;
