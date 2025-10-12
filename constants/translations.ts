import { Language, Translations } from '../types';

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      tour: "360° Tours",
      drone: "Drone Services",
      website: "Web Development",
      photography: "Photography",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      title: "Bring Your Space to Life",
      subtitle: "Immersive 360° Virtual Tours",
      description: "We create stunning, high-resolution virtual tours that captivate your audience and showcase your property like never before. Perfect for real estate, hospitality, and retail.",
    },
    services: {
        title: 'Our Core Services',
        subtitle: 'From breathtaking aerial shots to immersive virtual experiences, we offer a complete suite of digital services to elevate your brand.',
        list: [
            { id: 'tour', title: '360° Virtual Tours', description: 'Engage your audience with interactive and immersive virtual tours. We use cutting-edge technology to create realistic digital twins of your space.', features: [], oldPrice: '', newPrice: '' },
            { id: 'drone', title: 'Aerial Drone Services', description: 'Capture breathtaking aerial footage, photos, and data with our certified pilots and state-of-the-art drone fleet.', features: [], oldPrice: '', newPrice: '' },
            { id: 'web', title: 'Website Development', description: 'A stunning website is the cornerstone of your online presence. We build fast, responsive, and beautiful websites tailored to your business goals.', features: [], oldPrice: '', newPrice: '' },
            { id: 'photo', title: 'Professional Photography', description: 'High-quality images are crucial for making a great first impression. Our professional photography services will make your property or product shine.', features: [], oldPrice: '', newPrice: '' }
        ]
    },
    contact: {
      title: "Let's Get in Touch",
      subtitle: "Have a project in mind or just want to learn more? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submitButton: "Send Message",
      formSuccess: "Message sent successfully!",
      formError: "Please fill out all fields correctly.",
    },
    footer: {
      rights: "All Rights Reserved.",
    },
    pages: {
        tour: {
            hero: {
                title: "360° Virtual Tours",
                subtitle: "Step inside your space, from anywhere in the world.",
                imageUrl: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Redefining Digital Exploration",
                paragraphs: [
                    "A VirtualSpin 360° Tour is more than a viewing; it's an experience. We meticulously capture every angle of your space in stunning 8K resolution, creating a digital twin that feels as real as being there. Our technology empowers users to navigate intuitively, engaging with embedded information points to learn more about key features.",
                    "From luxury real estate to expansive event venues, our tours provide an unparalleled level of detail and immersion. This is not just about seeing a space—it's about understanding it, exploring it, and connecting with it on a deeper level. Let us transform your physical location into a globally accessible virtual destination."
                ]
            },
            gallery: {
                title: "Visualizing the Experience",
                subtitle: "A glimpse into the clarity and detail of our work.",
                images: [
                    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", alt: "Modern living room with elegant furniture" },
                    { src: "https://images.unsplash.com/photo-1613553423758-d788b79997c0?q=80&w=1974&auto=format&fit=crop", alt: "360 degree camera on a tripod in a bright room" },
                    { src: "https://images.unsplash.com/photo-1558507654-e8979b012403?q=80&w=2070&auto=format&fit=crop", alt: "Spacious modern kitchen with island" }
                ]
            },
            features: {
                title: "Why Our Tours Stand Out",
                subtitle: "We combine state-of-the-art technology with an artistic eye to create virtual experiences that are not just tours, but stories.",
                items: [
                    { icon: 'Eye', title: 'Immersive Experience', description: 'Feel like you are actually there with our seamless, high-definition panoramic imagery.' },
                    { icon: 'MousePointerClick', title: 'Interactive Hotspots', description: 'Embed videos, images, text, and links directly into your tour for a rich, informative experience.' },
                    { icon: 'Smartphone', title: 'Multi-Platform Compatibility', description: 'Our tours work flawlessly on desktops, tablets, mobile devices, and VR headsets.' },
                    { icon: 'Share2', title: 'Easy to Share', description: 'Effortlessly embed your tour on your website or share it on social media with a single link.' },
                ]
            },
            pricing: {
                title: "Flexible Pricing for Every Need",
                subtitle: "Choose the plan that best fits the scale and complexity of your project.",
                plans: [
                    { name: "Basic", price: "$299", period: "per space", features: ["Up to 1,000 sq ft", "10 High-Res Panoramas", "Basic Hotspots", "1 Month Hosting"], isFeatured: false },
                    { name: "Pro", price: "$499", period: "per space", features: ["Up to 3,000 sq ft", "25 High-Res Panoramas", "Custom Hotspots & Branding", "Google Street View Integration", "1 Year Hosting"], isFeatured: true },
                    { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited square footage", "Multiple Properties", "Advanced Analytics", "Dedicated Support", "API Access"], isFeatured: false },
                ]
            }
        },
        drone: {
             hero: {
                title: "Aerial Drone Services",
                subtitle: "A higher perspective for your projects.",
                imageUrl: "https://images.unsplash.com/photo-1519575706483-4ab180e251e2?q=80&w=2070&auto=format&fit=crop"
            },
            intro: {
                title: "Unleash the Power of Aerial Imagery",
                paragraphs: [
                    "Our certified drone pilots are masters of aerial cinematography and data acquisition. Using state-of-the-art drones equipped with high-resolution cameras, we capture breathtaking vistas, dynamic action sequences, and precise topographical data that is impossible to obtain from the ground.",
                    "Whether you need a stunning aerial shot to market a luxury property, a detailed survey of a construction site, or cinematic footage for a film project, we provide a safe, efficient, and cost-effective solution. We turn the sky into your creative canvas, delivering visuals that command attention and provide invaluable insights."
                ]
            },
            gallery: {
                title: "From the Heavens",
                subtitle: "See the world from a breathtaking new vantage point.",
                images: [
                    { src: "https://images.unsplash.com/photo-1524185962762-a20f9d94a43d?q=80&w=2070&auto=format&fit=crop", alt: "Drone flying over a dramatic coastal landscape" },
                    { src: "https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop", alt: "Top-down aerial view of a winding road through a forest" },
                    { src: "https://images.unsplash.com/photo-1585832749318-3a04a88f78a3?q=80&w=2070&auto=format&fit=crop", alt: "Close-up of a professional cinematography drone" }
                ]
            },
            features: {
                title: "Our Aerial Capabilities",
                subtitle: "From cinematic video to precise mapping, our certified pilots and advanced drones deliver exceptional results.",
                items: [
                    { icon: 'Film', title: '4K Cinematic Video', description: 'Capture breathtaking, smooth aerial footage for promotional videos, films, and events.' },
                    { icon: 'Building', title: 'Real Estate Showcase', description: 'Highlight properties from a unique perspective, showing off the entire lot and surrounding area.' },
                    { icon: 'Search', title: 'Inspections & Surveys', description: 'Safely and efficiently inspect roofs, power lines, and other hard-to-reach structures.' },
                    { icon: 'Map', title: '2D/3D Mapping', description: 'Create detailed orthomosaic maps and 3D models for construction, agriculture, and land management.' },
                ]
            },
            pricing: {
                title: "Drone Service Packages",
                subtitle: "Clear pricing for our most requested aerial services.",
                plans: [
                    { name: "Photo Package", price: "$350", period: "per session", features: ["Up to 1 hour on-site", "20 Edited Aerial Photos", "Full Usage Rights"], isFeatured: false },
                    { name: "Video Package", price: "$650", period: "per session", features: ["Up to 2 hours on-site", "2-minute Edited 4K Video", "Licensed Music", "Basic Color Grading"], isFeatured: true },
                    { name: "Full Day", price: "$1200", period: "8 hours", features: ["Full day of filming/photography", "All raw footage/photos", "Advanced editing services available", "Perfect for large projects"], isFeatured: false },
                ]
            }
        },
        website: {
            hero: {
                title: "Web Design & Development",
                subtitle: "Your digital storefront, crafted to perfection.",
                imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
            },
            intro: {
                title: "Digital Craftsmanship",
                paragraphs: [
                    "In the digital age, your website is your most important asset. It's your brand's home, your 24/7 salesperson, and your primary connection to your audience. We don't just build websites; we create digital flagships—fast, beautiful, and intuitive online experiences that drive business growth.",
                    "Our process is collaborative and transparent. We dive deep into your brand and your goals to build a bespoke website that is not only visually stunning but also engineered for peak performance, security, and search engine visibility. We blend artistry with technology to build a website that works as hard as you do."
                ]
            },
            gallery: {
                title: "Design Meets Function",
                subtitle: "Showcasing our commitment to clean, effective digital design.",
                images: [
                    { src: "https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop", alt: "Clean code on a dark screen" },
                    { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop", alt: "Designer working on a website layout on a computer" },
                    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "A website shown on a laptop with analytics graphs" }
                ]
            },
            features: {
                title: "Modern Web Solutions",
                subtitle: "We build websites that are not only beautiful but also fast, secure, and built to convert.",
                items: [
                    { icon: 'LayoutTemplate', title: 'Custom Design', description: 'We don\'t use templates. Every website is uniquely designed to reflect your brand identity.' },
                    { icon: 'Smartphone', title: 'Responsive & Mobile-First', description: 'Your site will look and work perfectly on any device, from phones to desktops.' },
                    { icon: 'Rocket', title: 'Performance Optimized', description: 'Fast-loading pages are key to user experience and SEO. We obsess over performance.' },
                    { icon: 'ShieldCheck', title: 'Secure & Reliable', description: 'Built with modern security best practices to protect you and your users.' },
                ]
            },
            pricing: {
                title: "Web Development Pricing",
                subtitle: "Invest in a high-quality online presence that pays for itself.",
                plans: [
                    { name: "Landing Page", price: "$999", period: "one-time", features: ["Single Page Website", "Contact Form", "Mobile Responsive", "Basic SEO"], isFeatured: false },
                    { name: "Business Site", price: "$2499", period: "one-time", features: ["5-10 Pages", "CMS Integration (WordPress/etc.)", "Custom Design", "Blog Setup", "Advanced SEO"], isFeatured: true },
                    { name: "E-Commerce", price: "Starts at $4999", period: "", features: ["Full Online Store", "Product Management", "Payment Gateway Integration", "User Accounts", "Custom Features"], isFeatured: false },
                ]
            }
        },
        photography: {
             hero: {
                title: "Professional Photography",
                subtitle: "Capturing moments that matter.",
                imageUrl: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop"
            },
            intro: {
                title: "The Art of Visual Storytelling",
                paragraphs: [
                    "A single photograph can tell a story, evoke an emotion, and define a brand. Our photographers are not just technicians; they are artists who understand the power of light, composition, and timing. We work tirelessly to capture images that are not just seen, but felt.",
                    "From crisp product shots that drive sales to architectural photography that highlights every detail of a property, our approach is always tailored to the subject and the client's vision. We invest in top-tier equipment and post-production techniques to ensure every image we deliver is flawless and powerful."
                ]
            },
            gallery: {
                title: "Our Portfolio in Focus",
                subtitle: "A collection of images that showcases our versatility and commitment to quality.",
                images: [
                    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop", alt: "Professional camera on a table" },
                    { src: "https://images.unsplash.com/photo-1607494723126-7a796a40d1f7?q=80&w=2070&auto=format&fit=crop", alt: "Photographer taking a picture in an urban setting" },
                    { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop", alt: "Stunning landscape photograph of mountains and a lake" }
                ]
            },
            features: {
                title: "Our Photography Services",
                subtitle: "We provide a range of photography services with an emphasis on quality, creativity, and professionalism.",
                items: [
                    { icon: 'Home', title: 'Real Estate & Architectural', description: 'Showcase properties in their best light with stunning, high-dynamic-range photos.' },
                    { icon: 'Briefcase', title: 'Corporate & Headshots', description: 'Professional headshots and corporate event coverage to elevate your brand image.' },
                    { icon: 'ShoppingBag', title: 'Product Photography', description: 'Crisp, clean product shots for e-commerce, catalogs, and advertising.' },
                    { icon: 'Utensils', title: 'Food & Beverage', description: 'Delicious-looking photos that make your culinary creations irresistible.' },
                ]
            },
            pricing: {
                title: "Photography Rates",
                subtitle: "Transparent pricing for high-quality images.",
                plans: [
                    { name: "Mini Session", price: "$250", period: "30 minutes", features: ["1 Location", "10 Edited Digital Images", "Online Gallery", "Ideal for headshots"], isFeatured: false },
                    { name: "Standard Session", price: "$500", period: "1.5 hours", features: ["Up to 2 Locations", "30+ Edited Digital Images", "Full Usage Rights", "Perfect for properties/products"], isFeatured: true },
                    { name: "Half Day", price: "$900", period: "4 hours", features: ["Extensive coverage", "100+ Edited Images", "Priority Editing", "Great for events or large shoots"], isFeatured: false },
                ]
            }
        }
    },
  },
  es: {} as Translations,
  fr: {} as Translations,
  de: {} as Translations,
  it: {} as Translations,
  nl: {} as Translations,
  da: {} as Translations,
  hu: {} as Translations,
  tr: {} as Translations,
  ar: {} as Translations,
  hi: {} as Translations,
};