import TopChrome from "./components/TopChrome"
import ScrollToHash from "./components/ScrollToHash"
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-ink-deep text-term-fg bg-ambient">
        <TopChrome />

        <main className="max-w-[1180px] mx-auto px-4 sm:px-7 lg:px-10 pt-6 sm:pt-10 lg:pt-12 pb-16 lg:pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>

          <footer className="mt-16 pt-6 border-t border-term-border font-mono text-sm text-term-dimmer flex flex-col sm:flex-row justify-between gap-2">
            <div>
              <span className="text-amber-accent">mohammed</span>@portfolio:~$ exit
            </div>
            <div>© {new Date().getFullYear()} Mohammed Abd Al Ati — built with React + Tailwind</div>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}
