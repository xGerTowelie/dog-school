import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

type SectionType = 'Home' | 'Philosophie' | 'Trainings' | 'Meine Kunden' | 'Kontakt'
const sections: SectionType[] = ['Home', 'Philosophie', 'Trainings', 'Meine Kunden', 'Kontakt']

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<SectionType>('Home')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id as SectionType)
                    }
                })
            },
            { threshold: 0.5 }
        )

        sections.forEach((section) => {
            const element = document.getElementById(section)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])
    return (
        <nav className="sticky top-0 z-50 text-white bg-black shadow shadow-black/40">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold">
                    <Image src="/logo_dark.png" alt="" width="384" height="209" className="w-[50px] h-[28px] md:w-[74px] md:h-[42px] mx-8 mt-1" />
                    <span className="hidden md:inline text-white">Freunde fuers Leben</span>
                </Link>
                <ul className="hidden md:flex space-x-4 lg:space-x-8">
                    {sections.map((section) => (
                        <li key={section}>
                            <Link
                                href={`#${section}`}
                                className={"hover:text-slate-600 transition-colors"}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                            {sections.map((section) => (
                                <Link
                                    key={section}
                                    href={`#${section}`}
                                    className="text-lg font-semibold hover:text-slate-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

