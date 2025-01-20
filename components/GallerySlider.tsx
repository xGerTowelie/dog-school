"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { GallerySliderProps } from "../types/gallery"
import { Button } from "@/components/ui/button"

export default function GallerySlider({ items }: GallerySliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showPrice, setShowPrice] = useState(false)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
        setShowPrice(false)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
        setShowPrice(false)
    }

    const togglePrice = () => {
        setShowPrice(!showPrice)
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[600px] overflow-hidden">
            <AnimatePresence initial={false} custom={currentIndex}>
                <motion.div
                    key={currentIndex}
                    custom={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={items[currentIndex].image || "/placeholder.svg"}
                        alt={items[currentIndex].header}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                        <h2 className="text-3xl font-bold mb-4">{items[currentIndex].header}</h2>
                        <p className="text-lg mb-6 line-clamp-3">{items[currentIndex].description}</p>
                        <AnimatePresence>
                            {showPrice && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="mb-4 text-2xl font-bold"
                                >
                                    Price: ${items[currentIndex].price}
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Button onClick={togglePrice} variant="secondary" className="self-start">
                            {showPrice ? "Hide Price" : "View Price"}
                        </Button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-black" />
            </button>
        </div>
    )
}


