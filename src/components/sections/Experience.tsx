// src/components/sections/Experience.tsx
import experienceData from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience">
      <div className="exp-header">
        <p className="section-label reveal">Experience</p>
        <h2 className="section-title reveal">
          Where I've
          <br />
          done the work.
        </h2>
      </div>

      {experienceData.map((exp) => (
        <div className="exp-strip" key={exp.id}>
          <div>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-role">{exp.role}</p>
            <p className="exp-date">{exp.period}</p>
          </div>
          <p className="exp-desc">{exp.description}</p>
          <div className="exp-stack">
            {exp.stack.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
