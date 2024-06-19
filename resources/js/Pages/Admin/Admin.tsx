import React, {useState} from "react";
import {PageProps, Post} from "@/types";
import AdminLayout from "@/Components/Admin/AdminLayout";
import {Editor} from "@/Components/Admin/Blog/Editor";
import '@/userWorker';
import {Button} from "@mui/material";
import {Link} from "@inertiajs/react";

export default function Admin({auth, posts}: PageProps<{posts: Post[]}>) {
    const [post, setPost] = useState<Post | null>(null)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const post = posts.find(post => post.id === parseInt(e.currentTarget.name));
        if (post) {
            setPost(post);
        }
    }

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex h-full m-2">
                <div className="w-1/6 h-full bg-orange-500 rounded-lg mr-2 flex flex-col justify-between text-black">
                    <div className="overflow-auto flex justify-center items-center h-screen text-2xl font-bold">
                        {posts.map((post) => (
                            <Button key={post.id} name={post.id} onClick={handleClick}>{post.title}</Button>
                        ))}
                    </div>
                    <div className="mb-4 flex flex-row justify-center">
                        <Button href={route('admin')}>EDIT</Button>
                        <Button href={route('admin')}>NEW</Button>
                    </div>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col items-center">
                    <h1 className="text-3xl font-bold">Click on a post name to get started UwU</h1>
                    <p>Preview will be here once I write the code for that, right now clicking on a post sends you to the edit page, oopsies :3</p>
                </div>
            </div>
        </AdminLayout>
    )
}
