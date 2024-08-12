import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import FateZeroUBW from "./portfolio-pages/fatezero_content";
import WaveClock from "./portfolio-pages/waveclock_content";
import Blank from "./portfolio-pages/blank";
import WIP from "./portfolio-pages/wip";
import Rhythmix from "./portfolio-pages/rhythmix";
import WorkWell from "./portfolio-pages/workwell";
import Ingreedient from "./portfolio-pages/ingreedient";

const logotext = "ANLON";
const meta = {
    title: "Anlon Zhu",
    description: "I'm Anlon Zhu, SWE and Computer Science student at Princeton University. I'm interested in machine learning, sustainability, and software engineering.",
};

const introdata = {
    title: "Hi, I'm Anlon",
    animated: {
        first: "Software Engineer",
        second: "ML/AI Researcher",
        third: "Sustainability Advocate",
        fourth: "Princeton Computer Science",
    },
    description: "Obsessed with building software and learning new tech :) Explore some of my work here",
    your_img_url: "../.assets/images/Zhu_headshot.png",
};

const worktimeline = [
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/2048px-Microsoft_icon.svg.png",
        jobtitle: "Software Engineer Intern",
        where: "Microsoft",
        date: "Jun. 2024 – Aug. 2024",
        description: "...", 
    },
    {
        icon: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/tphgt4bnih4amrow1xzt",
        jobtitle: "Full-Stack Engineer Intern",
        where: "Weavegrid",
        date: "Jun. 2023 – Aug. 2023",
        description: "Designed and developed TaskQ, a full-stack workflow management system for climate-tech startup. Resolved critical roadblock challenges in system maintenance, redirecting 100+ weekly alerts from Slack to TaskQ and creating actionable tasks via Jira API integrations.", 
    },
    {
        icon: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png",
        jobtitle: "Back-End Engineer Intern",
        where: "Chess.com",
        date: "Jan. 2023 – Apr. 2023",
        description: "Designed and developed a full-stack admin interface for marketing staff to deploy advertisements and group them as marketing campaigns. Expanded backend support for site-wide marketing banners to engage audiences, increasing clickthrough rate from 7% to 15%. Refactored recommendation system to reduce database queries by using Redis and a new API, supporting site’s scaling of 100M+ users.",
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/en/2/24/Bren_logo_216.png",
        jobtitle: "Researcher, Data Science",
        where: "Bren School of Environmental Science",
        date: "May 2021 – Sept. 2021",
        description: "Quantified the renewable energy potentials of 190 countries across the globe, focusing on wind and solar power, using GIS-based packages in R (Rgdal, Maptools) and data science techniques. Optimized allocation algorithm with batching/filtering, reducing runtime by 96%. Projected the levelized cost of electricity and burden of each renewable energy technology and presented findings in complete manuscript.",
    },
    {
        icon: "https://ecomotion.us/wp-content/uploads/2017/07/ecomotion-logo-digital-transparent-300x286.png",
        jobtitle: "Analyst Intern",
        where: "Ecomotion",
        date: "Jun. 2019 – Jun. 2020",
        description: "Programmed a data-parsing Python algorithm to analyze 20 years of energy and water data to inform the Murrieta Valley School District’s strategic energy plan, reaching 24,000+ students and teachers. Reduced project timeline by 50% via programmatic approach.",
    },
    {
        icon: "https://res.cloudinary.com/dktp1ybbx/image/upload/c_limit,h_170,w_170/f_auto,fl_lossy,q_auto/v1543270410/organization/prod/1132074/eXIi7AKtmf.png",
        jobtitle: "Education and Training Intern",
        where: "The Energy Coalition",
        date: "Jun. 2019 – Jun. 2020",
        description: "Wrote 30+ lessons on energy and sustainability for K-12 students.",
    },
];

// Languages: Python, Java, C, GO, Rust, OCaml, JavaScript, TypeScript, SQL, PHP, HTML, CSS, R, Solidity
// Notable Frameworks: React, Node, Vue, Symfony, Django, Flask, Jinja
// Other Notable Tech: Docker, AWS, LocalStack, GraphQL, MariaDB, PostgreSQL, MySQL, Redis, Postman, PyTorch, Pandas, NGP


