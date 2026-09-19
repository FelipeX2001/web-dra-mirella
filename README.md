# Dra. Mirella Arellano | Odontología Especializada & Estética Dental

> **"The Art of Luxury Dentistry in Peru."**  
> Sitio web oficial de la Dra. Mirella Arellano, especialista en Rehabilitación Oral, Odontología Estética y Diseño de Sonrisa en Lima y Piura (Perú).

[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-Proprietary-gold?style=for-the-badge)](#)

---

## 📖 Tabla de Contenidos

1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Identidad Visual y Filosofía de Diseño](#-identidad-visual-y-filosofía-de-diseño)
3. [Características Principales](#-características-principales)
4. [Estructura de la Web y Páginas](#-estructura-de-la-web-y-páginas)
5. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
6. [Estructura del Proyecto](#-estructura-del-proyecto)
7. [Instalación y Uso en Local](#-instalación-y-uso-en-local)
8. [Scripts Disponibles](#-scripts-disponibles)
9. [Sedes de Atención](#-sedes-de-atención)
10. [Internacionalización (i18n)](#-internacionalización-i18n)
11. [Despliegue](#-despliegue)
12. [Créditos](#-créditos)

---

## 💎 Descripción del Proyecto

Este proyecto es la plataforma web institucional y de captación de pacientes para la clínica de la **Dra. Mirella Arellano - Odontología Especializada**. Desarrollada bajo el concepto de *Luxury Dentistry*, combina máxima precisión clínica, tecnología de vanguardia y una visión artística para transformar sonrisas con naturalidad y excelencia.

La web está concebida tanto para pacientes locales como para pacientes internacionales que viajan a Perú para realizarse tratamientos de alta gama (turismo odontológico y estética dental).

---

## ✨ Identidad Visual y Filosofía de Diseño

- **Estética Editorial de Lujo**: Espaciados generosos, paleta minimalista y contrastes calculados.
- **Paleta de Colores**:
  - `primary` (`#1a1a1a`): Negro grafito profundo para fondos oscuros y tipografía de alto contraste.
  - `secondary` (`#cfa068`): Tono oro cálido / champagne para líneas de acento, bordes sutiles y detalles exclusivos.
  - `background` (`#f8f7f2`): Blanco marfil / pergamino sofisticado que evita el blanco puro hospitalario.
  - `surface` (`#ffffff`): Tarjetas y módulos luminosos con bordes sutiles.
- **Tipografía**:
  - **Playfair Display**: Fuente serif editorial para titulares y citas inspiracionales.
  - **Montserrat**: Sans-serif geométrica con tracking amplio (`tracking-widest`) para etiquetas, navegación y botones en mayúsculas.
- **Fotografía Clínica Real**: Casos clínicos reales con cerámicas feldespáticas y disilicato de litio (E-Max), tomas de laboratorio dental con maestros ceramistas y espacios arquitectónicos de las clínicas.

---

## 🚀 Características Principales

- 🌐 **Soporte Bilingüe Completo (ES / EN)**: Cambio dinámico e instantáneo de idioma entre Español e Inglés mediante un contexto global de React (`LanguageContext`), conservando la posición de navegación y las traducciones exactas de cada sección.
- 📱 **100% Responsivo y Mobile-First**: Adaptación milimétrica para smartphones, tablets y pantallas de alta resolución ultra-wide.
- 🧭 **Navegación SPA Fluida**: Utiliza `HashRouter` para garantizar navegación instantánea y compatibilidad universal en cualquier servidor estático (GitHub Pages, Vercel, Netlify, Cloud Run) sin errores 404 en recargas.
- 🔝 **Restauración Automática de Scroll**: Componente `ScrollToTop` que posiciona la vista al inicio en cada cambio de ruta.
- 🏛️ **Integración de Sedes con Google Maps**: Direcciones completas, números telefónicos directos y enlaces verificados a Google Maps para las sedes de Lima y Piura.
- 📅 **Llamados a la Acción (CTA) Claros**: Botón persistente de *Agendar Cita* en el encabezado, navegación móvil y pie de página, conectado al formulario y canales de atención.

---

## 📄 Estructura de la Web y Páginas

La aplicación se estructura en cuatro vistas principales:

### 1. Inicio (`/`)
* **Hero Editorial**: Título estilizado, propuesta de valor de odontología de lujo, badges de tratamientos insignia y acceso rápido.
* **Intro Section**: Declaración de principios de la clínica, combinación de biomimética y armonía facial.
* **Feature Grid**: Pilares del tratamiento (Precisión milimétrica, diagnóstico 3D, confort y privacidad).
* **Maestros Ceramistas**: Homenaje al arte de la estratificación dental artesanal en Perú.
* **Process Steps**: Fases del tratamiento clínico desde la primera cita hasta el resultado final.
* **Galería Antes / Después**: Casos clínicos destacados con carillas cerámicas y diseño de sonrisa.

### 2. Sobre Nosotros (`/about`)
* **Nuestra Filosofía**: Enfoque humano, biomimética y excelencia sin atajos.
* **Dra. Mirella Arellano**: Perfil profesional y trayectoria como rehabilitadora oral.
* **Maestros Ceramistas del Perú**: Colaboración estrecha con los mejores laboratorios de cerámica dental del país.
* **Equipo Multidisciplinario**: Cirujanos maxilofaciales, implantólogos y especialistas complementarios.
* **Por Qué Elegirnos**: Protocolos de bioseguridad, atención personalizada y resultados que perduran.

### 3. Servicios (`/services`)
* **Servicios Premium**: Catálogo con descripción de cada especialidad.
* **Carillas Premium Signature**: La firma de la clínica en cerámicas ultrafinas indetectables.
* **Totalmente Personalizado**: Diagnóstico facial, mock-up intraoral y prueba estética antes de iniciar.
* **Tecnología & Precisión Digital**: Escáner intraoral 3D, DSD (Digital Smile Design) y fotografía macro.
* **Rehabilitación Oral e Implantología Avanzada**: Restauración de oclusión, reemplazo de piezas con implantes de titanio.
* **Cirugía Oral, Maxilofacial y Armonización Facial**: Procedimientos quirúrgicos y balance estético facial.
* **Luxury Patient Journey™**: Las 5 etapas de la experiencia del paciente de inicio a fin.

### 4. Contacto (`/contact`)
* **Sedes Lima y Piura**: Direcciones detalladas, teléfonos de contacto y enlaces directos a Google Maps.
* **Atención Nacional e Internacional**: Orientación para pacientes que viajan desde el extranjero.
* **Ecosistema**: Alianza y pertenencia a **Officia Medical Co** y **Odontoxpert**.
* **Formulario de Cita**: Formulario para solicitud de citas y consultas.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
| :--- | :--- |
| **React 19** | Biblioteca principal para construcción de interfaces de usuario |
| **TypeScript** | Tipado estricto y seguridad en tiempo de desarrollo |
| **Vite 6** | Entorno de desarrollo rápido y empaquetador ultraligero |
| **Tailwind CSS** | Framework de estilos utilitarios con temas personalizados |
| **React Router v6** | Enrutamiento SPA en el lado del cliente (`HashRouter`) |
| **Lucide React** | Conjunto de iconos vectoriales elegantes y consistentes |
| **Google Fonts** | Tipografías *Playfair Display* y *Montserrat* |

---

## 📁 Estructura del Proyecto

```text
├── components/
│   ├── About.tsx            # Subpágina "Sobre Nosotros" y equipo
│   ├── Contact.tsx          # Subpágina "Contacto", sedes y mapa
│   ├── FeatureGrid.tsx      # Cuadrícula de características y beneficios
│   ├── Footer.tsx           # Pie de página institucional y enlaces
│   ├── Gallery.tsx          # Muestra interactiva de casos clínicos
│   ├── Header.tsx           # Barra de navegación superior y selector i18n
│   ├── Hero.tsx             # Portada principal e imagen de impacto
│   ├── Home.tsx             # Ensamblado de la vista principal
│   ├── IntroSection.tsx     # Sección introductoria de bienvenida
│   ├── ProcessSteps.tsx     # Pasos secuenciales del tratamiento
│   └── ServicesList.tsx     # Subpágina "Servicios" y catálogo completo
├── App.tsx                  # Componente raíz con enrutamiento y ScrollToTop
├── LanguageContext.tsx      # Contexto React y diccionario bilingüe (ES / EN)
├── index.html               # Entrypoint HTML, SEO, OpenGraph y configuración Tailwind
├── index.tsx                # Entrada React DOM
├── metadata.json            # Metadatos del applet
├── package.json             # Dependencias y scripts de ejecución
├── tsconfig.json            # Configuración de compilación TypeScript
└── vite.config.ts           # Configuración del empaquetador Vite
```

---

## 💻 Instalación y Uso en Local

### Prerrequisitos
- **Node.js** (versión 18 o superior recomendada)
- **npm** o **bun**

### Pasos

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/dra-mirella-arellano.git
   cd dra-mirella-arellano
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) o la URL indicada en la terminal para visualizar el sitio.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Los archivos estáticos optimizados se generarán en la carpeta `dist/`.

5. **Previsualizar la compilación de producción**:
   ```bash
   npm run preview
   ```

---

## 📍 Sedes de Atención

### Sede Lima (Odontoxpert)
- **Dirección**: Pasaje F 3, Lote 55-A Urb. Juan XXIII (Altura cdra. 29 de la Av. Angamos Este), San Borja 15037, Lima, Perú.
- **Teléfono**: [+51 994 695 200](tel:+51994695200)
- **Ubicación Google Maps**: [Ver en Google Maps](https://goo.gl/maps/y2gQSkpDVqnrU4EA6)

### Sede Piura (Officia Medical Coworking)
- **Dirección**: Calle Los Rosales Mzn I Lote 21, Miraflores – Castilla, Piura, Perú.
- **Teléfono**: [+51 986 840 142](tel:+51986840142)
- **Ubicación Google Maps**: [Ver en Google Maps](https://maps.app.goo.gl/pAJUEqQ1jchGUcnZA)

---

## 🌍 Internacionalización (i18n)

El sistema bilingüe está implementado en `LanguageContext.tsx`:
- Provee el hook `useLanguage()`.
- Expone `language` (`'es'` | `'en'`), la función `setLanguage(lang)` y el objeto `t` con todos los textos estructurados.
- No requiere dependencias externas pesadas, asegurando un peso mínimo del bundle y máxima velocidad de carga.

---

## 🚢 Despliegue

La aplicación compila a una Single Page Application (SPA) 100% estática en `dist/`:

- **GitHub Pages**: Al utilizar `HashRouter`, es compatible de forma nativa sin necesidad de reescrituras de servidor (redirecciones 404).
- **Vercel / Netlify / Cloudflare Pages**: Despliegue con un solo clic conectando el repositorio de GitHub con el comando `npm run build` y directorio de salida `dist`.
- **Cloud Run / Docker**: El contenedor sirve los estáticos a través de Nginx o un servidor web ligero.

---

## 👩‍⚕️ Créditos

- **Odontología Especializada**: Dra. Mirella Arellano
- **Afiliaciones**: Odontoxpert & Officia Medical Coworking
- **Diseño y Desarrollo Web**: Desarrollado con dedicación a la estética y experiencia de usuario de lujo.

---

*© Dra. Mirella Arellano - Todos los derechos reservados.*
