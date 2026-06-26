import { z } from "zod";

// Função para sanitizar strings (remover caracteres perigosos)
export const sanitizeString = (str: string): string => {
  return str
    .trim()
    .replace(/[<>]/g, "") // Remove tags HTML básicas
    .replace(/javascript:/gi, "") // Remove protocolos javascript:
    .replace(/on\w+=/gi, ""); // Remove event handlers
};

// Schema de validação para formulário de contato
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços")
    .transform((val) => sanitizeString(val)),
  phone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .max(15, "Telefone deve ter no máximo 15 dígitos")
    .regex(/^[\d\s\(\)\-\+]+$/, "Telefone deve conter apenas números e caracteres permitidos")
    .transform((val) => sanitizeString(val).replace(/\D/g, "")), // Remove tudo exceto números
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres")
    .transform((val) => sanitizeString(val)),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Função para validar email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar telefone brasileiro
export const isValidBrazilianPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, "");
  return cleanPhone.length >= 10 && cleanPhone.length <= 11;
};

