import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    const { t } = useTranslations();
    const footerText = t('footer');
  return (
    <footer className="bg-black text-gray-500 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-bold text-white mb-4">
          Virtual<span className="text-[var(--primary)]">Spin</span>
        </div>
        <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-8">
            <a href="#" className="hover:text-[var(--primary)] transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors"><Twitter /></a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors"><Instagram /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} VirtualSpin. {footerText.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;