import React from 'react';
import { IslamicStarIcon, CrescentMoonIcon } from './IslamicOrnaments';

/**
 * Trilingual Language Selection Modal
 * Allows guests to choose between English, Telugu, and Hindi
 */
export default function LanguageSelectorModal({
  isOpen,
  currentLang,
  onSelectLanguage,
  onClose,
}) {
  if (!isOpen) return null;

  const languages = [
    {
      code: 'en',
      title: 'English',
      nativeLabel: 'English',
      subtitle: 'Royal Islamic Wedding Invitation',
      flag: '🇬🇧',
    },
    {
      code: 'te',
      title: 'Telugu',
      nativeLabel: 'తెలుగు',
      subtitle: 'పవిత్ర నికాహ్ & వివాహ ఆహ్వాన పత్రిక',
      flag: '🇮🇳',
    },
    {
      code: 'hi',
      title: 'Hindi',
      nativeLabel: 'हिन्दी',
      subtitle: 'शाही निकाह का मुबारक दावतनामा',
      flag: '🇮🇳',
    },
  ];

  return (
    <div className="language-modal-overlay" role="dialog" aria-modal="true" aria-label="Language Selector">
      <div className="language-modal-backdrop" onClick={onClose} />
      
      <div className="language-modal-card">
        {/* Decorative Top Arch & Crescent */}
        <div className="modal-header-ornament">
          <CrescentMoonIcon size={44} glow={true} className="modal-crescent" />
        </div>

        <p className="modal-bismillah-text">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>

        <h2 className="modal-title">
          <span>Choose Your Language</span>
          <span className="modal-title-divider">/</span>
          <span>భాషను ఎంచుకోండి</span>
          <span className="modal-title-divider">/</span>
          <span>भाषा चुनें</span>
        </h2>

        <p className="modal-subtitle">
          Please select your preferred language to view the wedding invitation
        </p>

        <div className="language-buttons-list">
          {languages.map((lang) => {
            const isSelected = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                className={`language-choice-btn ${isSelected ? 'is-active-lang' : ''}`}
                onClick={() => {
                  onSelectLanguage(lang.code);
                  if (onClose) onClose();
                }}
              >
                <div className="lang-icon-badge">
                  <span className="lang-flag">{lang.flag}</span>
                </div>

                <div className="lang-text-group">
                  <div className="lang-primary-row">
                    <span className="lang-native-label">{lang.nativeLabel}</span>
                    <span className="lang-english-label">({lang.title})</span>
                  </div>
                  <span className="lang-subtext">{lang.subtitle}</span>
                </div>

                <div className="lang-selection-check">
                  <IslamicStarIcon size={18} className="lang-star" />
                </div>
              </button>
            );
          })}
        </div>

        {onClose && (
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close language selector"
          >
            ✕ Continue
          </button>
        )}
      </div>
    </div>
  );
}
