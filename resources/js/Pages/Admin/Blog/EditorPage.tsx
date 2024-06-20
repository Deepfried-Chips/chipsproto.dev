import React, {useState} from "react";
import {PageProps} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import {Editor} from "@/Components/Admin/Blog/Editor";
import '@/userWorker';
import {Button} from "@mui/material";
import * as monaco from ".store/monaco-editor-npm-0.49.0-b2e93047b5/package";
import {useForm} from "@inertiajs/react";

export default function EditorPage({auth}: PageProps) {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null)
    const {post, processing, data, setData} = useForm();

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex flex-col">
                <Editor editor={editor} setEditor={setEditor}/>
                <div
                    className="w-full bg-orange-500 p-4 mt-5 text-black rounded-lg shadow-mg flex justify-center items-center">
                    <Button disabled={processing}>Save</Button>
                </div>
            </div>
        </AdminLayout>
    )
}
