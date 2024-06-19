import React from "react";
import {PageProps, Post} from "@/types";
import AdminLayout from "@/Components/Admin/AdminLayout";
import {Editor} from "@/Components/Admin/Blog/Editor";
import '@/userWorker';
import {Button} from "@mui/material";
import {Link} from "@inertiajs/react";

export default function Admin({auth, posts}: PageProps<{posts: Post[]}>) {

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex h-full m-2">
                <div className="w-1/6 h-full bg-orange-500 rounded-lg mr-2 flex flex-col justify-between text-black">
                    <div className="overflow-auto flex justify-center items-center h-screen text-2xl font-bold">
                        {posts.map((post) => (
                            <Link href={route('admin.edit', post.id)}>{post.title}</Link>
                        ))}
                    </div>
                    <div className="mb-4 flex justify-center">
                        <Button href={route('admin')}>NEW</Button>
                    </div>
                </div>
                <div className="w-full h-full bg-black rounded-lg">

                </div>
            </div>
        </AdminLayout>
    )
}
