import { Button } from "@/components/ui/button";
import { Target, Heart, Handshake, Zap } from "lucide-react";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Empresa Familiar",
      description: "Construída com base em valores sólidos e compromisso com a excelência."
    },
    {
      icon: Target,
      title: "Qualidade",
      description: "Soluções duráveis e eficientes para processos produtivos industriais."
    },
    {
      icon: Handshake,
      title: "Parceria",
      description: "Relacionamentos de longo prazo baseados na confiança e qualidade."
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Tradição e inovação caminhando lado a lado para melhores resultados."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Sobre Nossa Empresa
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
              H.F.E Caldeiraria e Manutenção LTDA
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              "Tradição e inovação caminhando lado a lado."
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-20">
            {/* Left Content */}
            <div className="order-2 xl:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                Nossa História
              </h3>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                <p>
                  A H F E Caldeiraria e Manutenção LTDA é uma empresa familiar, construída com base em valores sólidos e no compromisso de oferecer soluções de caldeiraria e manutenção industrial com excelência.
                </p>
                <p>
                  Desde a fundação, unimos tradição, experiência e inovação para atender indústrias que buscam durabilidade, eficiência e confiabilidade em seus processos produtivos.
                </p>
                <p>
                  Com uma equipe técnica altamente qualificada e um atendimento próximo e personalizado, nos tornamos mais do que fornecedores — somos parceiros estratégicos dos nossos clientes.
                </p>
                <p>
                  Nosso compromisso vai além da entrega de um serviço: buscamos relacionamentos de longo prazo, baseados na confiança e na qualidade.
                </p>
              </div>
              
              <div className="mt-6 sm:mt-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => scrollToSection("services")}
                  className="w-full sm:w-auto"
                >
                  Conheça Nossos Serviços
                </Button>
              </div>
            </div>

            {/* Right Content - Values */}
            <div className="order-1 xl:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 sm:p-6 shadow-soft hover:shadow-elegant transition-all duration-300"
                >
                  <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-gradient-subtle rounded-xl p-6 sm:p-8 lg:p-12 border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">CNPJ</h4>
                <p className="text-sm sm:text-base text-muted-foreground">59.245.149/0001-83</p>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Horário de Funcionamento</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Seg a Qui: 07:00 às 17:00</p>
                <p className="text-sm sm:text-base text-muted-foreground">Sex: 07:00 às 16:00</p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Localização</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Rua Antônio Degaspari, Nº 1746</p>
                <p className="text-sm sm:text-base text-muted-foreground">Condomínio Uninorte II - Água Santa</p>
                <p className="text-sm sm:text-base text-muted-foreground">Piracicaba - SP, CEP: 13.413-652</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;