"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100/50">
            <div className="max-w-[900px] mx-auto px-6 md:px-0 h-20 flex items-center justify-between">
                <Link href="/" className="font-sans font-black text-gray-900 tracking-tighter text-xl">
                    H.P.
                </Link>
                <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar py-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`mono-meta font-bold transition-all whitespace-nowrap uppercase tracking-widest text-[10px] ${pathname === item.path
                                ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                                : "text-gray-400 hover:text-gray-900 pb-1 border-b-2 border-transparent"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
