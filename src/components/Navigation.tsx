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
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-[720px] mx-auto px-6 md:px-0 h-16 flex items-center justify-between">
                <Link href="/" className="font-sans font-bold text-gray-900 tracking-tight">
                    H.P.
                </Link>
                <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar py-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-sm font-sans font-medium transition-colors whitespace-nowrap ${pathname === item.path
                                    ? "text-gray-900"
                                    : "text-gray-500 hover:text-gray-900"
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
