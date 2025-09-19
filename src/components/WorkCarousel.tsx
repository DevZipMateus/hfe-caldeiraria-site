import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const WorkCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

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

    // Auto-advance every 3 seconds without pausing on hover
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      clearInterval(interval);
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

        <div className="flex justify-center">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;