import React from 'react';
import {
  CalendarIcon,
  MapPinIcon,
  CornerArabesque,
  IslamicStarIcon,
} from './IslamicOrnaments';

/**
 * Section 4: Wedding Details
 * Venue is Hindupur; Dates and timings are to be announced soon (Insha'Allah)
 */
export default function WeddingDetails({ config, translations, lang }) {
  const { location, dateTimeStatus } = config;
  const t = (translations && lang && translations[lang]) ? translations[lang] : null;

  const venueCity = t ? t.venueCity : location.city;
  const venueState = t ? t.venueState : location.state;
  const venueFull = t ? t.venueFullAddress : location.fullAddress;
  const mapsUrl = t ? t.googleMapsUrl : location.googleMapsUrl;
  const directionsBtn = t ? t.venueDirectionsBtn : "Get Directions to Hindupur";

  const dateNoticeTitle = t ? t.dateTimeTitle : dateTimeStatus.announcementTitle;
  const dateNoticeSub = t ? t.dateTimeSubtext : dateTimeStatus.subtext;
  const dateNoticeBadge = t ? t.dateTimeBadge : dateTimeStatus.announcementBadge;
  const datesValue = t ? t.datesToAnnounceValue : "To Be Announced (Insha'Allah)";

  return (
    <section className="invitation-section wedding-details-section" id="details">
      <div className="section-inner-container">
        <div className="section-header-tag">
          <IslamicStarIcon size={14} className="tag-star" />
          <span>{t ? t.invitationBadge : "Royal Wedding Invitation"}</span>
          <IslamicStarIcon size={14} className="tag-star" />
        </div>

        <h2 className="section-main-heading">{dateNoticeTitle}</h2>
        <p className="section-subtext">{dateNoticeSub}</p>

        <div className="details-cards-grid">
          {/* Card 1: Date & Time Notice */}
          <div className="detail-card date-card">
            <CornerArabesque position="top-right" />
            <div className="detail-icon-badge">
              <CalendarIcon size={26} />
            </div>
            <span className="card-badge-label">{dateNoticeBadge}</span>
            <div className="date-number-display" style={{ marginTop: '0.5rem' }}>
              <span className="date-month-year" style={{ fontSize: '1.2rem', color: '#f9e8a2' }}>
                {datesValue}
              </span>
            </div>
            <p className="card-highlight-text" style={{ fontSize: '0.85rem', marginTop: '0.4rem' }}>
              Nikah ceremony &amp; Walima celebration schedule will be shared soon
            </p>
          </div>

          {/* Card 2: Destination Venue - Hindupur */}
          <div className="detail-card venue-card">
            <CornerArabesque position="top-right" />
            <div className="detail-icon-badge">
              <MapPinIcon size={26} />
            </div>
            <span className="card-badge-label">{t ? t.venueBadge : "Wedding Destination"}</span>
            <div className="venue-details-box">
              <h3 className="venue-name-highlight" style={{ fontSize: '1.4rem' }}>
                {venueCity}
              </h3>
              <p className="venue-address-line" style={{ fontWeight: 600, color: '#f9e8a2' }}>
                {venueState}
              </p>
              <p className="venue-address-line" style={{ fontSize: '0.8rem', opacity: 0.85 }}>
                {venueFull}
              </p>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-venue-directions"
            >
              <MapPinIcon size={16} />
              <span>{directionsBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
