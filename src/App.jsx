import React, { useState, useEffect } from 'react';
import weddingConfig from './data/weddingConfig';

// Import All Structured Section Components
import OpeningScreen from './components/OpeningScreen';
import IslamicGreeting from './components/IslamicGreeting';
import CoupleSection from './components/CoupleSection';
import WeddingDetails from './components/WeddingDetails';
import Countdown from './components/Countdown';
import WeddingTimeline from './components/WeddingTimeline';
import DuaSection from './components/DuaSection';
import FamilyInvitation from './components/FamilyInvitation';
import LocationSection from './components/LocationSection';
import ShareButton from './components/ShareButton';
import MusicPlayer from './components/MusicPlayer';
import { HangingLantern } from './components/IslamicOrnaments';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(false);

  // Sync document title with groom & bride names from weddingConfig.js
  useEffect(() => {
    const { groom, bride, order } = weddingConfig.couple;
    const first = order === 'bride-first' ? bride.fullName : groom.fullName;
    const second = order === 'bride-first' ? groom.fullName : bride.fullName;
    document.title = `Wedding Invitation | ${first} & ${second}`;
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setAutoPlayAudio(true);
  };

  return (
    <div className="wedding-app-container">
      {/* Ambient Islamic Geometric Tile Pattern */}
      <div className="islamic-ambient-backdrop" aria-hidden="true" />

      {/* Floating Stardust in Main View */}
      <div className="ambient-gold-stardust" aria-hidden="true">
        <span className="stardust-particle particle-1" />
        <span className="stardust-particle particle-3" />
        <span className="stardust-particle particle-5" />
        <span className="stardust-particle particle-7" />
        <span className="stardust-particle particle-9" />
        <span className="stardust-particle particle-11" />
      </div>

      {/* Swaying Golden Lanterns at Top of Screen */}
      <div className="ambient-hanging-lanterns" aria-hidden="true">
        <HangingLantern className="ambient-lantern lantern-left" />
        <HangingLantern className="ambient-lantern lantern-right" />
      </div>

      {/* Section 1: Opening / Welcome Screen Modal (dismisses when clicked) */}
      {!isOpen && (
        <OpeningScreen
          config={weddingConfig}
          onOpenInvitation={handleOpenInvitation}
        />
      )}

      {/* Main Luxury Wedding Invitation Experience */}
      <main className="invitation-main-content">
        {/* Section 2: Islamic Wedding Greeting & Salam */}
        <IslamicGreeting config={weddingConfig} />

        {/* Section 3: Bride & Groom Feature */}
        <CoupleSection config={weddingConfig} />

        {/* Section 4: Wedding Details (Date, Times, Venue) */}
        <WeddingDetails config={weddingConfig} />

        {/* Section 5: Real-Time Live Countdown */}
        <Countdown config={weddingConfig} />

        {/* Section 6: Wedding Programme / Timeline */}
        <WeddingTimeline config={weddingConfig} />

        {/* Section 7: Islamic Dua & Quranic Verse */}
        <DuaSection config={weddingConfig} />

        {/* Section 8: Family Invitation */}
        <FamilyInvitation config={weddingConfig} />

        {/* Section 9: Location & Navigation */}
        <LocationSection config={weddingConfig} />

        {/* Section 10: WhatsApp Sharing & Calendar Save */}
        <ShareButton config={weddingConfig} />

        {/* Royal Footer */}
        <footer className="invitation-royal-footer">
          <p className="footer-dua-text" dir="rtl" lang="ar">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <h4 className="footer-names">
            {weddingConfig.couple.groom.fullName} &amp; {weddingConfig.couple.bride.fullName}
          </h4>
          <p className="footer-copy">
            Prayers, joy &amp; gratitude for your blessed presence • {weddingConfig.dateTime.year}
          </p>
        </footer>
      </main>

      {/* Section 11: Background Audio Player Widget */}
      <MusicPlayer
        config={weddingConfig}
        autoPlayTriggered={autoPlayAudio}
      />
    </div>
  );
}
