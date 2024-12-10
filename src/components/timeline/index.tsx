"use client";

import { useEffect, useRef } from "react";
import { TimelineItem } from "./TimelineItem";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineRunner } from "./TimelineRunner";

import "./Timeline.css";

interface TimelineProps {
  children: React.ReactNode;
}

// const Timeline = ({ children }: TimelineProps) => {
//   return (
//     <div className="timeline-container">
//       <div className="timeline-center-line" />
//       {children}
//       {/* {timelineData.map((item, index) => (
//       <TimelineItem
//         key={index}
//         {...item}
//         index={index}
//         isLatest={index === 0}
//       />
//     ))} */}
//     </div>
//   );
// };

const Timeline = ({ children }: TimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (!target.classList.contains("animate")) {
              target.classList.add("animate");
              // Remove observer after animation is added
              observer.unobserve(target);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const timelineElements = document.querySelectorAll(
      ".timeline-header, .timeline-item, .timeline-center-line"
    );
    timelineElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      timelineElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
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
