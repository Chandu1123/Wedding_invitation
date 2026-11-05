import React from 'react';

/**
 * Bismillah Calligraphy SVG - Vector rendering of In the name of Allah
 */
export function BismillahCalligraphy({ className = '' }) {
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
            <stop offset="0%" stopColor="#8C3349" />
            <stop offset="35%" stopColor="#C98A28" />
            <stop offset="70%" stopColor="#7A2038" />
            <stop offset="100%" stopColor="#8C3349" />
          </linearGradient>
        </defs>
        <text
          x="250"
          y="62"
          textAnchor="middle"
          fill="url(#goldCalligraphyGrad)"
          fontFamily="'Amiri', 'Traditional Arabic', serif"
          fontSize="46"
          fontWeight="bold"
          letterSpacing="1.5"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </text>
      </svg>
    </div>
  );
}

/**
 * Animated Crescent Moon and Star in Rose-Gold, Antique Gold & Pearl
 */
export function CrescentMoonIcon({ size = 50, className = '', glow = true }) {
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
          <stop offset="0%" stopColor="#F5C37E" />
          <stop offset="45%" stopColor="#C98A28" />
          <stop offset="100%" stopColor="#8C3349" />
        </linearGradient>
        {glow && (
          <filter id="moonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* Outer pearl dotted halo */}
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke="url(#crescentGoldGrad)"
        strokeWidth="1.2"
        strokeDasharray="2 4"
        opacity="0.7"
      />

      {/* Crescent Moon */}
      <path
        d="M39.8 40.5C31.2 40.5 24.2 33.5 24.2 24.9C24.2 19.3 27.2 14.3 31.7 11.5C21.6 12.3 13.6 20.7 13.6 31C13.6 41.9 22.4 50.7 33.3 50.7C41.2 50.7 48 46 51.1 39.3C47.7 40.1 43.8 40.5 39.8 40.5Z"
        fill="url(#crescentGoldGrad)"
        filter={glow ? 'url(#moonGlow)' : undefined}
      />

      {/* Star nestled in crescent */}
      <path
        d="M42 16L43.8 20.2L48 22L43.8 23.8L42 28L40.2 23.8L36 22L40.2 20.2L42 16Z"
        fill="#C98A28"
      />

      {/* Tiny pearls */}
      <circle cx="29" cy="19" r="1.8" fill="#FFFDF9" stroke="#C88A7B" strokeWidth="0.6" />
      <circle cx="48" cy="31" r="1.8" fill="#FFFDF9" stroke="#C88A7B" strokeWidth="0.6" />
    </svg>
  );
}

/**
 * 8-Pointed Islamic Star with Pearl Center
 */
export function IslamicStarIcon({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
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
      <circle cx="16" cy="16" r="3.2" fill="#FFF9FA" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/**
 * Colorful Rose-Gold, Crimson Blossom, Emerald Leaf & Pearl Divider
 */
export function FloralGoldDivider({ className = '' }) {
  return (
    <div className={`floral-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 360 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="floral-divider-svg"
      >
        <defs>
          <linearGradient id="roseGoldLine" x1="0" y1="18" x2="360" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9E5263" stopOpacity="0" />
            <stop offset="20%" stopColor="#C98A28" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#8C2442" stopOpacity="1" />
            <stop offset="80%" stopColor="#C98A28" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#9E5263" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="12" y1="18" x2="138" y2="18" stroke="url(#roseGoldLine)" strokeWidth="1.4" />
        <line x1="222" y1="18" x2="348" y2="18" stroke="url(#roseGoldLine)" strokeWidth="1.4" />

        {/* Left & Right Emerald & Rose Leaves */}
        <path
          d="M140 18C147 10 156 10 163 18C156 26 147 26 140 18Z"
          fill="#2E8B57"
          fillOpacity="0.45"
          stroke="#1E6B40"
          strokeWidth="1"
        />
        <path
          d="M197 18C204 10 213 10 220 18C213 26 204 26 197 18Z"
          fill="#2E8B57"
          fillOpacity="0.45"
          stroke="#1E6B40"
          strokeWidth="1"
        />

        {/* Lustrous Pearl & Gold Beads */}
        <circle cx="128" cy="18" r="3.2" fill="#FFFDFB" stroke="#C98A28" strokeWidth="1" />
        <circle cx="232" cy="18" r="3.2" fill="#FFFDFB" stroke="#C98A28" strokeWidth="1" />

        {/* Center Crimson-Rose Flower + Gold Pearl */}
        <g transform="translate(180, 18)">
          <circle cx="0" cy="-6.5" r="4.8" fill="#E05378" opacity="0.9" />
          <circle cx="6.5" cy="0" r="4.8" fill="#F28CA3" opacity="0.9" />
          <circle cx="0" cy="6.5" r="4.8" fill="#E05378" opacity="0.9" />
          <circle cx="-6.5" cy="0" r="4.8" fill="#F28CA3" opacity="0.9" />
          <circle cx="4.5" cy="-4.5" r="4" fill="#F7B2C4" opacity="0.85" />
          <circle cx="-4.5" cy="4.5" r="4" fill="#F7B2C4" opacity="0.85" />
          <circle cx="0" cy="0" r="3.8" fill="#FFFDF7" stroke="#C98A28" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Pressed Floral, Ruby-Rose, Emerald Leaf & Pearl Resin Corner Cluster
 */
export function CornerOrnament({ position = 'top-left', className = '' }) {
  return (
    <svg
      className={`corner-ornament corner-${position} ${className}`}
      width="88"
      height="88"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pearlShade" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#FDF4F5" />
          <stop offset="100%" stopColor="#D6A9B4" />
        </radialGradient>
      </defs>

      {/* Organic Gold & Rose Wavy Resin Edge Line */}
      <path
        d="M4 88C3 64 6 42 5 22C5 11 11 5 22 5C42 6 64 3 88 4"
        stroke="#C98A28"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Emerald Foliage & Baby's Breath Sprigs */}
      <path d="M18 18L38 8M18 18L29 25M18 18L8 40" stroke="#2D7A4F" strokeWidth="1.2" opacity="0.75" />
      <path d="M14 42L26 52M42 14L52 26" stroke="#C98A28" strokeWidth="1" opacity="0.75" />

      {/* Emerald Leaves */}
      <path d="M32 10C37 6 43 7 45 11C40 14 35 13 32 10Z" fill="#2E8B57" opacity="0.75" />
      <path d="M10 32C6 37 7 43 11 45C14 40 13 35 10 32Z" fill="#2E8B57" opacity="0.75" />

      {/* Main Ruby-Rose & Blush Pressed Flower */}
      <g transform="translate(21, 21)">
        <circle cx="0" cy="-7.5" r="6.2" fill="#D94B70" opacity="0.9" />
        <circle cx="7.5" cy="0" r="6.2" fill="#F0829D" opacity="0.9" />
        <circle cx="0" cy="7.5" r="6.2" fill="#D94B70" opacity="0.9" />
        <circle cx="-7.5" cy="0" r="6.2" fill="#F0829D" opacity="0.9" />
        <circle cx="5.2" cy="-5.2" r="5.2" fill="#F7B2C4" opacity="0.85" />
        <circle cx="-5.2" cy="5.2" r="5.2" fill="#F7B2C4" opacity="0.85" />
        <circle cx="0" cy="0" r="4.2" fill="url(#pearlShade)" stroke="#C98A28" strokeWidth="0.9" />
      </g>

      {/* Secondary Coral-Gold Blossom */}
      <g transform="translate(46, 14)">
        <circle cx="0" cy="-4.5" r="4.4" fill="#E87A64" opacity="0.88" />
        <circle cx="4.5" cy="0" r="4.4" fill="#F6B09E" opacity="0.88" />
        <circle cx="0" cy="4.5" r="4.4" fill="#E87A64" opacity="0.88" />
        <circle cx="-4.5" cy="0" r="4.4" fill="#F6B09E" opacity="0.88" />
        <circle cx="0" cy="0" r="2.8" fill="#FFFDF5" stroke="#C98A28" strokeWidth="0.7" />
      </g>

      {/* Third Blush Blossom along vertical edge */}
      <g transform="translate(14, 47)">
        <circle cx="0" cy="-4.5" r="4.4" fill="#E36888" opacity="0.88" />
        <circle cx="4.5" cy="0" r="4.4" fill="#F7ADC0" opacity="0.88" />
        <circle cx="0" cy="4.5" r="4.4" fill="#E36888" opacity="0.88" />
        <circle cx="-4.5" cy="0" r="4.4" fill="#F7ADC0" opacity="0.88" />
        <circle cx="0" cy="0" r="2.8" fill="#FFFDF5" stroke="#C98A28" strokeWidth="0.7" />
      </g>

      {/* White Lustrous Pearl Beads & Gold Buds */}
      <circle cx="33" cy="29" r="5.2" fill="url(#pearlShade)" stroke="#C98A28" strokeWidth="0.7" />
      <circle cx="11" cy="31" r="4" fill="url(#pearlShade)" stroke="#C98A28" strokeWidth="0.7" />
      <circle cx="31" cy="10" r="3.8" fill="url(#pearlShade)" stroke="#C98A28" strokeWidth="0.7" />
      <circle cx="63" cy="11" r="4.4" fill="url(#pearlShade)" stroke="#C98A28" strokeWidth="0.7" />
      <circle cx="11" cy="64" r="4.4" fill="url(#pearlShade)" stroke="#C98A28" strokeWidth="0.7" />

      {/* Sparkling Gold & Baby's Breath Dots */}
      <circle cx="53" cy="22" r="2.2" fill="#F5C37E" opacity="0.95" />
      <circle cx="58" cy="17" r="1.8" fill="#FFFFFF" opacity="0.95" />
      <circle cx="22" cy="55" r="2.2" fill="#F5C37E" opacity="0.95" />
      <circle cx="17" cy="59" r="1.8" fill="#FFFFFF" opacity="0.95" />
      <circle cx="27" cy="42" r="2.4" fill="#E05378" opacity="0.85" />
    </svg>
  );
}

// Keep CornerArabesque as an alias for CornerOrnament so all components get the lush floral corners
export function CornerArabesque(props) {
  return <CornerOrnament {...props} />;
}

/**
 * Wide Ornate Mughal Mosque Arch / Mihrab Silhouette in Rose-Gold, Gold & Pearl
 */
export function MosqueArchCrown({ className = '' }) {
  return (
    <svg
      viewBox="0 0 500 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mosque-arch-crown ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="archRoyalGrad" x1="0" y1="0" x2="500" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C98A28" stopOpacity="0.22" />
          <stop offset="30%" stopColor="#C98A28" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8C2442" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#C98A28" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C98A28" stopOpacity="0.22" />
        </linearGradient>
      </defs>
      <path
        d="M15 118C15 74 95 52 175 38C215 31 238 18 250 4C262 18 285 31 325 38C405 52 485 74 485 118"
        stroke="url(#archRoyalGrad)"
        strokeWidth="1.8"
      />
      <path
        d="M32 118C32 82 105 62 182 48C218 41 238 29 250 15C262 29 282 41 318 48C395 62 468 82 468 118"
        stroke="url(#archRoyalGrad)"
        strokeWidth="1.1"
        strokeDasharray="3 5"
      />
      {/* Top Finial Pearl & Ruby Jewel */}
      <circle cx="250" cy="5" r="4.5" fill="#FFFDFB" stroke="#C98A28" strokeWidth="1.3" />
      <circle cx="215" cy="30" r="2.8" fill="#E05378" opacity="0.8" />
      <circle cx="285" cy="30" r="2.8" fill="#E05378" opacity="0.8" />
    </svg>
  );
}

/**
 * Hanging Moroccan Stained-Glass, Rose-Gold & Pearl Islamic Lantern SVG
 */
export function HangingLantern({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 60 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`hanging-lantern ${className}`}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="lanternWarmGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF6D6" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
        </radialGradient>
      </defs>
      <line
        x1="30"
        y1="0"
        x2="30"
        y2="52"
        stroke="#C98A28"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <circle cx="30" cy="55" r="3.8" fill="#FFFDFB" stroke="#C98A28" strokeWidth="1.2" />
      <path
        d="M18 72C18 63 24 58 30 56C36 58 42 63 42 72H18Z"
        fill="rgba(224, 83, 120, 0.35)"
        stroke="#8C2442"
        strokeWidth="1.3"
      />
      <path
        d="M15 72H45L40 118H20L15 72Z"
        fill="rgba(255, 245, 247, 0.7)"
        stroke="#C98A28"
        strokeWidth="1.4"
      />
      <circle cx="30" cy="95" r="14" fill="url(#lanternWarmGlow)" />
      <path
        d="M23 118V88C23 82 26 78 30 76C34 78 37 82 37 88V118"
        stroke="#8C2442"
        strokeWidth="1"
        opacity="0.85"
      />
      <path
        d="M20 118H40L36 128H24L20 118Z"
        fill="rgba(201, 138, 40, 0.45)"
        stroke="#8C2442"
        strokeWidth="1.3"
      />
      <circle cx="30" cy="133" r="3" fill="#E05378" stroke="#C98A28" strokeWidth="0.9" />
    </svg>
  );
}

/**
 * Couple Monogram Royal Shield
 */
export function RoyalMonogramBadge({ monogram = 'C & K' }) {
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
 * Crisp Vector Icons for UI Controls
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
