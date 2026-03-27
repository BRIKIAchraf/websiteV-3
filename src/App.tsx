import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Technologies from './pages/Technologies';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SearchPage from './pages/Search';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background antialiased flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
