import {Post} from "@/types";
import {Button} from "@mui/material";

export default function BlogView({post, setPost}: {post: Post, setPost: (id: number | null) => void}) {

    return (
        <div className="relative mt-2 w-full h-full">
            <p className="text-5xl font-bold absolute top-0 right-0 px-2 cursor-pointer hover:underline" onClick={() => setPost(null)}>X</p>
            <div className="prose-xl dark:prose-invert prose" dangerouslySetInnerHTML={{ __html: window.md.render(post.document)}}/>
        </div>
    )
}
