import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const WorkCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      src: "/images/caldeiraria-1.jpg",
      alt: "Soldador realizando trabalho de caldeiraria com proteção adequada"
    },
    {
      src: "/images/caldeiraria-2.jpg", 
      alt: "Processo de solda industrial com equipamentos profissionais"
    },
    {
      src: "/images/caldeiraria-3.jpg",
      alt: "Trabalho de soldagem especializada em estruturas metálicas"
    },
    {
      src: "/images/caldeiraria-4.jpg",
      alt: "Soldagem de precisão com tecnologia avançada"
    },
    {
      src: "/images/caldeiraria-5.jpg",
      alt: "Profissional executando serviços de caldeiraria industrial"
    },
    {
      src: "/images/caldeiraria-6.jpg",
      alt: "Soldagem industrial com faíscas e precisão técnica"
    },
    {
      src: "/images/caldeiraria-7.jpg",
      alt: "Equipe trabalhando em projeto de caldeiraria industrial"
    }
  ];

  useEffect(() => {
    if (!api) return;

    // Auto-advance every 3 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Update current slide
    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    updateCurrent();

    return () => {
      clearInterval(interval);
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Nosso Trabalho em Ação
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja nossos profissionais executando serviços de caldeiraria e soldagem com excelência e precisão
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden rounded-lg bg-muted/50">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                      style={{ backgroundColor: 'hsl(var(--muted))' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-12" />
          </Carousel>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;