const skills = [{
        name: "Python",
        icon: "cibPython",
    },
    {
        name: "Java",
        icon: "cibJava",
    },
    {
        name: "C",
        icon: "cibC",
    },
    {
        name: "C++",
        icon: "cibCplusplus",
    },
    {
        name: "GO",
        icon: "cibGo",
    },
    {
        name: "Rust",
        icon: "cibRust",
    },
    {
        name: "Javascript",
        icon: "cibJavascript",
    },
    {
        name: "TypeScript",
        icon: "cibTypescript",
    },
    {
        name: "PHP",
        icon: "cibPhp",
    },
    {
        name: "HTML",
        icon: "cibHtml5",
    },
    {
        name: "CSS",
        icon: "cibCss3Shiled",
    },
    {
        name: "OCaml",
        icon: "cibOcaml",
    },
    {
        name: "R",
        icon: "cibR",
    }
];

const frameworks = [
    {
        name: "React",
        icon: "cibReact",
    },
    {
        name: "Node",
        icon: "cibNodeJs",
    },
    {
        name: "Vue",
        icon: "cibVueJs",
    },
    {
        name: "Symfony",
        icon: "cibSymfony",
    },
    {
        name: "Django",
        icon: "cibDjango",
    },
    {
        name: "Flask",
        icon: "cibFlask",
    },
    {
        name: "PyTorch",
        icon: "cibPytorch",
    },
    {
        name: "PostgreSQL",
        icon: "cibPostgresql",
    },
    {
        name: "MySQL",
        icon: "cibMysql",
    },
    {
        name: "Docker",
        icon: "cibDocker",
    },
    {
        name: "AWS",
        icon: "cibAmazonAws",
    },
    {
        name: "AzureDevOps",
        icon: "cibAzureDevops",
    },
    {
        name: "GraphQL",
        icon: "cibGraphql",
    },
    {
        name: "Redis",
        icon: "cibRedis",
    },
    {
        name: "Postman",
        icon: "cibPostman",
    },
    {
        name: "Anaconda",
        icon: "cibAnaconda",
    },
    {
        name: "Blender",
        icon: "cibBlender",
    },
];

const dataportfolio = [
    {
        img: "assets/portfolio-assets/infinigen.png",
        description: "Thesis: Physics in 3D Computer Vision",
        content: WIP,
    },
    {
        img: "assets/portfolio-assets/fatezero.png",
        description: "Generative AI Research",
        link: "https://www.youtube.com/watch?v=W2CZ2xDIlGQ",
        content: FateZeroUBW,
    },
    {
        img: "assets/portfolio-assets/wave-clock.png",
        description: "Wave Clock",
        link: "https://wave-clock.vercel.app/",
        content: WaveClock,
    },
    {
        img: "assets/portfolio-assets/rhythmix.jpeg",
        description: "Rhythmix 2.0 Music Game",
        link: "https://github.com/anlon-zhu/rhythmix",
        content: Rhythmix,
    },
    {
        img: "assets/portfolio-assets/ingreedient.png",
        description: "Ingredient-based Recipe Search",
        content: Ingreedient,
    },

    {
        img: "assets/portfolio-assets/workwell.png",
        description: "Workwell Database",
        link: "https://workwell.herokuapp.com/workwell/",
        content: WorkWell,

    },
    {
        img: "assets/portfolio-assets/chess-events.webp",
        description: "Chess Marketing Campaigns",
        link: "https://www.chess.com/events",
        content: Blank("https://www.chess.com/events"),
    },
    {
        img: "assets/portfolio-assets/weavegrid.webp",
        description: "Weavegrid Task Queue",
        link: "https://app.weavegrid.com/login?next=/",
        content: Blank("https://app.weavegrid.com/login?next=/"),
    },

    {
        img: "assets/portfolio-assets/alexnet.png",
        description: "AlexNet CNN Similarity Cache",
        content: WIP,  
    },
    {
        img: "assets/portfolio-assets/energy_research.png",
        description: "UCSB - Renewable Energy Research",
        link: "https://www.dropbox.com/scl/fi/dq0ajcw8h4jfkhgihvtz7/Zhu_Energy_Research.pdf?rlkey=3uvhjaoi2b30lqf98ex23hz7x&dl=0",
        content: WIP,
    },
];

const contactConfig = {
    YOUR_EMAIL: "zhu.anlon@gmail.com",
    YOUR_FONE: "(949) 556-7596",
    description: "Feel free to reach out to me about any inquiries!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofiles = {
    github: "https://github.com/anlon-zhu",
    facebook: "https://www.facebook.com/profile.php?id=100015654518659",
    linkedin: "https://www.linkedin.com/in/anlon-zhu/",
};
export {
    meta,
    dataportfolio,
    worktimeline,
    skills,
    frameworks,
    introdata,
    contactConfig,
    socialprofiles,
    logotext,
};