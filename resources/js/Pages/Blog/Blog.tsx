import BlogLayout from "@/layouts/BlogLayout";
import {Head} from "@inertiajs/react";
import React, {useState} from "react";
import {PageProps, Post} from "@/types";
import BlogList from "@/Components/Blog/BlogList";
import BlogView from "@/Components/Blog/BlogView";

export default function Blog({auth, posts}: PageProps<{ posts: Post[] }>) {

    const [post, setPost] = useState<Post | null>(null);

    function setActivePost(id: number | null) {

        if (id == null) {
            setPost(null);
            return
        }

        const post = posts.find((post) => post.id === id)
        if (post) {
            setPost(post)
        }

        return
    }

    return (
        <BlogLayout
            user={auth?.user}
            post={post}
        >
            <Head title="Blog"/>
            {post ? (
                <BlogView post={post} setPost={setActivePost}/>
            ) : (
                <BlogList posts={posts} setPost={setActivePost}/>
            )}
        </BlogLayout>
    )
}
