export const portfolioData = {
  personal: {
    name: "Waseem Abbasi",
    role: "Full-Stack & Frontend Developer",
    tagline: "I build clean, accessible, and fast web apps.",
    bio: [
      "I am a Software Developer with 2 years of experience at iBirds Services Pvt. Ltd., specializing in full-stack web development. I have hands-on experience with the PERN stack (PostgreSQL, Express.js, React.js, and Node.js), along with REST API development, database management, and application debugging. I have worked on developing, maintaining, and improving web applications, implementing new features, fixing bugs, and ensuring smooth application performance. I am also familiar with Angular, Next.js, WordPress, and PHP, and continuously work on improving my technical skills. I enjoy solving problems, writing clean and maintainable code, and building efficient, user-friendly web applications."
    ],
    location: "Ajmer,Rajasthan, CA (Open to Remote)",
    statusBadge: "Available for new projects & full-time roles",
    email: "waseemabbasi5111@gmail.com",
    github: "https://github.com/waseem-abbasi",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "./Resume.pdf",
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Completed Projects", value: "5+" },
      { label: "Open Source PRs", value: "50+" },
      { label: "Coffee Cups / Day", value: "2" }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Bootstrap 5", level: "Advanced" },
      { name: "HTML5 / Semantic Web", level: "Advanced" },
      { name: "CSS3 / Sass", level: "Advanced" },
      { name: "Responsive UI/UX", level: "Advanced" }
    ],
    backend: [
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "REST APIs", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Firebase / Supabase", level: "Proficient" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vite / Webpack", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Figma (Design to Code)", level: "Proficient" },
      { name: "Jest / Vitest", level: "Intermediate" },
      { name: "Docker (Basics)", level: "Familiar" }
    ],
    principles: [
      "Web Accessibility (WCAG 2.1)",
      "Mobile-First Responsive Design",
      "Component-Driven Architecture",
      "Core Web Vitals & Performance",
      "Clean Code & Self-Documenting APIs",
      "Continuous Integration"
    ]
  },

  projects: [
    {
      id: "todo-app",
      title: "ToDo Task Manager",
      category: "Full Stack",
      subtitle: "A simple and secure task management application",
      thumbnail: "/todo.png",
      description:
        "A full-stack ToDo application that allows users to sign up, log in, and manage their daily tasks efficiently. Users can add tasks with titles and descriptions, view their task list, delete individual tasks, and select multiple tasks using checkboxes to delete them in a single action. The application includes user authentication, protected access, and a clean, responsive interface built with React and Bootstrap.",
      tags: ["React.js", "Bootstrap 5", "Express.js", "PostgreSQL", "REST APIs", "JWT Authentication", "Node.js"],
      featured: true,
      github: "https://github.com/waseem-abbasi/todo.git",
      demo: "https://todoprectise.netlify.app/",
      highlights: [
        "User registration and login functionality for secure account access",
        "Add and manage tasks with titles and descriptions",
        "Display all tasks in a structured table",
        "Select individual or multiple tasks using row checkboxes",
        "Delete selected tasks in bulk with a single action",
        "Delete individual tasks directly from the Action column",
        "Protected routes and authenticated user access",
        "Responsive and user-friendly interface built with Bootstrap"
      ]
    },

    {
      id: "dice-game",
      title: "Dice Game",
      category: "Frontend",
      subtitle: "An interactive dice game with random rolls and score tracking",
      thumbnail: "/dice_game.png",
      description:
        "An interactive dice game that allows players to roll dice, test their luck, and enjoy a simple gaming experience through a clean and responsive interface. The application uses JavaScript logic to generate random dice outcomes and update the game state dynamically. Built with React.js, it focuses on interactive gameplay, reusable components, and a smooth user experience.",

      tags: [
        "React.js",
        "JavaScript",
        "Bootstrap 5",
        "HTML5",
        "CSS3"
      ],

      featured: true,

      github: "https://github.com/waseem-abbasi/todo.git",
      demo: "https://dice-game-ochre-gamma.vercel.app/",

      highlights: [
        "Interactive dice rolling with randomly generated results",
        "Dynamic UI updates based on game interactions",
        "Real-time game state and score management",
        "Reusable React components for maintainable code",
        "Clean and user-friendly game interface",
        "Responsive design for different screen sizes"
      ]
    },

    {
      id: "craft-commerce",
      title: "CraftStore - Minimal E-commerce",
      category: "Full Stack",
      subtitle: "Modern storefront template built for artisan makers",
      description:
        "A modern, high-speed storefront built for independent creators and makers. Includes instant faceted search, responsive slide-out cart drawer, accessible modal galleries, and Stripe checkout simulation.",
      tags: ["React.js", "Bootstrap 5", "Stripe API", "Express", "PostgreSQL"],
      featured: true,
      github: "https://github.com/example/craft-commerce",
      demo: "https://example.com/craft-commerce",
      highlights: [
        "Scored 99/100 on Google Lighthouse for performance and accessibility",
        "Accessible modal view and image carousel with touch gestures",
        "Zero layout shifts during image and price loading"
      ]
    },
    {
      id: "paper-docs",
      title: "PaperLog Documentation Reader",
      category: "Tools",
      subtitle: "Clean technical reading interface with markdown parsing",
      description:
        "A reading interface for engineering docs and changelogs. Features auto-generated sticky table of contents, syntax highlighting with copy-paste actions, reading time estimation, and font sizing controls.",
      tags: ["React.js", "Bootstrap 5", "PrismJS", "Markdown", "Web Storage"],
      featured: false,
      github: "https://github.com/example/paper-docs",
      demo: "https://example.com/paper-docs",
      highlights: [
        "Dynamic table of contents with smooth scroll-spy highlighting",
        "One-click code snippet copy with visual feedback toast",
        "Customizable reading width and typography settings"
      ]
    },
    {
      id: "weather-minimal",
      title: "Atmosphere Micro-Weather",
      category: "Frontend",
      subtitle: "Glanceable local weather with radar maps and air quality",
      description:
        "A minimalist weather web app that prioritizes clarity over visual clutter. Provides hourly forecasts, rain probability timelines, and UV index guidance using Open-Meteo's open API.",
      tags: ["React.js", "Bootstrap 5", "Open-Meteo API", "Geolocation API"],
      featured: false,
      github: "https://github.com/example/atmosphere",
      demo: "https://example.com/atmosphere",
      highlights: [
        "Zero API keys required by utilizing open weather data sources",
        "GPS auto-detection with city search fallback and saved favorites",
        "Responsive cards that scale gracefully down to 320px screens"
      ]
    },
    {
      id: "snippet-vault",
      title: "SnippetVault CLI & Web Extension",
      category: "Tools",
      subtitle: "Cross-platform code snippet organizer for busy devs",
      description:
        "A utility to store, tag, and instantly retrieve reusable code snippets, shell commands, and regex patterns. Includes smart keyword tagging and single-click copy.",
      tags: ["React.js", "Bootstrap 5", "Chrome Extensions API", "TypeScript"],
      featured: false,
      github: "https://github.com/example/snippet-vault",
      demo: "https://example.com/snippet-vault",
      highlights: [
        "Fuzzy search algorithm matching tags, languages, and comments",
        "Export and import snippet collections as portable JSON files",
        "Keyboard shortcut for rapid insertion into active editors"
      ]
    }
  ],

  experience: [

    {
      role: "Full Stack Developer (PERN Stack)",
      company: "iBirds Services Pvt. Ltd.",
      period: "2025 - Present",
      location: "Ajmer, Rajasthan, India",
      type: "Full-Time",

      description:
        "Working as a Full Stack Developer, building and maintaining web applications using the PERN stack. Responsible for developing responsive user interfaces, creating REST APIs, managing PostgreSQL databases, implementing application features, fixing bugs, and improving overall application performance. Collaborating with the team to deliver reliable, maintainable, and user-friendly software solutions.",

      points: [
        "Develop and maintain responsive web applications using React.js and Bootstrap.",
        "Build and integrate REST APIs using Node.js and Express.js for frontend and backend communication.",
        "Design, manage, and optimize PostgreSQL databases, including queries, relationships, and data operations.",
        "Implement authentication, authorization, and secure user access for web applications.",
        "Identify, debug, and resolve frontend and backend issues to improve application reliability.",
        "Develop new features, maintain existing functionality, and improve application usability.",
        "Test application workflows, validate API responses, and ensure data consistency across modules.",
        "Collaborate with team members to understand requirements and deliver software updates."
      ],

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JavaScript",
        "Bootstrap 5",
        "REST APIs",
        "Git",
        "GitHub"
      ]
    },


    {
      role: "Salesforce Administrator Intern",
      company: "ChazeCloud Services Pvt Ltd",
      period: "2024(july to december)",
      location: "Ajmer, Rajasthan, India",
      type: "Internship",
      description:
        "Worked as a Salesforce Administrator Intern, gaining hands-on experience in Salesforce configuration, data management, and process automation. Worked with Screen Flows to create interactive user experiences and automate business processes. Learned to configure objects, fields, page layouts, validation rules, and user permissions while exploring Salesforce platform features and best practices.",

      points: [
        "Configured Salesforce objects, custom fields, page layouts, and record types to meet application requirements.",
        "Created Screen Flows to guide users through data entry and automate business processes.",
        "Worked with flow elements, decision logic, assignments, and record operations to build automation workflows.",
        "Configured validation rules to maintain data accuracy and enforce business requirements.",
        "Managed user access and permissions using profiles, permission sets, and role-based access concepts.",
        "Worked with Salesforce records, reports, and list views to organize and manage business data.",
        "Tested and debugged Screen Flows to identify errors and ensure expected behavior.",
        "Gained practical knowledge of Salesforce administration, declarative development, and platform best practices."
      ],

      technologies: [
        "Salesforce CRM",
        "Salesforce Administration",
        "Screen Flows",
        "Flow Builder",
        "Custom Objects",
        "Validation Rules",
        "Profiles & Permission Sets",
        "Reports & Dashboards"
      ]
    },


    {
      role: "WordPress Developer",
      company: "Kirnani Technology pvt ltd",
      period: "2024(january to june)",
      location: "Ajmer, Rajasthan, India",
      type: "Full-Time",

      description:
        "Worked on developing, customizing, and maintaining WordPress websites based on project requirements. Focused on creating responsive layouts, customizing themes, managing website content, and improving user experience. Worked with WordPress tools and plugins to implement website features, resolve layout issues, and ensure consistent functionality across different devices.",

      points: [
        "Developed and customized WordPress websites according to project requirements.",
        "Customized themes, page layouts, menus, headers, footers, and website sections.",
        "Created responsive website layouts for desktop, tablet, and mobile devices.",
        "Worked with WordPress plugins to add and configure website functionality.",
        "Customized website styling using CSS, HTML, and basic JavaScript.",
        "Managed website pages, media, navigation menus, and content updates.",
        "Identified and fixed UI issues, layout problems, and website functionality bugs.",
        "Maintained website consistency, usability, and overall performance."
      ],

      technologies: [
        "WordPress",
        "Elementor",
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "Responsive Web Design",
        "WordPress Plugins"
      ]
    }

  ],

  education: [
    {
      degree: "bachelor of commerce",
      institution: "Maharshi Dayanand University",
      period: "2019 - 2022"
    },
    {
      degree: "ICST",
      institution: "Star Infotech College Ajmer",
      period: "2022-2023"
    }
  ]
};
