import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

// LAYOUT
export const HOME = "home";
export const EXPERIENCE = "experience";
export const BRAND = "brand";
export const SOCIALS = "socials";

// EXPERIENCE
export type Description = string | React.ReactNode;
export type Job = {
  company: string;
  logo: string;
  period: string;
  role: string;
  descriptions: Description[];
};

export const jobs: Job[] = [
  {
    company: "OFX",
    logo: "/assets/experience/OFX.svg",
    period: "Aug 2020 - now",
    role: "Junior Software Engineer",
    descriptions: [
      <>
        Currently, solving <span className="bold-pink"> OKTA </span> and{" "}
        <span className="bold-pink"> AWS </span>
        problems for the services surrounding onboarding.
      </>,
      <>
        Solved <span className="bold-pink"> REACT </span> frontend problems for
        the team’s website.
      </>,
      <>
        Developed a <span className="bold-pink"> REACT </span> UI component to
        expand the internal UI component library available to all teams.
      </>,
      <>
        Introduced a standalone <span className="bold-pink"> REACT </span>
        micro-frontend widget to help improve the user onboarding experience.
      </>,
      "Participated in the team’s hackathon day to analyse the benefits of incorporating the widget mentioned above in an external party’s website.",
    ],
  },
  {
    company: "Macquarie Group",
    logo: "/assets/experience/Macquarie.svg",
    period: "Jan 2020 - Jul 2020",
    role: "UNSW Co-op Intern",
    descriptions: [
      <>
        Solved <span className="bold-pink">REACT</span> frontend problems to
        improve features in an internal web application.
      </>,
      <>
        Upgraded dependencies in <span className="bold-pink"> JAVA </span>{" "}
        backend applications and utilised a few high level tools (
        <span className="bold-pink">AQUA</span>,
        <span className="bold-pink"> FORTIFY</span>,
        <span className="bold-pink"> OPENSHIFT</span>,
        <span className="bold-pink"> SUMO LOGIC</span>) to address security
        vulnerability issues.
      </>,
    ],
  },
  {
    company: "Atlassian",
    logo: "/assets/experience/Atlassian.svg",
    period: "Dec 2018 - Feb 2019",
    role: "UNSW Co-op Intern",
    descriptions: [
      "Introduced a new changelog feature in an internal mobile app to help document changes for each version.",
      <>
        Solved <span className="bold-pink"> ANDROID </span> and
        <span className="bold-pink"> REACT </span> problems to improve features
        in the internal app.
      </>,
      <>
        Updated <span className="bold-pink"> MARKDOWN </span> documentation to
        help new users of the internal app.
      </>,
    ],
  },
  {
    company: "CBA",
    logo: "/assets/experience/Commonwealth.svg",
    period: "Dec 2017 - Feb 2018",
    role: "UNSW Co-op Intern",
    descriptions: [
      <>
        Developed automated acceptance tests using
        <span className="bold-pink"> SPECFLOW</span>,
        <span className="bold-pink"> SELENIUM </span> and
        <span className="bold-pink"> C#</span> to thoroughly test frontend
        components.
      </>,
      "Collaborated with an external party to help install a JAWS License Server to improve inclusivity.",
      <>
        Investigated <span className="bold-pink"> APPDYNAMICS </span> and
        provided analytical dashboards to improve app monitoring.
      </>,
    ],
  },
];

// SOCIALS

export type Social = {
  logo: React.ReactNode;
  text: string;
  href: string;
};

export const socials: Social[] = [
  {
    logo: <LinkedInIcon />,
    text: "@ddaquel",
    href: "https://linkedin.com/in/ddaquel",
  },
  {
    logo: <FacebookIcon />,
    text: "@ddaquel",
    href: "https://facebook.com/ddaquel",
  },
  {
    logo: <EmailIcon />,
    text: "derekdaquel@gmail.com",
    href: "mailto:derekdaquel@gmail.com?subject=Enquiry%20-%20derekdaquel.com&body=Hi%20Derek%2C%0D%0A%0D%0A%7BReason%20for%20messaging%7D%0D%0A%0D%0AKind%20regards%2C%0D%0A%7BYour%20name%7D",
  },
];
