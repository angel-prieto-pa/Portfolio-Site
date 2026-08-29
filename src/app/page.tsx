import { portfolio } from "@/data/portfolio";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import styles from "./page.module.css";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export default function Home() {
  return (
    <main className={styles.page}>

      <aside className={styles.sidebar}>
        <div className={styles.intro}>
          <h1>{portfolio.name}</h1>
          <h2>{portfolio.title}</h2>
          <p>{portfolio.introduction}</p>
        </div>
        
        <nav>
          <ul>
            {portfolio.navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
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

    </main>
  );
}