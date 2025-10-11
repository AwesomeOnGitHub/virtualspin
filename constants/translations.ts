
import { Language, Translations } from '../types';

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      title: "Elevate Your Business Presence",
      subtitle: "With Immersive 360° Virtual Tours",
      description: "We craft stunning virtual experiences, professional photography, and cutting-edge web design to captivate your audience and drive growth.",
    },
    services: {
      title: "Our Services",
      subtitle: "Tailored solutions for every business need.",
      list: [
        { id: 'tour', title: "360° Virtual Tours", description: "Engage clients with interactive, high-resolution virtual tours of your space.", features: ["Matterport Integration", "Google Street View Ready", "Custom Branding", "Analytics Dashboard"], oldPrice: "$1,200", newPrice: "$999" },
        { id: 'photo', title: "Commercial Photography", description: "High-quality imagery that showcases your products, team, and facilities.", features: ["Product Photography", "Corporate Headshots", "Architectural Shots", "Event Coverage"], oldPrice: "$800", newPrice: "$650" },
        { id: 'web', title: "Web Design & Development", description: "Modern, responsive websites that convert visitors into customers.", features: ["Custom UI/UX Design", "eCommerce Solutions", "SEO Optimization", "Ongoing Maintenance"], oldPrice: "$3,500", newPrice: "$2,800" },
      ],
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Ready to start a project? Fill out the form below or email us.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submitButton: "Send Message",
      formSuccess: "Message sent! We'll be in touch soon.",
      formError: "Please fill out all fields correctly.",
    },
    footer: {
      description: "Creating immersive digital experiences.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      services: "Services",
      contact: "Contact",
      getStarted: "Commencer",
    },
    hero: {
      title: "Améliorez la Présence de Votre Entreprise",
      subtitle: "Avec des Visites Virtuelles Immersives à 360°",
      description: "Nous créons des expériences virtuelles époustouflantes, des photographies professionnelles et un design web de pointe pour captiver votre public et stimuler la croissance.",
    },
    services: {
      title: "Nos Services",
      subtitle: "Des solutions sur mesure pour chaque besoin d'entreprise.",
      list: [
        { id: 'tour', title: "Visites Virtuelles 360°", description: "Engagez les clients avec des visites virtuelles interactives et en haute résolution de votre espace.", features: ["Intégration Matterport", "Prêt pour Google Street View", "Marque Personnalisée", "Tableau de Bord Analytique"], oldPrice: "1 200 €", newPrice: "999 €" },
        { id: 'photo', title: "Photographie Commerciale", description: "Des images de haute qualité qui mettent en valeur vos produits, votre équipe et vos installations.", features: ["Photographie de Produit", "Portraits d'Entreprise", "Photos Architecturales", "Couverture d'Événements"], oldPrice: "800 €", newPrice: "650 €" },
        { id: 'web', title: "Conception et Développement Web", description: "Des sites web modernes et réactifs qui transforment les visiteurs en clients.", features: ["Conception UI/UX Personnalisée", "Solutions eCommerce", "Optimisation SEO", "Maintenance Continue"], oldPrice: "3 500 €", newPrice: "2 800 €" },
      ],
    },
    contact: {
      title: "Contactons-nous",
      subtitle: "Prêt à démarrer un projet ? Remplissez le formulaire ci-dessous ou envoyez-nous un email.",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Votre Email",
      messagePlaceholder: "Votre Message",
      submitButton: "Envoyer le Message",
      formSuccess: "Message envoyé ! Nous vous contacterons bientôt.",
      formError: "Veuillez remplir tous les champs correctement.",
    },
    footer: {
      description: "Créer des expériences numériques immersives.",
      rights: "Tous droits réservés.",
    },
  },
  de: {
    nav: {
      services: "Dienstleistungen",
      contact: "Kontakt",
      getStarted: "Loslegen",
    },
    hero: {
      title: "Steigern Sie Ihre Geschäftspräsenz",
      subtitle: "Mit immersiven 360°-virtuellen Touren",
      description: "Wir gestalten atemberaubende virtuelle Erlebnisse, professionelle Fotografie und hochmodernes Webdesign, um Ihr Publikum zu fesseln und das Wachstum zu fördern.",
    },
    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Maßgeschneiderte Lösungen für jeden Geschäftsbereich.",
      list: [
        { id: 'tour', title: "360° Virtuelle Touren", description: "Begeistern Sie Kunden mit interaktiven, hochauflösenden virtuellen Touren durch Ihre Räumlichkeiten.", features: ["Matterport-Integration", "Bereit für Google Street View", "Individuelles Branding", "Analyse-Dashboard"], oldPrice: "1.200 €", newPrice: "999 €" },
        { id: 'photo', title: "Gewerbliche Fotografie", description: "Hochwertige Bilder, die Ihre Produkte, Ihr Team und Ihre Einrichtungen präsentieren.", features: ["Produktfotografie", "Unternehmensporträts", "Architekturaufnahmen", "Veranstaltungsberichterstattung"], oldPrice: "800 €", newPrice: "650 €" },
        { id: 'web', title: "Webdesign & Entwicklung", description: "Moderne, responsive Websites, die Besucher in Kunden verwandeln.", features: ["Benutzerdefiniertes UI/UX-Design", "eCommerce-Lösungen", "SEO-Optimierung", "Laufende Wartung"], oldPrice: "3.500 €", newPrice: "2.800 €" },
      ],
    },
    contact: {
      title: "Lassen Sie uns verbinden",
      subtitle: "Bereit, ein Projekt zu starten? Füllen Sie das folgende Formular aus oder senden Sie uns eine E-Mail.",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Ihre Nachricht",
      submitButton: "Nachricht senden",
      formSuccess: "Nachricht gesendet! Wir melden uns bald bei Ihnen.",
      formError: "Bitte füllen Sie alle Felder korrekt aus.",
    },
    footer: {
      description: "Schaffung immersiver digitaler Erlebnisse.",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      contact: "اتصل بنا",
      getStarted: "ابدأ الآن",
    },
    hero: {
      title: "عزز حضور عملك",
      subtitle: "مع جولات افتراضية غامرة بزاوية 360 درجة",
      description: "نحن نصنع تجارب افتراضية مذهلة وتصويرًا احترافيًا وتصميم ويب متطور لجذب جمهورك ودفع عجلة النمو.",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول مخصصة لكل احتياجات العمل.",
      list: [
        { id: 'tour', title: "جولات افتراضية 360 درجة", description: "اجذب العملاء بجولات افتراضية تفاعلية وعالية الدقة لمساحتك.", features: ["تكامل Matterport", "جاهز لـ Google Street View", "علامة تجارية مخصصة", "لوحة تحكم تحليلية"], oldPrice: "١٢٠٠ دولار", newPrice: "٩٩٩ دولار" },
        { id: 'photo', title: "التصوير التجاري", description: "صور عالية الجودة تعرض منتجاتك وفريقك ومرافقك.", features: ["تصوير المنتجات", "صور شخصية للشركات", "لقطات معمارية", "تغطية الفعاليات"], oldPrice: "٨٠٠ دولار", newPrice: "٦٥٠ دولار" },
        { id: 'web', title: "تصميم وتطوير الويب", description: "مواقع ويب حديثة وسريعة الاستجابة تحول الزوار إلى عملاء.", features: ["تصميم UI/UX مخصص", "حلول التجارة الإلكترونية", "تحسين محركات البحث", "صيانة مستمرة"], oldPrice: "٣٥٠٠ دولار", newPrice: "٢٨٠٠ دولار" },
      ],
    },
    contact: {
      title: "لنتواصل",
      subtitle: "هل أنت مستعد لبدء مشروع؟ املأ النموذج أدناه أو أرسل لنا بريدًا إلكترونيًا.",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني",
      messagePlaceholder: "رسالتك",
      submitButton: "إرسال الرسالة",
      formSuccess: "تم إرسال الرسالة! سنتواصل معك قريبًا.",
      formError: "يرجى ملء جميع الحقول بشكل صحيح.",
    },
    footer: {
      description: "خلق تجارب رقمية غامرة.",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
