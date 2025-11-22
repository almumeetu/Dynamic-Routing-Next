import Link from "next/link";
import React from "react";

const Header1 = () => (
    <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
        <nav className="flex items-center justify-between max-w-[500px] mx-auto bg-gray-200 px-12 py-5 gap-4">
            <li className="list-none"><Link className="text-xl text-black bg-amber-50 p-2 hover:bg-purple-700 hover:text-white mx-2" href="/service/service1">Service 1</Link></li>
            <li className="list-none"><Link className="text-xl text-black bg-amber-50 p-2 hover:bg-purple-700 hover:text-white mx-2" href="/service/service2">Service 2</Link></li>
        </nav>
    </div>
);

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header1 />
            <main>{children}</main>
        </>
    );
}   