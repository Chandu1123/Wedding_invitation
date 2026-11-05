import React, { useState, useEffect } from 'react';
import weddingConfig from './data/weddingConfig';
import { translations } from './data/translations';

// Components
import LanguageSelectorModal from './components/LanguageSelectorModal';
import WeddingBook from './components/WeddingBook';
import IslamicGreeting from './components/IslamicGreeting';
import CoupleSection from './components/CoupleSection';
import WeddingDetails from './components/WeddingDetails';
import DuaSection from './components/DuaSection';
import FamilyInvitation from './components/FamilyInvitation';
import LocationSection from './components/LocationSection';
import ShareButton from './components/ShareButton';
import MusicPlayer from './components/MusicPlayer';
import { HangingLantern, IslamicStarIcon } from './components/IslamicOrnaments';

export default function App() {
  // Trilingual state: 'en' | 'te' | 'hi'
  const [lang, setLang] = useState('en');
  // Language Modal opens on first arrival so the user is asked which language they want
  const [isLangModalOpen, setIsLangModalOpen] = useState(true);
  // View mode: 'book' (interactive 3D Royal Opening Book) or 'scroll' (vertical royal page)
  const [viewMode, setViewMode] = useState('book');
  const [hasOpenedBook, setHasOpenedBook] = useState(false);

  const t = translations[lang] || translations.en;

  // Sync document title with groom & bride names from weddingConfig
  useEffect(() => {
    const { groom, bride, order } = weddingConfig.couple;
    const first = order === 'bride-first' ? bride.fullName : groom.fullName;
    const second = order === 'bride-first' ? groom.fullName : bride.fullName;
    document.title = `Royal Wedding Invitation | ${first} & ${second}`;
  }, []);

  const handleSelectLanguage = (selectedLang) => {
    setLang(selectedLang);
    setIsLangModalOpen(false);
  };

  return (
    <div className={`wedding-app-container ${viewMode === 'book' ? 'book-mode-active' : 'scroll-mode-active'}`}>
      {/* Ambient Islamic Geometric Tile Pattern */}
      <div className="islamic-ambient-backdrop" aria-hidden="true" />

      {/* Floating Stardust */}
      <div className="ambient-gold-stardust" aria-hidden="true">
        <span className="stardust-particle particle-1" />
        <span className="stardust-particle particle-3" />
        <span className="stardust-particle particle-5" />
        <span className="stardust-particle particle-7" />
        <span className="stardust-particle particle-9" />
        <span className="stardust-particle particle-11" />
      </div>

      {/* Swaying Golden Lanterns */}
      <div className="ambient-hanging-lanterns" aria-hidden="true">
        <HangingLantern className="ambient-lantern lantern-left" />
        <HangingLantern className="ambient-lantern lantern-right" />
      </div>

      {/* Top Floating Controls Bar */}
      <header className="app-top-floating-bar" aria-label="Global Controls">
        {/* Language Switcher Pill */}
        <button
          type="button"
          className="top-control-btn"
          onClick={() => setIsLangModalOpen(true)}
          title="Change language / భాషను మార్చండి / भाषा बदलें"
        >
          <span>🌐</span>
          <span>{t.langName}</span>
        </button>

        {/* View Mode Toggle: 3D Royal Book vs Royal Scroll View */}
        <button
          type="button"
          className="top-control-btn is-active-btn"
          onClick={() => setViewMode(viewMode === 'book' ? 'scroll' : 'book')}
          title="Toggle between 3D Book & Scroll view"
        >
          <span>{viewMode === 'book' ? '📜 ' + t.viewModeScroll : '📖 ' + t.viewModeBook}</span>
        </button>
      </header>

      {/* Trilingual Language Selector Modal */}
      <LanguageSelectorModal
        isOpen={isLangModalOpen}
        currentLang={lang}
        onSelectLanguage={handleSelectLanguage}
        onClose={() => setIsLangModalOpen(false)}
      />

      {/* Main Content: 3D Royal Book OR Royal Scroll View */}
      {viewMode === 'book' ? (
        <main className="book-main-stage">
          <WeddingBook
            config={weddingConfig}
            translations={translations}
            lang={lang}
            onFirstOpen={() => setHasOpenedBook(true)}
          />
        </main>
      ) : (
        <main className="invitation-main-content">
          <IslamicGreeting config={weddingConfig} />
          <CoupleSection config={weddingConfig} />
          <WeddingDetails
            config={weddingConfig}
            translations={translations}
            lang={lang}
          />
          <DuaSection config={weddingConfig} />
          <FamilyInvitation config={weddingConfig} />
          <LocationSection config={weddingConfig} />
          <ShareButton config={weddingConfig} />

          {/* Royal Footer */}
          <footer className="invitation-royal-footer">
            <p className="footer-dua-text" dir="rtl" lang="ar">
              {t.sunnahArabic}
            </p>
            <h4 className="footer-names">
              {t.groomName} &amp; {t.brideName}
            </h4>
            <p className="footer-copyright">
              {weddingConfig.location.city}, {weddingConfig.location.state} • {t.footerBlessing}
            </p>
          </footer>
        </main>
      )}

      {/* Background Royal Audio Player with Soft Synthesizer / Audio Fallback */}
      <MusicPlayer
        config={weddingConfig}
        autoPlay={hasOpenedBook}
      />
    </div>
  );
}
