import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const galleryVideos = [
    {
        id: 1,
        src: "/images/video/mrt1.mp4",
        alt: "Martin Bali Utopia Tour - Video 1",
    },
    {
        id: 2,
        src: "/images/video/mrt2.mp4",
        alt: "Martin Bali Utopia Tour - Video 2",
    },
    {
        id: 3,
        src: "/images/video/mrt3.mp4",
        alt: "Martin Bali Utopia Tour - Video 3",
    },
    {
        id: 4,
        src: "/images/video/mrt4.mp4",
        alt: "Martin Bali Utopia Tour - Video 4",
    },
    {
        id: 5,
        src: "/images/video/mrt5.mp4",
        alt: "Martin Bali Utopia Tour - Video 5",
    },
];

export default function Gallery() {
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedVideo(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedVideo(null);
        document.body.style.overflow = "auto";
    };

    const goToPrevious = () => {
        if (selectedVideo !== null) {
            setSelectedVideo(
                selectedVideo === 0 ? galleryVideos.length - 1 : selectedVideo - 1
            );
        }
    };

    const goToNext = () => {
        if (selectedVideo !== null) {
            setSelectedVideo(
                selectedVideo === galleryVideos.length - 1 ? 0 : selectedVideo + 1
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
                        Video Gallery
                    </h2>
                    <p className="text-lg text-slate-600">
                        Experience our tours and adventures in motion
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative aspect-[9/16] overflow-hidden rounded-xl cursor-pointer group shadow-lg"
                            onClick={() => openLightbox(index)}
                        >
                            <video
                                src={video.src}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                muted
                                loop
                                playsInline
                                autoPlay
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition-all duration-300">
                                    <Play className="text-white fill-white" size={32} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedVideo !== null && (
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
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20"
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
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2"
                            aria-label="Previous video"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2"
                            aria-label="Next video"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Video Player */}
                        <motion.div
                            key={selectedVideo}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                src={galleryVideos[selectedVideo].src}
                                className="max-w-full max-h-full rounded-lg shadow-2xl"
                                controls
                                autoPlay
                                playsInline
                            />
                        </motion.div>

                        {/* Video Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full z-20">
                            {selectedVideo + 1} / {galleryVideos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
