export const LANGUAGES = {
  en: {
    // Navbar
    about: "About",
    projectsLabel: "Projects",
    contact: "Contact",
    cv: "CV",

    // Hero
    welcome: "Hi!",
    heroName: "I'm Yiting",
    heroIntro: "Frontend Developer · UX Design Background · Nature & Creativity Enthusiast 🌿🎨",

    // About
    aboutMe: "About Me",
aboutDescription: [
  "Hi, I'm Yiting 😺🌿", 
  "A frontend developer with a background in UX design and marketing.",
  "I’m passionate about blending design and technology to create digital experiences that are both beautiful and functional.",
  "Curiosity and creativity keep me exploring, iterating, and finding joy in every build.",
  "Beyond coding, you’ll often find me outdoors, experimenting with recipes in the kitchen, or painting — hobbies that bring fresh perspectives into my work and remind me to always stay open and playful."
],
    skills: "Skills",

    // Common labels
    myWorks: "My Works",
    design: "Design",
    description: "Description",
    learnings: "Learnings",
    role: "Role",
    challenges: "Challenges",
    tech: "Technologies",
    viewLive: "View Live",
    github: "GitHub",

    // Projects details
    projects: {
      hangmanGame: {
                name: "Hangman Game",
        coverImage: `${import.meta.env.BASE_URL}hangman-case.png`,
        gifImage: `${import.meta.env.BASE_URL}hangman.mp4`,
        tech: "React, React Router DOM, CSS3, API, JavaScript ES6+, localStorage, Responsive Design",
        description: "A web-based Hangman game built with React and Vite, featuring user authentication system and responsive design. Players can create accounts and log in before playing, with an intuitive UI enhanced by custom visual elements.",
        fullDescription: {
          learnings: "Client-side authentication implementation, React state management and routing, form handling and validation, responsive design principles, and component-based architecture.",
          role: "Team Project — Responsible for user authentication system, login/registration flow",
          challenges: "Data Management: Secure localStorage implementation, user session handling, error case management. UX/UI: Form validation, error feedback, seamless navigation flow."
        },
        viewLive: "https://xositax.github.io/Hangman-Project/",
        github: "https://github.com/Yiting-zh/Hangman-Project"
      },
      genesisPortfolio: {
        name: "Genesis Portfolio",
        coverImage: `${import.meta.env.BASE_URL}genesis-case.png`,
        gifImage: `${import.meta.env.BASE_URL}genesis-portfolio.mp4`,
        tech: "HTML, CSS, SCSS, Prepros",
        description: "A portfolio website developed from a Figma design, showcasing multiple projects and contact information. Features responsive layout with home, project details, and contact pages, emphasizing clean modern design and user experience.",
        fullDescription: {
          learnings: "Deepened understanding of CSS layouts, SCSS modularity, and responsive web design, particularly mastering CSS Grid implementation. Enhanced frontend development standards and code organization skills.",
          role: "Frontend Developer",
          challenges: "Precisely translating Figma design to web while ensuring cross-screen compatibility. Mastering CSS Grid for complex photo layouts. Managing multi-page structure and style files for maintainability. Implementing detailed animations and interactions for enhanced UX."
        },
        viewLive: "https://yiting-zh.github.io/genesis-portfolio-design/",
        github: "https://github.com/Yiting-zh/genesis-portfolio-design"
      },
      portfolio: {
        name: "Yiting's Portfolio",
        coverImage: `${import.meta.env.BASE_URL}yi-case.png`,
        gifImage: `${import.meta.env.BASE_URL}yi-case.mp4`,
        tech: "React, Vite, CSS3, JavaScript ES6+, i18n (Internationalization), AOS Animation, Git, npm, ESLint, Responsive Design, Cross-browser Compatibility",
        description: "A React-based portfolio highlighting clean, responsive, and user-centric frontend development.",
        fullDescription: {
          learnings: "Mastered React components, implemented multi-language support, integrated smooth animations, and optimized performance with Vite.",
          role: "UI/UX Designer & Developer",
          challenges: "Creating seamless responsive layouts, implementing elegant animations, background animation effects, and mastering useEffect for animation and data logic. Ensuring consistent performance across different languages and devices."
        },
        github: "https://github.com/Yiting-zh/yiting-portfolio"
      },
      teyaJewelry: {
        name: "Téya Jewelry Store",
        coverImage: `${import.meta.env.BASE_URL}teya-case.png`,
        gifImage: `${import.meta.env.BASE_URL}teya-case.mp4`,
        tech: "Next.js, React, Supabase, CSS Modules, Lucide Icons, Vercel, JavaScript",
        description: "Téya Jewelry Store is a custom online jewelry shop project built with Next.js full-stack development. The site includes homepage, product categories, detail pages, cart, and checkout for a complete e-commerce flow. All images are currently placeholders and will be replaced with official client assets. The project is still in development, aiming for an elegant UI and smooth shopping experience.",
        fullDescription: {
          learnings: "Gained deep understanding of Next.js full-stack development, including frontend pages and backend data interaction. Mastered React component state management and context sync (such as CartContext). Practiced connecting frontend and backend logic for e-commerce flows. Became familiar with integrating Supabase as backend service and data management.",
          role: "UI/UX Designer & Full Stack Developer",
          challenges: "Synchronizing cart and checkout data and state management for real-time user feedback. Designing and implementing interaction logic for product cards and CartSidebar. Handling data flow and security in a full-stack architecture. Achieving a balance of beautiful UI and responsive layout for usability."
        },
        viewLive: "https://teya-jewelry-store.vercel.app/",
        github: "https://github.com/Yiting-zh/yiting-portfolio-design"
      },
      barWebsite: {
        name: "Bar website design",
        coverImage: `${import.meta.env.BASE_URL}bar141.png`,
        gifImage: `${import.meta.env.BASE_URL}bar-website.jpg`,
        tech: "HTML, CSS",
        description: "A modern, responsive website for a bar, featuring pages for home, about us, gallery, and contact. The site highlights the bar’s atmosphere, team, and services, providing visitors with an engaging and informative experience.",
        fullDescription: {
          learnings: "Gained practical experience in web layout, and user experience optimization. Improved skills in HTML, CSS, and collaborative development.",
          role: "Responsible for designing and implementing the landing page, including layout, visual style, and user interaction.",
          challenges: "Creating an appealing first impression, and integrating design elements with the overall team vision."
        },
       viewLive: "https://yiting-zh.github.io/BarWebsite/",
        github: "https://github.com/Yiting-zh/BarWebsite"
      }
    },

    // Contact
    letsConnect: "Let's Connect",
    connectMessage: "I enjoy connecting with people from all backgrounds. If you have ideas, want to collaborate, or just want to chat, my inbox is always open!",
    send: "Send Message",
    name: "Name",
    email: "Email",
    message: "Message",
    
    // Footer or others
    copyright: "All rights reserved."
  },

  zh: {
    // Navbar
    about: "关于",
    projectsLabel: "项目",
    contact: "联系",
    cv: "简历",

    // Hero
    welcome: "Hi！",
    heroName: "我是张怡婷",
    heroIntro: "用设计师的眼光创造体验，以开发者的专业实现愿景。让美学与技术相融，打造精致又实用的数字产品",

    // About
    aboutMe: "关于我",
  aboutDescription: [
    "你好，我是怡婷 😺🌿",
    "作为一名前端开发者，我还有着 UX 设计和市场营销的背景。这样的经历让我在开发时能够更好地理解用户需求，平衡技术实现与用户体验。",
    "我热衷于将设计与技术完美融合。在我的项目中，你会看到简约优雅的界面设计、流畅自然的交互体验，以及精心打磨的技术细节 ✨",
    "好奇心和创造力是我的动力。每个项目都是一次成长的机会，让我在解决挑战的过程中不断探索和突破，收获满满的成就感。",
    "休闲时间我喜欢亲近大自然、钻研美食、享受绘画时光。这些生活中的小确幸不仅平衡了工作与生活，也为我的技术创作带来了更多灵感和新鲜视角 🎨"
  ],
    skills: "技能",

    // Common labels
    myWorks: "我的作品",
    design: "设计",
    description: "描述",
    learnings: "收获",
    role: "角色",
    challenges: "挑战",
    tech: "技术栈",
    viewLive: "在线预览",
    github: "GitHub",

    // Projects details
    projects: {
      hangmanGame: {
        name: "趣味猜词游戏",
        coverImage: `${import.meta.env.BASE_URL}hangman-case.png`,
        gifImage: `${import.meta.env.BASE_URL}hangman.mp4`,
        tech: "React, React Router DOM, CSS3, API, JavaScript ES6+, localStorage, 响应式设计",
        description: "使用React和Vite构建的网页版趣味猜词游戏，具有用户认证系统和响应式设计。玩家可以创建账号并登录后开始游戏，直观的用户界面通过自定义视觉元素增强了用户体验。",
        fullDescription: {
          learnings: "实现客户端身份验证、React状态管理和路由、表单处理和验证、响应式设计原则以及基于组件的架构。",
          role: "负责身份验证系统的开发，包括登录/注册组件、本地数据持久化、用户认证流程和认证页面的响应式UI。",
          challenges: "数据管理：实现安全的localStorage存储、用户会话处理、错误情况管理。用户体验/界面：表单验证、错误反馈、流畅的导航流程。"
        },
        viewLive: "https://xositax.github.io/Hangman-Project/",
        github: "https://github.com/Yiting-zh/Hangman-Project"
      },
      genesisPortfolio: {
        name: "Genesis作品集",
        coverImage: `${import.meta.env.BASE_URL}genesis-case.png`,
        gifImage: `${import.meta.env.BASE_URL}genesis-portfolio.mp4`,
        tech: "HTML, CSS, SCSS, Prepros",
        description: "基于Figma设计稿开发的个人作品集网站，展示多个项目作品和联系方式。采用响应式布局设计，包含首页、项目详情和联系页面，整体风格简约现代，注重视觉设计和用户体验。",
        fullDescription: {
          learnings: "深入学习了CSS布局技术、SCSS模块化开发和响应式设计原则，特别是掌握了CSS Grid的实践应用。提升了前端开发规范意识和代码组织能力。",
          role: "独立项目",
          challenges: "精确还原Figma设计稿，确保跨屏幕尺寸的适配性。通过深入学习CSS Grid实现复杂的图片布局效果。优化多页面结构和样式文件的管理，提高代码可维护性。实现细节动画和交互效果以提升用户体验。"
        },
        viewLive: "https://yiting-zh.github.io/genesis-portfolio-design/",
        github: "https://github.com/Yiting-zh/genesis-portfolio-design"
      },
      portfolio: {
        name: "Yi的作品集",
        coverImage: `${import.meta.env.BASE_URL}yi-case.png`,
        gifImage: `${import.meta.env.BASE_URL}yi-case.mp4`,
        tech: "React, Vite, CSS3, JavaScript ES6+, i18n (国际化), AOS动画, Git, npm, ESLint, 响应式设计, 跨浏览器兼容",
        description: "基于React的我的个人作品集网站，展示清晰、响应式和以用户为中心的前端开发。",
        fullDescription: {
          learnings: "掌握了React组件开发，实现了多语言支持，集成了平滑动画，并使用Vite优化了性能。",
          role: "独立项目",
          challenges: "创建响应式布局，实现优雅的动画效果，尤其是背景动效的实现，以及对 useEffect 的深入运用（动画与数据逻辑）。确保在不同语言和设备上的一致性能表现。"
        },
        github: "https://github.com/Yiting-zh/yiting-portfolio"
      },
            teyaJewelry: {
        name: "Téya Jewelry Store 线上首饰店",
        coverImage: `${import.meta.env.BASE_URL}teya-case.png`,
        gifImage: `${import.meta.env.BASE_URL}teya-case.mp4`,
        tech: " Next.js, React, Supabase, JavaScript, CSS Modules, Lucide Icons, Vercel, Next/Image, Next/Link, React Context",
        description: "Téya Jewelry Store 是一个为客户定制的在线珠宝商店项目，采用 Next.js 全栈开发。项目包含首页、产品分类、详情页、购物车、结账等完整电商流程。所有图片目前仅为参考，后续将替换为客户提供的正式素材。该项目仍在开发中，旨在实现优雅的 UI 与流畅的购物体验。",
        fullDescription: {
          learnings: "理解 Next.js 的全栈开发模式，包括前端页面与后端数据交互。掌握 React 组件状态管理与上下文同步（如购物车 CartContext）。实践了电商业务流程的前端与后端逻辑串联。熟悉 Supabase 作为后端服务的集成与数据管理。",
          role: "独立全栈开发者",
          challenges: "购物车与结账流程的数据同步与状态管理，确保用户操作的实时反馈。产品卡片与购物车侧边栏（CartSidebar）的交互逻辑设计与实现。全栈架构下，前后端数据流的衔接与安全性处理。UI 设计与响应式布局，兼顾美观与易用性。"
        },
        viewLive: "https://teya-jewelry-store.vercel.app/",
        github: "https://github.com/Yiting-zh/yiting-portfolio-design"
      },
      barWebsite: {
        name: "酒吧网站设计",
        coverImage: `${import.meta.env.BASE_URL}bar141.png`,
        gifImage: `${import.meta.env.BASE_URL}bar141.png`,
        tech: "HTML, CSS",
        description: "一个现代化、响应式的酒吧网站，包含首页、关于我们、画廊和联系页面。网站突出展示了酒吧的氛围、团队和服务，为访客提供有趣且信息丰富的体验。",
        fullDescription: {
          learnings: "在网页布局、响应式设计和用户体验优化方面获得了实际经验。提升了 HTML、CSS 以及团队协作开发的技能。",
          role: "负责落地页的设计与实现，包括布局、视觉风格和用户交互。",
          challenges: "确保跨设备兼容性，打造吸引人的第一印象，并将设计元素与团队整体愿景融合。"
        },
        viewLive: "https://yiting-zh.github.io/BarWebsite/",
        github: "https://github.com/Yiting-zh/BarWebsite"
      }
    },

    // Contact
    letsConnect: "联系我",
  connectMessage: "无论你来自什么领域，如果你有项目想法、想合作，或者只是想聊聊天，随时欢迎你来联系我！",
    send: "发送信息",
    name: "姓名",
    email: "邮箱",
    message: "留言",

    // Footer or others
    copyright: "版权所有。"
  },

  sv: {
    // Navbar
    about: "Om",
    projectsLabel: "Projekt",
    contact: "Kontakt",
    cv: "CV",

    // Hero
    welcome: "Hej!",
    heroName: "Jag är Yiting",
    heroIntro: "Jag förvandlar idéer till engagerande, responsiva webbplatser — med en designers öga och en utvecklares sinne.",

    // About
    aboutMe: "Om mig",
      aboutDescription: [
        "Hej, jag heter Yiting 😺🌿",
        "Jag är en frontend-utvecklare med bakgrund inom UX-design och marknadsföring.",
        "Jag brinner för att kombinera design och teknik för att skapa digitala upplevelser som är vackra, funktionella och lite magiska ✨.",
        "Nyfikenhet och kreativitet driver mig att utforska, iterera och hitta glädje i varje bygge.",
        "Utanför kodningen hittar du mig ofta ute i naturen 🌱, i köket där jag provar nya recept 🍳, eller målande 🎨 — intressen som ger mig nya perspektiv och påminner mig om att alltid vara öppen och lekfull."
      ],
    skills: "Färdigheter",

    // Common labels
    myWorks: "Mina arbeten",
    design: "Design",
    description: "Beskrivning",
    learnings: "Lärdomar",
    role: "Roll",
    challenges: "Utmaningar",
    tech: "Tekniker",
    viewLive: "Visa Live",
    github: "GitHub",

    // Projects details
    projects: {
      hangmanGame: {
        name: "Hänga gubbe-spel",
        coverImage: `${import.meta.env.BASE_URL}hangman-case.png`,
        gifImage: `${import.meta.env.BASE_URL}hangman.mp4`,
        tech: "React, React Router DOM, CSS3, API, JavaScript ES6+, localStorage, Responsiv Design",
        description: "Ett webbaserat Hänga gubbe-spel byggt med React och Vite, med användarautentisering och responsiv design. Spelare kan skapa konton och logga in innan de spelar, med ett intuitivt användargränssnitt förbättrat av anpassade visuella element.",
        fullDescription: {
          learnings: "Implementering av klientautentisering, React-tillståndshantering och routing, formulärhantering och validering, responsiva designprinciper och komponentbaserad arkitektur.",
          role: "Ledde utvecklingen av autentiseringssystemet, inklusive inloggnings-/registreringskomponenter, lokal datapersistens, användarautentiseringsflöde och responsivt UI för auth-sidor.",
          challenges: "Datahantering: Säker localStorage-implementering, användarssessionshantering, felhantering. UX/UI: Formulärvalidering, felåterkoppling, sömlöst navigeringsflöde."
        },
        viewLive: "https://xositax.github.io/Hangman-Project/",
        github: "https://github.com/Yiting-zh/Hangman-Project"
      },
      genesisPortfolio: {
        name: "Genesis Portfolio",
        coverImage: `${import.meta.env.BASE_URL}genesis-case.png`,
        gifImage: `${import.meta.env.BASE_URL}genesis-portfolio.mp4`,
        tech: "HTML, CSS, SCSS, Prepros",
        description: "En portfoliowebbplats utvecklad från Figma-design, som visar flera projekt och kontaktinformation. Innehåller responsiv layout med hem-, projektdetalj- och kontaktsidor, med fokus på ren modern design och användarupplevelse.",
        fullDescription: {
          learnings: "Fördjupad förståelse för CSS-layouter, SCSS-modularitet och responsiv webbdesign, särskilt behärskande av CSS Grid-implementering. Förbättrade frontend-utvecklingsstandarder och kodorganiseringsförmåga.",
          role: "Soloprojekt",
          challenges: "Exakt översättning av Figma-design till webb samtidigt som kompatibilitet mellan skärmar säkerställs. Behärska CSS Grid för komplexa fotolayouter. Hantera flersidig struktur och stilfiler för underhållbarhet. Implementera detaljerade animationer och interaktioner för förbättrad användarupplevelse."
        },
        viewLive: "https://yiting-zh.github.io/genesis-portfolio-design/",
        github: "https://github.com/Yiting-zh/genesis-portfolio-design"
      },
      portfolio: {
        name: "Yitings Portfolio",
        coverImage: `${import.meta.env.BASE_URL}yi-case.png`,
        gifImage: `${import.meta.env.BASE_URL}yi-case.mp4`,
        tech: "React, Vite, CSS3, JavaScript ES6+, i18n (Internationalisering), AOS Animation, Git, npm, ESLint, Responsiv Design, Webbläsarkompatibilitet",
        description: "En React-baserad portfolio som visar ren, responsiv och användarcentrerad frontendutveckling.",
        fullDescription: {
          learnings: "Behärskade React-komponenter, implementerade flerspråksstöd, integrerade smidiga animationer och optimerade prestanda med Vite.",
          role: "Soloprojekt",
          challenges: "Skapande av sömlösa responsiva layouter, implementering av eleganta animationer och säkerställande av konsekvent prestanda över olika språk och enheter."
        },
        github: "https://github.com/Yiting-zh/yiting-portfolio"
      },
            teyaJewelry: {
        name: "Téya Jewelry Store",
        coverImage: `${import.meta.env.BASE_URL}teya-case.png`,
        gifImage: `${import.meta.env.BASE_URL}teya-case.mp4`,
        tech: "Next.js, React, Supabase, CSS Modules, Lucide Icons, Vercel, JavaScript",
        description: "Téya Jewelry Store är ett kundanpassat onlineprojekt för smycken, byggt med Next.js fullstack-utveckling. Webbplatsen innehåller startsida, produktkategorier, produktsidor, varukorg och kassa för ett komplett e-handelsflöde. Alla bilder är för närvarande platshållare och kommer att ersättas med kundens officiella material. Projektet är under utveckling och syftar till att skapa en elegant UI och smidig shoppingupplevelse.",
        fullDescription: {
          learnings: "Fördjupad förståelse för Next.js fullstack-utveckling, inklusive frontend-sidor och backend-datahantering. Behärskade React-komponenters tillståndshantering och kontextsynkronisering (t.ex. CartContext). Praktiserade kopplingen mellan frontend- och backendlogik för e-handelsflöden. Blev bekant med integration av Supabase som backendtjänst och databas.",
          role: "Solo Fullstackutvecklare",
          challenges: "Synkronisering av varukorg och kassadata samt tillståndshantering för att ge användaren direkt feedback. Design och implementation av interaktionslogik för produktkort och CartSidebar. Hantering av dataflöde och säkerhet i fullstack-arkitektur. UI-design och responsiv layout med fokus på både estetik och användarvänlighet."
        },
        viewLive: "https://teya-jewelry-store.vercel.app/",
        github: "https://github.com/Yiting-zh/yiting-portfolio-design"
      },
      barWebsite: {
        name: "Bar webbdesign",
        coverImage: `${import.meta.env.BASE_URL}bar141.png`,
        gifImage: `${import.meta.env.BASE_URL}bar-website.jpg`,
        tech: "HTML, CSS",
        description: "En modern, responsiv webbplats för en bar med sidor för hem, om oss, galleri och kontakt. Webbplatsen lyfter fram barens atmosfär, team och tjänster, och ger besökare en engagerande och informativ upplevelse.",
        fullDescription: {
          learnings: "Fick praktisk erfarenhet av webblayout, responsiv design och optimering av användarupplevelse. Förbättrade färdigheter i HTML, CSS och samarbetsutveckling.",
          role: "Ansvarig för att designa och implementera landningssidan, inklusive layout, visuell stil och användarinteraktion.",
          challenges: "Säkerställa kompatibilitet mellan olika enheter, skapa ett tilltalande första intryck och integrera designelement med teamets övergripande vision."
        },
        viewLive: "https://yiting-zh.github.io/BarWebsite/",
        github: "https://github.com/Yiting-zh/BarWebsite"
      }
    },

    // Contact
    letsConnect: "Låt oss kontakta",
  connectMessage: "Jag gillar att träffa människor med olika bakgrund. Har du idéer, vill samarbeta eller bara snacka lite? Hör av dig när som helst!",
    send: "Skicka",
    name: "Namn",
    email: "E-post",
    message: "Meddelande",

    // Footer or others
    copyright: "Alla rättigheter förbehållna."
  }
}