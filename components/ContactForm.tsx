"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PawPrint, Mail, Phone } from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        message: '',
        email: '',
        phone: '',
        dogName: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Here you would typically send the data to your backend
    }

    return (
        <section className="py-32 bg-slate-50 w-full">
            <div className="w-full max-w-2xl rounded-xl shadow-xl p-8 mx-auto">
                <div className="flex items-center justify-center mb-6">
                    <PawPrint size={40} className="text-yellow-500 mr-2" />
                    <h3 className="text-3xl font-bold text-gray-800">
                        Wuff! Lass uns schwätzen!
                    </h3>
                </div>
                <p className="text-lg mb-8 text-gray-600">
                    Ob Fragen zum Training, Verhaltenstipps oder einfach zum Plaudern - wir sind ganz Ohr (und Schnauze)!
                </p>
                <form onSubmit={handleSubmit} className="space-y-6 text-left pt-3">
                    <div>
                        <label htmlFor="dogName" className="block text-sm font-medium text-gray-700 mb-1">
                            Name deines vierbeinigen Freundes
                        </label>
                        <Input
                            id="dogName"
                            name="dogName"
                            required
                            placeholder="Bello, Luna, ..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                            value={formData.dogName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Deine Nachricht an uns
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            placeholder="Erzähl uns, wie wir dir und deinem Fellfreund helfen können!"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                E-Mail-Adresse (optional)
                            </label>
                            <div className="relative">
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="dein-name@beispiel.de"
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Telefonnummer (optional)
                            </label>
                            <div className="relative">
                                <Input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+49 123 4567890"
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button
                            type="submit"
                            className="w-full md:w-auto px-6 mt-3 mb-2 py-3 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
                        >
                            Nachricht abschicken
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}



