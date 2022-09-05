type CVPost = {
  title: string;
  role: string;
  description: string[];
  startYear: number;
  technicalEnv: string;
};

const CVPosts: CVPost[] = [
  {
    title: "MoliStreaming AB",
    role: "IOS Developer / Web developer",
    description: [
      "Moli is a social media platform that aims to take live streaming to the next level by introducing live video, mobile screen sharing, and audio to an unlimited amount of viewers. In a world where a smartphone is a personal canvas. Moli takes a seemingly lonely activity done on your phone to a social activity shared with family, friends, and your extended community.",
      "Developed the mobile app and web frontend. Migrated the app from react- native to swiftUI after introduction of more complex use cases. Took the app to 150k total downloads and 60k monthly active users",
    ],
    startYear: 2021,
    technicalEnv:
      "Swift, SwiftUI, SPM, JavaScript, React-native, NextJS, OpenAPI",
  },
  {
    title: "IKEA AB",
    role: "Frontend developer",
    description: [
      "IKEA is a Swedish retail company specialising in affordable furniture.",
    ],
    startYear: 2020,
    technicalEnv:
      "JavaScript, React, React-Storybook, SCSS, NPM, Conventional commits",
  },
  {
    title: "Boblberg A/S",
    role: "Technical advisor",
    description: [
      "Boblberg is a company that aims to help people connect to reduce loneliness and improve mental health. They have created a digital platform to assist people in finding communities for their interests. Boblberg works closely with the municipalities of Denmark and the red cross. ",
    ],
    startYear: 2020,
    technicalEnv:
      "SEO, Accessibility, WCAG, JavaScript, React, React-Native, ESLint, OpenAPI Specification",
  },
  {
    title: "A.P. Møller-Mærsk A/S",
    role: "Frontend Developer",
    description: [
      "Maersk is a Danish business conglomerate with activities in the transport, logistics, and energy sectors. Maersk has been the world's largest container ship and supply vessel operator since 1996. StarConnect is one of Maersk's most ambitious digitalization projects to lower the fuel costs of their entire fleet.",
    ],
    startYear: 2020,
    technicalEnv:
      "TypeScript, React, React storybook, NPM, Azure devops, Jest, Git, React, Styled-Components",
  },
  {
    title: "Daniel Wellington AB - Logistics and supply chain",
    role: "Fullstack Developer",
    description: [
      "Daniel Wellington (DW) is well-known for its minimalistic, elegant, and timeless watch design. Its social media presence has taken the world by storm and created a world-known fashion brand since 2011.",
      "As part of their work within counterfeit prevention, they have a system to trace how watches move from the factory to different warehouses and finally to their end customers. With the help of this system, they can track potential thefts and the authenticity of watches.",
    ],
    startYear: 2019,
    technicalEnv:
      "React, React-native, AWS Cognito, AWS Lambda, Swagger, AWS SNS, AWS SES, AWS SQS, Jest, ESLint",
  },
  {
    title: "Daniel Wellington AB - Wengy B2B",
    role: "Fullstack Developer",
    description: [
      "Being a global brand, DW works with many distributors worldwide. To simplify business to the business flow, they have a built platform, Wengy, for automating flows relating to distributors.",
    ],
    startYear: 2018,
    technicalEnv:
      "JavaScript, React, Angular 4, Jest, ESLint, AWS Cognito, AWS Cloudformation, AWS Lambda, AWS SNS, AWS SES, AWS SQS, Swagger",
  },
  {
    title: "Daniel Wellington AB - Marketing-tech",
    role: "Fullstack Developer",
    description: [
      "One of the puzzle pieces to Daniel Wellington's success is its strong marketing strategy, primarily on social platforms through influencers. Today, they collaborate with influencers from all over the world. Daniel Wellington has a department of so-called market coordinators whose job is to coordinate and follow up on all collaborations with influencers. Daniel Wellington has a proprietary platform to manage all the partnerships.",
    ],
    startYear: 2018,
    technicalEnv:
      "JavaScript, Vue.js, AWS Cloudformation, AWS Lambda, AWS SQS, AWS SNS, PHP, Laravel",
  },
  {
    title: "Daniel Wellington - BEAM",
    role: "Fullstack Developer",
    description: [
      "As a company, DW had a fast global expansion. Therefore, they are modernizing their underlying infrastructure to handle the load required on their systems. Using a serverless microservice solution in AWS combined with a modern frontend solution, they ensured a scalable solution to their demands. The purpose of this change was to reduce the impact between different systems and to have a simple way of replicating information to different e-commerce platforms, logistics partners, and other internal systems. The BEAM team, Business Entities As Micro-services, was formed to realize this change.",
    ],
    startYear: 2017,
    technicalEnv:
      "JavaScript, Jest, AWS Cloudformation, Swagger, AWS Lambda, AWS SQS, AWS SNS, Microservices",
  },
  {
    title: "Daniel Wellington AB - Marketplace integrations",
    role: "Fullstack Developer",
    description: [
      "Daniel Wellington sells watches on many e-commerce platforms as a global brand. One of their biggest markets is Asia, where they sell watches and accessories on the T-mall, JD, and Lazada e-commerce platforms. To manage their accounting correctly, they wanted to synchronize orders on these platforms and their Microsoft Dynamics NAV business system.",
    ],
    startYear: 2017,
    technicalEnv:
      "JavaScript, ESLint, AWS, AWS Cloudformation, AWS Lambda, AWS SQS, AWS IAM",
  },
  {
    title: "Foreseeti AB",
    role: "Frontend Developer",
    description: [
      "Foreseeti is a specialist in cyber threat modeling and risk management. Using their securiCAD tools, they can model architecture and quickly find system security flaws.",
    ],
    startYear: 2017,
    technicalEnv:
      "ES6, JavaScript, Node.js, React, Prismic, Babel, Webpack, Yarn, HTML, SCSS",
  },
  {
    title: "Flowbox AB",
    role: "Frontend Developer",
    description: [
      "Flowbox is a visual e-commerce company that specializes in user-generated content. They help connect companies, primarily in retail, to their followers on social media simply and seamlessly. Flowbox currently has over 70 customers in Europe.",
    ],
    startYear: 2016,
    technicalEnv:
      "JavaScript, ES6, Babel, Webpack, React, HTML5, Yarn, Python, CSS3, MySQL, Flask, AWS, PyCharm, SCSS",
  },
  {
    title: "Miscalleneous AB",
    role: "Android Developer",
    description: [
      "Miscellaneous is a company located in Malmö which offers a team building activity involving creating a dance choreography with other people. A professional dance artist creates the choreography with 30 years of experience.",
    ],
    startYear: 2015,
    technicalEnv: "Android, Java, SocketIO",
  },
  {
    title: "Netlight Consulting AB",
    role: "Fullstack Developer",
    description: [
      "Netlight Consulting is a successful and independent IT-consultant company that offers solutions to complex problems to companies where IT is a critical part of their business concept. High competence combined with creativity and business sense has made us one of the market's sharpest suppliers.",
      "Worked as an IT consultant. Helped with coaching other consultants through assignments and held interviews.",
    ],
    startYear: 2016,
    technicalEnv: "JavaScript, React, Vue, AWS serverless",
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
