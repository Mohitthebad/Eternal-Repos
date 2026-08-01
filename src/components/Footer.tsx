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

  const bgColor = isDarkTheme ? '#2C1810' : '#FDF8F0';
  const textColor = isDarkTheme ? '#FDF8F0' : '#2C1810';
  const subtextColor = isDarkTheme ? '#D9CBBE' : '#736458';
  const borderColor = isDarkTheme ? 'rgba(139, 105, 20, 0.3)' : 'rgba(139, 105, 20, 0.2)';
  const dividerColor = isDarkTheme ? 'rgba(212, 175, 55, 0.15)' : 'rgba(139, 105, 20, 0.15)';
  const badgeBg = isDarkTheme ? 'rgba(139, 105, 20, 0.12)' : 'rgba(139, 105, 20, 0.08)';

  return (
    <>
      <footer style={{
        backgroundColor: bgColor,
        color: textColor,
        borderTop: `1px solid ${borderColor}`,
        paddingTop: '32px',
        paddingBottom: '20px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s ease'
      }}>
        {/* Background Subtle Gold Glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #8B6914, #D4AF37, #8B6914, transparent)'
        }} />

        <div style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 30px' }}>
          
          {/* Main Footer Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '28px',
            marginBottom: '20px'
          }}>
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ marginBottom: '8px' }}>
                <img 
                  src="/images/logo.png" 
                  alt="Eternal Repos - Tribute in Motion" 
                  style={{
                    height: '82px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              {/* BRAND TAGLINE - Pull quote italicised serif */}
              <p className="pull-quote" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '16px',
                fontStyle: 'italic',
                color: '#8B6914',
                lineHeight: 1.3,
                marginBottom: '6px',
                maxWidth: '420px'
              }}>
                “From Utility to Legacy. From Transport to Tribute.”
              </p>

              <p style={{
                color: subtextColor,
                fontSize: '13px',
                maxWidth: '420px',
                lineHeight: 1.55
              }}>
                India’s pioneer in luxury funeral mobility. Purpose-built ceremonial hearse mobility for high-net-worth families, state protocols, and premier institutions across Delhi NCR.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '16px',
                color: '#8B6914',
                marginBottom: '10px',
                letterSpacing: '0.05em'
              }}>Quick Links</h4>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Eternal' },
                  { id: 'vehicle', label: 'Our Vehicle' },
                  { id: 'services', label: 'Services' },
                  { id: 'institutions', label: 'For Institutions' },
                  { id: 'contact', label: 'Contact' },
                ].map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNav(link.id)}
                      style={{
                        color: subtextColor,
                        fontSize: '13px',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#8B6914'}
                      onMouseLeave={e => e.currentTarget.style.color = subtextColor}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '16px',
                color: '#8B6914',
                marginBottom: '10px',
                letterSpacing: '0.05em'
              }}>Connect</h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: subtextColor }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: subtextColor,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8B6914'}
                  onMouseLeave={e => e.currentTarget.style.color = subtextColor}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn (Primary)</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: subtextColor,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8B6914'}
                  onMouseLeave={e => e.currentTarget.style.color = subtextColor}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://wa.me/9118003837625"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: subtextColor,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8B6914'}
                  onMouseLeave={e => e.currentTarget.style.color = subtextColor}
                >
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
                    <path fill="#25D366" d="M16 0C7.163 0 0 7.163 0 16c0 3.393 1.06 6.533 2.875 9.108L1.01 30.99l6.082-1.815A15.932 15.932 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"/>
                    <path fill="#FFFFFF" d="M22.5 19.33c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.79.18-.23.35-.9 1.14-1.1 1.37-.2.23-.41.26-.76.09-.35-.18-1.48-.55-2.81-1.74-1.04-.93-1.74-2.07-1.94-2.42-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.61.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.79-1.9-1.08-2.6-.28-.68-.57-.59-.79-.6-.2-.01-.44-.01-.67-.01-.23 0-.61.09-.93.44-.32.35-1.23 1.2-1.23 2.92 0 1.72 1.25 3.39 1.43 3.63.18.23 2.47 3.77 5.98 5.28.84.36 1.49.58 2 .74.84.27 1.6.23 2.2.14.67-.1 2.07-.85 2.36-1.67.29-.82.29-1.52.2-1.67-.08-.15-.32-.23-.67-.41z"/>
                  </svg>
                  <span>WhatsApp Business</span>
                </a>

                <div style={{
                  fontSize: '11px',
                  color: '#8B6914',
                  letterSpacing: '0.04em',
                  marginTop: '2px',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  backgroundColor: badgeBg,
                  border: `1px solid ${borderColor}`,
                  display: 'inline-block'
                }}>
                  “We respond within 24 business hours”
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            backgroundColor: dividerColor,
            margin: '16px 0 14px'
          }} />

          {/* LEGAL */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '12px',
            color: subtextColor,
            letterSpacing: '0.05em'
          }}>
            <div>
              © 2026 Eternal Repos. All Rights Reserved.
            </div>

            <div style={{ display: 'flex', gap: '24px' }}>
              <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
              <span style={{ cursor: 'pointer' }}>Terms of Use</span>
            </div>
            {/* Site Credit Badges (Compact Small Size) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 8px',
              border: `1px solid ${borderColor}`,
              borderRadius: '6px',
              backgroundColor: badgeBg,
              backdropFilter: 'blur(8px)'
            }}>
              <a
                href="https://play.fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FabulousMedia"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  padding: '2px 5px',
                  borderRadius: '4px',
                  opacity: 0.8,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                  style={{ height: '8px', width: 'auto', display: 'block' }}
                />
              </a>

              <div style={{ width: '1px', height: '10px', backgroundColor: borderColor }} />

              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GoCommercially"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  padding: '2px 5px',
                  borderRadius: '4px',
                  opacity: 0.8,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                  style={{ height: '8px', width: 'auto', display: 'block' }}
                />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* ==========================================
          REFINED FLOATING CONCIERGE BUTTON
         ========================================== */}
      <button
        onClick={openConciergeModal}
        title="Speak with our team"
        aria-label="Speak with our team"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          height: '42px',
          padding: '0 14px',
          backgroundColor: '#2C1810',
          color: '#D4AF37',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 8px 25px rgba(44, 24, 16, 0.2)',
          zIndex: 1000,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.backgroundColor = '#24140D';
          e.currentTarget.style.borderColor = '#D4AF37';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(44, 24, 16, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.backgroundColor = '#2C1810';
          e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 24, 16, 0.2)';
        }}
      >
        <MessageSquare size={17} strokeWidth={1.75} color="#D4AF37" style={{ flexShrink: 0 }} />
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          color: '#FDF8F0'
        }}>
          Speak with our team
        </span>
      </button>
    </>
  );
};
