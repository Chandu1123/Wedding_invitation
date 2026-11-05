import React from 'react';
import {
  CornerArabesque,
  FloralGoldDivider,
  IslamicStarIcon,
  RoyalMonogramBadge,
} from './IslamicOrnaments';

/**
 * Section 3: Bride and Groom Section
 * Showcasing the couple in royal emerald & antique gold illuminated frames
 */
export default function CoupleSection({ config }) {
  const { couple, familyInvitation } = config;
  const { groom, bride, monogram, order } = couple;

  const GroomCard = () => (
    <div className="couple-person-card groom-card">
      <div className="person-role-tag">
        <IslamicStarIcon size={14} className="tag-star" />
        <span>The Groom</span>
        <IslamicStarIcon size={14} className="tag-star" />
      </div>

      <h2 className="couple-name groom-name">{groom.fullName}</h2>

      <p className="parents-line">{familyInvitation.groomParentsLine}</p>

      {groom.familyTitle && (
        <p className="family-line">({groom.familyTitle})</p>
      )}

      {groom.about && <p className="person-about">{groom.about}</p>}
    </div>
  );

  const BrideCard = () => (
    <div className="couple-person-card bride-card">
      <div className="person-role-tag">
        <IslamicStarIcon size={14} className="tag-star" />
        <span>The Bride</span>
        <IslamicStarIcon size={14} className="tag-star" />
      </div>

      <h2 className="couple-name bride-name">{bride.fullName}</h2>

      <p className="parents-line">{familyInvitation.brideParentsLine}</p>

      {bride.familyTitle && (
        <p className="family-line">({bride.familyTitle})</p>
      )}

      {bride.about && <p className="person-about">{bride.about}</p>}
    </div>
  );

  return (
    <section className="invitation-section couple-section" id="couple">
      <div className="section-inner-container">
        {/* Monogram Seal */}
        <div className="couple-seal-wrapper">
          <RoyalMonogramBadge monogram={monogram} />
        </div>

        <h3 className="section-pre-title">In Celebration of Holy Matrimony</h3>

        <div className="couple-grand-frame">
          <CornerArabesque position="top-left" />
          <CornerArabesque position="top-right" />
          <CornerArabesque position="bottom-left" />
          <CornerArabesque position="bottom-right" />

          <div className="couple-cards-grid">
            {order === 'bride-first' ? (
              <>
                <BrideCard />
                <div className="couple-center-union">
                  <div className="union-vertical-line" />
                  <div className="union-symbol-wrap">
                    <span className="union-arabic-qubool">قَبِلْتُ</span>
                    <span className="union-english-and">&amp;</span>
                  </div>
                  <div className="union-vertical-line" />
                </div>
                <GroomCard />
              </>
            ) : (
              <>
                <GroomCard />
                <div className="couple-center-union">
                  <div className="union-vertical-line" />
                  <div className="union-symbol-wrap">
                    <span className="union-arabic-qubool">قَبِلْتُ</span>
                    <span className="union-english-and">&amp;</span>
                  </div>
                  <div className="union-vertical-line" />
                </div>
                <BrideCard />
              </>
            )}
          </div>
        </div>

        <FloralGoldDivider className="section-divider" />
      </div>
    </section>
  );
}
