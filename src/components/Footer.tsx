import { motion } from "motion/react";
import {
  MapPin,
  Phone,

  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <img
                src="/images/tklg.png"
                alt="Tangkas Taxi Lembongan"
                className="h-16 w-auto object-contain mb-2"
              />

            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted partner for exploring Nusa Lembongan's breathtaking landscapes
              and vibrant culture. Affordable car hire and personalized tours.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#car-rental"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Car Rental
                </a>
              </li>
              <li>
                <a
                  href="#tour-packages"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="#top-destinations"
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Destinations
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-emerald-400"
                />
                <span className="text-slate-300 text-sm">
                  Jungut Batu, Nusa Lembongan,Bali, Indonesia
                </span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-emerald-400"
                />
                <span className="text-slate-300 text-sm">
                  +62 822-3683-8125
                </span>
              </li>

            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-700 hover:bg-emerald-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-700 hover:bg-emerald-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-700 hover:bg-emerald-600 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-700 pt-8 text-center"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} Tangkas Taxi Service. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
