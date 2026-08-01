import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesViewProps {
  openConciergeModal: () => void;
  setActiveTab: (tab: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ openConciergeModal }) => {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          revealObserver.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    revealEls.forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);
  const servicesList = [
    {
      num: '01',
      tag: 'CUSTOM COACHBUILDING',
      title: 'Ceremonial Vehicle Fabrication',
      desc: 'Purpose-built ceremonial vehicles designed around dignity, operational reliability, and institutional standards.',
      // Custom Line Icon: Coachbuilding Blueprint / Chassis
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 .6.4 1 1 1h2" />
          <circle cx="7.5" cy="17.5" r="2.5" />
          <circle cx="16.5" cy="17.5" r="2.5" />
          <path d="M7 10h5" />
        </svg>
      ),
      // Watermark SVG
      watermarkSvg: (
        <svg width="180" height="140" viewBox="0 0 200 150" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.04" style={{ position: 'absolute', bottom: '-10px', right: '-10px', pointerEvents: 'none', transition: 'opacity 0.35s ease' }}>
          <rect x="20" y="40" width="160" height="70" rx="8" strokeDasharray="4 4" />
          <circle cx="60" cy="110" r="18" />
          <circle cx="140" cy="110" r="18" />
          <path d="M30 70h140M60 40v70M140 40v70" />
        </svg>
      )
    },
    {
      num: '02',
      tag: 'FLEET LEASING',
      title: 'Fleet Leasing Solutions',
      desc: 'Flexible leasing models for hospitals, funeral operators, trusts, and civic institutions.',
      // Custom Line Icon: Institutional Building & Fleet Key
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 18v-3h6v3M9 10h2M13 10h2M9 14h2M13 14h2" />
        </svg>
      ),
      // Watermark SVG
      watermarkSvg: (
        <svg width="180" height="140" viewBox="0 0 200 150" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.04" style={{ position: 'absolute', bottom: '-10px', right: '-10px', pointerEvents: 'none', transition: 'opacity 0.35s ease' }}>
          <polygon points="100,20 180,60 180,130 20,130 20,60" />
          <line x1="100" y1="20" x2="100" y2="130" strokeDasharray="4 4" />
          <rect x="40" y="70" width="30" height="40" />
          <rect x="130" y="70" width="30" height="40" />
        </svg>
      )
    },
    {
      num: '03',
      tag: 'ANNUAL FLEET CARE',
      title: 'Fleet Maintenance & AMC',
      desc: 'Structured maintenance programs that keep ceremonial fleets reliable, presentable, and ready for service.',
      // Custom Line Icon: Maintenance Gear & Shield Calibration
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      // Watermark SVG
      watermarkSvg: (
        <svg width="180" height="140" viewBox="0 0 200 150" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.04" style={{ position: 'absolute', bottom: '-10px', right: '-10px', pointerEvents: 'none', transition: 'opacity 0.35s ease' }}>
          <circle cx="100" cy="75" r="55" strokeDasharray="6 6" />
          <circle cx="100" cy="75" r="35" />
          <path d="M100 20v110M45 75h110" />
        </svg>
      )
    },
    {
      num: '04',
      tag: 'MORTUARY COOLING',
      title: 'Mortuary Cooling Solutions',
      desc: 'Specialised cooling systems engineered for dependable temperature control and sensitive operational environments.',
      // Custom Line Icon: Thermostatic Airflow & Dual-Zone Cooling
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
        </svg>
      ),
      // Watermark SVG
      watermarkSvg: (
        <svg width="180" height="140" viewBox="0 0 200 150" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.04" style={{ position: 'absolute', bottom: '-10px', right: '-10px', pointerEvents: 'none', transition: 'opacity 0.35s ease' }}>
          <path d="M20 75 Q 60 30, 100 75 T 180 75" />
          <path d="M20 95 Q 60 50, 100 95 T 180 95" />
          <path d="M20 55 Q 60 10, 100 55 T 180 55" />
        </svg>
      )
    },
    {
      num: '05',
      tag: 'LIVERY & DESIGN',
      title: 'Branding & Customisation',
      desc: 'Refined exterior and interior customisation that aligns each vehicle with institutional identity and service standards.',
      // Custom Line Icon: Palette & Custom Monogram Grid
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="#8B6914" />
          <circle cx="17.5" cy="10.5" r=".5" fill="#8B6914" />
          <circle cx="8.5" cy="7.5" r=".5" fill="#8B6914" />
          <circle cx="6.5" cy="12.5" r=".5" fill="#8B6914" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.75 1.7-1.7 0-.4-.15-.78-.42-1.07-.27-.29-.43-.68-.43-1.11 0-.92.75-1.7 1.7-1.7h2.45c3.2 0 5.75-2.55 5.75-5.75V11C22 6 17.5 2 12 2z" />
        </svg>
      ),
      // Watermark SVG
      watermarkSvg: (
        <svg width="180" height="140" viewBox="0 0 200 150" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.04" style={{ position: 'absolute', bottom: '-10px', right: '-10px', pointerEvents: 'none', transition: 'opacity 0.35s ease' }}>
          <rect x="30" y="30" width="140" height="90" strokeDasharray="5 5" />
          <circle cx="100" cy="75" r="30" />
          <polygon points="100,45 125,90 75,90" />
        </svg>
      )
    },
    {
      num: '06',
      tag: 'HOSPITAL-GRADE CARE',
      title: 'Hygiene & Sanitisation',
      desc: 'Professional hygiene protocols and antimicrobial treatments designed for safe, consistent, and respectful operations.',
      // Custom Line Icon: Hospital Sanitation Shield & Cross
      iconSvg: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      ),
      // Watermark SVG
      watermarkSvg: (
        <svg width="180" height="140" viewBox="0 0 200 150" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.04" style={{ position: 'absolute', bottom: '-10px', right: '-10px', pointerEvents: 'none', transition: 'opacity 0.35s ease' }}>
          <path d="M100 20 L160 45 V90 C160 120 100 140 100 140 C100 140 40 120 40 90 V45 Z" />
          <path d="M85 75 h30 M100 60 v30" strokeDasharray="3 3" />
        </svg>
      )
    }
  ];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0', paddingBottom: '90px' }}>
      
      {/* 1 · SECTION INTRODUCTION (Left-aligned, generous spacing) */}
      <section style={{
        paddingTop: '64px',
        paddingBottom: '20px',
        maxWidth: '1350px',
        margin: '0 auto',
        paddingLeft: '40px',
        paddingRight: '40px'
      }}>
        <div style={{ maxWidth: '820px', textAlign: 'left' }} className="scroll-reveal">
          {/* Eyebrow */}
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.22em',
            color: '#8B6914',
            textTransform: 'uppercase',
            fontWeight: 600,
            display: 'block',
            marginBottom: '12px'
          }}>
            OUR SERVICES
          </span>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 4.5vw, 54px)',
            color: '#2C1810',
            marginBottom: '18px',
            fontWeight: 400,
            lineHeight: 1.15
          }}>
            Complete Ceremonial Mobility Solutions
          </h1>

          {/* Supporting Copy */}
          <p style={{
            fontSize: '16px',
            color: '#736458',
            lineHeight: 1.75,
            fontWeight: 300,
            margin: 0
          }}>
            From vehicle fabrication and leasing to fleet care, cooling systems, branding, and hygiene, Eternal Repos provides the complete infrastructure institutions need to deliver dignified and dependable final journeys.
          </p>
        </div>
      </section>

      {/* 2 · REFINED 6-CARD CAPABILITY ARCHITECTURE GRID */}
      <section style={{ padding: '30px 40px 60px', maxWidth: '1350px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '36px'
        }} className="services-capability-grid">
          {servicesList.map((service, idx) => (
            <div
              key={service.num}
              className={`scroll-reveal scroll-reveal-delay-${idx + 1}`}
              onClick={openConciergeModal}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(-6px)';
                card.style.backgroundColor = '#FDFBF7';
                card.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                card.style.boxShadow = '0 25px 50px rgba(44, 24, 16, 0.08), 0 0 25px rgba(212, 175, 55, 0.12)';
                const arrow = card.querySelector('.cta-arrow') as HTMLElement;
                if (arrow) arrow.style.transform = 'translateX(5px)';
                const wm = card.querySelector('svg[opacity]') as HTMLElement;
                if (wm) wm.style.opacity = '0.08';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(0px)';
                card.style.backgroundColor = '#FFFFFF';
                card.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                card.style.boxShadow = '0 15px 35px rgba(44, 24, 16, 0.04)';
                const arrow = card.querySelector('.cta-arrow') as HTMLElement;
                if (arrow) arrow.style.transform = 'translateX(0px)';
                const wm = card.querySelector('svg[opacity]') as HTMLElement;
                if (wm) wm.style.opacity = '0.04';
              }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '40px 34px',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                boxShadow: '0 15px 35px rgba(44, 24, 16, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '330px'
              }}
            >
              {/* Background Watermark Pattern */}
              {service.watermarkSvg}

              {/* Faint Background Editorial Number (Top Right) */}
              <span style={{
                position: 'absolute',
                top: '20px',
                right: '28px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '72px',
                color: 'rgba(139, 105, 20, 0.07)',
                fontWeight: 600,
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none'
              }}>
                {service.num}
              </span>

              {/* Card Header: Icon & Category Label */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '22px' }}>
                  {/* Custom Line Icon in Open Framing */}
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(139, 105, 20, 0.06)',
                    border: '1px solid rgba(139, 105, 20, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {service.iconSvg}
                  </div>

                  {/* Category Label */}
                  <div>
                    <span style={{
                      fontSize: '11px',
                      letterSpacing: '0.14em',
                      color: '#8B6914',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      display: 'block'
                    }}>
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '26px',
                  color: '#2C1810',
                  marginBottom: '14px',
                  fontWeight: 500,
                  lineHeight: 1.25
                }}>
                  {service.title}
                </h3>

                {/* Concise Description */}
                <p style={{
                  fontSize: '14.5px',
                  color: '#736458',
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 300,
                  maxWidth: '380px'
                }}>
                  {service.desc}
                </p>
              </div>

              {/* Meaningful CTA (Visible at all times, bottom aligned) */}
              <div style={{ marginTop: '32px' }}>
                <span style={{
                  fontSize: '13px',
                  color: '#8B6914',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '1px solid rgba(139, 105, 20, 0.3)',
                  paddingBottom: '2px',
                  transition: 'all 0.3s ease'
                }}>
                  Explore Service
                  <ArrowRight size={14} className="cta-arrow" style={{ transition: 'transform 0.3s ease' }} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 · INSTITUTIONAL FLEET LEASING SHOWCASE */}
      <section style={{
        padding: '90px 40px 110px',
        backgroundColor: '#2C1810',
        color: '#FDF8F0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '50px',
          alignItems: 'center'
        }} className="responsive-grid">
          
          <div className="scroll-reveal">
            <span style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              INSTITUTIONAL FLEET STANDARDS
            </span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 4vw, 48px)',
              color: '#FDF8F0',
              marginBottom: '20px',
              fontWeight: 400,
              lineHeight: 1.2
            }}>
              Turnkey Operations for Hospitals & Funeral Houses
            </h2>

            <p style={{ fontSize: '16px', color: '#D9CBBE', lineHeight: 1.8, marginBottom: '28px', fontWeight: 300 }}>
              Whether leasing a dedicated hearse fleet for a hospital chain or requesting custom vehicle fabrication for private funeral operations, Eternal Repos guarantees 100% operational uptime and white-glove protocol execution.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                'Zero upfront CapEx for hospital leasing partners',
                'Chauffeured white-glove driver personnel included',
                '30-minute replacement vehicle SLA guarantee',
                '24/7 priority concierge dispatch desk'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#D4AF37" />
                  <span style={{ fontSize: '15px', color: '#FDF8F0' }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={openConciergeModal}
              style={{
                backgroundColor: '#8B6914',
                color: '#2C1810',
                padding: '14px 32px',
                borderRadius: '30px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.12em',
                fontWeight: 600,
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(139, 105, 20, 0.25)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D4AF37';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#8B6914';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              Discuss Institutional Partnership
            </button>
          </div>

          <div style={{ position: 'relative' }} className="scroll-reveal scroll-reveal-delay-2">
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
            }}>
              <img
                src="/images/eternal_hearse_light_theme.png"
                alt="Eternal Fleet Vehicle"
                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .services-capability-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .services-capability-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
};
