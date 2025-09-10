import React from 'react';
import { cn } from '../../utils/cn';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white hover:from-red-500 hover:via-pink-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-orange-500/30 focus:ring-orange-500',
    secondary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 focus:ring-blue-500',
    outline: 'border-2 border-white/50 text-white bg-transparent hover:bg-white/10 hover:border-white hover:shadow-2xl hover:shadow-white/20 focus:ring-white',
    ghost: 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };
  
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
