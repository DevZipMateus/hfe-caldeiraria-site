import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/lovable-uploads/abe0ab82-c6f3-4d09-8f12-261b890d38ac.png"
              alt="H.F.E Caldeiraria - Logo"
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm xl:text-base"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm xl:text-base"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm xl:text-base"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm xl:text-base"
            >
              Contato
            </button>
            <Button
              variant="primary"
              onClick={() => scrollToSection("contact")}
              className="ml-4 text-sm xl:text-base px-4 xl:px-6"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-10 w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-3 text-foreground hover:text-primary transition-colors duration-300 hover:bg-accent/50 rounded-lg mx-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-3 text-foreground hover:text-primary transition-colors duration-300 hover:bg-accent/50 rounded-lg mx-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-3 text-foreground hover:text-primary transition-colors duration-300 hover:bg-accent/50 rounded-lg mx-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-3 text-foreground hover:text-primary transition-colors duration-300 hover:bg-accent/50 rounded-lg mx-2"
              >
                Contato
              </button>
              <div className="px-4 pt-2">
                <Button
                  variant="primary"
                  onClick={() => scrollToSection("contact")}
                  className="w-full"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;