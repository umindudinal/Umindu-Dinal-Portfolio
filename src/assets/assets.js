import { 
  FaLightbulb, 
  FaPaintBrush, 
  FaCode, 
  FaReact, 
  FaServer, 
  FaMobileAlt, 
  FaTools, 
  FaDatabase, 
  FaCloud,
  FaShieldAlt,
  FaGraduationCap,
  FaRocket,
  FaLayerGroup
} from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import aboutProfile from '../assets/aboutprofile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import projectImg7 from '../assets/project7.avif';
import projectImg8 from '../assets/project8.avif';
import projectImg9 from '../assets/project9.avif';
import logo from '../assets/logo.avif';
 
export const assets = {
  profileImg,
  aboutProfile,
  logo,
};



export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'AI & Computer Vision',
    description: 'Building AI plant disease detection and ANPR vehicle security systems using YOLOv8, OpenCV & TensorFlow.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Frontend & Mobile Apps',
    description: 'Designing responsive web & mobile applications using React 19, Flutter, and Tailwind CSS 4.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Backend APIs & Databases',
    description: 'Engineering RESTful APIs and database backends using Spring Boot 3, Java 21, Node.js & MySQL.',
    color: 'text-blue'
  },
  {
    icon: FaShieldAlt,
    title: 'Desktop & Embedded Systems',
    description: 'Developing C# .NET desktop applications and ATmega32 microcontroller embedded automation.',
    color: 'text-emerald'
  }
];

export const skills = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    description: 'Core languages used for building web apps, backends, mobile apps, and embedded systems.',
    tags: ['Java 21', 'Python', 'C#', 'JavaScript', 'Dart', 'Embedded C', 'PHP', 'SQL']
  },
  {
    title: 'Frontend & Mobile',
    icon: FaReact,
    description: 'Crafting responsive user interfaces, mobile applications, and dynamic web portals.',
    tags: ['React 19', 'Flutter', 'Tailwind CSS 4', 'Framer Motion', 'HTML5/CSS3', 'Vite 7']
  },
  {
    title: 'Backend & Frameworks',
    icon: FaServer,
    description: 'Engineering robust RESTful APIs, business logic layers, and server-side microservices.',
    tags: ['Spring Boot 3', 'Node.js & Express', 'RESTful APIs', 'JWT Auth', 'Firebase FCM', '.NET Framework']
  },
  {
    title: 'Databases & Storage',
    icon: FaDatabase,
    description: 'Designing, querying, and optimizing relational data structures and persistence layers.',
    tags: ['PostgreSQL', 'Supabase', 'MySQL', 'Microsoft SQL Server', 'SQLite', 'MongoDB']
  },
  {
    title: 'AI, Tools & GIS',
    icon: FaTools,
    description: 'Computer vision detection models, OCR, GIS mapping, API testing, and embedded microcontrollers.',
    tags: ['Leaflet & GIS', 'YOLOv8', 'OpenCV & EasyOCR', 'TensorFlow / Keras', 'Postman', 'Streamlit', 'ATmega32', 'Git & GitHub']
  }
];

export const projectCategories = [
  { id: 'Mobile Application', label: 'Mobile Apps' },
  { id: 'Web Application', label: 'Web Apps' },
  { id: 'Backend API', label: 'Backend APIs' },
  { id: 'Desktop Application', label: 'Desktop Software' },
  { id: 'Embedded & IoT', label: 'Embedded & IoT' },
  { id: 'University Project', label: 'University Projects' }
];

