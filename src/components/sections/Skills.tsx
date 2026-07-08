// src/components/sections/Skills.tsx
import skillsData from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-header">
        <p className="section-label reveal">Stack</p>
        <h2 className="section-title reveal">
          The tools
          <br />
          I reach for.
        </h2>
      </div>
      <div className="skills-grid">
        {skillsData.map((group) => (
          <div className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <div className="skill-cluster">
              {group.skills.map((skill) => (
                <span className={`sk ${skill.size}`} key={skill.name}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
