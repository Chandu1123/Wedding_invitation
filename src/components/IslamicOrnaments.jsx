import React from 'react';

/**
 * Bismillah Calligraphy SVG - Vector rendering of In the name of Allah
 */
export function BismillahCalligraphy({ className = '', color = '#D4AF37' }) {
  return (
    <div className={`bismillah-art-wrapper ${className}`} aria-label="Bismillahir Rahmanir Raheem">
      <svg
        viewBox="0 0 500 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bismillah-svg"
      >
        <defs>
          <linearGradient id="goldCalligraphyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA7A1E" />
            <stop offset="35%" stopColor="#F9E8A2" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#AA7A1E" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <text
          x="250"
          y="62"
          textAnchor="middle"
          fill="url(#goldCalligraphyGrad)"
          filter="url(#goldGlow)"
          fontFamily="'Amiri', 'Traditional Arabic', serif"
          fontSize="48"
          fontWeight="bold"
          letterSpacing="2"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </text>
      </svg>
    </div>
  );
}

/**
 * Animated Golden Crescent Moon and Star
 */
export function CrescentMoonIcon({ size = 56, className = '', glow = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`crescent-moon-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crescentGoldGrad" x1="12" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="85%" stopColor="#996515" />
          <stop offset="100%" stopColor="#664608" />
        </linearGradient>
        {glow && (
          <filter id="moonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* Decorative Outer Dotted Ring */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="url(#crescentGoldGrad)"
        strokeWidth="1"
        strokeDasharray="2 4"
        opacity="0.6"
      />

      {/* Crescent Moon */}
      <path
        d="M39.5 41C30.9 41 23.9 34 23.9 25.4C23.9 19.8 26.9 14.8 31.4 12C21.3 12.8 13.3 21.2 13.3 31.5C13.3 42.4 22.1 51.2 33 51.2C40.9 51.2 47.7 46.5 50.8 39.8C47.4 40.6 43.5 41 39.5 41Z"
        fill="url(#crescentGoldGrad)"
        filter={glow ? "url(#moonGlow)" : undefined}
      />

      {/* Star nestled in crescent */}
      <polygon
        points="42,16 43.8,20.2 48,22 43.8,23.8 42,28 40.2,23.8 36,22 40.2,20.2"
        fill="url(#crescentGoldGrad)"
      />

      {/* Accent Stardust dots */}
      <circle cx="28" cy="18" r="1.5" fill="#FFF2B2" opacity="0.9" />
      <circle cx="48" cy="32" r="1.3" fill="#FFF2B2" opacity="0.8" />
      <circle cx="34" cy="46" r="1.2" fill="#FFF2B2" opacity="0.7" />
    </svg>
  );
}

/**
 * 8-Pointed Islamic Star (Rub el Hizb)
 */
export function IslamicStarIcon({ size = 24, className = '', fill = 'none' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="7"
        y="7"
        width="18"
        height="18"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="7"
        y="7"
        width="18"
        height="18"
        transform="rotate(45 16 16)"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

/**
 * Antique Gold Floral Arabesque Divider
 */
export function FloralGoldDivider({ className = '' }) {
  return (
    <div className={`gold-divider-container ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="gold-divider-svg"
      >
        <defs>
          <linearGradient id="dividerGoldLine" x1="0" y1="16" x2="400" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AA7A1E" stopOpacity="0" />
            <stop offset="25%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFF2B2" />
            <stop offset="75%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#AA7A1E" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Center horizontal line */}
        <line x1="20" y1="16" x2="165" y2="16" stroke="url(#dividerGoldLine)" strokeWidth="1.2" />
        <line x1="235" y1="16" x2="380" y2="16" stroke="url(#dividerGoldLine)" strokeWidth="1.2" />

        {/* Left scroll vine */}
        <path
          d="M135 16C145 11 155 12 165 16C155 20 145 21 135 16Z"
          fill="#D4AF37"
          opacity="0.75"
        />
        <circle cx="120" cy="16" r="2" fill="#D4AF37" />
        <circle cx="105" cy="16" r="1.5" fill="#D4AF37" opacity="0.6" />

        {/* Right scroll vine */}
        <path
          d="M265 16C255 11 245 12 235 16C245 20 255 21 265 16Z"
          fill="#D4AF37"
          opacity="0.75"
        />
        <circle cx="280" cy="16" r="2" fill="#D4AF37" />
        <circle cx="295" cy="16" r="1.5" fill="#D4AF37" opacity="0.6" />

        {/* Center Medallion (8-pointed star & diamond) */}
        <g transform="translate(184, 0)">
          <rect x="8" y="8" width="16" height="16" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
          <rect x="8" y="8" width="16" height="16" stroke="#FFF2B2" strokeWidth="1.2" fill="none" transform="rotate(45 16 16)" />
          <circle cx="16" cy="16" r="3" fill="#D4AF37" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Corner Arabesque Filigree for Luxury Frames
 */
export function CornerArabesque({ position = 'top-left', className = '' }) {
  const transform = {
    'top-left': 'none',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)',
  }[position] || 'none';

  return (
    <div className={`corner-arabesque-wrap corner-${position} ${className}`} aria-hidden="true">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform, transformOrigin: '22px 22px' }}
      >
        <path
          d="M3 41V12C3 7 7 3 12 3H41"
          stroke="#D4AF37"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8 36V16C8 11.5 11.5 8 16 8H36"
          stroke="#C5A059"
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        <path
          d="M16 16C22 16 26 20 26 26C20 26 16 22 16 16Z"
          fill="#D4AF37"
          opacity="0.85"
        />
        <circle cx="5" cy="5" r="2.5" fill="#F3E5AB" />
        <circle cx="28" cy="14" r="1.5" fill="#D4AF37" />
        <circle cx="14" cy="28" r="1.5" fill="#D4AF37" />
      </svg>
    </div>
  );
}

