import { Shield, Film, Sparkles, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ppfImage from "@/assets/hero-ppf.jpg";
import filmImage from "@/assets/hero-film.jpg";
import nanoImage from "@/assets/hero-nano.jpg";

const services = [
  {
    icon: Shield,
    title: "PPF - Paint Protection Film",
    description:
      "Película de proteção transparente de alta tecnologia que protege a pintura original do seu veículo contra arranhões, impactos de pedras e danos ambientais.",
    image: ppfImage,
    features: ["Proteção invisível", "Auto-regeneração", "Garantia de 10 anos"],
  },
  {
    icon: Film,
    title: "Insulfilm Premium",
    description:
      "Películas automotivas de última geração que proporcionam conforto térmico, privacidade e proteção UV, mantendo a elegância do seu veículo.",
    image: filmImage,
    features: ["Redução de calor", "Proteção UV", "Privacidade total"],
  },
  {
    icon: Sparkles,
    title: "Nano Proteção Cerâmica",
    description:
      "Revestimento cerâmico de nanotecnologia que cria uma camada protetora permanente, proporcionando brilho intenso e proteção superior contra oxidação.",
    image: nanoImage,
    features: ["Brilho permanente", "Efeito hidrofóbico", "Fácil limpeza"],
  },
  {
    icon: Wrench,
    title: "Outros Serviços",
    description:
      "Oferecemos também polimento técnico, vitrificação de vidros, higienização interna e pacotes personalizados para atender todas as necessidades do seu veículo.",
    image: ppfImage,
    features: ["Polimento técnico", "Higienização", "Pacotes exclusivos"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções premium de proteção automotiva com tecnologia de ponta e acabamento impecável
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-smooth"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - Serviço automotivo premium da CarSoul`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="256"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-lg border border-primary/30">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
