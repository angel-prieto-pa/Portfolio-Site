"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import styles from "./page.module.css";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export default function Home() {

  const [activeSection, setActiveSection] = useState("about");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = contentRef.current;

    if (!scrollContainer) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },

      {
        root: scrollContainer,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    portfolio.navigation.forEach((item) => {
      const section = document.getElementById(item.href);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>

      <aside className={styles.profile}>
        <div className={styles.intro}>
          <h1>{portfolio.name}</h1>
          <h2>{portfolio.title}</h2>
          <p>{portfolio.introduction}</p>
        </div>

        <nav>
          <ul>
            {portfolio.navigation.map((item) => {
              const sectionID = item.href.replace("#", "");

              return (
                <li key={item.href}>
                  <button
                    type="button"
                    className={`${styles.navigationButton}
                      ${activeSection === sectionID ? styles.activeNavigationButton : ""}`
                    }
                    onClick={() => {
                      setActiveSection(sectionID);
                      document.getElementById(sectionID)?.scrollIntoView({behavior: "smooth",});
                    }}>
                      {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className={styles.socialLinks}>
          {portfolio.socialLinks.map((social) => {
            const Icon = socialIcons[social.icon as keyof typeof socialIcons];

            return (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${social.label} profile.`}>
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>

      </aside>

      <div ref={contentRef} className={styles.content}>
        <section id="about" className={styles.about}>
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section id="experience">
          {portfolio.experience.map((experience) => (
            <article className={styles.experienceCard} key={experience.company}>
              <span className={styles.experiencePeriod}>
                {experience.periodStart} to {experience.periodEnd}
              </span>
            
              <div className={styles.experienceDetails}>
                <h3>
                  {experience.companyLink ? (
                    <a href={experience.companyLink} target="_blank" rel="noopener noreferrer">
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </h3>
                <h4>{experience.roles.join(" · ")}</h4>
                <p>{experience.description}</p>
                <ul className={styles.externalLinks}>
                  {experience.externalLinks.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <LinkIcon />
                        {link.description}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul>
                  {experience.technologies.map((technology) => (
                    <li className={styles.technology} key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

            </article>
          ))}
        </section>

      </div>
    </main>
  );
}