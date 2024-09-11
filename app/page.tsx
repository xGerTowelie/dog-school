'use client'

import { motion, useAnimation } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const sections = ['Home', 'Philosophy', 'Trainings', 'Produkte', 'Meine Kunden', 'Preise', 'Kontakt']

export default function DogSchoolPage() {
    const [activeSection, setActiveSection] = useState('start')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
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
        <div className="min-h-screen bg-background text-foreground">
            <Navbar activeSection={activeSection} />
            <HeroSection />
            <PhilosophySection />
            <TrainingsCarousel />
            <ProductsCarousel />
            <TestimonialsSection />
            <PricingSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

function Navbar({ activeSection }) {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-10 text-2xl font-bold text-black">
                    <Image src="/logo.png" alt="" width="384" height="209" className="w-[74px] h-[42px] mix-blend-multiply" /> Freunde fuers Leben
                </Link>
                <ul className="flex space-x-8">
                    {sections.map((section) => (
                        <li key={section}>
                            <Link
                                href={`#${section}`}
                                className={`hover:text-cyan-600 transition-colors ${sections.indexOf(section) <= sections.indexOf(activeSection)
                                    ? 'border-b-2 border-cyan-600'
                                    : ''
                                    }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

function HeroSection() {
    return (
        <section id="start" className="relative -top-[60px] h-screen flex items-center justify-center">
            <Image
                src="/hero.jpg?height=1080&width=1920"
                alt="Happy dogs"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
            <div className="relative z-10 text-center w-full py-20 bg-black/20 text-white">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold mb-4"
                >
                    Unleash Your Dog's Potential
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl mb-8"
                >
                    Expert training for happy, obedient companions
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="#contact"
                        className="bg-cyan-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-cyan-700 transition-colors"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <ChevronDown className="w-12 h-12 text-white" />
            </motion.div>
        </section>
    )
}

function PhilosophySection() {
    const philosophies = [
        {
            title: "Positive Reinforcement",
            description: "We believe in rewarding good behavior to encourage learning and build a strong bond between dogs and their owners.",
            image: "/philosophy1.jpg?height=400&width=600"
        },
        {
            title: "Individualized Approach",
            description: "Every dog is unique. We tailor our training methods to suit each dog's personality, breed, and learning style.",
            image: "/philosophy2.jpg?height=400&width=600"
        },
        {
            title: "Lifelong Learning",
            description: "Dog training is an ongoing process. We equip owners with the tools to continue their dog's education beyond our classes.",
            image: "/philosophy3.jpg?height=400&width=600"
        }
    ]

    return (
        <section id="philosophy" className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-cyan-800">Meine Philosophy</h2>
                {philosophies.map((philosophy, index) => (
                    <motion.div
                        key={philosophy.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-24`}
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
                        <div className="md:w-1/2 md:px-10">
                            <h3 className="text-2xl font-semibold mb-4 text-cyan-700">{philosophy.title}</h3>
                            <p className="text-lg">{philosophy.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

function TrainingsCarousel() {
    const trainings = [
        {
            name: 'Basic Obedience',
            image: '/placeholder.svg?height=300&width=300',
            text: 'Transform your pup into a well-mannered companion with our foundational training program.',
        },
        {
            name: 'Advanced Skills',
            image: '/placeholder.svg?height=300&width=300',
            text: 'Take your dog"s abilities to the next level with our advanced training techniques.',
        },
        {
            name: 'Behavior Modification',
            image: '/placeholder.svg?height=300&width=300',
            text: 'Address specific behavioral issues and create a harmonious relationship with your furry friend.',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const controls = useAnimation()

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trainings.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + trainings.length) % trainings.length)
    }

    useEffect(() => {
        controls.start({ opacity: [0, 1], x: [50, 0], transition: { duration: 0.8 } })
    }, [currentIndex, controls])

    return (
        <section id="trainings" className="py-24 bg-neutral-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-white">Meine Trainings im Ueberblick</h2>
                <div className="relative">
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 rounded-xl top-1/2 transform -translate-y-1/2 z-10 bg-white transition-all hover:scale-125 hover:bg-cyan-200"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:scale-125 hover:bg-cyan-200"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <motion.div
                        key={currentIndex}
                        animate={controls}
                        className="flex justify-center"
                    >
                        <Card className="w-full max-w-md bg-white">
                            <CardContent className="p-6">
                                <Image
                                    src={trainings[currentIndex].image}
                                    alt={trainings[currentIndex].name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mb-2 text-cyan-700">{trainings[currentIndex].name}</h3>
                                <p className="mb-4">{trainings[currentIndex].text}</p>
                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Learn More</Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function ProductsCarousel() {
    const products = [
        {
            name: 'Premium Dry Food',
            image: '/placeholder.svg?height=300&width=300',
            description: 'Nutrient-rich dry food for optimal health and vitality.',
            price: 49.99,
        },
        {
            name: 'Grain-Free Wet Food',
            image: '/placeholder.svg?height=300&width=300',
            description: 'Delicious grain-free wet food for sensitive stomachs.',
            price: 39.99,
        },
        {
            name: 'Dental Chews',
            image: '/placeholder.svg?height=300&width=300',
            description: 'Tasty chews that promote dental health and fresh breath.',
            price: 24.99,
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const controls = useAnimation()

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    }

    useEffect(() => {
        controls.start({ opacity: [0, 1], x: [50, 0], transition: { duration: 0.8 } })
    }, [currentIndex, controls])

    return (
        <section id="products" className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-cyan-800">Our Dog Food Products</h2>
                <div className="relative">
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-cyan-100 hover:bg-cyan-200"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-cyan-100 hover:bg-cyan-200"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <motion.div
                        key={currentIndex}
                        animate={controls}
                        className="flex justify-center"
                    >
                        <Card className="w-full max-w-md bg-white">
                            <CardContent className="p-6">
                                <Image
                                    src={products[currentIndex].image}
                                    alt={products[currentIndex].name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mb-2 text-cyan-700">{products[currentIndex].name}</h3>
                                <p className="mb-2">{products[currentIndex].description}</p>
                                <p className="text-lg font-bold mb-4 text-cyan-600">${products[currentIndex].price.toFixed(2)}</p>
                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Add to Cart</Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function TestimonialsSection() {
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
        }
    ]

    return (
        <section id="testimonials" className="py-24 bg-cyan-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-cyan-800">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
                        >
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-cyan-700">{testimonial.name}</h3>
                                    <p className="text-sm text-cyan-600">{testimonial.training}</p>
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

function PricingSection() {
    const pricingPlans = [
        { name: 'Basic Obedience', price: 199, features: ['6 weekly group classes', 'Fundamental commands', 'Socialization exercises'] },
        { name: 'Advanced Skills', price: 299, features: ['8 weekly group classes', 'Advanced commands', 'Off-leash training', 'Agility basics'] },
        { name: 'Private Training', price: 499, features: ['4 one-on-one sessions', 'Customized training plan', 'Behavior modification', 'In-home training'] },
    ]

    return (
        <section id="pricing" className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-cyan-800">Training Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg"
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-cyan-700">{plan.name}</h3>
                                <p className="text-3xl font-bold mb-4 text-cyan-600">${plan.price}</p>
                                <ul className="mb-6">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="mb-2 flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Enroll Now</Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-cyan-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-cyan-800">Get in Touch</h2>
                <div className="max-w-md mx-auto">
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-2 rounded-md border border-cyan-200 focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50" />
                        <input type="email" placeholder="Your Email" className="w-full p-2 rounded-md border border-cyan-200 focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50" />
                        <textarea placeholder="Your Message" rows={4} className="w-full p-2 rounded-md border border-cyan-200 focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"></textarea>
                        <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Send Message</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="bg-cyan-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2023 DoggyEdu. All rights reserved.</p>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            <li><Link href="/privacy" className="hover:text-cyan-300">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-cyan-300">Terms of Service</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
