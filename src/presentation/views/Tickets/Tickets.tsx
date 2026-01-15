import {
    TemplateNavDesktop,
    NavBarDestop,
    SecondNavDesktop,
    NavBarMobile,
    TemplatePrimary,
} from '@/presentation/components';
import { PrimaryLayout } from '@/presentation/layouts';
import './tickets.scss';

interface TicketsProps {
    // add your props here
}

const Tickets = ({}: TicketsProps) => {
    return (
        <PrimaryLayout>
            <TemplateNavDesktop>
                <NavBarDestop />
                <SecondNavDesktop />
            </TemplateNavDesktop>
            <NavBarMobile />
            <TemplatePrimary>
                <h2>Tickets works!</h2>
            </TemplatePrimary>
        </PrimaryLayout>
    );
};

export default Tickets;
