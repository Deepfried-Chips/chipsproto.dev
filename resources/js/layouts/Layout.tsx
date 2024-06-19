import {PropsWithChildren} from "react";
import {Link} from "@inertiajs/react";
import chipsblankie from "@/images/chipsblankie.png"
import { route } from "ziggy-js";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="flex justify-between">
                <nav
                    className="h-screen overflow-auto text-black flex flex-col items-center w-64 bg-gradient-to-tr from-yellow-300 from-5% to-orange-500">
                    <img src={chipsblankie} alt="Logo" className="w-40 mt-2" />
                    <div className="flex flex-col items-center justify-center h-full">
                        <Link
                            className="p-4 flex flex-row items-center"
                            href={route('home')}>
                            <span>
                                Home
                            </span>
                        </Link>
                        <Link
                            className="p-4 flex flex-row items-center"
                            href={route('blog')}
                        >
                            <span>
                                Blog
                            </span>
                        </Link>
                        <Link
                            className="p-4 flex flex-row items-center"
                            href={route('projects')}
                        >
                            <span>
                                Projects
                            </span>
                        </Link>
                    </div>
                    <div className="p-4">
                    </div>
                </nav>

                <main className="p-4 w-full overflow-auto h-screen">
                    {children}
                </main>
            </div>
        </>
    )
}
