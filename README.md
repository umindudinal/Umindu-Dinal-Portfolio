# 🚀 Umindu Dinal | Developer Portfolio

<div align="center">

  <img src="./src/assets/logo.avif" alt="Umindu Dinal Logo" width="90" height="90" style="border-radius: 50%;" />

  <h3>Full-Stack Software Engineer • Mobile & Systems Developer</h3>
  <p>Information Technology Undergraduate @ <strong>ITUM (University of Moratuwa)</strong></p>

  <p>
    <a href="https://umindudinal.github.io/Umindu_Dinal_Portfolio/"><img src="https://img.shields.io/badge/Live_Demo-Visit_Portfolio-8b5cf6?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" /></a>
    <a href="https://github.com/umindudinal/Umindu_Dinal_Portfolio"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" /></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 7" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/React_Router_7-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router 7" />
    <img src="https://img.shields.io/badge/EmailJS-FF6C37?style=flat-square&logo=mailgun&logoColor=white" alt="EmailJS" />
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License" />
  </p>

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design & User Experience](#-design--user-experience)
- [Tech Stack](#️-tech-stack)
- [Featured Projects Showcase](#-featured-projects-showcase)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Deployment](#-deployment)
- [Connect with Me](#-connect-with-me)
- [License](#-license)

---

## 📖 Overview

A sleek, high-performance personal developer portfolio engineered using **React 19**, **Tailwind CSS 4**, and **Vite 7**. Designed to present multi-disciplinary engineering projects spanning **Full-Stack Web Platforms**, **Spring Boot REST APIs**, **Flutter Mobile Applications**, **AI Computer Vision Models**, **C# .NET Desktop Software**, and **Embedded IoT Systems**.

### ✨ Highlights:
- ⚡ **Ultra-Fast Performance**: Built on Vite 7 with modular React 19 architecture.
- 🎨 **Modern Dark Aesthetics**: Custom radial glows, curated purple-pink gradient accents, and premium glassmorphic UI panels.
- 📱 **Fully Responsive**: Flawlessly optimized across mobile, tablet, laptop, and ultra-wide displays.
- 🧭 **Multi-Page Experience**: Integrated React Router 7 for dynamic project detail pages and seamless back-navigation.
- 📬 **Live Contact Integration**: Fully functional client-side EmailJS integration, one-click clipboard copying, and WhatsApp connect.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **Interactive Hero** | Dynamic typewriter role animations, animated floating capability badges, stats counter, and CV download trigger. |
| **Filtered Projects Showcase** | Filter projects by category (*Mobile Apps*, *Web Apps*, *Backend APIs*, *Desktop Software*, *Embedded & IoT*, *University Projects*). |
| **Dedicated Project Detail Pages** | Dynamic route `/project/:id` featuring full-width banners, tech badges, key features, and adjacent project pagination. |
| **Categorized Skills Matrix** | Organized by *Languages*, *Frontend & Mobile*, *Backend & APIs*, *Databases*, and *AI, Tools & GIS* with hover micro-animations. |
| **Experience & Education Timeline** | Interactive tab switcher displaying academic credentials at ITUM (University of Moratuwa) and professional milestones. |
| **Interactive Contact Form** | Real-time email dispatching via EmailJS with form feedback, copy-to-clipboard utilities, and direct messaging channels. |

---

## 🎨 Design & User Experience

- **Design System**: Tailored dark theme using `@theme` color tokens in Tailwind CSS 4.
- **Typography**: Paired **Outfit** (headings) and **Inter** (body) from Google Fonts for modern readability.
- **Glassmorphism**: Custom `.glass-panel` utilities with backdrop filters and translucent borders.
- **Micro-Animations**: Framer Motion layout transitions, spring hover effects, and smooth scroll behaviors.

---

## 🛠️ Tech Stack

### Frontend & Core
- **Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome & SimpleIcons)
- **Email Service**: [EmailJS Browser SDK](https://www.emailjs.com/)

---

## 📂 Project Structure

```bash
Umindu_Dinal_Portfolio/
├── public/                 # Static public assets
│   └── cv.pdf              # Downloadable curriculum vitae
├── src/
│   ├── assets/             # Images, optimized AVIF banners, and project datasets
│   │   ├── assets.js       # Centralized projects, skills, and experience data
│   │   └── ...             # Media files & project mockups
│   ├── components/         # Reusable presentation components
│   │   ├── About.jsx       # About bio, developer pillars & education summary
│   │   ├── Contact.jsx     # Contact form with EmailJS & social links
│   │   ├── Footer.jsx      # Bottom footer with quick navigation
│   │   ├── Hero.jsx        # Landing hero section with typewriter & stats
│   │   ├── Navbar.jsx      # Responsive navigation header with active section tracking
│   │   ├── ProjectCard.jsx # Reusable project card with hover overlay
│   │   ├── Projects.jsx    # Projects grid with category filtering
│   │   ├── ScrollToTop.jsx # Route change scroll reset handler
│   │   ├── Skills.jsx      # Interactive skill grid with categorized tabs
│   │   └── Work.jsx        # Experience and education timeline
│   ├── pages/              # Routed view pages
│   │   ├── Home.jsx        # Single-page home view aggregating sections
│   │   └── ProjectDetails.jsx # Detailed single project case-study view
│   ├── App.jsx             # Main application layout & route definitions
│   ├── index.css           # Tailwind CSS 4 theme configurations & utilities
│   └── main.jsx            # React root mount entry point
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

To run this project locally on your machine, follow these simple steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [Git](https://git-scm.com/)
- `npm` (bundled with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/umindudinal/Umindu_Dinal_Portfolio.git
   ```

2. **Navigate into the directory**
   ```bash
   cd Umindu_Dinal_Portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts the local development server with HMR |
| `npm run build` | `vite build` | Compiles an optimized production build to `/dist` |
| `npm run preview` | `vite preview` | Locally previews the production build |
| `npm run lint` | `eslint .` | Runs ESLint to check for code quality issues |
| `npm run deploy` | `gh-pages -d dist` | Builds and deploys the project to GitHub Pages |

---

## 🌟 Featured Projects Showcase

| Project | Domain | Technologies |
| :--- | :--- | :--- |
| **GuideLanka** | Smart Safari Management Platform | React 19, Flutter, Node.js, Supabase, GIS / Leaflet |
| **Ape Bass** | Home Services Marketplace App | Flutter, Dart, REST API, Firebase FCM |
| **PlantDoc AI** | AI Plant Disease Detection | Python, YOLOv8, OpenCV, Streamlit, PyTorch |
| **GateGuard ANPR** | Vehicle Security & Number Plate Recognition | YOLOv8, EasyOCR, OpenCV, MySQL, Python |
| **CareSync REST API** | Hospital Management Backend API | Spring Boot 3, Java 21, Spring Data JPA, MySQL |
| **ApexPOS** | Supermarket Inventory POS System | C# .NET, Windows Forms, MS SQL Server, Bunifu UI |
| **AgriAqua** | Automated Microcontroller Irrigation System | ATmega32, Embedded C, Proteus Simulation |

---

## 🌐 Deployment

### GitHub Pages Deployment
This repository is configured with `gh-pages` for seamless automated deployment:

```bash
npm run deploy
```

---

## 📬 Connect with Me

<div align="center">

**Umindu Dinal**  
*Undergraduate at Institute of Technology, University of Moratuwa (ITUM)*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/umindu-dinal-212688375/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/umindudinal)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/94779648818)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:umindudinal818@gmail.com)

</div>

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to explore the code for inspiration and learning.

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Umindu Dinal</strong></sub>
</div>
