import { Language, Translations } from '../types';

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      tour: "Immersive Experiences",
      drone: "Aerial Cinematography",
      website: "Digital Flagships",
      photography: "Visual Artistry",
      contact: "Consultation",
      getStarted: "Begin Your Project",
    },
    hero: {
      title: "Engineering Digital Legacies",
      subtitle: "Where Vision Meets Virtual Precision",
      description: "We craft unparalleled digital experiences—from immersive virtual realities to bespoke online flagships—that define the future of your brand's presence.",
    },
    services: {
        title: 'Our Signature Disciplines',
        subtitle: 'A curated suite of elite digital services, each executed with meticulous precision to elevate your brand beyond the conventional.',
        list: [
            { id: 'tour', title: 'Immersive Experiences', description: 'Construct hyper-realistic digital twins of your environment. Our immersive experiences are crafted to captivate and convert.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Aerial Cinematography', description: 'Command the sky with cinematic aerial storytelling. We capture dynamic, high-fidelity visuals that offer a transcendent perspective.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Digital Flagships', description: 'Commission a bespoke digital flagship. Our websites are architected for performance, elegance, and enduring brand impact.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Visual Artistry', description: 'Define your brand\'s narrative through compelling visual artistry. We produce meticulously crafted images that resonate and inspire.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Schedule a Private Consultation",
      subtitle: "Discuss your project's vision with our strategists. We are prepared to translate your ambitions into a tangible digital reality. Kindly provide your details below.",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Business Email",
      messagePlaceholder: "Project Brief",
      submitButton: "Submit Inquiry",
      formSuccess: "Your inquiry has been received.",
      formError: "Please ensure all fields are completed correctly.",
    },
    footer: {
      rights: "All Rights Reserved.",
    },
    pages: {
        tour: {
            hero: {
                title: "Immersive 360° Experiences",
                subtitle: "Transcend physical boundaries. Invite the world inside.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "The Architecture of Virtual Presence",
                paragraphs: [
                    "Our 360° virtual tours are not mere scans; they are meticulously engineered digital assets. We construct hyper-realistic digital twins of your environment in stunning 8K resolution, offering an experience so visceral it rivals physical presence. Every detail is captured, every texture rendered, creating a seamless and intuitive exploration.",
                    "This is the new frontier of audience engagement. Empower potential clients to inhabit your space from anywhere in the world, fostering a deeper connection and accelerating decision-making. From exclusive real estate portfolios to architectural marvels, we transform your physical space into an unforgettable virtual destination."
                ]
            },
            gallery: {
                title: "A Curated Perspective",
                subtitle: "Witness the clarity and depth that define our immersive creations.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Modern living room with elegant furniture" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "360 degree camera on a tripod in a bright room" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Spacious modern kitchen with island" }
                ]
            },
            features: {
                title: "The Hallmarks of Our Craft",
                subtitle: "Our commitment to technological excellence and artistic direction ensures an unparalleled final product.",
                items: [
                    { icon: 'Eye', title: 'Hyper-Realistic Immersion', description: 'Experience seamless, true-to-life navigation with our industry-leading 8K panoramic imaging.' },
                    { icon: 'MousePointerClick', title: 'Curated Interactive Points', description: 'Embed rich media—video, text, and external links—to create a compelling, narrative-driven experience.' },
                    { icon: 'Smartphone', title: 'Universal Accessibility', description: 'Flawless performance across all platforms, from desktop browsers to high-end VR headsets.' },
                    { icon: 'Share2', title: 'Effortless Integration', description: 'Deploy your virtual experience with a simple, elegant embed on your website or shareable link.' },
                ]
            },
            pricing: {
                title: "Investment Tiers for Virtualization",
                subtitle: "Select a package tailored to the scale and ambition of your digital environment.",
                plans: [
                    { name: "Essential", price: "$499", period: "per space", features: ["Up to 1,500 sq ft", "15 8K Panorama Points", "Standard Interactive Hotspots", "3 Months Premium Hosting"], isFeatured: false },
                    { name: "Professional", price: "$899", period: "per space", features: ["Up to 4,000 sq ft", "35 8K Panorama Points", "Custom Branded UI/UX", "Google Street View Integration", "1 Year Premium Hosting"], isFeatured: true },
                    { name: "Enterprise", price: "Bespoke", period: "", features: ["Unlimited Scale", "Multi-Location Rollout", "Advanced User Analytics", "API & SDK Access", "Dedicated Account Manager"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Aerial Cinematography",
                subtitle: "A perspective reserved for the ambitious.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Mastery of the Aerial Domain",
                paragraphs: [
                    "We offer more than just drone operation; we provide aerial artistry. Our certified cinematographers command an elite fleet of drones, engineered for stability and equipped with cinema-grade cameras. We capture sweeping vistas and dynamic action with a precision that transforms the ordinary into the extraordinary.",
                    "From luxury property showcases that demand a sense of scale and grandeur to complex industrial surveys requiring absolute accuracy, our aerial solutions deliver unparalleled data and breathtaking visuals. We turn the sky into a canvas for your vision, providing a powerful and unique narrative tool."
                ]
            },
            gallery: {
                title: "The View from Above",
                subtitle: "A collection of our work, showcasing the power of an elevated perspective.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Drone flying over a dramatic coastal landscape" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Top-down aerial view of a winding road through a forest" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Close-up of a professional cinematography drone" }
                ]
            },
            features: {
                title: "Our Aerial Arsenal",
                subtitle: "Leveraging cutting-edge technology and seasoned expertise to deliver superior aerial intelligence and visuals.",
                items: [
                    { icon: 'Film', title: '6K Cinematic Capture', description: 'Produce breathtaking, buttery-smooth aerial footage with our cinema-grade drone camera systems.' },
                    { icon: 'Building', title: 'Architectural & Real Estate', description: 'Present properties with unparalleled grandeur, capturing their relationship with the surrounding landscape.' },
                    { icon: 'Search', title: 'Technical Inspection', description: 'Execute safe, high-resolution inspections of critical infrastructure with thermal and zoom capabilities.' },
                    { icon: 'Map', title: 'Precision Mapping & Surveying', description: 'Generate high-accuracy 2D orthomosaics and 3D models for land development and analysis.' },
                ]
            },
            pricing: {
                title: "Aerial Service Tiers",
                subtitle: "Curated packages for a range of photographic and cinematographic requirements.",
                plans: [
                    { name: "Scout Package", price: "$550", period: "per session", features: ["1.5 hours on-location", "30 Edited High-Res Stills", "Full Commercial License"], isFeatured: false },
                    { name: "Cinematic Package", price: "$950", period: "per session", features: ["Up to 3 hours on-location", "2-minute Edited 6K Film", "Custom Score & Color Grade", "Brand Integration"], isFeatured: true },
                    { name: "Full Production", price: "$2200", period: "full day", features: ["8 hours on-location", "All Raw Photo & Video Assets", "Dedicated Director & Pilot Team", "Priority Post-Production"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Bespoke Digital Flagships",
                subtitle: "Your brand's definitive online residence.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Engineering Digital Identity",
                paragraphs: [
                    "A website is not merely a digital brochure; it is the architectural centerpiece of your brand's identity. We architect and construct bespoke digital flagships—online experiences that are as performant as they are elegant. Our approach is holistic, integrating brand strategy, user experience design, and cutting-edge technology.",
                    "Every line of code, every pixel, and every interaction is purposefully designed to create an intuitive and memorable journey for your audience. We build for longevity, ensuring your digital presence is not only visually striking but also secure, scalable, and optimized for discoverability. This is digital craftsmanship of the highest order."
                ]
            },
            gallery: {
                title: "Digital Architecture Showcase",
                subtitle: "A glimpse into our philosophy of clean, purposeful, and elegant design.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Clean code on a dark screen" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Designer working on a website layout on a computer" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "A website shown on a laptop with analytics graphs" }
                ]
            },
            features: {
                title: "Pillars of Digital Excellence",
                subtitle: "Our development philosophy is founded on four core principles that ensure a superior final product.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Bespoke Design & UX', description: 'Every interface is a unique creation, tailored to your brand narrative and user psychology. No templates, ever.' },
                    { icon: 'Smartphone', title: 'Fluid-Responsive Architecture', description: 'An impeccable experience on every device, from mobile touchpoints to expansive desktop displays.' },
                    { icon: 'Rocket', title: 'Elite Performance', description: 'Engineered for sub-second load times. We optimize every asset for a blazingly fast user experience.' },
                    { icon: 'ShieldCheck', title: 'Fortress-Grade Security', description: 'Built upon a foundation of modern security protocols to protect your data and your reputation.' },
                ]
            },
            pricing: {
                title: "Investment in Digital Legacy",
                subtitle: "We offer a singular, comprehensive package for clients who demand an uncompromising online presence.",
                plans: [
                    { name: "The Overture", price: "$1,500", period: "one-time", features: ["Bespoke Single-Page Site", "Contact & Lead Capture Form", "Fluid-Responsive Design", "Core SEO Foundations"], isFeatured: false },
                    { name: "The Marquee", price: "$4,500", period: "one-time", features: ["Up to 10 Custom Pages", "Headless CMS Integration", "Blog & Content Platform", "Advanced SEO & Analytics", "Dedicated Project Manager"], isFeatured: true },
                    { name: "The Atelier", price: "Starts at $9,500", period: "", features: ["Full E-commerce Suite", "Product & Inventory System", "Secure Payment Integration", "Customer Account Portals", "Bespoke Feature Development"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Commercial Visual Artistry",
                subtitle: "Every pixel, perfected. Every image, a statement.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "The Art of the Still Image",
                paragraphs: [
                    "In a world saturated with images, we create visual assets that command attention. Our photographers are masters of light and composition, artists who craft narratives within a single frame. We move beyond simple documentation to produce images that are strategic, evocative, and meticulously executed.",
                    "Whether capturing the clean lines of a new architectural project or the intricate details of a luxury product, our process is defined by precision and a relentless pursuit of perfection. We utilize state-of-the-art equipment and advanced post-production techniques to deliver a final product that is nothing short of flawless."
                ]
            },
            gallery: {
                title: "A Portfolio of Precision",
                subtitle: "A curated selection of works that demonstrate our technical mastery and artistic vision.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Professional camera on a table" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Photographer taking a picture in an urban setting" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Stunning landscape photograph of mountains and a lake" }
                ]
            },
            features: {
                title: "Our Photographic Disciplines",
                subtitle: "Specialized photographic services, each executed with an unwavering commitment to quality and brand alignment.",
                items: [
                    { icon: 'Home', title: 'Architectural & Interior', description: 'Capture the essence of a space with perfectly composed, high-dynamic-range imagery.' },
                    { icon: 'Briefcase', title: 'Corporate & Editorial', description: 'Create a powerful brand narrative with professional executive portraits and event documentation.' },
                    { icon: 'ShoppingBag', title: 'Product & Still Life', description: 'Meticulously lit and styled imagery for e-commerce, advertising, and catalogs that drives desire.' },
                    { icon: 'Utensils', title: 'Culinary Arts', description: 'Transform your culinary creations into works of art with tantalizingly detailed food photography.' },
                ]
            },
            pricing: {
                title: "Commission Tiers",
                subtitle: "Structured packages for acquiring premium visual assets.",
                plans: [
                    { name: "The Vignette", price: "$450", period: "1 hour", features: ["Single Subject Focus", "15 Edited Digital Assets", "Online Proofing Gallery", "Ideal for portraits/products"], isFeatured: false },
                    { name: "The Lookbook", price: "$900", period: "3 hours", features: ["Multi-Subject Session", "40+ Edited Digital Assets", "Commercial Use License", "Perfect for property/brand"], isFeatured: true },
                    { name: "The Campaign", price: "$1800", period: "half day (5 hours)", features: ["Comprehensive Coverage", "100+ Edited Assets", "Art Direction & Styling", "Priority Post-Production"], isFeatured: false },
                ]
            }
        }
    },
  },
  es: {
    nav: {
      tour: "Experiencias Inmersivas",
      drone: "Cinematografía Aérea",
      website: "Emblemas Digitales",
      photography: "Arte Visual",
      contact: "Consulta",
      getStarted: "Iniciar Proyecto",
    },
    hero: {
      title: "Diseñando Legados Digitales",
      subtitle: "Donde la Visión se Une a la Precisión Virtual",
      description: "Creamos experiencias digitales incomparables—desde realidades virtuales inmersivas hasta emblemas online a medida—que definen el futuro de la presencia de su marca.",
    },
    services: {
        title: 'Nuestras Disciplinas Insignia',
        subtitle: 'Una suite curada de servicios digitales de élite, cada uno ejecutado con precisión meticulosa para elevar su marca más allá de lo convencional.',
        list: [
            { id: 'tour', title: 'Experiencias Inmersivas', description: 'Construimos gemelos digitales hiperrealistas de su entorno. Nuestras experiencias inmersivas están diseñadas para cautivar y convertir.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Cinematografía Aérea', description: 'Domine el cielo con narrativa visual cinematográfica. Capturamos imágenes dinámicas de alta fidelidad que ofrecen una perspectiva trascendente.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Emblemas Digitales', description: 'Encargue un emblema digital a medida. Nuestros sitios web están diseñados para el rendimiento, la elegancia y un impacto de marca duradero.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Arte Visual', description: 'Defina la narrativa de su marca a través de un arte visual convincente. Producimos imágenes meticulosamente elaboradas que resuenan e inspiran.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Agende una Consulta Privada",
      subtitle: "Discuta la visión de su proyecto con nuestros estrategas. Estamos preparados para traducir sus ambiciones en una realidad digital tangible. Por favor, proporcione sus datos a continuación.",
      namePlaceholder: "Nombre Completo",
      emailPlaceholder: "Email de Empresa",
      messagePlaceholder: "Resumen del Proyecto",
      submitButton: "Enviar Consulta",
      formSuccess: "Su consulta ha sido recibida.",
      formError: "Por favor, asegúrese de que todos los campos estén completos correctamente.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    pages: {
        tour: {
            hero: {
                title: "Experiencias Inmersivas 360°",
                subtitle: "Trascienda las fronteras físicas. Invite al mundo a entrar.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "La Arquitectura de la Presencia Virtual",
                paragraphs: [
                    "Nuestros tours virtuales 360° no son meros escaneos; son activos digitales meticulosamente diseñados. Construimos gemelos digitales hiperrealistas de su entorno en una impresionante resolución de 8K, ofreciendo una experiencia tan visceral que rivaliza con la presencia física. Cada detalle es capturado, cada textura renderizada, creando una exploración fluida e intuitiva.",
                    "Esta es la nueva frontera de la interacción con la audiencia. Permita que los clientes potenciales habiten su espacio desde cualquier parte del mundo, fomentando una conexión más profunda y acelerando la toma de decisiones. Desde carteras inmobiliarias exclusivas hasta maravillas arquitectónicas, transformamos su espacio físico en un destino virtual inolvidable."
                ]
            },
            gallery: {
                title: "Una Perspectiva Curada",
                subtitle: "Sea testigo de la claridad y profundidad que definen nuestras creaciones inmersivas.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Sala de estar moderna con muebles elegantes" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "Cámara de 360 grados en un trípode en una habitación luminosa" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Cocina moderna y espaciosa con isla" }
                ]
            },
            features: {
                title: "Los Sellos de Nuestro Oficio",
                subtitle: "Nuestro compromiso con la excelencia tecnológica y la dirección artística garantiza un producto final incomparable.",
                items: [
                    { icon: 'Eye', title: 'Inmersión Hiperrealista', description: 'Experimente una navegación fluida y realista con nuestras imágenes panorámicas de 8K líderes en la industria.' },
                    { icon: 'MousePointerClick', title: 'Puntos Interactivos Curados', description: 'Incruste contenido multimedia—video, texto y enlaces externos—para crear una experiencia narrativa y convincente.' },
                    { icon: 'Smartphone', title: 'Accesibilidad Universal', description: 'Rendimiento impecable en todas las plataformas, desde navegadores de escritorio hasta cascos de RV de alta gama.' },
                    { icon: 'Share2', title: 'Integración sin Esfuerzo', description: 'Implemente su experiencia virtual con una inserción simple y elegante en su sitio web o un enlace para compartir.' },
                ]
            },
            pricing: {
                title: "Niveles de Inversión para Virtualización",
                subtitle: "Seleccione un paquete adaptado a la escala y ambición de su entorno digital.",
                plans: [
                    { name: "Esencial", price: "€499", period: "por espacio", features: ["Hasta 140 m²", "15 Puntos Panorámicos 8K", "Puntos Interactivos Estándar", "3 Meses de Alojamiento Premium"], isFeatured: false },
                    { name: "Profesional", price: "€899", period: "por espacio", features: ["Hasta 370 m²", "35 Puntos Panorámicos 8K", "UI/UX de Marca Personalizada", "Integración con Google Street View", "1 Año de Alojamiento Premium"], isFeatured: true },
                    { name: "Empresarial", price: "A Medida", period: "", features: ["Escala Ilimitada", "Despliegue Multi-ubicación", "Análisis de Usuario Avanzado", "Acceso a API y SDK", "Gerente de Cuenta Dedicado"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Cinematografía Aérea",
                subtitle: "Una perspectiva reservada para los ambiciosos.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Dominio del Territorio Aéreo",
                paragraphs: [
                    "Ofrecemos más que la simple operación de drones; proporcionamos arte aéreo. Nuestros cinematógrafos certificados comandan una flota de élite de drones, diseñados para la estabilidad y equipados con cámaras de grado cinematográfico. Capturamos vistas panorámicas y acción dinámica con una precisión que transforma lo ordinario en extraordinario.",
                    "Ya sea para exhibiciones de propiedades de lujo que exigen una sensación de escala y grandeza o para inspecciones industriales complejas que requieren una precisión absoluta, nuestras soluciones aéreas ofrecen datos incomparables y visuales impresionantes. Convertimos el cielo en un lienzo para su visión, proporcionando una herramienta narrativa poderosa y única."
                ]
            },
            gallery: {
                title: "La Vista desde Arriba",
                subtitle: "Una colección de nuestro trabajo, que muestra el poder de una perspectiva elevada.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Dron volando sobre un espectacular paisaje costero" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Vista aérea cenital de una carretera sinuosa a través de un bosque" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Primer plano de un dron de cinematografía profesional" }
                ]
            },
            features: {
                title: "Nuestro Arsenal Aéreo",
                subtitle: "Aprovechando la tecnología de vanguardia y la experiencia consolidada para ofrecer inteligencia y visuales aéreos superiores.",
                items: [
                    { icon: 'Film', title: 'Captura Cinematográfica 6K', description: 'Produzca metraje aéreo impresionante y fluido con nuestros sistemas de cámara de dron de grado cinematográfico.' },
                    { icon: 'Building', title: 'Arquitectura y Bienes Raíces', description: 'Presente propiedades con una grandeza incomparable, capturando su relación con el paisaje circundante.' },
                    { icon: 'Search', title: 'Inspección Técnica', description: 'Ejecute inspecciones seguras y de alta resolución de infraestructuras críticas con capacidades térmicas y de zoom.' },
                    { icon: 'Map', title: 'Mapeo y Topografía de Precisión', description: 'Genere ortomosaicos 2D y modelos 3D de alta precisión para el desarrollo y análisis de terrenos.' },
                ]
            },
            pricing: {
                title: "Niveles de Servicio Aéreo",
                subtitle: "Paquetes curados para una gama de requisitos fotográficos y cinematográficos.",
                plans: [
                    { name: "Paquete Explorador", price: "€550", period: "por sesión", features: ["1.5 horas en ubicación", "30 Fotografías Editadas de Alta Resolución", "Licencia Comercial Completa"], isFeatured: false },
                    { name: "Paquete Cinematográfico", price: "€950", period: "por sesión", features: ["Hasta 3 horas en ubicación", "Película Editada de 2 minutos en 6K", "Banda Sonora y Colorimetría Personalizadas", "Integración de Marca"], isFeatured: true },
                    { name: "Producción Completa", price: "€2200", period: "día completo", features: ["8 horas en ubicación", "Todos los Activos de Foto y Video en Crudo", "Equipo de Director y Piloto Dedicado", "Postproducción Prioritaria"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Emblemas Digitales a Medida",
                subtitle: "La residencia online definitiva de su marca.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Ingeniería de la Identidad Digital",
                paragraphs: [
                    "Un sitio web no es simplemente un folleto digital; es la pieza central arquitectónica de la identidad de su marca. Diseñamos y construimos emblemas digitales a medida—experiencias online que son tan eficientes como elegantes. Nuestro enfoque es holístico, integrando estrategia de marca, diseño de experiencia de usuario y tecnología de vanguardia.",
                    "Cada línea de código, cada píxel y cada interacción están diseñados deliberadamente para crear un viaje intuitivo y memorable para su audiencia. Construimos para la longevidad, asegurando que su presencia digital no solo sea visualmente impactante, sino también segura, escalable y optimizada para la visibilidad. Esto es artesanía digital del más alto nivel."
                ]
            },
            gallery: {
                title: "Muestra de Arquitectura Digital",
                subtitle: "Un vistazo a nuestra filosofía de diseño limpio, deliberado y elegante.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Código limpio en una pantalla oscura" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Diseñador trabajando en el diseño de un sitio web en un ordenador" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Un sitio web mostrado en un portátil con gráficos de análisis" }
                ]
            },
            features: {
                title: "Pilares de la Excelencia Digital",
                subtitle: "Nuestra filosofía de desarrollo se basa en cuatro principios fundamentales que aseguran un producto final superior.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Diseño y UX a Medida', description: 'Cada interfaz es una creación única, adaptada a la narrativa de su marca y la psicología del usuario. Nunca usamos plantillas.' },
                    { icon: 'Smartphone', title: 'Arquitectura Fluida-Responsiva', description: 'Una experiencia impecable en cada dispositivo, desde puntos de contacto móviles hasta amplias pantallas de escritorio.' },
                    { icon: 'Rocket', title: 'Rendimiento de Élite', description: 'Diseñado para tiempos de carga inferiores a un segundo. Optimizamos cada activo para una experiencia de usuario ultrarrápida.' },
                    { icon: 'ShieldCheck', title: 'Seguridad de Grado Fortaleza', description: 'Construido sobre una base de protocolos de seguridad modernos para proteger sus datos y su reputación.' },
                ]
            },
            pricing: {
                title: "Inversión en Legado Digital",
                subtitle: "Ofrecemos un paquete único e integral para clientes que exigen una presencia online sin concesiones.",
                plans: [
                    { name: "La Obertura", price: "€1,500", period: "pago único", features: ["Sitio de Página Única a Medida", "Formulario de Contacto y Captura de Leads", "Diseño Fluido-Responsivo", "Fundamentos de SEO Básico"], isFeatured: false },
                    { name: "El Marquesina", price: "€4,500", period: "pago único", features: ["Hasta 10 Páginas Personalizadas", "Integración de CMS Headless", "Plataforma de Blog y Contenido", "SEO y Analítica Avanzados", "Gerente de Proyecto Dedicado"], isFeatured: true },
                    { name: "El Taller", price: "Desde €9,500", period: "", features: ["Suite Completa de E-commerce", "Sistema de Productos e Inventario", "Integración de Pago Seguro", "Portales de Cuentas de Cliente", "Desarrollo de Funciones a Medida"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Arte Visual Comercial",
                subtitle: "Cada píxel, perfeccionado. Cada imagen, una declaración.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "El Arte de la Imagen Fija",
                paragraphs: [
                    "En un mundo saturado de imágenes, creamos activos visuales que captan la atención. Nuestros fotógrafos son maestros de la luz y la composición, artistas que elaboran narrativas en un solo fotograma. Vamos más allá de la simple documentación para producir imágenes que son estratégicas, evocadoras y meticulosamente ejecutadas.",
                    "Ya sea capturando las líneas limpias de un nuevo proyecto arquitectónico o los detalles intrincados de un producto de lujo, nuestro enfoque siempre se adapta al sujeto y a la visión del cliente. Invertimos en equipos de primer nivel y técnicas avanzadas de postproducción para garantizar que cada imagen que entregamos sea impecable y poderosa."
                ]
            },
            gallery: {
                title: "Un Portafolio de Precisión",
                subtitle: "Una selección curada de trabajos que demuestran nuestra maestría técnica y visión artística.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Cámara profesional en una mesa" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Fotógrafo tomando una foto en un entorno urbano" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Impresionante fotografía de paisaje de montañas y un lago" }
                ]
            },
            features: {
                title: "Nuestras Disciplinas Fotográficas",
                subtitle: "Servicios fotográficos especializados, cada uno ejecutado con un compromiso inquebrantable con la calidad y la alineación de la marca.",
                items: [
                    { icon: 'Home', title: 'Arquitectura e Interiores', description: 'Capture la esencia de un espacio con imágenes perfectamente compuestas y de alto rango dinámico.' },
                    { icon: 'Briefcase', title: 'Corporativa y Editorial', description: 'Cree una narrativa de marca poderosa con retratos ejecutivos profesionales y cobertura de eventos.' },
                    { icon: 'ShoppingBag', title: 'Producto y Bodegón', description: 'Imágenes meticulosamente iluminadas y estilizadas para e-commerce, publicidad y catálogos que impulsan el deseo.' },
                    { icon: 'Utensils', title: 'Artes Culinarias', description: 'Transforme sus creaciones culinarias en obras de arte con una fotografía de alimentos tentadoramente detallada.' },
                ]
            },
            pricing: {
                title: "Tarifas de Comisión",
                subtitle: "Paquetes estructurados para la adquisición de activos visuales premium.",
                plans: [
                    { name: "La Viñeta", price: "€450", period: "1 hora", features: ["Enfoque en un solo sujeto", "15 Activos Digitales Editados", "Galería de Pruebas Online", "Ideal para retratos/productos"], isFeatured: false },
                    { name: "El Lookbook", price: "€900", period: "3 horas", features: ["Sesión de varios sujetos", "+40 Activos Digitales Editados", "Licencia de Uso Comercial", "Perfecto para propiedades/marcas"], isFeatured: true },
                    { name: "La Campaña", price: "€1800", period: "medio día (5 horas)", features: ["Cobertura Exhaustiva", "+100 Activos Editados", "Dirección de Arte y Estilismo", "Postproducción Prioritaria"], isFeatured: false },
                ]
            }
        }
    },
  },
  fr: {
    nav: {
      tour: "Expériences Immersives",
      drone: "Cinématographie Aérienne",
      website: "Fleurons Numériques",
      photography: "Art Visuel",
      contact: "Consultation",
      getStarted: "Démarrer le Projet",
    },
    hero: {
      title: "Concevoir des Héritages Numériques",
      subtitle: "Où la Vision Rencontre la Précision Virtuelle",
      description: "Nous créons des expériences numériques inégalées — des réalités virtuelles immersives aux fleurons en ligne sur mesure — qui définissent l'avenir de la présence de votre marque.",
    },
    services: {
        title: 'Nos Disciplines Emblématiques',
        subtitle: 'Une suite de services numériques d\'élite, chacun exécuté avec une précision méticuleuse pour élever votre marque au-delà du conventionnel.',
        list: [
            { id: 'tour', title: 'Expériences Immersives', description: 'Construisez des jumeaux numériques hyperréalistes de votre environnement. Nos expériences immersives sont conçues pour captiver et convertir.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Cinématographie Aérienne', description: 'Dominez le ciel avec une narration visuelle cinématographique. Nous capturons des visuels dynamiques et haute-fidélité qui offrent une perspective transcendante.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Fleurons Numériques', description: 'Commandez un fleuron numérique sur mesure. Nos sites web sont conçus pour la performance, l\'élégance et un impact de marque durable.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Art Visuel', description: 'Définissez le récit de votre marque à travers un art visuel convaincant. Nous produisons des images méticuleusement conçues qui résonnent et inspirent.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Planifier une Consultation Privée",
      subtitle: "Discutez de la vision de votre projet avec nos stratèges. Nous sommes prêts à traduire vos ambitions en une réalité numérique tangible. Veuillez fournir vos coordonnées ci-dessous.",
      namePlaceholder: "Nom Complet",
      emailPlaceholder: "Email Professionnel",
      messagePlaceholder: "Résumé du Projet",
      submitButton: "Envoyer la Demande",
      formSuccess: "Votre demande a été reçue.",
      formError: "Veuillez vous assurer que tous les champs sont correctement remplis.",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    pages: {
        tour: {
            hero: {
                title: "Expériences Immersives 360°",
                subtitle: "Transcendez les frontières physiques. Invitez le monde à l'intérieur.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "L'Architecture de la Présence Virtuelle",
                paragraphs: [
                    "Nos visites virtuelles à 360° ne sont pas de simples scans ; ce sont des actifs numériques méticuleusement conçus. Nous construisons des jumeaux numériques hyperréalistes de votre environnement dans une résolution 8K époustouflante, offrant une expérience si viscérale qu'elle rivalise avec la présence physique. Chaque détail est capturé, chaque texture rendue, créant une exploration fluide et intuitive.",
                    "C'est la nouvelle frontière de l'engagement du public. Donnez aux clients potentiels le pouvoir d'habiter votre espace depuis n'importe où dans le monde, favorisant une connexion plus profonde et accélérant la prise de décision. Des portefeuilles immobiliers exclusifs aux merveilles architecturales, nous transformons votre lieu physique en une destination virtuelle inoubliable."
                ]
            },
            gallery: {
                title: "Une Perspective Soignée",
                subtitle: "Découvrez la clarté et la profondeur qui définissent nos créations immersives.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Salon moderne avec des meubles élégants" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "Caméra à 360 degrés sur un trépied dans une pièce lumineuse" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Cuisine moderne et spacieuse avec îlot" }
                ]
            },
            features: {
                title: "Les Piliers de Notre Savoir-Faire",
                subtitle: "Notre engagement envers l'excellence technologique et la direction artistique garantit un produit final inégalé.",
                items: [
                    { icon: 'Eye', title: 'Immersion Hyperréaliste', description: 'Vivez une navigation fluide et réaliste avec notre imagerie panoramique 8K, leader de l\'industrie.' },
                    { icon: 'MousePointerClick', title: 'Points Interactifs Sur Mesure', description: 'Intégrez des médias riches — vidéo, texte et liens externes — pour créer une expérience narrative captivante.' },
                    { icon: 'Smartphone', title: 'Accessibilité Universelle', description: 'Performance impeccable sur toutes les plateformes, des navigateurs de bureau aux casques VR haut de gamme.' },
                    { icon: 'Share2', title: 'Intégration Sans Effort', description: 'Déployez votre expérience virtuelle avec une intégration simple et élégante sur votre site web ou un lien partageable.' },
                ]
            },
            pricing: {
                title: "Niveaux d'Investissement pour la Virtualisation",
                subtitle: "Sélectionnez une formule adaptée à l'échelle et à l'ambition de votre environnement numérique.",
                plans: [
                    { name: "Essentiel", price: "499 €", period: "par espace", features: ["Jusqu'à 140 m²", "15 Points Panoramiques 8K", "Points Interactifs Standards", "3 Mois d'Hébergement Premium"], isFeatured: false },
                    { name: "Professionnel", price: "899 €", period: "par espace", features: ["Jusqu'à 370 m²", "35 Points Panoramiques 8K", "UI/UX Personnalisée", "Intégration Google Street View", "1 An d'Hébergement Premium"], isFeatured: true },
                    { name: "Entreprise", price: "Sur Mesure", period: "", features: ["Échelle Illimitée", "Déploiement Multi-sites", "Analyses Utilisateurs Avancées", "Accès API & SDK", "Chargé de Compte Dédié"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Cinématographie Aérienne",
                subtitle: "Une perspective réservée aux ambitieux.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Maîtrise du Domaine Aérien",
                paragraphs: [
                    "Nous offrons plus qu'une simple opération de drone ; nous fournissons un art aérien. Nos cinéastes certifiés dirigent une flotte d'élite de drones, conçus pour la stabilité et équipés de caméras de qualité cinéma. Nous capturons des panoramas grandioses et des actions dynamiques avec une précision qui transforme l'ordinaire en extraordinaire.",
                    "Qu'il s'agisse de vitrines immobilières de luxe exigeant un sens de l'échelle et de la grandeur ou d'inspections industrielles complexes nécessitant une précision absolue, nos solutions aériennes fournissent des données inégalées et des visuels à couper le souffle. Nous transformons le ciel en une toile pour votre vision, offrant un outil narratif puissant et unique."
                ]
            },
            gallery: {
                title: "La Vue d'en Haut",
                subtitle: "Une collection de nos travaux, démontrant la puissance d'une perspective élevée.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Drone volant au-dessus d'un paysage côtier spectaculaire" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Vue aérienne zénithale d'une route sinueuse à travers une forêt" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Gros plan d'un drone de cinématographie professionnel" }
                ]
            },
            features: {
                title: "Notre Arsenal Aérien",
                subtitle: "Exploiter une technologie de pointe et une expertise chevronnée pour fournir une intelligence et des visuels aériens de qualité supérieure.",
                items: [
                    { icon: 'Film', title: 'Capture Cinématographique 6K', description: 'Produisez des séquences aériennes fluides et époustouflantes avec nos systèmes de caméra de drone de qualité cinéma.' },
                    { icon: 'Building', title: 'Architecture & Immobilier', description: 'Présentez des propriétés avec une grandeur inégalée, capturant leur relation avec le paysage environnant.' },
                    { icon: 'Search', title: 'Inspection Technique', description: 'Exécutez des inspections sûres et à haute résolution d\'infrastructures critiques avec des capacités thermiques et de zoom.' },
                    { icon: 'Map', title: 'Cartographie & Arpentage de Précision', description: 'Générez des orthomosaïques 2D et des modèles 3D de haute précision pour le développement et l\'analyse des terres.' },
                ]
            },
            pricing: {
                title: "Niveaux de Service Aérien",
                subtitle: "Des forfaits sur mesure pour une gamme d'exigences photographiques et cinématographiques.",
                plans: [
                    { name: "Forfait Éclaireur", price: "550 €", period: "par session", features: ["1,5 heure sur site", "30 Photos HD Éditées", "Licence Commerciale Complète"], isFeatured: false },
                    { name: "Forfait Cinématographique", price: "950 €", period: "par session", features: ["Jusqu'à 3 heures sur site", "Film 6K Édité de 2 minutes", "Bande Son & Étalonnage Personnalisés", "Intégration de Marque"], isFeatured: true },
                    { name: "Production Complète", price: "2200 €", period: "journée complète", features: ["8 heures sur site", "Tous les Actifs Photo & Vidéo Bruts", "Équipe Réalisateur & Pilote Dédiée", "Post-production Prioritaire"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Fleurons Numériques Sur Mesure",
                subtitle: "La résidence en ligne définitive de votre marque.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Ingénierie de l'Identité Numérique",
                paragraphs: [
                    "Un site web n'est pas simplement une brochure numérique ; c'est la pièce maîtresse architecturale de l'identité de votre marque. Nous concevons et construisons des fleurons numériques sur mesure — des expériences en ligne aussi performantes qu'élégantes. Notre approche est holistique, intégrant la stratégie de marque, la conception de l'expérience utilisateur et une technologie de pointe.",
                    "Chaque ligne de code, chaque pixel et chaque interaction est délibérément conçu pour créer un parcours intuitif et mémorable pour votre public. Nous construisons pour la longévité, en veillant à ce que votre présence numérique soit non seulement visuellement frappante, mais aussi sécurisée, évolutive et optimisée pour la découvrabilité. C'est de l'artisanat numérique du plus haut niveau."
                ]
            },
            gallery: {
                title: "Vitrine d'Architecture Numérique",
                subtitle: "Un aperçu de notre philosophie de design épuré, intentionnel et élégant.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Code propre sur un écran sombre" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Designer travaillant sur la mise en page d'un site web sur un ordinateur" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Un site web affiché sur un ordinateur portable avec des graphiques d'analyse" }
                ]
            },
            features: {
                title: "Piliers de l'Excellence Numérique",
                subtitle: "Notre philosophie de développement repose sur quatre principes fondamentaux qui garantissent un produit final de qualité supérieure.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Design & UX Sur Mesure', description: 'Chaque interface est une création unique, adaptée au récit de votre marque et à la psychologie de l\'utilisateur. Jamais de modèles.' },
                    { icon: 'Smartphone', title: 'Architecture Fluide-Réactive', description: 'Une expérience impeccable sur chaque appareil, des points de contact mobiles aux grands écrans de bureau.' },
                    { icon: 'Rocket', title: 'Performance d\'Élite', description: 'Conçu pour des temps de chargement inférieurs à la seconde. Nous optimisons chaque actif pour une expérience utilisateur fulgurante.' },
                    { icon: 'ShieldCheck', title: 'Sécurité de Niveau Forteresse', description: 'Construit sur une base de protocoles de sécurité modernes pour protéger vos données et votre réputation.' },
                ]
            },
            pricing: {
                title: "Investissement dans l'Héritage Numérique",
                subtitle: "Nous proposons une formule unique et complète pour les clients qui exigent une présence en ligne sans compromis.",
                plans: [
                    { name: "L'Ouverture", price: "1 500 €", period: "unique", features: ["Site d'une Page Sur Mesure", "Formulaire de Contact & Capture de Leads", "Design Fluide-Réactif", "Fondations SEO de Base"], isFeatured: false },
                    { name: "La Marquise", price: "4 500 €", period: "unique", features: ["Jusqu'à 10 Pages Personnalisées", "Intégration CMS Headless", "Plateforme de Blog & Contenu", "SEO & Analyses Avancés", "Chef de Projet Dédié"], isFeatured: true },
                    { name: "L'Atelier", price: "À partir de 9 500 €", period: "", features: ["Suite E-commerce Complète", "Système de Produits & Inventaire", "Intégration Paiement Sécurisé", "Portails de Comptes Clients", "Développement de Fonctionnalités Sur Mesure"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Art Visuel Commercial",
                subtitle: "Chaque pixel, perfectionné. Chaque image, une affirmation.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "L'Art de l'Image Fixe",
                paragraphs: [
                    "Dans un monde saturé d'images, nous créons des actifs visuels qui captent l'attention. Nos photographes sont des maîtres de la lumière et de la composition, des artistes qui élaborent des récits en une seule image. Nous allons au-delà de la simple documentation pour produire des images stratégiques, évocatrices et méticuleusement exécutées.",
                    "Qu'il s'agisse de capturer les lignes épurées d'un nouveau projet architectural ou les détails complexes d'un produit de luxe, notre processus est défini par la précision et une quête incessante de la perfection. Nous utilisons des équipements de pointe et des techniques de post-production avancées pour garantir un produit final tout simplement impeccable."
                ]
            },
            gallery: {
                title: "Un Portfolio de Précision",
                subtitle: "Une sélection de travaux qui démontrent notre maîtrise technique et notre vision artistique.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Appareil photo professionnel sur une table" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Photographe prenant une photo dans un cadre urbain" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Superbe photographie de paysage de montagnes et d'un lac" }
                ]
            },
            features: {
                title: "Nos Disciplines Photographiques",
                subtitle: "Services photographiques spécialisés, chacun exécuté avec un engagement inébranlable envers la qualité et l'alignement de la marque.",
                items: [
                    { icon: 'Home', title: 'Architecture & Intérieur', description: 'Capturez l\'essence d\'un espace avec des images parfaitement composées et à plage dynamique élevée.' },
                    { icon: 'Briefcase', title: 'Entreprise & Éditorial', description: 'Créez un récit de marque puissant avec des portraits de dirigeants professionnels et une couverture d\'événements.' },
                    { icon: 'ShoppingBag', title: 'Produit & Nature Morte', description: 'Des images méticuleusement éclairées et stylisées pour l\'e-commerce, la publicité et les catalogues qui suscitent le désir.' },
                    { icon: 'Utensils', title: 'Arts Culinaires', description: 'Transformez vos créations culinaires en œuvres d\'art avec une photographie culinaire aux détails alléchants.' },
                ]
            },
            pricing: {
                title: "Niveaux de Commission",
                subtitle: "Forfaits structurés pour l'acquisition d'actifs visuels de première qualité.",
                plans: [
                    { name: "La Vignette", price: "450 €", period: "1 heure", features: ["Focus sur un seul sujet", "15 Actifs Numériques Édités", "Galerie d'Épreuvage en Ligne", "Idéal pour portraits/produits"], isFeatured: false },
                    { name: "Le Lookbook", price: "900 €", period: "3 heures", features: ["Session multi-sujets", "+40 Actifs Numériques Édités", "Licence d'Utilisation Commerciale", "Parfait pour propriété/marque"], isFeatured: true },
                    { name: "La Campagne", price: "1800 €", period: "demi-journée (5h)", features: ["Couverture Complète", "+100 Actifs Édités", "Direction Artistique & Stylisme", "Post-production Prioritaire"], isFeatured: false },
                ]
            }
        }
    },
  },
  de: {
    nav: {
      tour: "Immersive Erlebnisse",
      drone: "Luftbild-Kinematographie",
      website: "Digitale Flaggschiffe",
      photography: "Visuelle Kunst",
      contact: "Beratung",
      getStarted: "Projekt Beginnen",
    },
    hero: {
      title: "Gestaltung Digitaler Vermächtnisse",
      subtitle: "Wo Vision auf virtuelle Präzision trifft",
      description: "Wir schaffen unvergleichliche digitale Erlebnisse – von immersiven virtuellen Realitäten bis hin zu maßgeschneiderten Online-Flaggschiffen – die die Zukunft der Präsenz Ihrer Marke definieren.",
    },
    services: {
        title: 'Unsere Kerndisziplinen',
        subtitle: 'Eine kuratierte Suite von elitären digitalen Dienstleistungen, die jeweils mit akribischer Präzision ausgeführt werden, um Ihre Marke über das Konventionelle hinaus zu heben.',
        list: [
            { id: 'tour', title: 'Immersive Erlebnisse', description: 'Erstellen Sie hyperrealistische digitale Zwillinge Ihrer Umgebung. Unsere immersiven Erlebnisse sind darauf ausgelegt, zu fesseln und zu konvertieren.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Luftbild-Kinematographie', description: 'Beherrschen Sie den Himmel mit filmischer Erzählkunst aus der Luft. Wir erfassen dynamische, hochauflösende Bilder, die eine transzendente Perspektive bieten.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Digitale Flaggschiffe', description: 'Beauftragen Sie ein maßgeschneidertes digitales Flaggschiff. Unsere Websites sind auf Leistung, Eleganz und nachhaltige Markenwirkung ausgelegt.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Visuelle Kunst', description: 'Definieren Sie die Erzählung Ihrer Marke durch überzeugende visuelle Kunst. Wir produzieren sorgfältig gestaltete Bilder, die Resonanz erzeugen und inspirieren.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Vereinbaren Sie eine private Beratung",
      subtitle: "Besprechen Sie die Vision Ihres Projekts mit unseren Strategen. Wir sind bereit, Ihre Ambitionen in eine greifbare digitale Realität umzusetzen. Bitte geben Sie unten Ihre Daten an.",
      namePlaceholder: "Vollständiger Name",
      emailPlaceholder: "Geschäftliche E-Mail",
      messagePlaceholder: "Projektbeschreibung",
      submitButton: "Anfrage Senden",
      formSuccess: "Ihre Anfrage wurde erhalten.",
      formError: "Bitte stellen Sie sicher, dass alle Felder korrekt ausgefüllt sind.",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
    pages: {
        tour: {
            hero: {
                title: "Immersive 360°-Erlebnisse",
                subtitle: "Überschreiten Sie physische Grenzen. Laden Sie die Welt ein.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Die Architektur der virtuellen Präsenz",
                paragraphs: [
                    "Unsere 360°-virtuellen Touren sind keine bloßen Scans; sie sind sorgfältig konstruierte digitale Assets. Wir erstellen hyperrealistische digitale Zwillinge Ihrer Umgebung in atemberaubender 8K-Auflösung und bieten ein so tiefgreifendes Erlebnis, dass es der physischen Anwesenheit Konkurrenz macht. Jedes Detail wird erfasst, jede Textur gerendert, was eine nahtlose und intuitive Erkundung ermöglicht.",
                    "Dies ist die neue Grenze der Publikumsbindung. Ermöglichen Sie potenziellen Kunden, Ihren Raum von überall auf der Welt zu bewohnen, fördern Sie eine tiefere Verbindung und beschleunigen Sie die Entscheidungsfindung. Von exklusiven Immobilienportfolios bis hin zu architektonischen Wundern verwandeln wir Ihren physischen Raum in ein unvergessliches virtuelles Ziel."
                ]
            },
            gallery: {
                title: "Eine kuratierte Perspektive",
                subtitle: "Erleben Sie die Klarheit und Tiefe, die unsere immersiven Kreationen auszeichnen.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Modernes Wohnzimmer mit eleganten Möbeln" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "360-Grad-Kamera auf einem Stativ in einem hellen Raum" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Geräumige moderne Küche mit Insel" }
                ]
            },
            features: {
                title: "Die Markenzeichen unseres Handwerks",
                subtitle: "Unser Engagement für technologische Exzellenz und künstlerische Leitung gewährleistet ein unvergleichliches Endprodukt.",
                items: [
                    { icon: 'Eye', title: 'Hyperrealistische Immersion', description: 'Erleben Sie nahtlose, lebensechte Navigation mit unserer branchenführenden 8K-Panoramabildgebung.' },
                    { icon: 'MousePointerClick', title: 'Kuratierte interaktive Punkte', description: 'Integrieren Sie Rich Media – Videos, Texte und externe Links – um ein fesselndes, narratives Erlebnis zu schaffen.' },
                    { icon: 'Smartphone', title: 'Universelle Zugänglichkeit', description: 'Tadellose Leistung auf allen Plattformen, von Desktop-Browsern bis zu High-End-VR-Headsets.' },
                    { icon: 'Share2', title: 'Mühelose Integration', description: 'Implementieren Sie Ihr virtuelles Erlebnis mit einer einfachen, eleganten Einbettung auf Ihrer Website oder einem teilbaren Link.' },
                ]
            },
            pricing: {
                title: "Investitionsstufen für die Virtualisierung",
                subtitle: "Wählen Sie ein Paket, das auf den Umfang und die Ambitionen Ihrer digitalen Umgebung zugeschnitten ist.",
                plans: [
                    { name: "Essential", price: "499 €", period: "pro Raum", features: ["Bis zu 140 m²", "15 8K-Panoramapunkte", "Standard-Hotspots", "3 Monate Premium-Hosting"], isFeatured: false },
                    { name: "Professional", price: "899 €", period: "pro Raum", features: ["Bis zu 370 m²", "35 8K-Panoramapunkte", "Benutzerdefiniertes UI/UX", "Google Street View-Integration", "1 Jahr Premium-Hosting"], isFeatured: true },
                    { name: "Enterprise", price: "Maßgeschneidert", period: "", features: ["Unbegrenzte Größe", "Mehrere Standorte", "Erweiterte Nutzeranalytik", "API- & SDK-Zugang", "Persönlicher Account Manager"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Luftbild-Kinematographie",
                subtitle: "Eine Perspektive für die Ehrgeizigen.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Beherrschung des Luftraums",
                paragraphs: [
                    "Wir bieten mehr als nur Drohnenbetrieb; wir bieten Luftkunst. Unsere zertifizierten Kameraleute befehligen eine Elite-Flotte von Drohnen, die auf Stabilität ausgelegt und mit Kameras in Kinoqualität ausgestattet sind. Wir erfassen weitläufige Ausblicke und dynamische Action mit einer Präzision, die das Gewöhnliche in das Außergewöhnliche verwandelt.",
                    "Ob für die Präsentation von Luxusimmobilien, die ein Gefühl von Größe und Erhabenheit erfordern, oder für komplexe industrielle Vermessungen, die absolute Genauigkeit verlangen, unsere Luftlösungen liefern unvergleichliche Daten und atemberaubende Bilder. Wir verwandeln den Himmel in eine Leinwand für Ihre Vision und bieten ein starkes und einzigartiges narratives Werkzeug."
                ]
            },
            gallery: {
                title: "Die Aussicht von oben",
                subtitle: "Eine Sammlung unserer Arbeiten, die die Kraft einer erhöhten Perspektive demonstriert.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Drohne fliegt über eine dramatische Küstenlandschaft" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Luftaufnahme einer kurvenreichen Straße durch einen Wald" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Nahaufnahme einer professionellen Kinodrohne" }
                ]
            },
            features: {
                title: "Unser Luftarsenal",
                subtitle: "Nutzung modernster Technologie und erfahrener Expertise zur Bereitstellung überlegener Luftaufklärung und -visualisierungen.",
                items: [
                    { icon: 'Film', title: '6K Kinematische Aufnahme', description: 'Produzieren Sie atemberaubende, butterweiche Luftaufnahmen mit unseren Drohnenkamerasystemen in Kinoqualität.' },
                    { icon: 'Building', title: 'Architektur & Immobilien', description: 'Präsentieren Sie Immobilien mit unvergleichlicher Erhabenheit und erfassen Sie ihre Beziehung zur umgebenden Landschaft.' },
                    { icon: 'Search', title: 'Technische Inspektion', description: 'Führen Sie sichere, hochauflösende Inspektionen kritischer Infrastrukturen mit Wärme- und Zoomfunktionen durch.' },
                    { icon: 'Map', title: 'Präzise Kartierung & Vermessung', description: 'Erstellen Sie hochgenaue 2D-Orthomosaike und 3D-Modelle für die Landentwicklung und -analyse.' },
                ]
            },
            pricing: {
                title: "Luftdienstleistungsstufen",
                subtitle: "Kuratierte Pakete für eine Reihe von fotografischen und kinematografischen Anforderungen.",
                plans: [
                    { name: "Scout-Paket", price: "550 €", period: "pro Sitzung", features: ["1,5 Stunden vor Ort", "30 bearbeitete hochauflösende Standbilder", "Volle kommerzielle Lizenz"], isFeatured: false },
                    { name: "Kinematik-Paket", price: "950 €", period: "pro Sitzung", features: ["Bis zu 3 Stunden vor Ort", "2-minütiger bearbeiteter 6K-Film", "Benutzerdefinierte Musik & Farbkorrektur", "Markenintegration"], isFeatured: true },
                    { name: "Vollproduktion", price: "2200 €", period: "ganzer Tag", features: ["8 Stunden vor Ort", "Alle rohen Foto- & Video-Assets", "Dediziertes Regie- & Pilotenteam", "Priorisierte Postproduktion"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Maßgeschneiderte Digitale Flaggschiffe",
                subtitle: "Die definitive Online-Residenz Ihrer Marke.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Ingenieurwesen der digitalen Identität",
                paragraphs: [
                    "Eine Website ist nicht nur eine digitale Broschüre; sie ist das architektonische Herzstück der Identität Ihrer Marke. Wir entwerfen und konstruieren maßgeschneiderte digitale Flaggschiffe – Online-Erlebnisse, die ebenso leistungsstark wie elegant sind. Unser Ansatz ist ganzheitlich und integriert Markenstrategie, User Experience Design und Spitzentechnologie.",
                    "Jede Zeile Code, jedes Pixel und jede Interaktion ist gezielt darauf ausgelegt, eine intuitive und unvergessliche Reise für Ihr Publikum zu schaffen. Wir bauen für Langlebigkeit und stellen sicher, dass Ihre digitale Präsenz nicht nur visuell beeindruckend, sondern auch sicher, skalierbar und für die Auffindbarkeit optimiert ist. Dies ist digitale Handwerkskunst auf höchstem Niveau."
                ]
            },
            gallery: {
                title: "Vitrine digitaler Architektur",
                subtitle: "Ein Einblick in unsere Philosophie des klaren, zielgerichteten und eleganten Designs.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Sauberer Code auf einem dunklen Bildschirm" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Designer arbeitet an einem Website-Layout auf einem Computer" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Eine auf einem Laptop angezeigte Website mit Analyse-Grafiken" }
                ]
            },
            features: {
                title: "Säulen digitaler Exzellenz",
                subtitle: "Unsere Entwicklungsphilosophie basiert auf vier Kernprinzipien, die ein überlegenes Endprodukt gewährleisten.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Maßgeschneidertes Design & UX', description: 'Jede Benutzeroberfläche ist eine einzigartige Kreation, die auf Ihre Markenerzählung und Nutzerpsychologie zugeschnitten ist. Niemals Vorlagen.' },
                    { icon: 'Smartphone', title: 'Fluid-Responsive Architektur', description: 'Ein tadelloses Erlebnis auf jedem Gerät, von mobilen Touchpoints bis zu großen Desktop-Displays.' },
                    { icon: 'Rocket', title: 'Elite-Performance', description: 'Entwickelt für Ladezeiten unter einer Sekunde. Wir optimieren jedes Asset für ein blitzschnelles Benutzererlebnis.' },
                    { icon: 'ShieldCheck', title: 'Festungssichere Sicherheit', description: 'Aufgebaut auf einem Fundament moderner Sicherheitsprotokolle, um Ihre Daten und Ihren Ruf zu schützen.' },
                ]
            },
            pricing: {
                title: "Investition in digitales Vermächtnis",
                subtitle: "Wir bieten ein einzigartiges, umfassendes Paket für Kunden, die eine kompromisslose Online-Präsenz verlangen.",
                plans: [
                    { name: "Die Ouvertüre", price: "1.500 €", period: "einmalig", features: ["Maßgeschneiderte Single-Page-Site", "Kontakt- & Lead-Erfassungsformular", "Fluid-Responsive Design", "SEO-Grundlagen"], isFeatured: false },
                    { name: "Das Festzelt", price: "4.500 €", period: "einmalig", features: ["Bis zu 10 benutzerdefinierte Seiten", "Headless-CMS-Integration", "Blog- & Content-Plattform", "Erweitertes SEO & Analytics", "Dedizierter Projektmanager"], isFeatured: true },
                    { name: "Das Atelier", price: "Ab 9.500 €", period: "", features: ["Vollständige E-Commerce-Suite", "Produkt- & Inventarsystem", "Sichere Zahlungsintegration", "Kundenkontenportale", "Maßgeschneiderte Funktionsentwicklung"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Kommerzielle visuelle Kunst",
                subtitle: "Jedes Pixel, perfektioniert. Jedes Bild, eine Aussage.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "Die Kunst des unbewegten Bildes",
                paragraphs: [
                    "In einer Welt, die mit Bildern gesättigt ist, schaffen wir visuelle Assets, die Aufmerksamkeit erregen. Unsere Fotografen sind Meister des Lichts und der Komposition, Künstler, die Erzählungen in einem einzigen Bildrahmen schaffen. Wir gehen über die einfache Dokumentation hinaus, um Bilder zu produzieren, die strategisch, evokativ und akribisch ausgeführt sind.",
                    "Ob es darum geht, die klaren Linien eines neuen Architekturprojekts oder die komplizierten Details eines Luxusprodukts einzufangen, unser Prozess ist von Präzision und einem unermüdlichen Streben nach Perfektion geprägt. Wir verwenden modernste Ausrüstung und fortschrittliche Nachbearbeitungstechniken, um ein Endprodukt zu liefern, das nichts weniger als makellos ist."
                ]
            },
            gallery: {
                title: "Ein Portfolio der Präzision",
                subtitle: "Eine kuratierte Auswahl von Werken, die unsere technische Meisterschaft und künstlerische Vision demonstrieren.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Professionelle Kamera auf einem Tisch" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Fotograf macht ein Foto in einer städtischen Umgebung" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Atemberaubende Landschaftsfotografie von Bergen und einem See" }
                ]
            },
            features: {
                title: "Unsere fotografischen Disziplinen",
                subtitle: "Spezialisierte fotografische Dienstleistungen, die jeweils mit einem unerschütterlichen Engagement für Qualität und Markenausrichtung ausgeführt werden.",
                items: [
                    { icon: 'Home', title: 'Architektur & Interieur', description: 'Erfassen Sie die Essenz eines Raumes mit perfekt komponierten Bildern mit hohem Dynamikumfang.' },
                    { icon: 'Briefcase', title: 'Corporate & Editorial', description: 'Schaffen Sie eine starke Markenerzählung mit professionellen Executive-Porträts und Event-Dokumentationen.' },
                    { icon: 'ShoppingBag', title: 'Produkt & Stillleben', description: 'Sorgfältig beleuchtete und gestylte Bilder für E-Commerce, Werbung und Kataloge, die Begehrlichkeiten wecken.' },
                    { icon: 'Utensils', title: 'Kulinarische Künste', description: 'Verwandeln Sie Ihre kulinarischen Kreationen in Kunstwerke mit verlockend detaillierter Food-Fotografie.' },
                ]
            },
            pricing: {
                title: "Auftragsstufen",
                subtitle: "Strukturierte Pakete für den Erwerb von Premium-Visual-Assets.",
                plans: [
                    { name: "Die Vignette", price: "450 €", period: "1 Stunde", features: ["Fokus auf ein einzelnes Motiv", "15 bearbeitete digitale Assets", "Online-Proofing-Galerie", "Ideal für Porträts/Produkte"], isFeatured: false },
                    { name: "Das Lookbook", price: "900 €", period: "3 Stunden", features: ["Sitzung mit mehreren Motiven", "40+ bearbeitete digitale Assets", "Kommerzielle Nutzungslizenz", "Perfekt für Immobilien/Marken"], isFeatured: true },
                    { name: "Die Kampagne", price: "1800 €", period: "halber Tag (5 Std.)", features: ["Umfassende Abdeckung", "100+ bearbeitete Assets", "Künstlerische Leitung & Styling", "Priorisierte Postproduktion"], isFeatured: false },
                ]
            }
        }
    },
  },
  it: {
    nav: {
      tour: "Esperienze Immersive",
      drone: "Cinematografia Aerea",
      website: "Fari Digitali",
      photography: "Arte Visiva",
      contact: "Consulenza",
      getStarted: "Inizia il Progetto",
    },
    hero: {
      title: "Progettare Eredità Digitali",
      subtitle: "Dove la Visione Incontra la Precisione Virtuale",
      description: "Creiamo esperienze digitali senza pari — da realtà virtuali immersive a fari online su misura — che definiscono il futuro della presenza del tuo marchio.",
    },
    services: {
        title: 'Le Nostre Discipline Distintive',
        subtitle: 'Una suite curata di servizi digitali d\'élite, ognuno eseguito con meticolosa precisione per elevare il tuo marchio oltre il convenzionale.',
        list: [
            { id: 'tour', title: 'Esperienze Immersive', description: 'Costruiamo gemelli digitali iperrealistici del tuo ambiente. Le nostre esperienze immersive sono create per affascinare e convertire.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Cinematografia Aerea', description: 'Domina il cielo con una narrazione aerea cinematografica. Catturiamo immagini dinamiche e ad alta fedeltà che offrono una prospettiva trascendente.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Fari Digitali', description: 'Commissiona un faro digitale su misura. I nostri siti web sono progettati per performance, eleganza e un impatto duraturo del marchio.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Arte Visiva', description: 'Definisci la narrazione del tuo marchio attraverso un\'arte visiva avvincente. Produciamo immagini meticolosamente realizzate che risuonano e ispirano.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Pianifica una Consulenza Privata",
      subtitle: "Discuti la visione del tuo progetto con i nostri strateghi. Siamo pronti a tradurre le tue ambizioni in una realtà digitale tangibile. Fornisci i tuoi dettagli di seguito.",
      namePlaceholder: "Nome Completo",
      emailPlaceholder: "Email Aziendale",
      messagePlaceholder: "Brief di Progetto",
      submitButton: "Invia Richiesta",
      formSuccess: "La tua richiesta è stata ricevuta.",
      formError: "Assicurati che tutti i campi siano compilati correttamente.",
    },
    footer: {
      rights: "Tutti i diritti riservati.",
    },
    pages: {
        tour: {
            hero: {
                title: "Esperienze Immersive a 360°",
                subtitle: "Supera i confini fisici. Invita il mondo all'interno.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "L'Architettura della Presenza Virtuale",
                paragraphs: [
                    "I nostri tour virtuali a 360° non sono semplici scansioni; sono asset digitali meticolosamente progettati. Costruiamo gemelli digitali iperrealistici del tuo ambiente con una straordinaria risoluzione 8K, offrendo un'esperienza così viscerale da competere con la presenza fisica. Ogni dettaglio viene catturato, ogni texture resa, creando un'esplorazione fluida e intuitiva.",
                    "Questa è la nuova frontiera del coinvolgimento del pubblico. Consenti ai potenziali clienti di abitare il tuo spazio da qualsiasi parte del mondo, promuovendo una connessione più profonda e accelerando il processo decisionale. Dai portafogli immobiliari esclusivi alle meraviglie architettoniche, trasformiamo il tuo spazio fisico in una destinazione virtuale indimenticabile."
                ]
            },
            gallery: {
                title: "Una Prospettiva Curata",
                subtitle: "Assisti alla chiarezza e alla profondità che definiscono le nostre creazioni immersive.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Soggiorno moderno con mobili eleganti" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "Fotocamera a 360 gradi su un treppiede in una stanza luminosa" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Spaziosa cucina moderna con isola" }
                ]
            },
            features: {
                title: "I Segni Distintivi della Nostra Arte",
                subtitle: "Il nostro impegno per l'eccellenza tecnologica e la direzione artistica garantisce un prodotto finale senza pari.",
                items: [
                    { icon: 'Eye', title: 'Immersione Iperrealistica', description: 'Sperimenta una navigazione fluida e realistica con le nostre immagini panoramiche 8K leader del settore.' },
                    { icon: 'MousePointerClick', title: 'Punti Interattivi Curati', description: 'Incorpora contenuti multimediali — video, testo e link esterni — per creare un\'esperienza narrativa avvincente.' },
                    { icon: 'Smartphone', title: 'Accessibilità Universale', description: 'Prestazioni impeccabili su tutte le piattaforme, dai browser desktop ai visori VR di fascia alta.' },
                    { icon: 'Share2', title: 'Integrazione Semplice', description: 'Distribuisci la tua esperienza virtuale con un embed semplice ed elegante sul tuo sito web o un link condivisibile.' },
                ]
            },
            pricing: {
                title: "Livelli di Investimento per la Virtualizzazione",
                subtitle: "Seleziona un pacchetto su misura per la scala e l'ambizione del tuo ambiente digitale.",
                plans: [
                    { name: "Essenziale", price: "€499", period: "per spazio", features: ["Fino a 140 m²", "15 Punti Panoramici 8K", "Hotspot Interattivi Standard", "3 Mesi di Hosting Premium"], isFeatured: false },
                    { name: "Professionale", price: "€899", period: "per spazio", features: ["Fino a 370 m²", "35 Punti Panoramici 8K", "UI/UX con Marchio Personalizzato", "Integrazione Google Street View", "1 Anno di Hosting Premium"], isFeatured: true },
                    { name: "Aziendale", price: "Su Misura", period: "", features: ["Scala Illimitata", "Distribuzione Multi-sede", "Analisi Utente Avanzata", "Accesso API & SDK", "Account Manager Dedicato"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Cinematografia Aerea",
                subtitle: "Una prospettiva riservata agli ambiziosi.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Maestria del Dominio Aereo",
                paragraphs: [
                    "Offriamo più della semplice operatività dei droni; forniamo arte aerea. I nostri direttori della fotografia certificati comandano una flotta d'élite di droni, progettati per la stabilità e dotati di telecamere di livello cinematografico. Catturiamo panorami mozzafiato e azioni dinamiche con una precisione che trasforma l'ordinario in straordinario.",
                    "Dalle vetrine di proprietà di lusso che richiedono un senso di scala e grandiosità alle complesse ispezioni industriali che necessitano di precisione assoluta, le nostre soluzioni aeree forniscono dati senza pari e immagini mozzafiato. Trasformiamo il cielo in una tela per la tua visione, fornendo uno strumento narrativo potente e unico."
                ]
            },
            gallery: {
                title: "La Vista dall'Alto",
                subtitle: "Una raccolta dei nostri lavori, che mostra il potere di una prospettiva elevata.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Drone in volo su un paesaggio costiero spettacolare" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Vista aerea dall'alto di una strada tortuosa attraverso una foresta" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Primo piano di un drone da cinematografia professionale" }
                ]
            },
            features: {
                title: "Il Nostro Arsenale Aereo",
                subtitle: "Sfruttando tecnologia all'avanguardia ed esperienza consolidata per fornire intelligence e immagini aeree superiori.",
                items: [
                    { icon: 'Film', title: 'Cattura Cinematografica 6K', description: 'Produci riprese aeree mozzafiato e incredibilmente fluide con i nostri sistemi di telecamere per droni di livello cinematografico.' },
                    { icon: 'Building', title: 'Architettura e Immobiliare', description: 'Presenta le proprietà con una grandiosità senza pari, catturando il loro rapporto con il paesaggio circostante.' },
                    { icon: 'Search', title: 'Ispezione Tecnica', description: 'Esegui ispezioni sicure e ad alta risoluzione di infrastrutture critiche con capacità termiche e di zoom.' },
                    { icon: 'Map', title: 'Mappatura e Rilievo di Precisione', description: 'Genera ortomosaici 2D e modelli 3D ad alta precisione per lo sviluppo e l\'analisi del territorio.' },
                ]
            },
            pricing: {
                title: "Livelli di Servizio Aereo",
                subtitle: "Pacchetti curati per una gamma di esigenze fotografiche e cinematografiche.",
                plans: [
                    { name: "Pacchetto Esploratore", price: "€550", period: "a sessione", features: ["1,5 ore in loco", "30 Scatti ad Alta Risoluzione Modificati", "Licenza Commerciale Completa"], isFeatured: false },
                    { name: "Pacchetto Cinematografico", price: "€950", period: "a sessione", features: ["Fino a 3 ore in loco", "Film Modificato 6K di 2 minuti", "Colonna Sonora e Color Grade Personalizzati", "Integrazione Marchio"], isFeatured: true },
                    { name: "Produzione Completa", price: "€2200", period: "giornata intera", features: ["8 ore in loco", "Tutti gli Asset Foto e Video Grezzi", "Team Dedicato di Regista e Pilota", "Post-produzione Prioritaria"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Fari Digitali su Misura",
                subtitle: "La residenza online definitiva del tuo marchio.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Progettare l'Identità Digitale",
                paragraphs: [
                    "Un sito web non è una semplice brochure digitale; è il fulcro architettonico dell'identità del tuo marchio. Progettiamo e costruiamo fari digitali su misura — esperienze online tanto performanti quanto eleganti. Il nostro approccio è olistico, integrando strategia di marca, design dell'esperienza utente e tecnologia all'avanguardia.",
                    "Ogni riga di codice, ogni pixel e ogni interazione è volutamente progettata per creare un percorso intuitivo e memorabile per il tuo pubblico. Costruiamo per la longevità, assicurando che la tua presenza digitale non sia solo visivamente sbalorditiva, ma anche sicura, scalabile e ottimizzata per la reperibilità. Questa è artigianalità digitale di altissimo livello."
                ]
            },
            gallery: {
                title: "Vetrina di Architettura Digitale",
                subtitle: "Uno sguardo alla nostra filosofia di design pulito, mirato ed elegante.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Codice pulito su uno schermo scuro" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Designer che lavora al layout di un sito web su un computer" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Un sito web mostrato su un laptop con grafici di analisi" }
                ]
            },
            features: {
                title: "Pilastri dell'Eccellenza Digitale",
                subtitle: "La nostra filosofia di sviluppo si fonda su quattro principi fondamentali che garantiscono un prodotto finale superiore.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Design & UX su Misura', description: 'Ogni interfaccia è una creazione unica, adattata alla narrazione del tuo marchio e alla psicologia dell\'utente. Mai template.' },
                    { icon: 'Smartphone', title: 'Architettura Fluida-Responsiva', description: 'Un\'esperienza impeccabile su ogni dispositivo, dai punti di contatto mobili agli ampi display desktop.' },
                    { icon: 'Rocket', title: 'Performance d\'Élite', description: 'Progettato per tempi di caricamento inferiori al secondo. Ottimizziamo ogni asset per un\'esperienza utente fulminea.' },
                    { icon: 'ShieldCheck', title: 'Sicurezza da Fortezza', description: 'Costruito su una base di moderni protocolli di sicurezza per proteggere i tuoi dati e la tua reputazione.' },
                ]
            },
            pricing: {
                title: "Investimento nell'Eredità Digitale",
                subtitle: "Offriamo un pacchetto unico e completo per i clienti che esigono una presenza online senza compromessi.",
                plans: [
                    { name: "L'Ouverture", price: "€1.500", period: "una tantum", features: ["Sito a Pagina Singola su Misura", "Modulo Contatti e Acquisizione Lead", "Design Fluido-Responsivo", "Fondamenti SEO di Base"], isFeatured: false },
                    { name: "Il Cartellone", price: "€4.500", period: "una tantum", features: ["Fino a 10 Pagine Personalizzate", "Integrazione CMS Headless", "Piattaforma Blog e Contenuti", "SEO e Analisi Avanzate", "Project Manager Dedicato"], isFeatured: true },
                    { name: "L'Atelier", price: "Da €9.500", period: "", features: ["Suite E-commerce Completa", "Sistema Prodotti e Inventario", "Integrazione Pagamenti Sicuri", "Portali Account Cliente", "Sviluppo Funzionalità su Misura"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Arte Visiva Commerciale",
                subtitle: "Ogni pixel, perfezionato. Ogni immagine, una dichiarazione.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "L'Arte dell'Immagine Fissa",
                paragraphs: [
                    "In un mondo saturo di immagini, creiamo asset visivi che catturano l'attenzione. I nostri fotografi sono maestri della luce e della composizione, artisti che creano narrazioni in un singolo fotogramma. Andiamo oltre la semplice documentazione per produrre immagini strategiche, evocative e meticolosamente eseguite.",
                    "Che si tratti di catturare le linee pulite di un nuovo progetto architettonico o i dettagli intricati di un prodotto di lusso, il nostro processo è definito dalla precisione e da una ricerca incessante della perfezione. Utilizziamo attrezzature all'avanguardia e tecniche di post-produzione avanzate per fornire un prodotto finale che non è niente di meno che impeccabile."
                ]
            },
            gallery: {
                title: "Un Portfolio di Precisione",
                subtitle: "Una selezione curata di opere che dimostrano la nostra maestria tecnica e visione artistica.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Fotocamera professionale su un tavolo" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Fotografo che scatta una foto in un ambiente urbano" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Splendida fotografia di paesaggio di montagne e un lago" }
                ]
            },
            features: {
                title: "Le Nostre Discipline Fotografiche",
                subtitle: "Servizi fotografici specializzati, ognuno eseguito con un impegno incrollabile per la qualità e l'allineamento del marchio.",
                items: [
                    { icon: 'Home', title: 'Architettura e Interni', description: 'Cattura l\'essenza di uno spazio con immagini perfettamente composte e ad alta gamma dinamica.' },
                    { icon: 'Briefcase', title: 'Aziendale ed Editoriale', description: 'Crea una narrazione di marca potente con ritratti direzionali professionali e documentazione di eventi.' },
                    { icon: 'ShoppingBag', title: 'Prodotto e Still Life', description: 'Immagini meticolosamente illuminate e stilizzate per e-commerce, pubblicità e cataloghi che suscitano desiderio.' },
                    { icon: 'Utensils', title: 'Arti Culinarie', description: 'Trasforma le tue creazioni culinarie in opere d\'arte con una fotografia di cibo dai dettagli allettanti.' },
                ]
            },
            pricing: {
                title: "Livelli di Commissione",
                subtitle: "Pacchetti strutturati per l'acquisizione di asset visivi premium.",
                plans: [
                    { name: "La Vignetta", price: "€450", period: "1 ora", features: ["Focus su Soggetto Singolo", "15 Asset Digitali Modificati", "Galleria di Provini Online", "Ideale per ritratti/prodotti"], isFeatured: false },
                    { name: "Il Lookbook", price: "€900", period: "3 ore", features: ["Sessione Multi-soggetto", "+40 Asset Digitali Modificati", "Licenza d'Uso Commerciale", "Perfetto per proprietà/marchi"], isFeatured: true },
                    { name: "La Campagna", price: "€1800", period: "mezza giornata (5 ore)", features: ["Copertura Completa", "+100 Asset Modificati", "Direzione Artistica e Styling", "Post-produzione Prioritaria"], isFeatured: false },
                ]
            }
        }
    },
  },
  nl: {
    nav: {
      tour: "Immersieve Ervaringen",
      drone: "Luchtcinematografie",
      website: "Digitale Vlaggenschepen",
      photography: "Visuele Kunst",
      contact: "Consult",
      getStarted: "Start Project",
    },
    hero: {
      title: "Digitale Erfenissen Creëren",
      subtitle: "Waar Visie Virtuele Precisie Ontmoet",
      description: "Wij creëren ongeëvenaarde digitale ervaringen—van immersieve virtuele realiteiten tot op maat gemaakte online vlaggenschepen—die de toekomst van de aanwezigheid van uw merk bepalen.",
    },
    services: {
        title: 'Onze Kenmerkende Disciplines',
        subtitle: 'Een samengestelde suite van elite digitale diensten, elk uitgevoerd met nauwgezette precisie om uw merk boven het conventionele uit te tillen.',
        list: [
            { id: 'tour', title: 'Immersieve Ervaringen', description: 'Construeer hyperrealistische digitale tweelingen van uw omgeving. Onze immersieve ervaringen zijn gemaakt om te boeien en te converteren.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Luchtcinematografie', description: 'Beheers de lucht met filmische luchtvertellingen. We leggen dynamische, hifi-beelden vast die een transcendent perspectief bieden.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Digitale Vlaggenschepen', description: 'Geef opdracht voor een op maat gemaakt digitaal vlaggenschip. Onze websites zijn ontworpen voor prestaties, elegantie en een duurzame merkinvloed.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Visuele Kunst', description: 'Definieer het verhaal van uw merk door middel van meeslepende visuele kunst. We produceren zorgvuldig vervaardigde beelden die resoneren en inspireren.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Plan een Privéconsult",
      subtitle: "Bespreek de visie van uw project met onze strategen. Wij zijn bereid uw ambities om te zetten in een tastbare digitale realiteit. Gelieve hieronder uw gegevens te verstrekken.",
      namePlaceholder: "Volledige Naam",
      emailPlaceholder: "Zakelijke E-mail",
      messagePlaceholder: "Project Omschrijving",
      submitButton: "Vraag Indienen",
      formSuccess: "Uw aanvraag is ontvangen.",
      formError: "Zorg ervoor dat alle velden correct zijn ingevuld.",
    },
    footer: {
      rights: "Alle rechten voorbehouden.",
    },
    pages: {
        tour: {
            hero: {
                title: "Immersieve 360° Ervaringen",
                subtitle: "Overschrijd fysieke grenzen. Nodig de wereld binnen.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "De Architectuur van Virtuele Aanwezigheid",
                paragraphs: [
                    "Onze 360° virtuele tours zijn geen loutere scans; het zijn zorgvuldig ontworpen digitale activa. We construeren hyperrealistische digitale tweelingen van uw omgeving in verbluffende 8K-resolutie, wat een ervaring biedt die zo diepgaand is dat het de fysieke aanwezigheid evenaart. Elk detail wordt vastgelegd, elke textuur wordt weergegeven, wat een naadloze en intuïtieve verkenning creëert.",
                    "Dit is de nieuwe grens van publieksbetrokkenheid. Stel potentiële klanten in staat uw ruimte te bewonen van overal ter wereld, wat een diepere band bevordert en de besluitvorming versnelt. Van exclusieve vastgoedportfolio's tot architectonische wonderen, wij transformeren uw fysieke locatie in een onvergetelijke virtuele bestemming."
                ]
            },
            gallery: {
                title: "Een Gecureerd Perspectief",
                subtitle: "Wees getuige van de helderheid en diepte die onze immersieve creaties definiëren.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Moderne woonkamer met elegante meubels" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "360-graden camera op een statief in een lichte kamer" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Ruime moderne keuken met eiland" }
                ]
            },
            features: {
                title: "De Kenmerken van Ons Vakmanschap",
                subtitle: "Onze toewijding aan technologische excellentie en artistieke leiding zorgt voor een ongeëvenaard eindproduct.",
                items: [
                    { icon: 'Eye', title: 'Hyperrealistische Immersie', description: 'Ervaar naadloze, levensechte navigatie met onze toonaangevende 8K panoramische beeldvorming.' },
                    { icon: 'MousePointerClick', title: 'Gecureerde Interactieve Punten', description: 'Sluit rijke media in — video, tekst en externe links — om een meeslepende, verhalende ervaring te creëren.' },
                    { icon: 'Smartphone', title: 'Universele Toegankelijkheid', description: 'Vlekkeloze prestaties op alle platforms, van desktopbrowsers tot high-end VR-headsets.' },
                    { icon: 'Share2', title: 'Moeiteloze Integratie', description: 'Implementeer uw virtuele ervaring met een eenvoudige, elegante insluiting op uw website of een deelbare link.' },
                ]
            },
            pricing: {
                title: "Investeringsniveaus voor Virtualisatie",
                subtitle: "Selecteer een pakket dat is afgestemd op de schaal en ambitie van uw digitale omgeving.",
                plans: [
                    { name: "Essentieel", price: "€499", period: "per ruimte", features: ["Tot 140 m²", "15 8K Panoramapunten", "Standaard Interactieve Hotspots", "3 Maanden Premium Hosting"], isFeatured: false },
                    { name: "Professioneel", price: "€899", period: "per ruimte", features: ["Tot 370 m²", "35 8K Panoramapunten", "Aangepaste UI/UX", "Google Street View Integratie", "1 Jaar Premium Hosting"], isFeatured: true },
                    { name: "Enterprise", price: "Op Maat", period: "", features: ["Onbeperkte Schaal", "Multi-locatie Uitrol", "Geavanceerde Gebruikersanalyse", "API & SDK Toegang", "Toegewijde Accountmanager"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Luchtcinematografie",
                subtitle: "Een perspectief gereserveerd voor de ambitieuzen.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Meesterschap van het Luchtdomein",
                paragraphs: [
                    "Wij bieden meer dan alleen drone-operatie; wij bieden luchtkunst. Onze gecertificeerde cinematografen besturen een elite vloot van drones, ontworpen voor stabiliteit en uitgerust met camera's van bioscoopkwaliteit. We leggen weidse panorama's en dynamische actie vast met een precisie die het gewone in het buitengewone verandert.",
                    "Of het nu gaat om de presentatie van luxe onroerend goed dat een gevoel van schaal en grandeur vereist, of om complexe industriële inspecties die absolute nauwkeurigheid vergen, onze luchtoplossingen leveren ongeëvenaarde data en adembenemende beelden. Wij veranderen de lucht in een canvas voor uw visie, en bieden een krachtig en uniek verhalend instrument."
                ]
            },
            gallery: {
                title: "Het Uitzicht van Boven",
                subtitle: "Een verzameling van ons werk, die de kracht van een verheven perspectief toont.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Drone die over een dramatisch kustlandschap vliegt" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Bovenaanzicht van een kronkelende weg door een bos" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Close-up van een professionele cinematografische drone" }
                ]
            },
            features: {
                title: "Ons Luchtarsenaal",
                subtitle: "Gebruikmakend van geavanceerde technologie en doorgewinterde expertise om superieure luchtintelligentie en -beelden te leveren.",
                items: [
                    { icon: 'Film', title: '6K Cinematografische Opname', description: 'Produceer adembenemende, boterzachte luchtbeelden met onze dronecamerasystemen van bioscoopkwaliteit.' },
                    { icon: 'Building', title: 'Architectuur & Vastgoed', description: 'Presenteer eigendommen met ongeëvenaarde grandeur, en leg hun relatie met het omringende landschap vast.' },
                    { icon: 'Search', title: 'Technische Inspectie', description: 'Voer veilige, hoge-resolutie inspecties uit van kritieke infrastructuur met thermische en zoommogelijkheden.' },
                    { icon: 'Map', title: 'Precisie Kartering & Landmeting', description: 'Genereer zeer nauwkeurige 2D-orthomosaïeken en 3D-modellen voor landontwikkeling en -analyse.' },
                ]
            },
            pricing: {
                title: "Luchtdienst Niveaus",
                subtitle: "Samengestelde pakketten voor een reeks fotografische en cinematografische vereisten.",
                plans: [
                    { name: "Verkennerspakket", price: "€550", period: "per sessie", features: ["1,5 uur op locatie", "30 Bewerkte Hoge-Res Foto's", "Volledige Commerciële Licentie"], isFeatured: false },
                    { name: "Cinematografisch Pakket", price: "€950", period: "per sessie", features: ["Tot 3 uur op locatie", "2 minuten Bewerkte 6K Film", "Aangepaste Muziek & Kleurcorrectie", "Merkintegratie"], isFeatured: true },
                    { name: "Volledige Productie", price: "€2200", period: "hele dag", features: ["8 uur op locatie", "Alle Ruwe Foto- & Videobestanden", "Toegewijd Regisseur & Piloot Team", "Prioriteit Postproductie"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Op Maat Gemaakte Digitale Vlaggenschepen",
                subtitle: "De definitieve online residentie van uw merk.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Digitale Identiteit Ontwerpen",
                paragraphs: [
                    "Een website is niet louter een digitale brochure; het is het architectonische middelpunt van de identiteit van uw merk. Wij ontwerpen en bouwen op maat gemaakte digitale vlaggenschepen — online ervaringen die even performant als elegant zijn. Onze aanpak is holistisch en integreert merkstrategie, gebruikerservaringontwerp en geavanceerde technologie.",
                    "Elke regel code, elke pixel en elke interactie is doelbewust ontworpen om een intuïtieve en memorabele reis voor uw publiek te creëren. Wij bouwen voor de lange termijn en zorgen ervoor dat uw digitale aanwezigheid niet alleen visueel verbluffend is, maar ook veilig, schaalbaar en geoptimaliseerd voor vindbaarheid. Dit is digitaal vakmanschap van de hoogste orde."
                ]
            },
            gallery: {
                title: "Etalage van Digitale Architectuur",
                subtitle: "Een blik op onze filosofie van schoon, doelgericht en elegant ontwerp.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Schone code op een donker scherm" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Ontwerper die aan een website-indeling op een computer werkt" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Een website getoond op een laptop met analyse-grafieken" }
                ]
            },
            features: {
                title: "Pijlers van Digitale Excellentie",
                subtitle: "Onze ontwikkelingsfilosofie is gebaseerd op vier kernprincipes die een superieur eindproduct garanderen.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Op Maat Gemaakt Ontwerp & UX', description: 'Elke interface is een unieke creatie, afgestemd op uw merkverhaal en gebruikerspsychologie. Nooit sjablonen.' },
                    { icon: 'Smartphone', title: 'Vloeiend-Responsieve Architectuur', description: 'Een onberispelijke ervaring op elk apparaat, van mobiele touchpoints tot uitgebreide desktopschermen.' },
                    { icon: 'Rocket', title: 'Elite Prestaties', description: 'Ontworpen voor laadtijden van minder dan een seconde. We optimaliseren elk onderdeel voor een bliksemsnelle gebruikerservaring.' },
                    { icon: 'ShieldCheck', title: 'Vesting-Grade Beveiliging', description: 'Gebouwd op een fundament van moderne beveiligingsprotocollen om uw gegevens en uw reputatie te beschermen.' },
                ]
            },
            pricing: {
                title: "Investering in Digitale Erfenis",
                subtitle: "Wij bieden een enkel, uitgebreid pakket voor klanten die een compromisloze online aanwezigheid eisen.",
                plans: [
                    { name: "De Ouverture", price: "€1.500", period: "eenmalig", features: ["Op Maat Gemaakte Single-Page Site", "Contact & Lead Capture Formulier", "Vloeiend-Responsief Ontwerp", "Kern SEO Grondslagen"], isFeatured: false },
                    { name: "De Marquee", price: "€4.500", period: "eenmalig", features: ["Tot 10 Aangepaste Pagina's", "Headless CMS Integratie", "Blog & Content Platform", "Geavanceerde SEO & Analytics", "Toegewijde Projectmanager"], isFeatured: true },
                    { name: "Het Atelier", price: "Vanaf €9.500", period: "", features: ["Volledige E-commerce Suite", "Product & Voorraadsysteem", "Veilige Betalingsintegratie", "Klantenaccount Portalen", "Op Maat Gemaakte Functieontwikkeling"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Commerciële Visuele Kunst",
                subtitle: "Elke pixel, geperfectioneerd. Elk beeld, een statement.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "De Kunst van het Stilstaande Beeld",
                paragraphs: [
                    "In een wereld verzadigd met beelden, creëren wij visuele activa die de aandacht opeisen. Onze fotografen zijn meesters in licht en compositie, kunstenaars die verhalen creëren binnen één enkel frame. We gaan verder dan eenvoudige documentatie om beelden te produceren die strategisch, evocatief en nauwgezet zijn uitgevoerd.",
                    "Of het nu gaat om het vastleggen van de strakke lijnen van een nieuw architectonisch project of de ingewikkelde details van een luxeproduct, ons proces wordt gedefinieerd door precisie en een onophoudelijk streven naar perfectie. We gebruiken state-of-the-art apparatuur en geavanceerde nabewerkingstechnieken om een eindproduct te leveren dat ronduit vlekkeloos is."
                ]
            },
            gallery: {
                title: "Een Portfolio van Precisie",
                subtitle: "Een samengestelde selectie van werken die ons technisch meesterschap en artistieke visie demonstreren.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Professionele camera op een tafel" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Fotograaf die een foto maakt in een stedelijke omgeving" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Prachtige landschapsfoto van bergen en een meer" }
                ]
            },
            features: {
                title: "Onze Fotografische Disciplines",
                subtitle: "Gespecialiseerde fotografische diensten, elk uitgevoerd met een onwrikbare toewijding aan kwaliteit en merkafstemming.",
                items: [
                    { icon: 'Home', title: 'Architectuur & Interieur', description: 'Vang de essentie van een ruimte met perfect gecomponeerde, high-dynamic-range beelden.' },
                    { icon: 'Briefcase', title: 'Zakelijk & Redactioneel', description: 'Creëer een krachtig merkverhaal met professionele directieportretten en evenementdocumentatie.' },
                    { icon: 'ShoppingBag', title: 'Product & Stilleven', description: 'Nauwkeurig verlichte en gestileerde beelden voor e-commerce, reclame en catalogi die verlangen opwekken.' },
                    { icon: 'Utensils', title: 'Culinaire Kunsten', description: 'Transformeer uw culinaire creaties in kunstwerken met verleidelijk gedetailleerde foodfotografie.' },
                ]
            },
            pricing: {
                title: "Commissie Niveaus",
                subtitle: "Gestructureerde pakketten voor het verwerven van premium visuele activa.",
                plans: [
                    { name: "Het Vignet", price: "€450", period: "1 uur", features: ["Focus op één onderwerp", "15 Bewerkte Digitale Activa", "Online Proefgalerij", "Ideaal voor portretten/producten"], isFeatured: false },
                    { name: "Het Lookbook", price: "€900", period: "3 uur", features: ["Sessie met meerdere onderwerpen", "40+ Bewerkte Digitale Activa", "Commerciële Gebruikslicentie", "Perfect voor eigendom/merk"], isFeatured: true },
                    { name: "De Campagne", price: "€1800", period: "halve dag (5 uur)", features: ["Uitgebreide dekking", "100+ Bewerkte Activa", "Art Direction & Styling", "Prioriteit Postproductie"], isFeatured: false },
                ]
            }
        }
    },
  },
  da: {
    nav: {
      tour: "Immersive Oplevelser",
      drone: "Luftfotografering",
      website: "Digitale Flagskibe",
      photography: "Visuel Kunst",
      contact: "Konsultation",
      getStarted: "Start Projekt",
    },
    hero: {
      title: "Skaber Digitale Eftermæler",
      subtitle: "Hvor Vision Møder Virtuel Præcision",
      description: "Vi skaber uovertrufne digitale oplevelser – fra immersive virtuelle virkeligheder til skræddersyede online flagskibe – der definerer fremtiden for dit brands tilstedeværelse.",
    },
    services: {
        title: 'Vores Signaturdiscipliner',
        subtitle: 'En kurateret suite af elite digitale tjenester, hver udført med omhyggelig præcision for at løfte dit brand ud over det konventionelle.',
        list: [
            { id: 'tour', title: 'Immersive Oplevelser', description: 'Konstruer hyperrealistiske digitale tvillinger af dit miljø. Vores immersive oplevelser er skabt til at fængsle og konvertere.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Luftfotografering', description: 'Behersk himlen med filmisk luftfortælling. Vi fanger dynamiske, high-fidelity-billeder, der tilbyder et transcendentalt perspektiv.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Digitale Flagskibe', description: 'Bestil et skræddersyet digitalt flagskib. Vores websteder er bygget til ydeevne, elegance og varig brandpåvirkning.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Visuel Kunst', description: 'Definer dit brands fortælling gennem overbevisende visuel kunst. Vi producerer omhyggeligt udformede billeder, der vækker genklang og inspirerer.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Book en Privat Konsultation",
      subtitle: "Diskuter dit projekts vision med vores strateger. Vi er parate til at omsætte dine ambitioner til en håndgribelig digital virkelighed. Angiv venligst dine oplysninger nedenfor.",
      namePlaceholder: "Fulde Navn",
      emailPlaceholder: "Firma E-mail",
      messagePlaceholder: "Projektbeskrivelse",
      submitButton: "Send Forespørgsel",
      formSuccess: "Din forespørgsel er modtaget.",
      formError: "Sørg venligst for, at alle felter er udfyldt korrekt.",
    },
    footer: {
      rights: "Alle rettigheder forbeholdes.",
    },
    pages: {
        tour: {
            hero: {
                title: "Immersive 360° Oplevelser",
                subtitle: "Overskrid fysiske grænser. Inviter verden indenfor.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Arkitekturen bag Virtuel Tilstedeværelse",
                paragraphs: [
                    "Vores 360° virtuelle ture er ikke blot scanninger; de er omhyggeligt konstruerede digitale aktiver. Vi bygger hyperrealistiske digitale tvillinger af dit miljø i forbløffende 8K-opløsning, hvilket giver en oplevelse så visceral, at den konkurrerer med fysisk tilstedeværelse. Hver detalje fanges, hver tekstur gengives, hvilket skaber en problemfri og intuitiv udforskning.",
                    "Dette er den nye frontlinje for publikumsengagement. Giv potentielle kunder mulighed for at bebo dit rum fra hvor som helst i verden, hvilket fremmer en dybere forbindelse og fremskynder beslutningstagningen. Fra eksklusive ejendomsporteføljer til arkitektoniske vidundere omdanner vi dit fysiske rum til en uforglemmelig virtuel destination."
                ]
            },
            gallery: {
                title: "Et Kurateret Perspektiv",
                subtitle: "Oplev den klarhed og dybde, der definerer vores immersive kreationer.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Moderne stue med elegante møbler" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "360-graders kamera på et stativ i et lyst rum" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Rummeligt moderne køkken med ø" }
                ]
            },
            features: {
                title: "Vores Håndværks Kendetegn",
                subtitle: "Vores engagement i teknologisk ekspertise og kunstnerisk ledelse sikrer et uovertruffent slutprodukt.",
                items: [
                    { icon: 'Eye', title: 'Hyperrealistisk Immersion', description: 'Oplev problemfri, virkelighedstro navigation med vores brancheførende 8K panoramabilleddannelse.' },
                    { icon: 'MousePointerClick', title: 'Kuraterede Interaktive Punkter', description: 'Integrer rigt medieindhold – video, tekst og eksterne links – for at skabe en overbevisende, narrativ-drevet oplevelse.' },
                    { icon: 'Smartphone', title: 'Universel Tilgængelighed', description: 'Fejlfri ydeevne på tværs af alle platforme, fra desktop-browsere til high-end VR-headsets.' },
                    { icon: 'Share2', title: 'Ubesværet Integration', description: 'Implementer din virtuelle oplevelse med en simpel, elegant indlejring på din hjemmeside eller et delbart link.' },
                ]
            },
            pricing: {
                title: "Investeringsniveauer for Virtualisering",
                subtitle: "Vælg en pakke, der er skræddersyet til omfanget og ambitionen af dit digitale miljø.",
                plans: [
                    { name: "Essentiel", price: "3.499 kr", period: "pr. rum", features: ["Op til 140 m²", "15 8K Panoramapunkter", "Standard Interaktive Hotspots", "3 Måneders Premium Hosting"], isFeatured: false },
                    { name: "Professionel", price: "5.999 kr", period: "pr. rum", features: ["Op til 370 m²", "35 8K Panoramapunkter", "Brugerdefineret UI/UX", "Google Street View Integration", "1 Års Premium Hosting"], isFeatured: true },
                    { name: "Enterprise", price: "Skræddersyet", period: "", features: ["Ubegrænset Skala", "Multi-location Udrulning", "Avanceret Brugeranalyse", "API & SDK Adgang", "Dedikeret Account Manager"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Luftfotografering",
                subtitle: "Et perspektiv forbeholdt de ambitiøse.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Mestring af Luftrummet",
                paragraphs: [
                    "Vi tilbyder mere end blot droneoperation; vi leverer luftkunst. Vores certificerede filmfotografer kommanderer en eliteflåde af droner, designet til stabilitet og udstyret med kameraer af biografkvalitet. Vi fanger fejende udsigter og dynamisk action med en præcision, der forvandler det ordinære til det ekstraordinære.",
                    "Uanset om det er luksusejendomsfremvisninger, der kræver en følelse af skala og storhed, eller komplekse industrielle inspektioner, der kræver absolut nøjagtighed, leverer vores luftløsninger uovertrufne data og betagende billeder. Vi forvandler himlen til et lærred for din vision og giver et stærkt og unikt fortællingsværktøj."
                ]
            },
            gallery: {
                title: "Udsigten fra Oven",
                subtitle: "En samling af vores arbejde, der viser kraften i et ophøjet perspektiv.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Drone, der flyver over et dramatisk kystlandskab" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Luftfoto af en snoet vej gennem en skov" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Nærbillede af en professionel filmdrone" }
                ]
            },
            features: {
                title: "Vores Luftarsenal",
                subtitle: "Udnyttelse af banebrydende teknologi og erfaren ekspertise til at levere overlegen luftintelligens og billeder.",
                items: [
                    { icon: 'Film', title: '6K Filmisk Optagelse', description: 'Producer betagende, silkebløde luftoptagelser med vores dronekamerasystemer i biografkvalitet.' },
                    { icon: 'Building', title: 'Arkitektur & Ejendom', description: 'Præsenter ejendomme med uovertruffen storhed, og fang deres forhold til det omkringliggende landskab.' },
                    { icon: 'Search', title: 'Teknisk Inspektion', description: 'Udfør sikre, højopløselige inspektioner af kritisk infrastruktur med termiske og zoom-funktioner.' },
                    { icon: 'Map', title: 'Præcisionskortlægning & Opmåling', description: 'Generer højpræcise 2D-ortomosaikker og 3D-modeller til jordanvendelse og -analyse.' },
                ]
            },
            pricing: {
                title: "Luftservice Niveauer",
                subtitle: "Kuraterede pakker til en række fotografiske og filmiske krav.",
                plans: [
                    { name: "Spejderpakke", price: "3.999 kr", period: "pr. session", features: ["1,5 time på lokation", "30 Redigerede Højopløselige Stillbilleder", "Fuld Kommerciel Licens"], isFeatured: false },
                    { name: "Filmisk Pakke", price: "6.999 kr", period: "pr. session", features: ["Op til 3 timer på lokation", "2-minutters Redigeret 6K Film", "Brugerdefineret Musik & Farvekorrektion", "Brand Integration"], isFeatured: true },
                    { name: "Fuld Produktion", price: "14.999 kr", period: "hel dag", features: ["8 timer på lokation", "Alle Rå Foto- & Videoaktiver", "Dedikeret Instruktør & Pilot Team", "Prioriteret Postproduktion"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Skræddersyede Digitale Flagskibe",
                subtitle: "Dit brands definitive online residens.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Udvikling af Digital Identitet",
                paragraphs: [
                    "En hjemmeside er ikke blot en digital brochure; det er det arkitektoniske midtpunkt for dit brands identitet. Vi arkitekterer og konstruerer skræddersyede digitale flagskibe – online oplevelser, der er lige så performante, som de er elegante. Vores tilgang er holistisk og integrerer brandstrategi, brugeroplevelsesdesign og banebrydende teknologi.",
                    "Hver linje kode, hver pixel og hver interaktion er bevidst designet til at skabe en intuitiv og mindeværdig rejse for dit publikum. Vi bygger for lang levetid og sikrer, at din digitale tilstedeværelse ikke kun er visuelt slående, men også sikker, skalerbar og optimeret til synlighed. Dette er digitalt håndværk af højeste orden."
                ]
            },
            gallery: {
                title: "Udstilling af Digital Arkitektur",
                subtitle: "Et glimt af vores filosofi om rent, målrettet og elegant design.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Ren kode på en mørk skærm" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Designer, der arbejder på et webstedslayout på en computer" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "En hjemmeside vist på en bærbar computer med analyse-grafer" }
                ]
            },
            features: {
                title: "Søjler af Digital Ekspertise",
                subtitle: "Vores udviklingsfilosofi er baseret på fire kerneprincipper, der sikrer et overlegent slutprodukt.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Skræddersyet Design & UX', description: 'Hver grænseflade er en unik skabelse, der er skræddersyet til din brandfortælling og brugerpsykologi. Aldrig skabeloner.' },
                    { icon: 'Smartphone', title: 'Flydende-Responsiv Arkitektur', description: 'En upåklagelig oplevelse på enhver enhed, fra mobile berøringspunkter til store desktop-skærme.' },
                    { icon: 'Rocket', title: 'Elite Ydeevne', description: 'Konstrueret til indlæsningstider under et sekund. Vi optimerer ethvert aktiv for en lynhurtig brugeroplevelse.' },
                    { icon: 'ShieldCheck', title: 'Fæstnings-Sikkerhed', description: 'Bygget på et fundament af moderne sikkerhedsprotokoller for at beskytte dine data og dit omdømme.' },
                ]
            },
            pricing: {
                title: "Investering i Digitalt Eftermæle",
                subtitle: "Vi tilbyder en enkelt, omfattende pakke til kunder, der kræver en kompromisløs online tilstedeværelse.",
                plans: [
                    { name: "Ouverturen", price: "9.999 kr", period: "engangs", features: ["Skræddersyet Enkeltsides Websted", "Kontakt- & Lead-indsamlingsformular", "Flydende-Responsivt Design", "Grundlæggende SEO-fundament"], isFeatured: false },
                    { name: "Markisen", price: "29.999 kr", period: "engangs", features: ["Op til 10 Brugerdefinerede Sider", "Headless CMS Integration", "Blog- & Indholdsplatform", "Avanceret SEO & Analyse", "Dedikeret Projektleder"], isFeatured: true },
                    { name: "Atelieret", price: "Fra 59.999 kr", period: "", features: ["Fuld E-handelssuite", "Produkt- & Lagerstyringssystem", "Sikker Betalingsintegration", "Kundeportal", "Skræddersyet Funktionsudvikling"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Kommerciel Visuel Kunst",
                subtitle: "Hver pixel, perfektioneret. Hvert billede, en erklæring.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "Kunsten i det Stille Billede",
                paragraphs: [
                    "I en verden mættet med billeder skaber vi visuelle aktiver, der kræver opmærksomhed. Vores fotografer er mestre i lys og komposition, kunstnere, der skaber fortællinger inden for en enkelt ramme. Vi bevæger os ud over simpel dokumentation for at producere billeder, der er strategiske, stemningsfulde og omhyggeligt udførte.",
                    "Uanset om det drejer sig om at fange de rene linjer i et nyt arkitektonisk projekt eller de indviklede detaljer i et luksusprodukt, defineres vores proces af præcision og en utrættelig stræben efter perfektion. Vi bruger topmoderne udstyr og avancerede efterbehandlingsteknikker for at levere et slutprodukt, der er intet mindre end fejlfrit."
                ]
            },
            gallery: {
                title: "Et Portefølje af Præcision",
                subtitle: "Et kurateret udvalg af værker, der demonstrerer vores tekniske mesterskab og kunstneriske vision.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Professionelt kamera på et bord" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Fotograf, der tager et billede i bymiljø" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Fantastisk landskabsfotografi af bjerge og en sø" }
                ]
            },
            features: {
                title: "Vores Fotografiske Discipliner",
                subtitle: "Specialiserede fotografiske tjenester, hver udført med et urokkeligt engagement i kvalitet og brandjustering.",
                items: [
                    { icon: 'Home', title: 'Arkitektur & Interiør', description: 'Fang essensen af et rum med perfekt komponerede billeder med højt dynamisk område.' },
                    { icon: 'Briefcase', title: 'Erhverv & Redaktionelt', description: 'Skab en stærk brandfortælling med professionelle portrætter af ledere og dokumentation af begivenheder.' },
                    { icon: 'ShoppingBag', title: 'Produkt & Stilleben', description: 'Omhyggeligt belyste og stylede billeder til e-handel, reklame og kataloger, der skaber begær.' },
                    { icon: 'Utensils', title: 'Kulinarisk Kunst', description: 'Forvandl dine kulinariske kreationer til kunstværker med pirrende detaljeret madfotografering.' },
                ]
            },
            pricing: {
                title: "Kommissionsniveauer",
                subtitle: "Strukturerede pakker til erhvervelse af premium visuelle aktiver.",
                plans: [
                    { name: "Vignetten", price: "2.999 kr", period: "1 time", features: ["Enkelt motivfokus", "15 Redigerede Digitale Aktiver", "Online Korrekturgalleri", "Ideel til portrætter/produkter"], isFeatured: false },
                    { name: "Lookbooket", price: "5.999 kr", period: "3 timer", features: ["Multi-motiv Session", "40+ Redigerede Digitale Aktiver", "Kommerciel Brugslicens", "Perfekt til ejendom/brand"], isFeatured: true },
                    { name: "Kampagnen", price: "11.999 kr", period: "halv dag (5 timer)", features: ["Omfattende Dækning", "100+ Redigerede Aktiver", "Art Direction & Styling", "Prioriteret Postproduktion"], isFeatured: false },
                ]
            }
        }
    },
  },
  hu: {
    nav: {
      tour: "Immerzív Élmények",
      drone: "Légi Kinematográfia",
      website: "Digitális Zászlóshajók",
      photography: "Vizuális Művészet",
      contact: "Konzultáció",
      getStarted: "Projekt Indítása",
    },
    hero: {
      title: "Digitális Örökségek Tervezése",
      subtitle: "Ahol a Vízió Találkozik a Virtuális Precizitással",
      description: "Páratlan digitális élményeket alkotunk – az immerzív virtuális valóságoktól a testreszabott online zászlóshajókig –, amelyek meghatározzák márkája jelenlétének jövőjét.",
    },
    services: {
        title: 'Kiemelt Szakterületeink',
        subtitle: 'Elit digitális szolgáltatások gondosan összeállított csomagja, mindegyik aprólékos precizitással kivitelezve, hogy márkáját a megszokott fölé emelje.',
        list: [
            { id: 'tour', title: 'Immerzív Élmények', description: 'Építsen hiperrealisztikus digitális ikreket környezetéről. Immerzív élményeinket úgy alkottuk meg, hogy lekössék és konvertálják a közönséget.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Légi Kinematográfia', description: 'Uralja az eget filmes légi történetmeséléssel. Dinamikus, nagy hűségű vizuális anyagokat rögzítünk, amelyek transzcendens perspektívát kínálnak.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Digitális Zászlóshajók', description: 'Rendeljen testreszabott digitális zászlóshajót. Weboldalainkat a teljesítmény, az elegancia és a tartós márkahatás jegyében tervezzük.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Vizuális Művészet', description: 'Határozza meg márkája narratíváját lenyűgöző vizuális művészettel. Gondosan kidolgozott képeket készítünk, amelyek rezonálnak és inspirálnak.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Kérjen Privát Konzultációt",
      subtitle: "Beszélje meg projektjének vízióját stratégáinkkal. Készen állunk arra, hogy ambícióit kézzelfogható digitális valósággá alakítsuk. Kérjük, adja meg adatait alább.",
      namePlaceholder: "Teljes Név",
      emailPlaceholder: "Üzleti E-mail",
      messagePlaceholder: "Projekt Leírás",
      submitButton: "Érdeklődés Küldése",
      formSuccess: "Érdeklődését megkaptuk.",
      formError: "Kérjük, győződjön meg róla, hogy minden mezőt helyesen töltött ki.",
    },
    footer: {
      rights: "Minden jog fenntartva.",
    },
    pages: {
        tour: {
            hero: {
                title: "Immerzív 360°-os Élmények",
                subtitle: "Lépje át a fizikai határokat. Hívja be a világot.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "A Virtuális Jelenlét Építészete",
                paragraphs: [
                    "360°-os virtuális túráink nem pusztán szkennelések; ezek gondosan megtervezett digitális eszközök. Hiperrealisztikus digitális ikreket építünk környezetéről lenyűgöző 8K felbontásban, olyan zsigeri élményt nyújtva, amely vetekszik a fizikai jelenléttel. Minden részletet rögzítünk, minden textúrát megjelenítünk, zökkenőmentes és intuitív felfedezést teremtve.",
                    "Ez a közönség bevonásának új határa. Tegye lehetővé a potenciális ügyfelek számára, hogy a világ bármely pontjáról belakják terét, mélyebb kapcsolatot ápolva és felgyorsítva a döntéshozatalt. Az exkluzív ingatlanportfólióktól az építészeti csodákig fizikai helyszínét felejthetetlen virtuális célponttá alakítjuk."
                ]
            },
            gallery: {
                title: "Gondosan Összeállított Perspektíva",
                subtitle: "Legyen tanúja annak a tisztaságnak és mélységnek, amely immerzív alkotásainkat jellemzi.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Modern nappali elegáns bútorokkal" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "360 fokos kamera állványon egy világos szobában" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Tágas, modern konyha szigettel" }
                ]
            },
            features: {
                title: "Művészetünk Jellemzői",
                subtitle: "A technológiai kiválóság és a művészeti irányítás iránti elkötelezettségünk páratlan végterméket garantál.",
                items: [
                    { icon: 'Eye', title: 'Hiperrealisztikus Immerzió', description: 'Tapasztalja meg a zökkenőmentes, élethű navigációt iparágvezető 8K panorámaképalkotásunkkal.' },
                    { icon: 'MousePointerClick', title: 'Gondosan Összeállított Interaktív Pontok', description: 'Ágyazzon be gazdag médiatartalmakat – videót, szöveget és külső linkeket – egy lebilincselő, narratíva-vezérelt élményért.' },
                    { icon: 'Smartphone', title: 'Univerzális Hozzáférhetőség', description: 'Hibátlan teljesítmény minden platformon, az asztali böngészőktől a csúcskategóriás VR headsetekig.' },
                    { icon: 'Share2', title: 'Könnyed Integráció', description: 'Telepítse virtuális élményét egy egyszerű, elegáns beágyazással webhelyén vagy egy megosztható linkkel.' },
                ]
            },
            pricing: {
                title: "Befektetési Szintek a Virtualizációhoz",
                subtitle: "Válasszon egy csomagot, amely digitális környezetének méretéhez és ambícióihoz igazodik.",
                plans: [
                    { name: "Alap", price: "175.000 Ft", period: "területenként", features: ["Akár 140 m²", "15 db 8K panorámapont", "Standard interaktív hotspotok", "3 hónap prémium tárhely"], isFeatured: false },
                    { name: "Professzionális", price: "315.000 Ft", period: "területenként", features: ["Akár 370 m²", "35 db 8K panorámapont", "Egyedi márkás UI/UX", "Google Street View integráció", "1 év prémium tárhely"], isFeatured: true },
                    { name: "Vállalati", price: "Egyedi", period: "", features: ["Korlátlan méret", "Több helyszínes bevezetés", "Haladó felhasználói analitika", "API és SDK hozzáférés", "Dedikált kapcsolattartó"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Légi Kinematográfia",
                subtitle: "Egy perspektíva az ambiciózusaknak fenntartva.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "A Légi Tér Uralma",
                paragraphs: [
                    "Többet kínálunk, mint egyszerű drónkezelést; légi művészetet nyújtunk. Tanúsított operatőreink egy elit drónflottát irányítanak, amelyeket stabilitásra terveztek és mozi minőségű kamerákkal szereltek fel. Lenyűgöző panorámákat és dinamikus akciókat rögzítünk olyan precizitással, amely a hétköznapit rendkívülivé varázsolja.",
                    "Legyen szó luxusingatlanok bemutatásáról, amelyek méret- és grandiózus érzetet követelnek, vagy komplex ipari felmérésekről, amelyek abszolút pontosságot igényelnek, légi megoldásaink páratlan adatokat és lélegzetelállító vizuális anyagokat szállítanak. Az eget vászonná alakítjuk víziója számára, erőteljes és egyedi narratív eszközt biztosítva."
                ]
            },
            gallery: {
                title: "A Kilátás Fentről",
                subtitle: "Munkáink gyűjteménye, amely bemutatja egy emelkedett perspektíva erejét.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Drón repül egy drámai tengerparti táj felett" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Felülnézet egy kanyargós útról egy erdőn keresztül" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Közeli kép egy professzionális filmes drónról" }
                ]
            },
            features: {
                title: "Légi Arzenálunk",
                subtitle: "A legmodernebb technológia és a tapasztalt szakértelem kihasználása a kiváló légi intelligencia és vizuális anyagok érdekében.",
                items: [
                    { icon: 'Film', title: '6K Filmes Felvétel', description: 'Készítsen lélegzetelállító, vajsima légi felvételeket mozi minőségű drónkamera-rendszereinkkel.' },
                    { icon: 'Building', title: 'Építészet és Ingatlan', description: 'Mutassa be az ingatlanokat páratlan grandiózussággal, megragadva kapcsolatukat a környező tájjal.' },
                    { icon: 'Search', title: 'Műszaki Ellenőrzés', description: 'Végezzen biztonságos, nagy felbontású ellenőrzéseket kritikus infrastruktúrákon hőkamerás és zoom képességekkel.' },
                    { icon: 'Map', title: 'Precíziós Térképezés és Földmérés', description: 'Hozzon létre nagy pontosságú 2D ortomozaikokat és 3D modelleket a területfejlesztéshez és -elemzéshez.' },
                ]
            },
            pricing: {
                title: "Légi Szolgáltatási Szintek",
                subtitle: "Gondosan összeállított csomagok a fotózási és kinematográfiai igények széles skálájához.",
                plans: [
                    { name: "Felderítő Csomag", price: "195.000 Ft", period: "alkalmanként", features: ["1,5 óra a helyszínen", "30 szerkesztett nagy felbontású állókép", "Teljes kereskedelmi licenc"], isFeatured: false },
                    { name: "Filmes Csomag", price: "335.000 Ft", period: "alkalmanként", features: ["Akár 3 óra a helyszínen", "2 perces szerkesztett 6K film", "Egyedi zene és színkorrekció", "Márka integráció"], isFeatured: true },
                    { name: "Teljes Produkció", price: "770.000 Ft", period: "egész nap", features: ["8 óra a helyszínen", "Minden nyers fotó- és videóanyag", "Dedikált rendező és pilóta csapat", "Priorizált utómunka"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Testreszabott Digitális Zászlóshajók",
                subtitle: "Márkájának végleges online otthona.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "A Digitális Identitás Tervezése",
                paragraphs: [
                    "Egy weboldal nem csupán egy digitális brosúra; ez márkája identitásának építészeti központja. Testreszabott digitális zászlóshajókat tervezünk és építünk – olyan online élményeket, amelyek éppoly teljesítményorientáltak, mint amilyen elegánsak. Megközelítésünk holisztikus, integrálva a márkastratégiát, a felhasználói élménytervezést és a legmodernebb technológiát.",
                    "Minden sor kód, minden pixel és minden interakció céltudatosan arra lett tervezve, hogy intuitív és emlékezetes utazást teremtsen közönsége számára. Hosszú távra építünk, biztosítva, hogy digitális jelenléte ne csak vizuálisan lenyűgöző, hanem biztonságos, skálázható és a megtalálhatóságra optimalizált is legyen. Ez a legmagasabb rendű digitális kézművesség."
                ]
            },
            gallery: {
                title: "Digitális Építészeti Bemutató",
                subtitle: "Betekintés a tiszta, céltudatos és elegáns tervezési filozófiánkba.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Tiszta kód egy sötét képernyőn" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Tervező dolgozik egy weboldal elrendezésén egy számítógépen" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Egy laptopon megjelenített weboldal elemzési grafikonokkal" }
                ]
            },
            features: {
                title: "A Digitális Kiválóság Oszlopai",
                subtitle: "Fejlesztési filozófiánk négy alapelvre épül, amelyek garantálják a kiváló végterméket.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Testreszabott Tervezés és UX', description: 'Minden felület egyedi alkotás, amely márkája narratívájához és a felhasználói pszichológiához igazodik. Soha nem használunk sablonokat.' },
                    { icon: 'Smartphone', title: 'Fluid-Reszponzív Architektúra', description: 'Kifogástalan élmény minden eszközön, a mobil érintőpontoktól a kiterjedt asztali kijelzőkig.' },
                    { icon: 'Rocket', title: 'Elit Teljesítmény', description: 'Másodperc alatti betöltési időkre tervezve. Minden eszközt a villámgyors felhasználói élmény érdekében optimalizálunk.' },
                    { icon: 'ShieldCheck', title: 'Erőd Szintű Biztonság', description: 'Modern biztonsági protokollok alapjaira építve, hogy megvédje adatait és hírnevét.' },
                ]
            },
            pricing: {
                title: "Befektetés a Digitális Örökségbe",
                subtitle: "Egyetlen, átfogó csomagot kínálunk azoknak az ügyfeleknek, akik kompromisszumok nélküli online jelenlétet követelnek.",
                plans: [
                    { name: "A Nyitány", price: "525.000 Ft", period: "egyszeri", features: ["Testreszabott egyoldalas webhely", "Kapcsolatfelvételi és lead-gyűjtő űrlap", "Fluid-reszponzív design", "Alapvető SEO alapok"], isFeatured: false },
                    { name: "A Fő attrakció", price: "1.575.000 Ft", period: "egyszeri", features: ["Akár 10 egyedi oldal", "Headless CMS integráció", "Blog és tartalom platform", "Haladó SEO és analitika", "Dedikált projektmenedzser"], isFeatured: true },
                    { name: "Az Atelier", price: "3.325.000 Ft-tól", period: "", features: ["Teljes e-kereskedelmi csomag", "Termék- és készletrendszer", "Biztonságos fizetési integráció", "Ügyfélfiók portálok", "Testreszabott funkciófejlesztés"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Kereskedelmi Vizuális Művészet",
                subtitle: "Minden pixel, tökéletesítve. Minden kép, egy állítás.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "Az Állókép Művészete",
                paragraphs: [
                    "Egy képekkel telített világban olyan vizuális eszközöket hozunk létre, amelyek figyelmet követelnek. Fotósaink a fény és a kompozíció mesterei, művészek, akik egyetlen képkockában hoznak létre narratívákat. Túllépünk az egyszerű dokumentáción, hogy stratégiai, érzelmeket kiváltó és aprólékosan kivitelezett képeket hozzunk létre.",
                    "Legyen szó egy új építészeti projekt tiszta vonalainak megörökítéséről vagy egy luxustermék bonyolult részleteiről, folyamatunkat a precizitás és a tökéletesség iránti lankadatlan törekvés határozza meg. A legmodernebb felszereléseket és fejlett utómunka-technikákat alkalmazzuk, hogy egy hibátlan végterméket szállítsunk."
                ]
            },
            gallery: {
                title: "A Precizitás Portfóliója",
                subtitle: "Válogatott munkák, amelyek bemutatják technikai mesterségünket és művészi víziónkat.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Professzionális kamera egy asztalon" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Fotós fényképez egy városi környezetben" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Lenyűgöző tájkép hegyekről és egy tóról" }
                ]
            },
            features: {
                title: "Fotográfiai Szakterületeink",
                subtitle: "Speciális fotográfiai szolgáltatások, mindegyiket a minőség és a márka-összehangolás iránti rendíthetetlen elkötelezettséggel végezzük.",
                items: [
                    { icon: 'Home', title: 'Építészet és Belső tér', description: 'Ragadja meg egy tér lényegét tökéletesen komponált, nagy dinamikatartományú képekkel.' },
                    { icon: 'Briefcase', title: 'Vállalati és Szerkesztőségi', description: 'Hozzon létre erőteljes márkanarratívát professzionális vezetői portrékkal és eseménydokumentációval.' },
                    { icon: 'ShoppingBag', title: 'Termék és Csendélet', description: 'Gondosan megvilágított és stilizált képek e-kereskedelemhez, reklámokhoz és katalógusokhoz, amelyek vágyat ébresztenek.' },
                    { icon: 'Utensils', title: 'Kulináris Művészetek', description: 'Alakítsa kulináris alkotásait műalkotásokká ínycsiklandóan részletes ételfotózással.' },
                ]
            },
            pricing: {
                title: "Megbízási Szintek",
                subtitle: "Strukturált csomagok prémium vizuális eszközök beszerzéséhez.",
                plans: [
                    { name: "A Vignetta", price: "160.000 Ft", period: "1 óra", features: ["Egyetlen téma fókuszban", "15 szerkesztett digitális eszköz", "Online próbanyomat galéria", "Ideális portrékhoz/termékekhez"], isFeatured: false },
                    { name: "A Lookbook", price: "315.000 Ft", period: "3 óra", features: ["Több témás fotózás", "40+ szerkesztett digitális eszköz", "Kereskedelmi felhasználási licenc", "Tökéletes ingatlanokhoz/márkákhoz"], isFeatured: true },
                    { name: "A Kampány", price: "630.000 Ft", period: "fél nap (5 óra)", features: ["Átfogó lefedettség", "100+ szerkesztett eszköz", "Művészeti vezetés és styling", "Priorizált utómunka"], isFeatured: false },
                ]
            }
        }
    },
  },
  tr: {
    nav: {
      tour: "Sürükleyici Deneyimler",
      drone: "Hava Sinematografisi",
      website: "Dijital Amiral Gemileri",
      photography: "Görsel Sanatlar",
      contact: "Danışmanlık",
      getStarted: "Projeye Başla",
    },
    hero: {
      title: "Dijital Miraslar Tasarlamak",
      subtitle: "Vizyonun Sanal Hassasiyetle Buluştuğu Yer",
      description: "Sürükleyici sanal gerçekliklerden ısmarlama çevrimiçi amiral gemilerine kadar, markanızın varlığının geleceğini tanımlayan eşsiz dijital deneyimler yaratıyoruz.",
    },
    services: {
        title: 'İmza Disiplinlerimiz',
        subtitle: 'Markanızı gelenekselin ötesine taşımak için her biri titiz bir hassasiyetle yürütülen seçkin dijital hizmetlerden oluşan bir seçki.',
        list: [
            { id: 'tour', title: 'Sürükleyici Deneyimler', description: 'Çevrenizin hiper-gerçekçi dijital ikizlerini oluşturun. Sürükleyici deneyimlerimiz, izleyiciyi büyülemek ve dönüştürmek için tasarlanmıştır.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Hava Sinematografisi', description: 'Sinematik hava hikaye anlatımıyla gökyüzüne hükmedin. Aşkın bir bakış açısı sunan dinamik, yüksek sadakatli görseller yakalıyoruz.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Dijital Amiral Gemileri', description: 'Ismarlama bir dijital amiral gemisi sipariş edin. Web sitelerimiz performans, zarafet ve kalıcı marka etkisi için tasarlanmıştır.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Görsel Sanatlar', description: 'Markanızın anlatısını etkileyici görsel sanatlarla tanımlayın. Yankı uyandıran ve ilham veren titizlikle hazırlanmış görseller üretiyoruz.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Özel Bir Danışmanlık Planlayın",
      subtitle: "Projenizin vizyonunu stratejistlerimizle tartışın. Hırslarınızı somut bir dijital gerçeğe dönüştürmeye hazırız. Lütfen bilgilerinizi aşağıya girin.",
      namePlaceholder: "Tam Ad",
      emailPlaceholder: "İş E-postası",
      messagePlaceholder: "Proje Özeti",
      submitButton: "Talep Gönder",
      formSuccess: "Talebiniz alınmıştır.",
      formError: "Lütfen tüm alanların doğru doldurulduğundan emin olun.",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
    },
    pages: {
        tour: {
            hero: {
                title: "Sürükleyici 360° Deneyimler",
                subtitle: "Fiziksel sınırları aşın. Dünyayı içeri davet edin.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Sanal Varlığın Mimarisi",
                paragraphs: [
                    "360° sanal turlarımız sadece taramalar değildir; titizlikle tasarlanmış dijital varlıklardır. Çarpıcı 8K çözünürlükte ortamınızın hiper-gerçekçi dijital ikizlerini oluşturarak, fiziksel varlıkla rekabet eden içgüdüsel bir deneyim sunuyoruz. Her ayrıntı yakalanır, her doku işlenir, bu da kesintisiz ve sezgisel bir keşif yaratır.",
                    "Bu, izleyici katılımının yeni sınırıdır. Potansiyel müşterilerin dünyanın her yerinden mekanınızı deneyimlemesini sağlayarak daha derin bir bağ kurun ve karar verme sürecini hızlandırın. Özel emlak portföylerinden mimari harikalara kadar, fiziksel mekanınızı unutulmaz bir sanal destinasyona dönüştürüyoruz."
                ]
            },
            gallery: {
                title: "Seçkin Bir Bakış Açısı",
                subtitle: "Sürükleyici yaratımlarımızı tanımlayan netliğe ve derinliğe tanık olun.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Zarif mobilyalı modern oturma odası" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "Aydınlık bir odada tripod üzerinde 360 derece kamera" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Adalı geniş modern mutfak" }
                ]
            },
            features: {
                title: "Zanaatımızın Ayırt Edici Özellikleri",
                subtitle: "Teknolojik mükemmellik ve sanatsal yöne olan bağlılığımız, eşsiz bir nihai ürün sağlar.",
                items: [
                    { icon: 'Eye', title: 'Hiper-Gerçekçi Sürükleyicilik', description: 'Sektör lideri 8K panoramik görüntüleme ile kesintisiz, gerçeğe yakın gezinme deneyimi yaşayın.' },
                    { icon: 'MousePointerClick', title: 'Özel Etkileşimli Noktalar', description: 'Zengin medya — video, metin ve harici bağlantılar — ekleyerek etkileyici, anlatı odaklı bir deneyim yaratın.' },
                    { icon: 'Smartphone', title: 'Evrensel Erişilebilirlik', description: 'Masaüstü tarayıcılardan üst düzey VR başlıklarına kadar tüm platformlarda kusursuz performans.' },
                    { icon: 'Share2', title: 'Zahmetsiz Entegrasyon', description: 'Sanal deneyiminizi web sitenize basit, şık bir gömme veya paylaşılabilir bir bağlantı ile dağıtın.' },
                ]
            },
            pricing: {
                title: "Sanallaştırma için Yatırım Seviyeleri",
                subtitle: "Dijital ortamınızın ölçeğine ve hedeflerine uygun bir paket seçin.",
                plans: [
                    { name: "Temel", price: "15.000 ₺", period: "mekan başına", features: ["140 m²'ye kadar", "15 adet 8K Panorama Noktası", "Standart Etkileşimli Noktalar", "3 Ay Premium Barındırma"], isFeatured: false },
                    { name: "Profesyonel", price: "27.000 ₺", period: "mekan başına", features: ["370 m²'ye kadar", "35 adet 8K Panorama Noktası", "Özel Markalı UI/UX", "Google Sokak Görünümü Entegrasyonu", "1 Yıl Premium Barındırma"], isFeatured: true },
                    { name: "Kurumsal", price: "Özel", period: "", features: ["Sınırsız Ölçek", "Çoklu Lokasyon Dağıtımı", "Gelişmiş Kullanıcı Analitiği", "API ve SDK Erişimi", "Özel Müşteri Yöneticisi"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Hava Sinematografisi",
                subtitle: "İddialılar için ayrılmış bir bakış açısı.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Hava Sahasında Ustalık",
                paragraphs: [
                    "Sadece drone operasyonundan daha fazlasını sunuyoruz; hava sanatı sağlıyoruz. Sertifikalı sinematograflarımız, istikrar için tasarlanmış ve sinema kalitesinde kameralarla donatılmış seçkin bir drone filosuna komuta ediyor. Sıradanı olağanüstüye dönüştüren bir hassasiyetle geniş manzaraları ve dinamik aksiyonları yakalıyoruz.",
                    "Lüks mülk tanıtımlarının ölçek ve ihtişam hissi gerektirdiği durumlardan, mutlak doğruluk gerektiren karmaşık endüstriyel denetimlere kadar, hava çözümlerimiz eşsiz veriler ve nefes kesici görseller sunar. Gökyüzünü vizyonunuz için bir tuvale dönüştürüyor, güçlü ve benzersiz bir anlatım aracı sağlıyoruz."
                ]
            },
            gallery: {
                title: "Yukarıdan Bakış",
                subtitle: "Yüksek bir bakış açısının gücünü gösteren çalışmalarımızdan bir derleme.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Dramatik bir sahil manzarası üzerinde uçan drone" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Bir ormanın içinden geçen virajlı bir yolun tepeden görünümü" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Profesyonel bir sinematografi dronunun yakın çekimi" }
                ]
            },
            features: {
                title: "Hava Arsenalimiz",
                subtitle: "Üstün hava istihbaratı ve görselleri sunmak için en son teknolojiyi ve deneyimli uzmanlığı kullanıyoruz.",
                items: [
                    { icon: 'Film', title: '6K Sinematik Çekim', description: 'Sinema kalitesindeki drone kamera sistemlerimizle nefes kesici, pürüzsüz hava çekimleri yapın.' },
                    { icon: 'Building', title: 'Mimari ve Emlak', description: 'Mülkleri eşsiz bir ihtişamla sunun, çevresindeki manzarayla ilişkisini yakalayın.' },
                    { icon: 'Search', title: 'Teknik Denetim', description: 'Termal ve zoom özellikleriyle kritik altyapıların güvenli, yüksek çözünürlüklü denetimlerini gerçekleştirin.' },
                    { icon: 'Map', title: 'Hassas Haritalama ve Ölçüm', description: 'Arazi geliştirme ve analizi için yüksek doğrulukta 2D ortomozaikler ve 3D modeller oluşturun.' },
                ]
            },
            pricing: {
                title: "Hava Hizmeti Seviyeleri",
                subtitle: "Çeşitli fotoğraf ve sinematografi gereksinimleri için özel olarak hazırlanmış paketler.",
                plans: [
                    { name: "Keşif Paketi", price: "16.500 ₺", period: "seans başına", features: ["1,5 saat yerinde", "30 Düzenlenmiş Yüksek Çözünürlüklü Fotoğraf", "Tam Ticari Lisans"], isFeatured: false },
                    { name: "Sinematik Paket", price: "28.500 ₺", period: "seans başına", features: ["3 saate kadar yerinde", "2 dakikalık Düzenlenmiş 6K Film", "Özel Müzik ve Renk Düzenlemesi", "Marka Entegrasyonu"], isFeatured: true },
                    { name: "Tam Prodüksiyon", price: "66.000 ₺", period: "tam gün", features: ["8 saat yerinde", "Tüm Ham Fotoğraf ve Video Varlıkları", "Özel Yönetmen ve Pilot Ekibi", "Öncelikli Post-Prodüksiyon"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Ismarlama Dijital Amiral Gemileri",
                subtitle: "Markanızın kesin çevrimiçi ikametgahı.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Dijital Kimlik Mühendisliği",
                paragraphs: [
                    "Bir web sitesi sadece dijital bir broşür değildir; markanızın kimliğinin mimari merkezidir. Ismarlama dijital amiral gemileri tasarlıyor ve inşa ediyoruz — zarif olduğu kadar performanslı çevrimiçi deneyimler. Yaklaşımımız bütünseldir, marka stratejisi, kullanıcı deneyimi tasarımı ve en son teknolojiyi entegre eder.",
                    "Her kod satırı, her piksel ve her etkileşim, hedef kitleniz için sezgisel ve unutulmaz bir yolculuk yaratmak üzere bilinçli olarak tasarlanmıştır. Uzun ömürlülük için inşa ediyoruz, dijital varlığınızın sadece görsel olarak çarpıcı değil, aynı zamanda güvenli, ölçeklenebilir ve bulunabilirlik için optimize edilmiş olmasını sağlıyoruz. Bu, en yüksek düzeyde dijital zanaatkarlıktır."
                ]
            },
            gallery: {
                title: "Dijital Mimari Vitrini",
                subtitle: "Temiz, amaçlı ve zarif tasarım felsefemize bir bakış.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Karanlık bir ekranda temiz kod" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Bir bilgisayarda web sitesi düzeni üzerinde çalışan tasarımcı" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Analiz grafikleriyle bir dizüstü bilgisayarda gösterilen bir web sitesi" }
                ]
            },
            features: {
                title: "Dijital Mükemmelliğin Sütunları",
                subtitle: "Geliştirme felsefemiz, üstün bir nihai ürün sağlayan dört temel ilkeye dayanmaktadır.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Ismarlama Tasarım ve UX', description: 'Her arayüz, marka anlatınıza ve kullanıcı psikolojisine göre uyarlanmış benzersiz bir yaratımdır. Asla şablon kullanmayız.' },
                    { icon: 'Smartphone', title: 'Akışkan-Duyarlı Mimari', description: 'Mobil temas noktalarından geniş masaüstü ekranlarına kadar her cihazda kusursuz bir deneyim.' },
                    { icon: 'Rocket', title: 'Elit Performans', description: 'Saniyenin altında yükleme süreleri için tasarlanmıştır. Her varlığı son derece hızlı bir kullanıcı deneyimi için optimize ediyoruz.' },
                    { icon: 'ShieldCheck', title: 'Kale Sınıfı Güvenlik', description: 'Verilerinizi ve itibarınızı korumak için modern güvenlik protokolleri temelinde inşa edilmiştir.' },
                ]
            },
            pricing: {
                title: "Dijital Mirasa Yatırım",
                subtitle: "Tavizsiz bir çevrimiçi varlık talep eden müşteriler için tek ve kapsamlı bir paket sunuyoruz.",
                plans: [
                    { name: "Uvertür", price: "45.000 ₺", period: "tek seferlik", features: ["Ismarlama Tek Sayfa Site", "İletişim ve Potansiyel Müşteri Formu", "Akışkan-Duyarlı Tasarım", "Temel SEO Temelleri"], isFeatured: false },
                    { name: "Markiz", price: "135.000 ₺", period: "tek seferlik", features: ["10'a kadar Özel Sayfa", "Başsız CMS Entegrasyonu", "Blog ve İçerik Platformu", "Gelişmiş SEO ve Analitik", "Özel Proje Yöneticisi"], isFeatured: true },
                    { name: "Atölye", price: "285.000 ₺'den başlayan", period: "", features: ["Tam E-ticaret Paketi", "Ürün ve Envanter Sistemi", "Güvenli Ödeme Entegrasyonu", "Müşteri Hesap Portalları", "Ismarlama Özellik Geliştirme"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Ticari Görsel Sanatlar",
                subtitle: "Her piksel, mükemmelleştirilmiş. Her görüntü, bir ifade.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "Durağan Görüntünün Sanatı",
                paragraphs: [
                    "Görüntülerle doymuş bir dünyada, dikkat çeken görsel varlıklar yaratıyoruz. Fotoğrafçılarımız ışık ve kompozisyon ustalarıdır, tek bir karede anlatılar yaratan sanatçılardır. Stratejik, etkileyici ve titizlikle yürütülen görüntüler üretmek için basit belgelemenin ötesine geçiyoruz.",
                    "Yeni bir mimari projenin temiz hatlarını veya lüks bir ürünün karmaşık detaylarını yakalarken, sürecimiz hassasiyet ve mükemmellik arayışıyla tanımlanır. Kusursuz bir nihai ürün sunmak için en son teknoloji ekipmanları ve gelişmiş post-prodüksiyon tekniklerini kullanıyoruz."
                ]
            },
            gallery: {
                title: "Bir Hassasiyet Portföyü",
                subtitle: "Teknik ustalığımızı ve sanatsal vizyonumuzu gösteren özel bir eser seçkisi.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Bir masa üzerinde profesyonel kamera" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Kentsel bir ortamda fotoğraf çeken fotoğrafçı" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Dağların ve bir gölün çarpıcı manzara fotoğrafı" }
                ]
            },
            features: {
                title: "Fotoğraf Disiplinlerimiz",
                subtitle: "Her biri kaliteye ve marka uyumuna sarsılmaz bir bağlılıkla yürütülen özel fotoğrafçılık hizmetleri.",
                items: [
                    { icon: 'Home', title: 'Mimari ve İç Mekan', description: 'Bir mekanın özünü mükemmel kompozisyonlu, yüksek dinamik aralıklı görüntülerle yakalayın.' },
                    { icon: 'Briefcase', title: 'Kurumsal ve Editöryel', description: 'Profesyonel yönetici portreleri ve etkinlik belgeleriyle güçlü bir marka anlatısı yaratın.' },
                    { icon: 'ShoppingBag', title: 'Ürün ve Natürmort', description: 'E-ticaret, reklam ve kataloglar için arzu uyandıran titizlikle aydınlatılmış ve stilize edilmiş görüntüler.' },
                    { icon: 'Utensils', title: 'Mutfak Sanatları', description: 'Mutfak kreasyonlarınızı, cezbedici derecede ayrıntılı yemek fotoğrafçılığıyla sanat eserlerine dönüştürün.' },
                ]
            },
            pricing: {
                title: "Komisyon Seviyeleri",
                subtitle: "Premium görsel varlıkların edinimi için yapılandırılmış paketler.",
                plans: [
                    { name: "Vinyet", price: "13.500 ₺", period: "1 saat", features: ["Tek Konu Odaklı", "15 Düzenlenmiş Dijital Varlık", "Çevrimiçi Prova Galerisi", "Portreler/ürünler için ideal"], isFeatured: false },
                    { name: "Lookbook", price: "27.000 ₺", period: "3 saat", features: ["Çok Konulu Oturum", "40+ Düzenlenmiş Dijital Varlık", "Ticari Kullanım Lisansı", "Mülk/marka için mükemmel"], isFeatured: true },
                    { name: "Kampanya", price: "54.000 ₺", period: "yarım gün (5 saat)", features: ["Kapsamlı Kapsama", "100+ Düzenlenmiş Varlık", "Sanat Yönetmenliği ve Stil", "Öncelikli Post-Prodüksiyon"], isFeatured: false },
                ]
            }
        }
    },
  },
  ar: {
    nav: {
      tour: "تجارب غامرة",
      drone: "التصوير السينمائي الجوي",
      website: "الواجهات الرقمية",
      photography: "الفن البصري",
      contact: "استشارة",
      getStarted: "ابدأ مشروعك",
    },
    hero: {
      title: "هندسة الموروثات الرقمية",
      subtitle: "حيث تلتقي الرؤية بالدقة الافتراضية",
      description: "نصنع تجارب رقمية لا مثيل لها - من الواقع الافتراضي الغامر إلى الواجهات الرقمية المخصصة عبر الإنترنت - التي تحدد مستقبل وجود علامتك التجارية.",
    },
    services: {
        title: 'تخصصاتنا المميزة',
        subtitle: 'مجموعة منتقاة من الخدمات الرقمية المرموقة، تُنفذ كل منها بدقة متناهية للارتقاء بعلامتك التجارية إلى ما هو أبعد من المألوف.',
        list: [
            { id: 'tour', title: 'تجارب غامرة', description: 'قم ببناء توائم رقمية شديدة الواقعية لبيئتك. تجاربنا الغامرة مصممة لتأسر وتحول.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'التصوير السينمائي الجوي', description: 'سيطر على السماء بسرد قصصي جوي سينمائي. نلتقط صورًا ديناميكية عالية الدقة تقدم منظورًا متساميًا.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'الواجهات الرقمية', description: 'اطلب واجهة رقمية مخصصة. مواقعنا مصممة للأداء والأناقة والتأثير الدائم للعلامة التجارية.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'الفن البصري', description: 'حدد سرد علامتك التجارية من خلال فن بصري مقنع. ننتج صورًا مصنوعة بدقة تتردد أصداؤها وتلهم.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "حدد موعدًا لاستشارة خاصة",
      subtitle: "ناقش رؤية مشروعك مع خبرائنا الاستراتيجيين. نحن على استعداد لترجمة طموحاتك إلى واقع رقمي ملموس. يرجى تقديم تفاصيلك أدناه.",
      namePlaceholder: "الاسم الكامل",
      emailPlaceholder: "البريد الإلكتروني التجاري",
      messagePlaceholder: "موجز المشروع",
      submitButton: "إرسال الاستفسار",
      formSuccess: "تم استلام استفسارك بنجاح.",
      formError: "يرجى التأكد من تعبئة جميع الحقول بشكل صحيح.",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
    },
    pages: {
        tour: {
            hero: {
                title: "تجارب غامرة بزاوية 360 درجة",
                subtitle: "تجاوز الحدود المادية. ادعُ العالم للدخول.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "هندسة الحضور الافتراضي",
                paragraphs: [
                    "جولاتنا الافتراضية بزاوية 360 درجة ليست مجرد مسح ضوئي؛ إنها أصول رقمية مصممة بدقة. نبني توائم رقمية شديدة الواقعية لبيئتك بدقة 8K مذهلة، مما يوفر تجربة حسية تنافس الحضور المادي. يتم التقاط كل التفاصيل، وعرض كل نسيج، مما يخلق استكشافًا سلسًا وبديهيًا.",
                    "هذه هي الحدود الجديدة لمشاركة الجمهور. مكّن العملاء المحتملين من استيطان مساحتك من أي مكان في العالم، مما يعزز اتصالًا أعمق ويسرع عملية اتخاذ القرار. من المحافظ العقارية الحصرية إلى الأعاجيب المعمارية، نحول مساحتك المادية إلى وجهة افتراضية لا تُنسى."
                ]
            },
            gallery: {
                title: "منظور منتقى",
                subtitle: "شاهد الوضوح والعمق الذي يميز إبداعاتنا الغامرة.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "غرفة معيشة حديثة بأثاث أنيق" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "كاميرا 360 درجة على حامل ثلاثي القوائم في غرفة مشرقة" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "مطبخ حديث وواسع مع جزيرة" }
                ]
            },
            features: {
                title: "بصمات حرفتنا",
                subtitle: "التزامنا بالتميز التكنولوجي والتوجيه الفني يضمن منتجًا نهائيًا لا مثيل له.",
                items: [
                    { icon: 'Eye', title: 'انغمار فائق الواقعية', description: 'جرب التنقل السلس والواقعي مع التصوير البانورامي بدقة 8K الرائد في الصناعة.' },
                    { icon: 'MousePointerClick', title: 'نقاط تفاعلية منتقاة', description: 'أدرج وسائط غنية - فيديو، نصوص، وروابط خارجية - لإنشاء تجربة سردية ومقنعة.' },
                    { icon: 'Smartphone', title: 'إمكانية وصول عالمية', description: 'أداء لا تشوبه شائبة على جميع المنصات، من متصفحات سطح المكتب إلى سماعات الواقع الافتراضي المتطورة.' },
                    { icon: 'Share2', title: 'تكامل سهل', description: 'انشر تجربتك الافتراضية بتضمين بسيط وأنيق على موقعك الإلكتروني أو رابط قابل للمشاركة.' },
                ]
            },
            pricing: {
                title: "مستويات الاستثمار في التحول الافتراضي",
                subtitle: "اختر باقة مصممة خصيصًا لحجم وطموح بيئتك الرقمية.",
                plans: [
                    { name: "الأساسية", price: "١٬٨٠٠ ر.س.", period: "لكل مساحة", features: ["حتى ١٤٠ مترًا مربعًا", "١٥ نقطة بانورامية بدقة 8K", "نقاط تفاعلية قياسية", "استضافة مميزة لمدة ٣ أشهر"], isFeatured: false },
                    { name: "الاحترافية", price: "٣٬٣٠٠ ر.س.", period: "لكل مساحة", features: ["حتى ٣٧٠ مترًا مربعًا", "٣٥ نقطة بانورامية بدقة 8K", "واجهة مستخدم مخصصة للعلامة التجارية", "تكامل مع خرائط جوجل", "استضافة مميزة لمدة عام"], isFeatured: true },
                    { name: "المؤسسية", price: "مخصص", period: "", features: ["نطاق غير محدود", "نشر متعدد المواقع", "تحليلات مستخدم متقدمة", "وصول إلى API و SDK", "مدير حساب مخصص"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "التصوير السينمائي الجوي",
                subtitle: "منظور مخصص للطموحين.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "إتقان المجال الجوي",
                paragraphs: [
                    "نحن نقدم أكثر من مجرد تشغيل الطائرات بدون طيار؛ نحن نقدم فنًا جويًا. يقود مصورونا السينمائيون المعتمدون أسطولًا من الطائرات بدون طيار من النخبة، مصممة لتحقيق الاستقرار ومجهزة بكاميرات سينمائية. نلتقط مناظر بانورامية شاملة وحركة ديناميكية بدقة تحول العادي إلى استثنائي.",
                    "سواء كان الأمر يتعلق بعروض العقارات الفاخرة التي تتطلب إحساسًا بالحجم والعظمة، أو المسوحات الصناعية المعقدة التي تتطلب دقة مطلقة، فإن حلولنا الجوية تقدم بيانات لا مثيل لها ومرئيات تخطف الأنفاس. نحول السماء إلى لوحة فنية لرؤيتك، مما يوفر أداة سردية قوية وفريدة من نوعها."
                ]
            },
            gallery: {
                title: "المنظر من الأعلى",
                subtitle: "مجموعة من أعمالنا، تعرض قوة المنظور المرتفع.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "طائرة بدون طيار تحلق فوق منظر ساحلي درامي" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "منظر جوي علوي لطريق متعرج عبر غابة" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "لقطة مقربة لطائرة تصوير سينمائي احترافية بدون طيار" }
                ]
            },
            features: {
                title: "ترسانتنا الجوية",
                subtitle: "الاستفادة من التكنولوجيا المتطورة والخبرة الراسخة لتقديم معلومات ومرئيات جوية متفوقة.",
                items: [
                    { icon: 'Film', title: 'التقاط سينمائي بدقة 6K', description: 'أنتج لقطات جوية تخطف الأنفاس وسلسة للغاية باستخدام أنظمة كاميرات الطائرات بدون طيار السينمائية.' },
                    { icon: 'Building', title: 'الهندسة المعمارية والعقارات', description: 'قدم العقارات بعظمة لا مثيل لها، والتقط علاقتها بالمناظر الطبيعية المحيطة.' },
                    { icon: 'Search', title: 'الفحص الفني', description: 'نفذ عمليات فحص آمنة وعالية الدقة للبنى التحتية الحيوية بقدرات حرارية وتقريب.' },
                    { icon: 'Map', title: 'رسم خرائط ومسح دقيق', description: 'أنشئ خرائط فسيفساء متعامدة ثنائية الأبعاد ونماذج ثلاثية الأبعاد عالية الدقة لتطوير الأراضي وتحليلها.' },
                ]
            },
            pricing: {
                title: "مستويات الخدمة الجوية",
                subtitle: "باقات منتقاة لمجموعة من المتطلبات الفوتوغرافية والسينمائية.",
                plans: [
                    { name: "باقة الاستكشاف", price: "٢٬٠٠٠ ر.س.", period: "لكل جلسة", features: ["ساعة ونصف في الموقع", "٣٠ صورة ثابتة معدلة عالية الدقة", "رخصة تجارية كاملة"], isFeatured: false },
                    { name: "الباقة السينمائية", price: "٣٬٥٠٠ ر.س.", period: "لكل جلسة", features: ["حتى ٣ ساعات في الموقع", "فيلم معدل بدقة 6K لمدة دقيقتين", "موسيقى تصويرية وتصحيح ألوان مخصص", "دمج العلامة التجارية"], isFeatured: true },
                    { name: "الإنتاج الكامل", price: "٨٬٠٠٠ ر.س.", period: "يوم كامل", features: ["٨ ساعات في الموقع", "جميع أصول الصور والفيديو الخام", "فريق مخرج وطيار مخصص", "أولوية في مرحلة ما بعد الإنتاج"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "واجهات رقمية مخصصة",
                subtitle: "المقر الإلكتروني النهائي لعلامتك التجارية.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "هندسة الهوية الرقمية",
                paragraphs: [
                    "الموقع الإلكتروني ليس مجرد كتيب رقمي؛ إنه القطعة المعمارية المركزية لهوية علامتك التجارية. نقوم بتصميم وبناء واجهات رقمية مخصصة - تجارب عبر الإنترنت تتميز بالأداء والأناقة. نهجنا شمولي، يدمج استراتيجية العلامة التجارية، وتصميم تجربة المستخدم، والتكنولوجيا المتطورة.",
                    "كل سطر من التعليمات البرمجية، كل بكسل، وكل تفاعل مصمم عن قصد لخلق رحلة بديهية لا تُنسى لجمهورك. نبني من أجل الاستمرارية، مما يضمن أن وجودك الرقمي ليس فقط مذهلاً بصريًا، ولكنه آمن أيضًا وقابل للتطوير ومحسّن للاكتشاف. هذه هي الحرفية الرقمية من أعلى المستويات."
                ]
            },
            gallery: {
                title: "معرض العمارة الرقمية",
                subtitle: "لمحة عن فلسفتنا في التصميم النظيف والهادف والأنيق.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "كود نظيف على شاشة داكنة" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "مصمم يعمل على تصميم موقع ويب على جهاز كمبيوتر" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "موقع ويب معروض على جهاز كمبيوتر محمول مع رسوم بيانية تحليلية" }
                ]
            },
            features: {
                title: "أعمدة التميز الرقمي",
                subtitle: "تستند فلسفتنا في التطوير إلى أربعة مبادئ أساسية تضمن منتجًا نهائيًا متفوقًا.",
                items: [
                    { icon: 'LayoutTemplate', title: 'تصميم وتجربة مستخدم مخصصة', description: 'كل واجهة هي إبداع فريد، مصمم خصيصًا لسرد علامتك التجارية وعلم نفس المستخدم. لا قوالب أبدًا.' },
                    { icon: 'Smartphone', title: 'بنية متجاوبة سائلة', description: 'تجربة لا تشوبها شائبة على كل جهاز، من نقاط اللمس المحمولة إلى شاشات سطح المكتب الواسعة.' },
                    { icon: 'Rocket', title: 'أداء نخبوي', description: 'مصمم لأوقات تحميل أقل من ثانية. نحسن كل أصل لتجربة مستخدم فائقة السرعة.' },
                    { icon: 'ShieldCheck', title: 'أمان بدرجة الحصن', description: 'مبني على أساس من بروتوكولات الأمان الحديثة لحماية بياناتك وسمعتك.' },
                ]
            },
            pricing: {
                title: "الاستثمار في الإرث الرقمي",
                subtitle: "نقدم باقة واحدة وشاملة للعملاء الذين يطلبون وجودًا إلكترونيًا لا هوادة فيه.",
                plans: [
                    { name: "الافتتاحية", price: "٥٬٥٠٠ ر.س.", period: "لمرة واحدة", features: ["موقع مخصص من صفحة واحدة", "نموذج اتصال والتقاط العملاء المحتملين", "تصميم متجاوب سائل", "أسس تحسين محركات البحث الأساسية"], isFeatured: false },
                    { name: "الواجهة الرئيسية", price: "١٦٬٥٠٠ ر.س.", period: "لمرة واحدة", features: ["حتى ١٠ صفحات مخصصة", "تكامل نظام إدارة المحتوى بدون رأس", "منصة مدونة ومحتوى", "تحسين محركات البحث والتحليلات المتقدمة", "مدير مشروع مخصص"], isFeatured: true },
                    { name: "المشغل", price: "ابتداءً من ٣٥٬٠٠٠ ر.س.", period: "", features: ["مجموعة تجارة إلكترونية كاملة", "نظام إدارة المنتجات والمخزون", "تكامل دفع آمن", "بوابات حسابات العملاء", "تطوير ميزات مخصصة"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "الفن البصري التجاري",
                subtitle: "كل بكسل، متقن. كل صورة، بيان.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "فن الصورة الثابتة",
                paragraphs: [
                    "في عالم مشبع بالصور، نخلق أصولًا بصرية تجذب الانتباه. مصورونا هم أساتذة الضوء والتكوين، فنانون يصنعون السرديات في إطار واحد. نتجاوز التوثيق البسيط لإنتاج صور استراتيجية ومثيرة للمشاعر ومنفذة بدقة.",
                    "سواء كان ذلك التقاط الخطوط النظيفة لمشروع معماري جديد أو التفاصيل المعقدة لمنتج فاخر، فإن عمليتنا تتميز بالدقة والسعي الدؤوب لتحقيق الكمال. نستخدم أحدث المعدات وتقنيات ما بعد الإنتاج المتقدمة لتقديم منتج نهائي لا تشوبه شائبة."
                ]
            },
            gallery: {
                title: "محفظة من الدقة",
                subtitle: "مجموعة منتقاة من الأعمال التي تظهر إتقاننا الفني ورؤيتنا الفنية.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "كاميرا احترافية على طاولة" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "مصور يلتقط صورة في بيئة حضرية" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "صورة مناظر طبيعية مذهلة للجبال وبحيرة" }
                ]
            },
            features: {
                title: "تخصصاتنا الفوتوغرافية",
                subtitle: "خدمات فوتوغرافية متخصصة، تُنفذ كل منها بالتزام لا يتزعزع بالجودة ومواءمة العلامة التجارية.",
                items: [
                    { icon: 'Home', title: 'العمارة والتصميم الداخلي', description: 'التقط جوهر المساحة بصور متقنة التكوين وذات نطاق ديناميكي عالٍ.' },
                    { icon: 'Briefcase', title: 'الشركات والتحرير', description: 'أنشئ سردًا قويًا للعلامة التجارية بصور شخصية احترافية للمديرين التنفيذيين وتوثيق الأحداث.' },
                    { icon: 'ShoppingBag', title: 'المنتجات والحياة الصامتة', description: 'صور مضاءة ومنسقة بدقة للتجارة الإلكترونية والإعلانات والكتالوجات التي تثير الرغبة.' },
                    { icon: 'Utensils', title: 'فنون الطهي', description: 'حول إبداعاتك في الطهي إلى أعمال فنية بتصوير طعام مفصل ومغري.' },
                ]
            },
            pricing: {
                title: "مستويات التكليف",
                subtitle: "باقات منظمة للحصول على أصول بصرية متميزة.",
                plans: [
                    { name: "الصورة المصغرة", price: "١٬٦٠٠ ر.س.", period: "ساعة واحدة", features: ["تركيز على موضوع واحد", "١٥ أصلًا رقميًا معدلًا", "معرض معاينة عبر الإنترنت", "مثالي للصور الشخصية/المنتجات"], isFeatured: false },
                    { name: "الكتاب المصور", price: "٣٬٣٠٠ ر.س.", period: "٣ ساعات", features: ["جلسة متعددة المواضيع", "٤٠+ أصلًا رقميًا معدلًا", "رخصة استخدام تجاري", "مثالي للعقارات/العلامات التجارية"], isFeatured: true },
                    { name: "الحملة الإعلانية", price: "٦٬٦٠٠ ر.س.", period: "نصف يوم (٥ ساعات)", features: ["تغطية شاملة", "١٠٠+ أصل معدل", "إخراج فني وتنسيق", "أولوية في مرحلة ما بعد الإنتاج"], isFeatured: false },
                ]
            }
        }
    },
  },
  hi: {
    nav: {
      tour: "इमर्सिव अनुभव",
      drone: "एरियल सिनेमैटोग्राफी",
      website: "डिजिटल फ्लैगशिप",
      photography: "दृश्य कला",
      contact: "परामर्श",
      getStarted: "परियोजना शुरू करें",
    },
    hero: {
      title: "डिजिटल विरासत का निर्माण",
      subtitle: "जहाँ दृष्टि वर्चुअल परिशुद्धता से मिलती है",
      description: "हम अद्वितीय डिजिटल अनुभव तैयार करते हैं - इमर्सिव वर्चुअल रियलिटी से लेकर बीस्पोक ऑनलाइन फ्लैगशिप तक - जो आपके ब्रांड की उपस्थिति के भविष्य को परिभाषित करते हैं।",
    },
    services: {
        title: 'हमारे हस्ताक्षर अनुशासन',
        subtitle: 'अभिजात डिजिटल सेवाओं का एक क्यूरेटेड सुइट, प्रत्येक को आपके ब्रांड को पारंपरिक से ऊपर उठाने के लिए सावधानीपूर्वक परिशुद्धता के साथ निष्पादित किया जाता है।',
        list: [
            { id: 'tour', title: 'इमर्सिव अनुभव', description: 'अपने वातावरण के हाइपर-यथार्थवादी डिजिटल जुड़वाँ बनाएँ। हमारे इमर्सिव अनुभव मोहित करने और बदलने के लिए तैयार किए गए हैं।', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'एरियल सिनेमैटोग्राफी', description: 'सिनेमाई हवाई कहानी के साथ आकाश पर नियंत्रण रखें। हम गतिशील, उच्च-निष्ठा वाले दृश्य कैप्चर करते हैं जो एक पारलौकिक परिप्रेक्ष्य प्रदान करते हैं।', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'डिजिटल फ्लैगशिप', description: 'एक बीस्पोक डिजिटल फ्लैगशिप कमीशन करें। हमारी वेबसाइटें प्रदर्शन, लालित्य और स्थायी ब्रांड प्रभाव के लिए डिज़ाइन की गई हैं।', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'दृश्य कला', description: 'सम्मोहक दृश्य कला के माध्यम से अपने ब्रांड की कथा को परिभाषित करें। हम सावधानीपूर्वक तैयार की गई छवियां बनाते हैं जो गूंजती हैं और प्रेरित करती हैं।', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "एक निजी परामर्श निर्धारित करें",
      subtitle: "हमारे रणनीतिकारों के साथ अपने प्रोजेक्ट की दृष्टि पर चर्चा करें। हम आपकी महत्वाकांक्षाओं को एक मूर्त डिजिटल वास्तविकता में बदलने के लिए तैयार हैं। कृपया नीचे अपना विवरण प्रदान करें।",
      namePlaceholder: "पूरा नाम",
      emailPlaceholder: "व्यावसायिक ईमेल",
      messagePlaceholder: "परियोजना संक्षिप्त",
      submitButton: "पूछताछ भेजें",
      formSuccess: "आपकी पूछताछ प्राप्त हो गई है।",
      formError: "कृपया सुनिश्चित करें कि सभी फ़ील्ड सही ढंग से भरे गए हैं।",
    },
    footer: {
      rights: "सर्वाधिकार सुरक्षित।",
    },
    pages: {
        tour: {
            hero: {
                title: "इमर्सिव 360° अनुभव",
                subtitle: "भौतिक सीमाओं को पार करें। दुनिया को अंदर आमंत्रित करें।",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "वर्चुअल उपस्थिति की वास्तुकला",
                paragraphs: [
                    "हमारे 360° वर्चुअल टूर केवल स्कैन नहीं हैं; वे सावधानीपूर्वक इंजीनियर किए गए डिजिटल एसेट हैं। हम आश्चर्यजनक 8K रिज़ॉल्यूशन में आपके वातावरण के हाइपर-यथार्थवादी डिजिटल जुड़वाँ बनाते हैं, जो इतना आंत का अनुभव प्रदान करता है कि यह भौतिक उपस्थिति को टक्कर देता है। हर विवरण कैप्चर किया जाता है, हर बनावट प्रस्तुत की जाती है, जिससे एक सहज और सहज अन्वेषण बनता है।",
                    "यह दर्शकों की सहभागिता की नई सीमा है। संभावित ग्राहकों को दुनिया में कहीं से भी आपके स्थान पर रहने के लिए सशक्त बनाएं, एक गहरा संबंध बनाएं और निर्णय लेने में तेजी लाएं। विशेष रियल एस्टेट पोर्टफोलियो से लेकर वास्तुशिल्प चमत्कारों तक, हम आपके भौतिक स्थान को एक अविस्मरणीय वर्चुअल गंतव्य में बदलते हैं।"
                ]
            },
            gallery: {
                title: "एक क्यूरेटेड परिप्रेक्ष्य",
                subtitle: "उस स्पष्टता और गहराई को देखें जो हमारी इमर्सिव कृतियों को परिभाषित करती है।",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "सुरुचिपूर्ण फर्नीचर के साथ आधुनिक बैठक" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "एक उज्ज्वल कमरे में तिपाई पर 360-डिग्री कैमरा" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "द्वीप के साथ विशाल आधुनिक रसोईघर" }
                ]
            },
            features: {
                title: "हमारी कला की पहचान",
                subtitle: "तकनीकी उत्कृष्टता और कलात्मक दिशा के प्रति हमारी प्रतिबद्धता एक अद्वितीय अंतिम उत्पाद सुनिश्चित करती है।",
                items: [
                    { icon: 'Eye', title: 'हाइपर-यथार्थवादी विसर्जन', description: 'हमारे उद्योग-अग्रणी 8K पैनोरमिक इमेजिंग के साथ सहज, जीवंत नेविगेशन का अनुभव करें।' },
                    { icon: 'MousePointerClick', title: 'क्यूरेटेड इंटरैक्टिव पॉइंट्स', description: 'एक सम्मोहक, कथा-संचालित अनुभव बनाने के लिए समृद्ध मीडिया - वीडियो, टेक्स्ट और बाहरी लिंक - एम्बेड करें।' },
                    { icon: 'Smartphone', title: 'सार्वभौमिक पहुंच', description: 'डेस्कटॉप ब्राउज़र से लेकर हाई-एंड वीआर हेडसेट तक सभी प्लेटफार्मों पर त्रुटिहीन प्रदर्शन।' },
                    { icon: 'Share2', title: 'सरल एकीकरण', description: 'अपनी वेबसाइट पर एक सरल, सुरुचिपूर्ण एम्बेड या साझा करने योग्य लिंक के साथ अपने वर्चुअल अनुभव को तैनात करें।' },
                ]
            },
            pricing: {
                title: "वर्चुअलाइजेशन के लिए निवेश स्तर",
                subtitle: "अपने डिजिटल वातावरण के पैमाने और महत्वाकांक्षा के अनुरूप एक पैकेज चुनें।",
                plans: [
                    { name: "आवश्यक", price: "₹35,000", period: "प्रति स्थान", features: ["1,500 वर्ग फुट तक", "15 8K पैनोरमा पॉइंट्स", "मानक इंटरैक्टिव हॉटस्पॉट", "3 महीने की प्रीमियम होस्टिंग"], isFeatured: false },
                    { name: "पेशेवर", price: "₹65,000", period: "प्रति स्थान", features: ["4,000 वर्ग फुट तक", "35 8K पैनोरमा पॉइंट्स", "कस्टम ब्रांडेड यूआई/यूएक्स", "गूगल स्ट्रीट व्यू एकीकरण", "1 साल की प्रीमियम होस्टिंग"], isFeatured: true },
                    { name: "उद्यम", price: "बीस्पोक", period: "", features: ["असीमित पैमाना", "बहु-स्थान रोलआउट", "उन्नत उपयोगकर्ता विश्लेषिकी", "एपीआई और एसडीके एक्सेस", "समर्पित खाता प्रबंधक"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "एरियल सिनेमैटोग्राफी",
                subtitle: "महत्वाकांक्षियों के लिए आरक्षित एक परिप्रेक्ष्य।",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "हवाई क्षेत्र में महारत",
                paragraphs: [
                    "हम केवल ड्रोन संचालन से अधिक प्रदान करते हैं; हम हवाई कला प्रदान करते हैं। हमारे प्रमाणित सिनेमैटोग्राफर ड्रोन के एक अभिजात वर्ग के बेड़े की कमान संभालते हैं, जो स्थिरता के लिए इंजीनियर किए गए हैं और सिनेमा-ग्रेड कैमरों से लैस हैं। हम व्यापक दृश्यों और गतिशील कार्रवाई को एक परिशुद्धता के साथ कैप्चर करते हैं जो साधारण को असाधारण में बदल देता है।",
                    "चाहे वह लक्जरी संपत्ति प्रदर्शन हो जिसमें पैमाने और भव्यता की भावना की मांग हो, या जटिल औद्योगिक सर्वेक्षण जिसमें पूर्ण सटीकता की आवश्यकता हो, हमारे हवाई समाधान अद्वितीय डेटा और लुभावने दृश्य प्रदान करते हैं। हम आपकी दृष्टि के लिए आकाश को एक कैनवास में बदल देते हैं, एक शक्तिशाली और अद्वितीय कथा उपकरण प्रदान करते हैं।"
                ]
            },
            gallery: {
                title: "ऊपर से दृश्य",
                subtitle: "हमारे काम का एक संग्रह, जो एक ऊंचे परिप्रेक्ष्य की शक्ति को प्रदर्शित करता है।",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "एक नाटकीय तटीय परिदृश्य पर उड़ता हुआ ड्रोन" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "एक जंगल के माध्यम से एक घुमावदार सड़क का ऊपर से हवाई दृश्य" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "एक पेशेवर सिनेमैटोग्राफी ड्रोन का क्लोज-अप" }
                ]
            },
            features: {
                title: "हमारा हवाई शस्त्रागार",
                subtitle: "बेहतर हवाई खुफिया और दृश्य प्रदान करने के लिए अत्याधुनिक तकनीक और अनुभवी विशेषज्ञता का लाभ उठाना।",
                items: [
                    { icon: 'Film', title: '6K सिनेमैटिक कैप्चर', description: 'हमारे सिनेमा-ग्रेड ड्रोन कैमरा सिस्टम के साथ लुभावने, मक्खन-चिकनी हवाई फुटेज का उत्पादन करें।' },
                    { icon: 'Building', title: 'वास्तुकला और रियल एस्टेट', description: 'आसपास के परिदृश्य के साथ उनके संबंधों को कैप्चर करते हुए, अद्वितीय भव्यता के साथ संपत्तियों को प्रस्तुत करें।' },
                    { icon: 'Search', title: 'तकनीकी निरीक्षण', description: 'थर्मल और ज़ूम क्षमताओं के साथ महत्वपूर्ण बुनियादी ढांचे के सुरक्षित, उच्च-रिज़ॉल्यूशन निरीक्षण निष्पादित करें।' },
                    { icon: 'Map', title: 'परिशुद्धता मानचित्रण और सर्वेक्षण', description: 'भूमि विकास और विश्लेषण के लिए उच्च-सटीकता वाले 2डी ऑर्थोमोज़ेक और 3डी मॉडल उत्पन्न करें।' },
                ]
            },
            pricing: {
                title: "हवाई सेवा स्तर",
                subtitle: "फोटोग्राफिक और सिनेमैटोग्राफिक आवश्यकताओं की एक श्रृंखला के लिए क्यूरेटेड पैकेज।",
                plans: [
                    { name: "स्काउट पैकेज", price: "₹45,000", period: "प्रति सत्र", features: ["स्थान पर 1.5 घंटे", "30 संपादित उच्च-रिज़ॉल्यूशन स्टिल्स", "पूर्ण वाणिज्यिक लाइसेंस"], isFeatured: false },
                    { name: "सिनेमैटिक पैकेज", price: "₹75,000", period: "प्रति सत्र", features: ["स्थान पर 3 घंटे तक", "2 मिनट की संपादित 6K फिल्म", "कस्टम स्कोर और कलर ग्रेड", "ब्रांड एकीकरण"], isFeatured: true },
                    { name: "पूर्ण उत्पादन", price: "₹1,50,000", period: "पूरा दिन", features: ["स्थान पर 8 घंटे", "सभी रॉ फोटो और वीडियो एसेट्स", "समर्पित निदेशक और पायलट टीम", "प्राथमिकता पोस्ट-प्रोडक्शन"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "बीस्पोक डिजिटल फ्लैगशिप",
                subtitle: "आपके ब्रांड का निश्चित ऑनलाइन निवास।",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "डिजिटल पहचान का इंजीनियरिंग",
                paragraphs: [
                    "एक वेबसाइट केवल एक डिजिटल ब्रोशर नहीं है; यह आपके ब्रांड की पहचान का वास्तुशिल्प केंद्रबिंदु है। हम बीस्पोक डिजिटल फ्लैगशिप - ऑनलाइन अनुभव जो प्रदर्शनकारी और सुरुचिपूर्ण दोनों हैं - की वास्तुकला और निर्माण करते हैं। हमारा दृष्टिकोण समग्र है, जो ब्रांड रणनीति, उपयोगकर्ता अनुभव डिजाइन और अत्याधुनिक तकनीक को एकीकृत करता है।",
                    "कोड की हर पंक्ति, हर पिक्सेल, और हर बातचीत को आपके दर्शकों के लिए एक सहज और यादगार यात्रा बनाने के लिए जानबूझकर डिज़ाइन किया गया है। हम दीर्घायु के लिए निर्माण करते हैं, यह सुनिश्चित करते हुए कि आपकी डिजिटल उपस्थिति न केवल नेत्रहीन रूप से आकर्षक है, बल्कि सुरक्षित, स्केलेबल और खोज योग्यता के लिए अनुकूलित भी है। यह उच्चतम क्रम की डिजिटल शिल्प कौशल है।"
                ]
            },
            gallery: {
                title: "डिजिटल वास्तुकला का प्रदर्शन",
                subtitle: "स्वच्छ, उद्देश्यपूर्ण और सुरुचिपूर्ण डिजाइन के हमारे दर्शन की एक झलक।",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "एक अंधेरे स्क्रीन पर स्वच्छ कोड" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "एक कंप्यूटर पर वेबसाइट लेआउट पर काम कर रहा डिजाइनर" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "विश्लेषण ग्राफ़ के साथ एक लैपटॉप पर दिखाई गई एक वेबसाइट" }
                ]
            },
            features: {
                title: "डिजिटल उत्कृष्टता के स्तंभ",
                subtitle: "हमारा विकास दर्शन चार मुख्य सिद्धांतों पर स्थापित है जो एक बेहतर अंतिम उत्पाद सुनिश्चित करते हैं।",
                items: [
                    { icon: 'LayoutTemplate', title: 'बीस्पोक डिजाइन और यूएक्स', description: 'प्रत्येक इंटरफ़ेस एक अनूठी रचना है, जो आपके ब्रांड कथा और उपयोगकर्ता मनोविज्ञान के अनुरूप है। कभी भी टेम्पलेट नहीं।' },
                    { icon: 'Smartphone', title: 'द्रव-उत्तरदायी वास्तुकला', description: 'मोबाइल टचप्वाइंट से लेकर विशाल डेस्कटॉप डिस्प्ले तक हर डिवाइस पर एक त्रुटिहीन अनुभव।' },
                    { icon: 'Rocket', title: 'अभिजात वर्ग का प्रदर्शन', description: 'उप-सेकंड लोड समय के लिए इंजीनियर। हम एक चमकदार तेज उपयोगकर्ता अनुभव के लिए हर संपत्ति का अनुकूलन करते हैं।' },
                    { icon: 'ShieldCheck', title: 'किला-ग्रेड सुरक्षा', description: 'आपके डेटा और आपकी प्रतिष्ठा की रक्षा के लिए आधुनिक सुरक्षा प्रोटोकॉल की नींव पर बनाया गया है।' },
                ]
            },
            pricing: {
                title: "डिजिटल विरासत में निवेश",
                subtitle: "हम उन ग्राहकों के लिए एक विलक्षण, व्यापक पैकेज प्रदान करते हैं जो एक असम्बद्ध ऑनलाइन उपस्थिति की मांग करते हैं।",
                plans: [
                    { name: "द ओवरचर", price: "₹1,25,000", period: "एक बार", features: ["बीस्पोक सिंगल-पेज साइट", "संपर्क और लीड कैप्चर फॉर्म", "द्रव-उत्तरदायी डिजाइन", "कोर एसईओ नींव"], isFeatured: false },
                    { name: "द मार्की", price: "₹3,50,000", period: "एक बार", features: ["10 कस्टम पेज तक", "हेडलेस सीएमएस एकीकरण", "ब्लॉग और सामग्री प्लेटफार्म", "उन्नत एसईओ और विश्लेषिकी", "समर्पित परियोजना प्रबंधक"], isFeatured: true },
                    { name: "द अटेलियर", price: "₹7,50,000 से शुरू", period: "", features: ["पूर्ण ई-कॉमर्स सुइट", "उत्पाद और सूची प्रणाली", "सुरक्षित भुगतान एकीकरण", "ग्राहक खाता पोर्टल", "बीस्पोक फ़ीचर डेवलपमेंट"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "वाणिज्यिक दृश्य कला",
                subtitle: "हर पिक्सेल, सिद्ध। हर छवि, एक बयान।",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "स्थिर छवि की कला",
                paragraphs: [
                    "छवियों से संतृप्त दुनिया में, हम दृश्य संपत्ति बनाते हैं जो ध्यान आकर्षित करती है। हमारे फोटोग्राफर प्रकाश और रचना के स्वामी हैं, कलाकार जो एक ही फ्रेम में कथाएँ गढ़ते हैं। हम रणनीतिक, विचारोत्तेजक और सावधानीपूर्वक निष्पादित छवियों का उत्पादन करने के लिए सरल प्रलेखन से आगे बढ़ते हैं।",
                    "चाहे एक नई वास्तुशिल्प परियोजना की साफ लाइनों को कैप्चर करना हो या एक लक्जरी उत्पाद के जटिल विवरण, हमारी प्रक्रिया परिशुद्धता और पूर्णता की अथक खोज द्वारा परिभाषित की जाती है। हम एक अंतिम उत्पाद देने के लिए अत्याधुनिक उपकरणों और उन्नत पोस्ट-प्रोडक्शन तकनीकों का उपयोग करते हैं जो त्रुटिहीन से कम कुछ भी नहीं है।"
                ]
            },
            gallery: {
                title: "परिशुद्धता का एक पोर्टफोलियो",
                subtitle: "कार्यों का एक क्यूरेटेड चयन जो हमारी तकनीकी महारत और कलात्मक दृष्टि को प्रदर्शित करता है।",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "एक मेज पर पेशेवर कैमरा" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "एक शहरी सेटिंग में एक तस्वीर लेता हुआ फोटोग्राफर" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "पहाड़ों और एक झील की आश्चर्यजनक परिदृश्य तस्वीर" }
                ]
            },
            features: {
                title: "हमारे फोटोग्राफिक अनुशासन",
                subtitle: "विशेषज्ञ फोटोग्राफिक सेवाएं, प्रत्येक को गुणवत्ता और ब्रांड संरेखण के प्रति अटूट प्रतिबद्धता के साथ निष्पादित किया जाता है।",
                items: [
                    { icon: 'Home', title: 'वास्तुकला और आंतरिक', description: 'पूरी तरह से रचित, उच्च-गतिशील-रेंज इमेजरी के साथ एक स्थान का सार कैप्चर करें।' },
                    { icon: 'Briefcase', title: 'कॉर्पोरेट और संपादकीय', description: 'पेशेवर कार्यकारी चित्रों और घटना प्रलेखन के साथ एक शक्तिशाली ब्रांड कथा बनाएं।' },
                    { icon: 'ShoppingBag', title: 'उत्पाद और स्टिल लाइफ', description: 'ई-कॉमर्स, विज्ञापन और कैटलॉग के लिए सावधानीपूर्वक प्रकाशित और स्टाइल की गई इमेजरी जो इच्छा को बढ़ाती है।' },
                    { icon: 'Utensils', title: 'पाक कला', description: 'अपनी पाक कृतियों को मोहक रूप से विस्तृत खाद्य फोटोग्राफी के साथ कला के कार्यों में बदलें।' },
                ]
            },
            pricing: {
                title: "कमीशन स्तर",
                subtitle: "प्रीमियम दृश्य संपत्ति प्राप्त करने के लिए संरचित पैकेज।",
                plans: [
                    { name: "द विग्नेट", price: "₹35,000", period: "1 घंटा", features: ["एकल विषय फोकस", "15 संपादित डिजिटल एसेट्स", "ऑनलाइन प्रूफिंग गैलरी", "चित्र/उत्पादों के लिए आदर्श"], isFeatured: false },
                    { name: "द लुकबुक", price: "₹70,000", period: "3 घंटे", features: ["बहु-विषय सत्र", "40+ संपादित डिजिटल एसेट्स", "वाणिज्यिक उपयोग लाइसेंस", "संपत्ति/ब्रांड के लिए बिल्कुल सही"], isFeatured: true },
                    { name: "द कैंपेन", price: "₹1,40,000", period: "आधा दिन (5 घंटे)", features: ["व्यापक कवरेज", "100+ संपादित एसेट्स", "कला निर्देशन और स्टाइलिंग", "प्राथमिकता पोस्ट-प्रोडक्शन"], isFeatured: false },
                ]
            }
        }
    },
  },
};
