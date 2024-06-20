import React, {useState} from "react";
import {PageProps, Post} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import marked from "marked";
import {Editor} from "@/Components/Admin/Blog/Editor";
import matter from "gray-matter";
import '@/userWorker';
import {Button} from "@mui/material";
import {Link} from "@inertiajs/react";

export default function Admin({auth, posts}: PageProps<{posts: Post[]}>) {
    const [post, setPost] = useState<Post | null>(null)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const post = posts.find(post => post.id === parseInt(e.currentTarget.value));
        if (post) {

            setPost(post);

        }
    }

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex h-full mt-2">
                <div className="w-1/6 h-full bg-orange-500 rounded-lg mr-2 flex flex-col justify-between text-black">
                    <div className="overflow-auto flex justify-center items-center h-screen text-2xl font-bold">
                        {posts.map((post) => (
                            <Button key={post.id} value={post.id} onClick={handleClick}>{post.title}</Button>
                        ))}
                    </div>
                    <div className="mb-2 flex flex-row justify-center">
                        <Button href={route('admin.edit', post?.id || 0)}>EDIT</Button>
                        <Button href={route('admin.create')}>NEW</Button>
                    </div>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col items-center">
                    {post?.title == undefined ? (
                        <h1 className="text-4xl font-bold">Click on a post name to get started</h1>
                    ) : (
                        <>
                            <h1 className="text-3xl font-bold">{post?.title}</h1>
                            <div>
                                {post.document}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}
