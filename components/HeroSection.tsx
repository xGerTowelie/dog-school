import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section id="Home" className="relative -top-[60px] h-screen flex items-center justify-center">
            <Image
                src="/hero.jpg?height=1080&width=1920"
                alt="Happy dogs"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
            <div className="relative z-10 text-center w-full py-20 bg-black/40 text-white">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Unleash Your Dog{"'"}s Potential
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl mb-8"
                >
                    Finde das passende Training für dich und deinen Hund
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="#Kontakt"
                        className="bg-black/60 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black hover:scale-110 transition-colors"
                    >
                        Kontaktiere mich
                    </Link>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
            >
                <ChevronDown className="w-12 h-12 text-white" />
            </motion.div>
        </section>
    )
}

