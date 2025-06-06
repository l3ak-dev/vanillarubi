import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        about: 'Who is Vanilla Rubi',
        services: 'What We Offer',
        audience: "Who It's For",
        invitation: 'The Invitation',
        contact: 'Contact',
      },
      hero: {
        headline1: 'Strategy meets <1>flow</1>',
        headline2: 'Boldness meets <1>classic</1>',
        headline3: 'Intention meets <1>income</1>',
        headline4: 'And you? <1>You meet us</1>',
        strategyMeets: 'Strategy meets',
        boldnessMeets: 'Boldness meets',
        intentionMeets: 'Intention meets',
        andYou: 'And you?',
        flow: 'Flow',
        classic: 'Classic',
        income: 'Income',
        youMeetUs: 'You meet Us',
        subheadline: 'A thriving business is an ecosystem. You just found your one-stop solution to integrate and balance every part of it',
        cta: 'Book a Discovery Call',
        scroll: 'Scroll to explore',
      },
      who: {
        title1: 'Who is Vanilla ',
        title2: '?',
        agency: 'We are not a <highlight>marketing</highlight> agency. We are a <highlight>business growth force.</highlight>',
        desc1: 'In a world of trends, noise, and lots of content, we bring <highlight>stillness, focus, and intention</highlight>. With us, your goal becomes the focal point. We remove distractions, unnecessary tasks, and performative hustle.',
        desc2: 'We don\'t believe in doing more. We believe in <highlight>doing what matters</highlight> with precision in a timely manner.',
        trinium: 'Scale with soul. Grow with intention.'
      },
      whatWeOffer: {
        subtitle: 'OUR EXPERTISE',
        description: 'From strategy to execution, discover the multidimensional services that elevate your business with clarity, creativity, and soul.',
        title: 'What We Actually Do?',
        services: [
          {
            title: 'Hands-off Media Management',
            desc: 'LinkedIn, Facebook, Instagram, TikTok, YouTube, Website? We’ve got it. You stay in your zone of genius, we handle the rest.'
          },
          {
            title: 'Content Creation',
            desc: 'Script, photos, graphics, text, video, and editing - we handle every step to connect and convert. We batch everything in one powerful day so you’re covered for weeks with high-impact content.'
          },
          {
            title: 'Strategic Clarity & Growth Plan',
            desc: 'We audit, align, and create a strategic roadmap so every move and process serves your bigger vision.'
          },
          {
            title: 'Energetic Business Mentoring',
            desc: 'We go to the root issue… even when the root is you. See it. Feel it. Clear it. Grow.'
          },
          {
            title: 'Multidimensional Management',
            desc: 'From operations to finances to lead generation. Companies hire us to clean the chaos, optimize the system, and create sustainable revenue.'
          },
          {
            title: 'Project & Expansion Planning',
            desc: 'New service? New office? Big move? We turn your idea into action. With structure, direction, and just enough support to make it real, fast, and aligned.'
          }
        ]
      },
      whoItsFor: {
        title: "Who It's For",
        description: "We work with entrepreneurs and growing companies that are ready for organization and scaling.",
        bullets: [
          "Your internal team is stretched but hiring a full in-house squad isn't realistic right now.",
          "You've worked with freelancers and agencies but still end up doing the thinking yourself.",
          "You're scaling and your operations, content, and brand strategy feel disconnected",
          "You need someone who can think with you and move with you from strategy to execution.",
          "You want real clarity on what to prioritize, what to delegate, and what to stop doing.",
          "You're launching something big (a new service, a product, or an office)  and need expert support that is agile, strategic, and aligned.",
          "You're ready for a multidimensional approach that integrates structure, soul, and visibility.",
        ],
        impact: "We don't just grow engagement. We grow vision, structure, and income from the inside out."
      },
      finalCTA: {
        eyebrow: 'Ready for change',
        headline: 'You’ve done enough alone. It’s time to grow.. properly.',
        grow: 'grow',
        subheadline: "No more patchwork strategies, scattered efforts, or guessing games. Let's grow your business to match your vision, your value, and your next level.",
        cta: 'Book Your Discovery Call',
        modalHeadline: 'Fill in to book your call',
        steps: {
          info: 'Your Info',
          project: 'Your Project',
          timing: 'Timing',
          infoTitle: 'Tell us about yourself',
          projectTitle: 'Your business needs',
          timingTitle: 'Timing & availability'
        },
        placeholders: {
          fullName: 'Full Name',
          name: 'Name',
          instagram: 'Instagram or LinkedIn handle (optional)',
          email: 'Email Address',
          journey: 'Where are you on your business journey? ',
          journeyOptions: {
            handsOff: 'I need a full hands-off approach',
            notSure: "I'm not sure where to start yet",
            specificProject: 'I need help with a specific project'
          },
          services: "Tell me a bit about what's going on and the services you offer",
          readiness: 'How ready are you to start?',
          readinessOptions: {
            now: "I'm ready now",
            soon: "I'm considering starting in the next 1-2 months",
            later: "I'm exploring options for later"
          },
          waitlist: "Would you like to join our waitlist in case we're fully booked?",
          waitlistOptions: {
            yes: 'Yes, keep me in the loop',
            no: 'No, not right now'
          }
        },
        callInfo: "Before the call, I review your business. During it, you'll receive a clear plan, custom insights, and one actionable step to start right away. The €55 fee is fully deducted from your first package if we move forward.",
        waitlistInfo: "We're currently fully booked, but if you're serious about working together, you can reserve your spot in advance.",
        send: 'Send',
        sending: 'Sending...',
        sent: 'Sent!',
        next: 'Next',
        back: 'Back',
        success: {
          title: 'Request Received!',
          message: "Thanks for reaching out! We'll contact you within 24 hours to schedule your discovery call.",
          button: 'Back to Home'
        },
        privacy: 'Your information will never be shared.',
        validation: {
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email',
          nameRequired: 'Name is required',
          nameTooShort: 'Name must be at least 2 characters',
          servicesRequired: 'Please tell us about your business',
          servicesTooShort: 'Please provide more details (at least 10 characters)',
          pleaseFix: 'Please fix the errors above before submitting',
        },
        tryAgain: 'Try Again'
      },
      seo: {
        description: 'Vanilla Rubi is a multidimensional business growth agency for entrepreneurs and businesses ready to scale with clarity, creativity, and soul. Creative strategy, energetic alignment, and hands-off execution — in three languages.'
      },
    }
  },
  pt: {
    translation: {
      navbar: {
        about: 'Quem é Vanilla Rubi',
        services: 'O que fazemos',
        audience: 'Para quem',
        invitation: 'O Convite',
        contact: 'Contato',
      },
      hero: {
        strategyMeets: 'Se Estratégia e',
        boldnessMeets: 'Ousadia e',
        intentionMeets: 'Intenção e',
        andYou: 'Tivessem um bebê',
        flow: 'Fluidez',
        classic: 'Clássico',
        income: 'Faturamento',
        youMeetUs: 'Seria a gente',
        subheadline: 'Um negócio bem sucedido é um ecossistema. E você acabou de encontrar a solução completa para integrar e equilibrar cada parte dele.',
        cta: 'Agendar uma Discovery Call',
        scroll: 'Role para explorar',
      },
      who: {
        title1: 'Quem Somos Nós?',
        title2: '?',
        agency: 'Não somos uma <highlight>agência de marketing</highlight>. Somos parceiros para o crescimento da sua empresa.',
        desc1: 'Em um mundo barulhento com excesso de informação, ideias brilhantes e tendências, seu negócio fica sufocado. Com Vanilla Rubi você encontra <highlight>clareza e foco</highlight>. Eliminamos distrações, tarefas e complicações desnecessárias fazendo você chegar <highlight>de A a B de forma rápida, objetiva</highlight> pra <highlight>gerar ganhos</highlight>.',
        desc2: '',
        trinium: 'Escale com alma. Cresça com intenção.'
      },
      whatWeOffer: {
        subtitle: 'NOSSA EXPERTISE',
        description: 'Da estratégia à execução, conheça os serviços multidimensionais que elevam seu negócio com clareza, criatividade e alma.',
        title: ' okay okay, mas como fazemos isto?',
        services: [
          {
            title: 'Gestão de Mídias Começo ao fim',
            desc: 'LinkedIn, Facebook, Instagram, TikTok, YouTube, Website? Cuidamos de tudo. Você foca no que faz de melhor e a gente cuida do resto.'
          },
          {
            title: 'Criação de Conteúdo',
            desc: 'Roteiro, fotos, design, texto, vídeo e edição. Criamos tudo para conectar e converter. Tudo feito em  um único dia de forma estratégica para garantir semanas de conteúdo. Você com mais tempo e paz.'
          },
          {
            title: 'Clareza Estratégica e Plano de Crescimento',
            desc: 'Nada de ideias soltas. Aqui você sai com um plano real, focado no que funciona de verdade, no ritmo certo para o seu crescimento.'
          },
          {
            title: 'Mentoria Energética para Negócios',
            desc: "Vamos à raiz do problema... mesmo que o problema seja você. Enxergue além. Organize internamente. Expanda em todos os aspectos."
          },
          {
            title: 'Gestão Multidimensional',
            desc: 'De operações a finanças, de organização ao seu cliente ideal. Somos contratados para organizar o caos, otimizar o sistema e faturar de forma sustentável.'
          },
          {
            title: 'Planejamento de Projetos e Expansão',
            desc: 'Novo serviço? Nova filial? Nova Oferta? Transformamos sua ideia em ação com estrutura, direção e suporte na medida certa.'
          }
        ]
      },
      whoItsFor: {
        title: "Para quem",
        description: "Trabalhamos com empreendedores e empresas em crescimento que estão prontos para organização e expansão.",
        bullets: [
          "Você já fatura bem, mas sabe que poderia ir além se alguém cuidasse do operacional",
          "Seu negócio está crescendo, mas tudo parece bagunçado, pesado e sem estrutura",
          "Você sabe do seu poder — mas seu conteúdo não reflete isso",
          "Você quer tempo, magia e provavelmente sua saúde mental de volta.",
          "Você gerencia muita gente — designer aqui, fotógrafo ali, e ainda não tem o que realmente precisa",
          "Você precisa de clareza, direção e flow — não só mais barulho e ideias",
          "Você quer se sentir amparado(a), visto(a) e apoiado(a) enquanto seu negócio expande",
        ],
        impact: "Não crescemos só engajamento. Crescemos visão, estrutura e renda — de dentro para fora."
      },
      finalCTA: {
        eyebrow: 'Pronto para mudança',
        headline: 'Pronto para <1>crescer</1> com clareza, criatividade e alma?',
        grow: 'crescer',
        subheadline: 'Vamos alinhar sua marca, sua energia e seus sistemas — e construir algo que realmente reflita quem você é.',
        cta: 'Agende uma Chamada',
        modalHeadline: 'Preencha para agendar sua chamada',
        steps: {
          info: 'Seus Dados',
          project: 'Seu Projeto',
          timing: 'Prazo',
          infoTitle: 'Fale sobre você',
          projectTitle: 'Suas necessidades',
          timingTitle: 'Prazo & disponibilidade'
        },
        placeholders: {
          fullName: 'Nome Completo',
          name: 'Nome',
          instagram: 'Instagram ou LinkedIn (opcional)',
          email: 'E-mail',
          journey: 'Sua jornada de negócio',
          journeyOptions: {
            handsOff: 'Preciso de gestão completa',
            notSure: 'Ainda não tenho certeza, explorando opções',
            specificProject: 'Tenho um projeto específico em mente'
          },
          services: 'Conte-nos sobre suas necessidades (opcional)',
          readiness: 'Quando gostaria de começar?',
          readinessOptions: {
            now: 'O mais rápido possível',
            soon: 'Dentro de 1-2 meses',
            later: 'Apenas explorando por enquanto'
          },
          waitlist: 'Gostaria de entrar em nossa lista de espera?',
          waitlistOptions: {
            yes: 'Sim, por favor',
            no: 'Não, obrigado'
          },
          block: 'Qual seu maior desafio agora? (Compartilhe o quanto quiser)'
        },
        callInfo: "Antes da chamada, eu reviso seu negócio. Durante a chamada, você receberá um plano claro, insights personalizados e um passo ação para começar imediatamente. O custo de €55 será totalmente deduzido do seu primeiro pacote se prosseguirmos.",
        waitlistInfo: "Estamos totalmente lotados, mas se você está realmente interessado em trabalhar juntos, pode reservar seu lugar à frente.",
        send: 'Enviar',
        sending: 'Enviando...',
        sent: 'Enviado!',
        next: 'Próximo',
        back: 'Voltar',
        success: {
          title: 'Solicitação Recebida!',
          message: "Obrigado pelo seu contato! Entraremos em contato em até 24 horas para agendar sua chamada.",
          button: 'Voltar ao Início'
        },
        privacy: 'Suas informações nunca serão compartilhadas.',
        validation: {
          emailRequired: 'Email é obrigatório',
          emailInvalid: 'Por favor, insira um email válido',
          nameRequired: 'Nome é obrigatório',
          nameTooShort: 'Nome deve ter pelo menos 2 caracteres',
          servicesRequired: 'Por favor, conte-nos sobre seu negócio',
          servicesTooShort: 'Por favor, forneça mais detalhes (pelo menos 10 caracteres)',
          pleaseFix: 'Por favor, corrija os erros acima antes de enviar',
        },
        tryAgain: 'Tentar Novamente'
      },
      seo: {
        description: 'A Vanilla Rubi é uma agência multidimensional de crescimento para empreendedores e negócios prontos para escalar com clareza, criatividade e alma. Estratégia criativa, alinhamento energético e execução impecável — em três idiomas.'
      },
    }
  },
  es: {
    translation: {
      navbar: {
        about: 'Quién es Vanilla Rubi',
        services: 'Qué hacemos',
        audience: 'Para quién',
        invitation: 'La Invitación',
        contact: 'Contacto',
      },
      hero: {
        strategyMeets: 'Si Estrategia y',
        boldnessMeets: 'Atrevimiento y',
        intentionMeets: 'Intención y ',
        andYou: 'Tuvieran un hijo?',
        flow: 'Fluidez',
        classic: 'Sofisticación',
        income: 'Ingresos',
        youMeetUs: 'Seríamos nosotros',
        subheadline: 'Un negocio exitoso es un ecosistema. Y acabas de encontrar la solución completa para integrar y equilibrar cada parte del tuyo.',
        cta: 'Agendar una Discovery Call',
        scroll: 'Desplácese para explorar',
      },
      who: {
        title1: '¿Quiénes somos?',
        title2: '?',
        agency: '<highlight>No somos una agencia de marketing</highlight>. Somos socios en el crecimiento de tu negocio.',
        desc1: 'En un mundo ruidoso, lleno de información, ideas brillantes y tendencias pasajeras, tu negocio puede sentirse ahogado. Con Vanilla Rubi, encuentras <highlight>claridad y enfoque</highlight>. Eliminamos distracciones, tareas innecesarias y complicaciones para llevarte <highlight>del punto A al B con rapidez, dirección</highlight> y <highlight>resultados reales</highlight>.',
        desc2: '',
        trinium: 'Escala con alma. Crece con intención.'
      },
      whatWeOffer: {
        subtitle: 'NUESTRA EXPERTISE',
        description: 'De la estrategia a la ejecución, descubre los servicios multidimensionales que elevan tu negocio con claridad, creatividad y alma.',
        title: 'Vale, vale... ¿pero cómo lo hacemos?',
        services: [
          {
            title: 'Gestión de Medios de Principio a Fin',
            desc: 'LinkedIn, Facebook, Instagram, TikTok, YouTube, Web. Lo gestionamos todo. Tú te enfocas en tu magia, nosotros en el resto.'
          },
          {
            title: 'Creación de Contenido',
            desc: 'Guión, fotos, diseño, texto, video y edición. Creamos todo para conectar y convertir.Todo producido en un solo día, de forma estratégica, para asegurar semanas de contenido. Más tiempo y paz para ti.'
          },
          {
            title: 'Claridad Estratégica y Plan de Crecimiento',
            desc: 'Nada de ideas sueltas. Aquí sales con un plan real, enfocado en lo que funciona, en el ritmo correcto para tu negocio'
          },
          {
            title: 'Mentoría Energética para Negocios',
            desc: 'Vamos a la raíz del problema… incluso si la raíz eres tú.Ve más allá. Ordena dentro. Expande en todos los niveles.'
          },
          {
            title: 'Gestión Multidimensional',
            desc: ' Desde operaciones hasta finanzas, desde procesos internos hasta tu cliente ideal.Nos contratan para ordenar el caos, optimizar sistemas y aumentar ingresos de forma sostenible.'
          },
          {
            title: 'Planificación de Proyectos y Expansión',
            desc: ' ¿Nuevo servicio? ¿Nueva sede? ¿Nueva oferta? Transformamos tu idea en acción con estructura, dirección y el soporte justo que necesitas.'
          }
        ]
      },
      whoItsFor: {
        title: "Para quién",
        description: "Trabajamos con emprendedores y empresas en crecimiento que están listos para organizarse y escalar.",
        bullets: [
          "Ya facturas bien, pero sabes que podrías lograr mucho más si alguien se encargara del día a día",
          "Estás creciendo, pero todo se siente desordenado, pesado y sin estructura",
          "Sabes que eres poderoso(a), pero tu contenido no lo refleja",
          "Quieres de vuelta tu tiempo, tu magia y probablemente tu salud mental.",
          "Estás gestionando demasiada gente — un diseñador aquí, un fotógrafo allá y aún no tienes lo que realmente necesitas",
          "Necesitas claridad, dirección y flow — no solo más ruido e ideas",
          "Quieres sentirte apoyado(a), visto(a) y acompañado(a) mientras tu negocio crece",
        ],
        impact: "No solo crecemos engagement. Crecemos visión, estructura e ingresos — de adentro hacia afuera."
      },
      finalCTA: {
        eyebrow: 'Listo para el cambio',
        headline: 'Es hora de sacar tus ideas de la cabeza, del papel y de las conversaciones — y hacerlas realidad.',
        grow: 'crecer',
        subheadline: 'Ya has gastado demasiado tiempo, dinero y paz mental en soluciones que no funcionan. Vamos a hacerlo bien.',
        cta: 'Agenda una Llamada',
        modalHeadline: 'Completa para agendar tu llamada',
        steps: {
          info: 'Tus Datos',
          project: 'Tu Proyecto',
          timing: 'Plazos',
          infoTitle: 'Cuéntanos sobre ti',
          projectTitle: 'Tus necesidades',
          timingTitle: 'Plazos & disponibilidad'
        },
        placeholders: {
          fullName: 'Nombre Completo',
          name: 'Nombre',
          instagram: 'Instagram o LinkedIn (opcional)',
          email: 'Correo electrónico',
          journey: 'Tu camino empresarial',
          journeyOptions: {
            handsOff: 'Necesito gestión completa',
            notSure: 'No estoy seguro, explorando opciones',
            specificProject: 'Tengo un proyecto específico en mente'
          },
          services: 'Cuéntanos sobre tus necesidades (opcional)',
          readiness: '¿Cuándo te gustaría comenzar?',
          readinessOptions: {
            now: 'Lo antes posible',
            soon: 'Dentro de 1-2 meses',
            later: 'Solo explorando por ahora'
          },
          waitlist: '¿Te gustaría unirte a nuestra lista de espera?',
          waitlistOptions: {
            yes: 'Sí, por favor',
            no: 'No, gracias'
          },
          block: '¿Cuál es tu mayor bloqueo ahora? (Comparte lo que quieras)'
        },
        callInfo: "Antes de la llamada, reviso tu negocio. Durante la llamada, recibirás un plan claro, insights personalizados y un paso a acción para empezar de inmediato. El costo de €55 se deducirá totalmente de tu primer paquete si avanzamos.",
        waitlistInfo: "Estamos totalmente llenos, pero si realmente estás interesado en trabajar juntos, puedes reservar tu lugar por adelantado.",
        send: 'Enviar',
        sending: 'Enviando...',
        sent: '¡Enviado!',
        next: 'Siguiente',
        back: 'Atrás',
        success: {
          title: '¡Solicitud Recibida!',
          message: "¡Gracias por contactarnos! Nos comunicaremos contigo dentro de 24 horas para programar tu llamada.",
          button: 'Volver al Inicio'
        },
        privacy: 'Tu información nunca será compartida.',
        validation: {
          emailRequired: 'El email es requerido',
          emailInvalid: 'Por favor, ingresa un email válido',
          nameRequired: 'El nombre es requerido',
          nameTooShort: 'El nombre debe tener al menos 2 caracteres',
          servicesRequired: 'Por favor, cuéntanos sobre tu negocio',
          servicesTooShort: 'Por favor, proporciona más detalles (al menos 10 caracteres)',
          pleaseFix: 'Por favor, corrige los errores antes de enviar',
        },
        tryAgain: 'Intentar de Nuevo'
      },
      seo: {
        description: 'Vanilla Rubi es una agencia multidimensional de crecimiento para emprendedores y empresas listas para escalar con claridad, creatividad y alma. Estrategia creativa, alineación energética y ejecución impecable — en tres idiomas.'
      },
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 