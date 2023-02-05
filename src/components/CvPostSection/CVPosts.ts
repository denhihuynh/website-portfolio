type CVPost = {
  title: string;
  role: string;
  description: string[];
  startYear: number;
  technicalEnv: string;
};

const CVPosts: CVPost[] = [
  {
    title: "IKEA AB",
    role: "Senior frontend developer",
    description: [
      "Developed impactful user experience for IKEA using static generation and headless CMS. Contributed to IKEA's expansion into clean energy market by developing landing pages for new offerings.",
      "Developed the mobile app and web frontend. Migrated the app from react- native to swiftUI after introduction of more complex use cases. Took the app to 150k total downloads and 60k monthly active users",
    ],
    startYear: 2022,
    technicalEnv:
      "React, Typescript, GatsbyJS, Contentful, NX, GraphQL, Github actions, SCSS, Storybook, Cypress",
  },
  {
    title: "MoliStreaming AB",
    role: "IOS Developer / Senior web developer",
    description: [
      "Developed mobile app and web frontend for Moli, a social media platform with live video and audio sharing. Migrated from React-Native to SwiftUI, resulting in 150K total downloads and 60K monthly active users.",
    ],
    startYear: 2021,
    technicalEnv:
      "Swift, SwiftUI, SPM, JavaScript, React-native, NextJS, OpenAPI",
  },
  {
    title: "IKEA AB",
    role: "Senior Frontend developer",
    description: [
      "Developed self-service reclamation functionality for IKEA, with a focus on frontend development. Used IKEA's design system and implemented unit tests for code quality and reliability.",
    ],
    startYear: 2020,
    technicalEnv:
      "JavaScript, React, React-Storybook, SCSS, NPM, Conventional commits",
  },
  {
    title: "Boblberg A/S",
    role: "Technical advisor",
    description: [
      "Contributed to Boblberg project as technical advisor to improve mental health through their digital platform. Implemented best practices for React- native, linting tool for code quality, and coached the team on SEO and accessibility. Delivered presentations and workshops to enhance team skills.",
    ],
    startYear: 2020,
    technicalEnv:
      "SEO, Accessibility, WCAG, JavaScript, React, React-Native, ESLint, OpenAPI Specification",
  },
  {
    title: "A.P. Møller-Mærsk A/S",
    role: "Frontend Developer",
    description: [
      "Contributed to the success of Maersk's StarConnect project, a digitalization initiative to lower fleet fuel costs through advanced tracking tools. Assisted with frontend web application development, improved code review process, and expedited feedback on new features to increase efficiency.",
    ],
    startYear: 2020,
    technicalEnv:
      "TypeScript, React, React storybook, NPM, Azure devops, Jest, Git, React, Styled-Components",
  },
  {
    title: "Daniel Wellington AB - Logistics and supply chain",
    role: "Fullstack Developer",
    description: [
      "As a part of the logistics team at Daniel Wellington (DW), a world-renowned fashion brand known for its minimalistic, elegant, and timeless watch designs, I contributed to DW's efforts in counterfeit prevention and theft detection by developing backend solutions for traceability system and working on web and mobile applications for seamless integration and consistent user experience.",
    ],
    startYear: 2019,
    technicalEnv:
      "React, React-native, AWS Cognito, AWS Lambda, Swagger, AWS SNS, AWS SES, AWS SQS, Jest, ESLint",
  },
  {
    title: "Daniel Wellington AB - Wengy B2B",
    role: "Fullstack Developer",
    description: [
      "Contributed to DW as a developer, played a key role in migrating Wengy platform from Angular to React, streamlining tech department technologies. Developed backend solutions to support new workflows for launching watch sales in new countries, enhancing B2B flows with global distributors.",
    ],
    startYear: 2018,
    technicalEnv:
      "JavaScript, React, Angular 4, Jest, ESLint, AWS Cognito, AWS Cloudformation, AWS Lambda, AWS SNS, AWS SES, AWS SQS, Swagger",
  },
  {
    title: "Daniel Wellington AB - Marketing-tech",
    role: "Fullstack Developer",
    description: [
      "Contributed to Daniel Wellington's marketing success by developing an MVP for the company's proprietary influencer partnership management platform. Designed the platform to track and visualize partnerships with influencers globally, and to manage the shipping of watches for their campaigns.",
    ],
    startYear: 2018,
    technicalEnv:
      "JavaScript, Vue.js, AWS Cloudformation, AWS Lambda, AWS SQS, AWS SNS, PHP, Laravel",
  },
  {
    title: "Daniel Wellington - BEAM",
    role: "Fullstack Developer",
    description: [
      "Contributed to BEAM team at Daniel Wellington to modernize infrastructure to handle peak load demands during high-traffic shopping holidays such as Black Friday. Assisted switch to serverless microservice in AWS for scalability and reduced impact. Developed reliable and scalable solutions and provided guidance on quality mindset and agile processes.",
    ],
    startYear: 2017,
    technicalEnv:
      "JavaScript, Jest, AWS Cloudformation, Swagger, AWS Lambda, AWS SQS, AWS SNS, Microservices",
  },
  {
    title: "Daniel Wellington AB - Marketplace integrations",
    role: "Fullstack Developer",
    description: [
      "As part of my role at DW, I developed integrations between the e-commerce platforms, T-mall, JD, and Lazada, and their business system, Microsoft Dynamics NAV. The goal was to ensure accurate accounting and order management in DW's largest market, Asia.",
      "I created reliable and scalable solutions that could handle high-volume traffic, and designed the integrations to be easily adaptable for future order integrations."
    ],
    startYear: 2017,
    technicalEnv:
      "JavaScript, ESLint, AWS, AWS Cloudformation, AWS Lambda, AWS SQS, AWS IAM",
  },
  {
    title: "Foreseeti AB",
    role: "Frontend Developer",
    description: [
      "Contributed to redesign and development of Foreseeti's website with focus on new content and expertise in cyber threat modeling and risk management. Implemented headless CMS and developed email collection component for website demo of securiCAD software.",
    ],
    startYear: 2017,
    technicalEnv:
      "ES6, JavaScript, Node.js, React, Prismic, Babel, Webpack, Yarn, HTML, SCSS",
  },
  {
    title: "Flowbox AB",
    role: "Frontend Developer",
    description: [
      "Contributed to the growth and improvement of Flowbox, a visual e- commerce company specializing in user-generated content.",
      "Improved the performance and efficiency of their React app through a comprehensive rewrite, resulting in faster loading speed and reduced size. Helped connect companies in the retail industry to their followers on social media with seamless and straightforward solutions."
    ],
    startYear: 2016,
    technicalEnv:
      "JavaScript, ES6, Babel, Webpack, React, HTML5, Yarn, Python, CSS3, MySQL, Flask, AWS, PyCharm, SCSS",
  },
  {
    title: "Netlight Consulting AB",
    role: "Associate manager / Fullstack developer",
    description: [
      "Worked as an IT consultant at Netlight Consulting, a successful IT- consultant company that provides solutions to complex problems for companies where IT is a critical part of their business concept.",
      "Provided support and guidance to junior consultants throughout project assignments, helping to further their professional development. Conducted successful client interviews, demonstrating strong communication and interpersonal skills.",
    ],
    startYear: 2016,
    technicalEnv: "JavaScript, React, Vue, AWS serverless",
  },
  {
    title: "Miscalleneous AB",
    role: "Android Developer",
    description: [
      "Led the development of the Android app for Miscellaneous' teambuilding activity project. Designed and created the user interface, ensuring alignment with the partially developed iOS app. Ensured the successful delivery of a fully-functional, high-quality Android app from scratch.",
    ],
    startYear: 2015,
    technicalEnv: "Android, Java, SocketIO",
  },
  {
    title: "Lund university",
    role: "M.Sc in Computer engineering",
    description: ["Full academical records can be given if requested"],
    startYear: 2011,
    technicalEnv: "",
  },
];

export const postYearList = Array.from(
  new Set(CVPosts.map((post) => post.startYear))
);

type PostByYearMapping = {
  [year: number]: CVPost[];
};

export const postByYearMapping: PostByYearMapping = CVPosts.reduce(
  (mapping, post) => {
    if (mapping[post.startYear]) {
      mapping[post.startYear].push(post);
    } else {
      mapping[post.startYear] = [post];
    }
    return mapping;
  },
  {} as PostByYearMapping
);
