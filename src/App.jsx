import React, { useState, useEffect } from 'react';
import weddingConfig from './data/weddingConfig';
import { translations } from './data/translations';

// Components
import LanguageSelectorModal from './components/LanguageSelectorModal';
import RoyalPalaceInvitation from './components/RoyalPalaceInvitation';
import { HangingLantern } from './components/IslamicOrnaments';

export default function App() {
  // Trilingual state: 'en' | 'te' | 'hi'
  const [lang, setLang] = useState('en');
  // Language Modal opens on first arrival so the user is asked which language they want
  const [isLangModalOpen, setIsLangModalOpen] = useState(true);

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
    <div className="invitation-app book-mode-app">
      {/* Subtle Floral, Rose-Gold & Geometric Lace Backdrop */}
      <div className="islamic-geometric-backdrop" aria-hidden="true" />

      {/* Decorative Hanging Moroccan Lanterns */}
      <div className="welcome-lanterns" aria-hidden="true">
        <HangingLantern className="hanging-lantern lantern-left" />
        <HangingLantern className="hanging-lantern lantern-right" />
      </div>

      {/* Trilingual Language Selector Modal (English / తెలుగు / हिन्दी) */}
      <LanguageSelectorModal
        isOpen={isLangModalOpen}
        currentLang={lang}
        onSelectLanguage={handleSelectLanguage}
        onClose={() => setIsLangModalOpen(false)}
      />

      {/* Interactive 3D Royal Mughal Palace Gates & Unfurling Shahi Farman Scroll */}
      <main className="book-main-stage">
        <RoyalPalaceInvitation
          config={weddingConfig}
          translations={translations}
          lang={lang}
          onOpenLanguageModal={() => setIsLangModalOpen(true)}
        />
      </main>
    </div>
  );
}
