import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Image } from '../types';

interface ImageGalleryProps {
  title: string;
  subtitle: string;
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ title, subtitle, images }) => {
  if (!images || images.length < 3) {
    return null; // Don't render if we don't have enough images
  }

  const renderItem = (item: Image) => {
    if (item.iframeSrc) {
      return (
        <iframe
          src={item.iframeSrc}
          title={item.alt}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      );
    }
    return (
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  };

  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-400">
            {subtitle}
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[70vh] min-h-[500px]">
            <AnimatedSection className="col-span-12 md:col-span-6 row-span-2">
                <div className="h-full w-full rounded-lg overflow-hidden group">
                    {renderItem(images[0])}
                </div>
            </AnimatedSection>
            <AnimatedSection className="col-span-12 md:col-span-6 row-span-1">
                 <div className="h-full w-full rounded-lg overflow-hidden group">
                    {renderItem(images[1])}
                 </div>
            </AnimatedSection>
            <AnimatedSection className="col-span-12 md:col-span-6 row-span-1">
                 <div className="h-full w-full rounded-lg overflow-hidden group">
                    {renderItem(images[2])}
                 </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;