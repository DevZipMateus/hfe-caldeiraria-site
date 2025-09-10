import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/abe0ab82-c6f3-4d09-8f12-261b890d38ac.png"
                alt="H.F.E Caldeiraria - Logo"
                className="h-12 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Soluções em caldeiraria e manutenção industrial com tradição, experiência e inovação.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              CNPJ: 59.245.149/0001-83
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="tel:+5519998373476"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mr-3" />
                (19) 99837-3476
              </a>
              <a 
                href="mailto:hfecaldeiraria@gmail.com"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-3" />
                hfecaldeiraria@gmail.com
              </a>
              <a 
                href="https://maps.google.com/?q=SP-308,+KM+181+-+Charqueada,+Piracicaba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                SP-308, KM 181<br />
                Charqueada, Piracicaba
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="flex items-start text-primary-foreground/80 text-sm">
              <Clock className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p>Segunda a Sexta-feira</p>
                <p>07:00 às 17:00 horas</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>• Solda MIG MAG</li>
              <li>• Solda TIG</li>
              <li>• Solda com Eletrodo</li>
              <li>• Manutenção Industrial</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 H.F.E Caldeiraria e Manutenção LTDA. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/p/DIOHj8euOg0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5519998373476"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;