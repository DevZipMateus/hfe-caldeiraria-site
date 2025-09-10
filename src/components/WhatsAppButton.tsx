import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5519998373476", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="primary"
        size="icon"
        className="w-14 h-14 rounded-full shadow-elegant hover:shadow-xl bg-green-500 hover:bg-green-600 text-white border-0"
        onClick={handleWhatsAppClick}
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;