// Design system theme for La Tiên Villa - Hotel Elegant Theme
// Comprehensive design system with standardized tokens

export const theme = {
  // Color System
  colors: {
    primary: {
      50: '#faf8f5',
      100: '#f4f1ed',
      200: '#efebe5',
      300: '#e5ddd3',
      400: '#d4c4b0',
      500: '#c4a882',
      600: '#a68b5b',
      700: '#8b6f47',
      800: '#623e2a',
      900: '#4a2e1f',
    },
    secondary: {
      50: '#fefefe',
      100: '#fdfdfd',
      200: '#fafafa',
      300: '#f7f7f7',
      400: '#f1f1f1',
      500: '#e8e8e8',
      600: '#d1d1d1',
      700: '#b4b4b4',
      800: '#8a8a8a',
      900: '#5c5c5c',
    },
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    success: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    }
  },

  // Spacing System
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
    '4xl': '8rem',   // 128px
    '18': '4.5rem',  // 72px
    '88': '22rem',   // 352px
    '128': '32rem',  // 512px
    '144': '36rem',  // 576px
  },

  // Border Radius System
  borderRadius: {
    none: '0',
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    full: '9999px',
  },

  // Typography System
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
    base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
    '5xl': ['3rem', { lineHeight: '1' }],         // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }],      // 60px
    '7xl': ['4.5rem', { lineHeight: '1' }],       // 72px
    '8xl': ['6rem', { lineHeight: '1' }],         // 96px
    '9xl': ['8rem', { lineHeight: '1' }],         // 128px
  },

  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Shadow System
  shadows: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    glow: '0 0 20px rgb(59 130 246 / 0.3)',
    'glow-lg': '0 0 40px rgb(59 130 246 / 0.2)',
  },

  // Animation System
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '1000ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }
  },

  // Component Standards
  components: {
    button: {
      height: {
        sm: '2.5rem',   // 40px
        md: '3rem',     // 48px
        lg: '4rem',     // 64px
      },
      padding: {
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem',     // 32px
      },
      borderRadius: '0.75rem', // 12px
      fontSize: 'base',
      fontWeight: 'semibold',
    },
    card: {
      borderRadius: '1rem',    // 16px
      padding: '1.5rem',       // 24px
      shadow: 'md',
    },
    input: {
      height: '3rem',          // 48px
      borderRadius: '0.5rem',  // 8px
      padding: '1rem',         // 16px
      fontSize: 'base',
    },
    section: {
      padding: {
        sm: '5rem',    // 80px
        md: '6rem',    // 96px
        lg: '8rem',    // 128px
      },
      margin: {
        sm: '2rem',    // 32px
        md: '3rem',    // 48px
        lg: '4rem',    // 64px
      }
    }
  },

  // Breakpoints (for reference)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  }
} as const;

export type Theme = typeof theme;

// Type definitions for better type safety
type ColorShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

// Helper functions for consistent styling
export const getSpacing = (size: keyof typeof theme.spacing) => theme.spacing[size];
export const getColor = (color: keyof typeof theme.colors, shade: ColorShade) => {
  const colorPalette = theme.colors[color];
  return colorPalette?.[shade];
};
export const getFontSize = (size: keyof typeof theme.fontSize) => theme.fontSize[size];
export const getShadow = (size: keyof typeof theme.shadows) => theme.shadows[size];
export const getBorderRadius = (size: keyof typeof theme.borderRadius) => theme.borderRadius[size];
