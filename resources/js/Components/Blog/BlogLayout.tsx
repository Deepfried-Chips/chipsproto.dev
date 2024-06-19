import React, {PropsWithChildren} from 'react';
import {User} from "@/types";
import Layout from '@/layouts/Layout';
import {Avatar} from "@mui/material";

export default function BlogLayout({user, children}: PropsWithChildren<{user: User}>) {

    return (
        <Layout
            header={
                <div
                    className="w-full bg-orange-500 p-4 text-black rounded-lg shadow-mg flex justify-between items-center">
                    <h1 className="text-center flex-grow">Blogs (Title when looking at one)</h1>
                    <div className="px-4 py-2 flex flex-row space-x-4 justify-center items-center">
                        {!user && (
                            <a href={route('github.redirect')}>Login</a>
                        )}
                        {user && (
                            <Avatar alt="Profile pic" src={user.avatar}/>
                        )}
                    </div>
                </div>
            }
        >
            {children}
        </Layout>
    )

}
