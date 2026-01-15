import {
    Squares2X2Icon,
    FolderIcon,
    DocumentTextIcon,
    TicketIcon,
} from '@heroicons/react/24/outline';

import { NavigationOption } from '@/presentation/models';

const optionOne = new NavigationOption(
    '0',
    'dashboard',
    <Squares2X2Icon className="icons-global" />,
    '/dashboard'
);

const optionTwo = new NavigationOption(
    '1',
    'Projects',
    <FolderIcon className="icons-global" />,
    '/projects'
);

const optionThree = new NavigationOption(
    '2',
    'Histories',
    <DocumentTextIcon className="icons-global" />,
    '/histories'
);

const optionFour = new NavigationOption(
    '3',
    'Tickets',
    <TicketIcon className="icons-global" />,
    '/tickets'
);

export const navigationOptions = [optionOne, optionTwo, optionThree, optionFour];
