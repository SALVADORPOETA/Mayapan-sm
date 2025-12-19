# Mayapan

Mayapan is a **completely original Next.js project** exploring the rich history of the Maya culture. Every component, page, and feature in this project has been **designed and implemented from scratch**, showcasing interactive content, image modals, sliders, and user authentication using Firebase.

This website is **completely interactive** — you can click on any image to see a window with information about it. All the buttons have functions as well, like the ones in the "Cities" section where you can filter by country.

![mayapan](https://github.com/user-attachments/assets/586e3ac2-099c-46ff-9dc9-2879969e426a)

---

## 📝 Overview

Mayapan is not a template, clone, or tutorial follow-along project.

It is a **custom-designed cultural platform** that combines:

- Interactive image galleries with modal views
- Dynamic content served via APIs
- Firebase authentication with protected routes
- Responsive, mobile-first UI design
- Advanced UX features like smooth scrolling and zoom functionality

The project emphasizes **interactivity**, **visual storytelling**, and **production-ready architecture**.

---

## 🚀 Features

- ✨ **Fully responsive Next.js front-end**
- 🎨 **Interactive slider** for featured images
- 🔌 **Dynamic content** fetched from a custom API
- 🔐 **User authentication** with Firebase (Google & email/password)
- 🖼️ **Image modals** with zoom functionality
- 🧭 **Responsive navbar** with mobile menu
- 🎯 **Smooth scrolling** and other UX enhancements
- 💅 **Styled entirely with TailwindCSS**
- 🏺 **Filter functionality** for cities by country
- 🔒 **Protected routes** for authenticated users
- 📱 **Entirely original design**, code, and content

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 |
| **UI Library** | React 18 |
| **Styling** | TailwindCSS |
| **Authentication** | Firebase Authentication |
| **HTTP Client** | Axios |
| **Icons** | React Icons |
| **Scrolling** | React Scroll |
| **Deployment** | Vercel |

---

## 💻 Getting Started

### Prerequisites

- Node.js 18+
- npm
- Firebase account

### Installation

```bash
# Clone the repository
git clone https://github.com/SALVADORPOETA/Mayapan-sm.git

# Navigate into the project directory
cd Mayapan-sm

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## ⚙️ Usage

- **Navigate** through sections using the navbar
- **Explore** Mayapan's history and images via the interactive slider and modals
- **Sign in** with Firebase authentication to access protected features
- **Filter cities** by country using the interactive buttons
- **Click on images** to open detailed modal views with zoom functionality
- **Scroll** to explore text and images dynamically loaded from the API

All features, components, and styling are **originally created** for this project.

---

## 🔐 Authentication Flow

You can **sign up** using:
- Google account authentication
- Email and password (no verification required for demo purposes)

Then **sign in** with your chosen method to access the protected **Account** page.

**Note:** Since this is a personal project, email verification is not required. You can use any email and password combination for testing purposes.

---

## 📂 Project Structure

```
mayapan-sm/
├─ app/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Slider.jsx
│  │  ├─ HomeContainer.jsx
│  │  ├─ Footer.jsx
│  │  └─ ...
│  ├─ context/
│  │  └─ AuthContext.js
│  ├─ signin/
│  │  └─ page.jsx
│  ├─ signinemail/
│  │  └─ page.jsx
│  └─ signupemail/
│     └─ page.jsx
├─ public/
│  ├─ assets/
│  │  ├─ benefits/
│  │  ├─ maya1.jpg
│  │  ├─ maya2.jpg
│  │  └─ ...
│  └─ favicon.ico
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ next.config.js
└─ ...
```

---

## 🎨 UI & UX Design

- **Maya-inspired color palette:** Earth tones, jade green, terracotta, gold
- **Interactive image modals** with zoom and detailed descriptions
- **Smooth animations** for slider transitions and page navigation
- **Responsive grid layouts** for all screen sizes
- **Mobile-optimized menu** with hamburger navigation
- **Filter buttons** with visual feedback and state management
- **Accessibility features** including semantic HTML and keyboard navigation

---

## 🏺 Key Interactive Features

### Image Modals
Click on any image throughout the site to open an interactive modal with:
- High-resolution image display
- Zoom functionality
- Historical information and context
- Close/escape functionality

### Cities Filter
Browse Maya cities with dynamic filtering:
- Filter by country (Mexico, Guatemala, Honduras, Belize)
- Real-time content updates
- Visual feedback on active filters

### Protected Routes
- Account page accessible only to authenticated users
- Automatic redirection for unauthorized access
- Persistent session management

---

## 📌 Originality Statement

This project is **100% original**.

- No starter templates were used
- No UI kits were copied
- No tutorial projects were followed
- All components, layouts, API structure, and logic were independently designed and implemented

Mayapan was built as a **serious portfolio project**, intended to demonstrate real-world frontend architecture, interactive design patterns, and engineering excellence.

---

## 👤 Author

**Salvador Martínez**  
*Full-Stack Developer*

- **GitHub:** [https://github.com/SALVADORPOETA](https://github.com/SALVADORPOETA)
- **LinkedIn:** [https://www.linkedin.com/in/salvador-martinez-sm/](https://www.linkedin.com/in/salvador-martinez-sm/)

Made by **Salvador Martínez**.

---

## 🔗 Live Demo

A live version of the project is deployed and accessible at:

**[Mayapan Live Demo](#)** *(Add your deployment URL here)*

---

## 🧪 Code Quality & Standards

- Clear component responsibilities
- Predictable state handling
- Consistent naming conventions
- No autogenerated boilerplate logic
- No copy-pasted UI kits or templates
- Modern React patterns and Next.js best practices

This repository reflects **intentional design decisions**, not experimental code.

---

## 📄 License

This project is a **100% original portfolio project** by Salvador Martínez.

No commercial use intended.  
All rights reserved to the author.

---

## 💡 Notes

- All content, including historical information and images, is **original or copyright-free**
- Designed for **educational, cultural, and portfolio purposes**
- The project demonstrates Next.js capabilities, Firebase integration, and advanced interactive UI patterns

---

## 🤝 Contributing

This is a personal portfolio project and is not open for contributions at this time.

---

## 📧 Contact

For inquiries, feedback, or collaboration opportunities, please reach out via:

- **LinkedIn:** [Salvador Martínez](https://www.linkedin.com/in/salvador-martinez-sm/)
- **GitHub:** [@SALVADORPOETA](https://github.com/SALVADORPOETA)

---

## 🙏 Acknowledgments

Inspired by the fascinating history and enduring legacy of the Maya civilization.
