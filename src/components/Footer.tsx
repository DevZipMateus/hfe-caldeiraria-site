import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <img
                  src="/lovable-uploads/abe0ab82-c6f3-4d09-8f12-261b890d38ac.png"
                  alt="H.F.E Caldeiraria - Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
              Soluções em caldeiraria e manutenção industrial com tradição, experiência e inovação.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              CNPJ: 59.245.149/0001-83
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="tel:+5519998373476"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
                (19) 99837-3476
              </a>
              <a 
                href="mailto:contato@hfecaldeiraria.com.br"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm break-all"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
                contato@hfecaldeiraria.com.br
              </a>
              <a 
                href="mailto:orçamento@hfecaldeiraria.com.br"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm break-all"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
                orçamento@hfecaldeiraria.com.br
              </a>
              <a 
                href="https://www.google.com/maps/search/SP-308,+KM+181+-+Charqueada,+Piracicaba+-+SP,+13433-899"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div>SP-308, KM 181</div>
                  <div>Charqueada, Piracicaba - SP</div>
                  <div>13433-899</div>
                </div>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Horário</h3>
            <div className="flex items-start text-primary-foreground/80 text-xs sm:text-sm">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p>Segunda a Sexta-feira</p>
                <p>07:00 às 17:00 horas</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Serviços</h3>
            <ul className="space-y-1 sm:space-y-2 text-primary-foreground/80 text-xs sm:text-sm">
              <li>• Solda MIG MAG</li>
              <li>• Solda TIG</li>
              <li>• Solda com Eletrodo</li>
              <li>• Manutenção Industrial</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-primary-foreground/60 text-xs sm:text-sm text-center sm:text-left">
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
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://wa.me/5519998373476"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
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