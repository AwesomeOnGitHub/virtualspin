import { Language, Translations } from '../types';

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      tour: "360°",
      drone: "Drone",
      website: "Website",
      photography: "Photography",
      contact: "Consultation",
      getStarted: "Get Started",
    },
    hero: {
      title: "Make Your Business Look Great",
      subtitle: "With Cool Digital Worlds",
      description: "We make amazing virtual tours, take great pictures, and build cool websites. This helps more people see and like your business.",
    },
    services: {
      title: "What We Do Best",
      subtitle: "We offer special digital services to make your brand stand out. We do each one very carefully.",
      learnMore: "See More",
      list: [
        { id: 'tour', title: "Cool 360° Tours", description: "We build a copy of your place online that feels real. People can look around and feel like they are really there.", features: ["Super Clear Pictures", "Clickable Info Spots", "Your Own Logo & Colors", "See Who Visited"] },
        { id: 'photography', title: "Great Photos for Business", description: "We tell your brand's story with beautiful pictures. Our photos help people feel connected to your business.", features: ["Photos of Buildings", "Pictures of Your Team", "Photos of Your Products", "Pictures from Events"] },
        { id: 'drone', title: "Awesome Drone Videos", description: "We use drones to get amazing videos from the sky. See your world from way up high.", features: ["Movie-Quality Videos", "Fast Action Drone Shots", "Make Detailed Maps", "Check on Buildings"] },
        { id: 'web', title: "Custom Website", description: "Get a special website made just for you. Our websites are fast, look good, and help your brand grow.", features: ["Easy-to-Use Design", "Sell Things Online", "Help People Find You", "We Keep it Working"] },
      ],
    },
    contact: {
      title: "Talk to Us",
      subtitle: "Have a cool idea? Fill out the form below and let's talk about it!",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Tell Us Your Idea",
      submitButton: "Send Message",
      formSuccess: "Got it! We'll talk to you soon.",
      formError: "Oops! Please fill in all the boxes.",
    },
    footer: {},
    pricing: {
      choosePlan: "Choose Plan",
      getQuote: "Get a Quote",
    },
    homePage: {
      portfolio: {}
    },
    pages: {
      tour: {
        hero: { title: "Walk Through Places on Your Screen", subtitle: "We build an online copy of your space so you can show it to anyone.", iframeSrc: "https://storage.net-fs.com/hosting/2727323/396/index.htm" },
        intro: { title: "A New Way to Show Your Place", paragraphs: ["We take special pictures of your place. We put them together so people can walk around inside it on their computer or phone.", "It helps people see how great your place is before they visit. More people will want to come!"] },
        gallery: {
          title: "Look at Our Cool Tours",
          subtitle: "See how real our online copies look and what you can do with them.",
          images: [
            { src: "", alt: "Interactive 360 virtual tour", iframeSrc: "https://storage.net-fs.com/hosting/2727323/454/" },
            { src: "", alt: "Virtual staging tour example", iframeSrc: "https://storage.net-fs.com/hosting/2727323/446/" },
            { src: "", alt: "Interactive apartment tour", iframeSrc: "https://storage.net-fs.com/hosting/2727323/396/index.htm" }
          ]
        },
        features: {
          title: "Features That Immerse You",
          subtitle: "Our virtual tours are packed with features to create an engaging experience.",
          items: [
            { icon: "Eye", title: "High-Definition Visuals", description: "Crystal-clear imagery that makes you feel like you're really there." },
            { icon: "MousePointerClick", title: "Interactive Hotspots", description: "Click on objects to get more information, watch videos, or see photos." },
            { icon: "Smartphone", title: "Mobile & VR Ready", description: "Accessible on any device, from desktops to smartphones and VR headsets." },
            { icon: "Share2", title: "Easy to Share", description: "Embed your tour on your website or share it on social media with a simple link." },
          ]
        },
        pricing: {
          title: "Our 360° Tour Capabilities",
          subtitle: "We offer a wide of options to build the perfect interactive experience. Contact us for a personalized quote based on your needs.",
          featureGroups: [
            {
              title: "Google Maps Integration",
              features: [
                "360° Images Inside and Outside",
                "Official upload to Google Maps",
                "Increase clicks and views on your profile",
                "Improve your ranking on Google and Google Maps",
                "Attract more customers directly from search"
              ]
            },
            {
              title: "Custom Virtual Tours",
              features: [
                "Unlimited high-resolution recordings",
                "Embeddable video link for websites and social media",
                "Interactive hotspots with information, images, or videos",
                "Custom branding with your logo and colors",
                "Detailed analytics on visitor engagement"
              ]
            },
            {
              title: "Premium Features & Add-ons",
              features: [
                "Fully customized tour interface with header and music",
                "Interactive floorplans and 3D 'dollhouse' model views",
                "Integration of 3D art and virtual staging",
                "Social media optimization and sharing tools",
                "Aerial drone recordings for stunning exterior views",
                "Support for multiple locations in a single tour"
              ]
            }
          ]
        }
      },
      drone: {
        hero: { title: "See the World from Above", subtitle: "Stunning aerial cinematography and photography for your projects.", imageUrl: "/img/drone/bella_vista.jpg" },
        intro: { title: "A Higher Perspective", paragraphs: ["Our state-of-the-art drones capture breathtaking views from the sky. We provide high-resolution video and photos for real estate, events, and inspections.", "From cinematic FPV shots to detailed mapping, we bring a unique and powerful perspective to your story."] },
        gallery: {
          title: "Our Aerial Work", subtitle: "Explore a collection of our drone photography and videography projects.",
          images: [
            { src: "/img/drone/nile_hotel.jpg", alt: "Drone view of a winding road in a forest" },
            { src: "/img/drone/flores.jpg", alt: "Drone over a city at sunset" },
            { src: "/img/drone/guatape.jpg", alt: "Drone view of Guatape" }
          ]
        },
        features: {
          title: "Advanced Drone Capabilities", subtitle: "We use the latest technology to deliver exceptional results.",
          items: [
            { icon: "Film", title: "4K Cinematic Video", description: "Capture your subject in stunning, movie-quality high resolution." },
            { icon: "Building", title: "Inspection & Surveying", description: "Safely and efficiently inspect buildings, roofs, and infrastructure." },
            { icon: "Map", title: "2D/3D Mapping", description: "Create detailed orthomosaic maps and 3D models for analysis and planning." },
            { icon: "Rocket", title: "FPV Fly-throughs", description: "Dynamic and immersive first-person-view tours of interiors and exteriors." }
          ]
        },
        pricing: {
          title: "Aerial Photography & Videography Services",
          subtitle: "Capture breathtaking perspectives with our advanced drone technology. We tailor each project to your specific vision. Contact us for a quote.",
          featureGroups: [
            {
              title: "Aerial Photography",
              features: [
                "Ultra high-resolution (4K+) images",
                "Professionally edited and retouched photos",
                "Interactive 360° aerial panoramas",
                "Shots from unique and unreachable perspectives",
                "Full usage rights for web and social media",
                "Optional automatic upload to Google Maps"
              ]
            },
            {
              title: "Cinematic Aerial Video",
              features: [
                "Professionally edited video shorts (e.g., 1 minute)",
                "Social media ready video links",
                "Inclusion of both edited, retouched, and raw footage",
                "Creation of a virtual tour using interactive 360° images",
                "Personal consultation and project planning"
              ]
            },
            {
              title: "Advanced & Commercial Drone Operations",
              features: [
                "Unlimited recordings for large-scale projects",
                "Multi-location shoots",
                "Custom branding and video effects",
                "Social media optimization packages",
                "Creation of premium virtual tours from drone imagery",
                "Comprehensive footage delivery including all raw files"
              ]
            }
          ]
        }
      },
      web: {
        hero: { title: "Your Digital Storefront", subtitle: "Beautiful, fast, and effective websites that grow your business.", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
        intro: { title: "Built For Performance", paragraphs: ["A great website is more than an online brochure; it's a powerful tool for growth. We design and build websites that are not only visually stunning but also fast, secure, and optimized to convert visitors into customers.", "Our process is collaborative. We work closely with you to understand your brand and goals, ensuring the final product is a perfect digital reflection of your business."] },
        gallery: {
          title: "Our Web Design Portfolio", subtitle: "See how we've helped businesses like yours succeed online.",
          images: [
            { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", alt: "Web design team collaborating" },
            { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", alt: "Website on multiple devices" },
            { src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop", alt: "Code on a screen" }
          ]
        },
        features: {
          title: "What's Included", subtitle: "Every website we build comes with a core set of powerful features.",
          items: [
            { icon: "LayoutTemplate", title: "Custom Design", description: "A unique design that reflects your brand identity and engages your audience." },
            { icon: "Smartphone", title: "Mobile Responsive", description: "Flawless performance on all devices, from desktops to smartphones." },
            { icon: "Rocket", title: "High-Speed Performance", description: "Optimized for fast loading times to improve user experience and SEO." },
            { icon: "Search", title: "SEO Foundation", description: "Built with search engine best practices to help you rank higher on Google." }
          ]
        },
        pricing: {
          title: "Custom Website Development",
          subtitle: "We build beautiful, high-performance websites tailored to your business goals. Let's discuss your project and create a custom quote.",
          featureGroups: [
            {
              title: "Foundation & Design",
              features: [
                "Custom, mobile-responsive design",
                "Single-page or multi-page applications",
                "Fundamental SEO optimization",
                "Personalized Call-to-Action (CTA) strategy",
                "Social media integration and promotion tools",
                "Custom QR code generation for marketing"
              ]
            },
            {
              title: "Business & E-commerce Features",
              features: [
                "Advanced SEO and performance tuning",
                "Content Management System (CMS) integration",
                "Contact forms and lead generation tools",
                "Multi-language support and translation",
                "Video embedding and rich media support",
                "Branding and web presence consultation"
              ]
            },
            {
              title: "Enterprise & Advanced Solutions",
              features: [
                "Custom API and third-party service integrations",
                "Advanced analytics and conversion tracking setup",
                "Enterprise-grade security and compliance features",
                "Dedicated project management and support",
                "Personalized team onboarding and training",
                "Ongoing collaborative development and maintenance plans"
              ]
            }
          ]
        }
      },
      photography: {
        hero: { title: "Capture Your Best Moments", subtitle: "Professional photography that tells your brand's story.", imageUrl: "/img/photo/templom.jpg" },
        intro: { title: "Images That Speak", paragraphs: ["High-quality photography is crucial for making a strong first impression. We specialize in creating stunning visuals that capture the essence of your brand, products, and people.", "Whether it's for your website, social media, or marketing materials, our images will make you stand out."] },
        gallery: {
          title: "Featured Photography", subtitle: "A selection of our work across various industries.",
          images: [
            { src: "/img/photo/coffee.jpg", alt: "Artfully arranged coffee beans in a cup" },
            { src: "/img/photo/templom2.jpg", alt: "Architectural detail of a temple ceiling" },
            { src: "/img/photo/ceiling.jpg", alt: "Modern and clean office interior" }
          ]
        },
        features: {
          title: "Our Photography Services", subtitle: "Tailored photoshoots to meet your specific needs.",
          items: [
            { icon: "Building", title: "Architectural", description: "Showcasing commercial and residential properties with stunning photos." },
            { icon: "Briefcase", title: "Corporate Headshots", description: "Professional portraits of your team for websites and profiles." },
            { icon: "ShoppingBag", title: "Product Photography", description: "Clean, crisp images for your e-commerce store and catalogs." },
            { icon: "Utensils", title: "Food & Beverage", description: "Delicious-looking photos that make your culinary creations irresistible." }
          ]
        },
        pricing: {
          title: "Professional Photography Services",
          subtitle: "From corporate headshots to stunning product visuals, we capture your brand's essence. Contact us for a session tailored to your needs.",
          featureGroups: [
            {
              title: "Tailored Photography Sessions",
              features: [
                "Flexible session durations, from short shoots to full-day events",
                "On-location shooting at your place of business or chosen venue",
                "Specialization in product, portrait, and corporate event photography",
                "Consultation to define the visual style and shot list"
              ]
            },
            {
              title: "Professional Post-Production",
              features: [
                "Professional editing and basic retouching on all selected photos",
                "Advanced and detailed retouching for premium shots",
                "Color correction and grading to match brand aesthetic",
                "High-end skin and product blemish removal"
              ]
            },
            {
              title: "Delivery & Digital Assets",
              features: [
                "Delivery of a set number of high-resolution edited images",
                "Secure online gallery for viewing, sharing, and downloading",
                "Option to receive all raw, unedited footage from the session",
                "Images optimized for web, social media, and print use",
                "Full usage rights for marketing and promotional materials"
              ]
            }
          ]
        }
      }
    },
    // FIX: Add checkoutPage translations
    checkoutPage: {
      orderSuccess: "Order placed successfully! We'll be in touch soon.",
      orderError: "Please fill in your name and email to place the order.",
      notFoundTitle: "Plan Not Found",
      notFoundText: "We couldn't find the plan you're looking for. It might have been moved or is no longer available.",
      notFoundButton: "Back to Home",
      backLink: "Back to",
      contactTitle: "Your Information",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      notesLabel: "Additional Notes (Optional)",
      notesPlaceholder: "Any special requests or details...",
      placeOrderButton: "Place Your Order",
      orderSummaryTitle: "Order Summary",
      productLabel: "Plan",
      serviceLabel: "Service",
      totalLabel: "Total",
      gettingTitle: "What You're Getting",
    },
    // FIX: Add generalCheckoutPage translations
    generalCheckoutPage: {
      title: "Choose a Service to Get Started",
      explore: "Explore",
      detailsTitle: "Customized For You",
      detailsText: "Each of our services is tailored to meet your unique needs. Select a service to explore detailed plans and features designed to elevate your brand's digital presence. If you have any questions, our team is ready to provide a personalized consultation.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      tour: "360°",
      drone: "Drone",
      website: "Site Web",
      photography: "Photographie",
      contact: "Consultation",
      getStarted: "Commencer",
    },
    hero: {
      title: "Embellissez Votre Entreprise",
      subtitle: "Avec des Mondes Numériques Cools",
      description: "Nous créons des visites virtuelles incroyables, prenons de superbes photos et construisons des sites web cools. Cela aide plus de gens à voir et à aimer votre entreprise.",
    },
    services: {
      title: "Ce que nous faisons de mieux",
      subtitle: "Nous offrons des services numériques spéciaux pour que votre marque se démarque. Nous faisons chacun avec beaucoup de soin.",
      learnMore: "Voir Plus",
      list: [
        { id: 'tour', title: "Tours 360° Cools", description: "Nous construisons une copie de votre lieu en ligne qui semble réelle. Les gens peuvent regarder autour et se sentir comme s'ils y étaient vraiment.", features: ["Photos Super Claires", "Points d'Information Cliquables", "Votre Propre Logo & Couleurs", "Voir Qui a Visité"] },
        { id: 'photography', title: "Superbes Photos pour Entreprise", description: "Nous racontons l'histoire de votre marque avec de belles images. Nos photos aident les gens à se sentir connectés à votre entreprise.", features: ["Photos de Bâtiments", "Photos de Votre Équipe", "Photos de Vos Produits", "Photos d'Événements"] },
        { id: 'drone', title: "Vidéos de Drone Impressionnantes", description: "Nous utilisons des drones pour obtenir des vidéos incroyables du ciel. Voyez votre monde de très haut.", features: ["Vidéos de Qualité Cinéma", "Prises de Vue d'Action Rapides par Drone", "Créer des Cartes Détaillées", "Vérifier les Bâtiments"] },
        { id: 'web', title: "Site Web Personnalisé", description: "Obtenez un site web spécial fait juste pour vous. Nos sites sont rapides, beaux et aident votre marque à se développer.", features: ["Conception Facile à Utiliser", "Vendre des Choses en Ligne", "Aider les Gens à Vous Trouver", "Nous le Maintenons en état de Marche"] },
      ],
    },
    contact: {
      title: "Parlez-nous",
      subtitle: "Vous avez une idée cool ? Remplissez le formulaire ci-dessous et parlons-en !",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Votre E-mail",
      messagePlaceholder: "Racontez-nous Votre Idée",
      submitButton: "Envoyer le Message",
      formSuccess: "Reçu ! Nous vous parlerons bientôt.",
      formError: "Oups ! Veuillez remplir toutes les cases.",
    },
    footer: {},
    pricing: {
      choosePlan: "Choisir le Forfait",
      getQuote: "Obtenir un Devis",
    },
    homePage: {
      portfolio: {}
    },
    pages: {
      tour: {
        hero: { title: "Visitez des Lieux sur Votre Écran", subtitle: "Nous construisons une copie en ligne de votre espace pour que vous puissiez le montrer à tout le monde.", iframeSrc: "https://storage.net-fs.com/hosting/2727323/396/index.htm" },
        intro: { title: "Une Nouvelle Façon de Montrer Votre Lieu", paragraphs: ["Nous prenons des photos spéciales de votre lieu. Nous les assemblons pour que les gens puissent se promener à l'intérieur sur leur ordinateur ou leur téléphone.", "Cela aide les gens à voir à quel point votre lieu est génial avant de le visiter. Plus de gens voudront venir !"] },
        gallery: {
          title: "Regardez Nos Tours Cools",
          subtitle: "Voyez à quel point nos copies en ligne sont réelles et ce que vous pouvez en faire.",
          images: [
            { src: "", alt: "Visite virtuelle interactive à 360°", iframeSrc: "https://storage.net-fs.com/hosting/2727323/454/" },
            { src: "", alt: "Exemple de visite avec mise en scène virtuelle", iframeSrc: "https://storage.net-fs.com/hosting/2727323/446/" },
            { src: "", alt: "Visite interactive d'un appartement", iframeSrc: "https://storage.net-fs.com/hosting/2727323/396/index.htm" }
          ]
        },
        features: {
          title: "Fonctionnalités Qui Vous Immergent",
          subtitle: "Nos visites virtuelles sont dotées de fonctionnalités pour créer une expérience engageante.",
          items: [
            { icon: "Eye", title: "Visuels Haute Définition", description: "Des images d'une clarté cristalline qui vous donnent l'impression d'y être vraiment." },
            { icon: "MousePointerClick", title: "Points Interactifs", description: "Cliquez sur des objets pour obtenir plus d'informations, regarder des vidéos ou voir des photos." },
            { icon: "Smartphone", title: "Prêt pour Mobile & VR", description: "Accessible sur n'importe quel appareil, des ordinateurs de bureau aux smartphones et casques VR." },
            { icon: "Share2", title: "Facile à Partager", description: "Intégrez votre visite sur votre site web ou partagez-la sur les réseaux sociaux avec un simple lien." },
          ]
        },
        pricing: {
          title: "Nos Capacités de Visite 360°",
          subtitle: "Nous offrons une large gamme d'options pour construire l'expérience interactive parfaite. Contactez-nous pour un devis personnalisé.",
          featureGroups: [
            {
              title: "Intégration Google Maps",
              features: [
                "Images 360° intérieures et extérieures",
                "Téléchargement officiel sur Google Maps",
                "Augmentez les clics et les vues sur votre profil",
                "Améliorez votre classement sur Google et Google Maps",
                "Attirez plus de clients directement depuis la recherche"
              ]
            },
            {
              title: "Visites Virtuelles Personnalisées",
              features: [
                "Enregistrements illimités en haute résolution",
                "Lien vidéo intégrable pour sites web et réseaux sociaux",
                "Points interactifs avec informations, images ou vidéos",
                "Marque personnalisée avec votre logo et vos couleurs",
                "Analyses détaillées sur l'engagement des visiteurs"
              ]
            },
            {
              title: "Fonctionnalités Premium & Add-ons",
              features: [
                "Interface de visite entièrement personnalisée avec en-tête et musique",
                "Plans d'étage interactifs et vues de modèle 3D 'maison de poupée'",
                "Intégration d'art 3D et de mise en scène virtuelle",
                "Outils d'optimisation et de partage sur les réseaux sociaux",
                "Enregistrements par drone pour des vues extérieures époustouflantes",
                "Prise en charge de plusieurs emplacements dans une seule visite"
              ]
            }
          ]
        }
      },
      drone: {
        hero: { title: "Voyez le Monde d'en Haut", subtitle: "Cinématographie et photographie aériennes époustouflantes pour vos projets.", imageUrl: "/img/drone/bella_vista.jpg" },
        intro: { title: "Une Perspective Plus Élevée", paragraphs: ["Nos drones de pointe capturent des vues à couper le souffle depuis le ciel. Nous fournissons des vidéos et des photos haute résolution pour l'immobilier, les événements et les inspections.", "Des prises de vue cinématiques FPV à la cartographie détaillée, nous apportons une perspective unique et puissante à votre histoire."] },
        gallery: {
          title: "Notre Travail Aérien", subtitle: "Explorez une collection de nos projets de photographie et de vidéographie par drone.",
          images: [
            { src: "/img/drone/nile_hotel.jpg", alt: "Vue de drone d'une route sinueuse dans une forêt" },
            { src: "/img/drone/flores.jpg", alt: "Drone au-dessus d'une ville au coucher du soleil" },
            { src: "/img/drone/guatape.jpg", alt: "Vue de drone de Guatape" }
          ]
        },
        features: {
          title: "Capacités Avancées de Drone", subtitle: "Nous utilisons les dernières technologies pour fournir des résultats exceptionnels.",
          items: [
            { icon: "Film", title: "Vidéo Cinématographique 4K", description: "Capturez votre sujet en haute résolution époustouflante, digne d'un film." },
            { icon: "Building", title: "Inspection & Arpentage", description: "Inspectez les bâtiments, les toits et les infrastructures de manière sûre et efficace." },
            { icon: "Map", title: "Cartographie 2D/3D", description: "Créez des cartes orthomosaïques détaillées et des modèles 3D pour l'analyse et la planification." },
            { icon: "Rocket", title: "Survols FPV", description: "Visites dynamiques et immersives en vue à la première personne des intérieurs et extérieurs." }
          ]
        },
        pricing: {
          title: "Services de Photographie & Vidéographie Aérienne",
          subtitle: "Capturez des perspectives à couper le souffle avec notre technologie de drone avancée. Nous adaptons chaque projet à votre vision spécifique. Contactez-nous pour un devis.",
          featureGroups: [
            {
              title: "Photographie Aérienne",
              features: [
                "Images ultra haute résolution (4K+)",
                "Photos éditées et retouchées par des professionnels",
                "Panoramas aériens interactifs à 360°",
                "Prises de vue depuis des perspectives uniques et inaccessibles",
                "Droits d'utilisation complets pour le web et les réseaux sociaux",
                "Téléchargement automatique optionnel sur Google Maps"
              ]
            },
            {
              title: "Vidéo Aérienne Cinématographique",
              features: [
                "Courts métrages vidéo édités professionnellement (par ex. 1 minute)",
                "Liens vidéo prêts pour les réseaux sociaux",
                "Inclusion des séquences éditées, retouchées et brutes",
                "Création d'une visite virtuelle à l'aide d'images interactives à 360°",
                "Consultation personnelle et planification de projet"
              ]
            },
            {
              title: "Opérations de Drones Avancées & Commerciales",
              features: [
                "Enregistrements illimités pour les projets de grande envergure",
                "Prises de vue sur plusieurs sites",
                "Marque personnalisée et effets vidéo",
                "Forfaits d'optimisation des réseaux sociaux",
                "Création de visites virtuelles premium à partir d'images de drone",
                "Livraison complète des séquences, y compris tous les fichiers bruts"
              ]
            }
          ]
        }
      },
      web: {
        hero: { title: "Votre Vitrine Numérique", subtitle: "Des sites web beaux, rapides et efficaces qui développent votre entreprise.", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
        intro: { title: "Conçu pour la Performance", paragraphs: ["Un excellent site web est plus qu'une simple brochure en ligne ; c'est un puissant outil de croissance. Nous concevons et construisons des sites web qui sont non seulement visuellement époustouflants, mais aussi rapides, sécurisés et optimisés pour convertir les visiteurs en clients.", "Notre processus est collaboratif. Nous travaillons en étroite collaboration avec vous pour comprendre votre marque et vos objectifs, garantissant que le produit final est un reflet numérique parfait de votre entreprise."] },
        gallery: {
          title: "Notre Portfolio de Conception Web", subtitle: "Découvrez comment nous avons aidé des entreprises comme la vôtre à réussir en ligne.",
          images: [
            { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", alt: "Équipe de conception web en collaboration" },
            { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", alt: "Site web sur plusieurs appareils" },
            { src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop", alt: "Code sur un écran" }
          ]
        },
        features: {
          title: "Ce qui est Inclus", subtitle: "Chaque site web que nous construisons est doté d'un ensemble de fonctionnalités puissantes.",
          items: [
            { icon: "LayoutTemplate", title: "Conception Personnalisée", description: "Un design unique qui reflète votre identité de marque et engage votre public." },
            { icon: "Smartphone", title: "Adapté aux Mobiles", description: "Performances impeccables sur tous les appareils, des ordinateurs de bureau aux smartphones." },
            { icon: "Rocket", title: "Performance à Haute Vitesse", description: "Optimisé pour des temps de chargement rapides afin d'améliorer l'expérience utilisateur et le SEO." },
            { icon: "Search", title: "Fondation SEO", description: "Construit avec les meilleures pratiques des moteurs de recherche pour vous aider à mieux vous classer sur Google." }
          ]
        },
        pricing: {
          title: "Développement de Sites Web Personnalisés",
          subtitle: "Nous construisons de magnifiques sites web performants, adaptés à vos objectifs commerciaux. Discutons de votre projet et créons un devis personnalisé.",
          featureGroups: [
            {
              title: "Fondation & Conception",
              features: [
                "Conception personnalisée et adaptée aux mobiles",
                "Applications d'une seule page ou multi-pages",
                "Optimisation SEO fondamentale",
                "Stratégie d'Appel à l'Action (CTA) personnalisée",
                "Intégration des médias sociaux et outils de promotion",
                "Génération de code QR personnalisé pour le marketing"
              ]
            },
            {
              title: "Fonctionnalités Commerciales & E-commerce",
              features: [
                "SEO avancé et réglage des performances",
                "Intégration du Système de Gestion de Contenu (CMS)",
                "Formulaires de contact et outils de génération de leads",
                "Prise en charge multi-langues et traduction",
                "Intégration vidéo et prise en charge des médias riches",
                "Consultation en image de marque et présence sur le web"
              ]
            },
            {
              title: "Solutions d'Entreprise & Avancées",
              features: [
                "Intégrations d'API personnalisées et de services tiers",
                "Configuration avancée des analyses et du suivi des conversions",
                "Fonctionnalités de sécurité et de conformité de niveau entreprise",
                "Gestion de projet et support dédiés",
                "Intégration et formation personnalisées de l'équipe",
                "Plans de développement et de maintenance collaboratifs continus"
              ]
            }
          ]
        }
      },
      photography: {
        hero: { title: "Capturez Vos Meilleurs Moments", subtitle: "Photographie professionnelle qui raconte l'histoire de votre marque.", imageUrl: "/img/photo/templom.jpg" },
        intro: { title: "Des Images Qui Parlent", paragraphs: ["La photographie de haute qualité est cruciale pour faire une forte première impression. Nous nous spécialisons dans la création de visuels époustouflants qui capturent l'essence de votre marque, de vos produits et de vos collaborateurs.", "Que ce soit pour votre site web, vos réseaux sociaux ou vos supports marketing, nos images vous démarqueront."] },
        gallery: {
          title: "Photographie en Vedette", subtitle: "Une sélection de notre travail dans divers secteurs.",
          images: [
            { src: "/img/photo/coffee.jpg", alt: "Grains de café artistiquement disposés dans une tasse" },
            { src: "/img/photo/templom2.jpg", alt: "Détail architectural du plafond d'un temple" },
            { src: "/img/photo/ceiling.jpg", alt: "Intérieur de bureau moderne et épuré" }
          ]
        },
        features: {
          title: "Nos Services de Photographie", subtitle: "Séances photo sur mesure pour répondre à vos besoins spécifiques.",
          items: [
            { icon: "Building", title: "Architecturale", description: "Mise en valeur de propriétés commerciales et résidentielles avec de superbes photos." },
            { icon: "Briefcase", title: "Portraits d'Entreprise", description: "Portraits professionnels de votre équipe pour sites web et profils." },
            { icon: "ShoppingBag", title: "Photographie de Produit", description: "Images nettes et claires pour votre boutique en ligne et vos catalogues." },
            { icon: "Utensils", title: "Alimentation & Boissons", description: "Des photos appétissantes qui rendent vos créations culinaires irrésistibles." }
          ]
        },
        pricing: {
          title: "Services de Photographie Professionnelle",
          subtitle: "Des portraits d'entreprise aux visuels de produits époustouflants, nous capturons l'essence de votre marque. Contactez-nous pour une séance adaptée à vos besoins.",
          featureGroups: [
            {
              title: "Séances de Photographie sur Mesure",
              features: [
                "Durées de séance flexibles, des courtes prises de vue aux événements d'une journée complète",
                "Prise de vue sur place, dans vos locaux ou le lieu de votre choix",
                "Spécialisation en photographie de produits, de portraits et d'événements d'entreprise",
                "Consultation pour définir le style visuel et la liste des prises de vue"
              ]
            },
            {
              title: "Post-Production Professionnelle",
              features: [
                "Édition professionnelle et retouche de base sur toutes les photos sélectionnées",
                "Retouche avancée et détaillée pour les clichés premium",
                "Correction et étalonnage des couleurs pour correspondre à l'esthétique de la marque",
                "Suppression haut de gamme des imperfections de la peau et des produits"
              ]
            },
            {
              title: "Livraison & Actifs Numériques",
              features: [
                "Livraison d'un nombre défini d'images éditées en haute résolution",
                "Galerie en ligne sécurisée pour visualiser, partager et télécharger",
                "Option de recevoir toutes les séquences brutes et non éditées de la session",
                "Images optimisées pour le web, les réseaux sociaux et l'impression",
                "Droits d'utilisation complets pour le matériel de marketing et de promotion"
              ]
            }
          ]
        }
      }
    },
    // FIX: Add checkoutPage translations
    checkoutPage: {
      orderSuccess: "Commande passée avec succès ! Nous vous contacterons bientôt.",
      orderError: "Veuillez indiquer votre nom et votre e-mail pour passer la commande.",
      notFoundTitle: "Forfait non trouvé",
      notFoundText: "Nous n'avons pas pu trouver le forfait que vous recherchez. Il a peut-être été déplacé ou n'est plus disponible.",
      notFoundButton: "Retour à l'accueil",
      backLink: "Retour à",
      contactTitle: "Vos Informations",
      nameLabel: "Nom Complet",
      emailLabel: "Adresse E-mail",
      notesLabel: "Notes supplémentaires (Facultatif)",
      notesPlaceholder: "Toute demande spéciale ou détail...",
      placeOrderButton: "Passer Votre Commande",
      orderSummaryTitle: "Résumé de la Commande",
      productLabel: "Forfait",
      serviceLabel: "Service",
      totalLabel: "Total",
      gettingTitle: "Ce que Vous Obtenez",
    },
    // FIX: Add generalCheckoutPage translations
    generalCheckoutPage: {
      title: "Choisissez un service pour commencer",
      explore: "Explorer",
      detailsTitle: "Personnalisé pour vous",
      detailsText: "Chacun de nos services est conçu pour répondre à vos besoins uniques. Sélectionnez un service pour explorer les forfaits et fonctionnalités détaillés conçus pour rehausser la présence numérique de votre marque. Si vous avez des questions, notre équipe est prête à vous fournir une consultation personnalisée.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      tour: "360°",
      drone: "Drohne",
      website: "Webseite",
      photography: "Fotografie",
      contact: "Beratung",
      getStarted: "Loslegen",
    },
    hero: {
      title: "Lassen Sie Ihr Unternehmen gut aussehen",
      subtitle: "Mit coolen digitalen Welten",
      description: "Wir erstellen erstaunliche virtuelle Touren, machen großartige Bilder und bauen coole Webseiten. Das hilft mehr Menschen, Ihr Unternehmen zu sehen und zu mögen.",
    },
    services: {
      title: "Was wir am besten können",
      subtitle: "Wir bieten spezielle digitale Dienstleistungen an, um Ihre Marke hervorzuheben. Wir führen jede einzelne sehr sorgfältig aus.",
      learnMore: "Mehr sehen",
      list: [
        { id: 'tour', title: "Coole 360°-Touren", description: "Wir erstellen eine Online-Kopie Ihres Ortes, die sich echt anfühlt. Die Leute können sich umsehen und fühlen, als wären sie wirklich da.", features: ["Superklare Bilder", "Klickbare Info-Punkte", "Ihr eigenes Logo & Farben", "Sehen, wer besucht hat"] },
        { id: 'photography', title: "Großartige Fotos für Unternehmen", description: "Wir erzählen die Geschichte Ihrer Marke mit wunderschönen Bildern. Unsere Fotos helfen den Menschen, sich mit Ihrem Unternehmen verbunden zu fühlen.", features: ["Gebäudefotos", "Bilder Ihres Teams", "Fotos Ihrer Produkte", "Bilder von Veranstaltungen"] },
        { id: 'drone', title: "Fantastische Drohnenvideos", description: "Wir verwenden Drohnen, um erstaunliche Videos vom Himmel zu bekommen. Sehen Sie Ihre Welt von hoch oben.", features: ["Videos in Filmqualität", "Schnelle Action-Drohnenaufnahmen", "Detaillierte Karten erstellen", "Gebäude überprüfen"] },
        { id: 'web', title: "Individuelle Webseite", description: "Holen Sie sich eine spezielle Webseite, die nur für Sie gemacht ist. Unsere Webseiten sind schnell, sehen gut aus und helfen Ihrer Marke zu wachsen.", features: ["Benutzerfreundliches Design", "Dinge online verkaufen", "Leuten helfen, Sie zu finden", "Wir halten sie in Schuss"] },
      ],
    },
    contact: {
      title: "Sprechen Sie mit uns",
      subtitle: "Haben Sie eine coole Idee? Füllen Sie das Formular unten aus und lassen Sie uns darüber sprechen!",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Erzählen Sie uns von Ihrer Idee",
      submitButton: "Nachricht senden",
      formSuccess: "Verstanden! Wir werden uns bald bei Ihnen melden.",
      formError: "Hoppla! Bitte füllen Sie alle Felder aus.",
    },
    footer: {},
    pricing: {
      choosePlan: "Plan wählen",
      getQuote: "Angebot anfordern",
    },
    homePage: {
      portfolio: {}
    },
    pages: {
      tour: {
        hero: { title: "Orte auf Ihrem Bildschirm durchwandern", subtitle: "Wir erstellen eine Online-Kopie Ihres Raumes, damit Sie ihn jedem zeigen können.", iframeSrc: "https://storage.net-fs.com/hosting/2727323/396/index.htm" },
        intro: { title: "Eine neue Art, Ihren Ort zu zeigen", paragraphs: ["Wir machen spezielle Bilder von Ihrem Ort. Wir setzen sie zusammen, damit die Leute auf ihrem Computer oder Telefon darin herumlaufen können.", "Es hilft den Leuten zu sehen, wie großartig Ihr Ort ist, bevor sie ihn besuchen. Mehr Leute werden kommen wollen!"] },
        gallery: {
          title: "Schauen Sie sich unsere coolen Touren an",
          subtitle: "Sehen Sie, wie echt unsere Online-Kopien aussehen und was Sie damit machen können.",
          images: [
            { src: "", alt: "Interaktive 360°-Virtuelle-Tour", iframeSrc: "https://storage.net-fs.com/hosting/2727323/454/" },
            { src: "", alt: "Beispiel für eine virtuelle Tour mit virtuellem Staging", iframeSrc: "https://storage.net-fs.com/hosting/2727323/446/" },
            { src: "", alt: "Interaktive Wohnungstour", iframeSrc: "https://storage.net-fs.com/hosting/2727323/396/index.htm" }
          ]
        },
        features: {
          title: "Funktionen, die Sie eintauchen lassen",
          subtitle: "Unsere virtuellen Touren sind vollgepackt mit Funktionen, um ein ansprechendes Erlebnis zu schaffen.",
          items: [
            { icon: "Eye", title: "Hochauflösende Visuals", description: "Kristallklare Bilder, die Ihnen das Gefühl geben, wirklich da zu sein." },
            { icon: "MousePointerClick", title: "Interaktive Hotspots", description: "Klicken Sie auf Objekte, um weitere Informationen zu erhalten, Videos anzusehen oder Fotos zu sehen." },
            { icon: "Smartphone", title: "Mobil- & VR-fähig", description: "Zugänglich auf jedem Gerät, von Desktops über Smartphones bis hin zu VR-Headsets." },
            { icon: "Share2", title: "Einfach zu teilen", description: "Betten Sie Ihre Tour auf Ihrer Website ein oder teilen Sie sie in sozialen Medien mit einem einfachen Link." },
          ]
        },
        pricing: {
          title: "Unsere 360°-Tour-Fähigkeiten",
          subtitle: "Wir bieten eine breite Palette von Optionen, um das perfekte interaktive Erlebnis zu schaffen. Kontaktieren Sie uns für ein persönliches Angebot.",
          featureGroups: [
            {
              title: "Google Maps Integration",
              features: [
                "360°-Bilder innen und außen",
                "Offizieller Upload auf Google Maps",
                "Erhöhen Sie Klicks und Aufrufe auf Ihrem Profil",
                "Verbessern Sie Ihr Ranking bei Google und Google Maps",
                "Gewinnen Sie mehr Kunden direkt aus der Suche"
              ]
            },
            {
              title: "Individuelle virtuelle Touren",
              features: [
                "Unbegrenzte hochauflösende Aufnahmen",
                "Einbettbarer Videolink für Webseiten und soziale Medien",
                "Interaktive Hotspots mit Informationen, Bildern oder Videos",
                "Individuelles Branding mit Ihrem Logo und Ihren Farben",
                "Detaillierte Analysen zum Besucherengagement"
              ]
            },
            {
              title: "Premium-Funktionen & Add-ons",
              features: [
                "Vollständig angepasste Tour-Oberfläche mit Header und Musik",
                "Interaktive Grundrisse und 3D-'Puppenhaus'-Modellansichten",
                "Integration von 3D-Kunst und virtuellem Staging",
                "Social-Media-Optimierung und Sharing-Tools",
                "Luftaufnahmen mit Drohnen für atemberaubende Außenansichten",
                "Unterstützung für mehrere Standorte in einer einzigen Tour"
              ]
            }
          ]
        }
      },
      drone: {
        hero: { title: "Sehen Sie die Welt von oben", subtitle: "Atemberaubende Luftkinematographie und -fotografie für Ihre Projekte.", imageUrl: "/img/drone/bella_vista.jpg" },
        intro: { title: "Eine höhere Perspektive", paragraphs: ["Unsere hochmodernen Drohnen erfassen atemberaubende Ansichten vom Himmel. Wir liefern hochauflösende Videos und Fotos für Immobilien, Veranstaltungen und Inspektionen.", "Von filmischen FPV-Aufnahmen bis hin zu detaillierter Kartierung bringen wir eine einzigartige und kraftvolle Perspektive in Ihre Geschichte."] },
        gallery: {
          title: "Unsere Luftaufnahmen", subtitle: "Entdecken Sie eine Sammlung unserer Drohnenfotografie- und -videografieprojekte.",
          images: [
            { src: "/img/drone/nile_hotel.jpg", alt: "Drohnenansicht einer kurvenreichen Straße im Wald" },
            { src: "/img/drone/flores.jpg", alt: "Drohne über einer Stadt bei Sonnenuntergang" },
            { src: "/img/drone/guatape.jpg", alt: "Drohnenansicht von Guatape" }
          ]
        },
        features: {
          title: "Erweiterte Drohnenfähigkeiten", subtitle: "Wir verwenden die neueste Technologie, um außergewöhnliche Ergebnisse zu liefern.",
          items: [
            { icon: "Film", title: "4K Kinovideo", description: "Erfassen Sie Ihr Motiv in atemberaubender, filmreifer hoher Auflösung." },
            { icon: "Building", title: "Inspektion & Vermessung", description: "Inspizieren Sie Gebäude, Dächer und Infrastruktur sicher und effizient." },
            { icon: "Map", title: "2D/3D-Kartierung", description: "Erstellen Sie detaillierte Orthomosaik-Karten und 3D-Modelle zur Analyse und Planung." },
            { icon: "Rocket", title: "FPV-Durchflüge", description: "Dynamische und immersive Ich-Perspektive-Touren durch Innen- und Außenbereiche." }
          ]
        },
        pricing: {
          title: "Luftbildfotografie & -videografie",
          subtitle: "Erfassen Sie atemberaubende Perspektiven mit unserer fortschrittlichen Drohnentechnologie. Wir passen jedes Projekt an Ihre spezifische Vision an. Kontaktieren Sie uns für ein Angebot.",
          featureGroups: [
            {
              title: "Luftbildfotografie",
              features: [
                "Ultrahochauflösende (4K+) Bilder",
                "Professionell bearbeitete und retuschierte Fotos",
                "Interaktive 360°-Luftpanoramen",
                "Aufnahmen aus einzigartigen und unerreichbaren Perspektiven",
                "Volle Nutzungsrechte für Web und Social Media",
                "Optionaler automatischer Upload zu Google Maps"
              ]
            },
            {
              title: "Kinematografisches Luftvideo",
              features: [
                "Professionell bearbeitete Videokurzfilme (z.B. 1 Minute)",
                "Social-Media-fähige Videolinks",
                "Einschließlich bearbeiteter, retuschierter und roher Aufnahmen",
                "Erstellung einer virtuellen Tour mit interaktiven 360°-Bildern",
                "Persönliche Beratung und Projektplanung"
              ]
            },
            {
              title: "Fortgeschrittene & kommerzielle Drohneneinsätze",
              features: [
                "Unbegrenzte Aufnahmen für Großprojekte",
                "Aufnahmen an mehreren Standorten",
                "Individuelles Branding und Videoeffekte",
                "Social-Media-Optimierungspakete",
                "Erstellung von Premium-Virtuellen-Touren aus Drohnenbildern",
                "Umfassende Lieferung von Filmmaterial einschließlich aller Rohdateien"
              ]
            }
          ]
        }
      },
      web: {
        hero: { title: "Ihre digitale Visitenkarte", subtitle: "Schöne, schnelle und effektive Webseiten, die Ihr Geschäft wachsen lassen.", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
        intro: { title: "Für Leistung gebaut", paragraphs: ["Eine großartige Webseite ist mehr als eine Online-Broschüre; sie ist ein leistungsstarkes Werkzeug für Wachstum. Wir entwerfen und erstellen Webseiten, die nicht nur visuell beeindruckend, sondern auch schnell, sicher und optimiert sind, um Besucher in Kunden umzuwandeln.", "Unser Prozess ist kollaborativ. Wir arbeiten eng mit Ihnen zusammen, um Ihre Marke und Ziele zu verstehen und sicherzustellen, dass das Endprodukt eine perfekte digitale Reflexion Ihres Unternehmens ist."] },
        gallery: {
          title: "Unser Webdesign-Portfolio", subtitle: "Sehen Sie, wie wir Unternehmen wie Ihrem geholfen haben, online erfolgreich zu sein.",
          images: [
            { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", alt: "Webdesign-Team bei der Zusammenarbeit" },
            { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", alt: "Webseite auf mehreren Geräten" },
            { src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop", alt: "Code auf einem Bildschirm" }
          ]
        },
        features: {
          title: "Was enthalten ist", subtitle: "Jede von uns erstellte Webseite verfügt über eine Reihe leistungsstarker Kernfunktionen.",
          items: [
            { icon: "LayoutTemplate", title: "Individuelles Design", description: "Ein einzigartiges Design, das Ihre Markenidentität widerspiegelt und Ihr Publikum anspricht." },
            { icon: "Smartphone", title: "Mobil-responsiv", description: "Fehlerfreie Leistung auf allen Geräten, von Desktops bis zu Smartphones." },
            { icon: "Rocket", title: "Hochgeschwindigkeitsleistung", description: "Optimiert für schnelle Ladezeiten zur Verbesserung der Benutzererfahrung und SEO." },
            { icon: "Search", title: "SEO-Grundlage", description: "Erstellt mit den besten Praktiken für Suchmaschinen, um Ihnen zu helfen, bei Google höher zu ranken." }
          ]
        },
        pricing: {
          title: "Individuelle Webseitenentwicklung",
          subtitle: "Wir erstellen schöne, leistungsstarke Webseiten, die auf Ihre Geschäftsziele zugeschnitten sind. Lassen Sie uns Ihr Projekt besprechen und ein individuelles Angebot erstellen.",
          featureGroups: [
            {
              title: "Grundlage & Design",
              features: [
                "Individuelles, mobil-responsives Design",
                "Einzelseiten- oder Mehrseitenanwendungen",
                "Grundlegende SEO-Optimierung",
                "Personalisierte Call-to-Action (CTA)-Strategie",
                "Integration von sozialen Medien und Werbe-Tools",
                "Erstellung von benutzerdefinierten QR-Codes für Marketingzwecke"
              ]
            },
            {
              title: "Geschäfts- & E-Commerce-Funktionen",
              features: [
                "Fortgeschrittene SEO- und Leistungsoptimierung",
                "Integration eines Content-Management-Systems (CMS)",
                "Kontaktformulare und Tools zur Lead-Generierung",
                "Mehrsprachige Unterstützung und Übersetzung",
                "Videoeinbettung und Unterstützung für Rich Media",
                "Beratung zu Branding und Webpräsenz"
              ]
            },
            {
              title: "Unternehmens- & erweiterte Lösungen",
              features: [
                "Benutzerdefinierte API- und Drittanbieter-Service-Integrationen",
                "Erweiterte Analyse- und Conversion-Tracking-Einrichtung",
                "Sicherheits- und Compliance-Funktionen auf Unternehmensebene",
                "Dediziertes Projektmanagement und Support",
                "Personalisiertes Team-Onboarding und Training",
                "Laufende kollaborative Entwicklungs- und Wartungspläne"
              ]
            }
          ]
        }
      },
      photography: {
        hero: { title: "Fangen Sie Ihre besten Momente ein", subtitle: "Professionelle Fotografie, die die Geschichte Ihrer Marke erzählt.", imageUrl: "/img/photo/templom.jpg" },
        intro: { title: "Bilder, die sprechen", paragraphs: ["Hochwertige Fotografie ist entscheidend für einen starken ersten Eindruck. Wir sind darauf spezialisiert, atemberaubende Bilder zu schaffen, die die Essenz Ihrer Marke, Produkte und Mitarbeiter einfangen.", "Ob für Ihre Webseite, soziale Medien oder Marketingmaterialien, unsere Bilder werden Sie hervorheben."] },
        gallery: {
          title: "Ausgewählte Fotografie", subtitle: "Eine Auswahl unserer Arbeiten aus verschiedenen Branchen.",
          images: [
            { src: "/img/photo/coffee.jpg", alt: "Kunstvoll arrangierte Kaffeebohnen in einer Tasse" },
            { src: "/img/photo/templom2.jpg", alt: "Architektonisches Detail einer Tempeldecke" },
            { src: "/img/photo/ceiling.jpg", alt: "Modernes und sauberes Bürointerieur" }
          ]
        },
        features: {
          title: "Unsere Fotodienstleistungen", subtitle: "Maßgeschneiderte Fotoshootings, um Ihren spezifischen Bedürfnissen gerecht zu werden.",
          items: [
            { icon: "Building", title: "Architektur", description: "Präsentation von Gewerbe- und Wohnimmobilien mit atemberaubenden Fotos." },
            { icon: "Briefcase", title: "Unternehmensporträts", description: "Professionelle Porträts Ihres Teams für Webseiten und Profile." },
            { icon: "ShoppingBag", title: "Produktfotografie", description: "Saubere, scharfe Bilder für Ihren E-Commerce-Shop und Ihre Kataloge." },
            { icon: "Utensils", title: "Essen & Trinken", description: "Lecker aussehende Fotos, die Ihre kulinarischen Kreationen unwiderstesslich machen." }
          ]
        },
        pricing: {
          title: "Professionelle Fotodienstleistungen",
          subtitle: "Von Unternehmensporträts bis hin zu atemberaubenden Produktvisualisierungen erfassen wir die Essenz Ihrer Marke. Kontaktieren Sie uns für eine auf Ihre Bedürfnisse zugeschnittene Sitzung.",
          featureGroups: [
            {
              title: "Maßgeschneiderte Fotosessions",
              features: [
                "Flexible Sitzungsdauern, von kurzen Shootings bis zu ganztägigen Veranstaltungen",
                "Aufnahmen vor Ort in Ihrem Unternehmen oder an einem gewählten Ort",
                "Spezialisierung auf Produkt-, Porträt- und Firmenveranstaltungsfotografie",
                "Beratung zur Definition des visuellen Stils und der Aufnahmeliste"
              ]
            },
            {
              title: "Professionelle Nachbearbeitung",
              features: [
                "Professionelle Bearbeitung und grundlegende Retusche aller ausgewählten Fotos",
                "Fortgeschrittene und detaillierte Retusche für Premium-Aufnahmen",
                "Farbkorrektur und -abstufung zur Anpassung an die Markenästhetik",
                "Hochwertige Entfernung von Haut- und Produktunreinheiten"
              ]
            },
            {
              title: "Lieferung & digitale assets",
              features: [
                "Lieferung einer festgelegten Anzahl hochauflösender bearbeiteter Bilder",
                "Sichere Online-Galerie zum Anzeigen, Teilen und Herunterladen",
                "Option zum Erhalt aller rohen, unbearbeiteten Aufnahmen der Sitzung",
                "Für Web, soziale Medien und Druck optimierte Bilder",
                "Volle Nutzungsrechte für Marketing- und Werbematerialien"
              ]
            }
          ]
        }
      }
    },
    // FIX: Add checkoutPage translations
    checkoutPage: {
      orderSuccess: "Bestellung erfolgreich aufgegeben! Wir melden uns in Kürze.",
      orderError: "Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse an, um die Bestellung aufzugeben.",
      notFoundTitle: "Plan nicht gefunden",
      notFoundText: "Wir konnten den gesuchten Plan nicht finden. Er wurde möglicherweise verschoben oder ist nicht mehr verfügbar.",
      notFoundButton: "Zurück zur Startseite",
      backLink: "Zurück zu",
      contactTitle: "Ihre Informationen",
      nameLabel: "Vollständiger Name",
      emailLabel: "E-Mail-Adresse",
      notesLabel: "Zusätzliche Anmerkungen (Optional)",
      notesPlaceholder: "Besondere Wünsche oder Details...",
      placeOrderButton: "Bestellung aufgeben",
      orderSummaryTitle: "Bestellübersicht",
      productLabel: "Plan",
      serviceLabel: "Dienstleistung",
      totalLabel: "Gesamt",
      gettingTitle: "Was Sie bekommen",
    },
    // FIX: Add generalCheckoutPage translations
    generalCheckoutPage: {
      title: "Wählen Sie einen Service, um loszulegen",
      explore: "Erkunden",
      detailsTitle: "Für Sie angepasst",
      detailsText: "Jeder unserer Dienste ist darauf zugeschnitten, Ihre einzigartigen Bedürfnisse zu erfüllen. Wählen Sie einen Dienst aus, um detaillierte Pläne und Funktionen zu erkunden, die darauf ausgelegt sind, die digitale Präsenz Ihrer Marke zu stärken. Bei Fragen steht Ihnen unser Team für eine persönliche Beratung zur Verfügung.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      tour: "360°",
      drone: "درون",
      website: "موقع إلكتروني",
      photography: "تصوير",
      contact: "استشارة",
      getStarted: "ابدأ الآن",
    },
    hero: {
      title: "اجعل عملك يبدو رائعًا",
      subtitle: "مع عوالم رقمية مذهلة",
      description: "نحن نصنع جولات افتراضية مدهشة، ونلتقط صورًا رائعة، ونبني مواقع ويب رائعة. هذا يساعد المزيد من الناس على رؤية عملك والإعجاب به.",
    },
    services: {
      title: "أفضل ما نقدمه",
      subtitle: "نحن نقدم خدمات رقمية خاصة لجعل علامتك التجارية تبرز. ونقوم بكل خدمة بعناية فائقة.",
      learnMore: "شاهد المزيد",
      list: [
        { id: 'tour', title: "جولات 360° رائعة", description: "نبني نسخة من مكانك على الإنترنت تبدو حقيقية. يمكن للناس النظر حولهم والشعور وكأنهم هناك حقًا.", features: ["صور فائقة الوضوح", "نقاط معلومات تفاعلية", "شعارك وألوانك الخاصة", "شاهد من زار"] },
        { id: 'photography', title: "صور رائعة للأعمال", description: "نروي قصة علامتك التجارية بصور جميلة. صورنا تساعد الناس على الشعور بالارتباط بعملك.", features: ["صور للمباني", "صور لفريقك", "صور لمنتجاتك", "صور من الفعاليات"] },
        { id: 'drone', title: "فيديوهات درون مذهلة", description: "نستخدم طائرات بدون طيار للحصول على فيديوهات مدهشة من السماء. شاهد عالمك من الأعلى.", features: ["فيديوهات بجودة سينمائية", "لقطات درون سريعة الحركة", "إنشاء خرائط تفصيلية", "فحص المباني"] },
        { id: 'web', title: "موقع إلكتروني مخصص", description: "احصل على موقع ويب خاص مصمم خصيصًا لك. مواقعنا سريعة، تبدو جيدة، وتساعد علامتك التجارية على النمو.", features: ["تصميم سهل الاستخدام", "بيع المنتجات عبر الإنترنت", "مساعدة الناس في العثور عليك", "نحن نحافظ على تشغيله"] },
      ],
    },
    contact: {
      title: "تحدث إلينا",
      subtitle: "هل لديك فكرة رائعة؟ املأ النموذج أدناه ودعنا نتحدث عنها!",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني",
      messagePlaceholder: "أخبرنا بفكرتك",
      submitButton: "إرسال الرسالة",
      formSuccess: "تم الاستلام! سنتحدث معك قريبًا.",
      formError: "عفوًا! يرجى ملء جميع الخانات.",
    },
    footer: {},
    pricing: {
      choosePlan: "اختر الخطة",
      getQuote: "احصل على عرض سعر",
    },
    homePage: {
      portfolio: {}
    },
    pages: {
      tour: {
        hero: { title: "تجول في الأماكن على شاشتك", subtitle: "نبني نسخة عبر الإنترنت من مساحتك حتى تتمكن من عرضها على أي شخص.", iframeSrc: "https://storage.net-fs.com/hosting/2727323/396/index.htm" },
        intro: { title: "طريقة جديدة لعرض مكانك", paragraphs: ["نلتقط صورًا خاصة لمكانك. نجمعها معًا حتى يتمكن الناس من التجول بداخلها على أجهزة الكمبيوتر أو الهواتف الخاصة بهم.", "إنها تساعد الناس على رؤية كم هو رائع مكانك قبل زيارته. سيرغب المزيد من الناس في المجيء!"] },
        gallery: {
          title: "شاهد جولاتنا الرائعة",
          subtitle: "شاهد كيف تبدو نسخنا عبر الإنترنت حقيقية وما يمكنك القيام به بها.",
          images: [
            { src: "", alt: "جولة افتراضية تفاعلية بنطاق 360 درجة", iframeSrc: "https://storage.net-fs.com/hosting/2727323/454/" },
            { src: "", alt: "مثال جولة التدريج الافتراضي", iframeSrc: "https://www.3dvista.com/en/project/new-virtual-staging-by-swapping-elements/" },
            { src: "", alt: "جولة شقة تفاعلية", iframeSrc: "https://storage.net-fs.com/hosting/2727323/396/index.htm" }
          ]
        },
        features: {
          title: "ميزات تغمرك",
          subtitle: "جولاتنا الافتراضية مليئة بالميزات لخلق تجربة جذابة.",
          items: [
            { icon: "Eye", title: "صور عالية الوضوح", description: "صور واضحة تمامًا تجعلك تشعر وكأنك هناك حقًا." },
            { icon: "MousePointerClick", title: "نقاط تفاعلية", description: "انقر على الكائنات للحصول على مزيد من المعلومات أو مشاهدة مقاطع الفيديو أو الصور." },
            { icon: "Smartphone", title: "جاهزة للجوال والواقع الافتراضي", description: "يمكن الوصول إليها على أي جهاز، من أجهزة سطح المكتب إلى الهواتف الذكية وسماعات الواقع الافتراضي." },
            { icon: "Share2", title: "سهلة المشاركة", description: "قم بتضمين جولتك على موقع الويب الخاص بك أو شاركها على وسائل التواصل الاجتماعي برابط بسيط." },
          ]
        },
        pricing: {
          title: "قدرات جولاتنا بنطاق 360 درجة",
          subtitle: "نحن نقدم مجموعة واسعة من الخيارات لبناء التجربة التفاعلية المثالية. اتصل بنا للحصول على عرض أسعار شخصي بناءً على احتياجاتك.",
          featureGroups: [
            {
              title: "تكامل خرائط جوجل",
              features: [
                "صور 360 درجة داخلية وخارجية",
                "تحميل رسمي على خرائط جوجل",
                "زيادة النقرات والمشاهدات على ملفك الشخصي",
                "تحسين ترتيبك على جوجل وخرائط جوجل",
                "جذب المزيد من العملاء مباشرة من البحث"
              ]
            },
            {
              title: "جولات افتراضية مخصصة",
              features: [
                "تسجيلات غير محدودة عالية الدقة",
                "رابط فيديو قابل للتضمين للمواقع الإلكترونية ووسائل التواصل الاجتماعي",
                "نقاط تفاعلية تحتوي على معلومات أو صور أو مقاطع فيديو",
                "علامة تجارية مخصصة مع شعارك وألوانك",
                "تحليلات مفصلة حول تفاعل الزوار"
              ]
            },
            {
              title: "ميزات وإضافات متميزة",
              features: [
                "واجهة جولة مخصصة بالكامل مع رأس وتذييل وموسيقى",
                "مخططات طوابق تفاعلية وعروض نموذجية ثلاثية الأبعاد 'بيت الدمية'",
                "دمج الفن ثلاثي الأبعاد والتجهيز الافتراضي",
                "أدوات تحسين ومشاركة وسائل التواصل الاجتماعي",
                "تسجيلات جوية بطائرات بدون طيار لمشاهد خارجية مذهلة",
                "دعم لمواقع متعددة في جولة واحدة"
              ]
            }
          ]
        }
      },
      drone: {
        hero: { title: "شاهد العالم من الأعلى", subtitle: "تصوير سينمائي وصور جوية مذهلة لمشاريعك.", imageUrl: "/img/drone/bella_vista.jpg" },
        intro: { title: "منظور أعلى", paragraphs: ["تلتقط طائراتنا بدون طيار الحديثة مناظر خلابة من السماء. نحن نقدم فيديو وصورًا عالية الدقة للعقارات والفعاليات وعمليات التفتيش.", "من لقطات FPV السينمائية إلى رسم الخرائط التفصيلية، نقدم منظورًا فريدًا وقويًا لقصتك."] },
        gallery: {
          title: "أعمالنا الجوية", subtitle: "استكشف مجموعة من مشاريع التصوير الفوتوغرافي والفيديو بطائرات بدون طيار.",
          images: [
            { src: "/img/drone/nile_hotel.jpg", alt: "منظر درون لطريق متعرج في غابة" },
            { src: "/img/drone/flores.jpg", alt: "درون فوق مدينة عند غروب الشمس" },
            { src: "/img/drone/guatape.jpg", alt: "منظر درون لغواتابي" }
          ]
        },
        features: {
          title: "قدرات متقدمة للطائرات بدون طيار", subtitle: "نستخدم أحدث التقنيات لتقديم نتائج استثنائية.",
          items: [
            { icon: "Film", title: "فيديو سينمائي 4K", description: "التقط موضوعك بدقة عالية مذهلة بجودة سينمائية." },
            { icon: "Building", title: "فحص ومسح", description: "افحص المباني والأسطح والبنية التحتية بأمان وكفاءة." },
            { icon: "Map", title: "رسم خرائط ثنائي/ثلاثي الأبعاد", description: "أنشئ خرائط فسيفساء متعامدة مفصلة ونماذج ثلاثية الأبعاد للتحليل والتخطيط." },
            { icon: "Rocket", title: "جولات FPV", description: "جولات دينميكية وغامرة من منظور الشخص الأول للداخل والخارج." }
          ]
        },
        pricing: {
          title: "خدمات التصوير الجوي والفيديو",
          subtitle: "التقط مناظر خلابة بتقنيتنا المتقدمة للطائرات بدون طيار. نحن نصمم كل مشروع حسب رؤيتك المحددة. اتصل بنا للحصول على عرض أسعار.",
          featureGroups: [
            {
              title: "التصوير الجوي",
              features: [
                "صور عالية الدقة (4K+)",
                "صور محررة ومعالجة باحتراف",
                "صور بانورامية جوية تفاعلية بزاوية 360 درجة",
                "لقطات من وجهات نظر فريدة لا يمكن الوصول إليها",
                "حقوق استخدام كاملة للويب ووسائل التواصل الاجتماعي",
                "تحميل تلقائي اختياري إلى خرائط جوجل"
              ]
            },
            {
              title: "فيديو جوي سينمائي",
              features: [
                "مقاطع فيديو قصيرة محررة باحتراف (على سبيل المثال، دقيقة واحدة)",
                "روابط فيديو جاهزة لوسائل التواصل الاجتماعي",
                "تضمين اللقطات المحررة والمعالجة والخام",
                "إنشاء جولة افتراضية باستخدام صور تفاعلية بزاوية 360 درجة",
                "استشارة شخصية وتخطيط للمشروع"
              ]
            },
            {
              title: "عمليات الطائرات بدون طيار المتقدمة والتجارية",
              features: [
                "تسجيلات غير محدودة للمشاريع واسعة النطاق",
                "تصوير في مواقع متعددة",
                "علامة تجارية مخصصة وتأثيرات فيديو",
                "باقات تحسين وسائل التواصل الاجتماعي",
                "إنشاء جولات افتراضية متميزة من صور الطائرات بدون طيار",
                "تسليم شامل للقطات بما في ذلك جميع الملفات الخام"
              ]
            }
          ]
        }
      },
      web: {
        hero: { title: "واجهتك الرقمية", subtitle: "مواقع ويب جميلة وسريعة وفعالة تنمي أعمالك.", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
        intro: { title: "مصمم للأداء", paragraphs: ["الموقع الإلكتروني الرائع هو أكثر من مجرد كتيب عبر الإنترنت؛ إنه أداة قوية للنمو. نحن نصمم ونبني مواقع ويب ليست مذهلة بصريًا فحسب، بل سريعة وآمنة ومحسنة لتحويل الزوار إلى عملاء.", "عمليتنا تعاونية. نحن نعمل عن كثب معك لفهم علامتك التجارية وأهدافك، مما يضمن أن المنتج النهائي هو انعكاس رقمي مثالي لعملك."] },
        gallery: {
          title: "مجموعة أعمالنا في تصميم الويب", subtitle: "شاهد كيف ساعدنا الشركات المماثلة لشركتك على النجاح عبر الإنترنت.",
          images: [
            { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", alt: "فريق تصميم الويب يتعاون" },
            { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", alt: "موقع ويب على أجهزة متعددة" },
            { src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop", alt: "كود على شاشة" }
          ]
        },
        features: {
          title: "ماذا يتضمن", subtitle: "كل موقع ويب نبنيه يأتي مع مجموعة أساسية من الميزات القوية.",
          items: [
            { icon: "LayoutTemplate", title: "تصميم مخصص", description: "تصميم فريد يعكس هوية علامتك التجارية ويجذب جمهورك." },
            { icon: "Smartphone", title: "متجاوب مع الجوال", description: "أداء لا تشوبه شائبة على جميع الأجهزة، من أجهزة الكمبيوتر المكتبية إلى الهواتف الذكية." },
            { icon: "Rocket", title: "أداء عالي السرعة", description: "محسن لأوقات التحميل السريعة لتحسين تجربة المستخدم وتحسين محركات البحث." },
            { icon: "Search", title: "أساس تحسين محركات البحث", description: "مبني بأفضل ممارسات محركات البحث لمساعدتك في الحصول على ترتيب أعلى على جوجل." }
          ]
        },
        pricing: {
          title: "تطوير مواقع الويب المخصصة",
          subtitle: "نبني مواقع ويب جميلة وعالية الأداء مصممة خصيصًا لأهداف عملك. دعنا نناقش مشروعك وننشئ عرض أسعار مخصصًا.",
          featureGroups: [
            {
              title: "الأساس والتصميم",
              features: [
                "تصميم مخصص ومتجاوب مع الجوال",
                "تطبيقات صفحة واحدة أو متعددة الصفحات",
                "تحسين أساسي لمحركات البحث",
                "استراتيجية دعوة للعمل (CTA) مخصصة",
                "تكامل وسائل التواصل الاجتماعي وأدوات الترويج",
                "إنشاء رمز QR مخصص للتسويق"
              ]
            },
            {
              title: "ميزات الأعمال والتجارة الإلكترونية",
              features: [
                "تحسين متقدم لمحركات البحث وضبط الأداء",
                "تكامل نظام إدارة المحتوى (CMS)",
                "نماذج الاتصال وأدوات توليد العملاء المحتملين",
                "دعم متعدد اللغات والترجمة",
                "تضمين الفيديو ودعم الوسائط الغنية",
                "استشارات العلامة التجارية والتواجد على الويب"
              ]
            },
            {
              title: "حلول المؤسسات والحلول المتقدمة",
              features: [
                "واجهات برمجة تطبيقات مخصصة وتكاملات خدمات الطرف الثالث",
                "إعداد تحليلات متقدمة وتتبع التحويل",
                "ميزات الأمان والامتثال على مستوى المؤسسة",
                "إدارة ودعم مخصص للمشروع",
                "تأهيل وتدريب شخصي للفريق",
                "خطط تطوير وصيانة تعاونية مستمرة"
              ]
            }
          ]
        }
      },
      photography: {
        hero: { title: "التقط أفضل لحظاتك", subtitle: "تصوير احترافي يروي قصة علامتك التجارية.", imageUrl: "/img/photo/templom.jpg" },
        intro: { title: "صور تتحدث", paragraphs: ["التصوير الفوتوغرافي عالي الجودة أمر حاسم لترك انطباع أول قوي. نحن متخصصون في إنشاء صور مذهلة تجسد جوهر علامتك التجارية ومنتجاتك وأشخاصك.", "سواء كان ذلك لموقعك على الويب أو وسائل التواصل الاجتماعي أو المواد التسويقية، فإن صورنا ستجعلك تبرز."] },
        gallery: {
          title: "تصوير مميز", subtitle: "مجموعة مختارة من أعمالنا في مختلف الصناعات.",
          images: [
            { src: "/img/photo/coffee.jpg", alt: "حبوب بن مرتبة بفن في كوب" },
            { src: "/img/photo/templom2.jpg", alt: "تفاصيل معمارية لسقف معبد" },
            { src: "/img/photo/ceiling.jpg", alt: "داخل مكتب حديث ونظيف" }
          ]
        },
        features: {
          title: "خدمات التصوير الفوتوغرافي لدينا", subtitle: "جلسات تصوير مخصصة لتلبية احتياجاتك الخاصة.",
          items: [
            { icon: "Building", title: "معماري", description: "عرض العقارات التجارية والسكنية بصور مذهلة." },
            { icon: "Briefcase", title: "صور شخصية للشركات", description: "صور احترافية لفريقك للمواقع الإلكترونية والملفات الشخصية." },
            { icon: "ShoppingBag", title: "تصوير المنتجات", description: "صور نظيفة وواضحة لمتجرك الإلكتروني وكتالوجاتك." },
            { icon: "Utensils", title: "طعام ومشروبات", description: "صور شهية تجعل إبداعاتك الطهوية لا تقاوم." }
          ]
        },
        pricing: {
          title: "خدمات التصوير الفوتوغرافي الاحترافية",
          subtitle: "من الصور الشخصية للشركات إلى الصور المذهلة للمنتجات، نلتقط جوهر علامتك التجارية. اتصل بنا للحصول على جلسة مصممة خصيصًا لاحتياجاتك.",
          featureGroups: [
            {
              title: "جلسات تصوير مخصصة",
              features: [
                "فترات جلسات مرنة، من اللقطات القصيرة إلى الفعاليات التي تستمر طوال اليوم",
                "التصوير في الموقع في مكان عملك أو المكان المختار",
                "تخصص في تصوير المنتجات والصور الشخصية وفعاليات الشركات",
                "استشارة لتحديد النمط البصري وقائمة اللقطات"
              ]
            },
            {
              title: "ما بعد الإنتاج الاحترافي",
              features: [
                "تحرير احترافي وتنميق أساسي لجميع الصور المختارة",
                "تنميق متقدم ومفصل للقطات المتميزة",
                "تصحيح الألوان وتدرجها لتتناسب مع جمالية العلامة التجارية",
                "إزالة عيوب البشرة والمنتجات المتطورة"
              ]
            },
            {
              title: "التسليم والأصول الرقمية",
              features: [
                "تسليم عدد محدد من الصور المحررة عالية الدقة",
                "معرض آمن عبر الإنترنت للعرض والمشاركة والتنزيل",
                "خيار استلام جميع اللقطات الخام غير المحررة من الجلسة",
                // FIX: Removed erroneous function call `()` from the end of the string.
                "صور محسنة للويب ووسائل التواصل الاجتماعي والاستخدام المطبوع",
                "حقوق استخدام كاملة للمواد التسويقية والترويجية"
              ]
            }
          ]
        }
      }
    },
    // FIX: Add checkoutPage translations
    checkoutPage: {
      orderSuccess: "تم تقديم الطلب بنجاح! سنتواصل معك قريبًا.",
      orderError: "يرجى ملء اسمك وبريدك الإلكتروني لتقديم الطلب.",
      notFoundTitle: "الخطة غير موجودة",
      notFoundText: "لم نتمكن من العثور على الخطة التي تبحث عنها. ربما تم نقلها أو لم تعد متوفرة.",
      notFoundButton: "العودة إلى الرئيسية",
      backLink: "العودة إلى",
      contactTitle: "معلوماتك",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      notesLabel: "ملاحظات إضافية (اختياري)",
      notesPlaceholder: "أي طلبات خاصة أو تفاصيل...",
      placeOrderButton: "قدم طلبك",
      orderSummaryTitle: "ملخص الطلب",
      productLabel: "الخطة",
      serviceLabel: "الخدمة",
      totalLabel: "الإجمالي",
      gettingTitle: "ما الذي ستحصل عليه",
    },
    // FIX: Add generalCheckoutPage translations
    generalCheckoutPage: {
      title: "اختر خدمة للبدء",
      explore: "استكشف",
      detailsTitle: "مخصصة لك",
      detailsText: "كل خدمة من خدماتنا مصممة لتلبية احتياجاتك الفريدة. اختر خدمة لاستكشاف الخطط والميزات التفصيلية المصممة لتعزيز وجود علامتك التجارية الرقمية. إذا كانت لديك أي أسئلة، فإن فريقنا مستعد لتقديم استشارة شخصية.",
    },
  },
};
