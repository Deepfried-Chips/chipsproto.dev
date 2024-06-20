import {Post} from "@/types";
import {Link} from "@inertiajs/react";

export default function BlogList({posts, setPost}: {posts: Post[], setPost: (id: number) => void}) {

    return (
        <div className="flex flex-col justify-center items-center h-screen text-5xl font-bold">
            {posts.map((post) => {

                return (
                    <p className="hover:underline cursor-pointer" key={post.id} onClick={() => { setPost(post.id) }}>{post.title}</p>
                )
            })}
        </div>
    )
}
