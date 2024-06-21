import React, {useRef} from "react";
import {PageProps, Post} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import {useCodeMirror} from "@/Components/Admin/Blog/Editor";
import {Button} from "@mui/material";
import {useForm} from "@inertiajs/react";

export default function EditorPage({auth, post}: PageProps<{post: Post}>) {
    const ref = useRef<HTMLDivElement>(null);
    const {value} = useCodeMirror({value: post.document, container: ref.current});

    const {setData, processing, post: sendForm} = useForm<{
        id: number,
        body: string,
    }>();

    const handleSubmit = () => {


        if (value) {

            console.log(value)

            setData({
                id: post.id,
                body: value,
            });

            sendForm(route('admin.editpost'));
        }

    };

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex flex-col">
                <div className="mt-2 w-full">
                    <div id="codemirror-wrapper" ref={ref}/>
                </div>

                <div
                    className="w-full bg-orange-500 p-4 mt-5 text-black rounded-lg shadow-mg flex justify-center items-center">
                    <Button disabled={processing} onClick={handleSubmit}>Edit</Button>
                </div>
            </div>
        </AdminLayout>
    )
}
