import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2023 DoggyEdu. All rights reserved.</p>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            <li><Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-slate-300">Terms of Service</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

