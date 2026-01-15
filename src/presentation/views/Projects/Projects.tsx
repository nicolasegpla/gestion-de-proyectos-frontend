import { PrimaryLayout } from '@/presentation/layouts';
import './projects.scss';
import {
    NavBarDestop,
    NavBarMobile,
    SecondNavDesktop,
    TemplateNavDesktop,
    TemplatePrimary,
} from '@/presentation/components';

interface ProjectsProps {
    // add your props here
}

const Projects = ({}: ProjectsProps) => {
    return (
        <PrimaryLayout>
            <TemplateNavDesktop>
                <NavBarDestop />
                <SecondNavDesktop />
            </TemplateNavDesktop>
            <NavBarMobile />
            <TemplatePrimary>
                <h2>Projects works!</h2>
            </TemplatePrimary>
        </PrimaryLayout>
    );
};

export default Projects;
