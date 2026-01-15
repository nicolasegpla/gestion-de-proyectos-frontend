import { ReactNode } from 'react';

export class NavigationOption {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly icon: ReactNode,
        public readonly path: string
    ) {}
}
