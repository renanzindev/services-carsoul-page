import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Info } from "lucide-react";
import ppfImage from "@/assets/carPPF.png";
import filmImage from "@/assets/ppfCar.jpg";
import nanoImage from "@/assets/hero-nano.jpg";
import mainImage from "@/assets/hero-main.jpg";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

type Service = {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  benefitImageKey?: string;
};

const benefitImageModules = import.meta.glob("@/assets/imgBeneficios/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const normalizeKey = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();

const benefitImages = Object.entries(benefitImageModules).reduce(
  (acc, [path, src]) => {
    const fileName = path.split("/").pop() ?? "";
    const key = normalizeKey(fileName.split(".")[0] ?? fileName);
    acc[key] = src;
    return acc;
  },
  {} as Record<string, string>
);

const services: Service[] = [
  {
    title: "PPF",
    description:
      "Película de proteção de pintura que evita arranhões, riscos e pequenos impactos, mantendo a originalidade da lataria.",
    image: ppfImage,
    features: [
      "Alta Resistência",
      "Efeito Self-Healing",
      "Proteção Contra Riscos",
    ],
    benefits: [
      "Protege a pintura original do veículo contra arranhões e riscos",
      "Efeito self-healing que repara pequenos danos automaticamente",
      "Resistência superior a impactos de pedras e detritos",
      "Mantém o valor de revenda do veículo",
      "Proteção contra raios UV e oxidação",
      "Fácil manutenção e limpeza",
    ],
    benefitImageKey: "ppf",
  },
  {
    title: "Filme Solar 20%",
    description:
      "Película automotiva com 20% de transparência, oferecendo equilíbrio entre aparência sofisticada, conforto térmico e proteção contra raios UV.",
    image: filmImage,
    features: [
      "Transparência 20%",
      "Proteção UV 99%",
      "Redução de Calor Moderada",
    ],
    benefits: [
      "Reduz significativamente o calor interno do veículo",
      "Proteção contra 99% dos raios UV nocivos",
      "Melhora o conforto térmico durante viagens",
      "Protege o interior do veículo contra desbotamento",
      "Aumenta a privacidade sem comprometer a visibilidade",
      "Economia de combustível com menor uso do ar condicionado",
    ],
    benefitImageKey: "filme-solar-20",
  },
  {
    title: "Nano Proteção",
    description:
      "Revestimento nanotecnológico que cria uma película invisível, aumentando o brilho e facilitando a limpeza.",
    image: filmImage,
    features: ["Brilho Intenso", "Hidrorepelência", "Proteção Prolongada"],
    benefits: [
      "Cria uma camada protetora invisível e durável",
      "Aumenta o brilho e realça a cor da pintura",
      "Efeito hidrofóbico que facilita a limpeza",
      "Protege contra manchas e sujeira",
      "Resistente a produtos químicos e detergentes",
      "Durabilidade prolongada com manutenção mínima",
    ],
    benefitImageKey: "nano-protecao",
  },
  {
    title: "Cristalização dos Vidros",
    description:
      "Tratamento que cria uma camada resistente e repelente à água, melhorando a visibilidade e aumentando a segurança na condução.",
    image: filmImage,
    features: [
      "Maior Visibilidade",
      "Efeito Hidrofóbico",
      "Facilidade na Limpeza",
    ],
    benefits: [
      "Melhora significativamente a visibilidade em dias chuvosos",
      "Água escorre rapidamente, reduzindo o uso do limpador",
      "Aumenta a segurança na condução",
      "Protege os vidros contra riscos e manchas",
      "Facilita a limpeza dos vidros",
      "Durabilidade de até 2 anos",
    ],
    benefitImageKey: "cristalizacaoVidros",
  },
  {
    title: "Espelhamento de Pintura",
    description:
      "Processo de polimento avançado que remove microarranhões e realça o brilho espelhado da pintura.",
    image: filmImage,
    features: [
      "Brilho Espelhado",
      "Remoção de Microarranhões",
      "Acabamento Premium",
    ],
    benefits: [
      "Remove microarranhões e imperfeições da pintura",
      "Realça o brilho espelhado original",
      "Restaura a aparência como novo do veículo",
      "Protege a pintura contra danos futuros",
      "Aumenta o valor estético do veículo",
      "Acabamento profissional e duradouro",
    ],
    benefitImageKey: "espelhamento-pintura",
  },
  {
    title: "Filme PS4",
    description:
      "Película automotiva de alta performance com proteção térmica e estética superior, ideal para quem busca conforto e estilo.",
    image: filmImage,
    features: ["Proteção UV 99%", "Alta Performance Térmica", "Visual Premium"],
    benefits: [
      "Proteção máxima contra raios UV (99%)",
      "Alta performance na redução de calor",
      "Visual premium e sofisticado",
      "Protege o interior contra desbotamento",
      "Melhora o conforto térmico",
      "Garantia de qualidade e durabilidade",
    ],
    benefitImageKey: "filme-ps4",
  },
];

const CarCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Proteção Premium{" "}
            <span className="text-green-500">Para Seu Veículo</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos serviços automotivos de alto padrão com tecnologia de
            ponta
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {services.map((service, index) => {
              const benefitImageSrc =
                benefitImages[
                  normalizeKey(service.benefitImageKey ?? service.title)
                ] ?? service.image;

              return (
                <CarouselItem key={index}>
                  <Card className="border-0 bg-transparent">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                        {/* Image */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden group">
                          <img
                            src={service.image}
                            alt={`${service.title} - Serviço de proteção automotiva premium da CarSoul`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                            loading="lazy"
                            decoding="async"
                            width="600"
                            height="600"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8">
                          <div>
                            <span className="text-green-500 font-semibold text-xs sm:text-sm tracking-wider uppercase">
                              Serviço Premium
                            </span>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mt-2 mb-4">
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                                {service.title}
                              </h2>
                              <Dialog
                                open={openDialog === index}
                                onOpenChange={(open) =>
                                  setOpenDialog(open ? index : null)
                                }
                              >
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center gap-2"
                                  >
                                    <Info className="h-4 w-4" />
                                    Benefícios
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="text-2xl">
                                      Benefícios - {service.title}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-6 mt-4">
                                    {/* Imagem do produto */}
                                    <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
                                      <img
                                        src={benefitImageSrc}
                                        alt={`Benefícios do serviço ${service.title} da CarSoul`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                        width="800"
                                        height="300"
                                      />
                                    </div>
                                    {/* Lista de benefícios */}
                                    <div>
                                      <h3 className="text-xl font-semibold mb-4 text-green-500">
                                        Benefícios para o seu carro:
                                      </h3>
                                      <ul className="space-y-3">
                                        {service.benefits.map((benefit, idx) => (
                                          <li
                                            key={idx}
                                            className="flex items-start gap-3"
                                          >
                                            <span className="text-green-500 mt-1.5">
                                              ✓
                                            </span>
                                            <span className="text-muted-foreground">
                                              {benefit}
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="bg-card border border-border rounded-lg p-4 text-center"
                              >
                                <div className="text-green-500 font-bold text-sm">
                                  {feature}
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* 
                          <Button
                            size="lg"
                            onClick={scrollToContact}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red group"
                          >
                            Solicitar Orçamento
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                          </Button> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4 min-w-[44px] min-h-[44px]" />
          <CarouselNext className="right-2 sm:right-4 min-w-[44px] min-h-[44px]" />
        </Carousel>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted transition-smooth"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCarousel;
