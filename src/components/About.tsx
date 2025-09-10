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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Sobre Nossa Empresa
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              H.F.E Caldeiraria e Manutenção LTDA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "Tradição e inovação caminhando lado a lado."
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Nossa História
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              
              <div className="mt-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => scrollToSection("services")}
                >
                  Conheça Nossos Serviços
                </Button>
              </div>
            </div>

            {/* Right Content - Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-elegant transition-all duration-300"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-gradient-subtle rounded-xl p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">CNPJ</h4>
                <p className="text-muted-foreground">59.245.149/0001-83</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Horário de Funcionamento</h4>
                <p className="text-muted-foreground">Segunda a Sexta-feira</p>
                <p className="text-muted-foreground">07:00 às 17:00 horas</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Localização</h4>
                <p className="text-muted-foreground">SP-308, KM 181</p>
                <p className="text-muted-foreground">Charqueada, Piracicaba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;