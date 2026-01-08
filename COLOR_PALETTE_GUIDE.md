# Tese Creator Platform - Color Palette Guide

This document outlines the complete color system implemented for the Tese Creator Platform, using the specific colors provided by the user.

## Color Palette Overview

| Color Name | Hex Code | Usage | Meaning |
|------------|----------|-------|---------|
| Independence | `#1A1A1A` | Primary Text, Backgrounds | Structure, bold authority |
| Harvest Green | `#2E7D32` | Success States, Call-to-Action | Growth, money, land |
| Gold Standard | `#F9A825` | Highlights, Accents | Wealth, minerals, optimism |
| Heartbeat Red | `#C62828` | Errors, Alerts, "Live" Badges | Passion, urgency, sacrifice |
| Off-White | `#F5F5F5` | Backgrounds | Cleanliness, clarity (avoids harsh pure white) |

## Tailwind Configuration

The colors have been implemented in the Tailwind configuration with the following structure:

### Primary Brand Colors
- `independence`: `#1A1A1A` - Main text and background color
- `harvest-green`: `#2E7D32` - Primary brand color for CTAs and success states
- `gold-standard`: `#F9A825` - Accent color for highlights and warnings
- `heartbeat-red`: `#C62828` - Error and alert color
- `off-white`: `#F5F5F5` - Light background color

### Extended Color Variants
- `primary` - Based on Harvest Green with 50-900 shades
- `accent` - Based on Gold Standard with 50-900 shades
- `danger` - Based on Heartbeat Red with 50-900 shades
- `neutral` - Based on Independence with 50-900 shades

### Utility Colors
- `background` - Light and dark background variants
- `text` - Primary, secondary, muted, and white text colors
- `border` - Light and dark border colors

## Gradient Definitions

Four gradient combinations have been created:

1. **Gradient Brand**: `linear-gradient(135deg, #2E7D32 0%, #F9A825 50%, #C62828 100%)`
2. **Gradient Harvest Gold**: `linear-gradient(135deg, #2E7D32 0%, #F9A825 100%)`
3. **Gradient Heartbeat Gold**: `linear-gradient(135deg, #C62828 0%, #F9A825 100%)`
4. **Gradient Harvest Heartbeat**: `linear-gradient(135deg, #2E7D32 0%, #C62828 100%)`

## Components Updated

### 1. Tailwind Configuration (`tailwind.config.js`)
- Updated all color definitions to use the new palette
- Replaced gradient definitions with new color combinations
- Maintained extended color variants for flexibility

### 2. Button Component (`components/ui/Button.tsx`)
- Primary variant: `bg-harvest-green` with `text-off-white`
- Secondary variant: `bg-off-white` with `text-independence`
- Ghost variant: Transparent with hover effects using `harvest-green`

### 3. Navigation Component (`components/layout/Navigation.tsx`)
- Background: `bg-independence/80`
- Text colors: `text-off-white` and `text-neutral-300`
- Active states: `bg-harvest-green` and `text-harvest-green`
- Borders: `border-neutral-800/50`

### 4. Footer Component (`components/layout/Footer.tsx`)
- Background: `bg-independence`
- Text colors: `text-neutral-300` and `text-neutral-400`
- Interactive elements: `bg-harvest-green` and `text-harvest-green`
- Borders: `border-neutral-800/50`

### 5. Main Page (`app/page.tsx`)
- Updated all color references to use the new palette
- Backgrounds: `bg-independence` and `bg-off-white`
- Text: `text-off-white` and `text-neutral-400`
- Interactive elements: `bg-harvest-green` and `text-harvest-green`

### 6. TypeScript Definitions (`types/colors.d.ts`)
- Comprehensive type definitions for all color variants
- Usage examples and constants
- Color palette documentation

## Usage Examples

### Text Colors
```tsx
// Primary text
className="text-independence"

// Secondary text
className="text-neutral-600"

// Success text
className="text-harvest-green"
```

### Background Colors
```tsx
// Primary background
className="bg-off-white"

// Success background
className="bg-harvest-green"

// Error background
className="bg-heartbeat-red"
```

### Border Colors
```tsx
// Light border
className="border-neutral-200"

// Success border
className="border-harvest-green"
```

### Gradients
```tsx
// Brand gradient
className="bg-gradient-brand"

// Harvest to gold gradient
className="bg-gradient-harvest-gold"
```

## Color Psychology and Brand Alignment

The color palette has been carefully selected to align with the Tese brand identity:

- **Independence (Black)**: Represents structure and bold authority, perfect for text and backgrounds
- **Harvest Green**: Symbolizes growth, money, and land - ideal for success states and CTAs
- **Gold Standard**: Represents wealth, minerals, and optimism - perfect for highlights and accents
- **Heartbeat Red**: Conveys passion, urgency, and sacrifice - appropriate for errors and alerts
- **Off-White**: Provides cleanliness and clarity without the harshness of pure white

## Implementation Notes

1. All components have been updated to use the new color palette
2. The color system is fully typed with TypeScript definitions
3. Extended color variants provide flexibility for different use cases
4. Gradients offer dynamic visual interest while maintaining brand consistency
5. The palette is accessible and provides good contrast ratios

## Future Considerations

- Consider adding more specific semantic color names as the brand evolves
- Monitor accessibility compliance as new components are added
- Consider dark mode variants if needed in the future
- Maintain consistency across all touchpoints and marketing materials