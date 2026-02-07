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
                    Visit us at Jungut Batu, Nusa Lembongan
                </p>
            </motion.div>

            {/* Full Width Map */}
            <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31552.66041166587!2d115.432148!3d-8.6836998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a2d95f1b9f3d6cf%3A0xb69c75c8ec2d9a60!2sTangkas%20Taxi%20Lembongan%20%26%20Island%20Tour!5e0!3m2!1sid!2sid!4v1770472217860!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tangkas Taxi Lembongan Location"
                />
            </div>
        </section>
    );
}
