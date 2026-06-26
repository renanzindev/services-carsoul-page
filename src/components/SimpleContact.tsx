import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SimpleContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simular envio (aqui você faria a chamada à API)
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Agende Seu <span className="text-green-500">Serviço</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Entre em contato e transforme seu veículo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a
              href="tel:+5531999999999"
              className="bg-card border border-border rounded-lg p-4 sm:p-6 text-center hover:border-green-500/50 transition-smooth group min-h-[120px] flex flex-col justify-center"
              aria-label="Ligar para CarSoul"
              rel="noopener noreferrer"
            >
              <div className="bg-green-500/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/20 group-hover:bg-green-500/20 transition-smooth">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
              </div>
              <div className="font-semibold mb-1 text-sm sm:text-base">Telefone</div>
              <div className="text-xs sm:text-sm text-muted-foreground">(31) 9999-9999</div>
            </a>

            <a
              href="mailto:contato@carsoul.com"
              className="bg-card border border-border rounded-lg p-4 sm:p-6 text-center hover:border-green-500/50 transition-smooth group min-h-[120px] flex flex-col justify-center"
              aria-label="Enviar email para CarSoul"
              rel="noopener noreferrer"
            >
              <div className="bg-green-500/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/20 group-hover:bg-green-500/20 transition-smooth">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
              </div>
              <div className="font-semibold mb-1 text-sm sm:text-base">Email</div>
              <div className="text-xs sm:text-sm text-muted-foreground break-words">contato@carsoul.com</div>
            </a>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 text-center hover:border-green-500/50 transition-smooth group cursor-pointer min-h-[120px] flex flex-col justify-center">
              <div className="bg-green-500/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-500/20 group-hover:bg-green-500/20 transition-smooth">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
              </div>
              <div className="font-semibold mb-1 text-sm sm:text-base">Endereço</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Belo Horizonte - MG</div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Solicite um Orçamento</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          {...field}
                          className="bg-background border-border"
                          disabled={isSubmitting}
                          aria-label="Nome completo"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone/WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(31) 99999-9999"
                          {...field}
                          className="bg-background border-border"
                          disabled={isSubmitting}
                          aria-label="Telefone ou WhatsApp"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Qual serviço você procura? Conte sobre seu veículo..."
                          {...field}
                          className="bg-background border-border min-h-[120px]"
                          disabled={isSubmitting}
                          aria-label="Mensagem"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-500/90 text-white glow-green min-h-[44px]"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleContact;
