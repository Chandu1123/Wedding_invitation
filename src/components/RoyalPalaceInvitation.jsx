import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  CrescentMoonIcon as CrescentMoon,
  MosqueArchCrown,
  CornerOrnament,
  FloralGoldDivider,
  IslamicStarIcon as RubElHizb,
} from './IslamicOrnaments';

/**
 * ============================================================================
 * ROYAL MUGHAL PALACE GATES (SHAHI DARWAZA) & UNFURLING SHAHI FARMAN SCROLL
 * File: src/components/RoyalPalaceInvitation.jsx
 * ============================================================================
 * A completely original, colorful, 3D interactive Muslim Wedding experience:
 *  1. 3D Hinged Double Palace Doors (Shahi Darwaza) that swing open from the
 *     center when the guest taps the Royal Jewelled Seal.
 *  2. An Unfurling Imperial Silk & 24K Gold Scroll (Shahi Farman) with 3D
 *     cylindrical gold rollers, lotus finials, and swinging crimson tassels.
 *  3. Flanking 3D Mughal Jharokha Arch Pavilions on desktop + 4 interactive
 *     unfurling chapters (and Full Scroll mode) on both mobile & desktop.
 *  4. Live interactive "Shower Rose Petals & Duas" particle celebration.
 */

const PETAL_TYPES = ['🌹', '🌸', '🌺', '✨', '🌼', '💮'];

