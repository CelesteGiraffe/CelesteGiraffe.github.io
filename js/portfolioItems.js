const portfolioItems = [
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
      "Cordellia is a Unity-based vertical slice where you guide a mushroom girl through an enchanted world with some fairly opinionated AI and movement.",
    languagesUsed: {
      "C#": 45,
      Unity: 65,
    },
    effort: 7,
    longDescription: `
      <p>Cordellia is a 3D Unity project where you control a small mushroom girl making her way through an enchanted forest. It was my first proper 3D game outside of jams, so I used it to push both my AI systems and my movement work. The game includes:</p>
    <ul>
      <li><strong>State-machine enemies:</strong> Each enemy (including the <em>GiantAI</em>) runs on a simple state machine—patrolling, chasing, attacking, or backing off—on top of Unity NavMesh for pathfinding.</li>
      <li><strong>Movement controller:</strong> The movement is loosely inspired by games like <em>Dark Souls</em> and <em>Hollow Knight</em>, with a lot of time spent on camera feel, dashing, and air control. Coroutines keep dash windows and combat movement predictable.</li>
      <li><strong>Hand-made visuals:</strong> I blended Mixamo animations with Blender models I created or tweaked to keep the look consistent.</li>
    </ul>
    <p>This project pulled together AI, movement, and animation work into one small slice and gave me a clearer sense of how those pieces actually feel when you ship them together.</p>
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
      "A business website for a local cleaning startup, built from scratch during my first year.",
    languagesUsed: {
      HTML: 40,
      CSS: 10,
      JavaScript: 20,
      Bootstrap: 30,
    },
    effort: 2,
    longDescription: `
      <p>This was my first paid website, built for a local cleaning startup during my first year of college. The project highlights include:</p>
      <ul>
        <li>Responsive design using Bootstrap</li>
        <li>Client interaction and feedback integration</li>
        <li>Basic SEO implementation</li>
        <li>Hosted using Apache servers</li>
      </ul>
      <p>The live site is gone now, but an archived version is still available via the Wayback Machine.</p>
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
      "Team Facilitation",
      "Team Collaboration",
    ],
    description:
      "Pedro's Pizza is a backend system for managing employee data, orders, metrics, and inventory for a pizza restaurant.",
    languagesUsed: {
      PHP: 10,
      MySQL: 65,
      Bootstrap: 15,
      TailwindCSS: 10,
    },
    effort: 8,
    longDescription: `
      <p>Pedro's Pizza is a backend system for a fictional pizza chain, used to manage employees, orders, inventory, and a few reporting views. I used it to practice database design and small-team planning. Some key pieces:</p>
      <ul>
        <li><strong>PHP-based backend:</strong> PHP scripts handle CRUD around orders, shifts, car usage, and business metrics.</li>
        <li><strong>MySQL schema:</strong> I designed the schema and joins for pulling out per‑location performance and day‑to‑day inventory data.</li>
        <li><strong>Bootstrap/Tailwind UI:</strong> A simple Bootstrap/Tailwind frontend gives managers a way to browse and edit data without touching SQL.</li>
        <li><strong>Basic security:</strong> Common queries use prepared statements to avoid SQL injection and keep the code predictable.</li>
      </ul>
      <p>This project was a good reminder that planning and alignment take more time than you expect, and that a clear schema saves a lot of discussion later.</p>
      <a href="https://github.com/CelesteGiraffe/DatabaseSystems" target="_blank" class="btn btn-primary">View the Repository</a> 
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
      "A C++ and Assembly emulator of the Manchester Baby computer, built to practice early computer architecture and basic compiler concepts.",
    languagesUsed: {
      "C++": 55,
      Assembly: 45,
    },
    effort: 8,
    longDescription: `
      <p>This emulator recreates parts of the Manchester Baby, one of the first stored‑program computers. The focus is on reading a tiny assembly‑style language and turning it into something the emulator can run. The project includes:</p>
      <ul>
        <li><strong>Lexer and parser:</strong> C++ code to tokenise the input and build a minimal structure the emulator can work with.</li>
        <li><strong>Mnemonics:</strong> Handling operations like <code>JMP</code>, <code>LDN</code>, and <code>STO</code> and mapping them to simple machine‑level steps.</li>
        <li><strong>File output:</strong> Writing out the resulting machine code to a file so it’s easy to inspect and test.</li>
      </ul>
      <p>Working on this helped make compiler and emulator concepts feel less abstract, and forced me to be more disciplined with C++.</p>
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
      "A C++ cellular automaton simulation that shows how simple rules can grow into more complex patterns, wrapped in Docker for easy runs.",
    languagesUsed: {
      "C++": 85,
      console: 5,
      Docker: 10,
    },
    effort: 4,
    longDescription: `
      <p>This C++ cellular automaton simulation is a small playground for seeing how simple rules can lead to more complex behaviour over time. It was my way of making emergence feel a bit more concrete. It includes:</p>
      <ul>
        <li><strong>Console output:</strong> The automaton updates in a console window so you can follow each generation.</li>
        <li><strong>Custom rule sets:</strong> You can tweak rule sets to try out patterns like Conway’s Game of Life and other variants.</li>
        <li><strong>Dockerised runs:</strong> A Docker setup keeps the environment consistent and easy to share.</li>
      </ul>
      <p>It was a simple way to connect C++ practice with ideas from complexity and to get more comfortable with Docker.</p>
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
      "A small Rust sandbox for trying out syntax, memory rules, and concurrency patterns in one place.",
    languagesUsed: {
      Rust: 100,
    },
    effort: 3,
    longDescription: `
      <p>This Rust sandbox is where I worked through examples from <em>The Rust Programming Language</em> and my own experiments. It isn’t a polished app, just a place to try things. I used it to explore:</p>
      <ul>
        <li><strong>Ownership and borrowing:</strong> How Rust uses its type system instead of a garbage collector.</li>
        <li><strong>Concurrency:</strong> Basic examples of multi‑threaded code with compile‑time checks for safety.</li>
        <li><strong>Standard data structures:</strong> Practising with vectors, maps, and other core types.</li>
      </ul>
      <p>It’s an ongoing scratchpad more than a product, but it shows how I like to learn new languages by actually shipping small pieces of code.</p>
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
      "jQuery",
      "Bootstrap",
      "Web Development",
    ],
    description:
      'A personal tierlist maker that lets you build and share tier lists from image URLs, without re‑uploading files. <a href="/Tierlist/pre-loader.html" class="btn btn-primary">Try It Out</a>',
    languagesUsed: {
      HTML: 35,
      CSS: 10,
      JavaScript: 35,
      jQuery: 10,
      Bootstrap: 10,
    },
    effort: 4,
    longDescription: `
      <p>After getting tired of downloading and re‑uploading images for every new tier list, I built my own version with HTML, CSS, JavaScript, and jQuery. You point it at image URLs and skip the file dance. It includes:</p>
      <ul>
        <li><strong>URL‑based images:</strong> Add images by URL instead of downloading and uploading each one.</li>
        <li><strong>Custom tiers:</strong> Add or rename tiers and drag tiles between them.</li>
        <li><strong>Easy sharing:</strong> Built with Discord and similar chats in mind.</li>
      </ul>
      <p>It started as a small quality‑of‑life tool for friends and turned into a handy way to spin up quick tier lists.</p>
      <a href="/Tierlist/pre-loader.html" class="btn btn-primary">Try It Out</a>
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
      "A small version control system written in shell scripts to understand how basic VCS features work under the hood.",
    languagesUsed: {
      Bash: 100,
    },
    effort: 5,
    longDescription: `
      <p>This custom version control system, written with Linux shell scripts, was part of a school assignment and a way to demystify tools like Git. It covers:</p>
      <ul>
        <li><strong>Repository management:</strong> Creating and selecting repos with simple staging and edit areas.</li>
        <li><strong>Commits and history:</strong> Basic commit commands and logs for tracking changes over time.</li>
        <li><strong>Diffing:</strong> A simple diff view to see what changed between versions.</li>
        <li><strong>CLI workflow:</strong> A small command‑line interface to glue it all together.</li>
      </ul>
      <p>It gave me a better feel for the building blocks behind real‑world VCS tools and made shell scripting less intimidating.</p>
    `,
    image: "/assets/images/UnixShellVCS.png",
    link: "https://github.com/CelesteGiraffe/UnixShellVCS",
    date: "2023-10-13",
    genre: "tool",
  },
  {
    title: "Network IRC Chat and Chatbot",
    tags: [
      "Python",
      "IRC",
      "Sockets",
      "Networking",
      "Team Facilitation",
      "Team Collaboration",
      "Inclusive Teams",
    ],
    description:
      "An IRC chatroom and chatbot built with Python sockets, following the IRC protocol.",
    languagesUsed: {
      Python: 100,
    },
    effort: 8,
    longDescription: `
      <p>This project shows how to stand up an IRC server and a simple chatbot with Python sockets. It includes:</p>
      <ul>
        <li>Real-time interaction with users via IRC protocol</li>
        <li>Automated responses, jokes, and commands</li>
        <li>Socket-based communication using IRC protocol for networking practice</li>
      </ul>
      <p>It was a practical way to practise socket programming and sticking to a real protocol spec.</p>
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
      "Inclusive Design",
      "Accessibility",
    ],
    description:
      "A full-stack rewrite of my original movie rating system, moving from a LAMP stack to Node.js and MongoDB.",
    languagesUsed: {
      HTML: 30,
      CSS: 10,
      JavaScript: 15,
      SCSS: 5,
      Node: 20,
      jQuery: 10,
      EJS: 10,
    },
    effort: 7,
    longDescription: `
      <p>Movie Rating Project 2.0 is a full rewrite of my first movie rating app. I kept the core idea but moved off LAMP to a more modern stack. Key changes:</p>
      <ul>
        <li><strong>New stack:</strong> Moved from PHP/MySQL to Node.js, Express, and MongoDB.</li>
        <li><strong>OAuth 2 login:</strong> Integrated Google sign‑in for a smoother auth flow.</li>
        <li><strong>External APIs:</strong> Pulled movie details from OMDB and reviews from the New York Times API.</li>
        <li><strong>Frontend refresh:</strong> Used SCSS and Bootstrap to clean up the layout and make it easier to maintain.</li>
      </ul>
      <p>This version taught me more about API design, auth flows, and what it actually takes to migrate an existing idea to a new stack.</p>
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
      "An inventory management app built in Java and JavaFX to practise object‑oriented design.",
    languagesUsed: {
      Java: 60,
      JavaFX: 30,
      SQL: 10,
    },
    effort: 6,
    longDescription: `
      <p>This inventory management system was a chance to lean into Java’s OOP features and pair them with a JavaFX UI. Highlights include:</p>
      <ul>
        <li><strong>CRUD operations:</strong> Create, read, update, and delete flows for managing items.</li>
        <li><strong>OOP focus:</strong> Encapsulation, inheritance, and polymorphism used in a very concrete way.</li>
        <li><strong>JavaFX UI:</strong> A small but usable desktop interface.</li>
        <li><strong>Local storage:</strong> A local database wired into the app so changes actually stick.</li>
      </ul>
      <p>It helped connect textbook OOP concepts to a real, working tool with persistence and a UI.</p>
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
      'A small tool to see how different sorting algorithms behave, with each step drawn on screen. <a href="/SortingAlgoVisualizer/Sort.html" class="btn btn-primary">Try It Out</a>',
    languagesUsed: {
      HTML: 45,
      CSS: 10,
      TypeScript: 45,
    },
    effort: 4,
    longDescription: `
      <p>This tool offers a simple way to visualise sorting algorithms instead of just reading about them. Features include:</p>
      <ul>
        <li>Visualisation of various sorting algorithms like QuickSort, MergeSort, etc.</li>
        <li>Comparison of algorithm time complexity</li>
        <li>Built using JavaScript and TypeScript for dynamic visualisation</li>
      </ul>
      <p>Building it made the differences between the algorithms much easier to see and remember.</p>
      <a href="/SortingAlgoVisualizer/Sort.html" class="btn btn-primary">Try It Out</a>
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
    tags: [
      "C#",
      ".NET",
      "Custom Graphics",
      "Grid Systems",
      "Game Design",
      "Team Collaboration",
    ],
    description:
      "A hand-drawn style Minesweeper‑like game in C# and .NET, built to explore grid systems and custom UI.",
    languagesUsed: {
      "C#": 100,
    },
    effort: 3,
    longDescription: `
      <p>Sketchsweepr is a loose take on Minesweeper, built at the University of Dundee to experiment with grid logic and a more personal art style. Key pieces:</p>
      <ul>
        <li><strong>Custom grid:</strong> An interactive grid for the play area with the usual Minesweeper‑style rules.</li>
        <li><strong>Hand‑drawn UI:</strong> Sketch‑style visuals to make it feel like something drawn in the margin of a notebook.</li>
        <li><strong>C# and .NET:</strong> Implemented as a desktop app with a focus on clarity rather than heavy frameworks.</li>
      </ul>
      <p>It linked grid logic work with a more playful presentation, which made the technical parts more fun to test.</p>
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
      "Team Collaboration",
    ],
    description:
      "Little Shop on Hallow Hill is a GameJam project about running a spooky shop and defending a Halloween town, with a focus on NPC behaviour and inventory systems. The jam build is incomplete but playable.",
    languagesUsed: {
      "C#": 35,
      Unity: 65,
    },
    effort: 8,
    longDescription: `
      <p>Little Shop on Hallow Hill was a GameJam submission about running a Halloween‑themed shop while defending the town from invading humans. <strong>The jam build is incomplete and some features are rough or missing.</strong> Even so, we were able to land a few things I’m proud of:</p>
      <ul>
        <li><strong>Shop Management:</strong> Players could sell various items, with an inventory system to keep track of available goods. The <em>OpenInv.cs</em> script managed the player's inventory effectively, allowing for a range of items to be offered for sale.</li>
        <li><strong>NPC Interaction and AI:</strong> NPCs were designed with varied behaviours—customers would enter the shop, interact with items, and either buy or gossip about what they found. The <em>Customer.cs</em> and <em>Gossiper.cs</em> files helped implement this depth of interaction, adding character to the town.</li>
        <li><strong>Dynamic Environment:</strong> I worked on <em>PlayerManager.cs</em> and <em>Movement.cs</em>, focusing on character movement and the interaction with the environment, contributing to an immersive shopkeeping experience.</li>
      </ul>
      <p>Even without every feature finished, it was a solid exercise in rapid prototyping and team communication under a deadline.</p>
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
      "Team Facilitation",
      "Inclusive Teams",
      "Team Collaboration",
      "Inclusive Design",
      "Accessibility",
    ],
    description:
      "A social platform for women in STEM, where I led the database design and most of the security work.",
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
      <p>TechSavvy is my university capstone: a social platform aimed at supporting and connecting women in STEM. I led the database design and OAuth2 integration. Key pieces:</p>
      <ul>
        <li><strong>Schema design:</strong> Tables for users, auth, communities, posts, comments, resources, jobs, and messaging.</li>
        <li><strong>OAuth2:</strong> Login flows using external providers such as Google.</li>
        <li><strong>Data access layer:</strong> DAOs and a service layer to keep SQL in one place.</li>
        <li><strong>Security basics:</strong> Prepared statements, safer queries, and some early access‑control work.</li>
        <li><strong>Docker:</strong> Containerised MySQL to keep dev environments predictable.</li>
      </ul>
      <p>It was a good chance to apply database and security concepts to something that actually aims to support people.</p>
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
      "The original movie rating system I built on a LAMP stack, and my first real full‑stack web project.",
    languagesUsed: {
      HTML: 30,
      CSS: 5,
      JavaScript: 15,
      MySQL: 10,
      jQuery: 5,
      Bootstrap: 5,
      PHP: 30,
    },
    effort: 5,
    longDescription: `
      <p>Movie Rating Project 1.0 was my first serious step into full‑stack development using the LAMP stack (Linux, Apache, MySQL, PHP). It helped me learn the basics of server‑side code and web app structure. Key features:</p>
      <ul>
        <li><strong>User Authentication:</strong> Implemented a user authentication system to allow users to create accounts, log in, and interact with the platform.</li>
        <li><strong>Dynamic Movie Rating System:</strong> Users could rate movies, write reviews, and see others' ratings and comments, providing an interactive experience.</li>
        <li><strong>Responsive Design:</strong> Developed a mobile-friendly interface using Bootstrap to ensure the website looked good across different screen sizes.</li>
      </ul>
      <p>It set the baseline skills I later built on with more modern stacks.</p>
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
      "The first version of my personal portfolio, built to get my early projects online.",
    languagesUsed: {
      HTML: 30,
      PHP: 45,
      Bootstrap: 25,
    },
    effort: 8,
    longDescription: `
      <p>This is the original version of my portfolio, built with HTML, PHP, CSS, and JavaScript. Key features:</p>
      <ul>
        <li>Project showcase with links to GitHub repositories</li>
        <li>Responsive design using Bootstrap</li>
        <li>Personal branding and custom design</li>
      </ul>
      <p>It was my first attempt at pulling my work into one place where people could actually find it.</p>
    `,
    image: "/assets/images/Portfolio.png",
    link: "https://github.com/CelesteGiraffe/Personal-Portfolio",
    date: "2022-03-20",
    genre: "Discovery",
  },
  {
    title: "Personal Portfolio 2.0 (this website)",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Web Development",
      "Inclusive Design",
      "Accessibility",
    ],
    description:
      "The second version of my portfolio website, which you’re browsing now.",
    languagesUsed: {
      HTML: 40,
      CSS: 10,
      JavaScript: 25,
      Bootstrap: 25,
    },
    effort: 8,
    longDescription: `
      <p>This is the current version of my portfolio, built with HTML, CSS, JavaScript, and Bootstrap. It features:</p>
      <ul>
        <li>Dynamic project cards with detailed descriptions</li>
        <li>Mobile-responsive layout for accessibility</li>
        <li>Enhanced UI/UX design using Bootstrap framework</li>
      </ul>
      <p>It’s where I keep my projects, context, and a few small tools in one place.</p>
    `,
    image: "/assets/images/Portfolio2.png",
    link: "#",
    date: "2024-09-20",
    genre: "website",
  },
];
