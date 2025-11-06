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
        footer: {
        rights: "Everything on this site is ours.",
        },
        pricing: {
        choosePlan: "Choose Plan",
        getQuote: "Get a Quote",
        },
        checkoutPage: {
        backLink: "Back to",
        contactTitle: "Contact Information",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        notesLabel: "Additional Notes",
        notesPlaceholder: "Any special requests or details...",
        placeOrderButton: "Place Order",
        orderSummaryTitle: "Order Summary",
        productLabel: "Product:",
        serviceLabel: "Service:",
        totalLabel: "Total:",
        gettingTitle: "What you're getting",
        orderSuccess: "Your order has been placed! We'll be in touch soon.",
        orderError: "Please fill in your name and email.",
        notFoundTitle: "Plan Not Found",
        notFoundText: "The plan you are looking for does not exist or the link is incorrect. Please navigate back and select a plan.",
        notFoundButton: "Go to Home",
        },
        generalCheckoutPage: {
            title: "Explore Our Services",
            detailsTitle: "Your Vision, Our Expertise",
            detailsText: "At VirtualSpin, we combine cutting-edge technology with creative passion to bring your ideas to life. Each service is a partnership, a journey we take with you to create something truly remarkable. Whether it's an immersive 360° tour that transports your audience or a high-performance website that drives growth, our team is dedicated to delivering excellence and results. Let's build something amazing together.",
            explore: "Explore",
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
                    title: "Our 360° Tour Capabilities",
                    subtitle: "We offer a wide range of options to build the perfect interactive experience. Contact us for a personalized quote based on your needs.",
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
                hero: { title: "Your Digital Storefront", subtitle: "Beautiful, fast, and effective websites that grow your business.", imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
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
        footer: {
        rights: "Tout sur ce site est à nous.",
        },
        pricing: {
        choosePlan: "Choisir le Forfait",
        getQuote: "Obtenir un Devis",
        },
        checkoutPage: {
        backLink: "Retour à",
        contactTitle: "Informations de Contact",
        nameLabel: "Nom Complet",
        emailLabel: "Adresse E-mail",
        notesLabel: "Notes Additionnelles",
        notesPlaceholder: "Toute demande spéciale ou détail...",
        placeOrderButton: "Passer la Commande",
        orderSummaryTitle: "Résumé de la Commande",
        productLabel: "Produit:",
        serviceLabel: "Service:",
        totalLabel: "Total:",
        gettingTitle: "Ce que vous obtenez",
        orderSuccess: "Votre commande a été passée ! Nous vous contacterons bientôt.",
        orderError: "Veuillez indiquer votre nom et votre e-mail.",
        notFoundTitle: "Forfait Introuvable",
        notFoundText: "Le forfait que vous recherchez n'existe pas ou le lien est incorrect. Veuillez revenir en arrière et sélectionner un forfait.",
        notFoundButton: "Aller à l'Accueil",
        },
        generalCheckoutPage: {
            title: "Découvrez Nos Services",
            detailsTitle: "Votre Vision, Notre Expertise",
            detailsText: "Chez VirtualSpin, nous allions technologie de pointe et passion créative pour donner vie à vos idées. Chaque service est un partenariat, un voyage que nous entreprenons avec vous pour créer quelque chose de vraiment remarquable. Qu'il s'agisse d'une visite immersive à 360° qui transporte votre public ou d'un site web performant qui stimule la croissance, notre équipe se consacre à l'excellence et aux résultats. Construisons quelque chose d'incroyable ensemble.",
            explore: "Découvrir",
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
                hero: { title: "Votre Vitrine Numérique", subtitle: "Des sites web beaux, rapides et efficaces qui développent votre entreprise.", imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
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
                    title: "Développement de Sites Web Personnalisés",
                    subtitle: "Nous construisons de beaux sites web performants, adaptés aux objectifs de votre entreprise. Discutons de votre projet et créons un devis personnalisé.",
                    featureGroups: [
                        {
                            title: "Fondation & Design",
                            features: [
                                "Conception personnalisée et adaptée aux mobiles",
                                "Applications à page unique ou multi-pages",
                                "Optimisation SEO fondamentale",
                                "Stratégie d'appel à l'action (CTA) personnalisée",
                                "Intégration et outils de promotion des réseaux sociaux",
                                "Génération de code QR personnalisé pour le marketing"
                            ]
                        },
                        {
                            title: "Fonctionnalités Commerciales & E-commerce",
                            features: [
                                "SEO avancé et optimisation des performances",
                                "Intégration de système de gestion de contenu (CMS)",
                                "Formulaires de contact et outils de génération de leads",
                                "Prise en charge multilingue et traduction",
                                "Intégration de vidéos et de médias riches",
                                "Conseils en image de marque et présence sur le web"
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
                    title: "Services de Photographie Professionnelle",
                    subtitle: "Des portraits d'entreprise aux visuels de produits époustouflants, nous capturons l'essence de votre marque. Contactez-nous pour une séance adaptée à vos besoins.",
                    featureGroups: [
                        {
                            title: "Séances Photo sur Mesure",
                            features: [
                                "Durées de séance flexibles, des shootings courts aux événements d'une journée complète",
                                "Prise de vue sur place dans vos locaux ou un lieu choisi",
                                "Spécialisation en photographie de produits, portraits et événements d'entreprise",
                                "Consultation pour définir le style visuel et la liste des prises de vue"
                            ]
                        },
                        {
                            title: "Post-Production Professionnelle",
                            features: [
                                "Édition professionnelle et retouche de base sur toutes les photos sélectionnées",
                                "Retouche avancée et détaillée pour les clichés premium",
                                "Correction des couleurs et étalonnage pour correspondre à l'esthétique de la marque",
                                "Suppression haut de gamme des imperfections de la peau et des produits"
                            ]
                        },
                        {
                            title: "Livraison & Actifs Numériques",
                            features: [
                                "Livraison d'un nombre défini d'images éditées en haute résolution",
                                "Galerie en ligne sécurisée pour visualiser, partager et télécharger",
                                "Option de recevoir toutes les séquences brutes et non éditées de la séance",
                                "Images optimisées pour le web, les réseaux sociaux et l'impression",
                                "Droits d'utilisation complets pour le marketing et le matériel promotionnel"
                            ]
                        }
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
            { id: 'tour', title: "Coole 360°-Touren", description: "Wir erstellen eine Online-Kopie Ihres Ortes, die sich echt anfühlt. Die Leute können sich umsehen und fühlen, als wären sie wirklich da.", features: ["Super klare Bilder", "Klickbare Info-Punkte", "Ihr eigenes Logo & Farben", "Sehen, wer besucht hat"] },
            { id: 'photography', title: "Tolle Fotos für Unternehmen", description: "Wir erzählen die Geschichte Ihrer Marke mit schönen Bildern. Unsere Fotos helfen den Leuten, sich mit Ihrem Unternehmen verbunden zu fühlen.", features: ["Fotos von Gebäuden", "Bilder von Ihrem Team", "Fotos von Ihren Produkten", "Bilder von Veranstaltungen"] },
            { id: 'drone', title: "Fantastische Drohnenvideos", description: "Wir verwenden Drohnen, um erstaunliche Videos vom Himmel zu bekommen. Sehen Sie Ihre Welt von hoch oben.", features: ["Videos in Filmqualität", "Schnelle Action-Drohnenaufnahmen", "Detaillierte Karten erstellen", "Gebäude überprüfen"] },
            { id: 'web', title: "Maßgeschneiderte Website", description: "Holen Sie sich eine spezielle Website, die nur für Sie gemacht ist. Unsere Websites sind schnell, sehen gut aus und helfen Ihrer Marke zu wachsen.", features: ["Einfach zu bedienendes Design", "Dinge online verkaufen", "Leuten helfen, Sie zu finden", "Wir halten sie am Laufen"] },
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
        pricing: {
        choosePlan: "Plan wählen",
        getQuote: "Angebot anfordern",
        },
        checkoutPage: {
            backLink: "Zurück zu",
            contactTitle: "Kontaktinformationen",
            nameLabel: "Vollständiger Name",
            emailLabel: "E-Mail-Adresse",
            notesLabel: "Zusätzliche Anmerkungen",
            notesPlaceholder: "Besondere Wünsche oder Details...",
            placeOrderButton: "Bestellung aufgeben",
            orderSummaryTitle: "Bestellübersicht",
            productLabel: "Produkt:",
            serviceLabel: "Dienstleistung:",
            totalLabel: "Gesamt:",
            gettingTitle: "Was Sie bekommen",
            orderSuccess: "Ihre Bestellung wurde aufgegeben! Wir werden uns bald mit Ihnen in Verbindung setzen.",
            orderError: "Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse an.",
            notFoundTitle: "Plan nicht gefunden",
            notFoundText: "Der von Ihnen gesuchte Plan existiert nicht oder der Link ist falsch. Bitte navigieren Sie zurück und wählen Sie einen Plan aus.",
            notFoundButton: "Zur Startseite",
        },
        generalCheckoutPage: {
            title: "Entdecken Sie unsere Dienstleistungen",
            detailsTitle: "Ihre Vision, unsere Expertise",
            detailsText: "Bei VirtualSpin kombinieren wir modernste Technologie mit kreativer Leidenschaft, um Ihre Ideen zum Leben zu erwecken. Jede Dienstleistung ist eine Partnerschaft, eine Reise, die wir mit Ihnen unternehmen, um etwas wirklich Bemerkenswertes zu schaffen. Ob es sich um eine immersive 360°-Tour handelt, die Ihr Publikum transportiert, oder eine hochleistungsfähige Website, die Wachstum fördert, unser Team widmet sich der Bereitstellung von Exzellenz und Ergebnissen. Lassen Sie uns gemeinsam etwas Erstaunliches bauen.",
            explore: "Entdecken",
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
                    title: "Unsere 360°-Tour-Fähigkeiten",
                    subtitle: "Wir bieten eine breite Palette von Optionen, um das perfekte interaktive Erlebnis zu schaffen. Kontaktieren Sie uns für ein individuelles Angebot.",
                    featureGroups: [
                        {
                            title: "Google Maps-Integration",
                            features: [
                                "360°-Bilder innen und außen",
                                "Offizieller Upload auf Google Maps",
                                "Erhöhen Sie Klicks und Aufrufe auf Ihrem Profil",
                                "Verbessern Sie Ihr Ranking bei Google und Google Maps",
                                "Gewinnen Sie mehr Kunden direkt über die Suche"
                            ]
                        },
                        {
                            title: "Benutzerdefinierte virtuelle Touren",
                            features: [
                                "Unbegrenzte hochauflösende Aufnahmen",
                                "Einbettbarer Videolink für Websites und soziale Medien",
                                "Interaktive Hotspots mit Informationen, Bildern oder Videos",
                                "Individuelles Branding mit Ihrem Logo und Ihren Farben",
                                "Detaillierte Analysen zum Besucherengagement"
                            ]
                        },
                        {
                            title: "Premium-Funktionen & Add-ons",
                            features: [
                                "Vollständig angepasste Tour-Oberfläche mit Kopfzeile und Musik",
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
                                "Volle Nutzungsrechte für Web und soziale Medien",
                                "Optionaler automatischer Upload zu Google Maps"
                            ]
                        },
                        {
                            title: "Kinoreife Luftbildvideos",
                            features: [
                                "Professionell geschnittene Videokurzfilme (z. B. 1 Minute)",
                                "Für soziale Medien geeignete Videolinks",
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
                hero: { title: "Ihr digitaler Laden", subtitle: "Schöne, schnelle und effektive Websites, die Ihr Unternehmen wachsen lassen.", imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
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
                    title: "Individuelle Website-Entwicklung",
                    subtitle: "Wir erstellen schöne, leistungsstarke Websites, die auf Ihre Geschäftsziele zugeschnitten sind. Lassen Sie uns Ihr Projekt besprechen und ein individuelles Angebot erstellen.",
                    featureGroups: [
                        {
                            title: "Grundlage & Design",
                            features: [
                                "Individuelles, mobil-responsives Design",
                                "Single-Page- oder Multi-Page-Anwendungen",
                                "Grundlegende SEO-Optimierung",
                                "Personalisierte Call-to-Action (CTA)-Strategie",
                                "Social-Media-Integration und Werbetools",
                                "Benutzerdefinierte QR-Code-Generierung für Marketing"
                            ]
                        },
                        {
                            title: "Business- & E-Commerce-Funktionen",
                            features: [
                                "Fortgeschrittenes SEO und Leistungsoptimierung",
                                "Integration von Content-Management-Systemen (CMS)",
                                "Kontaktformulare und Tools zur Lead-Generierung",
                                "Mehrsprachige Unterstützung und Übersetzung",
                                "Video-Einbettung und Rich-Media-Unterstützung",
                                "Branding- und Webpräsenzberatung"
                            ]
                        },
                        {
                            title: "Unternehmens- & erweiterte Lösungen",
                            features: [
                                "Benutzerdefinierte API- und Drittanbieter-Integrationen",
                                "Erweiterte Analyse- und Conversion-Tracking-Einrichtung",
                                "Sicherheits- und Compliance-Funktionen auf Unternehmensebene",
                                "Engagiertes Projektmanagement und Support",
                                "Personalisiertes Team-Onboarding und Schulungen",
                                "Laufende kollaborative Entwicklungs- und Wartungspläne"
                            ]
                        }
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
                        { icon: "Utensils", title: "Essen & Trinken", description: "Köstlich aussehende Fotos, die Ihre kulinären Kreationen unwiderstehlich machen." }
                    ]
                },
                pricing: {
                    title: "Professionelle Fotodienstleistungen",
                    subtitle: "Von Unternehmensporträts bis hin zu atemberaubenden Produktbildern – wir fangen die Essenz Ihrer Marke ein. Kontaktieren Sie uns für eine auf Ihre Bedürfnisse zugeschnittene Session.",
                    featureGroups: [
                        {
                            title: "Maßgeschneiderte Fotosessions",
                            features: [
                                "Flexible Sitzungsdauern, von kurzen Shootings bis zu ganztägigen Veranstaltungen",
                                "Aufnahmen vor Ort in Ihren Geschäftsräumen oder einem gewählten Veranstaltungsort",
                                "Spezialisierung auf Produkt-, Porträt- und Firmenveranstaltungsfotografie",
                                "Beratung zur Definition des visuellen Stils und der Aufnahmeliste"
                            ]
                        },
                        {
                            title: "Professionelle Postproduktion",
                            features: [
                                "Professionelle Bearbeitung und grundlegende Retusche aller ausgewählten Fotos",
                                "Fortgeschrittene und detaillierte Retusche für Premium-Aufnahmen",
                                "Farbkorrektur und -abstufung passend zur Markenästhetik",
                                "Hochwertige Entfernung von Haut- und Produktmakeln"
                            ]
                        },
                        {
                            title: "Lieferung & Digitale Assets",
                            features: [
                                "Lieferung einer festgelegten Anzahl hochauflösender bearbeiteter Bilder",
                                "Sichere Online-Galerie zum Ansehen, Teilen und Herunterladen",
                                "Option zum Erhalt aller rohen, unbearbeiteten Aufnahmen der Session",
                                "Für Web, soziale Medien und Druck optimierte Bilder",
                                "Volle Nutzungsrechte für Marketing- und Werbematerialien"
                            ]
                        }
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
            { id: 'tour', title: "جولات 360 درجة رائعة", description: "نبني نسخة من مكانك على الإنترنت تبدو حقيقية. يمكن للناس النظر حولهم والشعور وكأنهم هناك حقًا.", features: ["صور فائقة الوضوح", "نقاط معلومات قابلة للنقر", "شعارات وألوان خاصة بك", "انظر من زار"] },
            { id: 'photography', title: "صور رائعة للأعمال", description: "نروي قصة علامتك التجارية بصور جميلة. تساعد صورنا الناس على الشعور بالارتباط بعملك.", features: ["صور للمباني", "صور لفريقك", "صور لمنتجاتك", "صور من الأحداث"] },
            { id: 'drone', title: "فيديوهات درون مدهشة", description: "نستخدم طائرات بدون طيار للحصول على فيديوهات مذهلة من السماء. شاهد عالمك من الأعلى.", features: ["فيديوهات بجودة سينمائية", "لقطات درون سريعة الحركة", "إنشاء خرائط مفصلة", "فحص المباني"] },
            { id: 'web', title: "موقع ويب مخصص", description: "احصل على موقع ويب خاص مصنوع خصيصًا لك. مواقعنا سريعة، تبدو جيدة، وتساعد علامتك التجارية على النمو.", features: ["تصميم سهل الاستخدام", "بيع الأشياء عبر الإنترنت", "مساعدة الناس في العثور عليك", "نحن نحافظ على تشغيله"] },
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
        pricing: {
            choosePlan: "اختر الباقة",
            getQuote: "اطلب عرض سعر",
        },
        checkoutPage: {
            backLink: "العودة إلى",
            contactTitle: "معلومات الاتصال",
            nameLabel: "الاسم الكامل",
            emailLabel: "البريد الإلكتروني",
            notesLabel: "ملاحظات إضافية",
            notesPlaceholder: "أي طلبات خاصة أو تفاصيل...",
            placeOrderButton: "إتمام الطلب",
            orderSummaryTitle: "ملخص الطلب",
            productLabel: "المنتج:",
            serviceLabel: "الخدمة:",
            totalLabel: "الإجمالي:",
            gettingTitle: "ما الذي ستحصل عليه",
            orderSuccess: "تم تقديم طلبك بنجاح! سنتواصل معك قريبًا.",
            orderError: "يرجى إدخال اسمك وبريدك الإلكتروني.",
            notFoundTitle: "الباقة غير موجودة",
            notFoundText: "الباقة التي تبحث عنها غير موجودة أو الرابط غير صحيح. يرجى العودة واختيار باقة.",
            notFoundButton: "الذهاب إلى الرئيسية",
        },
        generalCheckoutPage: {
            title: "استكشف خدماتنا",
            detailsTitle: "رؤيتك، خبرتنا",
            detailsText: "في VirtualSpin، نجمع بين التكنولوجيا المتطورة والشغف الإبداعي لتحويل أفكارك إلى حقيقة. كل خدمة هي شراكة، رحلة نخوضها معك لإنشاء شيء رائع حقًا. سواء كانت جولة غامرة بزاوية 360 درجة تنقل جمهورك أو موقع ويب عالي الأداء يدفع النمو، فإن فريقنا مكرس لتقديم التميز والنتائج. دعنا نبني شيئًا مذهلاً معًا.",
            explore: "استكشف",
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
                    title: "قدراتنا في جولات 360 درجة",
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
                                "نقاط تفاعلية ساخنة مع معلومات أو صور أو مقاطع فيديو",
                                "علامة تجارية مخصصة بشعارك وألوانك",
                                "تحليلات مفصلة حول تفاعل الزوار"
                            ]
                        },
                        {
                            title: "الميزات والإضافات المميزة",
                            features: [
                                "واجهة جولة مخصصة بالكامل مع رأس وموسيقى",
                                "مخططات طوابق تفاعلية وعروض نموذجية ثلاثية الأبعاد 'بيت الدمى'",
                                "تكامل الفن ثلاثي الأبعاد والتدريج الافتراضي",
                                "أدوات تحسين ومشاركة وسائل التواصل الاجتماعي",
                                "تسجيلات جوية بطائرات بدون طيار لمشاهد خارجية مذهلة",
                                "دعم لمواقع متعددة في جولة واحدة"
                            ]
                        }
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
                    title: "خدمات التصوير الفوتوغرافي والفيديو الجوي",
                    subtitle: "التقط مناظر خلابة باستخدام تقنية الطائرات بدون طيار المتقدمة لدينا. نصمم كل مشروع حسب رؤيتك المحددة. اتصل بنا للحصول على عرض أسعار.",
                    featureGroups: [
                        {
                            title: "التصوير الجوي",
                            features: [
                                "صور فائقة الدقة (4K+)",
                                "صور معدلة ومحسنة بشكل احترافي",
                                "صور بانورامية جوية تفاعلية بزاوية 360 درجة",
                                "لقطات من منظور فريد لا يمكن الوصول إليه",
                                "حقوق استخدام كاملة للويب ووسائل التواصل الاجتماعي",
                                "تحميل تلقائي اختياري إلى خرائط جوجل"
                            ]
                        },
                        {
                            title: "فيديو جوي سينمائي",
                            features: [
                                "مقاطع فيديو قصيرة معدلة باحتراف (على سبيل المثال، دقيقة واحدة)",
                                "روابط فيديو جاهزة لوسائل التواصل الاجتماعي",
                                "تضمين لقطات معدلة ومحسنة وخامة",
                                "إنشاء جولة افتراضية باستخدام صور تفاعلية بزاوية 360 درجة",
                                "استشارة شخصية وتخطيط للمشروع"
                            ]
                        },
                        {
                            title: "عمليات الطائرات بدون طيار المتقدمة والتجارية",
                            features: [
                                "تسجيلات غير محدودة للمشاريع واسعة النطاق",
                                "التصوير في مواقع متعددة",
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
                hero: { title: "واجهتك الرقمية", subtitle: "مواقع ويب جميلة وسريعة وفعالة تنمي أعمالك.", imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
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
                    title: "تطوير مواقع الويب المخصصة",
                    subtitle: "نقوم ببناء مواقع ويب جميلة وعالية الأداء مصممة خصيصًا لأهداف عملك. دعنا نناقش مشروعك وننشئ عرض أسعار مخصصًا.",
                    featureGroups: [
                        {
                            title: "الأساس والتصميم",
                            features: [
                                "تصميم مخصص ومتجاوب مع الجوال",
                                "تطبيقات صفحة واحدة أو متعددة الصفحات",
                                "تحسين أساسي لمحركات البحث (SEO)",
                                "استراتيجية دعوة لاتخاذ إجراء (CTA) مخصصة",
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
                                "واجهات برمجة تطبيقات مخصصة وتكاملات مع أطراف ثالثة",
                                "إعداد تحليلات متقدمة وتتبع التحويلات",
                                "ميزات الأمان والامتثال على مستوى المؤسسات",
                                "إدارة مشاريع ودعم مخصص",
                                "تأهيل وتدريب شخصي للفريق",
                                "خطط تطوير وصيانة تعاونية مستمرة"
                            ]
                        }
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
                    title: "خدمات التصوير الفوتوغرافي الاحترافية",
                    subtitle: "من الصور الشخصية للشركات إلى صور المنتجات المذهلة، نلتقط جوهر علامتك التجارية. اتصل بنا للحصول على جلسة مصممة خصيصًا لاحتياجاتك.",
                    featureGroups: [
                        {
                            title: "جلسات تصوير مخصصة",
                            features: [
                                "مدد جلسات مرنة، من جلسات التصوير القصيرة إلى الفعاليات التي تستمر ليوم كامل",
                                "التصوير في الموقع في مكان عملك أو مكان من اختيارك",
                                "متخصصون في تصوير المنتجات، والصور الشخصية، وفعاليات الشركات",
                                "استشارة لتحديد النمط البصري وقائمة اللقطات"
                            ]
                        },
                        {
                            title: "مرحلة ما بعد الإنتاج الاحترافية",
                            features: [
                                "تعديل احترافي وتنقيح أساسي لجميع الصور المختارة",
                                "تنقيح متقدم ومفصل للقطات المتميزة",
                                "تصحيح الألوان وتدرجها لتتناسب مع جمالية العلامة التجارية",
                                "إزالة عيوب البشرة والمنتجات بجودة عالية"
                            ]
                        },
                        {
                            title: "التسليم والأصول الرقمية",
                            features: [
                                "تسليم عدد محدد من الصور المعدلة عالية الدقة",
                                "معرض آمن عبر الإنترنت للمشاهدة والمشاركة والتنزيل",
                                "خيار استلام جميع اللقطات الخام غير المعدلة من الجلسة",
                                "صور مُحسَّنة للاستخدام على الويب ووسائل التواصل الاجتماعي والطباعة",
                                "حقوق استخدام كاملة للمواد التسويقية والترويجية"
                            ]
                        }
                    ]
                }
            }
        }
    },
    };