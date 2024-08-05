const logotext = "ANLON";
const meta = {
    title: "Anlon Zhu",
    description: "I’m Anlon Zhu, SWE and Computer Science student at Princeton University. I’m interested in machine learning, sustainability, and software engineering.",
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
    your_img_url: "../../assets/images/Zhu_headshot.png",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
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
        value: 90,
    },
    {
        name: "Java",
        icon: "cibJava",
        value: 80,
    },
    {
        name: "C",
        icon: "cibC",
        value: 80,
    },
    {
        name: "C++",
        icon: "cibCplusplus",
        value: 70,
    },
    {
        name: "Javascript",
        icon: "cibJavascript",
        value: 80,
    },
    {
        name: "TypeScript",
        icon: "cibTypescript",
        value: 70,
    },
    {
        name: "PHP",
        icon: "cibPhp",
        value: 70,
    },
    {
        name: "HTML",
        icon: "cibHtml5",
        value: 80,
    },
    {
        name: "CSS",
        icon: "cibCss3Shiled",
        value: 80,
    },
    {
        name: "GO",
        icon: "cibGo",
        value: 50,
    },
    {
        name: "Rust",
        icon: "cibRust",
        value: 20,
    },
    {
        name: "OCaml",
        icon: "cibOcaml",
        value: 40,
    },
    {
        name: "R",
        icon: "cibR",
        value: 70,
    }
];

const frameworks = [
    {
        name: "PostgreSQL",
        icon: "cibPostgresql",
        value: 80,
    },
    {
        name: "MySQL",
        icon: "cibMysql",
        value: 80,
    },
    {
        name: "Docker",
        icon: "cibDocker",
        value: 70,
    },
    {
        name: "AWS",
        icon: "cibAmazonAws",
        value: 70,
    },
    {
        name: "AzureDevOps",
        icon: "cibAzureDevops",
        value: 70,
    },
    {
        name: "GraphQL",
        icon: "cibGraphql",
        value: 70,
    },
    {
        name: "Redis",
        icon: "cibRedis",
        value: 70,
    },
    {
        name: "Node",
        icon: "cibNodeJs",
        value: 80,
    },
    {
        name: "Vue",
        icon: "cibVueJs",
        value: 70,
    },
    {
        name: "Symfony",
        icon: "cibSymfony",
        value: 70,
    },
    {
        name: "Django",
        icon: "cibDjango",
        value: 80,
    },
    {
        name: "Flask",
        icon: "cibFlask",
        value: 70,
    },
    {
        name: "PyTorch",
        icon: "cibPytorch",
        value: 70,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [
    {
        img: "fatezero.png",
        description: "FateZero UBW - Text2Video Research",
        link: "https://www.youtube.com/watch?v=W2CZ2xDIlGQ",
    },
    {
        img: "wave-clock.png",
        description: "Wave Clock",
        link: "https://wave-clock.vercel.app/"
    },
    {
        img: "workwell.png",
        description: "Workwell Database",
        link: "https://workwell.herokuapp.com/workwell/",
    },
    {
        img: "chess-events.webp",
        description: "Chess Marketing Campaigns",
        link: "https://www.chess.com/events"
    },
    {
        img: "energy_research.png",
        description: "UCSB - Renewable Energy Research",
        link: "https://www.dropbox.com/scl/fi/dq0ajcw8h4jfkhgihvtz7/Zhu_Energy_Research.pdf?rlkey=3uvhjaoi2b30lqf98ex23hz7x&dl=0"
    },
    {
        img: "weavegrid.webp",
        description: "Weavegrid Task Queue",
        link: "https://app.weavegrid.com/login?next=/"
    },
    {
        img: "rhythmix.jpeg",
        description: "Rhythmix Music Game",
        link: "https://github.com/anlon-zhu/rhythmix",
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
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    frameworks,
    services,
    introdata,
    contactConfig,
    socialprofiles,
    logotext,
};