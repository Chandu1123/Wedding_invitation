import React from 'react';
import {
  MapPinIcon,
  CornerArabesque,
  FloralGoldDivider,
  IslamicStarIcon,
} from './IslamicOrnaments';

/**
 * Section 9: Location & Navigation
 * Detailed venue directions, Google Maps interactive link, and map container
 */
export default function LocationSection({ config }) {
  const { location } = config;

  return (
    <section className="invitation-section location-section" id="location">
      <div className="section-inner-container">
        <div className="section-header-tag">
          <IslamicStarIcon size={14} className="tag-star" />
          <span>Venue &amp; Directions</span>
          <IslamicStarIcon size={14} className="tag-star" />
        </div>

        <h2 className="section-main-heading">Wedding Destination</h2>
        <p className="section-subtext">We eagerly await your gracious arrival</p>

        <div className="location-master-card">
          <CornerArabesque position="top-left" />
          <CornerArabesque position="top-right" />
          <CornerArabesque position="bottom-left" />
          <CornerArabesque position="bottom-right" />

          <div className="location-info-header">
            <div className="location-pin-emblem">
              <MapPinIcon size={32} />
            </div>
            <h3 className="location-venue-name">{location.venueName}</h3>
            {location.hallName && (
              <h4 className="location-hall-name">{location.hallName}</h4>
            )}
            <p className="location-full-address">
              {location.addressLine1}, {location.cityStateZip}
            </p>
            {location.landmark && (
              <p className="location-landmark-note">
                <strong>Landmark:</strong> {location.landmark}
              </p>
            )}

            <div className="location-action-buttons">
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-directions"
              >
                <MapPinIcon size={18} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Container */}
          <div className="location-map-frame-wrapper">
            <iframe
              title="Wedding Venue Map"
              src={location.googleMapsEmbedUrl}
              width="100%"
              height="340"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <FloralGoldDivider className="section-divider" />
      </div>
    </section>
  );
}
