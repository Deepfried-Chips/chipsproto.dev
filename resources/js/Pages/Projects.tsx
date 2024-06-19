import Layout from "@/layouts/Layout";
import {Head} from "@inertiajs/react";
import chipsblankie from "@/images/chipsblankie.png";
import protogensocial from "@/images/protogensocial-logosmall.png"
import ProjectCard from "@/Components/ProjectCard";

export default function Projects() {

    return (
        <Layout>
            <Head title="Projects"/>
            <ProjectCard
                title={<a href="https://youtube.com/watch?v=dQw4w9WgXcQ">chipsproto.dev</a>}
                description="This website!"
                imageUrl={chipsblankie}
            />
            <ProjectCard
                title={<a href="https://protogen.social/@DeepfriedChips">protogen.social</a>}
                description="Small mastodon instance with a protogen mascot but welcome to any group of people"
                imageUrl={protogensocial}
            />
        </Layout>
    )
}
