import React, {PropsWithChildren, ReactNode} from "react";
import {Link} from "@inertiajs/react";
import chipsblankie from "@/images/chipsblankie.png"
import { SiMastodon, SiTwitch } from "@icons-pack/react-simple-icons";
import { route } from "ziggy-js";

export default function Layout({ children, header }: PropsWithChildren<{ header?: ReactNode }>) {
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
                    <div className="p-4 flex flex-row space-x-4">
                        <a rel="me" href="https://protogen.social/@DeepfriedChips"><SiMastodon color="#6364FF"/></a>
                        <a rel="me" href="https://twitch.tv/deepfried_chips"><SiTwitch color="#9146FF"/></a>
                    </div>
                </nav>

                <main className="p-4 w-full overflow-visible h-screen">
                    {header && (
                        <header>
                            <div className="flex flex-col items-center mt-1">
                                {header}
                            </div>
                        </header>
                    )}
                    {children}
                </main>
            </div>
        </>
    )
}
