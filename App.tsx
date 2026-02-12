
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Solutions from './components/Solutions';
import BackToTop from './components/BackToTop';

export type Page = 'home' | 'about' | 'services' | 'solutions' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle hash changes for internal section linking or page switching
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'about', 'services', 'solutions', 'contact'].includes(hash)) {
        changePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const changePage = (page: Page) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 300);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About isFullPage />;
      case 'services':
        return <Services isFullPage />;
      case 'solutions':
        return <Solutions isFullPage />;
      case 'contact':
        return <Contact isFullPage />;
      default:
        return (
          <>
            <Hero />
            <About showLink onLinkClick={() => changePage('about')} />
            <Services showLink onLinkClick={() => changePage('services')} />
            <section id="resources">
              <Resources />
            </section>
            <Solutions showLink onLinkClick={() => changePage('solutions')} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-[#0a0c10] text-slate-200">
      <Header currentPage={currentPage} setCurrentPage={changePage} />
      <main className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {renderPage()}
      </main>
      <Footer setCurrentPage={changePage} />
      
      <BackToTop />
      <ChatWidget />
      
      {/* Global Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-600 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-800 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
