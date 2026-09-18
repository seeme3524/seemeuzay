import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showTagline = true,
}) => {
  // Height sizing
  const heights = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28',
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 400 380"
        className={`${heights[size]} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBF75" />
            <stop offset="50%" stopColor="#C79A3B" />
            <stop offset="100%" stopColor="#9C7222" />
          </linearGradient>
          <linearGradient id="goldLight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5E4B5" />
            <stop offset="60%" stopColor="#C79A3B" />
            <stop offset="100%" stopColor="#8A631B" />
          </linearGradient>
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#C79A3B" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Medallion Circle in Background */}
        <circle cx="170" cy="115" r="70" fill="#141414" stroke="url(#goldGrad)" strokeWidth="7" />
        <circle cx="170" cy="115" r="63" fill="#141414" stroke="url(#goldLight)" strokeWidth="1.5" />

        {/* Monogram inside Medallion: Interlocking S & U symbol */}
        <g transform="translate(170, 115)">
          {/* Stylized Yin-Yang/Interlocking 'S' curve in white & gold */}
          <path
            d="M -30 -15 C -30 -38, 30 -38, 30 -15 C 30 5, -28 0, -28 20 C -28 38, 28 38, 28 20"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Center inner 'U' mark */}
          <path
            d="M -9 -4 L -9 8 C -9 15, 9 15, 9 8 L 9 -4"
            fill="none"
            stroke="url(#goldLight)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <circle cx="-16" cy="24" r="5.5" fill="url(#goldLight)" />
          <circle cx="16" cy="-24" r="5.5" fill="#FFFFFF" />
        </g>

        {/* 2. Modern City High-rise Towers (Right side of logo) */}
        <g id="skyscrapers">
          {/* Far right tower */}
          <path d="M 285 105 L 305 80 L 325 90 L 325 210 L 285 210 Z" fill="#1A1A1A" stroke="url(#goldGrad)" strokeWidth="2.5" />
          {/* Main tall central skyscraper */}
          <path d="M 245 65 L 280 30 L 295 40 L 295 210 L 245 210 Z" fill="#111111" stroke="url(#goldLight)" strokeWidth="3" />
          {/* Tower facets / Golden Architectural Windows */}
          <line x1="262" y1="80" x2="262" y2="195" stroke="url(#goldLight)" strokeWidth="2.5" strokeDasharray="6 4" />
          <line x1="275" y1="70" x2="275" y2="195" stroke="url(#goldLight)" strokeWidth="2.5" strokeDasharray="6 4" />
          <line x1="302" y1="100" x2="302" y2="195" stroke="#DFBF75" strokeWidth="2" strokeDasharray="5 4" />
          <line x1="312" y1="110" x2="312" y2="195" stroke="#DFBF75" strokeWidth="2" strokeDasharray="5 4" />
        </g>

        {/* 3. House Roofline / Gable in the Foreground */}
        <g id="house_gable">
          {/* Small background gable on left */}
          <path d="M 65 210 L 105 185 L 140 210" fill="none" stroke="url(#goldGrad)" strokeWidth="4" />
          {/* Main center house roof */}
          <polygon points="185,170 85,235 285,235" fill="#141414" />
          <path d="M 75 240 L 185 168 L 295 240" fill="none" stroke="url(#goldLight)" strokeWidth="6.5" strokeLinejoin="miter" />
          {/* 4-pane window inside house */}
          <rect x="175" y="195" width="20" height="20" fill="#202020" stroke="url(#goldLight)" strokeWidth="2" />
          <line x1="185" y1="195" x2="185" y2="215" stroke="url(#goldLight)" strokeWidth="1.5" />
          <line x1="175" y1="205" x2="195" y2="205" stroke="url(#goldLight)" strokeWidth="1.5" />
        </g>

        {/* 4. Split Brand Box: [ SEEME | UZAY ] */}
        <g id="brand_box" transform="translate(45, 230)">
          {/* Gold outer border container */}
          <rect
            x="0"
            y="0"
            width="310"
            height="56"
            fill="#111111"
            stroke="url(#goldLight)"
            strokeWidth="3.5"
            rx="1"
          />
          {/* Left half: Black background for SEEME */}
          <rect x="2" y="2" width="153" height="52" fill="#111111" />
          <text
            x="78"
            y="38"
            fill="#FFFFFF"
            fontFamily="'Manrope', 'Montserrat', sans-serif"
            fontSize="32"
            fontWeight="800"
            letterSpacing="2"
            textAnchor="middle"
          >
            SEEME
          </text>

          {/* Right half: White background for UZAY */}
          <rect x="155" y="2" width="153" height="52" fill="#FFFFFF" />
          <text
            x="231"
            y="38"
            fill="#111111"
            fontFamily="'Manrope', 'Montserrat', sans-serif"
            fontSize="32"
            fontWeight="800"
            letterSpacing="2"
            textAnchor="middle"
          >
            UZAY
          </text>
        </g>

        {/* 5. Subtitle: — REAL ESTATE — */}
        <g id="subtitle" transform="translate(200, 318)">
          {/* Left golden rule */}
          <line x1="-140" y1="-7" x2="-80" y2="-7" stroke="url(#goldGrad)" strokeWidth="2" />
          <text
            x="0"
            y="0"
            fill="url(#goldLight)"
            fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
            fontSize="23"
            fontWeight="700"
            letterSpacing="5"
            textAnchor="middle"
          >
            REAL ESTATE
          </text>
          {/* Right golden rule */}
          <line x1="80" y1="-7" x2="140" y2="-7" stroke="url(#goldGrad)" strokeWidth="2" />
        </g>

        {/* 6. Tagline: FIND • INVEST • GROW */}
        {showTagline && (
          <text
            x="200"
            y="348"
            fill="#C79A3B"
            fontFamily="'Manrope', sans-serif"
            fontSize="11.5"
            fontWeight="600"
            letterSpacing="4"
            textAnchor="middle"
            opacity="0.95"
          >
            FIND • INVEST • GROW
          </text>
        )}
      </svg>
    </div>
  );
};
