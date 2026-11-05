import React from 'react';
import {
  CornerArabesque,
  FloralGoldDivider,
  IslamicStarIcon,
  MosqueArchCrown,
} from './IslamicOrnaments';

/**
 * Section 7: Islamic Dua & Quranic Blessings
 * Authentic Islamic verses and marriage prayers for the bride & groom
 */
export default function DuaSection({ config }) {
  const { quranicVerse, sunnahDua } = config;

  return (
    <section className="invitation-section dua-section" id="dua">
      <div className="section-inner-container">
        <MosqueArchCrown className="dua-arch-crown" />

        <div className="section-header-tag">
          <IslamicStarIcon size={14} className="tag-star" />
          <span>Divine Supplication</span>
          <IslamicStarIcon size={14} className="tag-star" />
        </div>

        <h2 className="section-main-heading">Quranic Verse &amp; Wedding Dua</h2>
        <p className="section-subtext">Sacred prayers invoking peace, affection and divine mercy</p>

        {/* Card 1: Surah Ar-Rum */}
        <div className="dua-grand-card quran-verse-card">
          <CornerArabesque position="top-left" />
          <CornerArabesque position="top-right" />
          <CornerArabesque position="bottom-left" />
          <CornerArabesque position="bottom-right" />

          <div className="dua-card-badge">
            <IslamicStarIcon size={14} />
            <span>Holy Qur’an</span>
            <IslamicStarIcon size={14} />
          </div>

          <div className="dua-arabic-text" dir="rtl" lang="ar">
            {quranicVerse.arabic}
          </div>

          {quranicVerse.transliteration && (
            <p className="dua-transliteration">
              “{quranicVerse.transliteration}”
            </p>
          )}

          <p className="dua-english-translation">
            {quranicVerse.english}
          </p>

          <div className="dua-reference-tag">
            — {quranicVerse.reference}
          </div>
        </div>

        {/* Card 2: Prophetic Sunnah Dua for the Married Couple */}
        <div className="dua-grand-card sunnah-dua-card">
          <CornerArabesque position="top-left" />
          <CornerArabesque position="top-right" />
          <CornerArabesque position="bottom-left" />
          <CornerArabesque position="bottom-right" />

          <div className="dua-card-badge">
            <IslamicStarIcon size={14} />
            <span>Prophetic Wedding Blessing</span>
            <IslamicStarIcon size={14} />
          </div>

          <div className="dua-arabic-text highlight-gold-text" dir="rtl" lang="ar">
            {sunnahDua.arabic}
          </div>

          <p className="dua-transliteration">
            “{sunnahDua.transliteration}”
          </p>

          <p className="dua-english-translation">
            {sunnahDua.english}
          </p>

          <div className="dua-reference-tag">
            — {sunnahDua.reference}
          </div>
        </div>

        <FloralGoldDivider className="section-divider" />
      </div>
    </section>
  );
}
