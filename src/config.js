import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
const dev_prefix = process.env.NODE_ENV !== "production" ? "/../public/" : "";

const Config = {
  email: "alex@aleksandrslarionovs.com",
  headshot: dev_prefix + "me.x.png",
  basicAnimation: {
    initial: { opacity: 0, transform: "translateY(20px)" },
    whileInView: { opacity: 1, transform: "translateY(0px)" },
    viewport: { once: true, amount: 0.5 },
  },
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/alekslario",
      Icon: IconBrandGithub,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/aleksandrs-larionovs/",
      Icon: IconBrandLinkedin,
    },
  ],
  navLinks: [
    {
      name: "About",
      url: "/#about",
    },

    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Articles",
      url: "/#articles",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],
  featured: [
    {
      title: "ClearPattern",
      description:
        "<p>A skincare and nutrition app that helps identify acne triggers through diet and visual progress tracking.",
      cover: dev_prefix + "images/clear-pattern.png",
      tech: [
        "ExpressJS",
        "React",
        "PostgreSQL",
        "Docker",
        "Terraform",
        "Doppler",
        "Ionic",
        "Android",
      ],
      github: "",
      external: "",
      cta: "",
    },
    {
      title: "Remake of a Shopify theme.",
      description:
        "<p>This is a fully functional Shopify theme remake built with React and NodeJS backend that supports auth, email handling, stock control.</p> Contentful conveniently provides static content, enabling easy edits for non-coders. My aim was to ensure that the checkout process, in terms of appearance and flow, matches that of a standard Shopify store.",
      cover: dev_prefix + "images/palo-alto-redux.png",
      tech: [
        "JS",
        "NextJS",
        "Serverless",
        "React",
        "Stripe",
        "Styled Components",
        "Contentful",
        "MongoDB Atlas",
        "Mongoose",
        "Vercel",
        "SendGrid",
      ],
      github: "https://github.com/alekslario/Palo-Alto-Redux",
      external: "https://palo-alto-redux.vercel.app",
      cta: "",
    },
    {
      title: "Raspberry Pi IoT project.",
      description:
        "A Raspberry Pi with an E-ink display interacting with the Midjourney Bot on the Discord server through a webhook.",
      cover: dev_prefix + "images/rasbign2.jpg",
      tech: ["Puppeteer", "Cloud Run", "Terraform", "Raspberry Pi"],
      github: "https://github.com/alekslario/rasbign",
      external:
        "https://medium.com/@aleksandlario/linking-midjourney-with-raspberry-pi-973951d99df7",
      cta: "",
    },
    {
      title: "Yet another algorithm visualizer.",
      description:
        "This is my take on algorithm visualization. No animation libraries were used, just pure CSS and abuse of pseudo-elements.",
      cover: dev_prefix + "images/algofind.png",
      tech: ["React", "Tailwind", "Styled Components"],
      github: "https://github.com/alekslario/algofind",
      external: "https://reliable-smakager-49c4c6.netlify.app/",
      cta: "",
    },
  ],
  projects: [
    {
      title: "Firestore-size",
      description:
        "This npm package calculates the approximate size (in bytes) of a Firestore document.",
      tech: ["JS"],
      github: "https://github.com/alekslario/firestore-size",
      external: "https://www.npmjs.com/package/firestore-size",
      cta: "",
    },
    {
      title: "gatsby-plugin-google-fonts-with-attributes",
      description: "This Gatsby plugin loads Google Fonts.",
      tech: ["JS, Gatsby"],
      github:
        "https://github.com/alekslario/gatsby-plugin-google-fonts-with-attributes",
      external:
        "https://www.npmjs.com/package/gatsby-plugin-google-fonts-with-attributes",
      cta: "",
    },
    {
      title: "SnippetLib",
      description: "Simple chrome extension for saving snippets of text.",
      tech: ["JS, TypeScript"],
      github: "https://github.com/alekslario/SnippetLib",
      external:
        "https://chrome.google.com/webstore/detail/your-snippet-library/melfcpcelidmppepfchcmigpenodlkgb",
      cta: "",
    },
    {
      title: "ChatGpt prompt prefixer",
      description:
        "When typing the same prompt over and over again gets tedious. A chrome extension.",
      tech: ["JS, CSS"],
      github: "https://github.com/alekslario/ChatGpt-Prompt-Prefixer-extension",
      cta: "",
    },
  ],
  articles: [
    {
      title:
        "The Art of AI: Using ChatGPT and Midjourney to Generate Inspiring Visuals.",
      description: "Exploring the beauty of randomness.",
      cover: dev_prefix + "images/1article.png",
      external:
        "https://medium.com/@aleksandlario/the-art-of-ai-using-chatgpt-and-midjourney-to-generate-inspiring-visuals-caa91012c8db",
    },
    {
      title: "How to Automate Midjourney Image Generation with Puppeteer.",
      description: "Web scraping Discord.",
      cover: dev_prefix + "images/2article.png",
      external:
        "https://medium.com/@aleksandlario/how-to-automate-midjourney-image-generation-with-puppeteer-6aea1b366c75",
    },
  ],
};
export default Config;
