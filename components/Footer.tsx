import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-bold text-white">
          Virtual<span className="text-[var(--primary)]">Spin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
