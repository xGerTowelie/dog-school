export interface GalleryItem {
    image: string
    header: string
    description: string
    price: number
}

export interface GallerySliderProps {
    items: GalleryItem[]
}


