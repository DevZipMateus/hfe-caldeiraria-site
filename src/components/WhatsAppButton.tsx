import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5519998373476", "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Button
        variant="primary"
        size="icon"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-elegant hover:shadow-xl bg-green-500 hover:bg-green-600 text-white border-0 transition-all duration-300 hover:scale-110"
        onClick={handleWhatsAppClick}
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;