import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  BismillahCalligraphy,
  CrescentMoonIcon,
  FloralGoldDivider,
  CornerArabesque,
  MosqueArchCrown,
  IslamicStarIcon,
  MapPinIcon,
  WhatsAppIcon,
  CalendarIcon,
} from './IslamicOrnaments';

/**
 * Section: Luxury 3D Two-Sided Islamic Opening Wedding Book
 * Authentic hardcover emerald velvet with gold foil, 3D turning pages, and wax seal
 */
export default function WeddingBook({ config, translations, lang, onFirstOpen }) {
  const t = translations[lang] || translations.en;
  const { couple, location } = config;

  // spread: 0 = Closed Front Cover, 1 = Pages 1 & 2 (Spread 1), 2 = Pages 3 & 4 (Spread 2)
  const [spread, setSpread] = useState(0);
  const touchStartXRef = useRef(null);

  // Navigate between spreads
  const goToSpread = useCallback(
    (targetSpread) => {
      if (targetSpread < 0 || targetSpread > 2) return;
      if (spread === 0 && targetSpread > 0 && onFirstOpen) {
        onFirstOpen();
      }
      setSpread(targetSpread);
    },
    [spread, onFirstOpen]
  );

  const handleNext = useCallback(() => {
    if (spread < 2) goToSpread(spread + 1);
  }, [spread, goToSpread]);

  const handlePrev = useCallback(() => {
    if (spread > 0) goToSpread(spread - 1);
  }, [spread, goToSpread]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Mobile Touch Gestures
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX < -45) handleNext();
    if (deltaX > 45) handlePrev();
    touchStartXRef.current = null;
  };

  // WhatsApp Share Action
  const handleShareOnWhatsApp = (e) => {
    e.stopPropagation();
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const fullText = `${t.whatsappShareText}\n${currentUrl}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="wedding-book-viewport"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="3D Wedding Invitation Book"
    >
      {/* Top Spread Selector Tabs */}
      <header className="book-top-bar" aria-label="Book Navigation Tabs">
        <button
          type="button"
          className={`spread-tab-btn ${spread === 0 ? 'is-active-tab' : ''}`}
          onClick={() => goToSpread(0)}
        >
          {t.bookCoverTab}
        </button>
        <button
          type="button"
          className={`spread-tab-btn ${spread === 1 ? 'is-active-tab' : ''}`}
          onClick={() => goToSpread(1)}
        >
          {t.spread1Tab}
        </button>
        <button
          type="button"
          className={`spread-tab-btn ${spread === 2 ? 'is-active-tab' : ''}`}
          onClick={() => goToSpread(2)}
        >
          {t.spread2Tab}
        </button>
      </header>

      {/* 3D Stage Container */}
      <div className="book-3d-stage">
        <div className={`book-3d-scene ${spread === 0 ? 'book-scene-closed' : 'book-scene-open'}`}>
          <div className="book-spine-hinge" aria-hidden="true" />

          {/* ================================================================
              LEAF 1: HINGED ON LEFT SPINE
              - Face 1A: Front Cover (rests on right when closed)
              - Face 1B: Page 1 (inside left spread when open)
              ================================================================ */}
          <div
            className={`book-leaf book-leaf-1 ${spread >= 1 ? 'leaf-flipped' : ''}`}
            style={{ zIndex: spread === 0 ? 50 : 20 }}
          >
            {/* FRONT FACE (Spread 0: Closed Cover) */}
            <div className="leaf-face face-front cover-face">
              <CornerArabesque position="top-left" />
              <CornerArabesque position="top-right" />
              <CornerArabesque position="bottom-left" />
              <CornerArabesque position="bottom-right" />

              <MosqueArchCrown className="book-cover-arch" />

              {/* Glowing Golden Crescent & Star */}
              <div className="cover-crescent-halo">
                <CrescentMoonIcon size={64} glow={true} className="cover-moon" />
              </div>

              {/* Sacred Bismillah Calligraphy */}
              <div className="cover-bismillah-wrap">
                <BismillahCalligraphy />
                <p className="cover-bismillah-translation">{t.bismillahTranslation}</p>
              </div>

              {/* Royal Badge */}
              <div className="cover-royal-badge">
                <IslamicStarIcon size={14} className="cover-star" />
                <span>{t.invitationBadge}</span>
                <IslamicStarIcon size={14} className="cover-star" />
              </div>

              {/* Bride & Groom Names */}
              <div className="cover-couple-names">
                <h1 className="cover-groom-title">{t.groomName}</h1>
                <div className="cover-ampersand-divider">
                  <span className="cover-gold-line" />
                  <span className="cover-ampersand">&amp;</span>
                  <span className="cover-gold-line" />
                </div>
                <h1 className="cover-bride-title">{t.brideName}</h1>
              </div>

              {/* Wax Seal with Monogram "C & K" */}
              <div className="cover-wax-seal" onClick={() => goToSpread(1)} title="Tap to Open">
                <div className="wax-seal-outer">
                  <div className="wax-seal-inner">
                    <span className="wax-seal-monogram">{couple.monogram}</span>
                    <span className="wax-seal-qubool">قَبِلْتُ</span>
                  </div>
                </div>
              </div>

              {/* Action Button: Open Wedding Invitation */}
              <div className="cover-action-wrap">
                <button
                  type="button"
                  className="btn-book-open"
                  onClick={() => goToSpread(1)}
                  aria-label="Open Wedding Invitation"
                >
                  <span className="btn-shimmer-sparkle" />
                  <IslamicStarIcon size={16} />
                  <span>{t.openInvitationBtn}</span>
                  <IslamicStarIcon size={16} />
                </button>
              </div>
            </div>

            {/* BACK FACE (Spread 1: Page 1 - Inside Left Spread) */}
            <div className="leaf-face face-back page-left">
              <CornerArabesque position="top-left" />
              <CornerArabesque position="bottom-left" />
              <MosqueArchCrown className="page-arch-crown" />

              <div className="page-content-box">
                {/* Bismillah Calligraphy */}
                <div className="page-bismillah-mini">
                  <span className="page-arabic-bismillah">{t.bismillahArabic}</span>
                  <span className="page-bismillah-meaning">“{t.bismillahTranslation}”</span>
                </div>

                {/* Assalamu Alaikum Salutation */}
                <div className="page-salam-card">
                  <span className="page-salam-arabic">{t.salamArabic}</span>
                  <p className="page-salam-translit">{t.salamTransliteration}</p>
                  <p className="page-salam-trans">“{t.salamTranslation}”</p>
                </div>

                <FloralGoldDivider className="page-mini-divider" />

                {/* Holy Quran Surah Ar-Rum */}
                <div className="page-quran-box">
                  <div className="page-quran-badge">
                    <IslamicStarIcon size={12} />
                    <span>{t.quranBadge}</span>
                    <IslamicStarIcon size={12} />
                  </div>
                  <p className="page-quran-arabic" dir="rtl">{t.quranArabic}</p>
                  <p className="page-quran-translation">{t.quranTranslation}</p>
                </div>

                {/* Cordial Family Invitation Lead */}
                <div className="page-family-lead">
                  <p>{t.familyInvitationLead}</p>
                </div>
              </div>

              <div className="page-footer-nav">
                <span className="page-number-tag">{t.pageOf} 1</span>
              </div>
            </div>
          </div>

          {/* ================================================================
              LEAF 2: HINGED ON LEFT SPINE
              - Face 2A: Page 2 (Right page of Spread 1: The Couple)
              - Face 2B: Page 3 (Left page of Spread 2: Venue & Date Notice)
              ================================================================ */}
          <div
            className={`book-leaf book-leaf-2 ${spread >= 2 ? 'leaf-flipped' : ''}`}
            style={{ zIndex: spread <= 1 ? 30 : 15 }}
          >
            {/* FRONT FACE (Spread 1: Page 2 - Right page: Couple Feature) */}
            <div className="leaf-face face-front page-right">
              <CornerArabesque position="top-right" />
              <CornerArabesque position="bottom-right" />
              <MosqueArchCrown className="page-arch-crown" />

              <div className="page-content-box">
                <span className="page-section-tag">{t.holyUnionBadge}</span>

                <h2 className="page-wedding-title">{t.nikahWalimaTitle}</h2>
                <p className="page-wedding-subtitle">{t.weddingSubtitle}</p>

                {/* Couple Presentation */}
                <div className="book-couple-container">
                  {/* Groom */}
                  <div className="book-person-block groom-block">
                    <span className="person-role-chip">{t.groomTitle}</span>
                    <h3 className="person-full-name">{t.groomName}</h3>
                    <p className="person-parents-line">{t.groomParents}</p>
                    <p className="person-family-name">({t.groomFamily})</p>
                  </div>

                  {/* Central "Qubool Hai" Medallion */}
                  <div className="book-union-medallion">
                    <div className="medallion-line" />
                    <div className="medallion-center">
                      <span className="medallion-arabic">{t.quboolHaiArabic}</span>
                      <span className="medallion-qubool">{t.quboolHai}</span>
                    </div>
                    <div className="medallion-line" />
                  </div>

                  {/* Bride */}
                  <div className="book-person-block bride-block">
                    <span className="person-role-chip">{t.brideTitle}</span>
                    <h3 className="person-full-name">{t.brideName}</h3>
                    <p className="person-parents-line">{t.brideParents}</p>
                    <p className="person-family-name">({t.brideFamily})</p>
                  </div>
                </div>

                <FloralGoldDivider className="page-mini-divider" />

                <div className="page-turn-hint">
                  <button
                    type="button"
                    className="btn-page-action btn-next-page"
                    onClick={handleNext}
                  >
                    <span>{t.nextPage}</span>
                    <IslamicStarIcon size={14} />
                  </button>
                </div>
              </div>

              <div className="page-footer-nav">
                <span className="page-number-tag">{t.pageOf} 2</span>
              </div>
            </div>

            {/* BACK FACE (Spread 2: Page 3 - Inside Left Spread: Venue & Dates) */}
            <div className="leaf-face face-back page-left">
              <CornerArabesque position="top-left" />
              <CornerArabesque position="bottom-left" />
              <MosqueArchCrown className="page-arch-crown" />

              <div className="page-content-box">
                {/* Venue Spotlight: Hindupur */}
                <div className="page-venue-card">
                  <div className="venue-card-badge">
                    <MapPinIcon size={16} />
                    <span>{t.venueBadge}</span>
                    <MapPinIcon size={16} />
                  </div>

                  <h3 className="venue-main-city">{t.venueCity}</h3>
                  <p className="venue-state-country">{t.venueState}</p>
                  <p className="venue-full-line">{t.venueFullAddress}</p>

                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-google-maps"
                  >
                    <MapPinIcon size={15} />
                    <span>{t.venueDirectionsBtn}</span>
                  </a>
                </div>

                <FloralGoldDivider className="page-mini-divider" />

                {/* Date & Time Announcement Notice */}
                <div className="page-datetime-notice-card">
                  <div className="notice-icon-halo">
                    <CalendarIcon size={24} />
                  </div>

                  <span className="notice-badge">{t.dateTimeBadge}</span>
                  <h4 className="notice-title">{t.dateTimeTitle}</h4>
                  <p className="notice-subtext">{t.dateTimeSubtext}</p>

                  <div className="notice-highlight-pill">
                    <IslamicStarIcon size={14} />
                    <span>{t.datesToAnnounceValue}</span>
                    <IslamicStarIcon size={14} />
                  </div>
                </div>
              </div>

              <div className="page-footer-nav">
                <button
                  type="button"
                  className="page-nav-link"
                  onClick={handlePrev}
                >
                  {t.prevPage}
                </button>
                <span className="page-number-tag">{t.pageOf} 3</span>
              </div>
            </div>
          </div>

          {/* ================================================================
              STATIC RIGHT BASE PAGE: PAGE 4
              - Fixed under Leaf 2 on the right side
              - Visible on Spread 2: Prophetic Wedding Dua & WhatsApp Sharing
              ================================================================ */}
          <div className="book-leaf-static page-right" style={{ zIndex: 10 }}>
            <CornerArabesque position="top-right" />
            <CornerArabesque position="bottom-right" />
            <MosqueArchCrown className="page-arch-crown" />

            <div className="page-content-box">
              {/* Prophetic Wedding Blessing Dua */}
              <div className="page-sunnah-dua-box">
                <div className="sunnah-badge">
                  <IslamicStarIcon size={12} />
                  <span>{t.sunnahBadge}</span>
                  <IslamicStarIcon size={12} />
                </div>

                <p className="sunnah-arabic-text" dir="rtl">{t.sunnahArabic}</p>
                <p className="sunnah-translit-text">{t.sunnahTransliteration}</p>
                <p className="sunnah-trans-text">{t.sunnahTranslation}</p>
                <span className="sunnah-ref-tag">{t.sunnahReference}</span>
              </div>

              <FloralGoldDivider className="page-mini-divider" />

              {/* Family Blessings */}
              <div className="page-closing-families">
                <p className="closing-note-text">{t.bothFamiliesNote}</p>
              </div>

              {/* WhatsApp Share Button */}
              <div className="page-share-actions">
                <button
                  type="button"
                  className="btn-whatsapp-action"
                  onClick={handleShareOnWhatsApp}
                >
                  <WhatsAppIcon size={18} />
                  <span>{t.shareOnWhatsApp}</span>
                </button>

                <button
                  type="button"
                  className="btn-close-book"
                  onClick={() => goToSpread(0)}
                  title="Close book back to front cover"
                >
                  <span>{t.closeBookBtn}</span>
                </button>
              </div>
            </div>

            <div className="page-footer-nav">
              <span className="page-number-tag">{t.pageOf} 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dots & Quick Page Controls */}
      <footer className="book-bottom-nav">
        <button
          type="button"
          className="book-arrow-btn"
          onClick={handlePrev}
          disabled={spread === 0}
          aria-label="Previous Page"
        >
          ‹
        </button>

        <div className="book-nav-dots" role="tablist">
          <button
            type="button"
            className={`nav-dot ${spread === 0 ? 'is-active-dot' : ''}`}
            onClick={() => goToSpread(0)}
            title="Cover"
          />
          <button
            type="button"
            className={`nav-dot ${spread === 1 ? 'is-active-dot' : ''}`}
            onClick={() => goToSpread(1)}
            title="Pages 1 & 2"
          />
          <button
            type="button"
            className={`nav-dot ${spread === 2 ? 'is-active-dot' : ''}`}
            onClick={() => goToSpread(2)}
            title="Pages 3 & 4"
          />
        </div>

        <button
          type="button"
          className="book-arrow-btn"
          onClick={handleNext}
          disabled={spread === 2}
          aria-label="Next Page"
        >
          ›
        </button>
      </footer>
    </div>
  );
}
