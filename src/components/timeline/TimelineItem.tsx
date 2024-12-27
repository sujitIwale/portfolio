import React from "react";
import Typography from "../common/Typography";

interface TimelineItemProps {
  period: string;
  role: string;
  company: string;
  companyLogo: string;
  location: string;
  description: string;
  isLatest: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  period,
  role,
  company,
  companyLogo,
  location,
  description,
  isLatest,
}) => {
  return (
    <div className={`timeline-item-wrapper ${isLatest ? "latest-item" : ""}`}>
      <div className="timeline-item">
        <div className="timeline-content">
          <div className="company-info">
            <img src={companyLogo} alt={company} className="company-image" />
            <div className="company-details">
              <h3 className="timeline-role">{role}</h3>
              <div className="timeline-meta">
                <div className="company-name">
                  <i className="fas fa-building"></i>
                  <Typography variant="caption" color="secondary">
                    {company}
                  </Typography>
                </div>
                <div className="company-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <Typography variant="caption" color="secondary">
                    {location}
                  </Typography>
                </div>
                <div className="date-range">
                  <i className="fas fa-calendar"></i>
                  <Typography variant="caption" color="secondary">
                    {period}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <Typography variant="body1">{description}</Typography>
        </div>
      </div>
    </div>
  );
};
