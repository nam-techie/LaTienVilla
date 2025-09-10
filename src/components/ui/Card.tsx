import React from 'react';
import { cn } from '../../utils/cn';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  gradient = false,
  ...props
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = cn(
    gradient && 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20',
    !gradient && 'bg-white shadow-lg border border-gray-100',
    hover && 'hover:shadow-2xl hover:scale-105 hover:-translate-y-1'
  );
  
  const classes = cn(baseClasses, variantClasses, className);
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
