import BlogLayout from "@/Components/Blog/BlogLayout";
import {Head} from "@inertiajs/react";
import React from "react";
import {PageProps} from "@/types";

export default function Blog({auth}: PageProps) {
    return (
        <BlogLayout
            user={auth?.user}
        >
            <Head title="Blog"/>
        </BlogLayout>
    )
}
