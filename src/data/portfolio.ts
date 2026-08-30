export const portfolio = {
  name: "Angel Prieto",
  title: "Software Engineer",
  introduction:
    "I am an aspiring software engineer with a focus on iOS development. Eager to build useful products and passionate about turning ideas into practical software with impact.",

  navigation: [
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
  ],

  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/angel-prieto-pa",
      icon: "github",
    },

    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/angel-prieto-pa/",
      icon: "linkedin",
    },
  ],

  about: [
    "I am an Electrical Engineering and Computer Science graduate from UC Berkeley with a passion for building thoughtful, user-centered software. My experience includes independently designing and releasing a native iOS application, contributing to a cross-platform educational game, and collaborating with designers, educators, backend developers, and Android engineers. Through these projects, I have worked across the full development lifecycle, from defining product requirements and designing interfaces to implementing features, integrating backend services, testing, debugging, and preparing software for release.",
    "I primarily work with Swift, UIKit, SwiftUI, Firebase, and native Apple frameworks, with additional experience in web development, databases, and other programming languages. I approach technical challenges with equal consideration for functionality and the experience of the people using the product. Whether I am refining an interface, coordinating functionality across platforms, or building a feature from the ground up, I aim to create software that is intuitive, reliable, and purposeful.",
    "I am seeking a software engineering role where I can contribute to meaningful products, learn from experienced teammates, and continue developing as an engineer. I bring curiosity, persistence, and a willingness to take ownership, along with genuine enthusiasm for turning ideas into polished experiences that provide real value."
  ],

  experience: [
    {
      company: "entelechy",
      companyLink: "",
      roles: ["iOS Developer"],
      periodStart: "March 2026",
      periodEnd: "Present",
      description:
        "entelechy is a privacy-focused iOS weight tracking app designed to make monitoring long term progress simple and intentional. I independently designed, developed, tested, and prepared the app for release, managing the complete process from initial concept and interface design to App Store submission. Built without accounts, advertising, third-party analytics, or unnecessary tracking, the app reflects my focus on thoughtful design, user privacy, and creating a polished native iOS experience.",
      externalLinks: [
        {
          description: "App Store",
          url: "https://apps.apple.com/us/app/entelechy/id6785759726"
        },
      ],
      technologies: ["Swift", "SwiftUI", "Swift Charts", "Core Data"],
    },

    {
      company: "MOATT LLC",
      companyLink: "",
      roles: ["iOS Developer", "Co-Founder"],
      periodStart: "December 2020",
      periodEnd: "Present",
      description:
        "Memory Operations Amplification Teaching Tool (MOATT) is a multiplayer educational game designed to make classroom learning more interactive, collaborative, and engaging. As a developer and co-founder, I have contributed across the entire product lifecycle: from early concepts, gameplay decisions, and interface design, to backend integration, testing, and implementation. I work closely with designers, educators, backend developers, and Android engineers to coordinate features, translate classroom needs into technical solutions, and maintain a consistent experience across platforms.",
      externalLinks: [],
      technologies: ["Swift", "UIKit", "Firebase"],
    },
  ],
};
