const portfolioItems = [
  {
    title: "Cordellia (3D Action Adventure)",
    tags: [
      "Unity",
      "C#",
      "State Machine AI",
      "NavMesh",
      "Game Design",
      "Player Kinematics",
      "Input Buffering",
      "Blender",
      "Mixamo",
      "Animation Pipelines",
    ],
    description:
      "A solo 3D action vertical slice built in Unity where players guide a mushroom character through an enchanted world. Features custom state machine AI, NavMesh navigation, and fluid combat movement.",
    languagesUsed: {
      "C#": 55,
      "Unity Engine": 45,
    },
    effort: 8,
    longDescription: `
      <p>Cordellia was my main project for the Games Programming course during my study abroad at the University of Dundee. It was my first deep dive into full 3D game development beyond game jams, and I built it solo from combat mechanics to enemy logic.</p>
      <ul>
        <li><strong>State Machine Enemy AI:</strong> Built custom finite state machines for enemies (including the multi-phase Giant AI) with distinct states for patrolling, investigating, chasing, attacking, and staggering. NavMesh path recalculations are throttled across frames to keep CPU usage low.</li>
        <li><strong>Combat &amp; Player Movement:</strong> Designed responsive controls inspired by games like <em>Hollow Knight</em> and <em>Dark Souls</em>, using coroutine-based input buffering for smooth dashes, attack chaining, and recovery frames.</li>
        <li><strong>Art &amp; Animation Setup:</strong> Adapted 3D models in Blender, rigged skeletal animations with Mixamo, and set up Mecanim blend trees linked with animation events.</li>
      </ul>
      <a href="https://github.com/UniversityOfDundee-Computing/vertical-slice-of-a-game-CelesteGiraffe" target="_blank" class="btn btn-primary">Repository</a>
      <a href="https://youtu.be/yN1TZMd2CG8?si=yMvQWZNsgEUc5_-y" target="_blank" class="btn btn-secondary">Gameplay Video</a>
    `,
    image: "/assets/images/cordellia.png",
    link: "https://github.com/UniversityOfDundee-Computing/vertical-slice-of-a-game-CelesteGiraffe",
    date: "2024-04-30",
    genre: "game",
  },
  {
    title: "Manchester Baby (SSEM) Emulator & Assembler",
    tags: [
      "C++",
      "Assembly",
      "Emulation",
      "Computer Architecture",
      "Lexical Analysis",
      "Parsing",
      "Memory Systems",
      "Systems Programming",
    ],
    description:
      "A cycle-accurate emulator and two-pass assembler in C++ for the 1948 Manchester Small-Scale Experimental Machine, the world's first stored-program computer.",
    languagesUsed: {
      "C++": 60,
      Assembly: 40,
    },
    effort: 8,
    longDescription: `
      <p>I built this software recreation of the 1948 Manchester Small-Scale Experimental Machine (SSEM) in C++ to understand early computer architecture and instruction execution at the hardware level.</p>
      <ul>
        <li><strong>Memory Simulation:</strong> Accurately models 32 words of 32-bit memory stored in least-significant-bit first order, mirroring the physical Williams-Kilburn tube cathode-ray storage.</li>
        <li><strong>Instruction Cycle:</strong> Implements the fetch, decode, and execute stages for all 7 hardware instructions (<code>JMP</code>, <code>JRP</code>, <code>LDN</code>, <code>STO</code>, <code>SUB</code>, <code>CMP</code>, <code>STP</code>), stepping the accumulator register and program counter.</li>
        <li><strong>Two-Pass Assembler:</strong> Custom lexer and token stream parser that resolves jump labels on the first pass and outputs raw binary machine code on the second pass.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/ManchesterBaby" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/ManBaby.jpg",
    link: "https://github.com/CelesteGiraffe/ManchesterBaby",
    date: "2023-11-30",
    genre: "systems",
  },
  {
    title: "Cellular Automata Simulation Engine",
    tags: [
      "C++",
      "Docker",
      "Discrete Simulation",
      "Toroidal Grids",
      "Memory Optimization",
      "Systems Programming",
    ],
    description:
      "A fast 2D grid simulation engine in C++ with double-buffered memory management, toroidal wrapping, and Docker containerization.",
    languagesUsed: {
      "C++": 85,
      Docker: 15,
    },
    effort: 5,
    longDescription: `
      <p>A C++ simulation engine built to experiment with Conway's Game of Life and custom 2D cellular automata rules, focusing on memory efficiency and cache performance.</p>
      <ul>
        <li><strong>Double-Buffered Memory:</strong> Uses two contiguous grid buffers and swaps pointers per tick, eliminating memory allocations during the active simulation loop.</li>
        <li><strong>Toroidal Grid:</strong> Modular arithmetic wraps the 2D grid seamlessly on all borders for accurate 8-neighbor Moore neighborhood calculations.</li>
        <li><strong>Docker Setup:</strong> Packaged in a minimal Linux container for consistent build and execution environments.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Cellular-Automaton" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/CellularAutomata.png",
    link: "https://github.com/CelesteGiraffe/Cellular-Automaton",
    date: "2023-11-04",
    genre: "systems",
  },
  {
    title: "TechSavvy (Capstone Project)",
    tags: [
      "Python",
      "Flask",
      "MySQL",
      "OAuth2",
      "Database Architecture",
      "Docker",
      "Security",
      "DAO Pattern",
      "Full-Stack Development",
      "Accessibility",
      "Inclusive Design",
    ],
    description:
      "Web platform supporting women in STEM, built as my university capstone project. I served as backend lead, designing the MySQL database schema, REST API endpoints, and Google OAuth login.",
    languagesUsed: {
      Flask: 45,
      MySQL: 35,
      Docker: 20,
    },
    effort: 10,
    longDescription: `
      <p>TechSavvy was my senior capstone project at UAB, built in a small team to provide mentorship channels, job boards, and discussion spaces for women in STEM. I led backend development and database architecture.</p>
      <ul>
        <li><strong>Database Schema:</strong> Designed normalized MySQL tables for user accounts, channel permissions, threaded discussion posts, job listings, and direct messages.</li>
        <li><strong>OAuth 2.0 &amp; Role Permissions:</strong> Integrated Google OAuth login and implemented role-based permissions to protect admin and moderator endpoints.</li>
        <li><strong>Data Access Layer:</strong> Built structured Data Access Objects (DAOs) in Python/Flask with prepared statements to keep queries organized and safe from SQL injection.</li>
        <li><strong>Docker Setup:</strong> Configured Docker Compose to run the Flask app and MySQL container with persistent volume storage.</li>
      </ul>
      <a href="https://github.com/maddisonstockton/TechSavvy" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/TechSavvy.png",
    link: "https://github.com/maddisonstockton/TechSavvy",
    date: "2024-10-04",
    genre: "backend",
  },
  {
    title: "Pedro's Pizza Management System",
    tags: [
      "PHP",
      "MySQL",
      "Database Architecture",
      "Transactions",
      "CRUD",
      "Security",
      "Backend Development",
      "Web Development",
    ],
    description:
      "A restaurant management backend and web interface in PHP and MySQL for tracking orders, store inventory, employee shifts, and sales reports.",
    languagesUsed: {
      MySQL: 65,
      PHP: 25,
      Bootstrap: 10,
    },
    effort: 8,
    longDescription: `
      <p>A database management project built to model the day-to-day operations of a multi-location pizza business, from customer order tracking to employee shift scheduling.</p>
      <ul>
        <li><strong>Relational Database:</strong> Designed normalized MySQL tables with foreign key constraints, cascading updates, and indexes on high-traffic fields.</li>
        <li><strong>Order Transactions:</strong> Used SQL transaction boundaries to ensure multi-item orders and inventory deductions are processed atomically.</li>
        <li><strong>Secure PHP Queries:</strong> Used PHP PDO with prepared statements across all form submissions to prevent SQL injection.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/DatabaseSystems" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/PedrosPizza.png",
    link: "https://github.com/CelesteGiraffe/DatabaseSystems",
    date: "2023-10-19",
    genre: "backend",
  },
  {
    title: "Python IRC Server & Bot",
    tags: [
      "Python",
      "Sockets",
      "Networking",
      "TCP/IP",
      "RFC 1459",
      "Concurrent I/O",
      "Systems Programming",
    ],
    description:
      "An RFC-compliant Internet Relay Chat (IRC) server daemon and automated bot written from scratch using Python TCP sockets.",
    languagesUsed: {
      Python: 100,
    },
    effort: 8,
    longDescription: `
      <p>A networking project implementing an IRC server daemon and automated bot from the ground up using raw Python TCP sockets to study protocol design and network I/O.</p>
      <ul>
        <li><strong>Protocol Parsing:</strong> Tokenizes standard IRC messages delimited by CRLF and handles core commands like <code>NICK</code>, <code>USER</code>, <code>JOIN</code>, <code>PRIVMSG</code>, and <code>QUIT</code>.</li>
        <li><strong>Buffer &amp; Stream Handling:</strong> Manages packet fragmentation and TCP stream boundaries so partial messages are properly assembled before execution.</li>
        <li><strong>Connection &amp; Channel Management:</strong> Tracks connected client sockets, manages active channels, and multicasts messages to channel members.</li>
      </ul>
      <a href="https://github.com/Achiengmnoma/NetworksIV" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/HexChat.png",
    link: "https://github.com/Achiengmnoma/NetworksIV",
    date: "2023-10-13",
    genre: "systems",
  },
  {
    title: "Rust Concurrency & Systems Sandbox",
    tags: [
      "Rust",
      "Memory Management",
      "Concurrency",
      "Systems Programming",
      "Data Structures",
      "Zero-Cost Abstractions",
    ],
    description:
      "A collection of low-level experiments exploring Rust's ownership model, lifetime rules, multi-threaded worker pools, and memory layout.",
    languagesUsed: {
      Rust: 100,
    },
    effort: 4,
    longDescription: `
      <p>A hands-on learning repository built to explore Rust's memory safety guarantees, concurrency primitives, and zero-cost abstractions.</p>
      <ul>
        <li><strong>Ownership &amp; Lifetimes:</strong> Practiced managing stack vs. heap memory, RAII resource cleanup, and explicit lifetime annotations.</li>
        <li><strong>Multi-Threading:</strong> Implemented thread pools and worker queues using <code>std::sync::mpsc</code> channels and <code>Arc&lt;Mutex&lt;T&gt;&gt;</code>.</li>
        <li><strong>Memory Experiments:</strong> Compared performance and cache locality between contiguous vectors and pointer-based data structures.</li>
      </ul>
    `,
    image: "/assets/images/RustSandbox.png",
    link: "#",
    date: "2023-10-24",
    genre: "systems",
  },
  {
    title: "Sketchsweepr (2D Grid Engine)",
    tags: [
      "C#",
      ".NET",
      "Algorithms",
      "Grid Systems",
      "Game Design",
      "UI Architecture",
    ],
    description:
      "A Minesweeper-inspired 2D grid game built in C# and .NET, featuring recursive flood-fill tile revelation and a decoupled UI layer.",
    languagesUsed: {
      "C#": 100,
    },
    effort: 4,
    longDescription: `
      <p>A 2D puzzle game engine developed during my time at Dundee University to practice grid algorithms and clean UI separation in C#.</p>
      <ul>
        <li><strong>Grid Matrix Logic:</strong> Manages 2D tile states (hidden, flagged, revealed, mine) and calculates neighboring mine counts.</li>
        <li><strong>Recursive Flood-Fill:</strong> Cascade reveal algorithm that uncovers connected empty cells safely with boundary checks.</li>
        <li><strong>Clean Architecture:</strong> Kept the game board rules independent from the visual rendering, making UI tweaks simple.</li>
      </ul>
      <a href="https://github.com/nataliiaash/Minesweeper2/tree/master" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/SketchSweeper.png",
    link: "https://github.com/nataliiaash/Minesweeper2/tree/master",
    date: "2024-02-08",
    genre: "game",
  },
  {
    title: "Movie Rating Platform 2.0",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "OAuth2",
      "REST API",
      "Full-Stack Development",
      "Architecture Migration",
      "Accessibility",
    ],
    description:
      "A rewrite of my original movie review site, moving from a PHP/MySQL LAMP stack to Node.js, Express, and MongoDB with external movie API integration.",
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
      <p>A complete rebuild of my first web app, redesigned to learn modern JavaScript backends, NoSQL document databases, and third-party API integration.</p>
      <ul>
        <li><strong>Stack Migration:</strong> Migrated from PHP/MySQL to Node.js, Express, and MongoDB, restructuring relational tables into flexible document collections.</li>
        <li><strong>External APIs:</strong> Connected the OMDB and NYT APIs to fetch movie posters, release metadata, and critic reviews dynamically.</li>
        <li><strong>User Reviews &amp; Lists:</strong> Added user accounts, custom watchlists, and star rating submissions.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Movie-Rating-Personal-Project-v2" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/MovieRating.png",
    link: "https://github.com/CelesteGiraffe/Movie-Rating-Personal-Project-v2",
    date: "2022-04-04",
    genre: "website",
  },
  {
    title: "The Little Shop on Hallow Hill",
    tags: [
      "Unity",
      "C#",
      "Game Design",
      "NPC AI",
      "Inventory Systems",
      "Rapid Prototyping",
    ],
    description:
      "A 48-hour game jam project made in Unity and C#, featuring a spooky shop economy loop, inventory management, and NPC customer interactions.",
    languagesUsed: {
      "C#": 35,
      Unity: 65,
    },
    effort: 6,
    longDescription: `
      <p>A cozy shopkeeping prototype created in 48 hours for a Game Jam, focusing on quick prototyping, inventory systems, and customer state loops.</p>
      <ul>
        <li><strong>Inventory System:</strong> ScriptableObject-based inventory tracking item stocks, buy/sell values, and player inventory capacity.</li>
        <li><strong>Customer NPC Behavior:</strong> Simple state-driven NPCs that browse shop shelves, make purchase decisions, and trigger dialogue.</li>
        <li><strong>Game Jam Workflow:</strong> Focused on fast iteration, scoping features to fit the 48-hour deadline, and writing modular scripts.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Shopkeep" target="_blank" class="btn btn-primary">Repository</a>
      <a href="https://pilipaladev.itch.io/the-little-shop-on-hallow-hill-incomplete" target="_blank" class="btn btn-secondary">Itch.io Build</a>
    `,
    image: "/assets/images/TLSoHH.png",
    link: "https://github.com/CelesteGiraffe/Shopkeep",
    date: "2024-09-07",
    genre: "game",
  },
  {
    title: "Interactive Tier List Tool",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "DOM API",
      "Drag-and-Drop",
      "Web Development",
    ],
    description:
      "A lightweight client-side ranking tool in vanilla JavaScript and HTML5, using native drag-and-drop events and direct image URL loading.",
    languagesUsed: {
      HTML: 35,
      CSS: 10,
      JavaScript: 35,
      jQuery: 10,
      Bootstrap: 10,
    },
    effort: 4,
    longDescription: `
      <p>A quick, lightweight tier list maker running entirely in the browser without any backend or server requirements.</p>
      <ul>
        <li><strong>Drag and Drop:</strong> Uses native HTML5 drag-and-drop APIs with touch support to smoothly reorder items across tiers.</li>
        <li><strong>Image Loading:</strong> Loads images directly from URLs with broken link fallbacks, keeping the tool fast and server-free.</li>
        <li><strong>Customization:</strong> Lets users add, delete, rename, and color-code ranking rows on the fly.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Tierlist" target="_blank" class="btn btn-primary">Repository</a>
      <a href="/Tierlist/pre-loader.html" class="btn btn-secondary">Launch Tool</a>
    `,
    image: "/assets/images/TierListMaker.png",
    link: "https://github.com/CelesteGiraffe/Tierlist",
    date: "2023-10-24",
    genre: "tool",
  },
  {
    title: "Sorting Algorithm Visualizer",
    tags: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Algorithms",
      "Asynchronous Execution",
      "Web Development",
    ],
    description:
      "An interactive Canvas tool in TypeScript that visualizes QuickSort, MergeSort, BubbleSort, and InsertionSort step by step with asynchronous delays.",
    languagesUsed: {
      HTML: 45,
      CSS: 10,
      TypeScript: 45,
    },
    effort: 4,
    longDescription: `
      <p>An educational visualization tool designed to demonstrate how different comparison sorting algorithms partition and sort arrays in real time.</p>
      <ul>
        <li><strong>Algorithm Visualizations:</strong> Step-by-step animations of QuickSort (pivot partitioning), MergeSort (auxiliary merging), BubbleSort, and InsertionSort.</li>
        <li><strong>Async Render Loop:</strong> Uses asynchronous delays to let algorithms yield to the browser's render thread, keeping Canvas animations smooth.</li>
        <li><strong>Visual Feedback:</strong> Color-codes active comparisons, swaps, and sorted subarrays for easy visual tracking.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Sorting-Algorithm-Visualizer" target="_blank" class="btn btn-primary">Repository</a>
      <a href="/SortingAlgoVisualizer/Sort.html" class="btn btn-secondary">Launch Visualizer</a>
    `,
    image: "/assets/images/Sort.png",
    link: "https://github.com/CelesteGiraffe/Sorting-Algorithm-Visualizer",
    date: "2021-11-25",
    genre: "tool",
  },
  {
    title: "POSIX Shell Version Control System",
    tags: [
      "Linux Shell",
      "Bash Scripting",
      "Version Control",
      "Systems Programming",
      "CLI",
    ],
    description:
      "A Git-inspired version control tool written in POSIX Bash, implementing content-addressable storage, a staging index, and commit histories.",
    languagesUsed: {
      Bash: 100,
    },
    effort: 5,
    longDescription: `
      <p>A command-line version control tool written in Bash to understand how Git works under the hood with content-addressable object storage.</p>
      <ul>
        <li><strong>Object Storage:</strong> Stores file snapshots in a directory tree indexed by file checksums and metadata.</li>
        <li><strong>Staging &amp; Commits:</strong> CLI commands for staging files (add), committing snapshots with log messages, and viewing commit history.</li>
        <li><strong>Diffing:</strong> Uses standard Unix utilities (diff, patch, sed) to calculate and view changes between revisions.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/UnixShellVCS" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/UnixShellVCS.png",
    link: "https://github.com/CelesteGiraffe/UnixShellVCS",
    date: "2023-10-13",
    genre: "tool",
  },
  {
    title: "Java Desktop Inventory App",
    tags: ["Java", "JavaFX", "OOP", "SQL", "NetBeans", "Software Engineering"],
    description:
      "A desktop inventory management application built in Java and JavaFX with an MVC structure and local database persistence.",
    languagesUsed: {
      Java: 60,
      JavaFX: 30,
      SQL: 10,
    },
    effort: 6,
    longDescription: `
      <p>A desktop application developed to practice object-oriented design patterns, GUI building in JavaFX, and database integration in Java.</p>
      <ul>
        <li><strong>OOP Design:</strong> Clear class hierarchies and interfaces modeling inventory items, suppliers, and transaction records.</li>
        <li><strong>MVC Pattern:</strong> Decoupled JavaFX view controllers from business logic and database queries.</li>
        <li><strong>Database Storage:</strong> Connected to a local SQL database for creating, reading, updating, and deleting inventory records.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/InventoryJavaOOP" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/JavaInv.png",
    link: "https://github.com/CelesteGiraffe/InventoryJavaOOP",
    date: "2021-11-28",
    genre: "tool",
  },
  {
    title: "Movie Rating Platform 1.0 (LAMP)",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Linux",
      "Apache2",
      "Full-Stack Development",
    ],
    description:
      "My first full-stack web project, built with PHP, MySQL, Apache, and Linux to learn server-side rendering and database management.",
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
      <p>My initial full-stack project, built on a classic LAMP stack to learn how server-rendered web applications handle forms, databases, and sessions.</p>
      <ul>
        <li><strong>Session Auth:</strong> Cookie-based user sessions for logging in, managing account profiles, and submitting reviews.</li>
        <li><strong>MySQL Database:</strong> Tables for user accounts, movie entries, ratings, and written reviews.</li>
        <li><strong>Server Setup:</strong> Configured and ran the application on a local Linux Apache server.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Personal-Project-v1" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/MovieRating.png",
    link: "https://github.com/CelesteGiraffe/Personal-Project-v1",
    date: "2021-09-15",
    genre: "website",
  },
  {
    title: "AlaSeason LLC Client Website",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap", "Web Development"],
    description:
      "A commercial website developed for a local Alabama cleaning business during my first year of university, hosted on Apache.",
    languagesUsed: {
      HTML: 40,
      CSS: 10,
      JavaScript: 20,
      Bootstrap: 30,
    },
    effort: 2,
    longDescription: `
      <p>My first paid web development project, built for a local commercial cleaning company during my freshman year.</p>
      <ul>
        <li><strong>Responsive Design:</strong> Built mobile-friendly pages using HTML5, CSS3, and Bootstrap.</li>
        <li><strong>Deployment:</strong> Set up domain DNS routing and configured static hosting on an Apache server.</li>
      </ul>
      <a href="https://web.archive.org/web/20230124034233/https://www.alaseasonllc.com/" target="_blank" class="btn btn-primary">Wayback Archive</a>
    `,
    image: "/assets/images/AlaSeason.png",
    link: "https://web.archive.org/web/20230124034233/https://www.alaseasonllc.com/",
    date: "2020-08-15",
    genre: "website",
  },
  {
    title: "Personal Portfolio Site",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
      "Accessibility",
      "Inclusive Design",
    ],
    description:
      "Fast, static portfolio built with vanilla HTML5, CSS3, and JavaScript, featuring real-time tag filtering, shareable URLs, and zero runtime dependencies.",
    languagesUsed: {
      HTML: 40,
      CSS: 35,
      JavaScript: 25,
    },
    effort: 8,
    longDescription: `
      <p>This portfolio is built with vanilla HTML, CSS, and JavaScript, hosted statically on GitHub Pages with zero framework bloat.</p>
      <ul>
        <li><strong>Zero Dependencies:</strong> Pure HTML/CSS/JS without heavy frameworks or build tools for instant loading.</li>
        <li><strong>URL-Based Filtering:</strong> Custom tag filters update the URL query string so filtered views can be bookmarked and shared.</li>
        <li><strong>Accessible &amp; Clean:</strong> High-contrast color palette, semantic HTML elements, and keyboard-accessible navigation.</li>
      </ul>
    `,
    image: "/assets/images/Portfolio2.png",
    link: "https://github.com/CelesteGiraffe/CelesteGiraffe.github.io",
    date: "2024-09-20",
    genre: "website",
  },
];