export default function RoyalPalaceInvitation({
  config,
  translations,
  lang = 'en',
  onFirstOpen,
  onOpenLanguageModal,
}) {
  const t = translations[lang] || translations.en;

  // Whether the 3D Double Palace Gates are swung open
  const [gatesOpen, setGatesOpen] = useState(false);
  // Active chapter in the Shahi Farman Scroll (0..3)
  const [activeChapter, setActiveChapter] = useState(0);
  // Whether the user toggled "Full Scroll View" (all chapters unfurled together)
  const [isFullScroll, setIsFullScroll] = useState(false);
  // Unfurling animation trigger when switching chapters
  const [isUnfurling, setIsUnfurling] = useState(false);
  // Image fallback if portrait fails
  const [imgError, setImgError] = useState(false);
  // Copy link status
  const [copied, setCopied] = useState(false);
  // Interactive Rose Petal & Dua Shower state
  const [petals, setPetals] = useState([]);
  const [blessingCount, setBlessingCount] = useState(786);
  const [showBlessingToast, setShowBlessingToast] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const scrollBodyRef = useRef(null);

  // Trigger a celebratory shower of rose petals, jasmine blossoms & gold stars
  const triggerPetalShower = useCallback((showToast = true) => {
    const batchId = Date.now();
    const newPetals = Array.from({ length: 28 }, (_, idx) => ({
      id: `${batchId}-${idx}`,
      symbol: PETAL_TYPES[idx % PETAL_TYPES.length],
      left: `${Math.random() * 94 + 3}%`,
      delay: `${(Math.random() * 1.1).toFixed(2)}s`,
      duration: `${(2.6 + Math.random() * 2.2).toFixed(2)}s`,
      size: `${(0.95 + Math.random() * 0.75).toFixed(2)}rem`,
      drift: `${Math.round((Math.random() - 0.5) * 110)}px`,
    }));

    setPetals(newPetals);
    setBlessingCount((prev) => prev + 1);

    if (showToast) {
      setShowBlessingToast(true);
      setTimeout(() => setShowBlessingToast(false), 3600);
    }

    setTimeout(() => {
      setPetals((current) =>
        current.filter((p) => !p.id.startsWith(`${batchId}-`))
      );
    }, 5000);
  }, []);

  // Unlock & swing open the 3D Palace Double Doors
  const handleUnlockGates = () => {
    setGatesOpen(true);
    triggerPetalShower(false);
    if (onFirstOpen) onFirstOpen();
  };

  // Close the 3D Palace Gates to replay the grand entrance
  const handleLockGates = () => {
    setGatesOpen(false);
  };

  // Switch chapter with an unfurling scroll animation
  const handleSelectChapter = (idx) => {
    if (!gatesOpen) {
      setGatesOpen(true);
      if (onFirstOpen) onFirstOpen();
    }
    setIsFullScroll(false);
    if (idx === activeChapter) return;
    setIsUnfurling(true);
    setActiveChapter(idx);
    if (scrollBodyRef.current) {
      scrollBodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setTimeout(() => setIsUnfurling(false), 520);
  };

  const handleNextChapter = () => {
    if (!gatesOpen) {
      handleUnlockGates();
      return;
    }
    if (activeChapter < 3) {
      handleSelectChapter(activeChapter + 1);
    }
  };

  const handlePrevChapter = () => {
    if (!gatesOpen) return;
    if (activeChapter > 0) {
      handleSelectChapter(activeChapter - 1);
    } else {
      handleLockGates();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNextChapter();
      if (e.key === 'ArrowLeft') handlePrevChapter();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Touch swipe for mobile chapter switching
  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < 55) return;
    if (distance > 55) {
      handleNextChapter();
    } else if (distance < -55) {
      handlePrevChapter();
    }
  };

  // WhatsApp share
  const handleWhatsAppShare = (e) => {
    if (e) e.stopPropagation();
    const shareUrl =
      typeof window !== 'undefined'
        ? window.location.href
        : config?.meta?.siteUrl || '';
    const message = `${t.whatsappShareText}${shareUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Copy link
  const handleCopyLink = (e) => {
    if (e) e.stopPropagation();
    const shareUrl =
      typeof window !== 'undefined'
        ? window.location.href
        : config?.meta?.siteUrl || '';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Couple portrait helper
  const renderCouplePortrait = (sizeClass = '') => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const rawPortrait =
      config?.couple?.portraitImage || 'images/wedding-couple-3d.png';
    const cleanPath = rawPortrait.startsWith('/')
      ? rawPortrait.slice(1)
      : rawPortrait;
    const resolvedSrc = rawPortrait.startsWith('http')
      ? rawPortrait
      : `${baseUrl}${cleanPath}`;

    if (!imgError) {
      return (
        <img
          src={resolvedSrc}
          alt={`${t.groomName} & ${t.brideName}`}
          className={`palace-couple-img ${sizeClass}`}
          onError={() => setImgError(true)}
        />
      );
    }

    return (
      <div className="palace-couple-fallback">
        <CrescentMoon className="fallback-moon" />
        <span className="fallback-monogram">C &amp; K</span>
      </div>
    );
  };

  const chapters = [
    { id: 0, icon: '🕌', label: t.mobileCoverTab || 'Couple' },
    { id: 1, icon: '📖', label: t.mobileCoupleTab || 'Families' },
    { id: 2, icon: '✨', label: t.mobileCeremonyTab || 'Ceremonies' },
    { id: 3, icon: '📍', label: t.mobileVenueTab || 'Hindupur' },
  ];

  // ==========================================================================
  // CHAPTER 1: SHAHI WELCOME & COUPLE JHAROKHA
  // ==========================================================================
  const renderChapterCouple = () => (
    <section className="farman-chapter farman-chapter--couple">
      <div className="farman-bismillah-header">
        <p className="farman-arabic-calligraphy" dir="rtl" lang="ar">
          {t.bismillahArabic}
        </p>
        <p className="farman-bismillah-sub">{t.bismillahTranslation}</p>
      </div>

      <div className="farman-salam-banner">
        <p className="farman-salam-arabic" dir="rtl" lang="ar">
          {t.salamArabic}
        </p>
        <p className="farman-salam-translit">{t.salamTransliteration}</p>
      </div>

      {/* Ornate Mughal Jharokha Arch Frame with 3D Couple Portrait */}
      <div className="jharokha-couple-stage">
        <div className="jharokha-arch-frame">
          <div className="jharokha-arch-top-crown">
            <RubElHizb className="crown-star-icon" />
            <span>{t.holyUnionBadge}</span>
            <RubElHizb className="crown-star-icon" />
          </div>

          <div className="jharokha-portrait-window">
            <div className="jharokha-halo-ring" aria-hidden="true" />
            {renderCouplePortrait('jharokha-main-img')}
            <div className="jharokha-qubool-seal">
              <span className="seal-arabic" dir="rtl" lang="ar">
                {t.quboolHaiArabic}
              </span>
              <span className="seal-latin">{t.quboolHai}</span>
            </div>
          </div>

          {/* Groom & Bride Royal Name Cards */}
          <div className="royal-couple-names-grid">
            <div className="royal-person-card royal-person-card--groom">
              <span className="person-role-pill">{t.groomTitle}</span>
              <h2 className="person-royal-name">{t.groomName}</h2>
              <p className="person-parents-line">{t.groomParents}</p>
            </div>

            <div className="royal-union-emblem" aria-hidden="true">
              <div className="union-heart-ring">
                <span>&amp;</span>
              </div>
            </div>

            <div className="royal-person-card royal-person-card--bride">
              <span className="person-role-pill person-role-pill--bride">
                {t.brideTitle}
              </span>
              <h2 className="person-royal-name">{t.brideName}</h2>
              <p className="person-parents-line">{t.brideParents}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Rose Petal & Dua Shower Button */}
      <div className="farman-blessing-bar">
        <button
          type="button"
          className="btn-shower-petals"
          onClick={() => triggerPetalShower(true)}
        >
          <span>{t.showerBlessingsBtn}</span>
          <span className="blessing-counter-badge">♥ {blessingCount}</span>
        </button>
      </div>
    </section>
  );

  // ==========================================================================
  // CHAPTER 2: HOLY QUR'AN VERSE & ROYAL FAMILY INVITATION
  // ==========================================================================
  const renderChapterFamilies = () => (
    <section className="farman-chapter farman-chapter--families">
      {/* Illuminated Quranic Plaque */}
      <div className="meenakari-quran-plaque">
        <div className="plaque-header-pill">
          <RubElHizb className="crown-star-icon" />
          <span>{t.quranBadge}</span>
          <RubElHizb className="crown-star-icon" />
        </div>
        <p className="plaque-arabic-verse" dir="rtl" lang="ar">
          {t.quranArabic}
        </p>
        <p className="plaque-verse-translation">{t.quranTranslation}</p>
      </div>

      <FloralGoldDivider className="farman-divider" />

      {/* Royal Family Invitation Decree */}
      <div className="royal-family-decree">
        <span className="decree-eyebrow">{t.invitationBadge}</span>
        <h3 className="decree-title">{t.nikahWalimaTitle}</h3>
        <p className="decree-lead-text">{t.familyInvitationLead}</p>

        <p className="decree-invited-by-label">{t.cordiallyInvitedBy}</p>

        <div className="royal-families-crest-grid">
          <div className="family-crest-card family-crest-card--groom">
            <div className="crest-crown-icon">👑</div>
            <h4 className="crest-family-name">{t.groomFamily}</h4>
            <p className="crest-family-sub">{t.groomParents}</p>
          </div>

          <div className="family-crest-card family-crest-card--bride">
            <div className="crest-crown-icon">🌸</div>
            <h4 className="crest-family-name">{t.brideFamily}</h4>
            <p className="crest-family-sub">{t.brideParents}</p>
          </div>
        </div>

        <p className="decree-closing-note">{t.bothFamiliesNote}</p>
      </div>
    </section>
  );

  // ==========================================================================
  // CHAPTER 3: AUSPICIOUS DATE ANNOUNCEMENT & 3 CEREMONIAL ARCH CARDS
  // ==========================================================================
  const renderChapterCeremonies = () => (
    <section className="farman-chapter farman-chapter--ceremonies">
      {/* Celestial Moon-Sighting Date & Time Announcement Box */}
      <div className="celestial-date-pavilion">
        <div className="celestial-astrolabe-icon" aria-hidden="true">
          <CrescentMoon className="astrolabe-moon" />
        </div>
        <span className="celestial-eyebrow">{t.dateTimeBadge}</span>
        <h3 className="celestial-main-title">{t.dateTimeTitle}</h3>

        <div className="celestial-pillars-grid">
          <div className="celestial-pillar-item">
            <span className="pillar-label">📅 {t.datesToAnnounce}</span>
            <strong className="pillar-value">{t.datesToAnnounceValue}</strong>
          </div>
          <div className="celestial-pillar-item">
            <span className="pillar-label">🕰️ {t.timingsToAnnounce}</span>
            <strong className="pillar-value">{t.timingsToAnnounceValue}</strong>
          </div>
        </div>

        <p className="celestial-subtext">{t.dateTimeSubtext}</p>
      </div>

      <FloralGoldDivider className="farman-divider" />

      {/* 3 Colorful Mughal Arch Celebration Cards */}
      <div className="ceremonies-showcase">
        <h4 className="ceremonies-heading">{t.ceremoniesHeading}</h4>
        <p className="ceremonies-subheading">{t.ceremoniesSubheading}</p>

        <div className="ceremonies-arch-grid">
          <div className="ceremony-arch-card ceremony-arch-card--ruby">
            <div className="ceremony-arch-icon">🕌</div>
            <span className="ceremony-arch-badge">{t.event1Badge}</span>
            <h5 className="ceremony-arch-title">{t.event1Title}</h5>
            <p className="ceremony-arch-desc">{t.event1Desc}</p>
          </div>

          <div className="ceremony-arch-card ceremony-arch-card--emerald">
            <div className="ceremony-arch-icon">🌺</div>
            <span className="ceremony-arch-badge">{t.event2Badge}</span>
            <h5 className="ceremony-arch-title">{t.event2Title}</h5>
            <p className="ceremony-arch-desc">{t.event2Desc}</p>
          </div>

          <div className="ceremony-arch-card ceremony-arch-card--gold">
            <div className="ceremony-arch-icon">✨</div>
            <span className="ceremony-arch-badge">{t.event3Badge}</span>
            <h5 className="ceremony-arch-title">{t.event3Title}</h5>
            <p className="ceremony-arch-desc">{t.event3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );

  // ==========================================================================
  // CHAPTER 4: HINDUPUR VENUE SANCTUARY, PROPHETIC DUA & WHATSAPP SHARE
  // ==========================================================================
  const renderChapterVenue = () => (
    <section className="farman-chapter farman-chapter--venue">
      {/* Hindupur Royal Venue Card */}
      <div className="hindupur-palace-card">
        <div className="hindupur-compass-badge">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <span className="hindupur-eyebrow">{t.venueBadge}</span>
        <h3 className="hindupur-city-title">{t.venueCity}</h3>
        <p className="hindupur-state-sub">{t.venueState}</p>
        <p className="hindupur-full-address">{t.venueFullAddress}</p>

        <div className="hindupur-action-row">
          <a
            href={t.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hindupur-maps"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            <span>{t.venueDirectionsBtn}</span>
          </a>
        </div>
      </div>

      {/* Prophetic Wedding Blessing Dua */}
      <div className="meenakari-quran-plaque meenakari-quran-plaque--sunnah">
        <div className="plaque-header-pill">
          <RubElHizb className="crown-star-icon" />
          <span>{t.sunnahBadge}</span>
          <RubElHizb className="crown-star-icon" />
        </div>
        <p className="plaque-arabic-verse" dir="rtl" lang="ar">
          {t.sunnahArabic}
        </p>
        <p className="plaque-transliteration">{t.sunnahTransliteration}</p>
        <p className="plaque-verse-translation">{t.sunnahTranslation}</p>
        <span className="plaque-hadith-ref">{t.sunnahReference}</span>
      </div>

      {/* Share & Copy Actions */}
      <div className="farman-share-bar">
        <button
          type="button"
          className="btn-whatsapp-royal"
          onClick={handleWhatsAppShare}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>{t.shareOnWhatsApp}</span>
        </button>

        <button
          type="button"
          className="btn-copy-royal"
          onClick={handleCopyLink}
        >
          <span>{copied ? t.linkCopied : t.copyLink}</span>
        </button>
      </div>

      <p className="farman-footer-blessing">{t.footerBlessing}</p>
    </section>
  );

  return (
    <div className="shahi-palace-experience">
      {/* Live Animated Rose Petal & Gold Sparkle Shower Overlay */}
      {petals.length > 0 && (
        <div className="petal-shower-layer" aria-hidden="true">
          {petals.map((p) => (
            <span
              key={p.id}
              className="falling-petal"
              style={{
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
                fontSize: p.size,
                '--petal-drift': p.drift,
              }}
            >
              {p.symbol}
            </span>
          ))}
        </div>
      )}

      {/* Celebratory Blessing Toast */}
      {showBlessingToast && (
        <div className="blessing-toast-banner" role="status">
          <span>✨ {t.blessingToast} ✨</span>
        </div>
      )}

      {/* ====================================================================
          TOP ROYAL NAVIGATION BAR (Always accessible)
          ==================================================================== */}
      <header className="shahi-top-bar">
        <div className="shahi-top-left">
          {gatesOpen ? (
            <button
              type="button"
              className="shahi-gate-toggle-btn"
              onClick={handleLockGates}
              title="Close Palace Gates"
            >
              <span>{t.closeBookBtn}</span>
            </button>
          ) : (
            <span className="shahi-brand-pill">
              <RubElHizb className="crown-star-icon" />
              <span>C &amp; K • {t.venueCity}</span>
            </span>
          )}
        </div>

        {/* Chapter Quick Pills when Palace Gates are Open */}
        {gatesOpen && (
          <nav className="shahi-chapter-tabs" aria-label="Invitation Chapters">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                type="button"
                className={`shahi-chapter-pill ${
                  !isFullScroll && activeChapter === ch.id
                    ? 'shahi-chapter-pill--active'
                    : ''
                }`}
                onClick={() => handleSelectChapter(ch.id)}
              >
                <span className="chapter-pill-icon">{ch.icon}</span>
                <span className="chapter-pill-text">{ch.label}</span>
              </button>
            ))}
            <button
              type="button"
              className={`shahi-chapter-pill shahi-chapter-pill--all ${
                isFullScroll ? 'shahi-chapter-pill--active' : ''
              }`}
              onClick={() => setIsFullScroll((prev) => !prev)}
            >
              <span>📜</span>
              <span className="chapter-pill-text">
                {isFullScroll ? t.chapterViewBtn : t.viewAllScrollBtn}
              </span>
            </button>
          </nav>
        )}

        <div className="shahi-top-actions">
          <button
            type="button"
            className="shahi-lang-btn"
            onClick={onOpenLanguageModal}
            aria-label="Switch Language"
          >
            <span>🌐</span>
            <span>{t.langName}</span>
          </button>

          <button
            type="button"
            className="shahi-whatsapp-mini"
            onClick={handleWhatsAppShare}
            aria-label={t.shareOnWhatsApp}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>
        </div>
      </header>

      {/* ====================================================================
          MAIN 3D PALACE STAGE: SHAHI DARWAZA + UNFURLING SHAHI FARMAN
          ==================================================================== */}
      <div
        className={`shahi-stage-container ${
          gatesOpen ? 'shahi-stage--open' : 'shahi-stage--closed'
        }`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* ------------------------------------------------------------------
            1. 3D SWINGING DOUBLE PALACE DOORS (SHAHI DARWAZA)
            ------------------------------------------------------------------ */}
        <div
          className={`shahi-darwaza-overlay ${
            gatesOpen ? 'shahi-darwaza--open' : ''
          }`}
          aria-hidden={gatesOpen}
        >
          {/* Left Hinged 3D Palace Door */}
          <div
            className="shahi-door shahi-door--left"
            onClick={!gatesOpen ? handleUnlockGates : undefined}
          >
            <div className="door-inner-carving">
              <CornerOrnament position="top-left" />
              <CornerOrnament position="bottom-left" />
              <div className="door-jaali-arch door-jaali-arch--left">
                <div className="jaali-rosette" />
                <div className="jaali-floral-vine" />
              </div>
              <div className="door-brass-knocker door-brass-knocker--left" />
            </div>
          </div>

          {/* Right Hinged 3D Palace Door */}
          <div
            className="shahi-door shahi-door--right"
            onClick={!gatesOpen ? handleUnlockGates : undefined}
          >
            <div className="door-inner-carving">
              <CornerOrnament position="top-right" />
              <CornerOrnament position="bottom-right" />
              <div className="door-jaali-arch door-jaali-arch--right">
                <div className="jaali-rosette" />
                <div className="jaali-floral-vine" />
              </div>
              <div className="door-brass-knocker door-brass-knocker--right" />
            </div>
          </div>

          {/* Central Jewelled Royal Medallion Lock (Spans across the doors) */}
          <div className="shahi-center-medallion">
            <div className="medallion-arch-card">
              <MosqueArchCrown className="medallion-arch-crown" />

              <p className="medallion-bismillah" dir="rtl" lang="ar">
                {t.bismillahArabic}
              </p>
              <p className="medallion-bismillah-sub">
                {t.bismillahTranslation}
              </p>

              <div className="medallion-decree-pill">
                <RubElHizb className="crown-star-icon" />
                <span>{t.gateWelcomeBadge}</span>
                <RubElHizb className="crown-star-icon" />
              </div>

              {/* 3D Couple Portrait Cameo on the Palace Gate */}
              <div
                className="medallion-portrait-frame"
                onClick={handleUnlockGates}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleUnlockGates();
                }}
              >
                <div className="medallion-glow-aura" aria-hidden="true" />
                {renderCouplePortrait('medallion-portrait-img')}
                <div className="medallion-wax-lock">
                  <span>C &amp; K</span>
                  <small dir="rtl" lang="ar">
                    {t.quboolHaiArabic}
                  </small>
                </div>
              </div>

              {/* Couple Names on the Royal Gate */}
              <div className="medallion-names-block">
                <h1 className="medallion-couple-name">{t.groomName}</h1>
                <div className="medallion-amp-row">
                  <span className="amp-wing" />
                  <span className="amp-gem">&amp;</span>
                  <span className="amp-wing" />
                </div>
                <h1 className="medallion-couple-name">{t.brideName}</h1>
              </div>

              {/* Destination Pill */}
              <div className="medallion-destination-tag">
                <span>📍 {t.venueCity}, {t.venueState}</span>
              </div>

              {/* Primary CTA to Swing Open the 3D Palace Gates */}
              <button
                type="button"
                className="btn-unlock-palace-gates"
                onClick={handleUnlockGates}
              >
                <RubElHizb className="crown-star-icon" />
                <span>{t.openInvitationBtn}</span>
                <RubElHizb className="crown-star-icon" />
              </button>

              <span className="medallion-tap-hint">{t.gateTapHint}</span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            2. INSIDE THE PALACE: 3-ARCH DARBAR & UNFURLING SHAHI FARMAN SCROLL
            ------------------------------------------------------------------ */}
        <div className="shahi-courtyard-interior">
          {/* Desktop Left Flanking Jharokha Arch Window (Couple & Blessings) */}
          <aside className="jharokha-side-wing jharokha-side-wing--left">
            <div className="wing-arch-header">
              <RubElHizb className="crown-star-icon" />
              <span>{t.holyUnionBadge}</span>
            </div>
            <div className="wing-portrait-mini">
              {renderCouplePortrait('wing-couple-img')}
            </div>
            <h3 className="wing-couple-title">{t.groomName}</h3>
            <span className="wing-amp">&amp;</span>
            <h3 className="wing-couple-title">{t.brideName}</h3>
            <p className="wing-family-sub">
              {t.groomFamily} &amp; {t.brideFamily}
            </p>
            <button
              type="button"
              className="btn-wing-petals"
              onClick={() => triggerPetalShower(true)}
            >
              {t.showerBlessingsBtn} (♥ {blessingCount})
            </button>
          </aside>

          {/* CENTERpiece: THE UNFURLING SHAHI FARMAN (IMPERIAL SILK SCROLL) */}
          <div
            className={`shahi-farman-scroll ${
              isUnfurling ? 'shahi-farman--unfurling' : ''
            }`}
          >
            {/* Top 3D Cylindrical Gold & Ruby Roller */}
            <div className="farman-roller farman-roller--top" aria-hidden="true">
              <div className="roller-finial roller-finial--left" />
              <div className="roller-rod">
                <div className="roller-center-gem" />
              </div>
              <div className="roller-finial roller-finial--right" />
            </div>

            {/* Unfurled Silk & Pearl Parchment Body */}
            <div className="farman-parchment-body" ref={scrollBodyRef}>
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />
              <CornerOrnament position="bottom-left" />
              <CornerOrnament position="bottom-right" />

              <div className="farman-inner-content">
                <MosqueArchCrown className="farman-top-arch" />

                {isFullScroll ? (
                  <div className="farman-full-tapestry">
                    {renderChapterCouple()}
                    <FloralGoldDivider className="farman-divider" />
                    {renderChapterFamilies()}
                    <FloralGoldDivider className="farman-divider" />
                    {renderChapterCeremonies()}
                    <FloralGoldDivider className="farman-divider" />
                    {renderChapterVenue()}
                  </div>
                ) : (
                  <>
                    {activeChapter === 0 && renderChapterCouple()}
                    {activeChapter === 1 && renderChapterFamilies()}
                    {activeChapter === 2 && renderChapterCeremonies()}
                    {activeChapter === 3 && renderChapterVenue()}
                  </>
                )}
              </div>
            </div>

            {/* Bottom 3D Cylindrical Gold & Ruby Roller + Hanging Silk Tassels */}
            <div
              className="farman-roller farman-roller--bottom"
              aria-hidden="true"
            >
              <div className="roller-finial roller-finial--left" />
              <div className="roller-rod">
                <div className="roller-center-gem" />
              </div>
              <div className="roller-finial roller-finial--right" />
              <div className="farman-tassel farman-tassel--left" />
              <div className="farman-tassel farman-tassel--right" />
            </div>
          </div>

          {/* Desktop Right Flanking Jharokha Arch Window (Hindupur & Dates) */}
          <aside className="jharokha-side-wing jharokha-side-wing--right">
            <div className="wing-arch-header">
              <RubElHizb className="crown-star-icon" />
              <span>{t.venueBadge}</span>
            </div>

            <div className="wing-venue-box">
              <span className="wing-pin-icon">📍</span>
              <h4 className="wing-venue-city">{t.venueCity}</h4>
              <p className="wing-venue-state">{t.venueFullAddress}</p>
              <a
                href={t.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wing-maps"
              >
                {t.venueDirectionsBtn}
              </a>
            </div>

            <div className="wing-date-box">
              <span className="wing-date-badge">⏳ {t.dateTimeBadge}</span>
              <p className="wing-date-title">{t.dateTimeTitle}</p>
              <span className="wing-date-pill">{t.datesToAnnounceValue}</span>
            </div>

            <button
              type="button"
              className="btn-wing-whatsapp"
              onClick={handleWhatsAppShare}
            >
              {t.shareOnWhatsApp}
            </button>
          </aside>
        </div>
      </div>

      {/* ====================================================================
          BOTTOM ROYAL CHAPTER NAVIGATION BAR
          ==================================================================== */}
      {gatesOpen && (
        <footer className="shahi-bottom-dock">
          <button
            type="button"
            className="shahi-nav-arrow"
            onClick={handlePrevChapter}
          >
            <span>{t.prevPage}</span>
          </button>

          <div className="shahi-chapter-dots" role="tablist">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                type="button"
                className={`shahi-dot-btn ${
                  !isFullScroll && activeChapter === ch.id
                    ? 'shahi-dot-btn--active'
                    : ''
                }`}
                onClick={() => handleSelectChapter(ch.id)}
                aria-label={ch.label}
              >
                <span className="dot-gem" />
                <span className="dot-text">{ch.label}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`shahi-nav-arrow shahi-nav-arrow--next ${
              activeChapter >= 3 && !isFullScroll
                ? 'shahi-nav-arrow--disabled'
                : ''
            }`}
            onClick={handleNextChapter}
            disabled={activeChapter >= 3 && !isFullScroll}
          >
            <span>{t.nextPage}</span>
          </button>
        </footer>
      )}
    </div>
  );
}
