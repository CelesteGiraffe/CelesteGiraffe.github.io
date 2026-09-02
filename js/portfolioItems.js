const portfolioItems = [
  {
    title: "Cordellia: 3D Action-Adventure Vertical Slice",
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
      "Solo-developed 3D action vertical slice featuring deterministic finite-state-machine enemy AI, NavMesh agent navigation, and a kinematic character controller with coroutine-buffered input windows.",
    languagesUsed: {
      "C#": 55,
      "Unity Engine": 45,
    },
    effort: 8,
    longDescription: `
      <p>Cordellia is a 3D action-adventure vertical slice built in Unity to explore combat kinematics, deterministic AI state machines, and real-time navigation constraints.</p>
      <ul>
        <li><strong>Hierarchical Finite State Machine (FSM) AI:</strong> Enemy entities (including the multi-phase <em>GiantAI</em>) execute decoupled state logic covering Patrol, Investigate, Pursue, Telegraphed Attack, Recovery, and Stagger states. Path recalculation over the Unity NavMesh is throttled across frames to prevent CPU saturation.</li>
        <li><strong>Kinematic Character Controller:</strong> Implemented responsive air control, directional dashes, and attack chaining using coroutine-driven input buffering and frame-accurate invulnerability windows.</li>
        <li><strong>Animation & Asset Pipeline:</strong> Created and modified 3D meshes in Blender, rigged skeletal hierarchies with Mixamo, and configured mecanim blend trees synchronized with animation event callbacks.</li>
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
      "Cycle-accurate emulator and two-pass assembler for the 1948 Manchester Small-Scale Experimental Machine (SSEM), modeling 32-word Williams tube electrostatic storage and discrete instruction execution cycles.",
    languagesUsed: {
      "C++": 60,
      Assembly: 40,
    },
    effort: 8,
    longDescription: `
      <p>A software recreation of the 1948 Manchester Small-Scale Experimental Machine (SSEM), the world’s first stored-program computer, built in C++ to analyze low-level instruction set architecture (ISA) design.</p>
      <ul>
        <li><strong>Memory Architecture Emulation:</strong> Models 32 words of 32-bit memory stored in least-significant-bit (LSB) first order, mirroring the physical Williams-Kilburn tube electrostatic cathode-ray storage.</li>
        <li><strong>Discrete Machine Cycles:</strong> Implements Fetch, Decode, and Execute stages for all hardware mnemonics (<code>JMP</code>, <code>JRP</code>, <code>LDN</code>, <code>STO</code>, <code>SUB</code>, <code>CMP</code>, <code>STP</code>) manipulating an accumulator register and program counter.</li>
        <li><strong>Two-Pass Assembler:</strong> Custom lexer and token stream parser that resolves symbolic jump labels on the first pass and emits memory-aligned binary machine code on the second pass.</li>
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
      "High-performance 2D discrete simulation engine in C++ utilizing a toroidal grid matrix, pointer-swapped double buffering to eliminate race conditions, and containerized deterministic execution.",
    languagesUsed: {
      "C++": 85,
      Docker: 15,
    },
    effort: 5,
    longDescription: `
      <p>A 2D discrete dynamical system simulation engine in C++ exploring emergent complexity, algorithmic optimization, and deterministic execution.</p>
      <ul>
        <li><strong>Double-Buffering Memory Management:</strong> Eliminates generation stepping race conditions by maintaining two contiguous grid buffers and swapping pointers per tick, resulting in zero dynamic allocations during active simulation.</li>
        <li><strong>Toroidal Topology:</strong> Modular boundary indexing evaluates 8-neighbor Moore topologies across wrapped 2D coordinate matrices.</li>
        <li><strong>Containerized Environment:</strong> Packaged in a minimal Linux Docker container for deterministic headless execution and automated benchmarking.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Cellular-Automaton" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/CellularAutomata.png",
    link: "https://github.com/CelesteGiraffe/Cellular-Automaton",
    date: "2023-11-04",
    genre: "systems",
  },
  {
    title: "TechSavvy: Distributed Community Platform",
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
      "Lead backend engineer for a distributed STEM community platform: designed 3NF MySQL relational schemas, OAuth 2.0 authorization code flows, DAO abstraction layers, and multi-container Docker orchestration.",
    languagesUsed: {
      Flask: 45,
      MySQL: 35,
      Docker: 20,
    },
    effort: 10,
    longDescription: `
      <p>TechSavvy was my university capstone project: a secure web platform supporting women in STEM, where I led the backend systems architecture, relational database design, and authentication flows.</p>
      <ul>
        <li><strong>Relational Schema Design (3NF):</strong> Structured relational tables for users, credentials, role assignments, community channels, threaded posts, job boards, and direct messages, indexed for low-latency joins.</li>
        <li><strong>OAuth 2.0 & RBAC:</strong> Implemented authorization code grant workflows with Google identity providers and enforced role-based access control across sensitive API endpoints.</li>
        <li><strong>Data Access Object (DAO) Pattern:</strong> Decoupled query execution from HTTP controllers, enforcing parameterized prepared statements across all data mutation pathways.</li>
        <li><strong>Containerized Deployment:</strong> Multi-container Docker Compose configuration managing isolated app runtime, persistent MySQL storage volumes, and environment-scoped credential injection.</li>
      </ul>
      <a href="https://github.com/maddisonstockton/TechSavvy" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/TechSavvy.png",
    link: "https://github.com/maddisonstockton/TechSavvy",
    date: "2024-10-04",
    genre: "backend",
  },
  {
    title: "Pedro's Pizza: Relational Database & Management API",
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
      "Relational database management backend engineered in PHP and MySQL, featuring 3NF normalized schemas, multi-table JOIN reporting views, transaction boundaries, and prepared statement query sanitization.",
    languagesUsed: {
      MySQL: 65,
      PHP: 25,
      Bootstrap: 10,
    },
    effort: 8,
    longDescription: `
      <p>A relational database backend engineered to model business operations, shift scheduling, inventory depletion, and logistics for a multi-branch food service enterprise.</p>
      <ul>
        <li><strong>Normalized Schema Design:</strong> 3NF relational models with explicit foreign key integrity constraints, cascading updates, and optimized indexes on high-frequency lookup fields.</li>
        <li><strong>ACID Transaction Management:</strong> Database transaction boundaries ensure atomic multi-item order placement, preventing partial record writes during concurrent checkouts.</li>
        <li><strong>Security & Query Parameterization:</strong> Prepared statements via PHP PDO mitigate SQL injection vulnerabilities across all dynamic data endpoints.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/DatabaseSystems" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/PedrosPizza.png",
    link: "https://github.com/CelesteGiraffe/DatabaseSystems",
    date: "2023-10-19",
    genre: "backend",
  },
  {
    title: "Network IRC Daemon & Protocol Bot",
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
      "RFC 1459/2812 compliant IRC server daemon and automated client implemented with low-level Python TCP sockets, featuring stream buffering, non-blocking I/O multiplexing, and stateful session tracking.",
    languagesUsed: {
      Python: 100,
    },
    effort: 8,
    longDescription: `
      <p>A low-level networking project implementing an Internet Relay Chat (IRC) server daemon and automated client according to RFC 1459/2812 specifications using raw TCP sockets.</p>
      <ul>
        <li><strong>Protocol Parsing:</strong> Tokenizes byte streams delimited by <code>\r\n</code>, validating command syntax and parameter structures (<code>NICK</code>, <code>USER</code>, <code>JOIN</code>, <code>PRIVMSG</code>, <code>QUIT</code>).</li>
        <li><strong>Stream Fragmentation Management:</strong> Buffers incoming TCP packets to handle message fragmentation and multi-packet payloads reliably.</li>
        <li><strong>In-Memory Routing:</strong> Manages stateful client connections, channel membership lists, and multicasts messages across active socket channels.</li>
      </ul>
      <a href="https://github.com/Achiengmnoma/NetworksIV" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/HexChat.png",
    link: "https://github.com/Achiengmnoma/NetworksIV",
    date: "2023-10-13",
    genre: "systems",
  },
  {
    title: "Rust Systems & Concurrency Sandbox",
    tags: [
      "Rust",
      "Memory Management",
      "Concurrency",
      "Systems Programming",
      "Data Structures",
      "Zero-Cost Abstractions",
    ],
    description:
      "Low-level exploration of Rust ownership mechanics, borrow checker lifetimes, zero-cost abstractions, and thread-safe multi-producer single-consumer (mpsc) message-passing concurrency.",
    languagesUsed: {
      Rust: 100,
    },
    effort: 4,
    longDescription: `
      <p>A technical sandbox focused on evaluating Rust’s compile-time memory safety guarantees, ownership semantics, and lock-free concurrency models.</p>
      <ul>
        <li><strong>Ownership & Borrowing Semantics:</strong> Practical exercises in stack versus heap layout, RAII resource destruction, and lifetime annotations without runtime garbage collection.</li>
        <li><strong>Multi-Threaded Concurrency:</strong> Implemented worker pools communicating via thread-safe <code>std::sync::mpsc</code> channels and atomic reference counting (<code>Arc&lt;Mutex&lt;T&gt;&gt;</code>).</li>
        <li><strong>Data Structure Benchmarking:</strong> Comparative memory analysis between contiguous cache-aligned buffers (<code>Vec&lt;T&gt;</code>) and heap-allocated pointer chains.</li>
      </ul>
    `,
    image: "/assets/images/RustSandbox.png",
    link: "#",
    date: "2023-10-24",
    genre: "systems",
  },
  {
    title: "Sketchsweepr: 2D Grid Engine",
    tags: [
      "C#",
      ".NET",
      "Algorithms",
      "Grid Systems",
      "Game Design",
      "UI Architecture",
    ],
    description:
      "2D matrix game engine built in C#/.NET featuring discrete cell state models, recursive flood-fill cascade revelation algorithms, and a decoupled custom UI rendering layer.",
    languagesUsed: {
      "C#": 100,
    },
    effort: 4,
    longDescription: `
      <p>Developed at the University of Dundee to explore 2D grid matrix algorithms, state mutation, and decoupled UI rendering pipelines in C# and .NET.</p>
      <ul>
        <li><strong>Grid State Representation:</strong> 2D array managing discrete cell enumerations (<code>Hidden</code>, <code>Flagged</code>, <code>Revealed</code>, <code>Mine</code>) and computing adjacent mine densities.</li>
        <li><strong>Recursive Flood-Fill Cascade:</strong> Cascade revelation algorithm traversing contiguous zero-mine cells with boundary and visited-set validation to prevent stack overflows.</li>
        <li><strong>Decoupled Presentation Layer:</strong> Separated grid mathematical rules from the presentation surface, enabling modular UI refactoring.</li>
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
      "Complete platform architectural migration from a LAMP stack to asynchronous Node.js/Express and MongoDB document storage, integrating OAuth 2.0 authentication and external REST API pipelines.",
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
      <p>A ground-up architectural rewrite of my initial movie review platform, transitioning from a relational LAMP stack to an asynchronous document-based architecture.</p>
      <ul>
        <li><strong>Stack Migration & Schema Denormalization:</strong> Migrated from MySQL relational tables to flexible MongoDB document collections, optimizing read latency for review threads and user watchlists.</li>
        <li><strong>Asynchronous Event Loop Architecture:</strong> Leveraged Node.js and Express middleware pipelines for non-blocking I/O, token-based session verification, and structured error propagation.</li>
        <li><strong>External API Aggregation:</strong> Integrated upstream REST endpoints (OMDB API, New York Times API) with response transformation and rate-limiting safeguards.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Movie-Rating-Personal-Project-v2" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/MovieRating.png",
    link: "https://github.com/CelesteGiraffe/Movie-Rating-Personal-Project-v2",
    date: "2022-04-04",
    genre: "website",
  },
  {
    title: "The Little Shop on Hallow Hill (Game Jam)",
    tags: [
      "Unity",
      "C#",
      "Game Design",
      "NPC AI",
      "Inventory Systems",
      "Rapid Prototyping",
    ],
    description:
      "Game jam prototype built in Unity/C#, featuring modular inventory data structures, dynamic NPC customer interaction state loops, and resource management mechanics.",
    languagesUsed: {
      "C#": 35,
      Unity: 65,
    },
    effort: 6,
    longDescription: `
      <p>A 48-hour Game Jam project exploring shopkeeping economy loops and NPC state behaviors within a constrained timeline.</p>
      <ul>
        <li><strong>Modular Inventory Controller:</strong> Scriptable object and event-driven inventory data model tracking item quantities, valuations, and capacity thresholds.</li>
        <li><strong>NPC Interaction Behavior:</strong> State-driven customer agents executing shopping sequences: shop entry, inventory evaluation, purchasing transactions, and dialogue triggers.</li>
        <li><strong>Prototyping Trade-offs:</strong> Rapid feature scoping and script decoupling under strict time constraints.</li>
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
    title: "Client-Side Tier List Board",
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
      "Client-side interactive ranking application built with HTML5/JavaScript, utilizing DOM drag-and-drop APIs, asynchronous image URL preloading, and dynamic board serialization.",
    languagesUsed: {
      HTML: 35,
      CSS: 10,
      JavaScript: 35,
      jQuery: 10,
      Bootstrap: 10,
    },
    effort: 4,
    longDescription: `
      <p>A client-side ranking tool engineered to eliminate server-side storage overhead by operating entirely in the browser via DOM manipulation and URL ingestion.</p>
      <ul>
        <li><strong>DOM Drag-and-Drop:</strong> Native mouse and touch event handling for dynamic re-ordering of ranking tiles across configurable tier containers.</li>
        <li><strong>Asynchronous Image Pipeline:</strong> Ingests external image URLs with error fallbacks, avoiding server uploads and preserving client bandwidth.</li>
        <li><strong>Board Serialization:</strong> Dynamic DOM generation with extensible tier categorization.</li>
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
      "Algorithm visualization tool rendering real-time execution states for comparison sorting algorithms (QuickSort, MergeSort, etc.) on HTML5 Canvas using asynchronous dispatch loops.",
    languagesUsed: {
      HTML: 45,
      CSS: 10,
      TypeScript: 45,
    },
    effort: 4,
    longDescription: `
      <p>An educational visualization tool designed to render computational complexity and memory partition behaviors of sorting algorithms in real time.</p>
      <ul>
        <li><strong>Algorithm Implementations:</strong> Models QuickSort partition invariants, MergeSort auxiliary arrays, BubbleSort, and InsertionSort.</li>
        <li><strong>Non-Blocking Render Loop:</strong> Employs asynchronous dispatch and timer intervals to decouple algorithm execution from the UI thread, ensuring continuous canvas frame rendering.</li>
        <li><strong>Step-by-Step State Inspection:</strong> Tracks active array comparisons, swaps, and sorted boundary partitions dynamically.</li>
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
      "Snapshot-based version control tool written in POSIX Bash, modeling content-addressable storage trees, staging index management, commit hashing, and delta diff calculation.",
    languagesUsed: {
      Bash: 100,
    },
    effort: 5,
    longDescription: `
      <p>A command-line version control system implemented in POSIX shell scripts to analyze the internal storage and diffing mechanics of Git.</p>
      <ul>
        <li><strong>Content-Addressable Storage:</strong> Directory-based object tree tracking file snapshots via checksum manifests and metadata logs.</li>
        <li><strong>Staging & Commit Workflows:</strong> CLI commands handling workspace status checks, staging area index updates, commit history traversal, and revision checkouts.</li>
        <li><strong>Delta Computation:</strong> Employs Unix core tools (<code>diff</code>, <code>patch</code>, <code>sed</code>) for calculating and verifying incremental file differences.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/UnixShellVCS" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/UnixShellVCS.png",
    link: "https://github.com/CelesteGiraffe/UnixShellVCS",
    date: "2023-10-13",
    genre: "tool",
  },
  {
    title: "Inventory Management Desktop Application",
    tags: ["Java", "JavaFX", "OOP", "SQL", "NetBeans", "Software Engineering"],
    description:
      "Desktop inventory management system built in Java/JavaFX applying strict object-oriented design patterns, MVC separation, and persistent relational storage.",
    languagesUsed: {
      Java: 60,
      JavaFX: 30,
      SQL: 10,
    },
    effort: 6,
    longDescription: `
      <p>A desktop application designed to demonstrate object-oriented software engineering principles, persistent data storage, and graphical user interfaces in Java.</p>
      <ul>
        <li><strong>OOP Design Patterns:</strong> Strict adherence to encapsulation, inheritance hierarchies, and polymorphism across business domain classes.</li>
        <li><strong>MVC Architecture:</strong> JavaFX UI layer decoupled from data access routines via controller interfaces.</li>
        <li><strong>Relational Persistence:</strong> Local SQL database integration handling ACID-compliant inventory record mutations.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/InventoryJavaOOP" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/JavaInv.png",
    link: "https://github.com/CelesteGiraffe/InventoryJavaOOP",
    date: "2021-11-28",
    genre: "tool",
  },
  {
    title: "Movie Rating Project 1.0 (LAMP Stack)",
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
      "Initial full-stack web application engineered on a LAMP stack (Linux, Apache, MySQL, PHP), implementing relational data persistence, session management, and CRUD pipelines.",
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
      <p>A foundational full-stack project built on a classic LAMP stack to master server-side rendering, session-based authentication, and relational database interactions.</p>
      <ul>
        <li><strong>Session Authentication:</strong> Cookie-backed session verification and user account lifecycle management.</li>
        <li><strong>Relational CRUD:</strong> Structured MySQL queries for movie ratings, user reviews, and aggregated score tallies.</li>
        <li><strong>Server Configuration:</strong> Self-managed Apache HTTP Server configuration on Linux.</li>
      </ul>
      <a href="https://github.com/CelesteGiraffe/Personal-Project-v1" target="_blank" class="btn btn-primary">Repository</a>
    `,
    image: "/assets/images/MovieRating.png",
    link: "https://github.com/CelesteGiraffe/Personal-Project-v1",
    date: "2021-09-15",
    genre: "website",
  },
  {
    title: "AlaSeason LLC: Production Client Website",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap", "Web Development"],
    description:
      "Commercial production website built for an Alabama startup, featuring responsive design, semantic HTML5 structure, and Apache web server deployment.",
    languagesUsed: {
      HTML: 40,
      CSS: 10,
      JavaScript: 20,
      Bootstrap: 30,
    },
    effort: 2,
    longDescription: `
      <p>A commercial client website developed for a local commercial cleaning business during my first year of university.</p>
      <ul>
        <li><strong>Production Deployment:</strong> Configured Apache HTTP web servers, domain DNS routing, and static asset caching.</li>
        <li><strong>Semantic HTML5 & Responsive Layouts:</strong> Cross-browser compatibility and accessible page structures.</li>
      </ul>
      <a href="https://web.archive.org/web/20230124034233/https://www.alaseasonllc.com/" target="_blank" class="btn btn-primary">Wayback Archive</a>
    `,
    image: "/assets/images/AlaSeason.png",
    link: "https://web.archive.org/web/20230124034233/https://www.alaseasonllc.com/",
    date: "2020-08-15",
    genre: "website",
  },
  {
    title: "Personal Portfolio Platform",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
      "Accessibility",
      "Inclusive Design",
    ],
    description:
      "Static single-page architecture portfolio with client-side role filtering, URL-serialized custom query generation, WCAG AA contrast compliance, and zero external runtime dependencies.",
    languagesUsed: {
      HTML: 40,
      CSS: 35,
      JavaScript: 25,
    },
    effort: 8,
    longDescription: `
      <p>This portfolio platform is built with pure HTML5, CSS3, and vanilla ECMAScript, operating without runtime frameworks or bundling overhead.</p>
      <ul>
        <li><strong>Zero-Dependency Architecture:</strong> Pure client-side execution with static hosting on GitHub Pages.</li>
        <li><strong>URL-Driven Filter State:</strong> Serialized URL query parameters for reproducible and shareable curated views.</li>
        <li><strong>Accessibility (WCAG AA):</strong> Strict color contrast ratios, keyboard navigation focus indicators, and semantic ARIA landmark hierarchy.</li>
      </ul>
    `,
    image: "/assets/images/Portfolio2.png",
    link: "https://github.com/CelesteGiraffe/CelesteGiraffe.github.io",
    date: "2024-09-20",
    genre: "website",
  },
];
