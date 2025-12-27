import { PrimaryLayout } from '@/presentation/layouts';
import './dashboard.scss';

interface DashboardProps {
    // add your props here
}

const Dashboard = ({}: DashboardProps) => {
    return (
        <PrimaryLayout>
            <h1>Dashboard works!</h1>
            <h2>text one</h2>
        </PrimaryLayout>
    );
};

export default Dashboard;
