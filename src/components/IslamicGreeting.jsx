import React from 'react';
import {
  BismillahCalligraphy,
  FloralGoldDivider,
  MosqueArchCrown,
  IslamicStarIcon,
} from './IslamicOrnaments';

/**
 * Section 2: Islamic Wedding Greeting
 * Elegant traditional Islamic salutation and family invitation message
 */
export default function IslamicGreeting({ config }) {
  const { islamicGreeting, familyInvitation } = config;

  return (
    <section className="invitation-section islamic-greeting-section" id="greeting">
      <div className="section-inner-container">
        {/* Crown Arch Ornament */}
        <MosqueArchCrown className="greeting-arch-crown" />

        {/* Sacred Bismillah Calligraphy */}
        <div className="greeting-bismillah-box">
          <BismillahCalligraphy />
          <p className="bismillah-subtext">
            {islamicGreeting.bismillahTranslation}
          </p>
        </div>

        <FloralGoldDivider className="section-divider" />

        {/* Traditional Salam Greeting */}
        <div className="salam-card">
          <div className="salam-arabic-text" dir="rtl" lang="ar">
            {islamicGreeting.salamArabic}
          </div>
          <p className="salam-transliteration">
            {islamicGreeting.salamTransliteration}
          </p>
          <p className="salam-translation">
            “{islamicGreeting.salamTranslation}”
          </p>
        </div>

        {/* Family Invitation Message */}
        <div className="family-invitation-lead">
          <div className="decorative-quote-mark" aria-hidden="true">❖</div>
          <p className="lead-paragraph">
            {familyInvitation.leadText}
          </p>
        </div>
      </div>
    </section>
  );
}
