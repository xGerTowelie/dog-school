'use client'

import ContactForm from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import PhilosophySection from '@/components/PhilosophySection'
import TrainingsSection from '@/components/TrainingsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function DogSchoolPage() {

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <HeroSection />
            <PhilosophySection />
            <TrainingsSection />
            <TestimonialsSection />
            <ContactForm />
            <Footer />
        </div>
    )
}

