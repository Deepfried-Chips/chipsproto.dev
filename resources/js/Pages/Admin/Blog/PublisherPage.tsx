import React from "react";
import {PageProps} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import {Editor} from "@/Components/Admin/Blog/Editor";
import '@/userWorker';
import {Button} from "@mui/material";

export default function Admin({auth}: PageProps) {

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex flex-col">
                <Editor/>
                <div
                    className="w-full bg-orange-500 p-4 mt-5 text-black rounded-lg shadow-mg flex justify-center items-center">
                    <Button>Publish</Button>
                </div>
            </div>
        </AdminLayout>
    )
}