export const projects = [
  {
    id: "guide-lanka",
    title: "Smart Wildlife Safari Management System (GuideLanka)",
    description: "A university project that develops a smart wildlife safari management platform connecting tourists, safari drivers, and park authorities through digital bookings, real-time GPS tracking, wildlife reporting, route optimization, and emergency response features.",
    longDescription: "GuideLanka is a university project developed as a smart wildlife safari management system for modernizing safari operations in Sri Lanka. The platform connects three main user groups: Tourists, Safari Drivers, and Park Authorities through a unified digital ecosystem. The system consists of a Tourist Web Application, Driver Mobile Application, and Authority Administrative Dashboard. Tourists can explore wildlife information, discover verified safari drivers, book safari vehicles, view wildlife sightings, and communicate with drivers. Drivers can manage bookings, navigate safari routes using real-time GPS tracking, record wildlife sightings with GPS coordinates, communicate with tourists, and send emergency SOS alerts. Park authorities can monitor live safari operations through a GIS-based administrative dashboard, track active safari jeeps, manage driver information, monitor wildlife sightings, handle emergency incidents, manage restricted zones, and analyze tourist and operational data. The project uses a Node.js and Express REST API with Supabase PostgreSQL, JWT-based authentication, Leaflet/OpenStreetMap for GIS mapping, and notification services.",
    image: projectImg9,
    tech: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "JWT",
      "Leaflet",
      "React-Leaflet",
      "OpenStreetMap",
      "OneSignal",
      "NotifyLK",
      "Nodemailer"
    ],
    category: ["University Project"],
    displayCategory: "University Project",
    role: "Full-Stack Developer",
    duration: "2026",
    features: [
      "Multi-platform system for Tourists, Drivers, and Park Authorities",
      "Tourist web application for safari discovery and booking",
      "Verified safari driver directory with profiles and reviews",
      "Safari vehicle booking and booking management",
      "Driver mobile application for safari operations",
      "Real-time GPS location tracking",
      "S2R intelligent safari route optimization",
      "GPS-based wildlife sighting reporting",
      "Live wildlife sighting monitoring",
      "Authority GIS dashboard with interactive maps",
      "Active safari jeep monitoring",
      "Driver verification and management",
      "Geofence and restricted-zone monitoring",
      "Emergency SOS alerts with vehicle location",
      "Tourist-driver communication",
      "Tourist analytics and reports",
      "Revenue and operational tracking",
      "JWT-based role-based authentication",
      "OTP-based authentication and verification",
      "Push and email notifications",
      "Supabase PostgreSQL database and storage",
      "Leaflet and OpenStreetMap GIS integration",
      "Responsive modern user interfaces"
    ],
    highlights: "Developed as a university project to create a complete digital ecosystem for wildlife safari management in Sri Lanka. The system integrates a Tourist Web Application, Driver Mobile Application, and Authority Dashboard using React, Flutter, Node.js, Express, Supabase, GIS mapping, GPS tracking, and intelligent route optimization. Key capabilities include safari booking, real-time vehicle tracking, wildlife sighting reporting, S2R route optimization, geofencing, emergency SOS alerts, driver verification, communication, analytics, and operational monitoring.",
    demo: "https://guide-lanka-tourist.vercel.app/",
    code: "https://github.com/umindudinal/GuideLanka-System.git"
  },
  {
    id: "ape-bass",
    title: "Home Services Marketplace Mobile App (Ape Bass)",
    description: "A full-featured mobile marketplace that connects customers with skilled home service providers, enabling service discovery, bookings, job management, messaging, reviews, and provider profiles.",
    longDescription: "Ape Bass is a Sri Lankan home services marketplace mobile application built with Flutter to connect customers with skilled service providers such as electricians, plumbers, carpenters, and other home-service professionals. The platform provides dedicated experiences for both Customers and Service Providers. Customers can explore service categories, discover providers, view profiles and ratings, submit service requests, manage bookings, communicate through in-app messaging, and leave reviews. Service Providers can complete professional onboarding, submit verification details, manage incoming job requests, accept and complete jobs, and maintain their profiles and portfolios. The application integrates with a RESTful backend API for core platform functionality, Firebase Cloud Messaging for push notifications, and SharedPreferences for local session and user data management.",
    image: projectImg2,
    tech: [
      "Flutter",
      "Dart",
      "REST API",
      "Firebase Cloud Messaging",
      "SharedPreferences",
      "Google Fonts",
      "Image Picker",
      "Image Cropper"
    ],
    category: ["Mobile Application"],
    displayCategory: "Mobile App",
    role: "Mobile App Developer",
    duration: "2026",
    features: [
      "Dual-role system for Customers and Service Providers",
      "Secure registration and login",
      "Provider onboarding and verification",
      "Service category browsing and provider discovery",
      "Provider profiles with ratings and portfolios",
      "Online service booking and request management",
      "Customer booking history and tracking",
      "Provider dashboard and job management",
      "In-app customer-provider messaging",
      "Reviews and rating system",
      "Provider profile and portfolio management",
      "Firebase push notifications",
      "Persistent user sessions",
      "Modern and responsive Flutter UI"
    ],
    highlights: "Designed and developed a complete two-sided home services marketplace mobile application using Flutter and Dart, integrating REST APIs, role-based customer and provider workflows, service discovery, booking management, job tracking, in-app messaging, reviews, provider verification, portfolio management, and Firebase push notifications.",
    demo: "https://ape-bass-portfolio.vercel.app/",
    code: ""
  },
  {
    id: "agricare-lk",
    title: "AI Plant Disease Detection App (AgriCare LK)",
    description: "An AI-powered mobile application that helps Sri Lankan farmers identify plant diseases from images and provides localized Sinhala treatment recommendations.",
    longDescription: "AgriCare LK is a full-stack AI-powered mobile application designed to help Sri Lankan farmers quickly identify plant diseases using image-based diagnosis. The application allows users to capture or upload photos of affected plants and uses trained TensorFlow/Keras deep learning models to predict diseases in Tomato, Chili, and Brinjal crops. The system combines AI predictions with a SQL Server database to provide Sinhala-language symptoms, treatment recommendations, and agricultural guidance through an easy-to-use Flutter mobile interface.",
    image: projectImg1,
    tech: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Microsoft SQL Server"
    ],
    category: ["Mobile Application"],
    displayCategory: "Mobile App",
    role: "Full-Stack Developer",
    duration: "2026",
    features: [
      "AI-powered plant disease detection from captured or uploaded images",
      "Disease classification for Tomato, Chili, and Brinjal crops",
      "Confidence score for AI-based disease predictions",
      "Sinhala-language symptoms and treatment recommendations",
      "Agricultural tips and disease information for farmers",
      "REST API connecting the Flutter app, AI models, and database",
      "SQL Server database for disease and treatment information",
      "Modern and user-friendly Flutter mobile interface"
    ],
    highlights: "Developed a complete AI-powered agriculture solution by integrating Flutter, Node.js, Python, TensorFlow/Keras, and SQL Server to provide image-based plant disease detection and localized Sinhala treatment guidance for Sri Lankan farmers.",
    demo: "",
    code: "https://github.com/umindudinal/AgriCare-LK.git"
  },
  {
    id: "automated-gate-anpr",
    title: "Automated Gate ANPR Security & Access Control System",
    description: "An AI-powered automated gate security system that detects vehicles, recognizes Sri Lankan license plates, and manages entry and exit events using computer vision and OCR.",
    longDescription: "The Automated Gate ANPR Security & Access Control System is an end-to-end computer vision solution designed to automate vehicle identification and gate access management. The system uses YOLOv8 for real-time vehicle and license plate detection, EasyOCR for number plate recognition, and specialized processing for Sri Lankan license plate formats. It automatically identifies vehicle entry and exit based on yellow rear and white front plates, records access events, tracks active sessions, and provides both a desktop monitoring interface and a web-based dashboard.",
    image: projectImg3,
    tech: [
      "Python",
      "YOLOv8",
      "EasyOCR",
      "OpenCV",
      "CustomTkinter",
      "Streamlit",
      "MySQL",
      "SQLite",
      "Pandas",
      "NumPy"
    ],
    category: ["Desktop Application"],
    displayCategory: "Security System",
    role: "AI / Full-Stack Developer",
    duration: "2026",
    features: [
      "Real-time vehicle and license plate detection using YOLOv8",
      "Automatic license plate recognition using EasyOCR",
      "Sri Lankan license plate format validation and OCR error correction",
      "Automatic entry and exit detection using plate color analysis",
      "Smart voting and cooldown system to reduce incorrect and duplicate detections",
      "Vehicle type classification including cars, vans, bikes, buses, and trucks",
      "Live vehicle session tracking with stay duration calculation",
      "MySQL, SQLite, and CSV-based event logging",
      "Desktop monitoring interface built with CustomTkinter",
      "Web-based monitoring dashboard built with Streamlit",
      "Timestamped license plate snapshots for audit and manual verification"
    ],
    highlights: "Built an intelligent ANPR-based security solution that combines YOLOv8, EasyOCR, OpenCV, and database logging to automate vehicle identification, entry/exit tracking, and gate security management for Sri Lankan environments.",
    demo: "",
    code: "https://github.com/umindudinal/Automated-Gate-ANPR-Security-Access-Control-System.git"
  },
  {
    id: "ecommerce-backend",
    title: "E-Commerce Backend System",
    description: "A RESTful e-commerce backend API built with Spring Boot, providing user management, product management, shopping cart functionality, and order checkout using MySQL.",
    longDescription: "The E-Commerce Backend System is a scalable RESTful API developed with Spring Boot for managing the core backend operations of an online shopping platform. The system provides APIs for user management, product catalog management, shopping carts, and order processing. It follows a layered architecture using Controllers, Services, Repositories, and Models, with Spring Data JPA and Hibernate handling database operations. The application also includes request validation, custom exception handling, stock tracking, cart management, and order checkout functionality.",
    image: projectImg4,
    tech: [
      "Java 21",
      "Spring Boot 3",
      "Spring Web",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Maven",
      "Lombok"
    ],
    category: ["Backend API"],
    displayCategory: "Backend REST API",
    role: "Backend Developer",
    duration: "2025",
    features: [
      "RESTful API for complete e-commerce backend operations",
      "User account creation, retrieval, and deletion with email validation",
      "Product management with stock quantity tracking",
      "Shopping cart management with add, view, and remove operations",
      "Order checkout system with automatic order and order-item creation",
      "Order history retrieval for users",
      "Request validation using Spring Validation",
      "Custom exception handling for missing resources",
      "Layered architecture using Controller, Service, Repository, and Model layers",
      "MySQL database integration using Spring Data JPA and Hibernate",
      "Automatic database table creation and updates with Hibernate"
    ],
    highlights: "Designed and developed a complete e-commerce backend using Spring Boot 3, Java 21, Spring Data JPA, and MySQL, implementing RESTful APIs, business logic, database relationships, validation, cart management, and order processing.",
    demo: "",
    code: "https://github.com/umindudinal/E-Commerce-Backend-System-using-Spring-Boot.git"
  },
  {
    id: "library-management-system",
    title: "Library Management System (Sarasavi Library System)",
    description: "A Windows desktop library management application built with C# Windows Forms and SQL Server for managing books, users, loans, returns, reservations, and catalogue inquiries.",
    longDescription: "Sarasavi Library System is a desktop-based Library Management System designed to digitize and streamline day-to-day library operations. The application provides a secure login system and a centralized dashboard for managing book registration, user registration, book loans, returns, reservations, and catalogue inquiries. Built with C# Windows Forms and SQL Server Express, the system uses ADO.NET for database communication and implements business rules such as loan limits, reference-copy restrictions, automatic return dates, reservation handling, and automated book and user number generation.",
    image: projectImg5,
    tech: [
      "C#",
      ".NET Framework 4.7.2",
      "Windows Forms",
      "SQL Server Express",
      "ADO.NET",
      "Visual Studio 2022"
    ],
    category: ["Desktop Application"],
    displayCategory: "Desktop App",
    role: "Full-Stack Developer",
    duration: "2025",
    features: [
      "Secure username and password authentication",
      "Centralized dashboard for accessing all library modules",
      "Book registration with automatic book number generation",
      "Book copy management with Borrowable and Reference classifications",
      "Member and visitor registration with automatic user number generation",
      "Book loan management with automatic 14-day return period",
      "Book return processing with reservation alerts",
      "Book reservation system for registered members",
      "Catalogue search by book number, title, or author",
      "Real-time availability status including Available, On Loan, and Reserved",
      "SQL Server database integration using ADO.NET",
      "Business-rule validation for borrowing and reservation operations"
    ],
    highlights: "Designed and developed a complete desktop-based library management solution using C# Windows Forms and SQL Server, implementing secure authentication, book and user management, loan and return workflows, reservations, catalogue search, and database-driven business logic.",
    demo: "",
    code: "https://github.com/umindudinal/Library-Management-System-using-C-Sharp.git"
  },
  {
    id: "student-event-management",
    title: "ITUM Student Event Management System",
    description: "A full-stack web application that enables ITUM students to discover and register for campus events while providing administrators with tools to manage events, users, and registrations.",
    longDescription: "The ITUM Student Event Management System is a web-based platform developed to simplify the management of university events and student registrations. Students can create accounts, browse upcoming events, view event details, and register using unique event codes. Administrators have access to a role-based dashboard where they can create, update, and delete events, upload event images, manage student accounts, and monitor all event registrations. The system uses PHP sessions and prepared statements for backend processing with MySQL as the database.",
    image: projectImg6,
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Font Awesome",
      "XAMPP"
    ],
    category: ["Web Application"],
    displayCategory: "Web App",
    role: "Full-Stack Developer",
    duration: "2025",
    features: [
      "Student registration and session-based login system",
      "Browse upcoming and available campus events",
      "Event registration using unique event codes",
      "Duplicate event registration prevention",
      "Personal student profile management",
      "Role-based admin dashboard",
      "Create, edit, and delete events",
      "Event image upload and management",
      "Student and admin user management",
      "View and manage all event registrations",
      "Responsive user interface for different screen sizes",
      "MySQL database with structured event, user, and registration tables",
      "Secure password hashing and prepared SQL statements"
    ],
    highlights: "Designed and developed a complete university event management platform with student authentication, event registration, role-based administration, image management, and MySQL database integration using PHP, JavaScript, HTML5, and CSS3.",
    demo: "",
    code: "https://github.com/umindudinal/Student-Event-Management-System-ITUM.git"
  },
  {
    id: "smart-home-automation",
    title: "Smart Home Automation System",
    description: "An embedded smart home automation system built with an ATmega32 microcontroller that automatically controls temperature, lighting, and gas safety using real-time sensor data.",
    longDescription: "Smart Home Automation System is an embedded automation project developed using Embedded C and an ATmega32 AVR microcontroller. The system continuously monitors temperature, ambient light, and smoke/gas levels through analog sensors and automatically controls a fan, heater, lamp, and safety buzzer according to predefined conditions. A 16x2 LCD provides real-time temperature and system-status feedback, while the complete circuit can be designed and tested using Proteus simulation before physical deployment.",
    image: projectImg7,
    tech: [
      "Embedded C",
      "ATmega32",
      "AVR-GCC",
      "Atmel Studio 7",
      "Proteus Design Suite",
      "ADC",
      "LDR Sensor",
      "Smoke/Gas Sensor",
      "Relay Module",
      "16x2 LCD"
    ],
    category: ["Embedded & IoT"],
    displayCategory: "IoT & Embedded System",
    role: "Embedded Systems Developer",
    duration: "2026",
    features: [
      "Automatic temperature monitoring and control",
      "Fan activation when temperature exceeds the defined threshold",
      "Automatic heater control for low-temperature conditions",
      "LDR-based automatic lighting control",
      "Real-time smoke and gas detection with safety alarm",
      "Live temperature and system-status display on a 16x2 LCD",
      "ADC-based analog sensor data acquisition",
      "Four relay-controlled outputs for heater, fan, lamp, and buzzer",
      "Fully autonomous control loop without manual intervention",
      "Complete Proteus circuit simulation for testing and validation",
      "Configurable temperature, light, and smoke threshold values"
    ],
    highlights: "Designed and developed an autonomous embedded home automation controller using ATmega32 and Embedded C, integrating temperature, light, and gas sensors with relay-controlled appliances and real-time LCD monitoring.",
    demo: "",
    code: "https://github.com/umindudinal/Smart-Home-Automation-System.git"
  },
  {
    id: "go-ceylon",
    title: "Tourist Web Application (GoCeylon)",
    description: "A modern and responsive Sri Lanka tourism web application that helps travelers explore destinations, tour packages, and travel services through an engaging and user-friendly interface.",
    longDescription: "GoCeylon is a modern front-end tourism platform designed to showcase the beauty of Sri Lanka and help travelers discover popular destinations, curated tour packages, and travel services. The application features an immersive hero section, destination highlights, detailed tour packages, trust-building features, smooth navigation, and scroll-based animations. Built with React 19, Tailwind CSS 4, and Vite, the application delivers a fast, responsive, and visually engaging experience across desktop and mobile devices.",
    image: projectImg8,
    tech: [
      "JavaScript",
      "React 19",
      "Tailwind CSS 4",
      "Vite 7",
      "AOS",
      "React Icons",
      "React Router DOM 7",
      "React Scroll",
      "GitHub Pages"
    ],
    category: ["Web Application"],
    displayCategory: "Web App",
    role: "Frontend Developer",
    duration: "2025",
    features: [
      "Full-screen hero section with travel-focused call-to-action",
      "Popular Sri Lankan destinations including Sigiriya, Kandy, Ella, Yala, and Mirissa",
      "Curated tour packages with duration, group size, pricing, and descriptions",
      "Responsive mobile-friendly navigation with hamburger menu",
      "Smooth scrolling navigation between website sections",
      "Scroll-triggered animations using AOS",
      "Professional local guides, certified agency, and 24/7 support highlights",
      "Modern responsive UI built with Tailwind CSS 4",
      "Component-based architecture using React",
      "Fast development and production builds using Vite",
      "Deployed and hosted using GitHub Pages"
    ],
    highlights: "Designed and developed a modern Sri Lankan tourism experience using React 19 and Tailwind CSS 4, combining responsive UI, destination discovery, tour packages, smooth navigation, and engaging scroll animations.",
    demo: "https://umindudinal.github.io/GoCeylon/",
    code: "https://github.com/umindudinal/GoCeylon.git"
  }
];

