import { PrimaryLayout } from '@/presentation/layouts';
import './dashboard.scss';
import {
    NavBarDestop,
    NavBarMobile,
    SecondNavDesktop,
    TemplateNavDesktop,
    TemplatePrimary,
} from '@/presentation/components';
import { useLoginBusinessViewModel } from '@/presentation/viewmodels/useLoginBusinessViewModel';
import { getInitalsName } from '@/presentation/utils/basicFunctions';

import { PlusIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
    const viewModelBusiness = useLoginBusinessViewModel();

    const propsButtonIconAdd = {
        icon: <UserPlusIcon className="button-icon__icon" />,
    };

    const propsButtonIconUser = {
        icon: <PlusIcon className="button-icon__icon" />,
    };

    return (
        <PrimaryLayout>
            <TemplateNavDesktop>
                <NavBarDestop
                    logoProps="FlowBee"
                    onclikButtonUser={() => {}}
                    initialsButtonUser={
                        viewModelBusiness.nameUser
                            ? getInitalsName(viewModelBusiness.nameUser)
                            : 'NN'
                    }
                    propsButtonIconAdd={propsButtonIconAdd}
                    propsButtonIconUser={propsButtonIconUser}
                />
                <SecondNavDesktop />
            </TemplateNavDesktop>
            <NavBarMobile />
            <TemplatePrimary>
                <h2>add your components here</h2>
            </TemplatePrimary>
        </PrimaryLayout>
    );
};

export default Dashboard;
