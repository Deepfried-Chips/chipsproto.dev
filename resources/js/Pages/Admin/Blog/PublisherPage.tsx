import React, {useState} from "react";
import * as monaco from "monaco-editor";
import {PageProps} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import {Editor} from "@/Components/Admin/Blog/Editor";
import '@/userWorker';
import {Button} from "@mui/material";
import {useForm} from "@inertiajs/react";

export default function PublisherPage({auth}: PageProps) {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null)
    const {post, processing, data, setData} = useForm<{body: string}>();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {

        const data = editor?.getValue()

        if (data) {
            setData({
                body: data,
            })

            post(route('admin.create'))
        }

    }

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex flex-col">
                <Editor editor={editor} setEditor={setEditor}/>
                <div
                    className="w-full bg-orange-500 p-4 mt-5 text-black rounded-lg shadow-mg flex justify-center items-center">
                    <Button disabled={processing} onClick={handleSubmit}>Publish</Button>
                </div>
            </div>
        </AdminLayout>
    )
}
