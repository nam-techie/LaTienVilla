import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

interface TextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  error,
  required = false,
  icon,
  className = '',
  placeholder = '',
  rows = 4,
  maxLength
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const isLabelFloating = isFocused || hasValue;
  const characterCount = value.length;
  const isNearLimit = maxLength && characterCount > maxLength * 0.8;

  return (
    <div className={cn('relative group', className)}>
      {/* Textarea Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className="absolute left-4 top-6 z-10 text-primary-600 group-focus-within:text-orange-500 transition-colors duration-300">
            {icon}
          </div>
        )}

        {/* Textarea Field */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          placeholder={isFocused ? placeholder : ''}
          rows={rows}
          maxLength={maxLength}
          className={cn(
            // Base styles
            'w-full px-4 pt-8 pb-4 bg-white/90 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 text-primary-800 font-medium resize-none',
            // Focus styles
            'focus:outline-none focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-400/20',
            // Error styles
            error ? 'border-red-400 bg-red-50/90' : 'border-white/50 hover:border-white/70',
            // Icon padding
            icon ? 'pl-12' : 'pl-4',
            // Glass morphism effect
            'shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10'
          )}
        />

        {/* Floating Label */}
        <label
          className={cn(
            'absolute transition-all duration-300 pointer-events-none font-medium',
            isLabelFloating
              ? 'top-2 text-xs text-primary-600 group-focus-within:text-orange-500'
              : 'top-6 text-base text-primary-700',
            // Adjust left position based on icon and floating state
            isLabelFloating
              ? (icon ? 'left-12' : 'left-4')
              : (icon ? 'left-12' : 'left-4'),
            error && 'text-red-500'
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {/* Focus Ring Effect */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none',
            isFocused
              ? 'ring-2 ring-orange-400/30 ring-offset-2 ring-offset-transparent'
              : ''
          )}
        />

        {/* Character Count */}
        {maxLength && (
          <div className={cn(
            'absolute bottom-2 right-4 text-xs transition-colors duration-300',
            isNearLimit ? 'text-orange-500' : 'text-primary-500',
            characterCount === maxLength && 'text-red-500'
          )}>
            {characterCount}/{maxLength}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-600 text-sm font-medium animate-fade-in-up">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Success Indicator */}
      {!error && hasValue && (
        <div className="absolute right-4 top-6 text-green-500 animate-bounce-in">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Textarea;
