import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { KitchensPage } from './pages/KitchensPage';
import { DoorsPage } from './pages/DoorsPage';
import { FurniturePage } from './pages/FurniturePage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProcessPage } from './pages/ProcessPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preview_page.html" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/kitchens" element={<KitchensPage />} />
            <Route path="/doors" element={<DoorsPage />} />
            <Route path="/furniture" element={<FurniturePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
