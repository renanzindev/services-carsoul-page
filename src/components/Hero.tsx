import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
        <img
          src={heroImage}
          alt="CARRO DE LUXO RECEBENDO TRATAMENTO de PROTEÇÃO PREMIUM CARSOUL"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      {/* <div className="container mx-auto px-4 relative z-20 pt-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Proteção Premium
            <br />
            <span className="text-green-500">Para Seu Veículo</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Proteção Premium para seu veículo com tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red text-lg px-8 py-6 group"
            >
              Agendar Serviço
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-muted-foreground/30 hover:bg-secondary text-lg px-8 py-6"
            >
              Ver Serviços
            </Button>
          </div>
        </div>
      </div> */}

      {/* Stats */}
      {/* <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm md:text-base text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center border-l border-r border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm md:text-base text-muted-foreground">Veículos Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm md:text-base text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
