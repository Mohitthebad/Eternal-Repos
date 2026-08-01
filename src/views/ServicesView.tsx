import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesViewProps {
  openConciergeModal: () => void;
  openBrochureModal?: () => void;
  setActiveTab?: (tab: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ openConciergeModal }) => {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      num: '01',
      category: 'COACHBUILDING & FABRICATION',
      title: 'Ceremonial Vehicle Fabrication',
      desc: 'Purpose-built vehicles designed for dignity, reliability, and institutional use.'
    },
    {
      num: '02',
      category: 'FLEET OPERATIONS',
      title: 'Fleet Leasing Solutions',
      desc: 'Flexible models for hospitals, funeral operators, trusts, and civic institutions.'
    },
    {
      num: '03',
      category: 'UPTIME MAINTENANCE',
      title: 'Fleet Maintenance & AMC',
      desc: 'Structured maintenance programs that keep ceremonial fleets ready for service.'
    },
    {
      num: '04',
      category: 'COLD-CHAIN SYSTEMS',
      title: 'Mortuary Cooling Solutions',
      desc: 'Dependable temperature-management systems for sensitive operational environments.'
    },
    {
      num: '05',
      category: 'IDENTITY INTEGRATION',
      title: 'Branding & Customisation',
      desc: 'Refined interior and exterior customisation aligned with institutional identity.'
    },
    {
      num: '06',
      category: 'STERILE CARE',
      title: 'Hygiene & Sanitisation',
      desc: 'Professional hygiene protocols and antimicrobial care for consistent operations.'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0', color: '#2C1810' }}>
      
      {/* SECTION HEADER */}
      <section style={{ padding: '140px 40px 80px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            OUR SERVICES
          </span>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 5.2vw, 72px)',
            color: '#2C1810',
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: '24px',
            maxWidth: '900px'
          }}>
            Complete Ceremonial Mobility Solutions
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            lineHeight: 1.85,
            color: '#5C4E43',
            maxWidth: '780px',
            fontWeight: 300,
            margin: 0
          }}>
            From vehicle fabrication and leasing to fleet care, cooling systems, branding, and hygiene, Eternal Repos provides the complete infrastructure institutions need to deliver dignified and dependable final journeys.
          </p>
        </div>
      </section>

      {/* 6 CARDS GRID */}
      <section style={{ padding: '0 40px 140px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px'
          }}>
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="scroll-reveal"
                style={{
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  border: '1px solid rgba(139, 105, 20, 0.2)',
                  boxShadow: '0 10px 30px rgba(44, 24, 16, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  transition: 'transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#8B6914';
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(44, 24, 16, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'rgba(139, 105, 20, 0.2)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 24, 16, 0.03)';
                }}
                onClick={openConciergeModal}
              >
                {/* 3-4% Opacity Watermark Number */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '15px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '110px',
                  fontWeight: 700,
                  color: 'rgba(139, 105, 20, 0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}>
                  {svc.num}
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: '#8B6914',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '12px'
                  }}>
                    {svc.category}
                  </span>

                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '28px',
                    color: '#2C1810',
                    fontWeight: 500,
                    marginBottom: '16px'
                  }}>
                    {svc.title}
                  </h3>

                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15.5px',
                    color: '#5C4E43',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    marginBottom: '32px'
                  }}>
                    {svc.desc}
                  </p>
                </div>

                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#8B6914',
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  borderTop: '1px solid rgba(139, 105, 20, 0.15)',
                  paddingTop: '20px'
                }}>
                  <span>Request a Demonstration</span>
                  <ArrowRight size={15} color="#8B6914" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
