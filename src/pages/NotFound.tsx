import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-4">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-4xl sm:text-5xl font-bold">404</h1>
        <p className="mb-2 text-xl sm:text-2xl text-muted-foreground">Página não encontrada</p>
        <p className="mb-6 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild className="min-h-[44px]">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" aria-hidden="true" />
            Voltar para a página inicial
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
