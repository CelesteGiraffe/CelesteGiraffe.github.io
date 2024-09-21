export const portfolioItems = [
  {
    title: "Cordellia",
    tags: ["Unity", "C#", "Mixamo", "Blender"],
    description:
      "A Unity-based game where you guide a mushroom girl, Cordellia, through a magical world.",
    longDescription: `
      <p>Cordellia is a captivating game developed in Unity, where players control a small mushroom girl on an adventure through enchanted forests and mystical lands. The game features:</p>
      <ul>
        <li>Complex AI-driven enemies</li>
        <li>Multiple vibrant levels</li>
        <li>Stunning hand-crafted graphics</li>
        <li>Developed in C# with Mixamo animations</li>
      </ul>
      <p>This project was a deep dive into Unity game development and AI behaviour scripting.</p>
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
    tags: ["HTML", "CSS", "Bootstrap", "MySQL", "TailwindCSS"],
    description:
      "A backend system for a pizza restaurant, managing employees and orders.",
    longDescription: `
      <p>Pedro's Pizza is a backend system designed to handle employee data and customer orders for a pizza restaurant. Key features include:</p>
      <ul>
        <li>PHP-based backend with MySQL database integration</li>
        <li>CRUD operations for employee and order management</li>
        <li>User-friendly interface developed with Bootstrap and TailwindCSS</li>
      </ul>
      <p>This project helped refine my backend development skills, particularly in database management and PHP integration.</p>
    `,
    image: "/assets/images/PedrosPizza.png",
    link: "https://github.com/CelesteGiraffe/DatabaseSystems",
    date: "2023-10-19",
    genre: "website",
  },
  {
    title: "Manchester Baby Emulator",
    tags: ["C++", "Assembly"],
    description:
      "A C++ and Assembly-based emulator replicating the functionality of the Manchester Baby computer.",
    longDescription: `
      <p>This emulator recreates the functionality of the Manchester Baby, the world's first stored-program computer. Features include:</p>
      <ul>
        <li>Simulated machine code execution</li>
        <li>Memory and accumulator display</li>
        <li>Developed using C++ and Assembly for low-level programming practice</li>
      </ul>
      <p>This project allowed me to explore early computing architecture and delve into low-level programming techniques.</p>
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
      "A personal tool to create and share tierlists with friends, inspired by Discord chats.",
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
    tags: ["Linux Shell"],
    description:
      "A version control system developed to understand its internal workings and the Linux shell.",
    longDescription: `
      <p>This project is a Linux-based version control system developed as part of a school assignment. Key concepts explored:</p>
      <ul>
        <li>Commit and version tracking</li>
        <li>Branching and merging</li>
        <li>Command-line interface for version control operations</li>
      </ul>
      <p>It offered insight into how version control systems operate under the hood.</p>
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
      <p>This project demonstrates how to programmatically interact with an IRC chatroom using Python. It includes a chatbot with the following features:</p>
      <ul>
        <li>Real-time interaction with users via IRC protocol</li>
        <li>Automated responses, jokes, and commands</li>
        <li>Socket-based communication for networking practice</li>
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
      "A tool to visualise and understand sorting algorithms through interactive visuals.",
    longDescription: `
      <p>This tool provides an interactive way to visualise sorting algorithms. Features include:</p>
      <ul>
        <li>Visualisation of various sorting algorithms like QuickSort, MergeSort, etc.</li>
        <li>Comparison of algorithm time complexity</li>
        <li>Built using JavaScript and TypeScript for dynamic visualisation</li>
      </ul>
      <p>This project helped me understand sorting algorithms and their visual representation.</p>
      <a href="/SortingAlgoVisualizer/sort.html" target="_blank" class="btn btn-primary">Try It Out</a>
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
    tags: ["C#", "Unity"],
    description:
      "A game where you run a Halloween-themed shop and defend the town from human threats.",
    longDescription: `
      <p>Little Shop on Hallow Hill is a GameJam project where you play as a shopkeeper in a Halloween town, selling items to protect the town from humans. Key features:</p>
      <ul>
        <li>Shop management mechanics with item selling</li>
        <li>Defence against human invaders</li>
        <li>Spooky Halloween theme developed in Unity with C#</li>
      </ul>
      <p>This project allowed me to explore creative storytelling and resource management game mechanics.</p>
    `,
    image: "/assets/images/TLSoHH.png",
    link: "https://github.com/CelesteGiraffe/Shopkeep",
    date: "2024-09-07",
    genre: "game",
  },
  {
    title: "Techsavvy",
    tags: ["Python", "Flask", "MySql", "HTML", "CSS", "Bootstrap"],
    description:
      "A capstone project website providing a space for women in STEM, built using Flask and MySQL.",
    longDescription: `
      <p>Techsavvy is my university capstone project, aimed at creating a platform for women in STEM. The site includes:</p>
      <ul>
        <li>User registration and login system</li>
        <li>Discussion forums and resources for women in tech</li>
        <li>Developed using Python, Flask, MySQL, and Bootstrap</li>
      </ul>
      <p>This project showcases my full-stack development skills and my passion for promoting diversity in tech.</p>
    `,
    image: "/assets/images/TechSavvy.png",
    link: "https://github.com/maddisonstockton/TechSavvy",
    date: "2024-09-01",
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
