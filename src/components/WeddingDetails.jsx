import React from 'react';
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  CornerArabesque,
  FloralGoldDivider,
  IslamicStarIcon,
} from './IslamicOrnaments';

/**
 * Section 4: Wedding Details
 * Prominently presents the date, day, times, venue, and address
 */
export default function WeddingDetails({ config }) {
  const { dateTime, location } = config;

  return (
    <section className="invitation-section wedding-details-section" id="details">
      <div className="section-inner-container">
        <div className="section-header-tag">
          <IslamicStarIcon size={14} className="tag-star" />
          <span>Save The Blessed Date</span>
          <IslamicStarIcon size={14} className="tag-star" />
        </div>

        <h2 className="section-main-heading">Wedding Date &amp; Time</h2>
        <p className="section-subtext">Mark your calendar to celebrate with us</p>

        <div className="details-cards-grid">
          {/* Card 1: Date & Day */}
          <div className="detail-card date-card">
            <CornerArabesque position="top-right" />
            <div className="detail-icon-badge">
              <CalendarIcon size={26} />
            </div>
            <span className="card-badge-label">{dateTime.dayOfWeek}</span>
            <div className="date-number-display">
              <span className="date-big-number">{dateTime.dayOfMonth}</span>
              <span className="date-month-year">
                {dateTime.monthName} {dateTime.year}
              </span>
            </div>
            <p className="card-highlight-text">{dateTime.formattedDate}</p>
          </div>

          {/* Card 2: Ceremony & Reception Timings */}
          <div className="detail-card time-card">
            <CornerArabesque position="top-right" />
            <div className="detail-icon-badge">
              <ClockIcon size={26} />
            </div>
            <span className="card-badge-label">Timings</span>
            <div className="time-details-list">
              <div className="time-row">
                <span className="time-event-name">Nikah Ceremony:</span>
                <span className="time-value-badge">{dateTime.ceremonyTime}</span>
              </div>
              <div className="time-row">
                <span className="time-event-name">Walima Banquet:</span>
                <span className="time-value-badge">{dateTime.receptionTime}</span>
              </div>
            </div>
            <p className="card-highlight-text">Kindly be seated 15 minutes prior</p>
          </div>

          {/* Card 3: Venue & Location */}
          <div className="detail-card venue-card">
            <CornerArabesque position="top-right" />
            <div className="detail-icon-badge">
              <MapPinIcon size={26} />
            </div>
            <span className="card-badge-label">Venue</span>
            <h3 className="venue-card-title">{location.venueName}</h3>
            {location.hallName && (
              <p className="venue-hall-name">{location.hallName}</p>
            )}
            <p className="venue-card-address">{location.addressLine1}</p>
            <p className="venue-card-city">{location.cityStateZip}</p>
            {location.landmark && (
              <p className="venue-landmark">Landmark: {location.landmark}</p>
            )}

            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-venue-action"
            >
              <MapPinIcon size={16} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        <FloralGoldDivider className="section-divider" />
      </div>
    </section>
  );
}
