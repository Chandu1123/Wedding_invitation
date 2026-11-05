import React from 'react';
import {
  BismillahCalligraphy,
  CrescentMoonIcon,
  HangingLantern,
  MosqueArchCrown,
  CornerArabesque,
  IslamicStarIcon,
} from './IslamicOrnaments';

/**
 * Section 1: Welcome / Opening Screen
 * Luxurious royal emerald & antique gold welcome ceremony screen
 */
export default function OpeningScreen({ config, onOpenInvitation }) {
  const { couple, islamicGreeting } = config;
  const groomName = couple.groom.fullName;
  const brideName = couple.bride.fullName;

  return (
    <div className="opening-screen-overlay" role="dialog" aria-modal="true" aria-label="Wedding Invitation Welcome Screen">
      {/* Background Islamic Geometric Pattern Backdrop */}
      <div className="opening-geometric-backdrop" aria-hidden="true" />
      <div className="opening-stardust-particles" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`stardust-particle particle-${i}`} />
        ))}
      </div>

      {/* Swaying Golden Lanterns */}
      <div className="opening-lanterns-wrapper" aria-hidden="true">
        <HangingLantern className="opening-lantern lantern-left" />
        <HangingLantern className="opening-lantern lantern-right" />
      </div>

      {/* Royal Card Arch Frame */}
      <div className="opening-royal-card">
        <CornerArabesque position="top-left" />
        <CornerArabesque position="top-right" />
        <CornerArabesque position="bottom-left" />
        <CornerArabesque position="bottom-right" />

        {/* Mosque Mihrab Arch Crown */}
        <MosqueArchCrown className="opening-arch-crown" />

        {/* Animated Golden Crescent & Star */}
        <div className="opening-crescent-wrapper">
          <CrescentMoonIcon size={68} glow={true} className="opening-crescent" />
        </div>

        {/* Bismillah Calligraphy */}
        <div className="opening-bismillah-section">
          <BismillahCalligraphy className="opening-bismillah-calligraphy" />
          <p className="opening-bismillah-translation">
            {islamicGreeting.bismillahTranslation}
          </p>
        </div>

        {/* Royal Subtitle Badge */}
        <div className="opening-header-badge">
          <IslamicStarIcon size={14} className="badge-star" />
          <span>{islamicGreeting.headerBadge}</span>
          <IslamicStarIcon size={14} className="badge-star" />
        </div>

        {/* Bride & Groom Royal Names */}
        <div className="opening-couple-names">
          <h1 className="opening-groom-name">{groomName}</h1>
          <div className="opening-ampersand-wrap">
            <span className="ampersand-line" />
            <span className="ampersand-symbol">&amp;</span>
            <span className="ampersand-line" />
          </div>
          <h1 className="opening-bride-name">{brideName}</h1>
        </div>

        <p className="opening-invitation-subtext">
          {islamicGreeting.invitationSubtitle}
        </p>

        {/* CTA Button: Open Wedding Invitation */}
        <div className="opening-action-wrapper">
          <button
            type="button"
            className="btn-open-invitation"
            onClick={onOpenInvitation}
            aria-label="Open Wedding Invitation"
          >
            <span className="btn-gold-shimmer" />
            <IslamicStarIcon size={18} className="btn-star-icon" />
            <span className="btn-text">Open Wedding Invitation</span>
            <IslamicStarIcon size={18} className="btn-star-icon" />
          </button>
          <p className="opening-tap-hint">✨ Tap to experience our wedding celebration ✨</p>
        </div>
      </div>
    </div>
  );
}
