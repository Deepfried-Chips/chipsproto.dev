import React, {useState} from "react";
import {PageProps} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import {useCodeMirror} from "@/Components/Admin/Blog/Editor";
import '@/userWorker';
import {Button} from "@mui/material";
import {useForm} from "@inertiajs/react";

export default function PublisherPage({auth}: PageProps) {

    /*const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {


        if (data) {
            setData({
                body: data,
            })

            post(route('admin.create'))
        }

    }*/

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex flex-col">
                <div
                    className="w-full bg-orange-500 p-4 mt-5 text-black rounded-lg shadow-mg flex justify-center items-center">
                    {/*<Button disabled={processing} onClick={handleSubmit}>Publish</Button>*/}
                </div>
            </div>
        </AdminLayout>
    )
}
