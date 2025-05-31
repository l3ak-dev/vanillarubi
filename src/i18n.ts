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
        flow: 'flow',
        classic: 'classic',
        income: 'income',
        youMeetUs: 'You meet us',
        subheadline: 'Creative strategy, elevated content, and hands-off execution — for entrepreneurs and businesses ready to scale with flow, clarity, and purpose.',
        cta: 'Book a Discovery Call',
      },
      who: {
        title1: 'Who is',
        title2: '?',
        agency: 'Vanilla Rubi is a multidimensional business growth agency',
        desc1a: ' for entrepreneurs who are ready to scale with soul. We blend ',
        trio: 'creative strategy, energetic alignment, and seamless execution',
        desc1b: ' to help your business grow — not just online, but financially and structurally.',
        desc2a: 'We use the',
        triniumSystem: 'Trinium System',
        desc2b: '; aligning the ',
        bodyMindSoul: 'body, mind, and soul of your business',
        desc2c: ' so it becomes scalable, sustainable, and deeply magnetic — both financially and energetically.',
        trinium: 'Scale with soul. Grow with intention.'
      },
      whatWeOffer: {
        title: 'What We Actually Do?',
        services: [
          {
            title: 'Social Media Management',
            desc: 'You focus on your magic, we handle the rest.'
          },
          {
            title: 'Content Creation',
            desc: 'Visuals, words, and stories crafted to connect, convert, and carry your essence.'
          },
          {
            title: 'Brand & Content Strategy',
            desc: 'Story, voice, and visuals aligned with your energy and goals.'
          },
          {
            title: 'Energetic Business Mentoring',
            desc: 'Because how you feel is part of the strategy.'
          },
          {
            title: 'Creative Direction',
            desc: 'From idea to execution, everything flows with intention.'
          },
          {
            title: 'Growth Planning',
            desc: 'Online presence, financial expansion, and structural clarity.'
          }
        ]
      },
      whoItsFor: {
        title: "Who It's For",
        bullets: [
          "You're making good money, but you know you could be doing so much more if someone just handled the day-to-day tasks",
          "You're scaling, but it feels messy, unstructured, and heavier than it needs to",
          "You know you're powerful — but your content isn't reflecting that",
          "You want time, magic and probably your mental health back.",
          "You're juggling too many people — a designer here, a Photographer there and still not getting what you really need",
          "You need clarity, direction, and flow — not just more noise and ideas",
          "You want to feel held, seen, and supported while your business expands",
        ],
        impact: "We don't just grow engagement. We grow vision, structure, and income — from the inside out."
      },
      finalCTA: {
        headline: 'Ready to <1>grow</1> with clarity, creativity, and soul?',
        grow: 'grow',
        subheadline: "Let's align your brand, your energy, and your systems — and build something that truly reflects who you are.",
        cta: 'Book Your Discovery Call',
        modalHeadline: 'Fill in to book your call',
        placeholders: {
          name: 'Name',
          instagram: 'Instagram handle (optional)',
          email: 'Email',
          block: "What's your biggest block right now? (Share as much or as little as you want)"
        },
        send: 'Send',
        sending: 'Sending...',
        sent: 'Sent!',
        privacy: 'Your information will never be shared.'
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
        headline1: 'Estratégia encontra <1>flow</1>',
        headline2: 'Ousadia encontra <1>clássico</1>',
        headline3: 'Intenção encontra <1>renda</1>',
        headline4: 'E você? <1>Você nos encontra</1>',
        strategyMeets: 'Estratégia encontra',
        boldnessMeets: 'Ousadia encontra',
        intentionMeets: 'Intenção encontra',
        andYou: 'E você?',
        flow: 'flow',
        classic: 'clássico',
        income: 'renda',
        youMeetUs: 'Você nos encontra',
        subheadline: 'Estratégia criativa, conteúdo elevado e execução sem esforço — para empreendedores e negócios prontos para escalar com flow, clareza e propósito.',
        cta: 'Agende uma Chamada',
      },
      who: {
        title1: 'Quem é',
        title2: '?',
        agency: 'A Vanilla Rubi é uma agência multidimensional de crescimento',
        desc1a: ' para empreendedores prontos para escalar com alma. Misturamos ',
        trio: 'estratégia criativa, alinhamento energético e execução impecável',
        desc1b: ' para ajudar seu negócio a crescer — não só online, mas financeiramente e estruturalmente.',
        desc2a: 'Usamos o',
        triniumSystem: 'Sistema Trinium',
        desc2b: '; alinhando ',
        bodyMindSoul: 'corpo, mente e alma do seu negócio',
        desc2c: ' para que ele se torne escalável, sustentável e profundamente magnético — financeira e energeticamente.',
        trinium: 'Escale com alma. Cresça com intenção.'
      },
      whatWeOffer: {
        title: 'O que realmente fazemos?',
        services: [
          {
            title: 'Gestão de Mídias Sociais',
            desc: 'Você foca na sua magia, nós cuidamos do resto.'
          },
          {
            title: 'Criação de Conteúdo',
            desc: 'Imagens, palavras e histórias feitas para conectar, converter e transmitir sua essência.'
          },
          {
            title: 'Estratégia de Marca e Conteúdo',
            desc: 'História, voz e visual alinhados com sua energia e objetivos.'
          },
          {
            title: 'Mentoria Energética para Negócios',
            desc: 'Como você se sente faz parte da estratégia.'
          },
          {
            title: 'Direção Criativa',
            desc: 'Da ideia à execução, tudo flui com intenção.'
          },
          {
            title: 'Planejamento de Crescimento',
            desc: 'Presença online, expansão financeira e clareza estrutural.'
          }
        ]
      },
      whoItsFor: {
        title: "Para quem",
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
        headline: 'Pronto para <1>crescer</1> com clareza, criatividade e alma?',
        grow: 'crescer',
        subheadline: 'Vamos alinhar sua marca, sua energia e seus sistemas — e construir algo que realmente reflita quem você é.',
        cta: 'Agende uma Chamada',
        modalHeadline: 'Preencha para agendar sua chamada',
        placeholders: {
          name: 'Nome',
          instagram: 'Instagram (opcional)',
          email: 'E-mail',
          block: 'Qual seu maior desafio agora? (Compartilhe o quanto quiser)'
        },
        send: 'Enviar',
        sending: 'Enviando...',
        sent: 'Enviado!',
        privacy: 'Suas informações nunca serão compartilhadas.'
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
        headline1: 'La estrategia se une a <1>flow</1>',
        headline2: 'La audacia se une a lo <1>clásico</1>',
        headline3: 'La intención se une a los <1>ingresos</1>',
        headline4: '¿Y tú? <1>Nos encuentras</1>',
        strategyMeets: 'La estrategia se une a',
        boldnessMeets: 'La audacia se une a lo',
        intentionMeets: 'La intención se une a los',
        andYou: '¿Y tú?',
        flow: 'flow',
        classic: 'clásico',
        income: 'ingresos',
        youMeetUs: 'Nos encuentras',
        subheadline: 'Estrategia creativa, contenido elevado y ejecución sin esfuerzo — para emprendedores y empresas listas para escalar con flow, claridad y propósito.',
        cta: 'Agenda una Llamada',
      },
      who: {
        title1: '¿Quién es',
        title2: '?',
        agency: 'Vanilla Rubi es una agencia multidimensional de crecimiento empresarial',
        desc1a: ' para emprendedores que están listos para escalar con alma. Combinamos ',
        trio: 'estrategia creativa, alineación energética y ejecución impecable',
        desc1b: ' para ayudar a tu negocio a crecer — no solo online, sino también financiera y estructuralmente.',
        desc2a: 'Usamos el',
        triniumSystem: 'Sistema Trinium',
        desc2b: '; alineando ',
        bodyMindSoul: 'el cuerpo, la mente y el alma de tu negocio',
        desc2c: ' para que sea escalable, sostenible y profundamente magnético — tanto financiera como energéticamente.',
        trinium: 'Escala con alma. Crece con intención.'
      },
      whatWeOffer: {
        title: '¿Qué hacemos realmente?',
        services: [
          {
            title: 'Gestión de Redes Sociales',
            desc: 'Tú enfócate en tu magia, nosotros nos encargamos del resto.'
          },
          {
            title: 'Creación de Contenido',
            desc: 'Imágenes, palabras e historias creadas para conectar, convertir y transmitir tu esencia.'
          },
          {
            title: 'Estrategia de Marca y Contenido',
            desc: 'Historia, voz y visuales alineados con tu energía y objetivos.'
          },
          {
            title: 'Mentoría Energética Empresarial',
            desc: 'Cómo te sientes es parte de la estrategia.'
          },
          {
            title: 'Dirección Creativa',
            desc: 'De la idea a la ejecución, todo fluye con intención.'
          },
          {
            title: 'Planificación de Crecimiento',
            desc: 'Presencia online, expansión financiera y claridad estructural.'
          }
        ]
      },
      whoItsFor: {
        title: "Para quién",
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
        headline: '¿Listo para <1>crecer</1> con claridad, creatividad y alma?',
        grow: 'crecer',
        subheadline: 'Alineemos tu marca, tu energía y tus sistemas — y construyamos algo que realmente refleje quién eres.',
        cta: 'Agenda una Llamada',
        modalHeadline: 'Completa para agendar tu llamada',
        placeholders: {
          name: 'Nombre',
          instagram: 'Instagram (opcional)',
          email: 'Correo electrónico',
          block: '¿Cuál es tu mayor bloqueo ahora? (Comparte lo que quieras)'
        },
        send: 'Enviar',
        sending: 'Enviando...',
        sent: '¡Enviado!',
        privacy: 'Tu información nunca será compartida.'
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