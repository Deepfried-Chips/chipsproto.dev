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
                title="chipsproto.dev"
                description="This website!"
                imageUrl={chipsblankie}
            />
            <ProjectCard
                title="protogen.social"
                description="Small mastodon instance with a protogen mascot but welcome to any group of people"
                imageUrl={protogensocial}
            />
        </Layout>
    )
}
