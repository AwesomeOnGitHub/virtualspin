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
        { id: 'tour', title: "Cool 360° Tours", description: "We build a copy of your place online that feels real. People can look around and feel like they are really there.", features: ["Super Clear Pictures", "Clickable Info Spots", "Your Own Logo & Colors", "See Who Visited"], oldPrice: "999€", newPrice: "749€" },
        { id: 'photography', title: "Great Photos for Business", description: "We tell your brand's story with beautiful pictures. Our photos help people feel connected to your business.", features: ["Photos of Buildings", "Pictures of Your Team", "Photos of Your Products", "Pictures from Events"], oldPrice: "800€", newPrice: "650€" },
        { id: 'drone', title: "Awesome Drone Videos", description: "We use drones to get amazing videos from the sky. See your world from way up high.", features: ["Movie-Quality Videos", "Fast Action Drone Shots", "Make Detailed Maps", "Check on Buildings"], oldPrice: "1,200€", newPrice: "950€" },
        { id: 'web', title: "Custom Website", description: "Get a special website made just for you. Our websites are fast, look good, and help your brand grow.", features: ["Easy-to-Use Design", "Sell Things Online", "Help People Find You", "We Keep it Working"], oldPrice: "3,500€", newPrice: "2,800€" },
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
    footer: {
      rights: "Everything on this site is ours.",
    },
    homePage: {
      whyChooseUs: {
        title: "Why Choose VirtualSpin?",
        subtitle: "We blend creativity with technology to deliver unparalleled digital experiences.",
        items: [
          { icon: "Rocket", title: "Cutting-Edge Tech", description: "We use the latest tools and tech to create immersive and high-performance digital assets." },
          { icon: "Eye", title: "Creative Excellence", description: "Our team of creatives is dedicated to bringing your vision to life with stunning visuals." },
          { icon: "ShieldCheck", title: "Proven Results", description: "We are focused on delivering solutions that drive engagement and growth for your business." },
          { icon: "LayoutTemplate", title: "Tailored Solutions", description: "Every project is unique. We provide custom solutions that fit your specific brand and goals." }
        ]
      },
      portfolio: {
        title: "Our Work in Action",
        subtitle: "A glimpse into the stunning digital worlds we've created for our clients."
      },
      cta: {
        title: "Ready to Start Your Project?",
        subtitle: "Let's talk about how we can elevate your brand's digital presence. Get in touch for a free consultation.",
        buttonText: "Contact Us Now"
      }
    },
    pages: {
        tour: {
            hero: { title: "Walk Through Places on Your Screen", subtitle: "We build an online copy of your space so you can show it to anyone.", imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "A New Way to Show Your Place", paragraphs: ["We take special pictures of your place. We put them together so people can walk around inside it on their computer or phone.", "It helps people see how great your place is before they visit. More people will want to come!"] },
            gallery: { title: "Look at Our Cool Tours", subtitle: "See how real our online copies look and what you can do with them.", images: [ { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Modern living room" }, { src: "https://images.unsplash.com/photo-1613553423748-a0058a031b31?q=80&w=2070&auto=format&fit=crop", alt: "Modern kitchen" }, { src: "https://images.unsplash.com/photo-1556912173-35f1a5475858?q=80&w=2070&auto=format&fit=crop", alt: "Spacious kitchen view" } ]},
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
                title: "Simple Pricing for Any Space",
                subtitle: "Choose the plan that best fits your property. All prices are a one-time payment, no hidden costs.",
                plans: [
                    { name: "360° Google Maps Package", price: "249€", period: "", features: ["360° Images Inside and Outside", "Uploaded to Google Maps", "87% More Clicks", "More Views", "Better Ranking on Google and Google Maps", "More customers"], isFeatured: true, oldPrice: "400€" },
                    { name: "Virtual Tour Package", price: "899€", period: "", features: ["Unlimited Recordings", "Video with link for website and social media", "500% More Browsing Time on Your Website", "Top Rankings on Google and Google Maps", "Personal Consultation and Planning", "Usage Rights"], isFeatured: false, oldPrice: "1200€" },
                    { name: "Premium Package", price: "Price on request", period: "", features: ["Custom Tour With Header, Music, Floorplan, 3D Model View, 3D Art", "Custom Branding, Video, Links for all Social Media Platforms", "Social Media Optimizing and Drone Recordings Included", "Unlimited Recordings, Multilocation", "Usage Rights", "No Limits!", "Personal Consultation and Planning"], isFeatured: false },
                ]
            }
        },
        drone: {
            hero: { title: "See the World from Above", subtitle: "Stunning aerial cinematography and photography for your projects.", imageUrl: "https://images.unsplash.com/photo-1527977966376-52f50a954562?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "A Higher Perspective", paragraphs: ["Our state-of-the-art drones capture breathtaking views from the sky. We provide high-resolution video and photos for real estate, events, and inspections.", "From cinematic FPV shots to detailed mapping, we bring a unique and powerful perspective to your story."] },
            gallery: {
                title: "Our Aerial Work", subtitle: "Explore a collection of our drone photography and videography projects.",
                images: [
                    { src: "https://images.unsplash.com/photo-1508312923976-76a165b939e4?q=80&w=2070&auto=format&fit=crop", alt: "Drone shot of a coastline" },
                    { src: "https://images.unsplash.com/photo-1519672103449-44b7d0e47829?q=80&w=1955&auto=format&fit=crop", alt: "Drone over a city at sunset" },
                    { src: "https://images.unsplash.com/photo-1614765129699-ac749470817e?q=80&w=1974&auto=format&fit=crop", alt: "Drone view of a winding road in a forest" }
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
                title: "Aerial Service Packages", subtitle: "Flexible pricing for projects of all scales. All prices are a one-time payment, no hidden costs.",
                plans: [
                    { name: "Drone Photo Package", price: "399€", period: "", features: ["Ultra High Resolution Images from the Sky", "Maximum 5 Images", "1 360° Photo", "1 Hour on Site", "Usage Rights for Website and Socials", "Optional Upload to Google Maps"], isFeatured: false, oldPrice: "500€" },
                    { name: "Drone Video Package", price: "1399€", period: "", features: ["1 Minute Edited Video", "Link for Website and Social Media", "Maximum 20 Images", "4 360° Images with Interactive Hotspot Virtual Tour", "Usage Rights", "Optional Upload to Google Maps", "Personal Consultation and Planning"], isFeatured: true, oldPrice: "1800€" },
                    { name: "Premium Drone Package", price: "Price on request", period: "", features: ["Unlimited Recordings", "Multilocation", "360° Images, Video Footage, Ultra High Resolution Photos", "Edited and Raw Footage Included", "Custom Branding, Links for all Social Media Platforms", "Premium Virtual Tour using the Drone Imagery", "Social Media Optimizing Package", "No Limits!", "Personal Consultation and Planning"], isFeatured: false }
                ]
            }
        },
        // FIX: Added missing intro, gallery, and features properties to conform to PageContent type.
        website: {
            hero: { title: "Your Digital Storefront", subtitle: "Beautiful, fast, and effective websites that grow your business.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "Built For Performance", paragraphs: ["A great website is more than an online brochure; it's a powerful tool for growth. We design and build websites that are not only visually stunning but also fast, secure, and optimized to convert visitors into customers.", "Our process is collaborative. We work closely with you to understand your brand and goals, ensuring the final product is a perfect digital reflection of your business."] },
            gallery: {
                title: "Our Web Design Portfolio", subtitle: "See how we've helped businesses like yours succeed online.",
                images: [
                    { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop", alt: "Code on a screen" },
                    { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop", alt: "Web design layout" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e26b49126ee?q=80&w=2070&auto=format&fit=crop", alt: "Designer working on a laptop" }
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
                title: "Website Development Pricing", subtitle: "Transparent pricing to get your project off the ground.",
                plans: [
                    { name: "Landing Page", price: "1,500€", period: "one-time", features: ["Single page site", "Contact form", "Mobile responsive", "Basic SEO setup"], isFeatured: false },
                    { name: "Business Site", price: "2,800€", period: "one-time", features: ["Up to 10 pages", "CMS integration", "Custom design", "Advanced SEO"], isFeatured: true, oldPrice: "3,500€" },
                    { name: "E-commerce", price: "from 5,000€", period: "one-time", features: ["Full online store", "Product management", "Payment gateways", "Customer accounts"], isFeatured: false }
                ]
            }
        },
        photography: {
            hero: { title: "Capture Your Best Moments", subtitle: "Professional photography that tells your brand's story.", imageUrl: "https://images.unsplash.com/photo-1512295767273-b684ac7658fa?q=80&w=1935&auto=format&fit=crop" },
            intro: { title: "Images That Speak", paragraphs: ["High-quality photography is crucial for making a strong first impression. We specialize in creating stunning visuals that capture the essence of your brand, products, and people.", "Whether it's for your website, social media, or marketing materials, our images will make you stand out."] },
            gallery: {
                title: "Featured Photography", subtitle: "A selection of our work across various industries.",
                images: [
                    { src: "https://images.unsplash.com/photo-1556761175-b413da4b248d?q=80&w=1974&auto=format&fit=crop", alt: "Professional team collaborating in an office" },
                    { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop", alt: "Stylish product shot of a watch" },
                    { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop", alt: "Modern and clean office interior" }
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
                title: "Our Photography Packages",
                subtitle: "Choose the perfect session to capture your story. All prices are a one-time payment.",
                plans: [
                    { name: "Portrait Session", price: "249€", period: "", features: ["Ideal for: Individuals, couples, social media profiles, professional headshots.", "Duration: 45 minutes of shooting.", "10 professionally edited photos in high resolution.", "Links for Website and Social Media", "Includes basic retouching (color correction, brightness, contrast, light blemish removal)."], isFeatured: true, oldPrice: "300€" },
                    { name: "Lifestyle Session", price: "449€", period: "", features: ["More time for a relaxed atmosphere, perfect for capturing natural interactions and candid moments.", "Duration: 1.5 hours of shooting.", "25 professionally edited photos in high resolution.", "Links for Website and Social Media", "Includes standard retouching (all services from the basic package plus more detailed adjustments).", "Outfit change is possible."], isFeatured: false, oldPrice: "650€" },
                    { name: "Branding & Business", price: "1150€", period: "", features: ["Ideal for: Entrepreneurs, freelancers, influencers, artists, small businesses.", "Duration: 4 hours of shooting.", "Location: At multiple locations that fit your brand (office, café, outdoor).", "40 professionally edited photos in high resolution.", "Includes commercial usage rights for your own channels.", "A password-protected online gallery for selection and download.", "Comprehensive consultation beforehand to define the style and goals of the images."], isFeatured: false }
                ]
            }
        }
    }
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
        { id: 'tour', title: "Tours 360° Cools", description: "Nous construisons une copie de votre lieu en ligne qui semble réelle. Les gens peuvent regarder autour et se sentir comme s'ils y étaient vraiment.", features: ["Photos Super Claires", "Points d'Information Cliquables", "Votre Propre Logo & Couleurs", "Voir Qui a Visité"], oldPrice: "999€", newPrice: "749€" },
        { id: 'photography', title: "Superbes Photos pour Entreprise", description: "Nous racontons l'histoire de votre marque avec de belles images. Nos photos aident les gens à se sentir connectés à votre entreprise.", features: ["Photos de Bâtiments", "Photos de Votre Équipe", "Photos de Vos Produits", "Photos d'Événements"], oldPrice: "800€", newPrice: "650€" },
        { id: 'drone', title: "Vidéos de Drone Impressionnantes", description: "Nous utilisons des drones pour obtenir des vidéos incroyables du ciel. Voyez votre monde de très haut.", features: ["Vidéos de Qualité Cinéma", "Prises de Vue d'Action Rapides par Drone", "Créer des Cartes Détaillées", "Vérifier les Bâtiments"], oldPrice: "1,200€", newPrice: "950€" },
        { id: 'web', title: "Site Web Personnalisé", description: "Obtenez un site web spécial fait juste pour vous. Nos sites sont rapides, beaux et aident votre marque à se développer.", features: ["Conception Facile à Utiliser", "Vendre des Choses en Ligne", "Aider les Gens à Vous Trouver", "Nous le Maintenons en état de Marche"], oldPrice: "3,500€", newPrice: "2,800€" },
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
    footer: {
      rights: "Tout sur ce site est à nous.",
    },
    homePage: {
      whyChooseUs: {
        title: "Pourquoi Choisir VirtualSpin ?",
        subtitle: "Nous allions créativité et technologie pour offrir des expériences numériques inégalées.",
        items: [
          { icon: "Rocket", title: "Technologie de Pointe", description: "Nous utilisons les derniers outils et technologies pour créer des actifs numériques immersifs et performants." },
          { icon: "Eye", title: "Excellence Créative", description: "Notre équipe de créatifs se consacre à donner vie à votre vision avec des visuels époustouflants." },
          { icon: "ShieldCheck", title: "Résultats Prouvés", description: "Nous nous concentrons sur la fourniture de solutions qui stimulent l'engagement et la croissance de votre entreprise." },
          { icon: "LayoutTemplate", title: "Solutions sur Mesure", description: "Chaque projet est unique. Nous proposons des solutions personnalisées adaptées à votre marque et à vos objectifs." }
        ]
      },
      portfolio: {
        title: "Notre Travail en Action",
        subtitle: "Un aperçu des mondes numériques époustouflants que nous avons créés pour nos clients."
      },
      cta: {
        title: "Prêt à Démarrer Votre Projet ?",
        subtitle: "Parlons de la manière dont nous pouvons rehausser la présence numérique de votre marque. Contactez-nous pour une consultation gratuite.",
        buttonText: "Contactez-nous Maintenant"
      }
    },
    pages: {
        tour: {
            hero: { title: "Visitez des Lieux sur Votre Écran", subtitle: "Nous construisons une copie en ligne de votre espace pour que vous puissiez le montrer à tout le monde.", imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "Une Nouvelle Façon de Montrer Votre Lieu", paragraphs: ["Nous prenons des photos spéciales de votre lieu. Nous les assemblons pour que les gens puissent se promener à l'intérieur sur leur ordinateur ou leur téléphone.", "Cela aide les gens à voir à quel point votre lieu est génial avant de le visiter. Plus de gens voudront venir !"] },
            gallery: { title: "Regardez Nos Tours Cools", subtitle: "Voyez à quel point nos copies en ligne sont réelles et ce que vous pouvez en faire.", images: [ { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Salon moderne" }, { src: "https://images.unsplash.com/photo-1613553423748-a0058a031b31?q=80&w=2070&auto=format&fit=crop", alt: "Cuisine moderne" }, { src: "https://images.unsplash.com/photo-1556912173-35f1a5475858?q=80&w=2070&auto=format&fit=crop", alt: "Vue spacieuse de la cuisine" } ]},
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
                title: "Tarifs Simples pour Tout Espace",
                subtitle: "Choisissez le plan qui convient le mieux à votre propriété. Tous les prix sont un paiement unique, sans frais cachés.",
                plans: [
                    { name: "Forfait Google Maps 360°", price: "249€", period: "", features: ["360° Images Intérieur et Extérieur", "Téléchargé sur Google Maps", "87 % de clics en plus", "Plus de vues", "Meilleur classement sur Google et Google Maps", "Plus de clients"], isFeatured: true, oldPrice: "400€" },
                    { name: "Forfait Visite Virtuelle", price: "899€", period: "", features: ["Enregistrements illimités", "Vidéo avec lien pour site web et réseaux sociaux", "500 % de temps de navigation en plus sur votre site", "Meilleurs classements sur Google et Google Maps", "Consultation et planification personnelles", "Droits d'utilisation"], isFeatured: false, oldPrice: "1200€" },
                    { name: "Forfait Premium", price: "Prix sur demande", period: "", features: ["Visite personnalisée avec en-tête, musique, plan, vue 3D", "Marque personnalisée, vidéo, liens pour toutes les plateformes de médias sociaux", "Optimisation des médias sociaux et enregistrements par drone inclus", "Enregistrements illimités, multi-sites", "Droits d'utilisation", "Sans limites !", "Consultation et planification personnelles"], isFeatured: false },
                ]
            }
        },
        drone: {
            hero: { title: "Voyez le Monde d'en Haut", subtitle: "Cinématographie et photographie aériennes époustouflantes pour vos projets.", imageUrl: "https://images.unsplash.com/photo-1527977966376-52f50a954562?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "Une Perspective Plus Élevée", paragraphs: ["Nos drones de pointe capturent des vues à couper le souffle depuis le ciel. Nous fournissons des vidéos et des photos haute résolution pour l'immobilier, les événements et les inspections.", "Des prises de vue cinématiques FPV à la cartographie détaillée, nous apportons une perspective unique et puissante à votre histoire."] },
            gallery: {
                title: "Notre Travail Aérien", subtitle: "Explorez une collection de nos projets de photographie et de vidéographie par drone.",
                images: [
                    { src: "https://images.unsplash.com/photo-1508312923976-76a165b939e4?q=80&w=2070&auto=format&fit=crop", alt: "Prise de vue de drone d'un littoral" },
                    { src: "https://images.unsplash.com/photo-1519672103449-44b7d0e47829?q=80&w=1955&auto=format&fit=crop", alt: "Drone au-dessus d'une ville au coucher du soleil" },
                    { src: "https://images.unsplash.com/photo-1614765129699-ac749470817e?q=80&w=1974&auto=format&fit=crop", alt: "Vue de drone d'une route sinueuse dans une forêt" }
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
                title: "Forfaits de Service Aérien", subtitle: "Tarification flexible pour les projets de toutes tailles. Tous les prix sont un paiement unique, sans frais cachés.",
                plans: [
                    { name: "Forfait Photo par Drone", price: "399€", period: "", features: ["Images Ultra Haute Résolution du Ciel", "Maximum 5 Images", "1 Photo 360°", "1 Heure sur place", "Droits d'utilisation pour Site Web et Réseaux Sociaux", "Téléchargement Optionnel sur Google Maps"], isFeatured: false, oldPrice: "500€" },
                    { name: "Forfait Vidéo par Drone", price: "1399€", period: "", features: ["Vidéo éditée de 1 minute", "Lien pour Site Web et Réseaux Sociaux", "Maximum 20 Images", "4 Images 360° avec Visite Virtuelle à Points Interactifs", "Droits d'utilisation", "Téléchargement Optionnel sur Google Maps", "Consultation et Planification Personnelles"], isFeatured: true, oldPrice: "1800€" },
                    { name: "Forfait Drone Premium", price: "Prix sur demande", period: "", features: ["Enregistrements Illimités", "Multi-sites", "Images 360°, Séquences Vidéo, Photos Ultra Haute Résolution", "Séquences éditées et brutes incluses", "Marque Personnalisée, Liens pour toutes les Plateformes de Médias Sociaux", "Visite Virtuelle Premium utilisant l'imagerie du Drone", "Forfait d'Optimisation des Médias Sociaux", "Sans Limites !", "Consultation et Planification Personnelles"], isFeatured: false }
                ]
            }
        },
        // FIX: Added missing intro, gallery, and features properties to conform to PageContent type.
        website: {
            hero: { title: "Votre Vitrine Numérique", subtitle: "Des sites web beaux, rapides et efficaces qui développent votre entreprise.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "Conçu pour la Performance", paragraphs: ["Un excellent site web est plus qu'une simple brochure en ligne ; c'est un puissant outil de croissance. Nous concevons et construisons des sites web qui ne sont pas seulement magnifiques visuellement, mais aussi rapides, sécurisés et optimisés pour convertir les visiteurs en clients.", "Notre processus est collaboratif. Nous travaillons en étroite collaboration avec vous pour comprendre votre marque et vos objectifs, en veillant à ce que le produit final soit un reflet numérique parfait de votre entreprise."] },
            gallery: {
                title: "Notre Portfolio de Conception Web", subtitle: "Voyez comment nous avons aidé des entreprises comme la vôtre à réussir en ligne.",
                images: [
                    { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop", alt: "Code sur un écran" },
                    { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop", alt: "Mise en page de design web" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e26b49126ee?q=80&w=2070&auto=format&fit=crop", alt: "Designer travaillant sur un ordinateur portable" }
                ]
            },
            features: {
                title: "Ce qui est Inclus", subtitle: "Chaque site web que nous construisons est doté d'un ensemble de fonctionnalités puissantes.",
                items: [
                    { icon: "LayoutTemplate", title: "Conception Personnalisée", description: "Un design unique qui reflète l'identité de votre marque et engage votre public." },
                    { icon: "Smartphone", title: "Adaptatif Mobile", description: "Performance impeccable sur tous les appareils, des ordinateurs de bureau aux smartphones." },
                    { icon: "Rocket", title: "Performance Haute Vitesse", description: "Optimisé pour des temps de chargement rapides afin d'améliorer l'expérience utilisateur et le SEO." },
                    { icon: "Search", title: "Fondation SEO", description: "Construit avec les meilleures pratiques des moteurs de recherche pour vous aider à mieux vous classer sur Google." }
                ]
            },
            pricing: {
                title: "Tarifs de Développement de Site Web", subtitle: "Une tarification transparente pour lancer votre projet.",
                plans: [
                    { name: "Page de Destination", price: "1,500€", period: "unique", features: ["Site d'une seule page", "Formulaire de contact", "Adaptatif mobile", "Configuration SEO de base"], isFeatured: false },
                    { name: "Site d'Entreprise", price: "2,800€", period: "unique", features: ["Jusqu'à 10 pages", "Intégration CMS", "Conception personnalisée", "SEO avancé"], isFeatured: true, oldPrice: "3,500€" },
                    { name: "E-commerce", price: "à partir de 5,000€", period: "unique", features: ["Boutique en ligne complète", "Gestion des produits", "Passerelles de paiement", "Comptes clients"], isFeatured: false }
                ]
            }
        },
        photography: {
            hero: { title: "Capturez Vos Meilleurs Moments", subtitle: "Une photographie professionnelle qui raconte l'histoire de votre marque.", imageUrl: "https://images.unsplash.com/photo-1512295767273-b684ac7658fa?q=80&w=1935&auto=format&fit=crop" },
            intro: { title: "Des Images Qui Parlent", paragraphs: ["Une photographie de haute qualité est cruciale pour faire une forte première impression. Nous nous spécialisons dans la création de visuels époustouflants qui capturent l'essence de votre marque, de vos produits et de vos collaborateurs.", "Que ce soit pour votre site web, vos réseaux sociaux ou vos supports marketing, nos images vous feront sortir du lot."] },
            gallery: {
                title: "Photographie en Vedette", subtitle: "Une sélection de notre travail dans divers secteurs.",
                images: [
                    { src: "https://images.unsplash.com/photo-1556761175-b413da4b248d?q=80&w=1974&auto=format&fit=crop", alt: "Équipe professionnelle collaborant dans un bureau" },
                    { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop", alt: "Photo de produit élégante d'une montre" },
                    { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop", alt: "Intérieur de bureau moderne et épuré" }
                ]
            },
            features: {
                title: "Nos Services de Photographie", subtitle: "Des séances photo sur mesure pour répondre à vos besoins spécifiques.",
                items: [
                    { icon: "Building", title: "Architecturale", description: "Mise en valeur de propriétés commerciales et résidentielles avec de superbes photos." },
                    { icon: "Briefcase", title: "Portraits d'Entreprise", description: "Portraits professionnels de votre équipe pour les sites web et les profils." },
                    { icon: "ShoppingBag", title: "Photographie de Produit", description: "Images nettes et claires pour votre boutique en ligne et vos catalogues." },
                    { icon: "Utensils", title: "Cuisine & Boissons", description: "Des photos appétissantes qui rendent vos créations culinaires irrésistibles." }
                ]
            },
            pricing: {
                title: "Nos Forfaits Photographie",
                subtitle: "Choisissez la session parfaite pour capturer votre histoire. Tous les prix sont un paiement unique.",
                plans: [
                    { name: "Session Portrait", price: "249€", period: "", features: ["Idéal pour : Individus, couples, profils de médias sociaux et portraits professionnels.", "Durée : 45 minutes de prise de vue.", "10 photos haute résolution éditées professionnellement.", "Liens pour site web et réseaux sociaux", "Inclut la retouche de base."], isFeatured: true, oldPrice: "300€" },
                    { name: "Session Style de Vie", price: "449€", period: "", features: ["Parfait pour capturer des interactions naturelles et des moments spontanés.", "Durée : 1,5 heure de prise de vue.", "25 photos haute résolution éditées professionnellement.", "Liens pour site web et réseaux sociaux", "Inclut une retouche standard plus détaillée.", "Changement de tenue possible."], isFeatured: false, oldPrice: "650€" },
                    { name: "Marque & Entreprise", price: "1150€", period: "", features: ["Idéal pour : Entrepreneurs, indépendants, influenceurs et petites entreprises.", "Durée : 4 heures de prise de vue.", "Lieu : Plusieurs lieux qui correspondent au style de votre marque.", "40 photos haute résolution éditées professionnellement.", "Inclut les droits d'utilisation commerciale pour vos canaux.", "Consultation complète préalable pour définir les objectifs."], isFeatured: false }
                ]
            }
        }
    }
  },
  de: {
    nav: {
      home: "Startseite",
      tour: "360°",
      drone: "Drohne",
      website: "Website",
      photography: "Fotografie",
      contact: "Beratung",
      getStarted: "Loslegen",
    },
    hero: {
      title: "Lassen Sie Ihr Unternehmen gut aussehen",
      subtitle: "Mit coolen digitalen Welten",
      description: "Wir erstellen erstaunliche virtuelle Touren, machen großartige Bilder und bauen coole Websites. Das hilft mehr Leuten, Ihr Unternehmen zu sehen und zu mögen.",
    },
    services: {
      title: "Was wir am besten können",
      subtitle: "Wir bieten spezielle digitale Dienstleistungen an, um Ihre Marke hervorzuheben. Wir erledigen jede einzelne sehr sorgfältig.",
      learnMore: "Mehr sehen",
      list: [
        { id: 'tour', title: "Coole 360°-Touren", description: "Wir erstellen eine Online-Kopie Ihres Ortes, die sich echt anfühlt. Die Leute können sich umsehen und fühlen, als wären sie wirklich da.", features: ["Super klare Bilder", "Klickbare Info-Punkte", "Ihr eigenes Logo & Farben", "Sehen, wer besucht hat"], oldPrice: "999€", newPrice: "749€" },
        { id: 'photography', title: "Tolle Fotos für Unternehmen", description: "Wir erzählen die Geschichte Ihrer Marke mit schönen Bildern. Unsere Fotos helfen den Leuten, sich mit Ihrem Unternehmen verbunden zu fühlen.", features: ["Fotos von Gebäuden", "Bilder von Ihrem Team", "Fotos von Ihren Produkten", "Bilder von Veranstaltungen"], oldPrice: "800€", newPrice: "650€" },
        { id: 'drone', title: "Fantastische Drohnenvideos", description: "Wir verwenden Drohnen, um erstaunliche Videos vom Himmel zu bekommen. Sehen Sie Ihre Welt von hoch oben.", features: ["Videos in Filmqualität", "Schnelle Action-Drohnenaufnahmen", "Detaillierte Karten erstellen", "Gebäude überprüfen"], oldPrice: "1,200€", newPrice: "950€" },
        { id: 'web', title: "Maßgeschneiderte Website", description: "Holen Sie sich eine spezielle Website, die nur für Sie gemacht ist. Unsere Websites sind schnell, sehen gut aus und helfen Ihrer Marke zu wachsen.", features: ["Einfach zu bedienendes Design", "Dinge online verkaufen", "Leuten helfen, Sie zu finden", "Wir halten sie am Laufen"], oldPrice: "3,500€", newPrice: "2,800€" },
      ],
    },
    contact: {
      title: "Sprechen Sie mit uns",
      subtitle: "Haben Sie eine coole Idee? Füllen Sie das Formular unten aus und lassen Sie uns darüber reden!",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Erzählen Sie uns von Ihrer Idee",
      submitButton: "Nachricht senden",
      formSuccess: "Verstanden! Wir melden uns bald bei Ihnen.",
      formError: "Hoppla! Bitte füllen Sie alle Felder aus.",
    },
    footer: {
      rights: "Alles auf dieser Seite gehört uns.",
    },
    homePage: {
      whyChooseUs: {
        title: "Warum VirtualSpin wählen?",
        subtitle: "Wir verbinden Kreativität mit Technologie, um unvergleichliche digitale Erlebnisse zu liefern.",
        items: [
          { icon: "Rocket", title: "Spitzentechnologie", description: "Wir verwenden die neuesten Tools und Technologien, um immersive und leistungsstarke digitale Assets zu erstellen." },
          { icon: "Eye", title: "Kreative Exzellenz", description: "Unser Kreativteam widmet sich der Verwirklichung Ihrer Vision mit atemberaubenden visuellen Darstellungen." },
          { icon: "ShieldCheck", title: "Nachgewiesene Ergebnisse", description: "Wir konzentrieren uns auf die Bereitstellung von Lösungen, die das Engagement und das Wachstum Ihres Unternehmens fördern." },
          { icon: "LayoutTemplate", title: "Maßgeschneiderte Lösungen", description: "Jedes Projekt ist einzigartig. Wir bieten maßgeschneiderte Lösungen, die zu Ihrer spezifischen Marke und Ihren Zielen passen." }
        ]
      },
      portfolio: {
        title: "Unsere Arbeit in Aktion",
        subtitle: "Ein Einblick in die atemberaubenden digitalen Welten, die wir für unsere Kunden geschaffen haben."
      },
      cta: {
        title: "Bereit, Ihr Projekt zu starten?",
        subtitle: "Lassen Sie uns darüber sprechen, wie wir die digitale Präsenz Ihrer Marke verbessern können. Kontaktieren Sie uns für eine kostenlose Beratung.",
        buttonText: "Kontaktieren Sie uns jetzt"
      }
    },
    pages: {
        tour: {
            hero: { title: "Gehen Sie durch Orte auf Ihrem Bildschirm", subtitle: "Wir erstellen eine Online-Kopie Ihres Raumes, damit Sie ihn jedem zeigen können.", imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "Eine neue Art, Ihren Ort zu zeigen", paragraphs: ["Wir machen spezielle Bilder von Ihrem Ort. Wir fügen sie zusammen, damit die Leute auf ihrem Computer oder Telefon darin herumlaufen können.", "Es hilft den Leuten zu sehen, wie großartig Ihr Ort ist, bevor sie ihn besuchen. Mehr Leute werden kommen wollen!"] },
            gallery: { title: "Schauen Sie sich unsere coolen Touren an", subtitle: "Sehen Sie, wie echt unsere Online-Kopien aussehen und was Sie damit machen können.", images: [ { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Modernes Wohnzimmer" }, { src: "https://images.unsplash.com/photo-1613553423748-a0058a031b31?q=80&w=2070&auto=format&fit=crop", alt: "Moderne Küche" }, { src: "https://images.unsplash.com/photo-1556912173-35f1a5475858?q=80&w=2070&auto=format&fit=crop", alt: "Geräumige Küchenansicht" } ]},
            features: {
                title: "Funktionen, die Sie eintauchen lassen",
                subtitle: "Unsere virtuellen Touren sind vollgepackt mit Funktionen, um ein ansprechendes Erlebnis zu schaffen.",
                items: [
                    { icon: "Eye", title: "Hochauflösende Visuals", description: "Kristallklare Bilder, die Ihnen das Gefühl geben, wirklich dort zu sein." },
                    { icon: "MousePointerClick", title: "Interaktive Hotspots", description: "Klicken Sie auf Objekte, um weitere Informationen zu erhalten, Videos anzusehen oder Fotos zu sehen." },
                    { icon: "Smartphone", title: "Mobil- & VR-fähig", description: "Zugänglich auf jedem Gerät, von Desktops über Smartphones bis hin zu VR-Headsets." },
                    { icon: "Share2", title: "Einfach zu teilen", description: "Betten Sie Ihre Tour auf Ihrer Website ein oder teilen Sie sie in den sozialen Medien mit einem einfachen Link." },
                ]
            },
            pricing: {
                title: "Einfache Preise für jeden Raum",
                subtitle: "Wählen Sie den Plan, der am besten zu Ihrer Immobilie passt. Alle Preise sind eine einmalige Zahlung, keine versteckten Kosten.",
                plans: [
                    { name: "360° Google Maps Paket", price: "249€", period: "", features: ["360° Bilder Innen und Außen", "Auf Google Maps hochgeladen", "87 % mehr Klicks", "Mehr Aufrufe", "Besseres Ranking bei Google und Google Maps", "Mehr Kunden"], isFeatured: true, oldPrice: "400€" },
                    { name: "Virtuelle Tour Paket", price: "899€", period: "", features: ["Unbegrenzte Aufnahmen", "Video mit Link für Website und soziale Medien", "500 % mehr Verweildauer auf Ihrer Website", "Top-Rankings bei Google und Google Maps", "Persönliche Beratung und Planung", "Nutzungsrechte"], isFeatured: false, oldPrice: "1200€" },
                    { name: "Premium-Paket", price: "Preis auf Anfrage", period: "", features: ["Benutzerdefinierte Tour mit Header, Musik, Grundriss, 3D-Modellansicht", "Benutzerdefiniertes Branding, Video, Links für alle Social-Media-Plattformen", "Social-Media-Optimierung und Drohnenaufnahmen inklusive", "Unbegrenzte Aufnahmen, mehrere Standorte", "Nutzungsrechte", "Keine Grenzen!", "Persönliche Beratung und Planung"], isFeatured: false },
                ]
            }
        },
        drone: {
            hero: { title: "Sehen Sie die Welt von oben", subtitle: "Atemberaubende Luftbildkinematographie und -fotografie für Ihre Projekte.", imageUrl: "https://images.unsplash.com/photo-1527977966376-52f50a954562?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "Eine höhere Perspektive", paragraphs: ["Unsere hochmodernen Drohnen erfassen atemberaubende Ansichten vom Himmel. Wir liefern hochauflösende Videos und Fotos für Immobilien, Veranstaltungen und Inspektionen.", "Von filmischen FPV-Aufnahmen bis hin zur detaillierten Kartierung bringen wir eine einzigartige und kraftvolle Perspektive in Ihre Geschichte."] },
            gallery: {
                title: "Unsere Luftaufnahmen", subtitle: "Entdecken Sie eine Sammlung unserer Drohnenfotografie- und -videografieprojekte.",
                images: [
                    { src: "https://images.unsplash.com/photo-1508312923976-76a165b939e4?q=80&w=2070&auto=format&fit=crop", alt: "Drohnenaufnahme einer Küste" },
                    { src: "https://images.unsplash.com/photo-1519672103449-44b7d0e47829?q=80&w=1955&auto=format&fit=crop", alt: "Drohne über einer Stadt bei Sonnenuntergang" },
                    { src: "https://images.unsplash.com/photo-1614765129699-ac749470817e?q=80&w=1974&auto=format&fit=crop", alt: "Drohnenansicht einer kurvenreichen Straße im Wald" }
                ]
            },
            features: {
                title: "Erweiterte Drohnenfähigkeiten", subtitle: "Wir verwenden die neueste Technologie, um außergewöhnliche Ergebnisse zu liefern.",
                items: [
                    { icon: "Film", title: "4K Kinovideo", description: "Erfassen Sie Ihr Motiv in atemberaubender, filmreifer hoher Auflösung." },
                    { icon: "Building", title: "Inspektion & Vermessung", description: "Inspizieren Sie Gebäude, Dächer und Infrastruktur sicher und effizient." },
                    { icon: "Map", title: "2D/3D-Kartierung", description: "Erstellen Sie detaillierte Orthomosaikkarten und 3D-Modelle zur Analyse und Planung." },
                    { icon: "Rocket", title: "FPV-Durchflüge", description: "Dynamische und immersive Ich-Perspektiven-Touren durch Innen- und Außenbereiche." }
                ]
            },
            pricing: {
                title: "Luftaufnahmen-Servicepakete", subtitle: "Flexible Preise für Projekte jeder Größenordnung. Alle Preise sind eine einmalige Zahlung, keine versteckten Kosten.",
                plans: [
                    { name: "Drohnenfoto-Paket", price: "399€", period: "", features: ["Ultrahochauflösende Bilder vom Himmel", "Maximal 5 Bilder", "1 360°-Foto", "1 Stunde vor Ort", "Nutzungsrechte für Website und soziale Netzwerke", "Optionaler Upload auf Google Maps"], isFeatured: false, oldPrice: "500€" },
                    { name: "Drohnenvideo-Paket", price: "1399€", period: "", features: ["1 Minute bearbeitetes Video", "Link für Website und soziale Medien", "Maximal 20 Bilder", "4 360°-Bilder mit interaktiver Hotspot-Virtueller-Tour", "Nutzungsrechte", "Optionaler Upload auf Google Maps", "Persönliche Beratung und Planung"], isFeatured: true, oldPrice: "1800€" },
                    { name: "Premium-Drohnen-Paket", price: "Preis auf Anfrage", period: "", features: ["Unbegrenzte Aufnahmen", "Mehrere Standorte", "360°-Bilder, Videomaterial, ultrahochauflösende Fotos", "Bearbeitetes und Rohmaterial inklusive", "Individuelles Branding, Links für alle Social-Media-Plattformen", "Premium Virtuelle Tour mit Drohnenbildern", "Social-Media-Optimierungspaket", "Keine Grenzen!", "Persönliche Beratung und Planung"], isFeatured: false }
                ]
            }
        },
        // FIX: Added missing intro, gallery, and features properties to conform to PageContent type.
        website: {
            hero: { title: "Ihr digitaler Laden", subtitle: "Schöne, schnelle und effektive Websites, die Ihr Unternehmen wachsen lassen.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "Für Leistung gebaut", paragraphs: ["Eine großartige Website ist mehr als eine Online-Broschüre; sie ist ein leistungsstarkes Werkzeug für Wachstum. Wir entwerfen und erstellen Websites, die nicht nur visuell beeindruckend, sondern auch schnell, sicher und optimiert sind, um Besucher in Kunden zu verwandeln.", "Unser Prozess ist kollaborativ. Wir arbeiten eng mit Ihnen zusammen, um Ihre Marke und Ihre Ziele zu verstehen und sicherzustellen, dass das Endprodukt ein perfektes digitales Abbild Ihres Unternehmens ist."] },
            gallery: {
                title: "Unser Webdesign-Portfolio", subtitle: "Sehen Sie, wie wir Unternehmen wie Ihrem geholfen haben, online erfolgreich zu sein.",
                images: [
                    { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop", alt: "Code auf einem Bildschirm" },
                    { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop", alt: "Webdesign-Layout" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e26b49126ee?q=80&w=2070&auto=format&fit=crop", alt: "Designer arbeitet an einem Laptop" }
                ]
            },
            features: {
                title: "Was enthalten ist", subtitle: "Jede von uns erstellte Website verfügt über eine Reihe leistungsstarker Kernfunktionen.",
                items: [
                    { icon: "LayoutTemplate", title: "Individuelles Design", description: "Ein einzigartiges Design, das Ihre Markenidentität widerspiegelt und Ihr Publikum anspricht." },
                    { icon: "Smartphone", title: "Mobil-responsiv", description: "Tadellose Leistung auf allen Geräten, von Desktops bis hin zu Smartphones." },
                    { icon: "Rocket", title: "Hochgeschwindigkeitsleistung", description: "Optimiert für schnelle Ladezeiten, um die Benutzererfahrung und das SEO zu verbessern." },
                    { icon: "Search", title: "SEO-Grundlage", description: "Erstellt nach den besten Praktiken für Suchmaschinen, um Ihnen zu einem höheren Ranking bei Google zu verhelfen." }
                ]
            },
            pricing: {
                title: "Preise für die Website-Entwicklung", subtitle: "Transparente Preise, um Ihr Projekt auf den Weg zu bringen.",
                plans: [
                    { name: "Landing Page", price: "1.500€", period: "einmalig", features: ["Einzelseiten-Website", "Kontaktformular", "Mobil-responsiv", "Grundlegende SEO-Einrichtung"], isFeatured: false },
                    { name: "Unternehmenswebsite", price: "2.800€", period: "einmalig", features: ["Bis zu 10 Seiten", "CMS-Integration", "Individuelles Design", "Fortgeschrittenes SEO"], isFeatured: true, oldPrice: "3,500€" },
                    { name: "E-Commerce", price: "ab 5.000€", period: "einmalig", features: ["Vollständiger Online-Shop", "Produktverwaltung", "Zahlungsgateways", "Kundenkonten"], isFeatured: false }
                ]
            }
        },
        photography: {
            hero: { title: "Fangen Sie Ihre besten Momente ein", subtitle: "Professionelle Fotografie, die die Geschichte Ihrer Marke erzählt.", imageUrl: "https://images.unsplash.com/photo-1512295767273-b684ac7658fa?q=80&w=1935&auto=format&fit=crop" },
            intro: { title: "Bilder, die sprechen", paragraphs: ["Hochwertige Fotografie ist entscheidend für einen starken ersten Eindruck. Wir sind darauf spezialisiert, atemberaubende Visuals zu erstellen, die die Essenz Ihrer Marke, Ihrer Produkte und Ihrer Mitarbeiter einfangen.", "Ob für Ihre Website, soziale Medien oder Marketingmaterialien, unsere Bilder werden Sie hervorheben."] },
            gallery: {
                title: "Ausgewählte Fotografie", subtitle: "Eine Auswahl unserer Arbeiten aus verschiedenen Branchen.",
                images: [
                    { src: "https://images.unsplash.com/photo-1556761175-b413da4b248d?q=80&w=1974&auto=format&fit=crop", alt: "Professionelles Team arbeitet in einem Büro zusammen" },
                    { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop", alt: "Stilvolle Produktaufnahme einer Uhr" },
                    { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop", alt: "Modernes und sauberes Bürointerieur" }
                ]
            },
            features: {
                title: "Unsere Fotodienstleistungen", subtitle: "Maßgeschneiderte Fotoshootings, um Ihre spezifischen Bedürfnisse zu erfüllen.",
                items: [
                    { icon: "Building", title: "Architektur", description: "Präsentation von Gewerbe- und Wohnimmobilien mit atemberaubenden Fotos." },
                    { icon: "Briefcase", title: "Unternehmensporträts", description: "Professionelle Porträts Ihres Teams für Websites und Profile." },
                    { icon: "ShoppingBag", title: "Produktfotografie", description: "Saubere, scharfe Bilder für Ihren E-Commerce-Shop und Ihre Kataloge." },
                    { icon: "Utensils", title: "Essen & Trinken", description: "Köstlich aussehende Fotos, die Ihre kulinarischen Kreationen unwiderstehlich machen." }
                ]
            },
            pricing: {
                title: "Unsere Fotografie-Pakete",
                subtitle: "Wählen Sie die perfekte Session, um Ihre Geschichte festzuhalten. Alle Preise sind eine einmalige Zahlung.",
                plans: [
                    { name: "Porträtsession", price: "249€", period: "", features: ["Ideal für: Einzelpersonen, Paare, Social-Media-Profile und professionelle Porträts.", "Dauer: 45 Minuten Aufnahmezeit.", "10 professionell bearbeitete, hochauflösende Fotos.", "Links für Website und Social Media", "Inklusive grundlegender Retusche."], isFeatured: true, oldPrice: "300€" },
                    { name: "Lifestyle-Session", price: "449€", period: "", features: ["Perfekt, um natürliche Interaktionen und spontane Momente festzuhalten.", "Dauer: 1,5 Stunden Aufnahmezeit.", "25 professionell bearbeitete, hochauflösende Fotos.", "Links für Website und Social Media", "Inklusive standardmäßiger, detaillierterer Retusche.", "Outfitwechsel möglich."], isFeatured: false, oldPrice: "650€" },
                    { name: "Branding & Business", price: "1150€", period: "", features: ["Ideal für: Unternehmer, Freiberufler, Influencer und kleine Unternehmen.", "Dauer: 4 Stunden Aufnahmezeit.", "Ort: Mehrere Orte, die zum Stil Ihrer Marke passen.", "40 professionell bearbeitete, hochauflösende Fotos.", "Inklusive kommerzieller Nutzungsrechte für Ihre Kanäle.", "Umfassende Vorbesprechung zur Festlegung der Ziele."], isFeatured: false }
                ]
            }
        }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      tour: "360°",
      drone: "درون",
      website: "موقع ويب",
      photography: "تصوير",
      contact: "استشارة",
      getStarted: "ابدأ",
    },
    hero: {
      title: "اجعل عملك يبدو رائعًا",
      subtitle: "مع عوالم رقمية رائعة",
      description: "نحن نصنع جولات افتراضية مذهلة، ونلتقط صورًا رائعة، ونبني مواقع ويب رائعة. هذا يساعد المزيد من الناس على رؤية عملك والإعجاب به.",
    },
    services: {
      title: "أفضل ما نقوم به",
      subtitle: "نحن نقدم خدمات رقمية خاصة لجعل علامتك التجارية تبرز. نقوم بكل واحدة بعناية فائقة.",
      learnMore: "شاهد المزيد",
      list: [
        { id: 'tour', title: "جولات 360 درجة رائعة", description: "نبني نسخة من مكانك على الإنترنت تبدو حقيقية. يمكن للناس النظر حولهم والشعور وكأنهم هناك حقًا.", features: ["صور فائقة الوضوح", "نقاط معلومات قابلة للنقر", "شعارات وألوان خاصة بك", "انظر من زار"], oldPrice: "999€", newPrice: "749€" },
        { id: 'photography', title: "صور رائعة للأعمال", description: "نروي قصة علامتك التجارية بصور جميلة. تساعد صورنا الناس على الشعور بالارتباط بعملك.", features: ["صور للمباني", "صور لفريقك", "صور لمنتجاتك", "صور من الأحداث"], oldPrice: "800€", newPrice: "650€" },
        { id: 'drone', title: "فيديوهات درون مدهشة", description: "نستخدم طائرات بدون طيار للحصول على فيديوهات مذهلة من السماء. شاهد عالمك من الأعلى.", features: ["فيديوهات بجودة سينمائية", "لقطات درون سريعة الحركة", "إنشاء خرائط مفصلة", "فحص المباني"], oldPrice: "1,200€", newPrice: "950€" },
        { id: 'web', title: "موقع ويب مخصص", description: "احصل على موقع ويب خاص مصنوع خصيصًا لك. مواقعنا سريعة، تبدو جيدة، وتساعد علامتك التجارية على النمو.", features: ["تصميم سهل الاستخدام", "بيع الأشياء عبر الإنترنت", "مساعدة الناس في العثور عليك", "نحن نحافظ على تشغيله"], oldPrice: "3,500€", newPrice: "2,800€" },
      ],
    },
    contact: {
      title: "تحدث إلينا",
      subtitle: "هل لديك فكرة رائعة؟ املأ النموذج أدناه ودعنا نتحدث عنها!",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني",
      messagePlaceholder: "أخبرنا بفكرتك",
      submitButton: "إرسال رسالة",
      formSuccess: "تم الاستلام! سنتحدث معك قريبًا.",
      formError: "عفوًا! يرجى ملء جميع الخانات.",
    },
    footer: {
      rights: "كل شيء في هذا الموقع ملكنا.",
    },
    homePage: {
      whyChooseUs: {
        title: "لماذا تختار VirtualSpin؟",
        subtitle: "نحن نمزج بين الإبداع والتكنولوجيا لتقديم تجارب رقمية لا مثيل لها.",
        items: [
          { icon: "Rocket", title: "تقنية متطورة", description: "نستخدم أحدث الأدوات والتقنيات لإنشاء أصول رقمية غامرة وعالية الأداء." },
          { icon: "Eye", title: "تميز إبداعي", description: "فريقنا من المبدعين مكرس لإحياء رؤيتك بصور مذهلة." },
          { icon: "ShieldCheck", title: "نتائج مثبتة", description: "نحن نركز على تقديم حلول تدفع المشاركة والنمو لعملك." },
          { icon: "LayoutTemplate", title: "حلول مخصصة", description: "كل مشروع فريد من نوعه. نحن نقدم حلولًا مخصصة تناسب علامتك التجارية وأهدافك المحددة." }
        ]
      },
      portfolio: {
        title: "أعمالنا في الواقع",
        subtitle: "لمحة عن العوالم الرقمية المذهلة التي أنشأناها لعملائنا."
      },
      cta: {
        title: "هل أنت مستعد لبدء مشروعك؟",
        subtitle: "دعنا نتحدث عن كيف يمكننا الارتقاء بالوجود الرقمي لعلامتك التجارية. تواصل معنا للحصول على استشارة مجانية.",
        buttonText: "اتصل بنا الآن"
      }
    },
    pages: {
        tour: {
            hero: { title: "تجول في الأماكن على شاشتك", subtitle: "نبني نسخة عبر الإنترنت من مساحتك حتى تتمكن من عرضها على أي شخص.", imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "طريقة جديدة لعرض مكانك", paragraphs: ["نلتقط صورًا خاصة لمكانك. نجمعها معًا حتى يتمكن الناس من التجول بداخلها على أجهزة الكمبيوتر أو الهواتف الخاصة بهم.", "يساعد هذا الناس على رؤية كم هو رائع مكانك قبل زيارته. سيرغب المزيد من الناس في المجيء!"] },
            gallery: { title: "انظر إلى جولاتنا الرائعة", subtitle: "شاهد كيف تبدو نسخنا عبر الإنترنت حقيقية وما يمكنك القيام به بها.", images: [ { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "غرفة معيشة حديثة" }, { src: "https://images.unsplash.com/photo-1613553423748-a0058a031b31?q=80&w=2070&auto=format&fit=crop", alt: "مطبخ حديث" }, { src: "https://images.unsplash.com/photo-1556912173-35f1a5475858?q=80&w=2070&auto=format&fit=crop", alt: "منظر مطبخ واسع" } ]},
            features: {
                title: "ميزات تغمرك",
                subtitle: "جولاتنا الافتراضية مليئة بالميزات لخلق تجربة جذابة.",
                items: [
                    { icon: "Eye", title: "مرئيات عالية الوضوح", description: "صور واضحة تمامًا تجعلك تشعر وكأنك هناك حقًا." },
                    { icon: "MousePointerClick", title: "نقاط تفاعلية", description: "انقر على الكائنات للحصول على مزيد من المعلومات أو مشاهدة مقاطع الفيديو أو الصور." },
                    { icon: "Smartphone", title: "جاهز للجوال والواقع الافتراضي", description: "يمكن الوصول إليها على أي جهاز، من أجهزة سطح المكتب إلى الهواتف الذكية وسماعات الواقع الافتراضي." },
                    { icon: "Share2", title: "سهل المشاركة", description: "قم بتضمين جولتك على موقع الويب الخاص بك أو شاركها على وسائل التواصل الاجتماعي برابط بسيط." },
                ]
            },
            pricing: {
                title: "تسعير بسيط لأي مساحة",
                subtitle: "اختر الخطة التي تناسب الممتلكات الخاصة بك. جميع الأسعار هي دفعة لمرة واحدة ، بدون تكاليف خفية.",
                plans: [
                    { name: "باقة خرائط جوجل 360 درجة", price: "249€", period: "", features: ["360° صور داخلية وخارجية", "تم الرفع على خرائط جوجل", "87٪ نقرات أكثر", "المزيد من المشاهدات", "ترتيب أفضل على جوجل وخرائط جوجل", "المزيد من العملاء"], isFeatured: true, oldPrice: "400€" },
                    { name: "باقة الجولة الاftراضية", price: "899€", period: "", features: ["تسجيلات غير محدودة", "فيديو مع رابط للموقع ووسائل التواصل الاجتماعي", "500٪ وقت تصفح أطول على موقعك", "أعلى التصنيفات على جوجل وخرائط جوجل", "استشارة وتخطيط شخصي", "حقوق الاستخدام"], isFeatured: false, oldPrice: "1200€" },
                    { name: "الباقة المميزة", price: "السعر عند الطلب", period: "", features: ["جولة مخصصة مع رأس وتذييل وموسيقى ومخطط طابق وعرض نموذج ثلاثي الأبعاد", "علامة تجارية مخصصة وفيديو وروابط لجميع منصات التواصل الاجتماعي", "تحسين وسائل التواصل الاجتماعي وتسجيلات الدرون متضمنة", "تسجيلات غير محدودة، مواقع متعددة", "حقوق الاستخدام", "بلا حدود!", "استشارة وتخطيط شخصي"], isFeatured: false },
                ]
            }
        },
        drone: {
            hero: { title: "شاهد العالم من الأعلى", subtitle: "تصوير سينمائي جوي مذهل وصور لمشاريعك.", imageUrl: "https://images.unsplash.com/photo-1527977966376-52f50a954562?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "منظور أعلى", paragraphs: ["تلتقط طائراتنا بدون طيار الحديثة مناظر خلابة من السماء. نحن نقدم فيديو وصور عالية الدقة للعقارات والفعاليات والتفتيش.", "من لقطات FPV السينمائية إلى رسم الخرائط المفصل، نقدم منظورًا فريدًا وقويًا لقصتك."] },
            gallery: {
                title: "أعمالنا الجوية", subtitle: "استكشف مجموعة من مشاريعنا في التصوير الفوتوغرافي والفيديو بالطائرات بدون طيار.",
                images: [
                    { src: "https://images.unsplash.com/photo-1508312923976-76a165b939e4?q=80&w=2070&auto=format&fit=crop", alt: "لقطة درون لساحل" },
                    { src: "https://images.unsplash.com/photo-1519672103449-44b7d0e47829?q=80&w=1955&auto=format&fit=crop", alt: "درون فوق مدينة عند غروب الشمس" },
                    { src: "https://images.unsplash.com/photo-1614765129699-ac749470817e?q=80&w=1974&auto=format&fit=crop", alt: "منظر درون لطريق متعرج في غابة" }
                ]
            },
            features: {
                title: "قدرات درون متقدمة", subtitle: "نحن نستخدم أحدث التقنيات لتقديم نتائج استثنائية.",
                items: [
                    { icon: "Film", title: "فيديو سينمائي 4K", description: "التقط موضوعك بدقة عالية مذهلة بجودة الأفلام." },
                    { icon: "Building", title: "التفتيش والمسح", description: "افحص المباني والأسطح والبنية التحتية بأمان وكفاءة." },
                    { icon: "Map", title: "رسم خرائط 2D/3D", description: "أنشئ خرائط فسيفساء متعامدة مفصلة ونماذج ثلاثية الأبعاد للتحليل والتخطيط." },
                    { icon: "Rocket", title: "جولات FPV", description: "جولات ديناميكية وغامرة من منظور الشخص الأول للداخل والخارج." }
                ]
            },
            pricing: {
                title: "باقات خدمة الطائرات بدون طيار", subtitle: "تسعير مرن للمشاريع من جميع الأحجام. جميع الأسعار هي دفعة لمرة واحدة ، بدون تكاليف خفية.",
                plans: [
                    { name: "باقة صور الدرون", price: "399€", period: "", features: ["صور فائقة الدقة من السماء", "حد أقصى 5 صور", "صورة واحدة 360 درجة", "ساعة واحدة في الموقع", "حقوق الاستخدام للموقع ووسائل التواصل الاجتماعي", "رفع اختياري على خرائط جوجل"], isFeatured: false, oldPrice: "500€" },
                    { name: "باقة فيديو الدرون", price: "1399€", period: "", features: ["فيديو معدل لمدة دقيقة واحدة", "رابط للموقع ووسائل التواصل الاجتماعي", "20 صورة كحد أقصى", "4 صور 360 درجة مع جولة افتراضية بنقاط تفاعلية", "حقوق الاستخدام", "رفع اختياري على خرائط جوجل", "استشارة وتخطيط شخصي"], isFeatured: true, oldPrice: "1800€" },
                    { name: "باقة درون المميزة", price: "السعر عند الطلب", period: "", features: ["تسجيلات غير محدودة", "مواقع متعددة", "صور 360 درجة، لقطات فيديو، صور فائقة الدقة", "لقطات معدلة وخامة متضمنة", "علامة تجارية مخصصة، روابط لجميع منصات التواصل الاجتماعي", "جولة افتراضية مميزة باستخدام صور الدرون", "باقة تحسين وسائل التواصل الاجتماعي", "بلا حدود!", "استشارة وتخطيط شخصي"], isFeatured: false }
                ]
            }
        },
        // FIX: Added missing intro, gallery, and features properties to conform to PageContent type.
        website: {
            hero: { title: "واجهتك الرقمية", subtitle: "مواقع ويب جميلة وسريعة وفعالة تنمي أعمالك.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
            intro: { title: "مصمم للأداء", paragraphs: ["الموقع الإلكتروني الرائع هو أكثر من مجرد كتيب عبر الإنترنت؛ إنه أداة قوية للنمو. نحن نصمم ونبني مواقع ويب ليست فقط مذهلة بصريًا ولكنها أيضًا سريعة وآمنة ومحسّنة لتحويل الزوار إلى عملاء.", "عمليتنا تعاونية. نحن نعمل عن كثب معك لفهم علامتك التجارية وأهدافك، مما يضمن أن المنتج النهائي هو انعكاس رقمي مثالي لعملك."] },
            gallery: {
                title: "معرض أعمالنا في تصميم الويب", subtitle: "شاهد كيف ساعدنا الشركات مثل شركتك على النجاح عبر الإنترنت.",
                images: [
                    { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop", alt: "كود على شاشة" },
                    { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop", alt: "تخطيط تصميم ويب" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e26b49126ee?q=80&w=2070&auto=format&fit=crop", alt: "مصمم يعمل على كمبيوتر محمول" }
                ]
            },
            features: {
                title: "ماذا يتضمن", subtitle: "كل موقع ويب نقوم ببنائه يأتي مع مجموعة أساسية من الميزات القوية.",
                items: [
                    { icon: "LayoutTemplate", title: "تصميم مخصص", description: "تصميم فريد يعكس هوية علامتك التجارية ويجذب جمهورك." },
                    { icon: "Smartphone", title: "متجاوب مع الجوال", description: "أداء لا تشوبه شائبة على جميع الأجهزة، من أجهزة الكمبيوتر المكتبية إلى الهواتف الذكية." },
                    { icon: "Rocket", title: "أداء عالي السرعة", description: "محسّن لأوقات تحميل سريعة لتحسين تجربة المستخدم وتحسين محركات البحث." },
                    { icon: "Search", title: "أساس تحسين محركات البحث", description: "مبني بأفضل ممارسات محركات البحث لمساعدتك في الحصول على ترتيب أعلى في جوجل." }
                ]
            },
            pricing: {
                title: "تسعير تطوير مواقع الويب", subtitle: "تسعير شفاف لإطلاق مشروعك.",
                plans: [
                    { name: "صفحة هبوط", price: "1,500€", period: "مرة واحدة", features: ["موقع من صفحة واحدة", "نموذج اتصال", "متجاوب مع الجوّال", "إعداد أساسي لمحركات البحث"], isFeatured: false },
                    { name: "موقع أعمال", price: "2,800€", period: "مرة واحدة", features: ["ما يصل إلى 10 صفحات", "تكامل نظام إدارة المحتوى", "تصميم مخصص", "تحسين متقدم لمحركات البحث"], isFeatured: true, oldPrice: "3,500€" },
                    { name: "تجارة إلكترونية", price: "من 5,000€", period: "مرة واحدة", features: ["متجر كامل عبر الإنترنت", "إدارة المنتجات", "بوابات الدفع", "حسابات العملاء"], isFeatured: false }
                ]
            }
        },
        photography: {
            hero: { title: "التقط أفضل لحظاتك", subtitle: "تصوير احترافي يروي قصة علامتك التجارية.", imageUrl: "https://images.unsplash.com/photo-1512295767273-b684ac7658fa?q=80&w=1935&auto=format&fit=crop" },
            intro: { title: "صور تتحدث", paragraphs: ["التصوير الفوتوغرافي عالي الجودة أمر حاسم لترك انطباع أول قوي. نحن متخصصون في إنشاء صور مذهلة تجسد جوهر علامتك التجارية ومنتجاتك وأفرادك.", "سواء كان ذلك لموقعك على الويب أو وسائل التواصل الاجتماعي أو المواد التسويقية، فإن صورنا ستجعلك تبرز."] },
            gallery: {
                title: "تصوير مميز", subtitle: "مجموعة مختارة من أعمالنا في مختلف الصناعات.",
                images: [
                    { src: "https://images.unsplash.com/photo-1556761175-b413da4b248d?q=80&w=1974&auto=format&fit=crop", alt: "فريق محترف يتعاون في مكتب" },
                    { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop", alt: "لقطة منتج أنيقة لساعة" },
                    { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop", alt: "تصميم داخلي لمكتب حديث ونظيف" }
                ]
            },
            features: {
                title: "خدمات التصوير الفوتوغرافي لدينا", subtitle: "جلسات تصوير مصممة لتلبية احتياجاتك الخاصة.",
                items: [
                    { icon: "Building", title: "معماري", description: "عرض العقارات التجارية والسكنية بصور مذهلة." },
                    { icon: "Briefcase", title: "صور شخصية للشركات", description: "صور احترافية لفريقك للمواقع الإلكترونية والملفات الشخصية." },
                    { icon: "ShoppingBag", title: "تصوير المنتجات", description: "صور نظيفة وواضحة لمتجرك الإلكتروني وكتالوجاتك." },
                    { icon: "Utensils", title: "الطعام والمشروبات", description: "صور شهية تجعل إبداعاتك في الطهي لا تقاوم." }
                ]
            },
            pricing: {
                title: "باقات التصوير الفوتوغرافي لدينا",
                subtitle: "اختر الجلسة المثالية لالتقاط قصتك. جميع الأسعار هي دفعة لمرة واحدة.",
                plans: [
                    { name: "جلسة تصوير شخصي", price: "249€", period: "", features: ["مثالية لـ: الأفراد، الأزواج، ملفات تعريف وسائل التواصل الاجتماعي، والصور الشخصية الاحترافية.", "المدة: 45 دقيقة من التصوير.", "10 صور عالية الدقة معدلة باحتراف.", "روابط للموقع الإلكتروني ووسائل التواصل الاجتماعي", "تشمل التنقيح الأساسي."], isFeatured: true, oldPrice: "300€" },
                    { name: "جلسة لايف ستايل", price: "449€", period: "", features: ["مثالية لالتقاط التفاعلات الطبيعية واللحظات العفوية.", "المدة: 1.5 ساعة من التصوير.", "25 صورة عالية الدقة معدلة باحتراف.", "روابط للموقع الإلكتروني ووسائل التواصل الاجتماعي", "تشمل تنقيحًا قياسيًا أكثر تفصيلاً.", "إمكانية تغيير الملابس."], isFeatured: false, oldPrice: "650€" },
                    { name: "العلامة التجارية والأعمال", price: "1150€", period: "", features: ["مثالية لـ: رواد الأعمال، المستقلين، المؤثرين، والشركات الصغيرة.", "المدة: 4 ساعات من التصوير.", "الموقع: مواقع متعددة تناسب أسلوب علامتك التجارية.", "40 صورة عالية الدقة معدلة باحتراف.", "تشمل حقوق الاستخدام التجاري لقنواتك.", "استشارة شاملة قبل الجلسة لتحديد الأهداف."], isFeatured: false }
                ]
            }
        }
    }
  },
};