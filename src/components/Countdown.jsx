import React, { useState, useEffect } from 'react';
import { IslamicStarIcon, CrescentMoonIcon } from './IslamicOrnaments';

/**
 * Helper to calculate time difference accurately
 */
function getTimeRemaining(targetDateString, fallbackObj) {
  const targetTime = targetDateString
    ? new Date(targetDateString).getTime()
    : new Date(fallbackObj.year, fallbackObj.monthNumber - 1, fallbackObj.dayOfMonth, 11, 0, 0).getTime();

  const now = Date.now();
  const diff = targetTime - now;

  if (diff <= 0) {
    return { isComplete: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { isComplete: false, days, hours, minutes, seconds };
}

/**
 * Section 5: Live Countdown
 * Displays real-time ticking days, hours, minutes, seconds with royal gold styling
 */
export default function Countdown({ config }) {
  const { dateTime } = config;
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeRemaining(dateTime.targetIsoDateTime, dateTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(dateTime.targetIsoDateTime, dateTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [dateTime]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="invitation-section countdown-section" id="countdown">
      <div className="section-inner-container">
        <div className="countdown-halo-wrap">
          <CrescentMoonIcon size={40} glow={false} className="countdown-crescent-badge" />
        </div>

        <h2 className="countdown-title">The Blessed Countdown</h2>
        <p className="countdown-subtitle">
          Counting every moment until the sacred words <span className="highlight-gold">“Qubool Hai”</span>
        </p>

        {timeLeft.isComplete ? (
          <div className="countdown-complete-banner">
            <IslamicStarIcon size={22} className="complete-star" />
            <h3>Alhamdulillah! The Blessed Wedding Celebrations Have Begun!</h3>
            <p>May Allah bless this union for eternity.</p>
          </div>
        ) : (
          <div className="countdown-units-grid">
            {/* Days */}
            <div className="countdown-box">
              <div className="countdown-number-ring">
                <span className="countdown-number">{formatNumber(timeLeft.days)}</span>
              </div>
              <span className="countdown-label">Days</span>
            </div>

            <div className="countdown-colon">:</div>

            {/* Hours */}
            <div className="countdown-box">
              <div className="countdown-number-ring">
                <span className="countdown-number">{formatNumber(timeLeft.hours)}</span>
              </div>
              <span className="countdown-label">Hours</span>
            </div>

            <div className="countdown-colon">:</div>

            {/* Minutes */}
            <div className="countdown-box">
              <div className="countdown-number-ring">
                <span className="countdown-number">{formatNumber(timeLeft.minutes)}</span>
              </div>
              <span className="countdown-label">Minutes</span>
            </div>

            <div className="countdown-colon">:</div>

            {/* Seconds */}
            <div className="countdown-box">
              <div className="countdown-number-ring">
                <span className="countdown-number">{formatNumber(timeLeft.seconds)}</span>
              </div>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
