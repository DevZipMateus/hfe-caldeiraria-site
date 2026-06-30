import { Button } from "@/components/ui/button";
import { Wrench, Zap, Settings, ArrowRight } from "lucide-react";

const Services = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Wrench,
      title: "Solda MIG MAG",
      description: "Processo de soldagem com proteção gasosa, ideal para estruturas metálicas e equipamentos industriais com alta produtividade e qualidade.",
      features: ["Alta velocidade de soldagem", "Excelente acabamento", "Versatilidade de materiais", "Menor distorção"]
    },
    {
      icon: Zap,
      title: "Solda TIG",
      description: "Soldagem com eletrodo de tungstênio, proporcionando soldas de alta precisão e qualidade superior para materiais nobres.",
      features: ["Máxima precisão", "Soldas de alta qualidade", "Ideal para materiais finos", "Controle total do processo"]
    },
    {
      icon: Settings,
      title: "Solda com Eletrodo",
      description: "Processo tradicional e versátil, adequado para diversas aplicações industriais e manutenção de equipamentos.",
      features: ["Versatilidade de aplicação", "Equipamentos portáteis", "Soldas em locais de difícil acesso", "Custo-benefício ideal"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Nossos Serviços
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
              Especialidades em <span className="text-primary">Caldeiraria</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Oferecemos soluções completas em soldagem industrial com tecnologia avançada e equipe especializada
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-soft hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="outline"
                  className="w-full group text-sm sm:text-base"
                  onClick={() => window.open("https://wa.me/5519998373476", "_blank")}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-primary text-primary-foreground rounded-xl p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 sm:mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Nossa equipe técnica está pronta para avaliar seu projeto e oferecer a melhor solução em caldeiraria e manutenção industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open("https://wa.me/5519998373476", "_blank")}
                className="w-full sm:w-auto"
              >
                Falar com Especialista
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => window.open("https://wa.me/5519998373476", "_blank")}
              >
                WhatsApp Direto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;