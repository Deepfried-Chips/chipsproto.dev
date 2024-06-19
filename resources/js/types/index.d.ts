import { Config } from 'ziggy-js';

export interface User {
    id: number;
    avatar: string;
    name: string;
    is_admin: boolean;
}

export interface Post {
    id: number;
    title: string;
    document: string;

}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
