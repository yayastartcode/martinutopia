import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    {
        id: 1,
        src: "/images/gallery/tk1.webp",
        alt: "Tangkas Taxi Lembongan - Gallery 1",
    },
    {
        id: 2,
        src: "/images/gallery/tk2.webp",
        alt: "Tangkas Taxi Lembongan - Gallery 2",
    },
    {
        id: 3,
        src: "/images/gallery/tk3.webp",
        alt: "Tangkas Taxi Lembongan - Gallery 3",
    },
    {
        id: 4,
        src: "/images/gallery/tk4.webp",
        alt: "Tangkas Taxi Lembongan - Gallery 4",
    },
    {
        id: 5,
        src: "/images/gallery/tk5.webp",
        alt: "Tangkas Taxi Lembongan - Gallery 5",
    },
    {
        id: 6,
        src: "/images/gallery/tk6.webp",
        alt: "Tangkas Taxi Lembongan - Gallery 6",
    },
    {
        id: 7,
        src: "/images/gallery/tk7.webp",
        alt: "Tangkas Taxi Lembongan - Gallery 7",
    },
    {
        id: 8,
        src: "/images/gallery/tk8.webp",
        alt: "Tangkas Taxi Lembongan - Gallery 8",
    },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    const goToPrevious = () => {
        if (selectedImage !== null) {
            setSelectedImage(
                selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
            );
        }
    };

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage(
                selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
            );
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
    };

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Our Gallery
                    </h2>
                    <p className="text-lg text-slate-600">
                        Explore moments from our tours and adventures
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                                    View Full
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                        onClick={closeLightbox}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                            aria-label="Close lightbox"
                        >
                            <X size={32} />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Image */}
                        <motion.img
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].alt}
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                            {selectedImage + 1} / {galleryImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
