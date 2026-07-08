// src/components/sections/About.tsx
const About = () => {
  return (
    <section id="about">
      <div className="about-text reveal">
        <h2 className="about-heading">About</h2>
        <p>
          I'm a <strong>senior full-stack engineer</strong> with nine years
          building things that have to work: HIPAA-compliant healthcare systems
          at Gifthealth, intelligent web products through my own agency, and a
          stack of shipped side projects I'm proud of.
        </p>
        <p>
          My real motivation is{" "}
          <strong>building toward something of my own.</strong>
          Every client site, every shipped tool, every late-night experiment is
          a deliberate step. Family comes first; everything else earns its
          place.
        </p>

        <div className="about-education">
          <h3>Education</h3>
          <div className="edu-item">
            <p className="edu-degree">
              Bachelor's, Computer &amp; Information Sciences
            </p>
            <p className="edu-meta">
              ECPI University &middot; 2015 &ndash; 2019
            </p>
            <p className="edu-honor">
              Highest Honors &middot; National Technical Honor Society
            </p>
          </div>
          <div className="edu-item">
            <p className="edu-degree">
              Associate's, Computer Software &amp; Media Applications
            </p>
            <p className="edu-meta">
              ITT Technical Institute&ndash;Springfield &middot; 2013 &ndash;
              2015
            </p>
            <p className="edu-honor">
              Highest Honors &middot; National Technical Honor Society
            </p>
          </div>
        </div>
      </div>
      <div className="stat-strip">
        <div className="stat-item reveal">
          <p className="stat-num">
            10<sup>+</sup>
          </p>
          <p className="stat-lbl">Years in production</p>
        </div>
        <div className="stat-item reveal">
          <p className="stat-num">2</p>
          <p className="stat-lbl">Companies built</p>
        </div>
        <div className="stat-item reveal">
          <p className="stat-num">
            100<sup>+</sup>
          </p>
          <p className="stat-lbl">Projects shipped</p>
        </div>
      </div>
    </section>
  );
};

export default About;
