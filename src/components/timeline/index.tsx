"use client";

import { TimelineHeader } from "./TimelineHeader";
import { TimelineRunner } from "./TimelineRunner";

import "./Timeline.css";

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="timeline-container">
      <TimelineHeader />
      <div className="timeline-wrapper">
        <div className="timeline-center-line">
          <TimelineRunner />
        </div>
        {children}
      </div>
    </div>
  );
};

// Timeline.Item = TimelineItem;

export default Timeline;
