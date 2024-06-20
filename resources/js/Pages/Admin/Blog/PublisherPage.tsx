import React, {useEffect, useReducer, useRef, useState} from "react";
import {PageProps} from "@/types";
import AdminLayout from "@/layouts/AdminLayout";
import {useCodeMirror} from "@/Components/Admin/Blog/Editor";
import {Button} from "@mui/material";
import {useForm} from "@inertiajs/react";

export default function PublisherPage({auth}: PageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {value, setValue } = useCodeMirror({container: ref.current});
    const {data, setData, processing, post} = useForm<{
        body: string,
    }>();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {


        if (value) {

            console.log(value)

            setData({
                body: value,
            })

            post(route('admin.create'))
        }

    }

    return (
        <AdminLayout user={auth?.user}>
            <div className="flex flex-col">
                <div className="mt-2 w-full">
                    <div id="codemirror-wrapper" ref={ref}/>
                </div>

                <div
                    className="w-full bg-orange-500 p-4 mt-5 text-black rounded-lg shadow-mg flex justify-center items-center">
                    <Button disabled={processing} onClick={handleSubmit}>Publish</Button>
                </div>
            </div>
        </AdminLayout>
    )
}
