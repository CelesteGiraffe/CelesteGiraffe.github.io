export const portfolioItems = [
  {
    title: "Cordellia",
    tags: [
      "Unity",
      "C#",
      "State Machine AI",
      "NavMesh",
      "Game Design",
      "Blender",
      "Mixamo",
      "Animation",
      "Player Movement",
    ],
    description:
      "Cordellia is a Unity-based vertical slice where players guide a mushroom girl, Cordellia, through an enchanted world filled with dangers and wonder. I developed this game solo as part of my Games Programming course at Dundee University, focusing on both game design and coding complex AI behaviours.",
    longDescription: `
      <p>Cordellia is a captivating game developed in Unity, where players control a small mushroom girl on an adventure through enchanted forests and mystical lands. This project was a significant challenge as it was my first deep dive into full-fledged 3D game development beyond Game Jams. The game features:</p>
    <ul>
      <li><strong>Complex AI-Driven Enemies:</strong> Using a state machine approach, each enemy (including the <em>GiantAI</em>) has a unique set of behaviours—patrolling, chasing, attacking, or retreating—creating dynamic combat encounters. The AI also uses Unity's NavMesh for navigation, making interactions more realistic and challenging for players.</li>
      <li><strong>Movement Controller:</strong> The player movement system is a hybrid inspired by games like <em>Dark Souls</em> and <em>Hollow Knight</em>. I focused heavily on precise camera control, responsive movement, and adding nuanced elements like dashing and aerial momentum, contributing to an engaging, fluid player experience. Features like dashing are implemented through coroutines for smooth, precise movement during combat.</li>
      <li><strong>Hand-Crafted Visuals:</strong> The game incorporates animations from Mixamo and models I created or adapted in Blender, leading to a visually immersive experience.</li>
    </ul>
    <p>This project gave me invaluable experience in working with AI systems, player movement mechanics, and integrating animations to create a cohesive game experience. It was a great learning experience in balancing the technical and creative challenges involved in making an adventure game.</p>
    <a href="https://youtu.be/yN1TZMd2CG8?si=yMvQWZNsgEUc5_-y" target="_blank" class="btn btn-primary">Watch Some Gameplay</a>
    `,
    image: "/assets/images/cordellia.png",
    link: "https://github.com/UniversityOfDundee-Computing/vertical-slice-of-a-game-CelesteGiraffe",
    date: "2024-04-30",
    genre: "game",
  },
  {
    title: "alaseason.com (My first website)",
    tags: ["Javascript", "HTML", "CSS", "Bootstrap"],
    description:
      "A business website developed for a cleaning startup, built from scratch during my first year.",
    longDescription: `
      <p>This was my first professional website project, developed for a local cleaning startup during my first year of college. The project highlights include:</p>
      <ul>
        <li>Responsive design using Bootstrap</li>
        <li>Client interaction and feedback integration</li>
        <li>Basic SEO implementation</li>
        <li>Hosted using Apache servers</li>
      </ul>
      <p>The site has since been archived, but you can still view it via the Wayback Machine.</p>
    `,
    image: "/assets/images/AlaSeason.png",
    link: "https://web.archive.org/web/20230124034233/https://www.alaseasonllc.com/",
    date: "2020-08-15",
    genre: "website",
  },
  {
    title: "Pedro's Pizza Database Backend",
    tags: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "TailwindCSS",
      "Database Management",
      "CRUD Operations",
      "Web Development",
      "Backend Development",
    ],
    description:
      "Pedro's Pizza is a backend system designed to manage employee data, order tracking, business metrics, and inventory for a pizza restaurant. I developed this system to refine my skills in database management, backend integration, and collaborative planning.",
    longDescription: `
            <p>Pedro's Pizza is a comprehensive backend system built to manage the operations of a pizza restaurant, handling both employee management and customer orders. This project strengthened my skills in backend web development, database design, and collaborative team planning. Key features include:</p>       <ul>         <li><strong>PHP-Based Backend:</strong> The backend was built using PHP, ensuring a dynamic, server-side interaction with the database. CRUD operations included managing orders with tracking, employee car usage, employee roster management, business metrics, and inventory management to keep stores functional.</li>         <li><strong>MySQL Database Integration:</strong> I designed and implemented a MySQL database schema to handle all data storage needs, including joined tables for analyzing specific location profits and maintaining data integrity. We created pre-run queries for frequently accessed data and joined tables for efficient lookups.</li>         <li><strong>User-Friendly Interface:</strong> The frontend was designed using Bootstrap and TailwindCSS, creating a responsive, intuitive interface that allowed managers to interact easily with the backend system. This ensured that all data could be accessed and manipulated without a steep learning curve.</li>         <li><strong>Security and Optimization:</strong> Data security was a critical focus, with measures taken to prevent SQL injection and other vulnerabilities. I implemented prepared statements for SQL queries and optimized common data retrievals to improve performance and safety.</li>       </ul>       <p>The biggest takeaway from this project was learning the importance of planning and team alignment in development projects. Effective collaboration required more upfront planning than initially expected, as getting everyone on the same page proved vital for success. This project also honed my skills in database architecture, security, and backend integration.</p>       <a href="https://github.com/CelesteGiraffe/DatabaseSystems" target="_blank" class="btn btn-primary">View the Repository</a> 
    `,
    image: "/assets/images/PedrosPizza.png",
    link: "https://github.com/CelesteGiraffe/DatabaseSystems",
    date: "2023-10-19",
    genre: "website",
  },
  {
    title: "Manchester Baby Emulator",
    tags: [
      "C++",
      "Assembly",
      "Emulation",
      "Compiler Design",
      "Lexical Analysis",
      "Parsing",
      "File I/O",
    ],
    description:
      "A C++ and Assembly-based emulator replicating the functionality of the Manchester Baby computer, showcasing the fundamentals of compiler design and early computer emulation.",
    longDescription: `
      <p>This emulator recreates the functionality of the Manchester Baby, the world's first stored-program computer, focusing on the process of assembly language interpretation and execution. This project includes the implementation of a lexer, parser, mnemonic handler, and file writer to fully simulate machine code execution. Key features include:</p>
      <ul>
        <li><strong>Lexical Analysis and Parsing:</strong> A lexer and parser were developed to break down assembly language into tokens and construct a syntax tree, forming the foundation of the emulation process.</li>
        <li><strong>Mnemonic Handling:</strong> Mnemonics for commands like 'JMP', 'LDN', and 'STO' were used to translate assembly instructions into executable machine operations, simulating early computer behavior.</li>
        <li><strong>File Writing and Code Generation:</strong> The emulator outputs the translated machine code to an output file, formatted for easy interpretation, showcasing basic file I/O and string manipulation.</li>
      </ul>
      <p>This project deepened my understanding of compiler design principles, including lexical analysis, parsing, and emulation, while also reinforcing key concepts in C++ programming.</p>
      <a href="https://github.com/CelesteGiraffe/ManchesterBaby" target="_blank" class="btn btn-primary">View the Repository</a>
    `,
    image: "/assets/images/ManBaby.jpg",
    link: "https://github.com/CelesteGiraffe/ManchesterBaby",
    date: "2023-11-30",
    genre: "Discovery",
  },
  {
    title: "Cellular Automaton",
    tags: ["C++", "Console", "Docker"],
    description:
      "A simulation of cellular automata, demonstrating mathematical patterns and growth.",
    longDescription: `
      <p>This cellular automaton simulation, developed in C++, visualises how simple rules can lead to complex behaviour. Features:</p>
      <ul>
        <li>Console-based interface</li>
        <li>Docker containerisation for easy deployment</li>
        <li>Customizable rules for various cellular automaton models</li>
      </ul>
      <p>Through this project, I explored the concepts of emergence and complexity in systems.</p>
    `,
    image: "/assets/images/CellularAutomata.png",
    link: "https://github.com/CelesteGiraffe/Cellular-Automaton",
    date: "2023-11-04",
    genre: "Discovery",
  },
  {
    title: "Rust Sandbox",
    tags: ["Rust"],
    description:
      "An experimental sandbox to dive deep into the Rust programming language.",
    longDescription: `
      <p>This sandbox project serves as a playground for exploring Rust. It includes experiments with:</p>
      <ul>
        <li>Memory safety and borrowing rules</li>
        <li>Concurrency and parallel programming</li>
        <li>Efficient data structures</li>
      </ul>
      <p>This project solidified my understanding of Rust’s key features, particularly memory management.</p>
    `,
    image: "/assets/images/RustSandbox.png",
    link: "#",
    date: "2023-10-24",
    genre: "Discovery",
  },
  {
    title: "Tierlist Maker",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      'A personal tool to create and share tierlists with friends, inspired by Discord chats. <a href="/Tierlist/pre-loader.html" target="_blank" class="btn btn-primary">Try It Out</a>',
    longDescription: `
      <p>Frustrated by other tierlist makers not supporting the images I wanted to use, I built my own using HTML, CSS, and JavaScript. Features include:</p>
      <ul>
        <li>Custom image uploads</li>
        <li>Shareable links for Discord integration</li>
        <li>User-friendly drag-and-drop interface</li>
      </ul>
      <p>This tool allows for easy creation and sharing of custom tierlists among friends.</p>
      <a href="/Tierlist/pre-loader.html" target="_blank" class="btn btn-primary">Try It Out</a>
    `,
    image: "/assets/images/TierListMaker.png",
    link: "https://github.com/CelesteGiraffe/Teirlist",
    date: "2023-10-24",
    genre: "tool",
  },
  {
    title: "Version Control System",
    tags: ["Linux Shell", "Bash Scripting", "Version Control"],
    description:
      "A custom version control system developed using Linux shell scripting, demonstrating internal workings of version control mechanisms.",
    longDescription: `
      <p>This project is a custom version control system built using Linux shell scripting, developed as part of a school assignment. It was a crash course in understanding the Linux shell and version control. Key features and concepts explored include:</p>
      <ul>
        <li><strong>Repository Management:</strong> Creation, selection, and tracking of repositories, including staging and editing areas to manage changes.</li>
        <li><strong>Commit and Version Tracking:</strong> Implemented commit functionality to track changes over time, storing logs and tracking versions of files.</li>
        <li><strong>Diffing and Merging:</strong> Added the ability to check differences between file versions and maintain logs of changes, giving insight into file modifications.</li>
        <li><strong>Command-Line Interface:</strong> Developed a full command-line interface that allows users to interact with the version control system, edit files, stage changes, and manage commits.</li>
      </ul>
      <p>This project allowed me to understand the foundational mechanics of version control systems and Linux shell scripting, including the importance of careful planning and organisation for managing multiple versions of code efficiently.</p>
    `,
    image: "/assets/images/UnixShellVCS.png",
    link: "https://github.com/CelesteGiraffe/UnixShellVCS",
    date: "2023-10-13",
    genre: "tool",
  },
  {
    title: "Network IRC Chat and Chatbot",
    tags: ["Python", "IRC", "Sockets", "Networking"],
    description:
      "An IRC chatroom and chatbot built with Python, following IRC protocol.",
    longDescription: `
      <p>This project demonstrates how to programmatically create a IRC server and a IRC chatbot using Python sockets. It includes the following features:</p>
      <ul>
        <li>Real-time interaction with users via IRC protocol</li>
        <li>Automated responses, jokes, and commands</li>
        <li>Socket-based communication using IRC protocol for networking practice</li>
      </ul>
      <p>This project helped develop my skills in socket programming and network protocol adherence.</p>
    `,
    image: "/assets/images/HexChat.png",
    link: "https://github.com/Achiengmnoma/NetworksIV",
    date: "2023-10-13",
    genre: "tool",
  },
  {
    title: "Movie Rating Project 2.0",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Mql",
      "SCSS",
      "Node.js",
      "MongoDB",
      "Dotenv",
      "EJS",
      "Express",
      "Oauth 2",
      "Regex",
      "Jquery",
      "omdbapi",
      "nytimesapi",
    ],
    description:
      "A movie rating system revamped using Node.js and MongoDB for a modern tech stack.",
    longDescription: `
      <p>This project is a complete rewrite of an old movie rating system. It uses a modern tech stack, including Node.js and MongoDB. Key features include:</p>
      <ul>
        <li>User authentication using OAuth 2</li>
        <li>Movie information fetched from OMDB API and New York Times API</li>
        <li>Responsive design using SCSS and Bootstrap</li>
        <li>Data storage in MongoDB with CRUD operations</li>
      </ul>
      <p>This project improved my skills in full-stack development using the MEVN stack (MongoDB, Express, Vue.js, Node.js).</p>
    `,
    image: "/assets/images/MovieRating.png",
    link: "https://github.com/CelesteGiraffe/Movie-Rating-Personal-Project-v2",
    date: "2022-04-04",
    genre: "website",
  },
  {
    title: "Inventory Java OOP Project",
    tags: ["Java", "JavaFX", "OOP", "Netbeans"],
    description:
      "An inventory management system built to demonstrate object-oriented principles in Java.",
    longDescription: `
      <p>This Java project was developed to manage inventory, offering features like:</p>
      <ul>
        <li>CRUD operations for inventory items</li>
        <li>Object-oriented design principles applied using JavaFX</li>
        <li>Local database integration for item storage</li>
      </ul>
      <p>This project deepened my understanding of Java’s OOP principles and user interface design using JavaFX.</p>
    `,
    image: "/assets/images/JavaInv.png",
    link: "https://github.com/CelesteGiraffe/InventoryJavaOOP",
    date: "2021-11-28",
    genre: "tool",
  },
  {
    title: "Sorting Algorithm Visualizer",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    description:
      'A tool to visualise and understand sorting algorithms through interactive visuals. <a href="/Tierlist/pre-loader.html" target="_blank" class="btn btn-primary">Try It Out</a>',
    longDescription: `
      <p>This tool provides an interactive way to visualise sorting algorithms. Features include:</p>
      <ul>
        <li>Visualisation of various sorting algorithms like QuickSort, MergeSort, etc.</li>
        <li>Comparison of algorithm time complexity</li>
        <li>Built using JavaScript and TypeScript for dynamic visualisation</li>
      </ul>
      <p>This project helped me understand sorting algorithms and their visual representation.</p>
      <a href="/SortingAlgoVisualizer/Sort.html" target="_blank" class="btn btn-primary">Try It Out</a>
    `,
    image: "/assets/images/Sort.png",
    link: "https://github.com/CelesteGiraffe/Sorting-Algorithm-Visualizer",
    date: "2021-11-25",
    genre: "tool",
  },
  {
    title: "Manic Movers Game",
    tags: ["C#", "Unity", "GameJam", "Blender"],
    description:
      "A fast-paced puzzle game where movers throw furniture, and you must use rewind mechanics to dodge.",
    longDescription: `
      <p>Developed for a Game Jam with the theme 'rewind', Manic Movers challenges players to solve puzzles while dodging furniture. Key features include:</p>
      <ul>
        <li>Time-rewind mechanics to move through levels</li>
        <li>Hand-crafted levels with dynamic obstacles</li>
        <li>Developed using Unity and C# with Blender assets</li>
      </ul>
      <p>This project helped me hone my skills in game development, particularly in implementing time-based mechanics.</p>
    `,
    image: "/assets/images/ManicMovers.png",
    link: "#",
    date: "2021-05-20",
    genre: "game",
  },
  {
    title: "Minesweeper Grid Game (Sketchsweepr)",
    tags: ["C#", ".net"],
    description:
      "A hand-drawn style Minesweeper game developed using C# and .NET.",
    longDescription: `
      <p>Sketchsweepr is a unique take on the classic Minesweeper game, designed with a hand-drawn aesthetic. Features include:</p>
      <ul>
        <li>Custom grid-based system for game board display</li>
        <li>Hand-drawn style UI to give a fresh look to Minesweeper</li>
        <li>Developed using C# and .NET framework</li>
      </ul>
      <p>This project allowed me to experiment with UI/UX design while recreating a classic game.</p>
    `,
    image: "/assets/images/SketchSweeper.png",
    link: "https://github.com/nataliiaash/Minesweeper2/tree/master",
    date: "2024-02-08",
    genre: "game",
  },
  {
    title: "Little Shop on Hallow Hill (GameJam version)",
    tags: [
      "C#",
      "Unity",
      "Game Design",
      "NPC Interaction",
      "Inventory Management",
    ],
    description:
      "Little Shop on Hallow Hill is a GameJam project where you manage a spooky shop, selling items and defending the Halloween town from human threats. This project, though incomplete, showcases my work on NPC AI and interaction systems as well as inventory mechanics.",
    longDescription: `
      <p>Little Shop on Hallow Hill was a GameJam submission that explored the concept of running a spooky Halloween-themed shop while defending the town from invading humans. <strong>Due to time constraints, this project remains incomplete, and some features may not be fully functional.</strong> Despite this, we were able to achieve several significant milestones:</p>
      <ul>
        <li><strong>Shop Management:</strong> Players could sell various items, with an inventory system to keep track of available goods. The <em>OpenInv.cs</em> script managed the player's inventory effectively, allowing for a range of items to be offered for sale.</li>
        <li><strong>NPC Interaction and AI:</strong> NPCs were designed with varied behaviours—customers would enter the shop, interact with items, and either buy or gossip about what they found. The <em>Customer.cs</em> and <em>Gossiper.cs</em> files helped implement this depth of interaction, adding character to the town.</li>
        <li><strong>Dynamic Environment:</strong> I worked on <em>PlayerManager.cs</em> and <em>Movement.cs</em>, focusing on character movement and the interaction with the environment, contributing to an immersive shopkeeping experience.</li>
      </ul>
      <p>Although this project wasn't fully realized due to our other commitments, it was a great exercise in rapid prototyping and teamwork under tight deadlines. It allowed us to explore NPC AI, player interaction systems, and inventory management—all while bringing a whimsical Halloween town to life.</p>
      <a href="https://pilipaladev.itch.io/the-little-shop-on-hallow-hill-incomplete" target="_blank" class="btn btn-primary">Play my submission</a>
    `,
    image: "/assets/images/TLSoHH.png",
    link: "https://github.com/CelesteGiraffe/Shopkeep",
    date: "2024-09-07",
    genre: "game",
  },
  {
    title: "TechSavvy",
    tags: [
      "Python",
      "Flask",
      "MySQL",
      "OAuth2",
      "Database Architecture",
      "Security",
      "Docker",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    description:
      "A social media platform for women in STEM where I led the database architecture and security implementation.",
    longDescription: `
      <p>TechSavvy is my university capstone project—a social media platform designed to support and connect women in STEM fields. In this project, I took the lead on designing and implementing the database architecture and OAuth2 authentication system. Key contributions and features include:</p>
      <ul>
        <li><strong>Database Architecture:</strong> Architected and developed a comprehensive database schema covering users, authentication, communities, posts, comments, resources, job boards, and messaging.</li>
        <li><strong>OAuth2 Integration:</strong> Implemented a secure OAuth2 authentication system, allowing users to sign in with external providers like Google, enhancing security and user convenience.</li>
        <li><strong>Data Access Layer:</strong> Created Data Access Objects (DAOs) and a service layer to ensure a clean separation of concerns and secure database interactions.</li>
        <li><strong>Security Best Practices:</strong> Focused on safeguarding the application against vulnerabilities such as SQL injection by using prepared statements and adhering to security best practices.</li>
        <li><strong>Docker Utilization:</strong> Used Docker to containerize the MySQL database, ensuring consistency across development environments and simplifying deployment.</li>
        <li><strong>Collaboration & Methodology:</strong> Worked within a team using Feature-Driven Development, emphasizing accessibility and inclusivity in our design approach.</li>
      </ul>
      <p>This project allowed me to apply and enhance my skills in database architecture, system design, and security while contributing to a platform that promotes diversity and support within the tech community.</p>
    `,
    image: "/assets/images/TechSavvy.png",
    link: "https://github.com/maddisonstockton/TechSavvy",
    date: "2024-10-04",
    genre: "tool",
  },
  {
    title: "Movie Rating Project 1.0",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySql",
      "Linux",
      "Apache2",
      "Jquery",
      "Bootstrap",
    ],
    description:
      "A movie rating system developed in the LAMP stack, using PHP and MySQL.",
    longDescription: `
      <p>This is the first version of a movie rating system built using the LAMP stack (Linux, Apache, MySQL, PHP). Features:</p>
      <ul>
        <li>User authentication system</li>
        <li>Dynamic movie rating and review system</li>
        <li>Responsive design using Bootstrap</li>
      </ul>
      <p>This project was my first experience in full-stack development and server-side programming.</p>
    `,
    image: "/assets/images/MovieRating.png",
    link: "https://github.com/CelesteGiraffe/Personal-Project-v1",
    date: "2021-09-15",
    genre: "Discovery",
  },
  {
    title: "Personal Portfolio 1.0",
    tags: ["HTML", "PHP", "CSS", "JavaScript", "Bootstrap"],
    description:
      "The first version of my personal portfolio, showcasing my early projects.",
    longDescription: `
      <p>This is the original version of my personal portfolio website, built using HTML, PHP, CSS, and JavaScript. Key features:</p>
      <ul>
        <li>Project showcase with links to GitHub repositories</li>
        <li>Responsive design using Bootstrap</li>
        <li>Personal branding and custom design</li>
      </ul>
      <p>This project helped establish my online presence as a developer and showcased my early projects.</p>
    `,
    image: "/assets/images/Portfolio.png",
    link: "https://github.com/CelesteGiraffe/Personal-Portfolio",
    date: "2022-03-20",
    genre: "Discovery",
  },
  {
    title: "Personal Portfolio 2.0 (this website)",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "The second version of my portfolio website, currently live and showcasing my projects.",
    longDescription: `
      <p>This is the latest version of my personal portfolio, built using HTML, CSS, JavaScript, and Bootstrap. It features:</p>
      <ul>
        <li>Dynamic project cards with detailed descriptions</li>
        <li>Mobile-responsive layout for accessibility</li>
        <li>Enhanced UI/UX design using Bootstrap framework</li>
      </ul>
      <p>This website showcases my professional projects and acts as a central hub for my online presence as a software developer.</p>
    `,
    image: "/assets/images/Portfolio2.png",
    link: "#",
    date: "2024-09-20",
    genre: "website",
  },
];
