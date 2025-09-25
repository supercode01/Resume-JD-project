// src/blogs/blogData.js

// ✅ Ye tumhara "fake DB" hai — real world me ye data API se aata hai.
// Abhi ke liye array of objects me proper blog meta + full content rakhenge.

const blogPosts = [
  {
    id: 1,
    slug: "learn-react-the-right-way",
    title: "Learn React the Right Way (2025 Guide)",
    desc: "A practical, beginner-friendly roadmap to mastering React with modern patterns.",
    image: "/images/react.png",
    content: `
React ko sahi tarike se seekhne ke liye 3 cheezen zaroori hoti hain: JavaScript fundamentals, component thinking, aur practice.

 (1) Prerequisites
- ES6 (let/const, arrow functions, destructuring)
- Array methods (map, filter, reduce)
- Modules (import/export)

(2) Project Setup (Vite)
Vite se fast project banta hai:
  npm create vite@latest my-app -- --template react
  cd my-app
  npm install
  npm run dev

 (3) Core Concepts
- Components: UI ko chhote reusable parts me todo.
- Props: Parent → Child data pass.
- State: Component ka internal data (useState).
- Effects: Side effects (useEffect).

 (4) Folder Structure
src/
  components/   // reusable UI
  pages/        // route-based pages
  hooks/        // custom hooks
  libs/         // helper utilities
  styles/       // Tailwind or CSS

 (5) Practice Ideas
- Counter, Todo, Search filter
- API se data fetch karke list + detail page

 (6) Next Steps
- React Router
- Server State (TanStack Query)
- Forms (React Hook Form)
- Styling (Tailwind)
    `,
  },
  {
    id: 2,
    slug: "tailwind-css-for-developers",
    title: "Tailwind CSS for Developers — Build UI Faster",
    desc: "Utility-first classes, responsive design, and production-ready builds with Tailwind.",
    image: "/images/tailwind.png",
    content: `
Tailwind ek utility-first CSS framework hai jisse tum bina custom CSS likhe fast UI bana sakte ho.

- Utilities: flex, grid, p-4, text-lg, bg-blue-600
- Responsive: sm:, md:, lg: prefixes
- Dark Mode: 'dark:' variants
- Production: Purge (JIT) se CSS bundle small rehta hai

Tip: Reusable components ke liye apni UI patterns banate jao.
    `,
  },
  {
    id: 3,
    slug: "deploy-to-netlify",
    title: "Deploy Your React App to Netlify (Step-by-Step)",
    desc: "From local build to live site — the simplest Netlify flow.",
    image: "/images/netlify.png",
    content: `
Netlify par deploy karna bohot simple hai.

 Option A: Git Integration
- Repo GitHub par push karo
- Netlify par 'New site from Git' → repo select → build command: npm run build, publish directory: dist (Vite) ya build (CRA)

 Option B: Manual Deploy
- npm run build
- Netlify Dashboard → Deploys → Drag & drop your build folder

Pro tip: Environment variables (ENV) ko Netlify me "Site settings → Environment variables" me set karo.
    `,
  },
];

export default blogPosts;
