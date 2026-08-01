import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConciergeModal } from './components/ConciergeModal';
import { BrochureModal } from './components/BrochureModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { VehicleView } from './views/VehicleView';
import { ServicesView } from './views/ServicesView';
import { InstitutionsView } from './views/InstitutionsView';
import { GalleryView } from './views/GalleryView';
import { InsightsView } from './views/InsightsView';
import { ContactView } from './views/ContactView';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [conciergeModalOpen, setConciergeModalOpen] = useState<boolean>(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState<boolean>(false);

  // #9 Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scroll-progress-bar');
    const onScroll = () => {
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openConciergeModal = () => setConciergeModalOpen(true);
  const closeConciergeModal = () => setConciergeModalOpen(false);

  const openBrochureModal = () => setBrochureModalOpen(true);
  const closeBrochureModal = () => setBrochureModalOpen(false);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            setActiveTab={setActiveTab}
            openConciergeModal={openConciergeModal}
            openBrochureModal={openBrochureModal}
          />
        );
      case 'about':
        return <AboutView openConciergeModal={openConciergeModal} />;
      case 'vehicle':
        return (
          <VehicleView
            openConciergeModal={openConciergeModal}
            openBrochureModal={openBrochureModal}
          />
        );
      case 'services':
        return (
          <ServicesView
            openConciergeModal={openConciergeModal}
            setActiveTab={setActiveTab}
          />
        );
      case 'institutions':
        return (
          <InstitutionsView
            openConciergeModal={openConciergeModal}
            openBrochureModal={openBrochureModal}
          />
        );
      case 'gallery':
        return <GalleryView />;
      case 'insights':
        return <InsightsView openConciergeModal={openConciergeModal} />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            openConciergeModal={openConciergeModal}
            openBrochureModal={openBrochureModal}
          />
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FDF8F0' }}>
      {/* #9 Scroll Progress Bar */}
      <div id="scroll-progress-bar" />
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openConciergeModal={openConciergeModal}
      />

      <main style={{ flex: 1 }}>
        {renderActiveView()}
      </main>

      <Footer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openConciergeModal={openConciergeModal}
      />

      <ConciergeModal
        isOpen={conciergeModalOpen}
        onClose={closeConciergeModal}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={closeBrochureModal}
      />
    </div>
  );
}

export default App;
