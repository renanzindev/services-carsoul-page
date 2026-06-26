import { Instagram, Facebook, Youtube } from "lucide-react";

const SimpleFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-lg sm:text-xl font-bold tracking-wider">
            <span className="text-foreground">CAR</span>
            <span className="text-green-500">SOUL</span>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/carsoulbr/"
              className="bg-secondary hover:bg-primary/20 p-2 sm:p-2.5 rounded-lg transition-smooth border border-border hover:border-primary/30 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Instagram da CarSoul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} CarSoul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
