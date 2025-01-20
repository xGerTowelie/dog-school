import Image from "next/image"
import { motion } from "framer-motion"

export default function TrainingsSection() {
    const philosophies = [
        {
            title: "Welpengruppe",
            age: "8 – 16 Wochen",
            cost: "200 EUR (10er Karte)",
            description:
                "In der Welpengruppe entwickeln die Welpen ihre sozialen und motorischen Fähigkeiten durch Lauf- und Jagdspiele mit Gleichaltrigen. In diesem Alter sollte man bereits mit der Erziehung beginnen, um die Welpen positiv und stressfrei an alltägliche Situationen zu gewöhnen. Die Übungen sind spielerisch aufgebaut. Dabei ist mir ein liebevoller aber konsequenter Umgang sehr wichtig.",
            image: "/philosophy1.jpg?height=400&width=600",
        },
        {
            title: "Junghunde",
            age: "8 – 16 Wochen",
            cost: "150 EUR (10er Karte)",
            description:
                "In dieser Zeit kommen die Hunde in die Pubertät, welche manchen Besitzer an seine Grenzen bringt. In der Junghundegruppe werden die Grundkommandos in ablenkungsreichen Situationen gefestigt und zusätzlich eine starke Bindung zum Besitzer aufgebaut. Ein abwechslungsreiches Training, Stadtbesuche sowie Ausflüge in den Tierpark gehören ebenfalls dazu.",
            image: "/philosophy2.jpg?height=400&width=600",
        },
        {
            title: "Gruppentraining",
            age: "Jedes Alter",
            cost: "150 EUR (10er Karte)",
            description:
                "Im Gruppentraining lernen die Hunde, sich unter Anwesenheit anderer Hunde und Menschen auf den Besitzer zu konzentrieren und sich nicht ablenken zu lassen. Es werden viele neue Kommandos erlernt, wie der Rückruf, locker an der Leine zu laufen, Stoppkommando und die Impulskontrolle. Zusätzlich möchte ich Informationen über Körpersprache und Kommunikation unter Hunden geben. Zudem macht es Spaß, sich in einer Gruppe von Gleichgesinnten auszutauschen.",
            image: "/philosophy3.jpg?height=400&width=600",
        },
    ]

    return (
        <section id="Trainings" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-center py-10 mb-16 text-slate-800">Meine Trainings</h2>
                {philosophies.map((philosophy, index) => (
                    <motion.div
                        key={philosophy.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-16 md:mb-44`}
                    >
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <Image
                                src={philosophy.image || "/placeholder.svg"}
                                alt={philosophy.title}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                        <div className="md:w-1/2 md:px-10">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-slate-700">{philosophy.title}</h3>
                            <p className="text-sm md:text-base text-slate-600 mb-2">Alter: {philosophy.age}</p>
                            <p className="text-sm md:text-base text-slate-600 mb-4">Preis: {philosophy.cost}</p>
                            <p className="text-base md:text-lg">{philosophy.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}


