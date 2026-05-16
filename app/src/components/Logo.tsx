import { Lightning } from '@phosphor-icons/react';
import { Link } from 'react-router';
// Import the user-uploaded logo from the workspace assets directory.
// Vite will bundle this asset so it can be referenced as the image source.
import logoFile from '../../../assets/logo.webp';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'compact';
  onNavigate?: () => void;
}

/**
 * Logo Component
 * 
 * Configuration:
 * - To use an image logo: update `logoSrc` below and uncomment the <img> line
 * - To use an SVG: place it in /public/logo.svg and uncomment the <img src="/logo.svg"> line
 * - To use a text + icon: keep current setup
 * 
 * Example updates:
 * 1. Image logo: logoSrc = "/logo.png" → <img src={logoSrc} alt="Phoenix Electricals" className="h-8 w-auto" />
 * 2. SVG logo: logoSrc = "/logo.svg" → <img src={logoSrc} alt="Phoenix Electricals" className="h-8 w-auto" />
 * 3. Icon only: remove text divs, keep Lightning icon only
 */

export function Logo({ className = '', variant = 'default', onNavigate }: LogoProps) {
  // Optional: Update this path when adding a logo image/SVG file
  // Use the uploaded image in `public/logo.webp` by default for long-term maintainability.
  // Change this to another filename in /public to swap the logo quickly.
  const logoSrc = logoFile || '/logo.webp'; // prefer imported asset, fallback to public path

  return (
    <Link to="/" onClick={onNavigate} className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-electric-black transition-opacity hover:opacity-80 ${className}`}>
      {/* Logo: larger image with improved contrast and subtle border/shadow */}
      <div className="flex h-14 md:h-16 items-center justify-center flex-shrink-0">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="Phoenix Electricals Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
        ) : (
          <Lightning className="h-6 w-6" weight="light" />
        )}
      </div>

      {/* Logo Text: Hide on compact variant or very small screens */}
      {variant !== 'compact' && (
        <div className="hidden xs:block">
          <div className="text-base font-bold leading-tight">PHOENIX</div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-earth-blue/80 leading-tight">
            Electricals
          </div>
        </div>
      )}
    </Link>
  );
}
