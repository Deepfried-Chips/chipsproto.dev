import React, {PropsWithChildren} from 'react';
import {User} from "@/types";
import Layout from '@/layouts/Layout';

export default function AdminLayout({user, children}: PropsWithChildren<{user: User}>) {
    return (
        <Layout
            header={
                <div
                    className="w-full bg-orange-500 p-4 text-black rounded-lg shadow-mg flex justify-between items-center">
                    <h1 className="text-center flex-grow rainbow-text">Super secret admin panel!!</h1>
                </div>
            }
        >
            {children}
        </Layout>
    )

}
