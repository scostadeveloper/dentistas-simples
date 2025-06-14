import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  fullScreen?: boolean;
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  fullScreen = false,
  text,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'text-dental-primary',
    secondary: 'text-dental-secondary',
    white: 'text-white',
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50'
    : 'min-h-[200px]';

  return (
    <div 
      className={`${containerClasses} flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-label={text || "Carregando"}
    >
      <Loader2 
        className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}
        aria-hidden="true"
      />
      {text && (
        <p className={`mt-4 text-sm ${colorClasses[color]}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner; 