import React from 'react';
import { MessageSquare } from 'lucide-react';

interface FooterProps {
  activeTab?: string;
  setActiveTab: (tab: string) => void;
  openConciergeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ activeTab, setActiveTab, openConciergeModal }) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDarkTheme = activeTab === 'gallery' || activeTab === 'contact';

  const bgColor = isDarkTheme ? '#2A140D' : '#FDF8F0';
  const textColor = isDarkTheme ? '#FDF8F0' : '#2C1810';
  const subtextColor = isDarkTheme ? '#D9CBBE' : '#5C4E43';
  const borderColor = isDarkTheme ? 'rgba(139, 105, 20, 0.3)' : 'rgba(139, 105, 20, 0.2)';

  return (
    <>
      <footer style={{
        backgroundColor: bgColor,
        color: textColor,
        borderTop: `1px solid ${borderColor}`,
        paddingTop: '40px',
        paddingBottom: '24px',
        position: 'relative',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 30px' }}>
          
          {/* Main Footer Grid: 4 Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
            gap: '36px',
            marginBottom: '32px'
          }}>
            {/* Brand Column */}
            <div>
              <div style={{ marginBottom: '12px' }}>
                <img 
                  src="/images/logo.png" 
                  alt="Eternal Repos" 
                  style={{
                    height: '64px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              <p style={{
                color: subtextColor,
                fontSize: '13.5px',
                maxWidth: '340px',
                lineHeight: 1.6,
                fontWeight: 300,
                margin: 0
              }}>
                Purpose-built ceremonial mobility for families and institutions.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '18px',
                color: '#8B6914',
                marginBottom: '14px',
                fontWeight: 500
              }}>Explore</h4>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'about', label: 'About' },
                  { id: 'vehicle', label: 'Vehicle' },
                  { id: 'services', label: 'Services' },
                  { id: 'institutions', label: 'Institutions' },
                ].map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNav(link.id)}
                      style={{
                        color: subtextColor,
                        fontSize: '13.5px',
                        fontWeight: 300,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* DISCOVER */}
            <div>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '18px',
                color: '#8B6914',
                marginBottom: '14px',
                fontWeight: 500
              }}>Discover</h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'insights', label: 'Insights' },
                  { id: 'contact', label: 'Contact' },
                ].map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNav(link.id)}
                      style={{
                        color: subtextColor,
                        fontSize: '13.5px',
                        fontWeight: 300,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={openConciergeModal}
                    style={{
                      color: '#8B6914',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    Request a Demonstration
                  </button>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '18px',
                color: '#8B6914',
                marginBottom: '14px',
                fontWeight: 500
              }}>Connect</h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: subtextColor, fontSize: '13.5px', textDecoration: 'none', fontWeight: 300 }}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: subtextColor, fontSize: '13.5px', textDecoration: 'none', fontWeight: 300 }}>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" style={{ color: subtextColor, fontSize: '13.5px', textDecoration: 'none', fontWeight: 300 }}>
                    WhatsApp Business
                  </a>
                </li>
                <li>
                  <a href="mailto:concierge@eternalrepos.com" style={{ color: subtextColor, fontSize: '13.5px', textDecoration: 'none', fontWeight: 300 }}>
                    Email Concierge
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* LEGAL ROW */}
          <div style={{
            borderTop: `1px solid ${borderColor}`,
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: subtextColor,
            fontWeight: 300
          }}>
            <div>
              © 2026 Azimuth Business on Wheels · Privacy Policy · Terms of Use
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING CONTACT CONTROL */}
      <button
        onClick={openConciergeModal}
        title="Speak with our team"
        aria-label="Speak with our team"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          height: '40px',
          padding: '0 16px',
          backgroundColor: '#2C1810',
          color: '#FDF8F0',
          border: '1px solid rgba(139, 105, 20, 0.3)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 6px 20px rgba(44, 24, 16, 0.15)',
          zIndex: 99,
          cursor: 'pointer'
        }}
      >
        <MessageSquare size={15} strokeWidth={1.75} color="#8B6914" />
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 500 }}>
          Speak with our team
        </span>
      </button>
    </>
  );
};
