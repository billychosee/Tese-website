// Tese Brand Color Palette
// This file documents the color system for the Tese Creator Platform

declare module 'tailwindcss/colors' {
  interface Colors {
    // Primary Brand Colors
    independence: string; // #1A1A1A - Primary Text, Backgrounds - Structure, bold authority
    'harvest-green': string; // #2E7D32 - Success States, Call-to-Action - Growth, money, land
    'gold-standard': string; // #F9A825 - Highlights, Accents - Wealth, minerals, optimism
    'heartbeat-red': string; // #C62828 - Errors, Alerts, "Live" Badges - Passion, urgency, sacrifice
    'off-white': string; // #F5F5F5 - Backgrounds - Cleanliness, clarity (avoids harsh pure white)

    // Extended Color Variants
    primary: {
      DEFAULT: string; // #2E7D32
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    accent: {
      DEFAULT: string; // #F9A825
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    danger: {
      DEFAULT: string; // #C62828
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    neutral: {
      DEFAULT: string; // #1A1A1A
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    background: {
      DEFAULT: string; // #F5F5F5
      light: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
      white: string;
    };
    border: {
      light: string;
      dark: string;
    };
  }
}

// Color Usage Guidelines
export interface ColorUsage {
  // Text Colors
  text: {
    primary: 'text-independence' | 'text-neutral-700';
    secondary: 'text-neutral-600' | 'text-neutral-500';
    muted: 'text-neutral-500' | 'text-neutral-400';
    white: 'text-off-white';
  };

  // Background Colors
  background: {
    primary: 'bg-off-white' | 'bg-background';
    secondary: 'bg-white';
    dark: 'bg-independence' | 'bg-neutral-900';
    success: 'bg-harvest-green' | 'bg-primary-500';
    warning: 'bg-gold-standard' | 'bg-accent-500';
    danger: 'bg-heartbeat-red' | 'bg-danger-500';
  };

  // Border Colors
  border: {
    light: 'border-neutral-200' | 'border-border-light';
    dark: 'border-neutral-700' | 'border-border-dark';
    success: 'border-harvest-green' | 'border-primary-500';
    warning: 'border-gold-standard' | 'border-accent-500';
    danger: 'border-heartbeat-red' | 'border-danger-500';
  };

  // Gradient Backgrounds
  gradient: {
    brand: 'bg-gradient-brand';
    harvestGold: 'bg-gradient-harvest-gold';
    heartbeatGold: 'bg-gradient-heartbeat-gold';
    harvestHeartbeat: 'bg-gradient-harvest-heartbeat';
  };
}

// Color Palette Constants
export const COLOR_PALETTE = {
  independence: '#1A1A1A',
  'harvest-green': '#2E7D32',
  'gold-standard': '#F9A825',
  'heartbeat-red': '#C62828',
  'off-white': '#F5F5F5',
} as const;

// Color Usage Examples
export const COLOR_EXAMPLES = {
  // Primary Text
  primaryText: 'text-independence',
  
  // Success States
  successBackground: 'bg-harvest-green',
  successText: 'text-harvest-green',
  
  // Call-to-Action
  ctaButton: 'bg-harvest-green hover:bg-primary-600',
  
  // Highlights and Accents
  highlight: 'text-gold-standard',
  accentBackground: 'bg-gold-standard',
  
  // Errors and Alerts
  errorText: 'text-heartbeat-red',
  errorBackground: 'bg-heartbeat-red',
  
  // Live Badges
  liveBadge: 'bg-heartbeat-red text-off-white',
  
  // Backgrounds
  pageBackground: 'bg-off-white',
  cardBackground: 'bg-white',
  
  // Borders
  cardBorder: 'border-neutral-200',
  divider: 'border-neutral-300',
} as const;