import React, {PropsWithChildren, useState, MouseEvent} from 'react';
import {Post, User} from "@/types";
import Layout from '@/layouts/Layout';
import {Avatar, Menu, MenuItem} from "@mui/material";
import {Link, useForm} from "@inertiajs/react";

export default function BlogLayout({user, children, post}: PropsWithChildren<{user: User, post: Post | null}>) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { get, processing} = useForm();

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        get(route('logout'))
        handleClose()
    };

    return (
        <Layout
            header={
                <div
                    className="w-full bg-orange-500 p-4 text-black rounded-lg shadow-mg flex justify-between items-center">
                    <h1 className="text-center text-2xl flex-grow">{post ? post.title : "Blogs"}</h1>
                    <div className="px-4 py-2 flex flex-row space-x-4 justify-center items-center">
                        {!user && (
                            <a href={route('github.redirect')}>Login</a>
                        )}
                        {user && (
                            <>
                                {user.is_admin && (
                                    <Link href={route('admin')} className="rainbow-text">Super secret admin panel</Link>
                                )}
                                <Avatar alt="Profile pic" src={user.avatar} onClick={handleClick}/>
                                <Menu
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    sx={{
                                        '.MuiPaper-root': { bgcolor: 'rgb(249 115 22)', color: 'black'}
                                    }}
                                >
                                    <MenuItem disabled={processing} onClick={handleLogout} sx={{bgcolor: 'rgb(249 115 22)', color: 'black'}}>Logout</MenuItem>
                                </Menu>
                            </>
                        )}
                    </div>
                </div>
            }
        >
            {children}
        </Layout>
    )

}
