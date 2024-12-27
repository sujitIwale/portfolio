import Image from "next/image";
import React from "react";
import Typography from "../common/Typography";

interface TimelineItemProps {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  index: number;
  isLatest: boolean;
  companyLogo: string;
  period: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  role,
  period,
  company,
  location,
  description,
  isLatest,
  companyLogo,
}) => {
  return (
    <div className={`timeline-item-wrapper ${isLatest ? "latest-item" : ""}`}>
      <div className="timeline-item">
        <div className="timeline-content">
          <div className="flex gap-2 align-center">
            <div className="image-container">
              <Image src={companyLogo} width={0} height={0} alt={company} />
            </div>
            <div>
              <h3 className="timeline-role">{role}</h3>
              <div className="timeline-meta">
                <div>
                  <i className="fas fa-building text-secondary"></i>
                  <Typography
                    variant="caption"
                    color="secondary"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    {company}
                  </Typography>
                </div>
                <div>
                  <i className="fas fa-map-marker-alt text-secondary"></i>
                  <Typography
                    variant="caption"
                    color="secondary"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    {location}
                  </Typography>
                </div>
                <div>
                  <i className="fa-solid fa-calendar text-secondary"></i>
                  <Typography
                    variant="caption"
                    color="secondary"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    {period}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <Typography variant="body1" color="secondary">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};
