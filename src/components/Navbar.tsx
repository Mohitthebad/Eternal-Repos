import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openConciergeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openConciergeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'vehicle', label: 'Our Vehicle' },
    { id: 'services', label: 'Services' },
    { id: 'institutions', label: 'Institutions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Understated Luxury Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(253, 248, 240, 0.97)' : 'rgba(253, 248, 240, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(44, 24, 16, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: '4px 28px',
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '20px',
          height: scrolled ? '50px' : '58px'
        }}>

          {/* Left Navigation Links */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            justifyContent: 'flex-start'
          }} className="desktop-nav">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'vehicle', label: 'Our Vehicle' },
              { id: 'services', label: 'Services' },
              { id: 'institutions', label: 'For Institutions' },
            ].map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="nav-link"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: isActive ? '#2C1810' : '#4A4A4A',
                    fontWeight: isActive ? 600 : 400,
                    padding: '4px 0',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CENTER LOGO (Large Overhanging Logo) */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 10
            }}
          >
            <img
              src="/images/logo.png"
              alt="Eternal Repos - Tribute in Motion"
              style={{
                height: scrolled ? '80px' : '105px',
                width: 'auto',
                objectFit: 'contain',
                margin: scrolled ? '-10px 0' : '-18px 0',
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))'
              }}
            />
          </div>

          {/* Right Navigation Links & Compact CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'flex-end' }}>
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px'
            }} className="desktop-nav">
              {[

                { id: 'gallery', label: 'Gallery' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="nav-link"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isActive ? '#2C1810' : '#4A4A4A',
                      fontWeight: isActive ? 600 : 400,
                      padding: '4px 0',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Compact Primary CTA Button */}
            <button
              onClick={openConciergeModal}
              className="desktop-nav"
              style={{
                backgroundColor: '#2C1810',
                color: '#FDF8F0',
                border: '1px solid #8B6914',
                padding: '9px 20px',
                borderRadius: '24px',
                fontSize: '11.5px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(139, 105, 20, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8B6914';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2C1810';
                e.currentTarget.style.color = '#FDF8F0';
              }}
            >
              Request a Demonstration
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                display: 'none',
                padding: '6px',
                color: '#2C1810'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '100px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#FDF8F0',
          zIndex: 999,
          padding: '40px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(139, 105, 20, 0.2)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  textAlign: 'left',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '28px',
                  color: activeTab === link.id ? '#8B6914' : '#2C1810',
                  fontWeight: activeTab === link.id ? 600 : 400
                }}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConciergeModal();
              }}
              style={{
                backgroundColor: '#2C1810',
                color: '#FDF8F0',
                border: '1px solid #8B6914',
                padding: '14px 24px',
                borderRadius: '28px',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '12px',
                boxShadow: '0 4px 15px rgba(139, 105, 20, 0.25)'
              }}
            >
              <Sparkles size={16} style={{ color: '#D4AF37' }} />
              Join Us
            </button>
          </div>

          <div style={{ borderTop: '1px solid rgba(44, 24, 16, 0.1)', paddingTop: '24px' }}>
            <div style={{ fontSize: '12px', color: '#736458', marginBottom: '8px' }}>
              24/7 DEDICATED CONCIERGE HOTLINE
            </div>
            <a href="tel:18003837625" style={{ fontSize: '20px', fontFamily: "'Cormorant Garamond', serif", color: '#8B6914', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} /> +91 1800-ETERNAL
            </a>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background-color: #8B6914;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};
