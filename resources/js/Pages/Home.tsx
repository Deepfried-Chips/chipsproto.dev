import Layout from "@/layouts/Layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Deepfried Chips</h1>
            <p className="">Small hobbyist developer, high school student and silly orange protogen</p>
            <p>Yes for those that want to see my huge amount of art I'll probably make a gallery on the website, other things take precedence as of now</p>
            <div className="flex items-center justify-center flex-col mt-10">
                <h2 className="text-2xl">Planned for this website</h2>
                <ol className="list-disc">
                    <li>
                        Get the css and layouts better sorted out
                    </li>
                    <li>
                        Add functionality to the blog
                    </li>
                    <li>
                        Art gallery
                    </li>
                </ol>
            </div>

        </Layout>
    )
}
