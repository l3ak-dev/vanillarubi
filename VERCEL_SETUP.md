# 🚀 Configuração Vercel Functions - Vanilla Rubi

## 📧 Configuração do Email

Para que o formulário funcione, você precisa configurar as variáveis de ambiente no Vercel.

### 1. Credenciais da Hostinger

Você precisa ter em mãos:
- **Email:** hello@vanillarubi.eu
- **Senha do email:** (a senha que você definiu para este email)

### 2. Configurar no Vercel Dashboard

1. Acesse: https://vercel.com/dashboard
2. Vá no seu projeto `vanillarubi`
3. Clique em **Settings** 
4. Clique em **Environment Variables**
5. Adicione estas duas variáveis:

```
SMTP_USER = hello@vanillarubi.eu
SMTP_PASS = sua_senha_do_email_aqui
```

⚠️ **IMPORTANTE:** 
- Coloque a senha real do email (não a senha da Hostinger)
- Certifique-se que o email está configurado corretamente na Hostinger

### 3. Redeploy

Após adicionar as variáveis:
1. Vá em **Deployments** 
2. Clique nos 3 pontos do deploy mais recente
3. Clique em **Redeploy**

### 4. Testar

Após o redeploy, teste o formulário no site para ver se os emails chegam em hello@vanillarubi.eu

## 🔧 Para desenvolvimento local

Se quiser testar localmente, crie um arquivo `.env.local` na raiz do projeto:

```bash
SMTP_USER=hello@vanillarubi.eu
SMTP_PASS=sua_senha_aqui
```

## 📬 Como será o email

O email chegará com:
- **Assunto:** 🎯 Novo Lead: [Nome] - [WAITLIST ✅/❌]
- **Remetente:** Vanilla Rubi - Sistema <hello@vanillarubi.eu>
- **Para:** hello@vanillarubi.eu
- **Template:** HTML profissional com todas as informações

## 🆘 Solução de Problemas

**Emails não chegam?**
1. Verifique se as variáveis estão corretas no Vercel
2. Confirme que o email hello@vanillarubi.eu está ativo
3. Verifique a pasta de spam
4. Olhe os logs no Vercel (Functions > View Function Logs)

**Erro 500?**
- Provavelmente as variáveis de ambiente não estão configuradas
- Verifique os logs do Vercel para mais detalhes

## ✅ Vantagens da nova solução

- ✅ Templates HTML profissionais
- ✅ Ilimitado (vs 200/mês do EmailJS)  
- ✅ Usa seu email da Hostinger
- ✅ Logs detalhados de erro
- ✅ Validação robusta
- ✅ Resposta automática configurável
- ✅ Zero dependência externa 