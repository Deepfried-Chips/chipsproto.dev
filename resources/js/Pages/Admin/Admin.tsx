import React, {useState} from "react";
import {PageProps, Post} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
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
                    <div className="overflow-auto flex flex-col justify-center items-center h-screen text-2xl font-bold">
                        {posts.map((post) => (
                            <Button key={post.id} value={post.id} onClick={handleClick}>{post.title}</Button>
                        ))}
                    </div>
                    <div className="mb-2 flex flex-row justify-center">
                        <Button href={route('admin.edit', post?.id || 0)}>EDIT</Button>
                        <Button href={route('admin.create')}>NEW</Button>
                    </div>
                </div>
                <div className="w-full h-full rounded-lg flex flex-col">
                    {post?.title == undefined ? (
                        <div className="flex flex-col h-full items-center">
                            <h1 className="text-4xl font-bold">Click on a post name to get started</h1>
                        </div>
                    ) : (
                        <>
                        <h1 className="text-3xl font-bold p-2 text-center">{post?.title}</h1>
                            <div className="text-2xl p-2" dangerouslySetInnerHTML={{__html: window.md.render(post.document)}}/>

                        </>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}
