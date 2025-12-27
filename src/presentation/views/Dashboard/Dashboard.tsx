import { PrimaryLayout } from '@/presentation/layouts';
import './dashboard.scss';
import { NavBarDestop, NavBarMobile } from '@/presentation/components';

interface DashboardProps {
    // add your props here
}

const Dashboard = ({}: DashboardProps) => {
    return (
        <PrimaryLayout>
            <NavBarDestop />
            <NavBarMobile />
        </PrimaryLayout>
    );
};

export default Dashboard;
