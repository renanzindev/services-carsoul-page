import { Menu } from "lucide-react";
import vector from "@/assets/vector.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsSheetOpen(false); // Fechar o menu mobile após clicar
  };
  //COMENTE 0
  // comente 10

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <div className="flex items-center justify-center gap-3 text-xl font-bold tracking-wider">
          <img
            src={vector}
            alt="Logo CarSoul - Proteção Premium para Veículos"
            className="h-8 w-8 rounded shadow-sm"
            width="32"
            height="32"
          />
          <span>
            <span className="text-foreground">CAR</span>
            <span className="text-green-500">SOUL</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-green-500 hover:bg-green-500/90 text-white glow-green min-h-[44px] px-6"
            aria-label="Agendar serviço"
          >
            Agendar Agora
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button 
              variant="ghost" 
              size="icon"
              className="min-w-[44px] min-h-[44px]"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-green-500 hover:bg-green-500/90 text-white w-full min-h-[44px] text-base"
                aria-label="Agendar serviço"
              >
                Agendar Agora
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
