import { PrimaryLayout } from '@/presentation/layouts';
import './dashboard.scss';
import { NavBarDestop, NavBarMobile, TemplatePrimary } from '@/presentation/components';

interface DashboardProps {
    // add your props here
}

const Dashboard = ({}: DashboardProps) => {
    return (
        <PrimaryLayout>
            <NavBarDestop logoProps="FlowBee" />
            <NavBarMobile />
            <TemplatePrimary>
                <h2>add your components here</h2>
            </TemplatePrimary>
        </PrimaryLayout>
    );
};

export default Dashboard;
