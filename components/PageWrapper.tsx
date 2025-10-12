import React, { useEffect, useState } from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-wrapper ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
