import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(19) 3490-0285",
      link: "tel:+551934900285",
      description: "Ligue para nós"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(19) 99837-3476",
      link: "https://wa.me/5519998373476",
      description: "Converse conosco"
    },
    {
      icon: Mail,
      title: "E-mail Contato",
      value: "contato@hfecaldeiraria.com.br",
      link: "mailto:contato@hfecaldeiraria.com.br",
      description: "Contato geral"
    },
    {
      icon: Mail,
      title: "E-mail Orçamento",
      value: "orçamento@hfecaldeiraria.com.br",
      link: "mailto:orçamento@hfecaldeiraria.com.br",
      description: "Solicitar orçamento"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua Antônio Degaspari, Nº 1746 - Condomínio Uninorte II, CEP: 13.413-652, Água Santa, Piracicaba - SP",
      link: "https://www.google.com/maps/search/Rua+Antônio+Degaspari,+1746,+Piracicaba,+SP",
      description: "Como chegar"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg a Qui: 07:00–17:00 | Sex: 07:00–16:00",
      link: null,
      description: "Horário de funcionamento"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Entre em Contato
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
              Vamos Conversar sobre seu <span className="text-primary">Projeto</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Nossa equipe está pronta para atender suas necessidades em caldeiraria e manutenção industrial
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    {info.description}
                  </p>
                  {info.link ? (
                    <Button
                      variant="outline"
                      className="w-full text-xs sm:text-sm"
                      onClick={() => window.open(info.link, "_blank")}
                    >
                      {info.title === "Endereço" ? "Ver Localização" : info.value}
                    </Button>
                  ) : (
                    <p className="font-medium text-foreground text-xs sm:text-sm">
                      {info.value}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left - Quick Contact */}
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                Solicite seu Orçamento
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Entre em contato conosco através dos canais abaixo e receba um atendimento personalizado para seu projeto de caldeiraria.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full justify-start text-sm sm:text-base"
                  onClick={() => window.open("https://wa.me/5519998373476", "_blank")}
                >
                  <MessageCircle className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Conversar pelo WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start text-sm sm:text-base"
                  onClick={() => window.open("tel:+551934900285", "_blank")}
                >
                  <Phone className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Ligar Agora
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start text-sm sm:text-base"
                  onClick={() => window.open("mailto:orçamento@hfecaldeiraria.com.br", "_blank")}
                >
                  <Mail className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Solicitar Orçamento por E-mail
                </Button>
              </div>
            </div>

            {/* Right - Map */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps?q=Rua+Antônio+Degaspari,+1746,+Piracicaba,+SP&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização H.F.E Caldeiraria - Rua Antônio Degaspari, 1746, Piracicaba"
                className="sm:h-[400px] lg:h-[450px]"
              />
              <div className="p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  Nossa Localização
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Rua Antônio Degaspari, Nº 1746 - Condomínio Uninorte II, CEP: 13.413-652, Água Santa, Piracicaba - SP
                </p>
                <Button 
                  variant="outline" 
                  className="w-full text-sm sm:text-base"
                  onClick={() => window.open("https://www.google.com/maps/search/Rua+Antônio+Degaspari,+1746,+Piracicaba,+SP", "_blank")}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;