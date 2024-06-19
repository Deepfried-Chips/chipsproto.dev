import React from "react";
import {PageProps} from "@/types";
import AdminLayout from "@/Components/Admin/AdminLayout";
import {Editor} from "@/Components/Admin/Blog/Editor";

export default function Admin({auth}: PageProps) {

    return (
        <AdminLayout user={auth?.user}>
            <Editor/>
        </AdminLayout>
    )
}
