"use client";

import { experience } from "@/data/data";
import styles from "./Experience.module.css";

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  companyLogo: string;
  period: string;
  location: string;
  description: string;
}

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = experience.company.charAt(0).toUpperCase();
      parent.className += ` ${styles.fallbackLogo}`;
    }
  };

  return (
    <div className={styles.experienceCard}>
      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.companyInfo}>
          {/* Company Logo */}
          <div className={styles.logoContainer}>
            <img
              src={experience.companyLogo}
              alt={`${experience.company} logo`}
              className={styles.companyLogo}
              onError={handleImageError}
            />
          </div>

          {/* Role & Company */}
          <div className={styles.roleInfo}>
            <h3 className={styles.role}>{experience.role}</h3>
            <p className={styles.company}>{experience.company}</p>
          </div>
        </div>
      </div>

      {/* Meta Information */}
      <div className={styles.metaInfo}>
        <div className={styles.metaItem}>
          <svg
            className={styles.icon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span>{experience.period}</span>
        </div>
        <div className={styles.metaItem}>
          <svg
            className={styles.icon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <p className={styles.description}>{experience.description}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Professional Experience</h2>
          <p className={styles.subtitle}>
            My journey through various roles and companies, building products
            and solving challenges
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className={styles.experienceGrid}>
          {experience.map((exp) => (
            <ExperienceCard
              key={`${exp.company}-${exp.period}`}
              experience={exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
