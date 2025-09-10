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
    primary: 'text-white hover:shadow-2xl focus:ring-2 focus:ring-offset-2' + ' ' + 'bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:via-orange-700 hover:to-amber-800 hover:shadow-amber-600/30 focus:ring-amber-500',
    secondary: 'text-white hover:shadow-2xl focus:ring-2 focus:ring-offset-2' + ' ' + 'bg-gradient-to-r hover:shadow-blue-500/30 focus:ring-blue-500' + ' ' + 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
    outline: 'border-2 border-white/50 text-white bg-transparent hover:bg-white/10 hover:border-white hover:shadow-2xl hover:shadow-white/20 focus:ring-white',
    ghost: 'hover:shadow-lg focus:ring-2 focus:ring-offset-2' + ' ' + 'text-amber-800 hover:text-amber-900 hover:bg-amber-50 focus:ring-amber-500'
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