export const workData = [
  {
    role: "NDT in Information Technology",
    company: "Institute of Technology University of Moratuwa (ITUM)",
    duration: "2025 - Present",
    category: "Education",
    location: "Diyagama, Sri Lanka",
    description: "Specializing in Software Engineering, Web Architecture, Database Systems, Computer Vision, and Embedded Systems.",
    achievements: [
      "Comprehensive coursework in Data Structures, Algorithms, OOP (Java & C#), Relational Databases, and Microcontroller Systems",
      "Hands-on full-stack web development, mobile applications, AI computer vision modeling, and embedded hardware simulation"
    ],
    skills: ["Java", "C#", "Python", "SQL", "Software Engineering", "Embedded Systems"],
    color: "purple"
  },
  {
    role: "AI & Full-Stack Mobile & Web Developer",
    company: "Freelance & Independent Engineering Projects",
    duration: "2025 - Present",
    category: "Experience",
    location: "Remote / Independent",
    description: "Architecting intelligent mobile & web applications, deep learning computer vision systems, and modern user interfaces.",
    achievements: [
      "Engineered Ape Bass (Home Services Marketplace Mobile App) using Flutter, Dart, REST APIs, and Firebase Cloud Messaging",
      "Engineered AgriCare LK (AI Plant Disease Detection Mobile App) using Flutter, Node.js, TensorFlow, and SQL Server",
      "Developed Automated Gate ANPR Security System using YOLOv8, EasyOCR, OpenCV, Streamlit, and CustomTkinter",
      "Built GoCeylon Tourism Web Application using React 19, Tailwind CSS 4, and Vite"
    ],
    skills: ["Flutter", "Dart", "Firebase", "Python", "React 19", "YOLOv8", "TensorFlow", "OpenCV", "Node.js"],
    color: "pink"
  },
  {
    role: "Backend & Systems Software Developer",
    company: "Academic & Systems Development Projects",
    duration: "2024 - 2025",
    category: "Experience",
    location: "University & Independent Projects",
    description: "Developing scalable RESTful APIs, relational database systems, desktop management software, and embedded automation controllers.",
    achievements: [
      "Designed E-Commerce Backend REST API utilizing Java 21, Spring Boot 3, Spring Data JPA, and MySQL",
      "Built Sarasavi Library Management Desktop System using C# Windows Forms and SQL Server",
      "Engineered ITUM Student Event Management Web Platform using PHP, JavaScript, and MySQL",
      "Designed ATmega32 Smart Home Automation System using Embedded C and Proteus circuit simulation"
    ],
    skills: ["Spring Boot 3", "Java 21", "C# .NET", "PHP", "MySQL", "SQL Server", "Embedded C"],
    color: "blue"
  }
];

export const heroStats = [
  { 
    label: 'Projects Built', 
    value: `${projects.length}+`, 
    icon: FaRocket 
  },
  { 
    label: 'Technologies', 
    value: `${new Set([...skills.flatMap(s => s.tags), ...projects.flatMap(p => p.tech || [])]).size}+`, 
    icon: FaCode 
  },
  { 
    label: 'Education', 
    value: 'ITUM', 
    icon: FaGraduationCap 
  },
  { 
    label: 'Code Quality', 
    value: '100%', 
    icon: FaShieldAlt 
  },
];
