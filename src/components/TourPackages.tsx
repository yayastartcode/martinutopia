import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

export default function TourPackages() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Island Tour",
      location: "Nusa Penida / Lembongan",
      duration: "3 hours",
      people: "2-6 People",
      image: "/images/rmwesnusa.webp",
      description:
        "Explore the breathtaking views of the islands. Visit iconic spots and enjoy the island vibe.",
      featured: true,
    },
    {
      id: 2,
      title: "Snorkeling Trip",
      location: "Crystal bay/Manta Bay Dan Gamat Bay",
      duration: "3 Hours",
      people: "2-10 People",
      image: "/images/snorkeling.png",
      description:
        "Dive into the crystal clear waters and swim with vibrant marine life and coral reefs.",
      featured: true,
    },
    {
      id: 3,
      title: "Mangrove Tour",
      location: "Nusa Lembongan",
      duration: "30 minutes",
      people: "2-4 People",
      image: "/images/mangrove.png",
      description:
        "A peaceful boat ride through the lush mangrove forests. serene and close to nature.",
      featured: false,
    },
    {
      id: 4,
      title: "Taxi Service",
      location: "Bali Area",
      duration: "Flexible",
      people: "1-4 People",
      image: "/images/car.jpeg",
      description:
        "Reliable taxi service for your transportation needs around Bali. Comfortable and safe.",
      featured: false,
    },
    {
      id: 5,
      title: "Rental Scooter",
      location: "Bali / Nusa Penida",
      duration: "Daily",
      people: "1-2 People",
      image: "/images/scooter.png",
      description:
        "Explore the island at your own pace with our well-maintained scooter rentals.",
      featured: false,
    },
    {
      id: 6,
      title: "Fishing",
      location: "Open Sea",
      duration: "3 Hours",
      people: "2-5 People",
      image: "/images/fishing.png",
      description:
        "Experience the thrill of fishing in the deep blue sea. Equipment and guide included.",
      featured: false,
    },
    {
      id: 7,
      title: "Ticket Boat To Bali",
      location: "Sanur / Padang Bai",
      duration: "45 Mins",
      people: "1 Person",
      image: "/images/fastboat_bali.png",
      description:
        "Fast boat transfer to Bali mainland. Safe, fast, and comfortable journey.",
      featured: false,
    },
    {
      id: 8,
      title: "Ticket Boat To Gili, Lombok",
      location: "Gili Trawangan / Air / Meno",
      duration: "1.5 - 2 Hours",
      people: "1 Person",
      image: "/images/fastboat_gili.png",
      description:
        "Direct fast boat connection to the beautiful Gili islands and Lombok.",
      featured: true,
    },
  ];

  const itemsPerPage = 4;
  const totalSlides = Math.ceil(services.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentServices = services.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
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
            Our Services
          </h2>
          <p className="text-lg text-slate-600">
            Explore our wide range of services for your perfect holiday
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors hidden md:block"
                aria-label="Previous"
              >
                <ChevronLeft size={24} className="text-slate-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors hidden md:block"
                aria-label="Next"
              >
                <ChevronRight size={24} className="text-slate-700" />
              </button>
            </>
          )}

          {/* Package Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {currentServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative border border-slate-100"
                >
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-medium z-10">
                      Top Choice
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-800 mb-3 min-h-[3.5rem] line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-600">
                        <MapPin size={16} className="mr-2 flex-shrink-0 text-green-600" />
                        <span className="truncate">{service.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Clock size={16} className="mr-2 flex-shrink-0 text-green-600" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Users size={16} className="mr-2 flex-shrink-0 text-green-600" />
                        <span>{service.people}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2 min-h-[2.5rem]">
                      {service.description}
                    </p>

                    {/* Button */}
                    <Button
                      asChild
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium"
                    >
                      <a
                        href={getWhatsAppUrl(
                          WHATSAPP_MESSAGES.tourPackage(service.title)
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${currentSlide === index
                    ? "w-8 bg-slate-800"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

