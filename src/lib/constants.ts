// WhatsApp Configuration
export const WHATSAPP_NUMBER = "6282236838125"; // Replace with actual WhatsApp number (include country code without +)

// WhatsApp Message Templates
export const WHATSAPP_MESSAGES = {
  general: "Hi! I would like to know more about TANGKAS services.",
  bookDriver: "Hi! I would like to book a personal driver in Nusa Lembongan.",
  carRental: (carType: string) =>
    `Hi! I would like to inquire about renting a ${carType}.`,
  tourPackage: (tourName: string) =>
    `Hi! I'm interested in booking: ${tourName}.`,
  customTour:
    "Hi! I would like to arrange a customized tour based on my preferences.",
  exploreDestinations: "Hi! I would like to explore destinations in Nusa Lembongan.",
};

// Generate WhatsApp URL
export const getWhatsAppUrl = (message: string = WHATSAPP_MESSAGES.general) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
