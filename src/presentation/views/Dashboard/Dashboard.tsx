import { PrimaryLayout } from '@/presentation/layouts';
import './dashboard.scss';
import { NavBarDestop } from '@/presentation/components';

interface DashboardProps {
    // add your props here
}

const Dashboard = ({}: DashboardProps) => {
    return (
        <PrimaryLayout>
            <NavBarDestop />
            <h2>text one</h2>
        </PrimaryLayout>
    );
};

export default Dashboard;
