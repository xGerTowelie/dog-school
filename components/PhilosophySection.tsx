import { motion } from "framer-motion"
import Image from "next/image"

export default function PhilosophySection() {
    const philosophies = [
        {
            title: "Positive Verstärkung",
            description: "Ich setze auf positive Verstärkung und belohne gutes Verhalten, um das Lernen zu fördern und eine starke Bindung zwischen Hund und Halter aufzubauen. So lernen Hunde mit Freude und Vertrauen.",
            image: "/philosophy1.jpg?height=400&width=600"
        },
        {
            title: "Individueller Ansatz",
            description: "Jeder Hund ist einzigartig. Ich passe meine Trainingsmethoden individuell an die Persönlichkeit, Rasse und den Lernstil jedes Hundes an, um bestmögliche Ergebnisse und ein harmonisches Miteinander zu erreichen.",
            image: "/philosophy2.jpg?height=400&width=600"
        },
        {
            title: "Lebenslanges Lernen",
            description: "Hundetraining ist ein fortlaufender Prozess. Ich gebe den Haltern die nötigen Werkzeuge an die Hand, damit sie die Ausbildung ihres Hundes auch über meine Kurse hinaus erfolgreich fortsetzen können.",
            image: "/philosophy3.jpg?height=400&width=600"
        }
    ]

    return (
        <section id="Philosophie" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-center py-10 mb-16 text-slate-800">Meine Philosophie</h2>
                {philosophies.map((philosophy, index) => (
                    <motion.div
                        key={philosophy.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 md:mb-44`}
                    >
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <Image
                                src={philosophy.image}
                                alt={philosophy.title}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-10 pr-32">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-700">{philosophy.title}</h3>
                            <p className="text-base md:text-lg">{philosophy.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

