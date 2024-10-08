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
    languagesUsed: {
      "C#": 45,
      Unity: 65,
    },
    effort: 7,
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
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap", "Web Development"],
    description:
      "A business website developed for a cleaning startup, built from scratch during my first year.",
    languagesUsed: {
      HTML: 40,
      CSS: 10,
      JavaScript: 20,
      Bootstrap: 30,
    },
    effort: 2,
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
      "Database Design & Management",
      "CRUD",
      "Web Development",
      "Backend Development",
    ],
    description:
      "Pedro's Pizza is a backend system designed to manage employee data, order tracking, business metrics, and inventory for a pizza restaurant. I developed this system to refine my skills in database management, backend integration, and collaborative planning.",
    languagesUsed: {
      PHP: 10,
      MySQL: 65,
      Bootstrap: 15,
      TailwindCSS: 10,
    },
    effort: 8,
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
    languagesUsed: {
      "C++": 55,
      Assembly: 45,
    },
    effort: 8,
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
    tags: ["C++", "Console", "Docker", "Emergent Systems", "Complexity Theory"],
    description:
      "A C++ simulation of cellular automata that visualises the emergence of complex behaviours from simple rules, featuring Docker for easy deployment.",
    languagesUsed: {
      "C++": 85,
      console: 5,
      Docker: 10,
    },
    effort: 4,
    longDescription: `
      <p>This project is a C++-based cellular automaton simulation, designed to demonstrate how simple rules can lead to surprisingly complex behaviour. This concept is central to understanding emergence and how intricate systems can evolve from straightforward beginnings. Key features include:</p>
      <ul>
        <li><strong>Console-Based Interface:</strong> The simulation runs in a console environment, allowing users to see the changes in each generation of the automaton in real-time.</li>
        <li><strong>Customizable Rule Sets:</strong> Users can explore different automaton models by adjusting rule sets, providing an interactive way to understand growth patterns, such as Conway's Game of Life and other classic rule variations.</li>
        <li><strong>Docker Containerisation:</strong> Utilising Docker for easy setup and deployment ensures a consistent environment, making it simple to share and run the simulation across different systems.</li>
      </ul>
      <p>Working on this project allowed me to gain deeper insights into complexity theory and the concept of emergent properties in dynamic systems, as well as enhancing my skills in Docker and C++ programming.</p>
    `,
    image: "/assets/images/CellularAutomata.png",
    link: "https://github.com/CelesteGiraffe/Cellular-Automaton",
    date: "2023-11-04",
    genre: "Discovery",
  },
  {
    title: "Rust Sandbox",
    tags: ["Rust", "Memory Management", "Concurrency", "Learning"],
    description:
      "A personal experimental sandbox for exploring Rust, focusing on learning its syntax, memory management, and unique features.",
    languagesUsed: {
      Rust: 100,
    },
    effort: 3,
    longDescription: `
      <p>This Rust Sandbox project was created as a learning environment to explore the Rust programming language. Inspired by <em>The Rust Programming Language</em> book by Steve Klabnik and Carol Nichols, I used this project as an opportunity to gain hands-on experience with Rust's syntax, concepts, and unique features. Key experiments include:</p>
      <ul>
        <li><strong>Memory Safety and Borrowing Rules:</strong> Practicing Rust's ownership model, learning how borrowing and references ensure memory safety without needing a garbage collector.</li>
        <li><strong>Concurrency and Parallel Programming:</strong> Testing Rust's concurrency model to understand how it guarantees thread safety, even with complex parallel tasks.</li>
        <li><strong>Data Structures:</strong> Experimenting with Rust's standard data structures to understand their efficiency and how they leverage Rust's memory safety guarantees.</li>
      </ul>
      <p>This sandbox is an ongoing project, primarily aimed at gaining familiarity with Rust's features and experimenting with small code snippets. Though not a complete application, it demonstrates my curiosity and willingness to learn new languages by diving into their fundamental concepts.</p>
    `,
    image: "/assets/images/RustSandbox.png",
    link: "#",
    date: "2023-10-24",
    genre: "Discovery",
  },
  {
    title: "Tierlist Maker",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "Bootstrap",
      "Web Development",
    ],
    description:
      'A personal tierlist maker built to streamline creating and sharing tierlists using image URLs without the need for reuploading images manually. <a href="/Tierlist/pre-loader.html" target="_blank" class="btn btn-primary">Try It Out</a>',
    languagesUsed: {
      HTML: 35,
      CSS: 10,
      JavaScript: 35,
      JQuery: 10,
      Bootstrap: 10,
    },
    effort: 4,
    longDescription: `
      <p>Frustrated by the cumbersome process of downloading and re-uploading images with other tierlist makers, I built my own solution using HTML, CSS, JavaScript, and JQuery. This tool allows users to create custom tierlists simply by inputting the image URL, eliminating the unnecessary extra steps. Key features include:</p>
      <ul>
        <li>URL-Based Image Loading: Add images directly from the web using URLs, avoiding the hassle of downloading and uploading</li>
        <li>Customizable Tiers: Easily add or rename tiers to suit your preferences, with a drag-and-drop interface for image sorting</li>
        <li>Shareable Links: The tierlists can be easily shared, particularly in Discord, allowing for collaborative and fun interactions</li>
      </ul>
      <p>This project was inspired by community interactions and was designed with simplicity and user convenience in mind, especially for quick and easy tierlist creation.</p>
      <a href="/Tierlist/pre-loader.html" target="_blank" class="btn btn-primary">Try It Out</a>
    `,
    image: "/assets/images/TierListMaker.png",
    link: "https://github.com/CelesteGiraffe/Tierlist",
    date: "2023-10-24",
    genre: "tool",
  },
  {
    title: "Version Control System",
    tags: ["Linux Shell", "Bash Scripting", "Version Control"],
    description:
      "A custom version control system developed using Linux shell scripting, demonstrating internal workings of version control mechanisms.",
    languagesUsed: {
      Bash: 100,
    },
    effort: 5,
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
    languagesUsed: {
      Python: 100,
    },
    effort: 8,
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
      "SCSS",
      "Node.js",
      "MongoDB",
      "Dotenv",
      "EJS",
      "Express",
      "OAuth2",
      "Regex",
      "jQuery",
      "OMDB API",
      "New York Times API",
      "Full-Stack Development",
    ],
    description:
      "A full-stack rewrite of the original Movie Rating System, upgrading from a LAMP stack to a modern tech stack using Node.js and MongoDB.",
    languagesUsed: {
      HTML: 30,
      CSS: 10,
      JavaScript: 15,
      SCSS: 5,
      Node: 20,
      JQuery: 10,
      EJS: 10,
    },
    effort: 7,
    longDescription: `
      <p>Movie Rating Project 2.0 is a complete overhaul of my first movie rating project. Originally built with the LAMP stack, this new version embraces more recent technologies to enhance the overall experience. Key improvements and features include:</p>
      <ul>
        <li><strong>Modern Tech Stack:</strong> Migrated the backend from PHP and MySQL to Node.js with MongoDB, adopting Express.js for server-side development, providing improved scalability and development efficiency.</li>
        <li><strong>User Authentication with OAuth 2:</strong> Implemented OAuth 2 for user authentication, offering a secure and streamlined login process using third-party services like Google.</li>
        <li><strong>Rich Movie Data:</strong> Integrated external APIs (OMDB API and New York Times API) to fetch rich movie details and reviews, enhancing the content available for users.</li>
        <li><strong>Improved Frontend with SCSS and Bootstrap:</strong> Updated the frontend design with SCSS for modular styles and Bootstrap for responsive design, providing a polished and user-friendly interface.</li>
        <li><strong>Full-Stack Development with MEVN:</strong> Leveraged MongoDB, Express, Vue.js, and Node.js (MEVN stack) to modernize the application, allowing more dynamic, efficient data handling and interactivity.</li>
      </ul>
      <p>This project deepened my understanding of modern full-stack development, API integration, and managing data flow within a more contemporary architecture. It represents a significant upgrade in both functionality and maintainability over the original version.</p>
    `,
    image: "/assets/images/MovieRating.png",
    link: "https://github.com/CelesteGiraffe/Movie-Rating-Personal-Project-v2",
    date: "2022-04-04",
    genre: "website",
  },
  {
    title: "Inventory Java OOP Project",
    tags: ["Java", "JavaFX", "OOP", "NetBeans", "SQL"],
    description:
      "An inventory management system developed to demonstrate and apply object-oriented programming (OOP) principles using Java and JavaFX.",
    languagesUsed: {
      Java: 60,
      JavaFX: 30,
      SQL: 10,
    },
    effort: 6,
    longDescription: `
      <p>This project is an inventory management system, built to fully leverage the object-oriented capabilities of Java and to create a functional and intuitive user interface with JavaFX. Key features include:</p>
      <ul>
        <li><strong>CRUD Operations:</strong> Implemented Create, Read, Update, and Delete (CRUD) operations for managing inventory items, showcasing how OOP principles can be applied for clean and reusable code.</li>
        <li><strong>Object-Oriented Design:</strong> Emphasised OOP concepts such as encapsulation, inheritance, and polymorphism to create a flexible and maintainable codebase.</li>
        <li><strong>User Interface:</strong> Developed a user-friendly interface using JavaFX, providing an interactive way for users to manage inventory effectively.</li>
        <li><strong>Local Database Integration:</strong> Integrated a local database for persistent storage of inventory data, connecting the application logic to a backend for a complete full-stack approach.</li>
      </ul>
      <p>This project significantly deepened my understanding of Java's OOP principles, how they can be used to solve real-world problems, and the role of JavaFX in building interactive UIs. Additionally, it helped me develop skills in database integration to create more robust software solutions.</p>
    `,
    image: "/assets/images/JavaInv.png",
    link: "https://github.com/CelesteGiraffe/InventoryJavaOOP",
    date: "2021-11-28",
    genre: "tool",
  },
  {
    title: "Sorting Algorithm Visualizer",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Web Development"],
    description:
      'A tool to visualise and understand sorting algorithms through interactive visuals. <a href="/SortingAlgoVisualizer/Sort.html" target="_blank" class="btn btn-primary">Try It Out</a>',
    languagesUsed: {
      HTML: 45,
      CSS: 10,
      TypeScript: 45,
    },
    effort: 4,
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
    tags: [
      "C#",
      "Unity",
      "GameJam",
      "Blender",
      "State System",
      "Time Manipulation",
      "Game Design",
    ],
    description:
      "A fast-paced puzzle game created for a Game Jam, where movers throw furniture and you use time-rewind mechanics to avoid and reset chaos. Developed from concept to playable demo in just 3 days, showcasing my passion for game design and problem-solving.",
    languagesUsed: {
      "C#": 20,
      Unity: 65,
      Blender: 15,
    },
    effort: 5,
    longDescription: `
      <p>Manic Movers is a unique puzzle game where players face frantic movers who hurl furniture across levels. To navigate these chaotic environments, players use time-rewind mechanics to restore order and solve puzzles. This game was developed as part of a Game Jam with the theme 'rewind', and it was my first fully-fledged game project outside of client-based web work. Key features include:</p>
      <ul>
        <li><strong>State System for Game Rewind:</strong> Implemented a state management system to capture and store game state, allowing players to rewind and revert changes, bringing elements back to their original positions.</li>
        <li><strong>Time-Based Gameplay:</strong> Developed time-rewind mechanics inspired by games like Braid, giving players the ability to undo chaotic situations caused by movers, enhancing both puzzle complexity and player engagement.</li>
        <li><strong>Rapid Development:</strong> Built from idea to playable demo in just 3 days as part of a Game Jam. This was an intense learning experience and a demonstration of my dedication and capability to bring an idea to life under tight constraints.</li>
        <li><strong>Hand-Crafted Levels:</strong> Created multiple levels with hand-crafted obstacles and assets designed in Blender, adding a unique visual flair to each challenge.</li>
        <li><strong>Self-Taught Foundations:</strong> As one of my earliest projects during college, I relied on YouTube tutorials and official documentation for Unity and C#, building without direct walkthroughs but using resources to understand and implement core game development concepts.</li>
      </ul>
      <p>Manic Movers represents a major milestone in my journey into game development. It reflects my passion for creative problem-solving, ability to quickly learn and adapt, and my deep interest in game design and time-based gameplay mechanics.</p>
    `,
    image: "/assets/images/ManicMovers.png",
    link: "#",
    date: "2021-05-20",
    genre: "game",
  },
  {
    title: "Minesweeper Grid Game (Sketchsweepr)",
    tags: ["C#", ".NET", "Custom Graphics", "Grid Systems", "Game Design"],
    description:
      "A unique, hand-drawn style Minesweeper game developed using C# and .NET, intended to explore grid systems and creative UI design.",
    languagesUsed: {
      "C#": 100,
    },
    effort: 3,
    longDescription: `
      <p>Sketchsweepr is a creative twist on the classic Minesweeper game, designed as a project at the University of Dundee to experiment with grid systems and custom graphics. This project stood out due to its distinctive hand-drawn aesthetic, reminiscent of notebook doodles, which gave it a playful and personal touch. Key features include:</p>
      <ul>
        <li><strong>Custom Grid-Based System:</strong> Developed an interactive grid system for the Minesweeper game board, showcasing an understanding of grid-based logic and dynamic layouts.</li>
        <li><strong>Hand-Drawn Style UI:</strong> The game features a visually unique user interface, with elements inspired by sketches you might find in class notes, bringing a personal and charming style to the game.</li>
        <li><strong>C# and .NET Framework:</strong> Implemented in C# using the .NET framework, focusing on creating an intuitive and engaging user experience.</li>
      </ul>
      <p>This project provided valuable experience in combining technical concepts like grid management with creative storytelling through unique visual styles, enhancing both gameplay and player experience.</p>
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
    languagesUsed: {
      "C#": 35,
      Unity: 65,
    },
    effort: 8,
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
      "Database Design & Management",
      "Security",
      "Docker",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    description:
      "A social media platform for women in STEM where I led the database architecture and security implementation.",
    languagesUsed: {
      Flask: 40,
      MySQL: 35,
      Docker: 10,
      HTML: 5,
      CSS: 5,
      Bootstrap: 5,
    },
    effort: 10,
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
      "MySQL",
      "Linux",
      "Apache2",
      "jQuery",
      "Bootstrap",
      "Full-Stack Development",
    ],
    description:
      "The original version of a movie rating system developed using the LAMP stack, marking my first experience with full-stack web development.",
    languagesUsed: {
      HTML: 30,
      CSS: 5,
      JavaScript: 15,
      MySQL: 10,
      JQuery: 5,
      Bootstrap: 5,
      PHP: 30,
    },
    effort: 5,
    longDescription: `
      <p>Movie Rating Project 1.0 was my first real venture into full-stack development, built using the LAMP stack (Linux, Apache, MySQL, PHP). This project helped me learn the foundations of web development, including server-side programming, dynamic content generation, and user management. Key features include:</p>
      <ul>
        <li><strong>User Authentication:</strong> Implemented a user authentication system to allow users to create accounts, log in, and interact with the platform.</li>
        <li><strong>Dynamic Movie Rating System:</strong> Users could rate movies, write reviews, and see others' ratings and comments, providing an interactive experience.</li>
        <li><strong>Responsive Design:</strong> Developed a mobile-friendly interface using Bootstrap to ensure the website looked good across different screen sizes.</li>
      </ul>
      <p>This project was instrumental in helping me understand the basics of server-side scripting, database interactions, and client-server communication. It laid the groundwork for my further exploration into full-stack and modern web development.</p>
    `,
    image: "/assets/images/MovieRating.png",
    link: "https://github.com/CelesteGiraffe/Personal-Project-v1",
    date: "2021-09-15",
    genre: "Discovery",
  },
  {
    title: "Personal Portfolio 1.0",
    tags: ["HTML", "PHP", "CSS", "JavaScript", "Bootstrap", "Web Development"],
    description:
      "The first version of my personal portfolio, showcasing my early projects.",
    languagesUsed: {
      HTML: 30,
      PHP: 45,
      Bootstrap: 25,
    },
    effort: 8,
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
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Web Development"],
    description:
      "The second version of my portfolio website, currently live and showcasing my projects.",
    languagesUsed: {
      HTML: 40,
      CSS: 10,
      JavaScript: 25,
      Bootstrap: 25,
    },
    effort: 8,
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
