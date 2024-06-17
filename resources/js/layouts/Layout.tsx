import {PropsWithChildren} from "react";
import {Link} from "@inertiajs/react";
import chipsblankie from "@/images/chipsblankie.png"
import { route } from "ziggy-js";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <main className="flex-col flex">
            <header className="flex justify-center">
                <nav
                    className="flex items-center mb-4 space-x-4 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500">
                    <Link href={route('home')}>
                        <img className="ml-4 w-12" src={chipsblankie} alt="Site logo"/>
                    </Link>
                    <ul className="flex space-x-4 mr-6 text-lg">
                        <li>
                            <a href={route('projects')}>Projects</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <article className="justify-center items-center text-center p-8 m-auto">
                {children}
            </article>
        </main>

    )
}
