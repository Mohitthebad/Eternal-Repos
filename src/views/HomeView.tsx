import React, { useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openConciergeModal: () => void;
  openBrochureModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, openConciergeModal }) => {
  const magnetRef = useRef<HTMLButtonElement>(null);
  const handleMagnet = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = magnetRef.current; if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.35;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleMagnetLeave = useCallback(() => { if (magnetRef.current) magnetRef.current.style.transform = 'translate(0,0)'; }, []);

  return (
    <div className="animate-fade-in" style={{ color: '#2C1810', backgroundColor: '#FDF8F0' }}>
      
      {/* ==========================================
          1 · HERO SECTION
         ========================================== */}
      <section style={{
        position: 'relative',
        minHeight: '86vh',
        background: 'radial-gradient(120% 100% at 30% 20%, #FDF8F0 0%, #F6EFE5 50%, #ECE1CF 100%)',
        color: '#2C1810',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 40px 80px',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{
          maxWidth: '1280px',
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
              padding: '6px 16px',
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
              marginBottom: '20px'
            }}>
              Every Final Journey <br />
              <span style={{ color: '#8B6914', fontStyle: 'italic' }}>Deserves Dignity.</span>
            </h1>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '17.5px',
              lineHeight: 1.8,
              color: '#5C4E43',
              maxWidth: '500px',
              marginBottom: '36px',
              fontWeight: 300
            }}>
              A purpose-built ceremonial vehicle created to bring calm, care and thoughtful design to one of life’s most sensitive journeys.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
                  boxShadow: '0 12px 30px rgba(139, 105, 20, 0.3)'
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
                  padding: '16px 32px',
                  borderRadius: '30px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  border: '1px solid rgba(139, 105, 20, 0.35)',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(44, 24, 16, 0.05)'
                }}
              >
                Request a Demonstration
              </button>
            </div>
          </div>

          {/* Right Column: Hero Vehicle Showcase */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 30px 70px -15px rgba(44, 24, 16, 0.15)',
              border: '1px solid rgba(139, 105, 20, 0.25)',
              background: 'linear-gradient(180deg, #FAF5EE 0%, #F0E5D4 100%)',
              padding: '24px 20px 0'
            }}>
              <img
                src="/images/vehicle_view_front_34.png"
                alt="The Eternal Ceremonial Vehicle"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '480px',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'drop-shadow(0 20px 30px rgba(44, 24, 16, 0.15))'
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          2 · BRAND BELIEF
         ========================================== */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            WHY ETERNAL REPOS
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 4.8vw, 62px)',
            color: '#2C1810',
            fontWeight: 400,
            lineHeight: 1.15,
            maxWidth: '900px',
            marginBottom: '24px'
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
            For years, funeral mobility has depended on vehicles adapted for a moment they were never designed to serve. Eternal Repos introduces a more considered standard—calm for families, dependable for institutions and respectful in every detail.
          </p>

          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.2)'
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
          3 · THREE PILLARS (OUR STANDARD)
         ========================================== */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#F7F2E9',
        borderTop: '1px solid rgba(139, 105, 20, 0.2)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              OUR STANDARD
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
                title: 'Designed for Families',
                desc: 'A calmer environment for reflection and quiet remembrance.'
              },
              {
                title: 'Purpose-Built',
                desc: 'Engineered specifically for ceremonial use from the ground up.'
              },
              {
                title: 'Built for Institutions',
                desc: 'Structured for reliable, hygienic, and professional operations.'
              }
            ].map((pillar, i) => (
              <div key={i} style={{ borderTop: '2px solid #8B6914', paddingTop: '24px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#2C1810', marginBottom: '10px', fontWeight: 500 }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#5C4E43', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4 · VEHICLE STORY
         ========================================== */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '50px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              THE ETERNAL CEREMONIAL VEHICLE
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(38px, 4.5vw, 56px)', color: '#2C1810', fontWeight: 400 }}>
              One Vehicle. One Standard. One Promise.
            </h2>
          </div>

          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.2)',
            marginBottom: '50px'
          }}>
            <img
              src="/images/eternal_hearse_light_theme.png"
              alt="The Eternal Ceremonial Vehicle"
              style={{ width: '100%', height: 'auto', maxHeight: '560px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            {[
              { title: 'Panoramic Ceremonial Viewing', desc: '360° electrochromic smart glass offering privacy control or transparent viewing.' },
              { title: 'Climate-Managed Interior', desc: 'HEPA-14 atmosphere filtration with quiet temperature management.' },
              { title: 'Precision Hydraulic Bier Platform', desc: 'Electro-hydraulic whisper-quiet bier platform with automated smooth leveling.' }
            ].map((feature, idx) => (
              <div key={idx} style={{ paddingLeft: '20px', borderLeft: '2px solid rgba(139, 105, 20, 0.3)' }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#2C1810', marginBottom: '8px', fontWeight: 500 }}>
                  {feature.title}
                </h4>
                <p style={{ fontSize: '15px', color: '#5C4E43', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => setActiveTab('vehicle')}
              style={{
                backgroundColor: '#8B6914',
                color: '#FDF8F0',
                padding: '14px 32px',
                borderRadius: '24px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.1em',
                fontWeight: 600,
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Explore the Vehicle
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          5 · INSTITUTIONS (BUILT FOR THOSE WHO SERVE)
         ========================================== */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#2A140D',
        color: '#FDF8F0'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              BUILT FOR THOSE WHO SERVE
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#FDF8F0', fontWeight: 400 }}>
              A Dependable Standard for Institutions.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}>
            {[
              { title: 'Hospitals', desc: 'Extend compassionate care through a dignified and professionally coordinated departure experience.' },
              { title: 'Funeral Service Providers', desc: 'Strengthen service quality through purpose-built ceremonial mobility.' },
              { title: 'Municipal Organisations', desc: 'Support public funeral mobility through dependable, scalable and professional vehicle solutions.' },
              { title: 'Religious Trusts & NGOs', desc: 'Enable communities to serve families with consistency, dignity and respect for tradition.' }
            ].map((sector, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(139, 105, 20, 0.4)', paddingTop: '24px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#FDF8F0', marginBottom: '12px', fontWeight: 500 }}>
                  {sector.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#D9CBBE', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setActiveTab('institutions')}
              style={{
                backgroundColor: 'transparent',
                color: '#FDF8F0',
                padding: '14px 32px',
                borderRadius: '24px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.1em',
                fontWeight: 600,
                textTransform: 'uppercase',
                border: '1px solid rgba(139, 105, 20, 0.5)',
                cursor: 'pointer'
              }}
            >
              Explore Institutional Partnerships
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          6 · FINAL PARTNERSHIP CTA
         ========================================== */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#FDF8F0',
        textAlign: 'center',
        borderTop: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{ color: '#8B6914', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            PARTNERSHIPS & DEMONSTRATIONS
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
            Discuss vehicle demonstrations, custom fabrication, fleet leasing, and institutional partnerships across Delhi NCR.
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
                boxShadow: '0 10px 30px rgba(139, 105, 20, 0.25)'
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
                boxShadow: '0 8px 20px rgba(44, 24, 16, 0.05)'
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
