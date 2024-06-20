import React, {useState} from "react";
import {PageProps} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import {useCodeMirror} from "@/Components/Admin/Blog/Editor";
import '@/userWorker';
import {Button} from "@mui/material";
import {useForm} from "@inertiajs/react";

export default function EditorPage({auth}: PageProps) {

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex flex-col">

                <div
                    className="w-full bg-orange-500 p-4 mt-5 text-black rounded-lg shadow-mg flex justify-center items-center">
                    {/*<Button disabled={processing}>Save</Button>*/}
                </div>
            </div>
        </AdminLayout>
    )
}
