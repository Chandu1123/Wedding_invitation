import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  FloralGoldDivider,
  CornerOrnament,
  MosqueArchCrown,
  IslamicStarIcon,
  MapPinIcon,
  WhatsAppIcon,
  CalendarIcon,
} from './IslamicOrnaments';

/**
 * Interactive Luxury Handcrafted Floral-Resin, Ruby-Rose, Emerald & Gold
 * 3D Muslim Wedding Invitation Book
 * - Desktop View: Centered closed cover unfolding into a grand 2-sided open spread
 *   (Left Page: Bismillah, Salam, Couple Showcase & Quran | Right Page: Hindupur Venue, Date Notice, Sunnah Dua & WhatsApp)
 * - Mobile View: 3D Page-Turning Hardcover Book (Cover -> Couple & Blessings -> Hindupur Venue & Duas)
 */
export default function WeddingBook({
  config,
  translations,
  lang,
  onFirstOpen,
  onOpenLanguageModal,
}) {
  const t = translations[lang] || translations.en;
  const { couple, location } = config;

  // Responsive state (Phone / Tablet portrait <= 768px)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop book state: isOpen = false (Cover centered), true (2-Sided Open Spread)
  const [isOpen, setIsOpen] = useState(false);
  // Desktop active tab highlight: 0 = Cover, 1 = Couple & Blessings, 2 = Venue & Duas
  const [activeTab, setActiveTab] = useState(0);

  // Mobile 3D book page index: 0 = Cover, 1 = Couple & Blessings, 2 = Venue & Duas
  const [mobilePage, setMobilePage] = useState(0);

  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  // 3D Parallax Tilt state for front cover portrait (Mouse + Touch)
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const applyTiltFromPoint = (clientX, clientY, rect) => {
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = Math.max(-14, Math.min(14, ((y - centerY) / centerY) * -12));
    const rotateY = Math.max(-14, Math.min(14, ((x - centerX) / centerX) * 12));
    const glareX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const glareY = Math.max(0, Math.min(100, (y / rect.height) * 100));
    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleCoverMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    applyTiltFromPoint(e.clientX, e.clientY, rect);
  };

  const handleCoverTouchMove = (e) => {
    if (!e.touches || !e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    applyTiltFromPoint(e.touches[0].clientX, e.touches[0].clientY, rect);
  };

  const handleCoverLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const triggerOpenAudio = useCallback(() => {
    if (onFirstOpen) {
      onFirstOpen();
    }
  }, [onFirstOpen]);

  // Navigate to a specific tab/page (0 = Cover, 1 = Blessings & Couple, 2 = Venue & Duas)
  const handleGoToPage = useCallback(
    (pageIdx) => {
      if (pageIdx < 0 || pageIdx > 2) return;
      if (pageIdx > 0) {
        triggerOpenAudio();
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
      setActiveTab(pageIdx);
      setMobilePage(pageIdx);
    },
    [triggerOpenAudio]
  );

  const handleOpenDesktop = useCallback(() => {
    triggerOpenAudio();
    setIsOpen(true);
    setActiveTab(1);
    setMobilePage(1);
  }, [triggerOpenAudio]);

  const handleCloseDesktop = useCallback(() => {
    setIsOpen(false);
    setActiveTab(0);
    setMobilePage(0);
  }, []);

  const handleNext = useCallback(() => {
    if (isMobile) {
      if (mobilePage < 2) {
        handleGoToPage(mobilePage + 1);
      }
    } else {
      if (!isOpen) {
        handleOpenDesktop();
      } else if (activeTab === 1) {
        setActiveTab(2);
      }
    }
  }, [isMobile, mobilePage, isOpen, activeTab, handleGoToPage, handleOpenDesktop]);

  const handlePrev = useCallback(() => {
    if (isMobile) {
      if (mobilePage > 0) {
        handleGoToPage(mobilePage - 1);
      }
    } else {
      if (isOpen) {
        handleCloseDesktop();
      }
    }
  }, [isMobile, mobilePage, isOpen, handleGoToPage, handleCloseDesktop]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Escape') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe gestures
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = Math.abs(
      e.changedTouches[0].clientY - (touchStartYRef.current || 0)
    );
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > deltaY) {
      if (deltaX < -40) handleNext();
      if (deltaX > 40) handlePrev();
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  // WhatsApp Share Action
  const handleShareOnWhatsApp = (e) => {
    e.stopPropagation();
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const fullText = `${t.whatsappShareText}\n${currentUrl}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // --------------------------------------------------------------------------
  // 1. FRONT COVER CONTENT (3D Animated Wedding Couple Portrait & Royal Foil)
  // --------------------------------------------------------------------------
  const renderCoverContent = () => (
    <>
      <div className="cover-spine-trim" aria-hidden="true">
        <span className="spine-gold-rib" />
        <span className="spine-gold-rib" />
        <span className="spine-gold-rib" />
        <span className="spine-gold-rib" />
        <span className="spine-gold-rib" />
      </div>

      {/* 4 Lush Pressed-Floral, Ruby-Rose, Emerald & Pearl Corners */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Side Pearl & Blossom Resin Accents */}
      <div className="resin-edge-pearls" aria-hidden="true">
        <span className="edge-pearl pearl-left-top" />
        <span className="edge-pearl pearl-left-bottom" />
        <span className="edge-pearl pearl-right-top" />
        <span className="edge-pearl pearl-right-bottom" />
      </div>

      {/* Ambient Floating Rose Petals & Sparkles */}
      <div className="cover-ambient-effects" aria-hidden="true">
        <span className="floating-petal petal-1">🌸</span>
        <span className="floating-petal petal-2">✨</span>
        <span className="floating-petal petal-3">🌹</span>
        <span className="floating-petal petal-4">✨</span>
        <span className="floating-petal petal-5">🌸</span>
      </div>

      <div className="page-body cover-page-body">
        {/* Top Bismillah Calligraphy & Royal Wedding Badge */}
        <div className="cover-header-group">
          <p className="arabic-bismillah-cover" lang="ar" dir="rtl">
            {t.bismillahArabic}
          </p>
          <span className="welcome-badge-cover">
            ✦ {t.invitationBadge} ✦
          </span>
        </div>

        {/* 3D Animated Wedding Couple Portrait in Illuminated Mughal Arch Frame */}
        <div
          className="cover-portrait-wrapper"
          onMouseMove={handleCoverMouseMove}
          onMouseLeave={handleCoverLeave}
          onTouchMove={handleCoverTouchMove}
          onTouchEnd={handleCoverLeave}
          style={
            tilt.x !== 0 || tilt.y !== 0
              ? {
                  transform: `perspective(750px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                }
              : undefined
          }
          title={`${t.groomName} & ${t.brideName}`}
        >
          <div className="portrait-glow-halo" aria-hidden="true" />
          <div className="portrait-crown-pearl" aria-hidden="true" />
          <div className="portrait-arch-frame">
            <img
              src="./images/wedding-couple-3d.png"
              onError={(e) => {
                e.currentTarget.src = './images/couple-3d.png';
              }}
              alt={`${t.groomName} & ${t.brideName}`}
              className="cover-portrait-img"
              loading="eager"
            />
            <div className="portrait-light-sweep" aria-hidden="true" />
            <div
              className="portrait-shimmer-glare"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0.05) 45%, transparent 70%)`,
              }}
              aria-hidden="true"
            />
            <div className="portrait-gold-rim" aria-hidden="true" />
          </div>
        </div>

        {/* Couple Names, Destination Ribbon & Open CTA */}
        <div className="cover-info-group">
          <h1 className="book-cover-names">
            <span className="cover-person-line">{t.groomName}</span>
            <span className="book-ampersand">
              <span className="amp-line" />
              <em>&amp;</em>
              <span className="amp-line" />
            </span>
            <span className="cover-person-line">{t.brideName}</span>
          </h1>

          <div className="cover-date-ribbon">
            <span className="ribbon-star">📍</span>
            <span className="welcome-date-pill">
              {t.venueCity}, {t.venueState}
            </span>
            <span className="ribbon-star">✦</span>
          </div>

          <div className="cover-open-cta-pill">
            <IslamicStarIcon size={13} />
            <span>{t.openInvitationBtn}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );

  // --------------------------------------------------------------------------
  // 2. INSIDE LEFT PAGE (Blessings, Salam, Couple Showcase & Holy Qur'an)
  // --------------------------------------------------------------------------
  const renderLeftPageContent = () => (
    <>
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />
      <MosqueArchCrown className="page-arch" />

      <div className="page-body">
        <p className="arabic-bismillah" lang="ar" dir="rtl">
          {t.bismillahArabic}
        </p>
        <p className="bismillah-translation">“{t.bismillahTranslation}”</p>

        <p className="arabic-salam" lang="ar" dir="rtl">
          {t.salamArabic}
        </p>
        <p className="salam-transliteration">{t.salamTransliteration}</p>

        <p className="invitation-lead">{t.familyInvitationLead}</p>

        {/* Royal Couple Showcase Plaque with 3D Cameo Medallion */}
        <div className="hero-couple-showcase">
          <div className="couple-mini-cameo" aria-hidden="true">
            <img
              src="./images/wedding-couple-3d.png"
              onError={(e) => {
                e.currentTarget.src = './images/couple-3d.png';
              }}
              alt=""
              className="couple-mini-cameo-img"
            />
          </div>

          <span className="couple-role-pill">{t.groomTitle}</span>
          <h2 className="hero-couple-name">{t.groomName}</h2>
          <p className="couple-parents-line">{t.groomParents}</p>

          <span className="hero-couple-conjunction">
            <IslamicStarIcon size={12} />
            <span>{t.quboolHaiArabic} • {t.quboolHai}</span>
            <IslamicStarIcon size={12} />
          </span>

          <span className="couple-role-pill">{t.brideTitle}</span>
          <h2 className="hero-couple-name">{t.brideName}</h2>
          <p className="couple-parents-line">{t.brideParents}</p>
        </div>

        {/* Holy Qur'an Verse (Surah Ar-Rum 30:21) */}
        <div className="page-dua-container">
          <span className="quran-badge-mini">✦ {t.quranBadge} ✦</span>
          <p className="arabic-blessing-compact" lang="ar" dir="rtl">
            {t.quranArabic}
          </p>
          <p className="dua-translation-compact">{t.quranTranslation}</p>
        </div>
      </div>

      <div className="page-footer-row">
        <button
          type="button"
          className="page-corner-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleGoToPage(0);
          }}
          title="Back to Book Cover"
        >
          ← {t.bookCoverTab}
        </button>

        {isMobile ? (
          <button
            type="button"
            className="page-corner-btn page-corner-btn--highlight"
            onClick={(e) => {
              e.stopPropagation();
              handleGoToPage(2);
            }}
            title="Turn to Venue & Duas page"
          >
            {t.venueTitle} &amp; Duas →
          </button>
        ) : (
          <span className="page-num-label">✦ {t.holyUnionBadge} ✦</span>
        )}
      </div>
    </>
  );

  // --------------------------------------------------------------------------
  // 3. INSIDE RIGHT PAGE (Hindupur Venue, Date Notice, Sunnah Dua & Share)
  // --------------------------------------------------------------------------
  const renderRightPageContent = () => (
    <>
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />
      <MosqueArchCrown className="page-arch" />

      <div className="page-body">
        {/* Ceremony Venue Spotlight Card: HINDUPUR */}
        <div className="book-venue-block">
          <div className="venue-icon-badge" aria-hidden="true">
            <MapPinIcon size={18} />
          </div>

          <span className="section-eyebrow">✦ {t.venueBadge} ✦</span>
          <h3 className="book-venue-title">{t.venueCity}</h3>
          <p className="venue-clean-details">{t.venueState}</p>
          <p className="venue-clean-address">{t.venueFullAddress}</p>

          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-primary btn-compact"
            onClick={(e) => e.stopPropagation()}
          >
            <MapPinIcon size={15} />
            <span>{t.venueDirectionsBtn}</span>
          </a>
        </div>

        <FloralGoldDivider />

        {/* Date & Time Announcement Showcase (No Date/Time Fixed Yet) */}
        <div className="royal-date-notice-box">
          <div className="notice-header-row">
            <CalendarIcon size={15} />
            <span className="section-eyebrow">{t.dateTimeBadge}</span>
          </div>
          <h4 className="notice-main-heading">{t.dateTimeTitle}</h4>
          <div className="notice-golden-pill">
            <IslamicStarIcon size={12} />
            <span>{t.datesToAnnounceValue}</span>
            <IslamicStarIcon size={12} />
          </div>
          <p className="notice-description-text">{t.dateTimeSubtext}</p>
        </div>

        {/* Prophetic Sunnah Wedding Blessing Dua & Both Families Note */}
        <div className="page-dua-container sunnah-dua-card">
          <span className="quran-badge-mini">✦ {t.sunnahBadge} ✦</span>
          <p className="arabic-blessing-compact" lang="ar" dir="rtl">
            {t.sunnahArabic}
          </p>
          <p className="dua-translation-compact">{t.sunnahTranslation}</p>
          <p className="closing-families-line">{t.bothFamiliesNote}</p>
        </div>

        {/* Direct WhatsApp Share CTA */}
        <div className="right-page-actions">
          <button
            type="button"
            onClick={handleShareOnWhatsApp}
            className="btn-whatsapp-compact"
            title="Share wedding invitation on WhatsApp"
          >
            <WhatsAppIcon size={15} />
            <span>{t.shareOnWhatsApp}</span>
          </button>
        </div>
      </div>

      <div className="page-footer-row">
        {isMobile ? (
          <>
            <button
              type="button"
              className="page-corner-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleGoToPage(1);
              }}
            >
              {t.prevPage}
            </button>
            <button
              type="button"
              className="page-corner-btn page-corner-btn--highlight"
              onClick={(e) => {
                e.stopPropagation();
                handleGoToPage(0);
              }}
            >
              {t.closeBookBtn}
            </button>
          </>
        ) : (
          <>
            <span className="page-num-label">📍 {t.venueCity} • Insha&apos;Allah</span>
            <button
              type="button"
              className="page-corner-btn page-corner-btn--highlight"
              onClick={handleCloseDesktop}
              title="Close book back to cover"
            >
              ← {t.closeBookBtn}
            </button>
          </>
        )}
      </div>
    </>
  );

  // --------------------------------------------------------------------------
  // RENDER COMPONENT
  // --------------------------------------------------------------------------
  const isBackDisabled = isMobile ? mobilePage === 0 : !isOpen;
  const isNextDisabled = isMobile ? mobilePage === 2 : isOpen;

  return (
    <div
      className="twoside-book-viewport"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Navigation Bar */}
      <header className="twoside-top-bar" aria-label="Invitation Navigation">
        <div className="top-nav-pills">
          <button
            type="button"
            className={`spread-pill ${
              (isMobile ? mobilePage === 0 : !isOpen) ? 'spread-pill--active' : ''
            }`}
            onClick={() => handleGoToPage(0)}
          >
            📖 {t.bookCoverTab}
          </button>
          <button
            type="button"
            className={`spread-pill ${
              (isMobile ? mobilePage === 1 : isOpen && activeTab === 1)
                ? 'spread-pill--active'
                : ''
            }`}
            onClick={() => handleGoToPage(1)}
          >
            ✨ {t.spread1Tab}
          </button>
          <button
            type="button"
            className={`spread-pill ${
              (isMobile ? mobilePage === 2 : isOpen && activeTab === 2)
                ? 'spread-pill--active'
                : ''
            }`}
            onClick={() => handleGoToPage(2)}
          >
            📍 {t.spread2Tab}
          </button>
        </div>

        <div className="top-bar-right-actions">
          {onOpenLanguageModal && (
            <button
              type="button"
              className="lang-top-btn"
              onClick={onOpenLanguageModal}
              title="Change Language / భాషను మార్చండి / भाषा बदलें"
            >
              <span>🌐</span>
              <span>{t.langName}</span>
            </button>
          )}

          <button
            type="button"
            className="whatsapp-top-btn"
            onClick={handleShareOnWhatsApp}
            title="Share invitation on WhatsApp"
          >
            <WhatsAppIcon size={14} />
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Main 3D Book Stage */}
      <div className="twoside-scene">
        {/* Desktop Left Side Arrow */}
        {!isMobile && (
          <button
            type="button"
            className={`book-side-arrow book-side-arrow--prev ${
              isBackDisabled ? 'is-disabled' : ''
            }`}
            onClick={handlePrev}
            disabled={isBackDisabled}
            aria-label="Previous Page"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span className="side-arrow-label">{t.bookCoverTab}</span>
          </button>
        )}

        {isMobile ? (
          /* ================================================================
             MOBILE VIEW: 3D Page-Turning Hardcover Book
             Each sheet hinges on the left velvet-gold spine & flips in 3D!
             ================================================================ */
          <div className="mobile-3d-book">
            {/* Bound Velvet & Gold Left Spine */}
            <div className="mobile-book-spine" aria-hidden="true">
              <span className="spine-gold-rib" />
              <span className="spine-gold-rib" />
              <span className="spine-gold-rib" />
              <span className="spine-gold-rib" />
              <span className="spine-gold-rib" />
            </div>

            {/* Stacked Gilded Paper Edges on Right */}
            <div className="mobile-book-edges" aria-hidden="true" />

            {/* SHEET 0: FRONT COVER */}
            <div
              className={`mobile-3d-sheet mobile-sheet--cover ${
                mobilePage > 0 ? 'mobile-sheet--turned' : 'mobile-sheet--active'
              }`}
              onClick={mobilePage === 0 ? () => handleGoToPage(1) : undefined}
              role={mobilePage === 0 ? 'button' : undefined}
              tabIndex={mobilePage === 0 ? 0 : -1}
              aria-label="Open Wedding Invitation Book"
            >
              <div className="leaf-face cover-face mobile-sheet-face">
                {renderCoverContent()}
              </div>
            </div>

            {/* SHEET 1: INSIDE PAGE 1 (Blessings & Couple) */}
            <div
              className={`mobile-3d-sheet mobile-sheet--page1 ${
                mobilePage > 1
                  ? 'mobile-sheet--turned'
                  : mobilePage === 1
                  ? 'mobile-sheet--active'
                  : 'mobile-sheet--under'
              }`}
            >
              <div className="leaf-face page-right mobile-sheet-face">
                <div className="cover-spine-trim" aria-hidden="true" />
                {renderLeftPageContent()}
              </div>
            </div>

            {/* SHEET 2: INSIDE PAGE 2 (Hindupur Venue, Date Notice & Duas) */}
            <div
              className={`mobile-3d-sheet mobile-sheet--page2 ${
                mobilePage === 2 ? 'mobile-sheet--active' : 'mobile-sheet--under'
              }`}
            >
              <div className="leaf-face page-right mobile-sheet-face">
                <div className="cover-spine-trim" aria-hidden="true" />
                {renderRightPageContent()}
              </div>
            </div>
          </div>
        ) : (
          /* ================================================================
             DESKTOP VIEW: Centered closed cover unfolding into 2-sided spread
             ================================================================ */
          <div
            className={`twoside-book ${
              !isOpen ? 'twoside-book--closed' : 'twoside-book--open'
            }`}
          >
            <div className="twoside-center-spine" aria-hidden="true" />
            <div className="book-page-depth-layers" aria-hidden="true" />

            <div
              className={`book-leaf cover-leaf ${
                isOpen ? 'book-leaf--turned' : ''
              }`}
              style={{ zIndex: isOpen ? 20 : 35 }}
            >
              {/* FRONT: 3D ANIMATED COUPLE COVER */}
              <div
                className="leaf-face leaf-front cover-face"
                onClick={!isOpen ? handleOpenDesktop : undefined}
                role={!isOpen ? 'button' : undefined}
                tabIndex={!isOpen ? 0 : -1}
                aria-label={!isOpen ? 'Open Wedding Invitation Book' : undefined}
              >
                {renderCoverContent()}
              </div>

              {/* BACK: LEFT PAGE (Couple & Blessings) */}
              <div
                className={`leaf-face leaf-back page-left ${
                  activeTab === 1 ? 'spread-page--highlighted' : ''
                }`}
              >
                {renderLeftPageContent()}
              </div>
            </div>

            {/* BASE: RIGHT PAGE (Hindupur Venue, Date Announcement & Duas) */}
            <div
              className={`book-static-right page-right ${
                !isOpen ? 'book-static-right--hidden' : ''
              } ${activeTab === 2 ? 'spread-page--highlighted' : ''}`}
            >
              {renderRightPageContent()}
            </div>
          </div>
        )}

        {/* Desktop Right Side Arrow */}
        {!isMobile && (
          <button
            type="button"
            className={`book-side-arrow book-side-arrow--next ${
              isNextDisabled ? 'is-disabled' : ''
            }`}
            onClick={handleNext}
            disabled={isNextDisabled}
            aria-label="Open Invitation Spread"
          >
            <span className="side-arrow-label">{t.openInvitationBtn}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <footer className="twoside-bottom-nav" aria-label="Book Navigation">
        <button
          type="button"
          className={`nav-btn-pill nav-btn-pill--prev ${
            isBackDisabled ? 'nav-btn-pill--disabled' : ''
          }`}
          onClick={handlePrev}
          disabled={isBackDisabled}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>{t.prevPage.replace('← ', '')}</span>
        </button>

        {/* Page Indicator Dots */}
        <div className="book-spread-nav" role="tablist">
          {[
            { idx: 0, label: t.bookCoverTab },
            { idx: 1, label: isMobile ? 'Couple' : 'Inside Spread 📖' },
            ...(isMobile ? [{ idx: 2, label: t.venueCity }] : []),
          ].map((item, i) => {
            const isSelected = isMobile
              ? mobilePage === item.idx
              : item.idx === 0
              ? !isOpen
              : isOpen;
            return (
              <React.Fragment key={item.idx}>
                {i > 0 && <span className="spread-separator">•</span>}
                <button
                  type="button"
                  className={`spread-dot-pill ${
                    isSelected ? 'spread-dot-pill--active' : ''
                  }`}
                  onClick={() => handleGoToPage(item.idx)}
                  role="tab"
                  aria-selected={isSelected}
                >
                  <span className="dot-indicator" />
                  <span className="dot-label">{item.label}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        <button
          type="button"
          className={`nav-btn-pill nav-btn-pill--next ${
            isNextDisabled ? 'nav-btn-pill--disabled' : ''
          }`}
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          <span>{t.nextPage.replace(' →', '')}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </footer>
    </div>
  );
}
