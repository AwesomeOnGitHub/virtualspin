import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  direction: 'ltr' | 'rtl';
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, direction }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Allow time for fade out animation
    }, 2700);
    return () => clearTimeout(timer);
  }, [message, type, onClose]);

  const borderColor = type === 'success' ? 'border-green-500' : 'border-red-500';
  const Icon = type === 'success' ? CheckCircle : XCircle;
  const iconColor = type === 'success' ? 'text-green-500' : 'text-red-500';

  const translateClass = visible 
    ? 'translate-x-0 opacity-100' 
    : (direction === 'rtl' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0');


  return (
    <div
      className={`fixed bottom-5 right-5 rtl:left-5 rtl:right-auto flex items-center p-4 rounded-lg z-50 text-[var(--foreground)] bg-[var(--card)] border-2 ${borderColor} shadow-lg transition-all duration-300 ${translateClass}`}
      role="alert"
      aria-live="assertive"
    >
      <Icon className={`w-6 h-6 me-3 flex-shrink-0 ${iconColor}`} />
      <span>{message}</span>
    </div>
  );
};

export default Toast;
