import React, { useState, useRef, useCallback } from 'react';
import {
  CrescentMoonIcon as CrescentMoon,
  MosqueArchCrown,
  CornerOrnament,
  FloralGoldDivider,
  IslamicStarIcon as RubElHizb,
} from './IslamicOrnaments';

/**
 * ============================================================================
 * ROYAL MUGHAL PALACE GATES (SHAHI DARWAZA) & FULL SHAHI FARMAN SCROLL
 * File: src/components/RoyalPalaceInvitation.jsx
 * ============================================================================
 * - 3D Hinged Double Palace Doors (Shahi Darwaza) that swing open from the
 *   center when the guest taps the Royal Seal.
 * - Opens directly into the Full Unfurled Shahi Farman (Imperial Silk & 24K
 *   Gold Scroll) with zero redundant blocks and 100% mobile phone compatibility.
 * - Live interactive "Shower Rose Petals & Duas" celebration.
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
  // Image fallback if portrait fails
  const [imgError, setImgError] = useState(false);
  // Copy link status
  const [copied, setCopied] = useState(false);
  // Interactive Rose Petal & Dua Shower state
  const [petals, setPetals] = useState([]);
  const [blessingCount, setBlessingCount] = useState(786);
  const [showBlessingToast, setShowBlessingToast] = useState(false);

  const scrollBodyRef = useRef(null);
  const coupleSectionRef = useRef(null);
  const blessingsSectionRef = useRef(null);
  const venueSectionRef = useRef(null);

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
      setTimeout(() => setShowBlessingToast(false), 3400);
    }

    setTimeout(() => {
      setPetals((current) =>
        current.filter((p) => !p.id.startsWith(`${batchId}-`))
      );
    }, 5000);
  }, []);

  // Unlock & swing open the 3D Palace Double Doors into the Full Scroll View
  const handleUnlockGates = () => {
    setGatesOpen(true);
    triggerPetalShower(false);
    if (onFirstOpen) onFirstOpen();
  };

  // Close the 3D Palace Gates to replay the grand entrance
  const handleLockGates = () => {
    setGatesOpen(false);
  };

  // Smoothly scroll inside the Shahi Farman to a specific section
  const scrollToSection = (sectionRef) => {
    if (!gatesOpen) {
      setGatesOpen(true);
    }
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          COMPACT TOP ROYAL NAVIGATION BAR (Single clean row on Mobile & Desktop)
          ==================================================================== */}
      <header className="shahi-top-bar">
        <div className="shahi-top-left">
          {gatesOpen ? (
            <button
              type="button"
              className="shahi-gate-toggle-btn"
              onClick={handleLockGates}
              title="Replay Palace Gates"
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

        {/* Quick Section Jump Pills when Gates are Open (Desktop/Tablet) */}
        {gatesOpen && (
          <nav className="shahi-chapter-tabs" aria-label="Quick Jump">
            <button
              type="button"
              className="shahi-chapter-pill"
              onClick={() => scrollToSection(coupleSectionRef)}
            >
              <span>🕌</span>
              <span>{t.mobileCoverTab}</span>
            </button>
            <button
              type="button"
              className="shahi-chapter-pill"
              onClick={() => scrollToSection(blessingsSectionRef)}
            >
              <span>📖</span>
              <span>{t.mobileCoupleTab}</span>
            </button>
            <button
              type="button"
              className="shahi-chapter-pill"
              onClick={() => scrollToSection(venueSectionRef)}
            >
              <span>📍</span>
              <span>{t.mobileVenueTab}</span>
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
          MAIN 3D PALACE STAGE: SHAHI DARWAZA + FULL UNFURLING SHAHI FARMAN
          ==================================================================== */}
      <div
        className={`shahi-stage-container ${
          gatesOpen ? 'shahi-stage--open' : 'shahi-stage--closed'
        }`}
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
                <span>
                  📍 {t.venueCity}, {t.venueState}
                </span>
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
            2. FULL UNFURLING SHAHI FARMAN (IMPERIAL SILK & 24K GOLD SCROLL)
            ------------------------------------------------------------------ */}
        <div className="shahi-courtyard-interior">
          <div className="shahi-farman-scroll">
            {/* Top 3D Cylindrical Gold & Ruby Roller */}
            <div
              className="farman-roller farman-roller--top"
              aria-hidden="true"
            >
              <div className="roller-finial roller-finial--left" />
              <div className="roller-rod">
                <div className="roller-center-gem" />
              </div>
              <div className="roller-finial roller-finial--right" />
            </div>

            {/* Unfurled Silk & Pearl Parchment Body (Full Scroll by Default) */}
            <div className="farman-parchment-body" ref={scrollBodyRef}>
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />
              <CornerOrnament position="bottom-left" />
              <CornerOrnament position="bottom-right" />

              <div className="farman-inner-content">
                <MosqueArchCrown className="farman-top-arch" />

                <div className="farman-full-tapestry">
                  {/* ========================================================
                      SECTION 1: BISMILLAH, SALAM & COUPLE JHAROKHA SHOWCASE
                      ======================================================== */}
                  <section
                    ref={coupleSectionRef}
                    className="farman-chapter farman-chapter--couple"
                  >
                    <div className="farman-bismillah-header">
                      <p className="farman-arabic-calligraphy" dir="rtl" lang="ar">
                        {t.bismillahArabic}
                      </p>
                      <p className="farman-bismillah-sub">
                        {t.bismillahTranslation}
                      </p>
                    </div>

                    <div className="farman-salam-banner">
                      <p className="farman-salam-arabic" dir="rtl" lang="ar">
                        {t.salamArabic}
                      </p>
                      <p className="farman-salam-translit">
                        {t.salamTransliteration}
                      </p>
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
                            <span className="person-role-pill">
                              {t.groomTitle}
                            </span>
                            <h2 className="person-royal-name">{t.groomName}</h2>
                            <p className="person-parents-line">
                              {t.groomParents}
                            </p>
                          </div>

                          <div
                            className="royal-union-emblem"
                            aria-hidden="true"
                          >
                            <div className="union-heart-ring">
                              <span>&amp;</span>
                            </div>
                          </div>

                          <div className="royal-person-card royal-person-card--bride">
                            <span className="person-role-pill person-role-pill--bride">
                              {t.brideTitle}
                            </span>
                            <h2 className="person-royal-name">{t.brideName}</h2>
                            <p className="person-parents-line">
                              {t.brideParents}
                            </p>
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
                        <span className="blessing-counter-badge">
                          ♥ {blessingCount}
                        </span>
                      </button>
                    </div>
                  </section>

                  <FloralGoldDivider className="farman-divider" />

                  {/* ========================================================
                      SECTION 2: QURANIC VERSE & FAMILY INVITATION (NON-REDUNDANT)
                      ======================================================== */}
                  <section
                    ref={blessingsSectionRef}
                    className="farman-chapter farman-chapter--families"
                  >
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
                      <p className="plaque-verse-translation">
                        {t.quranTranslation}
                      </p>
                    </div>

                    {/* Concise Royal Family Invitation */}
                    <div className="royal-family-decree">
                      <span className="decree-eyebrow">{t.invitationBadge}</span>
                      <p className="decree-lead-text">
                        {t.familyInvitationLead}
                      </p>

                      <p className="decree-invited-by-label">
                        {t.cordiallyInvitedBy}
                      </p>

                      <div className="royal-families-crest-grid">
                        <div className="family-crest-card family-crest-card--groom">
                          <span className="crest-crown-icon">👑</span>
                          <h4 className="crest-family-name">{t.groomFamily}</h4>
                        </div>

                        <div className="family-crest-card family-crest-card--bride">
                          <span className="crest-crown-icon">🌸</span>
                          <h4 className="crest-family-name">{t.brideFamily}</h4>
                        </div>
                      </div>
                    </div>
                  </section>

                  <FloralGoldDivider className="farman-divider" />

                  {/* ========================================================
                      SECTION 3: 3 CEREMONIAL HIGHLIGHTS & CONCISE DATE NOTICE
                      ======================================================== */}
                  <section className="farman-chapter farman-chapter--ceremonies">
                    <div className="ceremonies-showcase">
                      <h4 className="ceremonies-heading">
                        {t.ceremoniesHeading}
                      </h4>
                      <p className="ceremonies-subheading">
                        {t.ceremoniesSubheading}
                      </p>

                      <div className="ceremonies-arch-grid">
                        <div className="ceremony-arch-card ceremony-arch-card--ruby">
                          <div className="ceremony-arch-icon">🕌</div>
                          <span className="ceremony-arch-badge">
                            {t.event1Badge}
                          </span>
                          <h5 className="ceremony-arch-title">
                            {t.event1Title}
                          </h5>
                          <p className="ceremony-arch-desc">{t.event1Desc}</p>
                        </div>

                        <div className="ceremony-arch-card ceremony-arch-card--emerald">
                          <div className="ceremony-arch-icon">🌺</div>
                          <span className="ceremony-arch-badge">
                            {t.event2Badge}
                          </span>
                          <h5 className="ceremony-arch-title">
                            {t.event2Title}
                          </h5>
                          <p className="ceremony-arch-desc">{t.event2Desc}</p>
                        </div>

                        <div className="ceremony-arch-card ceremony-arch-card--gold">
                          <div className="ceremony-arch-icon">✨</div>
                          <span className="ceremony-arch-badge">
                            {t.event3Badge}
                          </span>
                          <h5 className="ceremony-arch-title">
                            {t.event3Title}
                          </h5>
                          <p className="ceremony-arch-desc">{t.event3Desc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Single, Clean Auspicious Date & Time Announcement Banner */}
                    <div className="celestial-date-pavilion">
                      <div className="celestial-header-inline">
                        <CrescentMoon className="astrolabe-moon" size={26} />
                        <span className="celestial-eyebrow">
                          {t.dateTimeBadge}
                        </span>
                      </div>
                      <h3 className="celestial-main-title">
                        {t.dateTimeTitle}
                      </h3>
                      <p className="celestial-subtext">{t.dateTimeSubtext}</p>
                    </div>
                  </section>

                  <FloralGoldDivider className="farman-divider" />

                  {/* ========================================================
                      SECTION 4: HINDUPUR VENUE, PROPHETIC DUA & WHATSAPP SHARE
                      ======================================================== */}
                  <section
                    ref={venueSectionRef}
                    className="farman-chapter farman-chapter--venue"
                  >
                    {/* Hindupur Royal Venue Card */}
                    <div className="hindupur-palace-card">
                      <div className="hindupur-compass-badge">
                        <svg
                          width="22"
                          height="22"
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
                      <p className="hindupur-full-address">
                        {t.venueFullAddress}
                      </p>

                      <div className="hindupur-action-row">
                        <a
                          href={t.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-hindupur-maps"
                        >
                          <svg
                            width="15"
                            height="15"
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
                      <p className="plaque-transliteration">
                        {t.sunnahTransliteration}
                      </p>
                      <p className="plaque-verse-translation">
                        {t.sunnahTranslation}
                      </p>
                      <span className="plaque-hadith-ref">
                        {t.sunnahReference}
                      </span>
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
                </div>
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
        </div>
      </div>
    </div>
  );
}