/**
 * Hanging Traditional Islamic Lantern (Fanous)
 */
export function HangingLantern({ className = '', style = {} }) {
  return (
    <div className={`hanging-lantern-assembly ${className}`} style={style} aria-hidden="true">
      <svg
        width="60"
        height="140"
        viewBox="0 0 60 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lantern-svg"
      >
        <defs>
          <linearGradient id="lanternGold" x1="0" y1="0" x2="60" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#996515" />
            <stop offset="100%" stopColor="#4A3408" />
          </linearGradient>
          <radialGradient id="lampFlameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF9D2" stopOpacity="1" />
            <stop offset="45%" stopColor="#FFB84D" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Chain */}
        <line x1="30" y1="0" x2="30" y2="45" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Top Ring */}
        <circle cx="30" cy="47" r="4.5" stroke="url(#lanternGold)" strokeWidth="1.5" fill="none" />

        {/* Dome Cap */}
        <path
          d="M20 58C20 52 24 49 30 49C36 49 40 52 40 58H20Z"
          fill="url(#lanternGold)"
        />
        <rect x="18" y="58" width="24" height="4" rx="1" fill="#C5A059" />

        {/* Lantern Glass Body */}
        <path
          d="M17 62L22 100H38L43 62H17Z"
          fill="rgba(10, 46, 32, 0.75)"
          stroke="url(#lanternGold)"
          strokeWidth="1.5"
        />

        {/* Warm Internal Glowing Flame */}
        <circle cx="30" cy="80" r="14" fill="url(#lampFlameGlow)" className="lantern-flicker-flame" />
        <ellipse cx="30" cy="80" rx="3" ry="6" fill="#FFFDF0" />

        {/* Islamic Geometric Lattice on Glass */}
        <line x1="30" y1="62" x2="30" y2="100" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" />
        <line x1="22" y1="81" x2="38" y2="81" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" />
        <path d="M24 72L36 90M36 72L24 90" stroke="#D4AF37" strokeWidth="0.6" opacity="0.5" />

        {/* Lantern Base */}
        <path d="M20 100H40L37 108H23L20 100Z" fill="url(#lanternGold)" />
        <circle cx="30" cy="112" r="3" fill="#D4AF37" />
      </svg>
    </div>
  );
}

