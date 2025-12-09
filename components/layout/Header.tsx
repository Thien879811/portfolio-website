import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white dark:bg-black">
            <nav className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between py-5">
                    <div className="flex items-center">
                        <span className="text-xl font-bold">Portfolio</span>
                    </div>
                    <div className="flex items-center">
                        <Link href="/about" className="text-xl font-bold">About</Link>
                        <span className="text-xl font-bold">Blog</span>
                        <span className="text-xl font-bold">Contact</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}