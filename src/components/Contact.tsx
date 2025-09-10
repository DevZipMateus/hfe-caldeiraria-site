import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(19) 99837-3476",
      link: "tel:+5519998373476",
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
      title: "E-mail",
      value: "hfecaldeiraria@gmail.com",
      link: "mailto:hfecaldeiraria@gmail.com",
      description: "Envie uma mensagem"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "SP-308, KM 181 - Charqueada, Piracicaba - SP, 13433-899",
      link: "https://www.google.com/maps/search/SP-308,+KM+181+-+Charqueada,+Piracicaba+-+SP,+13433-899",
      description: "Como chegar"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg à Sex: 07:00 às 17:00",
      link: null,
      description: "Horário de funcionamento"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Entre em Contato
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Vamos Conversar sobre seu <span className="text-primary">Projeto</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nossa equipe está pronta para atender suas necessidades em caldeiraria e manutenção industrial
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {info.description}
                  </p>
                  {info.link ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(info.link, "_blank")}
                    >
                      {info.value}
                    </Button>
                  ) : (
                    <p className="font-medium text-foreground">
                      {info.value}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Quick Contact */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Solicite seu Orçamento
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Entre em contato conosco através dos canais abaixo e receba um atendimento personalizado para seu projeto de caldeiraria.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://wa.me/5519998373476", "_blank")}
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Conversar pelo WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start"
                  onClick={() => window.open("tel:+5519998373476", "_blank")}
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Ligar Agora
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start"
                  onClick={() => window.open("mailto:hfecaldeiraria@gmail.com", "_blank")}
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Enviar E-mail
                </Button>
              </div>
            </div>

            {/* Right - Map */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.8234567890123!2d-47.71234567890123!3d-22.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSP-308%2C%20KM%20181%20-%20Charqueada%2C%20Piracicaba%20-%20SP%2C%2013433-899!5e0!3m2!1spt-BR!2sbr!4v1734567890123&q=SP-308,+KM+181+-+Charqueada,+Piracicaba+-+SP,+13433-899"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização H.F.E Caldeiraria - SP-308, KM 181, Charqueada, Piracicaba"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Nossa Localização
                </h4>
                <p className="text-muted-foreground mb-4">
                  SP-308, KM 181 - Charqueada, Piracicaba - SP, 13433-899
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://www.google.com/maps/search/SP-308,+KM+181+-+Charqueada,+Piracicaba+-+SP,+13433-899", "_blank")}
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