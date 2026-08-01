import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openConciergeModal: () => void;
  openBrochureModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, openConciergeModal }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Magnetic button helper
  const magnetRef = useRef<HTMLButtonElement>(null);
  const handleMagnet = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = magnetRef.current; if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.35;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleMagnetLeave = useCallback(() => { if (magnetRef.current) magnetRef.current.style.transform = 'translate(0,0)'; }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-fade-in" style={{ color: '#2C1810', backgroundColor: '#FDF8F0' }}>
      
      {/* ==========================================
          1 · HERO SECTION (Refined Masterpiece)
         ========================================== */}
      <section style={{
        position: 'relative',
        minHeight: '88vh',
        background: 'radial-gradient(120% 100% at 30% 20%, #FDF8F0 0%, #F6EFE5 50%, #ECE1CF 100%)',
        color: '#2C1810',
        display: 'flex',
        alignItems: 'center',
        padding: '90px 40px',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{
          position: 'absolute',
          top: `calc(5% + ${scrollY * 0.18}px)`,
          right: '-5%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }} />

        <div style={{
          maxWidth: '1350px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          gap: '50px',
          alignItems: 'center'
        }} className="hero-split-grid">
          
          {/* Left Column */}
          <div style={{ zIndex: 10 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(139, 105, 20, 0.08)',
              padding: '6px 18px',
              borderRadius: '20px',
              border: '1px solid rgba(139, 105, 20, 0.3)',
              marginBottom: '24px'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8B6914' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 700 }}>
                PURPOSE-BUILT CEREMONIAL MOBILITY · DELHI NCR
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(44px, 5.2vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              color: '#2C1810',
              marginBottom: '16px'
            }}>
              Every Final Journey <br />
              <span style={{ color: '#8B6914', fontStyle: 'italic' }}>Deserves Dignity.</span>
            </h1>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '22px',
              fontStyle: 'italic',
              color: '#8B6914',
              margin: '0 0 20px',
              letterSpacing: '0.02em'
            }}>
              From Transport to Tribute.
            </p>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#5C4E43',
              maxWidth: '520px',
              marginBottom: '36px',
              fontWeight: 300
            }}>
              We believe the final journey deserves the same care, dignity, and thoughtfulness we bring to every meaningful moment in life.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <button
                ref={magnetRef}
                onClick={() => setActiveTab('vehicle')}
                className="magnetic-btn"
                onMouseMove={handleMagnet}
                onMouseLeave={handleMagnetLeave}
                style={{
                  backgroundColor: '#8B6914',
                  color: '#FDF8F0',
                  padding: '16px 36px',
                  borderRadius: '30px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(139, 105, 20, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>Explore the Vehicle</span>
                <ArrowRight size={16} color="#FDF8F0" />
              </button>

              <button
                onClick={openConciergeModal}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#2C1810',
                  padding: '15px 32px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  border: '1px solid rgba(139, 105, 20, 0.35)',
                  borderRadius: '30px',
                  boxShadow: '0 8px 20px rgba(44, 24, 16, 0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#8B6914';
                  e.currentTarget.style.color = '#8B6914';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 105, 20, 0.35)';
                  e.currentTarget.style.color = '#2C1810';
                }}
              >
                Speak With Our Team
              </button>
            </div>

            <div style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8B6914',
              fontWeight: 600,
              paddingTop: '20px',
              borderTop: '1px solid rgba(139, 105, 20, 0.2)'
            }}>
              Designed in India · Built for Institutions · Serving Delhi NCR
            </div>
          </div>

          {/* Right Column */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 35px 80px -15px rgba(44, 24, 16, 0.18)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              background: 'linear-gradient(180deg, #FAF5EE 0%, #F0E5D4 100%)',
              padding: '24px 20px 0'
            }}>
              <img
                src="/images/vehicle_view_front_34.png"
                alt="Eternal Repos Purpose-Built Ceremonial Truck"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'drop-shadow(0 20px 30px rgba(44, 24, 16, 0.15))'
                }}
              />

              <div style={{
                padding: '16px 24px',
                backgroundColor: '#2C1810',
                color: '#FDF8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '16px -20px 0',
                borderTop: '1px solid rgba(212, 175, 55, 0.4)'
              }}>
                <div>
                  <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>
                    STATE-PROTOCOL APPROVED
                  </span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#FDF8F0', fontWeight: 500 }}>
                    Ceremonial Sanctuary Suite
                  </span>
                </div>
                <button
                  onClick={() => setActiveTab('vehicle')}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: '#D4AF37',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          2 · BRAND BELIEF (No cards, no icons)
         ========================================== */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            OUR BELIEF
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 4.8vw, 62px)',
            color: '#2C1810',
            fontWeight: 400,
            lineHeight: 1.15,
            maxWidth: '900px',
            marginBottom: '32px'
          }}>
            A Final Journey Should Never Feel Improvised.
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            lineHeight: 1.85,
            color: '#5C4E43',
            maxWidth: '780px',
            marginBottom: '60px',
            fontWeight: 300
          }}>
            For decades, ceremonial transport has been relegated to repurposed utility vans and improvised arrangements. Eternal Repos was founded on the conviction that the transition of a loved one demands deliberate coachbuilding engineering, calm architectural privacy, and state-level protocol care.
          </p>

          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.25)',
            boxShadow: '0 25px 60px rgba(44, 24, 16, 0.08)'
          }}>
            <img
              src="/images/eternal_ceremonial_exterior_1.png"
              alt="Eternal Repos Ceremonial Exterior"
              style={{ width: '100%', height: 'auto', maxHeight: '580px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          3 · THREE BRAND PILLARS (Clean Editorial Spreads)
         ========================================== */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#F7F2E9',
        borderTop: '1px solid rgba(139, 105, 20, 0.2)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              THE THREE PILLARS
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 54px)', color: '#2C1810', fontWeight: 400 }}>
              Engineered Around Dignity
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px'
          }}>
            {[
              {
                num: '01',
                title: 'Designed for Families',
                desc: 'A calm, private environment for reflection, prayer, and remembrance — acoustically isolated and climate-controlled.'
              },
              {
                num: '02',
                title: 'Purpose-Built',
                desc: 'Every feature is designed specifically for ceremonial use — from patented whisper hydraulics to electrochromic smart glass.'
              },
              {
                num: '03',
                title: 'Institution Ready',
                desc: 'Reliable, hygienic, and professionally managed for organisations that serve families every day under SLA guarantees.'
              }
            ].map((pillar, i) => (
              <div key={i} style={{ borderTop: '2px solid #8B6914', paddingTop: '28px' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
                  {pillar.num}
                </span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', marginBottom: '14px', fontWeight: 500 }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#5C4E43', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4 · VEHICLE STORY (1 Image + 3 Features)
         ========================================== */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              THE VEHICLE STORY
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(38px, 4.5vw, 56px)', color: '#2C1810', fontWeight: 400 }}>
              One Vehicle. One Standard. One Promise.
            </h2>
          </div>

          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.25)',
            boxShadow: '0 25px 60px rgba(44, 24, 16, 0.08)',
            marginBottom: '60px'
          }}>
            <img
              src="/images/eternal_hearse_light_theme.png"
              alt="Eternal Repos Ceremonial Sanctuary Suite"
              style={{ width: '100%', height: 'auto', maxHeight: '540px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {[
              { title: 'Panoramic Viewing Glass', desc: '360° electrochromic smart glass offering privacy control or transparent ceremonial viewing.' },
              { title: 'Calm Climate Interior', desc: 'HEPA-14 atmosphere filtration with independent multi-zone quiet temperature management.' },
              { title: 'Precision Hydraulic Bier', desc: 'Electro-hydraulic whisper-quiet bier platform with automated smooth leveling suspension.' }
            ].map((feature, idx) => (
              <div key={idx} style={{ paddingLeft: '20px', borderLeft: '2px solid rgba(139, 105, 20, 0.3)' }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#2C1810', marginBottom: '10px', fontWeight: 500 }}>
                  {feature.title}
                </h4>
                <p style={{ fontSize: '15px', color: '#5C4E43', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          5 · INSTITUTIONS (One Restrained Dark Section)
         ========================================== */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#2A140D',
        color: '#FDF8F0'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              ENTERPRISE & INSTITUTIONAL PARTNERSHIPS
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#FDF8F0', fontWeight: 400 }}>
              Who We Partner With
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px'
          }}>
            {[
              { title: 'Flagship Hospitals', desc: 'Seamless discharge-to-sanctuary transport enhancing hospital protocol branding.' },
              { title: 'Funeral Service Providers', desc: 'Turnkey fleet capability expansion under white-glove professional SLAs.' },
              { title: 'Municipal Corporations', desc: 'Civic fleet modernization replacing legacy vehicles with dignified suites.' },
              { title: 'Religious Trusts & NGOs', desc: 'Bespoke customization respecting sacred traditions and specific ceremonial rites.' }
            ].map((sector, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(139, 105, 20, 0.4)', paddingTop: '24px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#FDF8F0', marginBottom: '12px', fontWeight: 500 }}>
                  {sector.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: '#D9CBBE', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          6 · FINAL CALL TO ACTION
         ========================================== */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#FDF8F0',
        textAlign: 'center',
        borderTop: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{ color: '#8B6914', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            RAISING THE STANDARD
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 5vw, 60px)',
            color: '#2C1810',
            marginBottom: '20px',
            fontWeight: 400
          }}>
            Let Us Raise the Standard Together.
          </h2>
          <p style={{
            color: '#5C4E43',
            fontSize: '17.5px',
            lineHeight: 1.8,
            marginBottom: '44px',
            fontWeight: 300
          }}>
            Discover how Eternal Repos brings solemn dignity and operational reliability to family journeys and institutional fleets.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={openConciergeModal}
              style={{
                backgroundColor: '#8B6914',
                color: '#FDF8F0',
                padding: '16px 36px',
                borderRadius: '30px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: 600,
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(139, 105, 20, 0.25)',
                transition: 'all 0.3s ease'
              }}
            >
              Request a Demonstration
            </button>

            <button
              onClick={openConciergeModal}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#2C1810',
                padding: '16px 36px',
                borderRadius: '30px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: 600,
                textTransform: 'uppercase',
                border: '1px solid rgba(139, 105, 20, 0.35)',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(44, 24, 16, 0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              Speak With Our Team
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  );
};
