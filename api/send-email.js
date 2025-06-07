import nodemailer from 'nodemailer';

// Configuração SMTP da Hostinger
const transporter = nodemailer.createTransporter({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false, // true para 465, false para outras portas
  auth: {
    user: process.env.SMTP_USER, // hello@vanillarubi.eu
    pass: process.env.SMTP_PASS  // senha do email
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

// Template HTML profissional
const createEmailTemplate = (data) => {
  const {
    name,
    email,
    instagram,
    journey,
    services,
    readiness,
    waitlist,
    language,
    date,
    source
  } = data;

  return `
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo Lead - Vanilla Rubi</title>
    <style>
        body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #5a0016 0%, #7a0020 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .content {
            padding: 30px;
        }
        .section {
            background-color: #f8f9fa;
            border-left: 4px solid #5a0016;
            margin: 20px 0;
            padding: 20px;
            border-radius: 0 4px 4px 0;
        }
        .section h2 {
            color: #5a0016;
            margin: 0 0 15px 0;
            font-size: 18px;
            font-weight: 600;
        }
        .field {
            margin: 12px 0;
            display: flex;
            align-items: flex-start;
        }
        .field-label {
            font-weight: 600;
            color: #5a0016;
            min-width: 120px;
            margin-right: 10px;
        }
        .field-value {
            flex: 1;
            word-break: break-word;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #ffc107;
            margin: 20px 0;
        }
        .footer {
            background-color: #f1f1f1;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
        .badge {
            display: inline-block;
            background-color: #5a0016;
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
        }
        .services-text {
            background-color: white;
            padding: 15px;
            border-radius: 4px;
            border: 1px solid #e9ecef;
            font-style: italic;
            margin-top: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Novo Lead - Vanilla Rubi</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulário preenchido em ${date}</p>
        </div>
        
        <div class="content">
            <div class="highlight">
                <strong>📍 Origem:</strong> ${source} | 
                <strong>🌍 Idioma:</strong> ${language} |
                <strong>📋 Waitlist:</strong> <span class="badge">${waitlist}</span>
            </div>

            <div class="section">
                <h2>👤 Informações de Contato</h2>
                <div class="field">
                    <span class="field-label">Nome:</span>
                    <span class="field-value">${name}</span>
                </div>
                <div class="field">
                    <span class="field-label">Email:</span>
                    <span class="field-value"><a href="mailto:${email}" style="color: #5a0016; text-decoration: none;">${email}</a></span>
                </div>
                ${instagram ? `
                <div class="field">
                    <span class="field-label">Instagram:</span>
                    <span class="field-value">${instagram}</span>
                </div>
                ` : ''}
            </div>

            <div class="section">
                <h2>🚀 Detalhes do Projeto</h2>
                <div class="field">
                    <span class="field-label">Jornada:</span>
                    <span class="field-value">${journey}</span>
                </div>
                <div class="field">
                    <span class="field-label">Prontidão:</span>
                    <span class="field-value">${readiness}</span>
                </div>
                <div class="field">
                    <span class="field-label">Serviços:</span>
                    <div class="field-value">
                        <div class="services-text">${services}</div>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}?subject=Re: Sua consulta na Vanilla Rubi" 
                   style="display: inline-block; background-color: #5a0016; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600;">
                    📧 Responder Cliente
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p>Este email foi gerado automaticamente pelo sistema de formulários da Vanilla Rubi.<br>
            <strong>vanillarubi.eu</strong> | hello@vanillarubi.eu</p>
        </div>
    </div>
</body>
</html>`;
};

// Validação de dados
const validateFormData = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Nome é obrigatório e deve ter pelo menos 2 caracteres');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email válido é obrigatório');
  }
  
  if (!data.services || data.services.trim().length < 10) {
    errors.push('Descrição dos serviços é obrigatória e deve ter pelo menos 10 caracteres');
  }
  
  if (!data.waitlist || !['yes', 'no'].includes(data.waitlist)) {
    errors.push('Resposta sobre waitlist é obrigatória');
  }
  
  return errors;
};

export default async function handler(req, res) {
  // Permitir apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido. Use POST.' 
    });
  }

  try {
    const formData = req.body;
    
    // Validar dados recebidos
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Dados inválidos',
        errors: validationErrors
      });
    }

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Credenciais SMTP não configuradas');
      return res.status(500).json({
        success: false,
        message: 'Erro de configuração do servidor'
      });
    }

    // Preparar dados para o template
    const emailData = {
      name: formData.name,
      email: formData.email,
      instagram: formData.instagram || 'Não informado',
      journey: formData.journey || 'Não especificado',
      services: formData.services,
      readiness: formData.readiness || 'Não especificado',
      waitlist: formData.waitlist === 'yes' ? 'Sim, aceita entrar na lista' : 'Não aceita lista de espera',
      language: formData.language || 'Não informado',
      date: formData.date || new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      source: formData.source || 'Formulário Web'
    };

    // Configurar opções do email
    const mailOptions = {
      from: `"Vanilla Rubi - Sistema" <${process.env.SMTP_USER}>`,
      to: 'hello@vanillarubi.eu',
      subject: `🎯 Novo Lead: ${emailData.name} - ${emailData.waitlist === 'Sim, aceita entrar na lista' ? 'WAITLIST ✅' : 'SEM WAITLIST ❌'}`,
      html: createEmailTemplate(emailData),
      // Email em texto simples como fallback
      text: `
Novo lead recebido via ${emailData.source}

INFORMAÇÕES DE CONTATO:
Nome: ${emailData.name}
Email: ${emailData.email}
Instagram: ${emailData.instagram}

DETALHES DO PROJETO:
Jornada: ${emailData.journey}
Serviços: ${emailData.services}
Prontidão: ${emailData.readiness}
Waitlist: ${emailData.waitlist}

Data/Hora: ${emailData.date}
Idioma: ${emailData.language}
      `
    };

    // Enviar o email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email enviado com sucesso:', info.messageId);
    
    // Resposta de sucesso
    res.status(200).json({
      success: true,
      message: 'Email enviado com sucesso!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Log detalhado do erro para debug
    console.error('Detalhes do erro:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao enviar email',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Erro interno'
    });
  }
} 