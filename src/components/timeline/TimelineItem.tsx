import React from "react";

interface TimelineItemProps {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  index: number;
  isLatest: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  role,
  company,
  location,
  description,
  isLatest,
}) => {
  return (
    <div className={`timeline-item-wrapper ${isLatest ? "latest-item" : ""}`}>
      <div className="timeline-item">
        <div className="timeline-content">
          <span className="year-badge">{year}</span>
          <h3 className="timeline-role">{role}</h3>
          <div className="timeline-meta">
            <div>
              <i className="fas fa-building"></i>
              <span style={{ marginLeft: "8px" }}>{company}</span>
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <span style={{ marginLeft: "8px" }}>{location}</span>
            </div>
          </div>
          <p className="timeline-description">{description}</p>
        </div>
      </div>
    </div>
  );
};
