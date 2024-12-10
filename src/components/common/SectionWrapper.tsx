import React from "react";
import Typography from "./Typography";

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
}

const SectionWrapper = ({ children, title }: SectionWrapperProps) => {
  return (
    <section className="flex flex-column gap-1">
      {title ? <Typography variant="h3">{title}</Typography> : null}
      {children}
    </section>
  );
};

export default SectionWrapper;
