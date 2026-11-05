import React, { useState } from 'react';
import {
  WhatsAppIcon,
  ShareIcon,
  CalendarIcon,
  IslamicStarIcon,
} from './IslamicOrnaments';

/**
 * Section 10: Social Sharing & WhatsApp Invites
 * Direct 1-tap WhatsApp sharing, link copying, and Calendar .ics generation
 */
export default function ShareButton({ config }) {
  const { sharing, couple, dateTime, location } = config;
  const [copied, setCopied] = useState(false);

  // Generate WhatsApp Share URL
  const handleWhatsAppShare = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const fullText = `${sharing.whatsappShareText}\n${currentUrl}`;
    const encoded = encodeURIComponent(fullText);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Copy URL with toast confirmation
  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  // Download iCalendar (.ics) file so guests can save directly to their phones/laptops
  const handleAddToCalendar = () => {
    const title = `Wedding: ${couple.groom.fullName} & ${couple.bride.fullName}`;
    const desc = `In the name of Allah. Join us in celebrating the Nikah and Wedding celebrations of ${couple.groom.fullName} and ${couple.bride.fullName}.`;
    const venue = `${location.venueName}, ${location.addressLine1}, ${location.cityStateZip}`;

    // Standard ICS date format: 20261220T110000Z
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Royal Muslim Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${venue}`,
      'DTSTART:20261220T053000Z', // 11:00 AM IST in UTC
      'DTEND:20261220T173000Z',   // 11:00 PM IST in UTC
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Wedding_${couple.groom.firstName}_and_${couple.bride.firstName}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="invitation-section share-section" id="share">
      <div className="section-inner-container">
        <div className="section-header-tag">
          <IslamicStarIcon size={14} className="tag-star" />
          <span>Spread The Joy</span>
          <IslamicStarIcon size={14} className="tag-star" />
        </div>

        <h2 className="section-main-heading">Share This Invitation</h2>
        <p className="section-subtext">
          Forward this digital invitation card with your loved ones and family
        </p>

        <div className="share-actions-grid">
          {/* WhatsApp Direct Share Button */}
          <button
            type="button"
            className="btn-share-card btn-whatsapp-share"
            onClick={handleWhatsAppShare}
            aria-label="Share on WhatsApp"
          >
            <div className="share-icon-wrap whatsapp-wrap">
              <WhatsAppIcon size={28} />
            </div>
            <div className="share-card-text">
              <span className="share-primary-text">Share on WhatsApp</span>
              <span className="share-secondary-text">Send pre-filled message &amp; link</span>
            </div>
          </button>

          {/* Copy Link Button */}
          <button
            type="button"
            className="btn-share-card btn-copy-link"
            onClick={handleCopyLink}
            aria-label="Copy invitation link"
          >
            <div className="share-icon-wrap copy-wrap">
              <ShareIcon size={24} />
            </div>
            <div className="share-card-text">
              <span className="share-primary-text">
                {copied ? '✓ Link Copied to Clipboard!' : 'Copy Invitation Link'}
              </span>
              <span className="share-secondary-text">
                {copied ? 'Ready to paste anywhere' : 'Tap to copy website URL'}
              </span>
            </div>
          </button>

          {/* Add to Calendar Button */}
          <button
            type="button"
            className="btn-share-card btn-calendar-save"
            onClick={handleAddToCalendar}
            aria-label="Add to Calendar"
          >
            <div className="share-icon-wrap calendar-wrap">
              <CalendarIcon size={24} />
            </div>
            <div className="share-card-text">
              <span className="share-primary-text">Add to Calendar (.ics)</span>
              <span className="share-secondary-text">Save reminder on Google / iPhone</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
