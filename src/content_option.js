import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Blank from "./portfolio-pages/blank";
import WIP from "./portfolio-pages/wip";

const logotext = "ANHAR";
const meta = {
    title: "Anhar Saif",
    description: "I'm Anhar Saif, SWE and Computer Science student at UC Berkeley. I'm interested in software engineering.",
};

const introdata = {
    title: "Hi, I'm Anhar",
    animated: {
        first: "Software Engineer",
        second: "Coding Enthusiast",
        third: "Sustainability Advocate",
        fourth: "University of California Berkeley",
    },
    description: "Obsessed with building software and learning new tech :) Explore some of my work here",
    your_img_url: "../.assets/images/anhar_headshot.jpg",
};

const worktimeline = [
    {
        icon: "https://media.licdn.com/dms/image/v2/C560BAQHaVJJdlizaQQ/company-logo_200_200/company-logo_200_200/0/1645224258925/weavegrid_logo?e=2147483647&v=beta&t=rzP8vvBMyJJDSmyTV57DM_lw27_PxHpE3Xbcwz0vgWg",
        jobtitle: "Full-Stack Engineer Intern",
        where: "Weavegrid",
        date: "Jun. 2024 – Aug. 2024",
        description: "...", 
    },
    {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrJsYkL976dybxpYrRr38pkcik0EXTtcGZg&s",
        jobtitle: "Software Engineer Intern",
        where: "Nextdoor",
        date: "May. 2023 – Aug. 2023",
        description: "", 
    },
    {
        icon: "https://www.liminalinsights.com/wp-content/uploads/2022/04/avatar-liminal-512.png",
        jobtitle: "Software Engineer Intern",
        where: "Feasible / Liminal Insights",
        date: "Jun. 2022 – Aug. 2022",
        description: "",
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
        name: "GO",
        icon: "cibGo",
    },
    {
        name: "C",
        icon: "cibC",
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
];

const frameworks = [
    {
        name: "React",
        icon: "cibReact",
    },
    {
        name: "GraphQL",
        icon: "cibGraphql",
    },
    {
        name: "Node",
        icon: "cibNodeJs",
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
];

const dataportfolio = [
    {
        img: "assets/portfolio-assets/secure_file_share.png",
        description: "Secure File Sharing", 
        content: WIP
    },
    {
        img: "assets/portfolio-assets/byow2.jpeg",
        description: "2D Exploration Game", 
        content: WIP
    },
    {
        img: "assets/portfolio-assets/weavegrid.webp",
        description: "Weavegrid Timeline",
        link: "https://app.weavegrid.com/login?next=/",
        content: Blank("https://app.weavegrid.com/login?next=/"),
    },
    {
        img: "assets/portfolio-assets/nextdoor.webp",
        description: "Nextdoor",
        link: "https://nextdoor.com/",
        content: Blank("https://nextdoor.com/"),
    },
    {
        img: "assets/portfolio-assets/liminal.webp",
        description: "Liminal Insights",
        content: Blank("https://www.liminalinsights.com/"),
    },
];

const contactConfig = {
    YOUR_EMAIL: "anhar07@berkeley.edu",
    YOUR_FONE: "(510) 365-6298",
    description: "Feel free to reach out to me about any inquiries!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofiles = {
    github: "https://github.com/anharlemonn",
    facebook: "",
    linkedin: "https://www.linkedin.com/in/anhar07/",
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