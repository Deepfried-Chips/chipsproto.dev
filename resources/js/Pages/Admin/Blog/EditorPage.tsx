import React, {useRef, useState} from "react";
import {PageProps} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import {useCodeMirror} from "@/Components/Admin/Blog/Editor";
import {Button} from "@mui/material";
import {useForm} from "@inertiajs/react";

export default function EditorPage({auth}: PageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {value, setValue } = useCodeMirror({value: '', container: ref.current});

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex flex-col">

                <div className="p-2 mt-2 w-5 h-screen" id="codemirror-wrapper">
                    <div ref={ref}/>
                </div>

                <div
                    className="w-full bg-orange-500 p-4 mt-5 text-black rounded-lg shadow-mg flex justify-center items-center">
                </div>
            </div>
        </AdminLayout>
    )
}
