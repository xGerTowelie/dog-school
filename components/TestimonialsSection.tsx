import { motion } from "framer-motion"
import Image from "next/image"

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "John D.",
            image: "/placeholder.svg?height=100&width=100",
            text: "The Basic Obedience class was a game-changer for my energetic Labrador. Now he's a joy to walk!",
            training: "Basic Obedience"
        },
        {
            name: "Sarah M.",
            image: "/placeholder.svg?height=100&width=100",
            text: "I was amazed at how quickly my shy rescue dog gained confidence through the Behavior Modification program.",
            training: "Behavior Modification"
        },
        {
            name: "Mike R.",
            image: "/placeholder.svg?height=100&width=100",
            text: "The Advanced Skills class taught my Border Collie amazing tricks. She loves showing off to our friends!",
            training: "Advanced Skills"
        },
        {
            name: "Emily L.",
            image: "/placeholder.svg?height=100&width=100",
            text: "The Basic Obedience class transformed my unruly puppy into a well-behaved companion. Highly recommended!",
            training: "Basic Obedience"
        },
    ]

    return (
        <section id="Meine Kunden" className="py-16 md:py-60 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 md:mb-24 text-slate-800">Was meine Kunden sagen</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-24 md:gap-y-20">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-md shadow-black/20 p-6 md:p-12"
                        >
                            <div className="overflow-hidden flex items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-slate-700">{testimonial.name}</h3>
                                    <p className="text-sm text-slate-600">{testimonial.training}</p>
                                </div>
                            </div>
                            <p className="italic text-gray-600">{testimonial.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

