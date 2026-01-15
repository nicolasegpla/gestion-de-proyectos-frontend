import {
    TemplateNavDesktop,
    NavBarDestop,
    SecondNavDesktop,
    NavBarMobile,
    TemplatePrimary,
} from '@/presentation/components';
import { PrimaryLayout } from '@/presentation/layouts';
import './histories.scss';

interface HistoriesProps {
    // add your props here
}

const Histories = ({}: HistoriesProps) => {
    return (
        <PrimaryLayout>
            <TemplateNavDesktop>
                <NavBarDestop />
                <SecondNavDesktop />
            </TemplateNavDesktop>
            <NavBarMobile />
            <TemplatePrimary>
                <h2>Histories works!</h2>
            </TemplatePrimary>
        </PrimaryLayout>
    );
};

export default Histories;
