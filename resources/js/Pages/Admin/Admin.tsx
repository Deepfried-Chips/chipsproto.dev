import React from "react";
import {PageProps} from "@/types";
import AdminLayout from "@/Components/Admin/AdminLayout";

export default function Admin({auth}: PageProps) {

    return (
        <AdminLayout user={auth?.user}>

        </AdminLayout>
    )
}
