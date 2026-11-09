import { Globe } from "lucide-react";

import { Icons } from "@/components/ui/icons";

export const DATA = {
  name: "OJ Adeyemi",
  url: "https://ojadeyemi.github.io/portfolio/",
  summary:
    "Hi, I'm OJ, a computer science student at York University and a Software Developer Intern at Genesys in Toronto. I enjoy solving problems with software, especially backend systems, data pipelines and cloud infrastructure.",
  aboutVideo: {
    src: "/video/about_me.mp4",
    thumbnail: "/img/about_me_thumbnail.jpg",
    duration: "2:09",
  },
  introduction: [
    {
      heading: "My program",
      body: "Bachelor of Science (Honours) in Computer Science at the Lassonde School of Engineering, York University. Expected graduation: Spring 2027.",
    },
    {
      heading: "What I love about my program",
      body: "Problem solving. Computer science gives me new problems to break down and work through, and that is what keeps me interested in it.",
    },
    {
      heading: "My most rewarding co-op experience",
      body: "My co-op at Genesys. I'm learning new big data technologies and finding out how much I don't know yet. There is so much to learn, and I get to contribute to a service that runs at scale.",
    },
    {
      heading: "My career goal",
      body: "I want to go into backend, data and cloud engineering, which fits my current role and team at Genesys.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "Python",
        "Java",
        "Go",
        "SQL",
        "JavaScript",
        "TypeScript",
        "Bash",
      ],
    },
    {
      category: "Frameworks",
      items: [
        "Spring Boot",
        "FastAPI",
        "SQLAlchemy",
        "React",
        "Next.js",
        "Node.js",
        "JUnit",
        "Pytest",
      ],
    },
    {
      category: "Data",
      items: ["Kafka", "Spark", "Airflow", "Iceberg", "Redis"],
    },
    {
      category: "Cloud and DevOps",
      items: [
        "Git",
        "Docker",
        "Kubernetes",
        "Terraform",
        "AWS",
        "Google Cloud",
      ],
    },
    {
      category: "Observability",
      items: ["OpenTelemetry", "New Relic"],
    },
  ],
  navbar: [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  resumeUrl: "/pdf/resume.pdf",
  contact: {
    email: "ojieadeyemi@gmail.com",
    social: [
      {
        name: "Email",
        label: "ojieadeyemi@gmail.com",
        url: "mailto:ojieadeyemi@gmail.com",
        icon: Icons.email,
      },
      {
        name: "LinkedIn",
        label: "linkedin.com/in/ojadeyemi",
        url: "https://www.linkedin.com/in/ojadeyemi/",
        icon: Icons.linkedin,
      },
      {
        name: "GitHub",
        label: "github.com/ojadeyemi",
        url: "https://github.com/ojadeyemi",
        icon: Icons.github,
      },
    ],
  },
  work: [
    {
      company: "Genesys",
      badges: [],
      href: "https://www.genesys.com/",
      title: "Software Developer Intern",
      logoUrl: "/img/genesys.jpeg",
      start: "May 2026",
      end: "Present",
      description: "Powering decisions with big data",
    },
    {
      company: "Northscore",
      badges: [],
      href: "https://www.northscore.ca/",
      title: "Founder",
      logoUrl: "/img/northscore.png",
      start: "Jan 2026",
      end: "Present",
      description: "The home of Canadian sports",
    },
    {
      company: "Maple Leaf Sports & Entertainment",
      badges: [],
      href: "https://www.mlsedigital.com/",
      title: "Software & Data Engineer Intern",
      logoUrl: "/svg/mlse_green_logo.svg",
      start: "May 2024",
      end: "June 2025",
      description: "Built innovative applications",
    },
  ],
  education: [
    {
      school: "Lassonde School of Engineering",
      href: "https://lassonde.yorku.ca/",
      degree: "Bachelor of Science in Computer Science (Honours)",
      logoUrl: "/img/lassonde_school_of_engineering_york_university_logo.png",
      start: "2022",
      end: "2027",
    },
  ],
  certification: [
    {
      school: "Amazon Web Services",
      href: "#certification",
      degree: "Cloud Practitioner - Foundational",
      logoUrl: "/svg/amazon-web-services-logo.svg",
      start: "2025",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Scout AI",
      slug: "scout-ai",
      type: "Solo build",
      headline: "Won the 2026 Canada Basketball Data Challenge",
      dates: "March 2026",
      description:
        "I built Scout AI for the Canada Basketball Data Challenge, and it won. You ask a question in plain English, like who led the CEBL in scoring, and it searches 25,000+ players from the CEBL, U SPORTS, CCAA and other Canadian leagues. It answers with stats and charts, and it can write a full scouting report on a player.",
      role: "I built the whole thing myself, from the data pipeline to the front end.",
      contributions: [
        "Wrote the AI agent with Cohere and Google Gemini. It works out whether you want stats or a scouting report, then takes the right path.",
        "Set up a data pipeline that updates player stats automatically, so the reports don't go stale.",
        "Made player search and stats pages that work across the different leagues.",
      ],
      outcomes: [
        "Won the 2026 Canada Basketball Data Challenge.",
        "Scouting research that takes hours by hand now takes seconds.",
        "You don't need SQL or a spreadsheet to get an answer.",
      ],
      methods: [
        "An AI agent that routes each question to the right tool",
        "Turning plain-English questions into database queries",
        "An automated pipeline to keep the data up to date",
      ],
      tools: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "LangGraph",
        "Cohere",
        "Google Gemini",
        "PostgreSQL",
        "SQLite",
        "Docker",
        "Google Cloud",
      ],
      skills: [
        "Full-stack development",
        "AI agent design",
        "Data engineering",
        "Cloud deployment",
      ],
      video: "/video/canada_basketball_scout_ai_demo_v1.mp4",
      image: {
        src: "/img/scout_ai_agent_graph.png",
        width: 409,
        height: 531,
        caption:
          "Every question hits a router first. It either looks up stats or starts a scouting report, then the agent writes the response.",
      },
      code: "",
      links: [
        {
          type: "Live site",
          href: "https://scout.northscore.ca/",
          icon: <Globe className="size-3.5" />,
        },
        {
          type: "Source",
          href: "https://github.com/ojadeyemi/canada-basketball-scoutai-platform",
          icon: <Icons.github className="size-3.5" />,
        },
      ],
    },
    {
      title: "cfl-sdk",
      slug: "cfl-sdk",
      type: "Open source",
      headline: "Used by multiple developers",
      dates: "Sept 2025 - Present",
      description:
        "A Python library for the Canadian Football League's API. Instead of writing your own requests, you get one typed client for teams, players, fixtures, rosters, stats and standings. It's unofficial and open source, and you can install it from PyPI.",
      role: "I created it and still maintain it.",
      contributions: [
        "Wrote one client that covers 13 parts of the CFL API, including teams, rosters, standings and leaderboards.",
        "Added full type hints, logging and separate errors for timeouts, missing data and server failures, so problems are easy to track down.",
        "Wrote the quick start guide and API reference.",
        "Set up GitHub Actions to publish new releases to PyPI automatically.",
      ],
      outcomes: [
        "It's on PyPI under the MIT license, so anyone can use it.",
        "Multiple developers are using it today.",
        "It's how I contribute to open source.",
      ],
      methods: [
        "Typed API client design",
        "Automated testing and linting",
        "Publishing an open source package",
      ],
      tools: [
        "Python",
        "HTTPX",
        "Poetry",
        "Pytest",
        "Pylint",
        "GitHub Actions",
        "PyPI",
      ],
      skills: [
        "Python development",
        "API integration",
        "Technical documentation",
        "Open source maintenance",
      ],
      video: "",
      image: null,
      code: `# pip install cfl-sdk
from cfl import CFLClient

with CFLClient() as client:
    standings = client.get_standings(year=2026)
    leaders = client.get_leaderboards(season=2026, count=10)

row = standings["west"][0]
print(row["abbreviation"], row["wins"], row["losses"])`,
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/cfl-sdk/",
          icon: <Globe className="size-3.5" />,
        },
        {
          type: "Source",
          href: "https://github.com/ojadeyemi/cfl-sdk",
          icon: <Icons.github className="size-3.5" />,
        },
      ],
    },
    {
      title: "Book Buddy",
      slug: "book-buddy",
      type: "Team project",
      headline: "Built for EECS 3311 Software Design",
      dates: "Oct 2025 - Dec 2025",
      description:
        "A reading tracker for people who just want to keep up with their books. You can sort books onto shelves, rate and review them, and set reading goals for the month or year, without the social side of apps like Goodreads.",
      role: "Full-stack developer. I built it with one other developer for EECS 3311 Software Design.",
      contributions: [
        "Set up the project and wrote the first backend APIs for users, books and the catalog, documented with Swagger.",
        "Added book search using the Open Library API.",
        "Built signup, login and account settings.",
        "Built the personal library, with shelves and reviews.",
        "Added the monthly reading tracker and a way to add your own books by hand.",
      ],
      outcomes: [
        "We had a complete, working app by the final sprint.",
        "I got real practice building software with someone else, using sprints and pull requests.",
      ],
      methods: [
        "MVC architecture with a REST API",
        "Sprints with stand-ups, tracked in Trello",
        "Git Flow with feature branches and pull requests",
      ],
      tools: [
        "React",
        "TypeScript",
        "Vite",
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Maven",
        "SQLite",
        "Open Library API",
        "Swagger",
      ],
      skills: [
        "Full-stack development",
        "Java backend development",
        "REST API design",
        "Agile teamwork",
      ],
      video: "/video/Book_Buddy_App_demo_v1.mp4",
      image: null,
      code: "",
      links: [],
    },
  ],
} as const;
