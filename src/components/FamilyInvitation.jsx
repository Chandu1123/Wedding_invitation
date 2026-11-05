import React from 'react';
import {
  CornerArabesque,
  FloralGoldDivider,
  IslamicStarIcon,
  RoyalMonogramBadge,
} from './IslamicOrnaments';

/**
 * Section 8: Family Invitation
 * Cordial invitation extended on behalf of both families
 */
export default function FamilyInvitation({ config }) {
  const { couple, familyInvitation } = config;
  const { groom, bride, monogram } = couple;

  return (
    <section className="invitation-section family-invitation-section" id="families">
      <div className="section-inner-container">
        <div className="section-header-tag">
          <IslamicStarIcon size={14} className="tag-star" />
          <span>Cordially Invited By</span>
          <IslamicStarIcon size={14} className="tag-star" />
        </div>

        <h2 className="section-main-heading">Family Invitation &amp; Blessings</h2>

        <div className="family-invitation-card">
          <CornerArabesque position="top-left" />
          <CornerArabesque position="top-right" />
          <CornerArabesque position="bottom-left" />
          <CornerArabesque position="bottom-right" />

          <p className="family-lead-quote">
            “With the blessings of Allah (SWT) and the cherished love of our families, we cordially invite you to join us in celebrating the auspicious wedding of”
          </p>

          <div className="family-couple-highlight">
            <span className="family-highlight-name">{groom.fullName}</span>
            <span className="family-highlight-symbol">&amp;</span>
            <span className="family-highlight-name">{bride.fullName}</span>
          </div>

          <div className="families-grid">
            {/* Groom's Family */}
            <div className="family-column groom-family-col">
              <div className="family-badge">Groom’s Family</div>
              <h3 className="family-parents-title">{familyInvitation.groomParentsLine}</h3>
              {groom.familyTitle && (
                <p className="family-dynasty">{groom.familyTitle}</p>
              )}
              <p className="family-wishes">
                And near &amp; dear family members
              </p>
            </div>

            <div className="family-divider-vertical" aria-hidden="true">
              <IslamicStarIcon size={18} />
            </div>

            {/* Bride's Family */}
            <div className="family-column bride-family-col">
              <div className="family-badge">Bride’s Family</div>
              <h3 className="family-parents-title">{familyInvitation.brideParentsLine}</h3>
              {bride.familyTitle && (
                <p className="family-dynasty">{bride.familyTitle}</p>
              )}
              <p className="family-wishes">
                And near &amp; dear family members
              </p>
            </div>
          </div>

          <div className="family-hospitality-footer">
            <p>{familyInvitation.closingHospitality}</p>
          </div>
        </div>

        <FloralGoldDivider className="section-divider" />
      </div>
    </section>
  );
}
