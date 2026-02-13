import { motion } from "motion/react";

export default function MapSection() {
    return (
        <section id="location" className="w-full">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center py-12 bg-slate-800"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Find Us
                </h2>
                <p className="text-lg text-slate-300">
                    Sanding, Kabupaten Gianyar, Bali
                </p>
            </motion.div>

            {/* Full Width Map */}
            <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3946.4007745633644!2d115.29307907501226!3d-8.460349991579996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjcnMzcuMyJTIDExNcKwMTcnNDQuNCJF!5e0!3m2!1sid!2sid!4v1770967572793!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Martin Tour and Travel Utopia"
                />
            </div>
        </section>
    );
}
