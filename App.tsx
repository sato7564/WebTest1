import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BeginnerPage from './pages/BeginnerPage';
import ClassesPage from './pages/ClassesPage';
import PricingPage from './pages/PricingPage';
import AccessPage from './pages/AccessPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={
              <div>
                <Navigation />
                <AboutPage />
              </div>
            } />
            <Route path="/beginner" element={
              <div>
                <Navigation />
                <BeginnerPage />
              </div>
            } />
            <Route path="/classes" element={
              <div>
                <Navigation />
                <ClassesPage />
              </div>
            } />
            <Route path="/pricing" element={
              <div>
                <Navigation />
                <PricingPage />
              </div>
            } />
            <Route path="/access" element={
              <div>
                <Navigation />
                <AccessPage />
              </div>
            } />
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}