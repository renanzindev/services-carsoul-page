# Configurações de Segurança para Produção

## Headers de Segurança Recomendados

Configure os seguintes headers no seu servidor web (Nginx, Apache, Cloudflare, etc.):

### Content Security Policy (CSP)
```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
```

### Outros Headers de Segurança
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Exemplo para Nginx

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

## Exemplo para Apache (.htaccess)

```apache
<IfModule mod_headers.c>
    Header set Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "DENY"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
```

## Validação de Formulários

O formulário de contato agora usa:
- **Zod** para validação de schema
- **React Hook Form** para gerenciamento de formulário
- **Sanitização** de inputs para prevenir XSS
- **Validação de formato** para telefone e email

## Recomendações Adicionais

1. **HTTPS**: Sempre use HTTPS em produção
2. **Rate Limiting**: Implemente rate limiting no backend para formulários
3. **CAPTCHA**: Considere adicionar reCAPTCHA para prevenir spam
4. **Validação no Backend**: Sempre valide dados no servidor também
5. **Sanitização no Backend**: Sanitize todos os inputs no servidor
6. **Logs de Segurança**: Monitore tentativas de envio suspeitas

