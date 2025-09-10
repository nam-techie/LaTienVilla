// Common types for La Tiên Villa landing page
import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message?: string;
  agreeToTerms: boolean;
}

export interface ValidationError {
  field: keyof FormData;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: ValidationError[];
}

export interface Offer {
  icon: LucideIcon;
  title: string;
  description: string;
  value: string;
  highlight?: boolean;
}

export interface HeroBackground {
  src: string;
  title: string;
  subtitle: string;
}

export interface AlbumImage {
  src: string;
  title: string;
  description: string;
}

export interface AlbumPage {
  leftImage: AlbumImage;
  rightImage: AlbumImage;
}

export interface VillaType {
  name: string;
  description: string;
  area: string;
  price: string;
  icon: LucideIcon;
}

export interface LocationPoint {
  name: string;
  distance: string;
  icon: LucideIcon;
  color: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  icon: LucideIcon;
  color: string;
}

export interface Amenity {
  name: string;
  description: string;
  icon: LucideIcon;
  category: 'culture' | 'entertainment' | 'sports' | 'dining';
}

export interface ProjectInfo {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

// Navigation types
export interface NavItem {
  label: string;
  section: string;
}

// Theme types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Component props types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}
