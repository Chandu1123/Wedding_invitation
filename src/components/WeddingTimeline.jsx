import React from 'react';
import {
  RingIcon,
  SparklesIcon,
  UtensilsIcon,
  ClockIcon,
  CornerArabesque,
  FloralGoldDivider,
  IslamicStarIcon,
} from './IslamicOrnaments';

/**
 * Maps icon key string to actual vector icon component
 */
function renderTimelineIcon(iconKey) {
  switch (iconKey) {
    case 'ring':
      return <RingIcon size={24} />;
    case 'sparkles':
      return <SparklesIcon size={24} />;
    case 'utensils':
      return <UtensilsIcon size={24} />;
    default:
      return <ClockIcon size={24} />;
  }
}

/**
 * Section 6: Wedding Programme / Timeline
 * Shows order of celebrations, ceremonies, and royal banquet feast
 */
export default function WeddingTimeline({ config }) {
  const { programme } = config;

  return (
    <section className="invitation-section wedding-timeline-section" id="timeline">
      <div className="section-inner-container">
        <div className="section-header-tag">
          <IslamicStarIcon size={14} className="tag-star" />
          <span>Itinerary of Joy</span>
          <IslamicStarIcon size={14} className="tag-star" />
        </div>

        <h2 className="section-main-heading">Wedding Programme</h2>
        <p className="section-subtext">A sequence of auspicious and memorable moments</p>

        <div className="timeline-container">
          <div className="timeline-spine-line" aria-hidden="true" />

          {programme.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.id || index}
                className={`timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}`}
              >
                {/* Node marker with glowing icon badge */}
                <div className="timeline-node-marker">
                  <div className="node-icon-circle">
                    {renderTimelineIcon(event.icon)}
                  </div>
                </div>

                {/* Timeline Card Content */}
                <div className="timeline-content-card">
                  <CornerArabesque position="top-right" />

                  <div className="timeline-header-meta">
                    <span className="timeline-time-badge">
                      <ClockIcon size={14} />
                      <span>{event.time}</span>
                    </span>
                    {event.arabicBadge && (
                      <span className="timeline-arabic-badge" dir="rtl">
                        {event.arabicBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="timeline-event-title">{event.title}</h3>
                  <p className="timeline-event-desc">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <FloralGoldDivider className="section-divider" />
      </div>
    </section>
  );
}
