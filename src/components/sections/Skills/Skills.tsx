import Chip from "@/components/common/Chip";
import SectionWrapper from "@/components/common/SectionWrapper";
import { skills } from "@/data/data";

const Skills = () => {
  return (
    <SectionWrapper title="Skills">
      <div className="flex gap-1 justify-center">
        {skills.map((skill) => (
          <Chip key={skill} label={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