/**
 * Mosque Mihrab / Arch Crown
 */
export function MosqueArchCrown({ className = '', width = 120, height = 48 }) {
  return (
    <div className={`mosque-arch-crown ${className}`} aria-hidden="true">
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="archGoldGrad" x1="0" y1="24" x2="120" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AA7A1E" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#AA7A1E" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Pointed Islamic Arch Outline */}
        <path
          d="M10 46C20 46 35 44 48 34C54 29 57 20 60 10C63 20 66 29 72 34C85 44 100 46 110 46"
          stroke="url(#archGoldGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Crescent Finial at Top */}
        <circle cx="60" cy="6" r="3.5" fill="#FFF2B2" />
        <polygon points="60,0 61,3 64,3.5 61.5,5 62,8 60,6.5 58,8 58.5,5 56,3.5 59,3" fill="#D4AF37" />
      </svg>
    </div>
  );
}

/**
 * Couple Monogram Royal Shield
 */
export function RoyalMonogramBadge({ monogram = "C & K" }) {
  return (
    <div className="royal-monogram-badge" aria-label={`Monogram ${monogram}`}>
      <div className="monogram-outer-ring">
        <IslamicStarIcon size={16} className="star-top" />
        <span className="monogram-text">{monogram}</span>
        <IslamicStarIcon size={16} className="star-bottom" />
      </div>
    </div>
  );
}

/**
 * Crisp Vector Icons for UI Controls & Timeline
 */
export function CalendarIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ClockIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function MapPinIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 2C6.495 2 2 6.48 2 12.012c0 1.954.558 3.782 1.534 5.334L2 22l4.821-1.508c1.49.882 3.23 1.391 5.21 1.391 5.536 0 10.031-4.48 10.031-10.012C22.062 6.48 17.567 2 12.031 2zm5.795 14.195c-.244.686-1.42 1.317-1.957 1.365-.515.045-1.164.062-3.665-.97-2.671-1.103-4.382-3.829-4.516-4.008-.133-.178-1.077-1.436-1.077-2.739 0-1.303.684-1.942.928-2.206.244-.264.533-.33.71-.33.178 0 .356.002.511.01.167.008.39-.063.61.467.223.533.757 1.849.824 1.983.067.134.112.29.022.467-.089.177-.133.288-.266.444-.134.155-.28.347-.4.466-.134.133-.274.278-.118.545.156.267.693 1.144 1.488 1.85 1.024.908 1.888 1.19 2.155 1.323.267.133.422.111.578-.067.156-.178.667-.777.845-1.044.178-.266.356-.222.6-.133.245.089 1.557.733 1.824.867.267.133.445.2.512.311.066.111.066.644-.178 1.33z" />
    </svg>
  );
}

export function ShareIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

export function VolumeUpIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.2" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

export function VolumeMuteIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.2" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

export function SparklesIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="currentColor" fillOpacity="0.2" />
      <path d="M19 2l1 2.5L22.5 5.5 20 6.5 19 9l-1-2.5L15.5 5.5 18 4.5z" />
    </svg>
  );
}

export function RingIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="14" r="7" />
      <polygon points="12 3 15 7 9 7" fill="currentColor" />
    </svg>
  );
}

export function UtensilsIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2v8a2 2 0 0 1-2 2h-1v10h-2V12h-1a2 2 0 0 1-2-2V2" />
      <path d="M6 2v20" />
      <path d="M3 2h6v5a3 3 0 0 1-6 0V2z" />
    </svg>
  );
}
