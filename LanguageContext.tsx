import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

const BASE_URL = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/";

const translations = {
  es: {
    header: {
      about: "Sobre Nosotros",
      services: "Servicios",
      contact: "Contacto",
      schedule: "Agendar Cita"
    },
    hero: {
      title: "Dra. Mirella Arellano",
      titleBr: "Odontología Especializada",
      subtitle: "The Art of Luxury Dentistry in Peru.",
      description: "Odontología estética premium que combina precisión clínica, tecnología de vanguardia y una visión profundamente artística para transformar sonrisas con naturalidad y excelencia.",
      locations: "Atendiendo a pacientes de Perú y el mundo. Sedes en Lima y Piura.",
      badge: "Luxury Aesthetic Dentistry | Peru",
      specialties: ["Carillas Premium Signature", "Rehabilitación Oral", "Implantología", "Cirugía Maxilofacial", "Armonización Facial"],
      cta: "Ver Servicios"
    },
    about: {
      experience: {
        title: "The Mirella Experience",
        subtitle: "Donde la excelencia clínica encuentra el arte de la estética dental.",
        text: "Creemos en una odontología que trasciende lo convencional. La experiencia integral comienza desde el diagnóstico preciso, integrando la estética facial, la funcionalidad oral y el bienestar emocional de cada paciente. Esto es The Mirella Experience."
      },
      philosophy: {
        title: "Nuestra Filosofía",
        text: "Guiados por la innovación y la empatía, nuestra práctica se fundamenta en principios clínicos inquebrantables:",
        list: [
          "Estética Avanzada",
          "Funcionalidad Oral",
          "Conservación Estructural",
          "Tecnología Digital de Precisión",
          "Odontología Mínimamente Invasiva",
          "Excelencia Artesanal"
        ]
      },
      ceramists: {
        title: "Maestros Ceramistas del Perú",
        text: "Trabajamos en exclusiva con maestros ceramistas peruanos de reconocimiento internacional. Cada restauración es esculpida a mano mediante protocolos de alta precisión, garantizando una naturalidad y adaptación biomimética insuperables."
      },
      drMirella: {
        title: "Somos Dra. Mirella Arellano Odontología Especializada",
        text: "Con sedes en Lima y Piura, atendemos a pacientes nacionales e internacionales bajo un enfoque clínico multidisciplinario. Formamos parte del prestigioso ecosistema médico Officia Medical Co, brindando un entorno seguro y de vanguardia."
      },
      whyUs: {
        title: "Por Qué Elegirnos",
        list: [
          "Excelencia Clínica",
          "Odontología Estética Contemporánea",
          "Carillas Premium Signature",
          "Ceramistas Especializados",
          "Tecnología Avanzada",
          "Experiencia Personalizada",
          "Enfoque Multidisciplinario",
          "Luxury Patient Experience",
          "Atención Nacional e Internacional"
        ]
      },
      principles: {
        title: "Precisión. Arte. Excelencia.",
        subtitle: "Tres principios que definen nuestra práctica.",
        text: "Una sonrisa extraordinaria nunca ocurre por casualidad. Se diseña."
      },
      officia: {
        title: "Experiencia Médica Integrada — Officia Medical Co",
        text: "Nuestra clínica es orgullosamente parte de Officia Medical Co, un ecosistema médico multidisciplinario que reúne a los mejores especialistas. Te recibimos en instalaciones de primer nivel en nuestras sedes de Lima y Piura."
      }
    },
    intro: {
      title: "Sobre la Dra.",
      titleBr: "Mirella Arellano",
      text: "Con más de 15 años de experiencia, la Dra. Mirella Arellano se dedica al diagnóstico y tratamiento integral de la salud bucal, con especialización en Rehabilitación Oral por la Universidad de Ciencias Aplicadas (UPC) en Lima. Ha perfeccionado su práctica con entrenamientos en estética dental en Brasil y Estados Unidos, combinando ciencia, técnica y arte para brindar soluciones personalizadas a cada paciente.",
      subText: "Su enfoque está centrado en preservar la funcionalidad, salud y estética dental, con compromiso, precisión y un trato humano de excelencia.",
      quote: "Transformar tu sonrisa es transformar tu vida.",
      cta: "Conoce Más"
    },
    features: {
      mainTitle: "Excelencia Dental",
      mainDesc: "Combinamos tecnología, experiencia y arte para transformar sonrisas con los más altos estándares de calidad.",
      items: [
        {
          title: "Tecnología de Punta",
          description: "Equipamiento moderno para tratamientos precisos y confortables.",
          image: `${BASE_URL}portada_curaciones.JPG`
        },
        {
          title: "Materiales Premium",
          description: "Insumos de alta calidad que garantizan durabilidad y estética.",
          image: `${BASE_URL}carillas_dentales_portada.JPG`
        },
        {
          title: "Atención Integral",
          description: "Todas las especialidades en un solo lugar para tu comodidad.",
          image: `${BASE_URL}perfil_mirella_v.JPG`
        }
      ]
    },
    process: {
      items: [
        {
          title: "Diagnóstico",
          description: "Evaluación completa de tu salud bucal.",
          image: `${BASE_URL}profilaxis_portada.JPG`
        },
        {
          title: "Planificación",
          description: "Diseño personalizado de tu tratamiento.",
          image: `${BASE_URL}carillas_emax.JPG`
        },
        {
          title: "Transformación",
          description: "Ejecución del tratamiento con los más altos estándares.",
          image: `${BASE_URL}blanqueamiento_consultorio_3.JPG`
        }
      ]
    },
    services: {
      mainTitle: "Nuestros Servicios Especializados",
      mainDesc: "Experiencias clínicas diseñadas para restaurar la función, armonía y confianza de tu salud bucal con los más altos estándares.",
      categories: [
        {
          title: "Restauración y Salud Dental",
          description: "Tratamientos conservadores para recuperar la integridad biológica.",
          image: `${BASE_URL}portada_curaciones.JPG`,
          items: [
            { name: "Curaciones Simples", image: `${BASE_URL}curaciones_simples.jpg`, desc: "Procedimiento mínimamente invasivo diseñado para tratar caries en sus etapas iniciales. Utilizamos resinas de alta estética y nanotecnología que se mimetizan perfectamente con el color natural de tu diente." },
            { name: "Curaciones Complejas", image: `${BASE_URL}curaciones_complejas.jpg`, desc: "Reconstrucción anatómica avanzada para dientes con compromiso estructural significativo. Empleamos técnicas de estratificación para recuperar la morfología original." }
          ]
        },
        {
          title: "Estética Dental y Diseño de Sonrisa",
          description: "La fusión perfecta entre arte y odontología clínica.",
          image: `${BASE_URL}carillas_dentales_portada.JPG`,
          items: [
            { name: "Carillas de Resina", image: `${BASE_URL}carillas_resina.JPG`, desc: "Escultura dental directa en una sola cita. Modifica la forma, cierra espacios o corrige el color con un desgaste dental mínimo." },
            { name: "Carillas de Porcelana Emax", image: `${BASE_URL}carillas_emax.JPG`, desc: "Láminas cerámicas ultrafinas de disilicato de litio. Ofrecen translucidez, textura y brillo idénticos al esmalte natural con alta resistencia." },
            { name: "Blanqueamiento de Consultorio", image: `${BASE_URL}blanqueamiento_consultorio_3.JPG`, desc: "Protocolo clínico de alta potencia (3 sesiones) que logra aclarar varios tonos de manera segura y eficiente." },
            { name: "Blanqueamiento Express", desc: "Sesión intensiva diseñada para resultados inmediatos. Ideal para pacientes con agenda apretada o previos a un evento social." },
            { name: "Blanqueamiento Casero", desc: "Sistema de aclaramiento gradual y controlado con férulas personalizadas para usar cómodamente en casa." }
          ]
        },
        {
          title: "Profilaxis e Higiene",
          description: "Prevención avanzada para una salud oral sostenible.",
          image: `${BASE_URL}profilaxis_portada.JPG`,
          items: [
            { name: "Profilaxis Profesional", image: `${BASE_URL}profilaxis.jpg`, desc: "Limpieza profunda con ultrasonido y pulido coronario para remover biopelícula y manchas extrínsecas." },
            { name: "Destartraje", desc: "Eliminación meticulosa de sarro acumulado. Vital para detener la gingivitis y prevenir la retracción de encías." },
            { name: "Raspado y Alisado Radicular", image: `${BASE_URL}raspado_alisado_radicular.JPG`, desc: "Terapia periodontal profunda enfocada en descontaminar la superficie de las raíces dentales bajo la encía." }
          ]
        },
        {
          title: "Rehabilitación Oral y Prótesis",
          description: "Ingeniería dental para recuperar la función masticatoria total.",
          image: `${BASE_URL}coronas_portada.JPG`,
          items: [
            { name: "Coronas Feldespáticas", image: `${BASE_URL}coronas_porcelana.JPG`, desc: "Prótesis fijas de altísima estética y naturalidad. La elección preferida para el sector anterior." },
            { name: "Coronas Emax", image: `${BASE_URL}coronas_emax.JPG`, desc: "Prótesis libres de metal que combinan resistencia excepcional con estética superior. Ideales para premolares." },
            { name: "Coronas de Zirconio", image: `${BASE_URL}coronas_zirconio.JPG`, desc: "Material de dureza extraordinaria para el sector posterior. Equilibrio perfecto entre durabilidad extrema y estética." },
            { name: "Prótesis Totales", image: `${BASE_URL}protesis_totales.JPG`, desc: "Rehabilitación completa que recupera la dimensión vertical del rostro y la funcionalidad." },
            { name: "Prótesis Removible PPR", image: `${BASE_URL}removible_ppr.JPG`, desc: "Estructuras metálicas livianas y resistentes que reemplazan múltiples dientes perdidos." },
            { name: "Prótesis Flexible Wipla", image: `${BASE_URL}wipla.JPG`, desc: "Alternativa moderna libre de ganchos metálicos, estética y muy cómoda." }
          ]
        },
        {
          title: "Implantes y Estructuras",
          description: "Cimientos sólidos para una sonrisa permanente.",
          image: `${BASE_URL}corona_porcelana_2.JPG`,
          items: [
            { name: "Dental Implants", desc: "Inserción de tornillo de titanio biocompatible que actúa como raíz artificial, devolviendo función y estética." },
            { name: "Incrustaciones", desc: "Restauraciones indirectas a medida para dientes con destrucción media, reforzando la estructura dental." },
            { name: "Pernos (Fibra/Metal)", desc: "Sistemas de anclaje para dientes tratados endodónticamente, proporcionando retención para la corona." }
          ]
        },
        {
          title: "Endodoncias",
          description: "Salvamos tus dientes naturales del dolor y la infección.",
          image: `${BASE_URL}endodoncias_portada.JPG`,
          items: [
            { name: "Endodoncias Anteriores", image: `${BASE_URL}endodoncias_anteriores.JPG`, desc: "Tratamiento en incisivos y caninos para eliminar la infección y preservar la pieza." },
            { name: "Endodoncias Posteriores", image: `${BASE_URL}endodoncias_posteriores.JPG`, desc: "Microcirugía interna en molares y premolares para limpiar conductos complejos." }
          ]
        },
        {
          title: "Cirugía Oral y Encías",
          description: "Intervenciones precisas para la salud de los tejidos.",
          image: `${BASE_URL}exodoncias_portada.JPG`,
          items: [
            { name: "Exodoncia Simple", image: `${BASE_URL}exodoncia_simple.JPG`, desc: "Extracción segura y atraumática de piezas dentales comprometidas." },
            { name: "Exodoncia Compleja", image: `${BASE_URL}exodoncia_compleja.JPG`, desc: "Cirugía para dientes impactados o con dificultad anatómica, priorizando la preservación ósea." },
            { name: "Gingivoplastía", image: `${BASE_URL}gingivoplastia.JPG`, desc: "Remodelado estético del contorno de las encías para armonizar la sonrisa." },
            { name: "Gingivectomía", image: `${BASE_URL}gingivectomia.JPG`, desc: "Eliminación de tejido gingival excesivo para mejorar la estética o facilitar restauraciones." }
          ]
        },
        {
          title: "Ortodoncia",
          description: "Alineación precisa para una mordida funcional y estética.",
          items: [
            { name: "Ortodoncia Estética", desc: "Brackets de zafiro o cerámica que se mimetizan con el esmalte para un tratamiento discreto." },
            { name: "Ortodoncia Invisible", desc: "Alineadores transparentes y removibles. La opción más cómoda e higiénica." }
          ]
        },
        {
          title: "Odontopediatría",
          description: "Cuidado especializado para el futuro de su sonrisa.",
          items: [
            { name: "Atención Infantil", desc: "Enfoque preventivo y psicológico adaptado a los niños para fomentar buenos hábitos." }
          ]
        }
      ],
    },
    servicesPage: {
      overview: {
        title: "SERVICIOS PREMIUM",
        subtitle: "Excelencia clínica especializada. Diseñada alrededor de ti.",
        list: ["Carillas Premium Signature", "Diseño de sonrisa", "Rehabilitación Oral Integral", "Implantología Avanzada", "Cirugía Oral y Maxilofacial", "Armonización Facial", "Odontología Estética Contemporánea", "Rejuvenecimiento de sonrisa", "Restauraciones estéticas de alta precisión"]
      },
      veneers: {
        title: "CARILLAS PREMIUM SIGNATURE",
        subtitle: "Nuestra firma estética",
        text: "Diseñamos sonrisas únicas que complementan la arquitectura de tu rostro, utilizando cerámicas ultrafinas de la más alta calidad para lograr resultados indetectables y luminosos.",
        list: ["Arquitectura facial", "Proporciones dentales", "Sonrisa dinámica", "Perfil estético", "Naturalidad visual", "Función oral"]
      },
      customization: {
        title: "TOTALMENTE PERSONALIZADO. EXTRAORDINARIAMENTE NATURAL.",
        list: ["Diseño Digital de Sonrisa", "Fotografía clínica avanzada", "Análisis facial", "Escaneo intraoral digital", "Mock-ups estéticos", "Protocolos de precisión clínica"]
      },
      technology: {
        title: "TECNOLOGÍA & PRECISIÓN DIGITAL",
        list: ["Escáner intraoral digital", "Diseño Digital de Sonrisa", "Radiología 3D avanzada", "Fotografía clínica profesional", "Diagnóstico digital integral", "Planificación estética personalizada", "Flujo clínico de alta precisión"]
      },
      goals: {
        title: "ODONTOLOGÍA BASADA EN TUS OBJETIVOS",
        subtitle: "Escuchamos primero. Diseñamos después.",
        list: ["Salud oral", "Estética facial", "Función masticatoria", "Conservación dental", "Longevidad clínica", "Resultados estéticos personalizados"]
      },
      rehabilitation: {
        title: "REHABILITACIÓN ORAL PREMIUM",
        text: "Devolvemos la función y estética a bocas complejas mediante tratamientos integrales, recuperando la dimensión vertical y la correcta oclusión anatómica.",
        list: ["Restauraciones estéticas avanzadas", "Reposición dental", "Corrección funcional", "Optimización oclusal", "Diseño de sonrisa integral", "Protocolos interdisciplarios"]
      },
      implantology: {
        title: "IMPLANTOLOGÍA AVANZADA",
        subtitle: "Precisión quirúrgica. Estética sofisticada.",
        text: "Reemplazamos dientes perdidos con raíces artificiales de titanio de última generación, planificadas digitalmente para una integración perfecta y resultados para toda la vida.",
        list: ["Diagnóstico tridimensional", "Planificación personalizada", "Protocolos quirúrgicos contemporáneos", "Integración estética avanzada", "Restauraciones armónicas", "Rehabilitación funcional"]
      },
      surgery: {
        title: "CIRUGÍA ORAL Y MAXILOFACIAL",
        text: "Procedimientos quirúrgicos mínimamente invasivos con los más altos estándares de bioseguridad, enfocados en preservar el tejido y acelerar la recuperación.",
        list: ["Cirugía oral avanzada", "Procedimientos reconstructivos", "Extracciones complejas", "Manejo quirúrgico especializado", "Evaluación funcional y estética interdisciplinaria"]
      },
      harmonization: {
        title: "ARMONIZACIÓN FACIAL",
        text: "Complementamos tu sonrisa con procedimientos estéticos faciales que equilibran tus proporciones, logrando un rejuvenecimiento sutil y natural.",
        list: ["Evaluación facial integral", "Balance de proporciones", "Rejuvenecimiento estético", "Optimización del contorno facial", "Integración sonrisa-rostro"]
      },
      formAndFunction: {
        title: "DONDE LA FORMA ENCUENTRA LA FUNCIÓN",
        text: "No existe verdadera estética sin una función perfecta. Cada tratamiento está diseñado para soportar las fuerzas masticatorias mientras luce impecable.",
        list: ["Función masticatoria", "Salud periodontal", "Estabilidad clínica", "Conservación estructural", "Equilibrio oclusal", "Armonía estética"]
      },
      journey: {
        title: "LUXURY PATIENT JOURNEY™",
        list: [
          { title: "Consulta Personalizada", text: "Entendemos tus expectativas y objetivos estéticos." },
          { title: "Diagnóstico de Precisión", text: "Análisis clínico y digital exhaustivo." },
          { title: "Planificación Estética Avanzada", text: "Diseño virtual y prueba en boca (mock-up)." },
          { title: "Ejecución Clínica Especializada", text: "Procedimientos de alta precisión y confort." },
          { title: "Acompañamiento Continuo", text: "Mantenimiento y cuidado a largo plazo." }
        ]
      }
    },
    gallery: {
      title: "Galería de Sonrisas",
      text: "Resultados reales que reflejan nuestra pasión por la excelencia estética.",
      cta: "Ver Detalle"
    },
    contactPage: {
      title: "Contacto",
      subtitle: "Inicia tu transformación hoy. Estamos listos para recibirte.",
      info: {
        patients: "Atendiendo a pacientes de todo el Perú y del extranjero. Como parte del ecosistema Officia Medical Co, ofrecemos una experiencia médica integral y segura.",
        locations: [
          {
            label: "Sede Lima",
            location: "Odontoxpert",
            value: "Psje F 3, Lote 55-A Urb, Juan XXIII\nAltura cdra 29 de la Av. Angamos Este\nSan Borja 15037, Lima - Perú",
            mapUrl: "https://goo.gl/maps/y2gQSkpDVqnrU4EA6",
            phone: "+51 994 695 200"
          },
          {
            label: "Sede Piura",
            location: "Officia Medical Coworking",
            value: "Calle Los Rosales Mzn I Lote 21\nMiraflores – Castilla\nPiura, Perú",
            mapUrl: "https://maps.app.goo.gl/pAJUEqQ1jchGUcnZA",
            phone: "+51 986 840 142"
          }
        ],
        phone: {
          label: "Contacto Directo",
          value: "+51 994 695 200"
        },
        email: {
          label: "Correo Electrónico",
          value: "citas@dramirella.com"
        },
        hours: {
          label: "Horario de Atención",
          value: "Lunes a Viernes: 9:00 am - 8:00 pm\nSábados: 9:00 am - 1:00 pm"
        }
      },
      form: {
        title: "Agendar Cita",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Teléfono",
        message: "Mensaje o Consulta",
        submit: "Solicitar Cita"
      }
    },
    footer: {
      copyright: "Officia Medical Coworking - Dra. Mirella Arellano. Todos los Derechos Reservados."
    }
  },
  en: {
    header: {
      about: "About Us",
      services: "Services",
      contact: "Contact",
      schedule: "Schedule Appointment"
    },
    hero: {
      title: "Dr. Mirella Arellano",
      titleBr: "Specialized Dentistry",
      subtitle: "The Art of Luxury Dentistry in Peru.",
      description: "Premium aesthetic dentistry combining clinical precision, cutting-edge technology, and a deeply artistic vision to transform smiles with naturalness and excellence.",
      locations: "Serving patients from Peru and the world. Locations in Lima and Piura.",
      badge: "Luxury Aesthetic Dentistry | Peru",
      specialties: ["Premium Signature Veneers", "Oral Rehabilitation", "Implantology", "Maxillofacial Surgery", "Facial Harmonization"],
      cta: "View Services"
    },
    about: {
      experience: {
        title: "The Mirella Experience",
        subtitle: "Where clinical excellence meets the art of dental aesthetics.",
        text: "We believe in dentistry that goes beyond the conventional. The comprehensive experience begins with a precise diagnosis, integrating facial aesthetics, oral functionality, and the emotional well-being of each patient. This is The Mirella Experience."
      },
      philosophy: {
        title: "Our Philosophy",
        text: "Guided by innovation and empathy, our practice is founded on unwavering clinical principles:",
        list: [
          "Advanced Aesthetics",
          "Oral Functionality",
          "Structural Conservation",
          "Precision Digital Technology",
          "Minimally Invasive Dentistry",
          "Artisanal Excellence"
        ]
      },
      ceramists: {
        title: "Master Ceramists of Peru",
        text: "We work exclusively with internationally recognized Peruvian master ceramists. Each restoration is hand-sculpted using high-precision protocols, ensuring unsurpassed naturalness and biomimetic adaptation."
      },
      drMirella: {
        title: "We are Dra. Mirella Arellano Specialized Dentistry",
        text: "With locations in Lima and Piura, we serve national and international patients under a multidisciplinary clinical approach. We are part of the prestigious medical ecosystem Officia Medical Co, providing a safe and avant-garde environment."
      },
      whyUs: {
        title: "Why Choose Us",
        list: [
          "Clinical Excellence",
          "Contemporary Aesthetic Dentistry",
          "Premium Signature Veneers",
          "Specialized Ceramists",
          "Advanced Technology",
          "Personalized Experience",
          "Multidisciplinary Approach",
          "Luxury Patient Experience",
          "National and International Care"
        ]
      },
      principles: {
        title: "Precision. Art. Excellence.",
        subtitle: "Three principles that define our practice.",
        text: "An extraordinary smile never happens by chance. It is designed."
      },
      officia: {
        title: "Integrated Medical Experience — Officia Medical Co",
        text: "Our clinic is proudly part of Officia Medical Co, a multidisciplinary medical ecosystem bringing together the best specialists. We welcome you to top-level facilities in our Lima and Piura locations."
      }
    },
    intro: {
      title: "About Dr.",
      titleBr: "Mirella Arellano",
      text: "With over 15 years of experience, Dr. Mirella Arellano is dedicated to the diagnosis and comprehensive treatment of oral health, specializing in Oral Rehabilitation from the University of Applied Sciences (UPC) in Lima. She has perfected her practice with dental aesthetics training in Brazil and the United States, combining science, technique, and art to provide personalized solutions for every patient.",
      subText: "Her focus is on preserving functionality, health, and dental aesthetics, with commitment, precision, and excellent human treatment.",
      quote: "Transforming your smile is transforming your life.",
      cta: "Learn More"
    },
    features: {
      mainTitle: "Dental Excellence",
      mainDesc: "We combine technology, experience, and art to transform smiles with the highest quality standards.",
      items: [
        {
          title: "State-of-the-Art Technology",
          description: "Modern equipment for precise and comfortable treatments.",
          image: `${BASE_URL}portada_curaciones.JPG`
        },
        {
          title: "Premium Materials",
          description: "High-quality supplies guaranteeing durability and aesthetics.",
          image: `${BASE_URL}carillas_dentales_portada.JPG`
        },
        {
          title: "Comprehensive Care",
          description: "All specialties in one place for your convenience.",
          image: `${BASE_URL}perfil_mirella_v.JPG`
        }
      ]
    },
    process: {
      items: [
        {
          title: "Diagnosis",
          description: "Complete evaluation of your oral health.",
          image: `${BASE_URL}profilaxis_portada.JPG`
        },
        {
          title: "Planning",
          description: "Personalized design of your treatment.",
          image: `${BASE_URL}carillas_emax.JPG`
        },
        {
          title: "Transformation",
          description: "Treatment execution with the highest standards.",
          image: `${BASE_URL}blanqueamiento_consultorio_3.JPG`
        }
      ]
    },
    services: {
      mainTitle: "Our Specialized Services",
      mainDesc: "Clinical experiences designed to restore function, harmony, and confidence to your oral health with the highest standards.",
      categories: [
        {
          title: "Restoration & Dental Health",
          description: "Conservative treatments to recover biological integrity.",
          image: `${BASE_URL}portada_curaciones.JPG`,
          items: [
            { name: "Simple Fillings", image: `${BASE_URL}curaciones_simples.jpg`, desc: "Minimally invasive procedure designed to treat cavities in their early stages using high-aesthetic resins." },
            { name: "Complex Fillings", image: `${BASE_URL}curaciones_complejas.jpg`, desc: "Advanced anatomical reconstruction for teeth with significant structural compromise using layering techniques." }
          ]
        },
        {
          title: "Dental Aesthetics & Smile Design",
          description: "The perfect fusion of art and clinical dentistry.",
          image: `${BASE_URL}carillas_dentales_portada.JPG`,
          items: [
            { name: "Resin Veneers", image: `${BASE_URL}carillas_resina.JPG`, desc: "Direct dental sculpture in a single appointment. Modifies shape, closes spaces, or corrects color." },
            { name: "Emax Porcelain Veneers", image: `${BASE_URL}carillas_emax.JPG`, desc: "Ultra-thin lithium disilicate ceramic laminates offering natural translucency and high resistance." },
            { name: "Office Whitening", image: `${BASE_URL}blanqueamiento_consultorio_3.JPG`, desc: "High-power clinical protocol (3 sessions) that safely and efficiently lightens several shades." },
            { name: "Express Whitening", desc: "Intensive session designed for immediate results. Ideal for tight schedules." },
            { name: "Home Whitening", desc: "Gradual whitening system with custom trays for comfortable home use." }
          ]
        },
        {
          title: "Prophylaxis & Hygiene",
          description: "Advanced prevention for sustainable oral health.",
          image: `${BASE_URL}profilaxis_portada.JPG`,
          items: [
            { name: "Professional Prophylaxis", image: `${BASE_URL}profilaxis.jpg`, desc: "Deep cleaning with ultrasound and polishing to remove biofilm and stains." },
            { name: "Scaling", desc: "Meticulous removal of accumulated tartar. Vital to stop gingivitis." },
            { name: "Root Planing", image: `${BASE_URL}raspado_alisado_radicular.JPG`, desc: "Deep periodontal therapy focused on decontaminating tooth roots under the gum." }
          ]
        },
        {
          title: "Oral Rehabilitation & Prosthetics",
          description: "Dental engineering to recover total chewing function.",
          image: `${BASE_URL}coronas_portada.JPG`,
          items: [
            { name: "Feldspathic Crowns", image: `${BASE_URL}coronas_porcelana.JPG`, desc: "High aesthetic fixed prostheses. Preferred choice for front teeth." },
            { name: "Emax Crowns", image: `${BASE_URL}coronas_emax.JPG`, desc: "Metal-free prostheses combining strength with superior aesthetics." },
            { name: "Zirconia Crowns", image: `${BASE_URL}coronas_zirconio.JPG`, desc: "Extraordinary hardness material for posterior teeth. Balance of durability and aesthetics." },
            { name: "Full Dentures", image: `${BASE_URL}protesis_totales.JPG`, desc: "Complete rehabilitation recovering vertical face dimension and function." },
            { name: "Removable Partial Dentures", image: `${BASE_URL}removible_ppr.JPG`, desc: "Lightweight metal structures replacing multiple lost teeth." },
            { name: "Flexible Wipla Dentures", image: `${BASE_URL}wipla.JPG`, desc: "Modern alternative free of metal clasps, aesthetic and comfortable." }
          ]
        },
        {
          title: "Implantes y Estructuras",
          description: "Solid foundations for a permanent smile.",
          image: `${BASE_URL}corona_porcelana_2.JPG`,
          items: [
            { name: "Dental Implants", desc: "Biocompatible titanium screw insertion acting as artificial root." },
            { name: "Inlays/Onlays", desc: "Custom indirect restorations for medium destruction teeth." },
            { name: "Posts (Fiber/Metal)", desc: "Anchoring systems for endodontically treated teeth." }
          ]
        },
        {
          title: "Endodontics",
          description: "We save your natural teeth from pain and infection.",
          image: `${BASE_URL}endodoncias_portada.JPG`,
          items: [
            { name: "Anterior Root Canal", image: `${BASE_URL}endodoncias_anteriores.JPG`, desc: "Treatment on incisors and canines to remove infection and preserve the tooth." },
            { name: "Posterior Root Canal", image: `${BASE_URL}endodoncias_posteriores.JPG`, desc: "Internal microsurgery on molars to clean complex canals." }
          ]
        },
        {
          title: "Oral Surgery & Gums",
          description: "Precise interventions for tissue health.",
          image: `${BASE_URL}exodoncias_portada.JPG`,
          items: [
            { name: "Simple Extraction", image: `${BASE_URL}exodoncia_simple.JPG`, desc: "Safe and atraumatic extraction of compromised teeth." },
            { name: "Complex Extraction", image: `${BASE_URL}exodoncia_compleja.JPG`, desc: "Surgery for impacted teeth prioritizing bone preservation." },
            { name: "Gingivoplasty", image: `${BASE_URL}gingivoplastia.JPG`, desc: "Aesthetic remodeling of gum contour to harmonize smile." },
            { name: "Gingivectomy", image: `${BASE_URL}gingivectomia.JPG`, desc: "Removal of excess gum tissue." }
          ]
        },
        {
          title: "Orthodontics",
          description: "Precise alignment for a functional and aesthetic bite.",
          items: [
            { name: "Aesthetic Orthodontics", desc: "Sapphire or ceramic brackets blending with enamel." },
            { name: "Invisible Orthodontics", desc: "Transparent removable aligners. Comfortable and hygienic." }
          ]
        },
        {
          title: "Pediatric Dentistry",
          description: "Specialized care for the future of their smile.",
          items: [
            { name: "Child Care", desc: "Preventive and psychological approach adapted to children." }
          ]
        }
      ],
    },
    servicesPage: {
      overview: {
        title: "PREMIUM SERVICES",
        subtitle: "Specialized clinical excellence. Designed around you.",
        list: ["Premium Signature Veneers", "Smile Design", "Comprehensive Oral Rehabilitation", "Advanced Implantology", "Oral and Maxillofacial Surgery", "Facial Harmonization", "Contemporary Aesthetic Dentistry", "Smile Rejuvenation", "High-precision aesthetic restorations"]
      },
      veneers: {
        title: "PREMIUM SIGNATURE VENEERS",
        subtitle: "Our aesthetic signature",
        text: "We design unique smiles that complement your facial architecture, using the highest quality ultra-thin ceramics to achieve undetectable and luminous results.",
        list: ["Facial architecture", "Dental proportions", "Dynamic smile", "Aesthetic profile", "Visual naturalness", "Oral function"]
      },
      customization: {
        title: "TOTALLY PERSONALIZED. EXTRAORDINARILY NATURAL.",
        list: ["Digital Smile Design", "Advanced clinical photography", "Facial analysis", "Digital intraoral scanning", "Aesthetic mock-ups", "Clinical precision protocols"]
      },
      technology: {
        title: "TECHNOLOGY & DIGITAL PRECISION",
        list: ["Digital intraoral scanner", "Digital Smile Design", "Advanced 3D radiology", "Professional clinical photography", "Comprehensive digital diagnosis", "Personalized aesthetic planning", "High-precision clinical workflow"]
      },
      goals: {
        title: "DENTISTRY BASED ON YOUR GOALS",
        subtitle: "We listen first. We design later.",
        list: ["Oral health", "Facial aesthetics", "Chewing function", "Dental conservation", "Clinical longevity", "Personalized aesthetic results"]
      },
      rehabilitation: {
        title: "PREMIUM ORAL REHABILITATION",
        text: "We restore function and aesthetics to complex mouths through comprehensive treatments, recovering the vertical dimension and correct anatomical occlusion.",
        list: ["Advanced aesthetic restorations", "Tooth replacement", "Functional correction", "Occlusal optimization", "Comprehensive smile design", "Interdisciplinary protocols"]
      },
      implantology: {
        title: "ADVANCED IMPLANTOLOGY",
        subtitle: "Surgical precision. Sophisticated aesthetics.",
        text: "We replace missing teeth with next-generation titanium artificial roots, digitally planned for perfect integration and lifelong results.",
        list: ["Three-dimensional diagnosis", "Personalized planning", "Contemporary surgical protocols", "Advanced aesthetic integration", "Harmonic restorations", "Functional rehabilitation"]
      },
      surgery: {
        title: "ORAL AND MAXILLOFACIAL SURGERY",
        text: "Minimally invasive surgical procedures with the highest biosafety standards, focused on preserving tissue and accelerating recovery.",
        list: ["Advanced oral surgery", "Reconstructive procedures", "Complex extractions", "Specialized surgical management", "Interdisciplinary functional and aesthetic evaluation"]
      },
      harmonization: {
        title: "FACIAL HARMONIZATION",
        text: "We complement your smile with facial aesthetic procedures that balance your proportions, achieving subtle and natural rejuvenation.",
        list: ["Comprehensive facial evaluation", "Balance of proportions", "Aesthetic rejuvenation", "Facial contour optimization", "Smile-face integration"]
      },
      formAndFunction: {
        title: "WHERE FORM MEETS FUNCTION",
        text: "There is no true aesthetics without perfect function. Each treatment is designed to withstand chewing forces while looking impeccable.",
        list: ["Chewing function", "Periodontal health", "Clinical stability", "Structural conservation", "Occlusal balance", "Aesthetic harmony"]
      },
      journey: {
        title: "LUXURY PATIENT JOURNEY™",
        list: [
          { title: "Personalized Consultation", text: "We understand your expectations and aesthetic goals." },
          { title: "Precision Diagnosis", text: "Comprehensive clinical and digital analysis." },
          { title: "Advanced Aesthetic Planning", text: "Virtual design and intraoral test (mock-up)." },
          { title: "Specialized Clinical Execution", text: "High-precision and comfortable procedures." },
          { title: "Continuous Accompaniment", text: "Long-term maintenance and care." }
        ]
      }
    },
    gallery: {
      title: "Smile Gallery",
      text: "Real results that reflect our passion for aesthetic excellence.",
      cta: "View Detail"
    },
    contactPage: {
      title: "Contact",
      subtitle: "Start your transformation today. We are ready to welcome you.",
      info: {
        patients: "Serving patients from all over Peru and abroad. As part of the Officia Medical Co ecosystem, we offer a comprehensive and safe medical experience.",
        locations: [
          {
            label: "Lima Location",
            location: "Odontoxpert",
            value: "Psje F 3, Lote 55-A Urb, Juan XXIII\nAltura cdra 29 de la Av. Angamos Este\nSan Borja 15037, Lima - Peru",
            mapUrl: "https://goo.gl/maps/y2gQSkpDVqnrU4EA6",
            phone: "+51 994 695 200"
          },
          {
            label: "Piura Location",
            location: "Officia Medical Coworking",
            value: "Calle Los Rosales Mzn I Lote 21\nMiraflores – Castilla\nPiura, Peru",
            mapUrl: "https://maps.app.goo.gl/pAJUEqQ1jchGUcnZA",
            phone: "+51 986 840 142"
          }
        ],
        phone: {
          label: "Direct Contact",
          value: "+51 994 695 200"
        },
        email: {
          label: "Email",
          value: "citas@dramirella.com"
        },
        hours: {
          label: "Business Hours",
          value: "Mon - Fri: 9:00 am - 8:00 pm\nSat: 9:00 am - 1:00 pm"
        }
      },
      form: {
        title: "Schedule Appointment",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Message or Inquiry",
        submit: "Request Appointment"
      }
    },
    footer: {
      copyright: "Officia Medical Coworking - Dra. Mirella Arellano. All Rights Reserved."
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
