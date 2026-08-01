import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, VolumeX, Sparkle, Building2 } from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openConciergeModal: () => void;
  openBrochureModal: () => void;
}

const TYPEWRITER_PHRASES = [
  'From Transport to Tribute.',
  "India's Premier Ceremonial Hearse.",
  'Silent Sanctuary for the Final Journey.',
];

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, openConciergeModal }) => {

  // #17 Typewriter
  const [typeText, setTypeText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIdx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (typeText.length < phrase.length) t = setTimeout(() => setTypeText(phrase.slice(0, typeText.length + 1)), 55);
      else t = setTimeout(() => setTyping(false), 1800);
    } else {
      if (typeText.length > 0) t = setTimeout(() => setTypeText(typeText.slice(0, -1)), 28);
      else { setPhraseIdx(i => (i + 1) % TYPEWRITER_PHRASES.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [typeText, typing, phraseIdx]);

  // #7 Parallax
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // #5 Magnetic button
  const magnetRef = useRef<HTMLButtonElement>(null);
  const handleMagnet = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = magnetRef.current; if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.35;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleMagnetLeave = useCallback(() => { if (magnetRef.current) magnetRef.current.style.transform = 'translate(0,0)'; }, []);

  // #6 Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-fade-in" style={{ color: '#2C1810' }}>
      
      {/* ==========================================
          1 · EDITORIAL HERO SECTION (Masterpiece Style)
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
        {/* Parallax Ambient Orbs */}
        <div style={{
          position: 'absolute',
          top: `calc(5% + ${scrollY * 0.18}px)`,
          right: '-5%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: `calc(5% - ${scrollY * 0.12}px)`,
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 105, 20, 0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(35px)'
        }} />

        <div style={{
          maxWidth: '1380px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          gap: '50px',
          alignItems: 'center'
        }} className="hero-split-grid">
          
          {/* Left Column: Brand Messaging & CTAs */}
          <div style={{
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            {/* Eyebrow Tag */}
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

            {/* Main Headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(44px, 5.2vw, 68px)',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              color: '#2C1810',
              marginBottom: '16px'
            }}>
              Every Final Journey <br />
              <span>Deserves </span>
              <span style={{ color: '#8B6914', fontStyle: 'italic' }}>
                Reverence.
              </span>
            </h1>

            {/* Sub-tagline Pull Quote */}
            <p className="pull-quote" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '22px',
              fontStyle: 'italic',
              color: '#8B6914',
              margin: '0 0 20px',
              letterSpacing: '0.02em'
            }}>
              “From Utility to Legacy. From Transport to Tribute.”
            </p>

            {/* Supporting Copy */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16.5px',
              lineHeight: 1.8,
              color: '#5C4E43',
              maxWidth: '520px',
              marginBottom: '36px',
              fontWeight: 300
            }}>
              India’s pioneer in bespoke ceremonial coachbuilding and turnkey institutional fleet operations. Engineered for solemn grace, zero-failure SLA reliability, and uncompromised dignity across Delhi NCR.
            </p>

            {/* Calls to Action */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              {/* Magnetic Primary CTA */}
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

              {/* Secondary CTA */}
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
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#8B6914';
                  e.currentTarget.style.color = '#8B6914';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(139, 105, 20, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 105, 20, 0.35)';
                  e.currentTarget.style.color = '#2C1810';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(44, 24, 16, 0.05)';
                }}
              >
                Discuss Partnership
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              paddingTop: '20px',
              borderTop: '1px solid rgba(139, 105, 20, 0.2)'
            }}>
              {[
                '100% SLA Guarantee',
                'Zero-Failure Uptime',
                'State Protocol Accredited'
              ].map((badge, idx) => (
                <div key={idx} style={{
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: '#8B6914',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#8B6914' }} />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Hero Vehicle Showcase */}
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

              {/* Bottom Gold Accent Bar */}
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
                    STATE-PROTOCOL ACCREDITED
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
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8B6914';
                    e.currentTarget.style.color = '#2C1810';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#D4AF37';
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Responsive Grid CSS */}
        <style>{`
          @media (max-width: 1024px) {
            .hero-split-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>
      </section>

      {/* ==========================================
          2 · BRAND PROMISE BAND (Elevated India Style: 3 Columns)
         ========================================== */}
      <section style={{
        backgroundColor: '#F5EFE6',
        padding: '60px 40px',
        borderTop: '1px solid rgba(139, 105, 20, 0.2)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr auto 1fr',
            alignItems: 'center',
            gap: '32px'
          }} className="responsive-grid">
            
            {/* Promise 1 */}
            <div style={{ textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1px solid #8B6914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#8B6914'
              }}>
                <VolumeX size={22} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#2C1810', marginBottom: '10px', fontWeight: 500 }}>
                Silent Sanctuary Luxury
              </h3>
              <p style={{ fontSize: '15px', color: '#736458', lineHeight: 1.7, maxWidth: '360px', margin: '0 auto' }}>
                Acoustic-insulated glass chambers, warm twilight illumination, and climate-controlled calm — free of engine noise and medical starkness.
              </p>
            </div>

            {/* Divider 1 */}
            <div style={{ width: '1px', height: '100px', backgroundColor: 'rgba(139, 105, 20, 0.2)' }} className="hidden-mobile" />

            {/* Promise 2 */}
            <div style={{ textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1px solid #8B6914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#8B6914'
              }}>
                <Sparkle size={22} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#2C1810', marginBottom: '10px', fontWeight: 500 }}>
                Curated Ceremonial Dignity
              </h3>
              <p style={{ fontSize: '15px', color: '#736458', lineHeight: 1.7, maxWidth: '360px', margin: '0 auto' }}>
                Patented whisper-quiet hydraulic bier, electrochromic smart privacy glass, and champagne gold floral anchor points for formal tribute.
              </p>
            </div>

            {/* Divider 2 */}
            <div style={{ width: '1px', height: '100px', backgroundColor: 'rgba(139, 105, 20, 0.2)' }} className="hidden-mobile" />

            {/* Promise 3 */}
            <div style={{ textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1px solid #8B6914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#8B6914'
              }}>
                <Building2 size={22} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#2C1810', marginBottom: '10px', fontWeight: 500 }}>
                Institutional Discretion
              </h3>
              <p style={{ fontSize: '15px', color: '#736458', lineHeight: 1.7, maxWidth: '360px', margin: '0 auto' }}>
                Turnkey fleet leasing for flagship hospital networks and municipal bodies — backed by zero-failure SLA and 24/7 dedicated concierge protocol.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          3 · EDITORIAL STATEMENT / PHILOSOPHY QUOTE
         ========================================== */}
      <section style={{
        padding: '90px 40px',
        backgroundColor: '#2C1810',
        color: '#FDF8F0',
        textAlign: 'center',
        position: 'relative'
      }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }} className="scroll-reveal">
          {/* Gold accent line */}
          <div style={{ width: '60px', height: '2px', backgroundColor: '#8B6914', margin: '0 auto 28px' }} />

          <blockquote style={{ margin: 0 }}>
            <p className="shimmer-text" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(26px, 3.8vw, 42px)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.4,
              marginBottom: '20px'
            }}>
              “The final journey is not a logistical task to be efficiently executed. It is a sacred tribute to be gradually, intimately, and reverently honored.”
            </p>
            <footer style={{
              fontSize: '12px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#8B6914',
              fontWeight: 600
            }}>
              — THE ETERNAL REPOS PHILOSOPHY
            </footer>
          </blockquote>

          {/* Gold accent line bottom */}
          <div style={{ width: '60px', height: '2px', backgroundColor: '#8B6914', margin: '28px auto 0' }} />
        </div>
      </section>

      {/* ==========================================
          4 · CEREMONIAL PILLARS GRID (4:5 Aspect Cards)
         ========================================== */}
      <section style={{
        padding: '120px 40px',
        backgroundColor: '#FDF8F0'
      }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              WHAT WE CURATE
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#2C1810', fontWeight: 400 }}>
              The Pillars of Ceremonial Sanctuary
            </h2>
            <div style={{ width: '50px', height: '1px', backgroundColor: '#8B6914', margin: '16px auto' }} />
            <p style={{ fontSize: '16px', color: '#736458', lineHeight: 1.8 }}>
              Explore the four architectural dimensions of India’s premier ceremonial hearse mobility platform.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}>
            {[
              {
                title: '360° Panoramic Glass Sanctuary',
                sub: 'Electrochromic Smart Privacy Glass · Dimmable Daylight',
                img: '/images/eternal_glass_sanctuary.png'
              },
              {
                title: 'Patented Electro-Hydraulic Bier',
                sub: 'Whisper Elevation · Silent Leveling Suspension',
                img: '/images/eternal_bier_sanctuary.png'
              },
              {
                title: 'Executive Family Lounge Suite',
                sub: 'Hand-stitched Leather · HEPA-14 Atmosphere',
                img: '/images/vehicle_features_roof.png'
              },
              {
                title: 'State & Diplomatic Ceremonial Hearse',
                sub: 'Champagne Gold Anchors · Integrated Floral Mounts',
                img: '/images/eternal_ceremonial_exterior_1.png'
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab('vehicle')}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '420px',
                  cursor: 'pointer',
                  border: '1px solid rgba(139, 105, 20, 0.25)',
                  boxShadow: '0 15px 35px rgba(44, 24, 16, 0.08)',
                  transition: 'all 0.5s ease'
                }}
                className="luxury-card-hover"
              >
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.8s ease'
                  }}
                />
                {/* Gradient Scrim Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(44, 24, 16, 0.1) 0%, rgba(44, 24, 16, 0.85) 100%)'
                }} />
                
                {/* Content */}
                <div style={{
                  position: 'absolute',
                  bottom: '28px',
                  left: '24px',
                  right: '24px',
                  color: '#FDF8F0'
                }}>
                  <span style={{ fontSize: '10px', letterSpacing: '0.18em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#FDF8F0', marginBottom: '6px', lineHeight: 1.25 }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#D9CBBE', opacity: 0.9 }}>
                    {pillar.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          5 · THE DIFFERENCE: 01 to 06 NUMBERED GRID (Elevated India Style)
         ========================================== */}
      <section style={{
        padding: '120px 40px',
        backgroundColor: '#24140D',
        color: '#FDF8F0',
        borderTop: '1px solid rgba(139, 105, 20, 0.25)'
      }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600 }}>
              THE RECORD BEHIND THE MOBILITY
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#FDF8F0', marginTop: '10px', fontWeight: 400 }}>
              Why Eternal Repos
            </h2>
            <div style={{ width: '50px', height: '1px', backgroundColor: '#8B6914', margin: '16px auto' }} />
          </div>

          {/* 6 Numbered Grid Items */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(139, 105, 20, 0.25)',
            border: '1px solid rgba(139, 105, 20, 0.25)'
          }}>
            {[
              { num: '01', title: 'Privileged Chassis Engineering', body: 'Custom wide-body chassis with electro-hydraulic silent bier, auto-leveling suspension, and whisper-quiet operation built from the ground up.' },
              { num: '02', title: 'End-to-End White-Glove Protocol', body: 'Chauffeured luxury personnel in white-glove attire, 24/7 dedicated dispatch, and seamless coordination between hospitals, crematoriums, and estates.' },
              { num: '03', title: 'Cultural & Faith Intelligence', body: 'Deep understanding of diverse ceremonial customs across faiths — featuring climate-controlled floral holders and silent ritual atmosphere.' },
              { num: '04', title: '24/7 Priority Concierge', body: 'A dedicated concierge manager accompanies every protocol. Available at every hour, proactive rather than reactive.' },
              { num: '05', title: 'Tailored Institutional Fleets', body: 'Zero-capex fleet leasing for tertiary hospitals, municipal trusts, and private funeral firms with 100% SLA uptime guarantee.' },
              { num: '06', title: 'Absolute Discretion & Integrity', body: 'Your privacy is non-negotiable. We operate with the discretion and solemn reverence of a private household.' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="why-eternal-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="card-num" style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '36px',
                    color: '#8B6914',
                    fontWeight: 400,
                    display: 'block'
                  }}>
                    {item.num}
                  </span>
                  <div className="card-arrow" style={{ color: '#D4AF37' }}>
                    <ArrowRight size={18} />
                  </div>
                </div>
                <h3 className="card-title" style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '24px',
                  color: '#FDF8F0',
                  marginBottom: '12px',
                  fontWeight: 500
                }}>
                  {item.title}
                </h3>
                <p className="card-body" style={{
                  fontSize: '15px',
                  color: '#D9CBBE',
                  lineHeight: 1.75,
                  fontWeight: 300
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          6 · IN TRUSTED HANDS: LEADERSHIP & SLA STATS
         ========================================== */}
      <section style={{
        padding: '110px 40px',
        backgroundColor: '#FDF8F0',
        borderBottom: '1px solid rgba(44, 24, 16, 0.08)'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '64px',
            alignItems: 'center'
          }} className="responsive-grid">
            
            {/* Left: Quote */}
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
                IN TRUSTED HANDS
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4vw, 48px)', color: '#2C1810', marginBottom: '28px', fontWeight: 400 }}>
                Operations & Institutional Infrastructure
              </h2>

              <blockquote style={{ position: 'relative', paddingLeft: '24px', borderLeft: '3px solid #8B6914' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontStyle: 'italic', color: '#2C1810', lineHeight: 1.5, marginBottom: '20px' }}>
                  “After years of engineering luxury mobility platforms, Eternal Repos is the commitment we are proudest to put our name behind. Every vehicle, white-glove driver, and hospital partnership stands behind these solemn journeys — with the utmost dignity.”
                </p>
                <footer style={{ fontSize: '14px', color: '#8B6914', fontWeight: 600 }}>
                  <strong>Azimuth Business on Wheels</strong> · <em>Delhi NCR Protocol Division</em>
                </footer>
              </blockquote>
            </div>

            {/* Right: Key Stats Box */}
            <div className="institutional-standards-card">
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#FDF8F0', marginBottom: '24px' }}>
                Institutional Standards
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="stat-item-box">
                  <span className="stat-num-text">99.98%</span>
                  <span className="stat-label-text">On-Time SLA Uptime</span>
                </div>

                <div className="stat-item-box">
                  <span className="stat-num-text">&lt; 15 Min</span>
                  <span className="stat-label-text">Priority Concierge</span>
                </div>

                <div className="stat-item-box">
                  <span className="stat-num-text">100%</span>
                  <span className="stat-label-text">Hospital Grade Sterile</span>
                </div>

                <div className="stat-item-box">
                  <span className="stat-num-text">24/7</span>
                  <span className="stat-label-text">On-Road Dispatch</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          7 · CLOSING CALL-TO-ACTION (Elevated India Style)
         ========================================== */}
      <section style={{
        padding: '110px 40px',
        background: 'linear-gradient(135deg, #2C1810 0%, #1F100A 100%)',
        color: '#FDF8F0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(139, 105, 20, 0.3)'
      }}>
        <div style={{ position: 'relative', zIndex: 5, maxWidth: '860px', margin: '0 auto' }}>
          
          <span style={{ color: '#8B6914', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>
            PARTNER WITH ETERNAL
          </span>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 5vw, 58px)',
            color: '#FDF8F0',
            margin: '16px 0 20px',
            fontWeight: 400
          }}>
            Bring dignified farewell mobility to those you serve
          </h2>

          <p style={{
            color: '#D9CBBE',
            fontSize: '17px',
            lineHeight: 1.8,
            marginBottom: '44px',
            fontWeight: 300
          }}>
            We work with flagship hospital chains, funeral management firms, municipal bodies, and religious trusts across Delhi NCR. Let's discuss a partnership built on trust and tribute.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {/* Primary (Gold) */}
            <button
              onClick={openConciergeModal}
              style={{
                backgroundColor: '#8B6914',
                color: '#2C1810',
                padding: '16px 36px',
                borderRadius: '40px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: 600,
                textTransform: 'uppercase',
                border: '1px solid #8B6914',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(139, 105, 20, 0.3)'
              }}
            >
              REQUEST A PARTNERSHIP
            </button>

            {/* Secondary (Outlined) */}
            <button
              onClick={openConciergeModal}
              style={{
                backgroundColor: 'transparent',
                color: '#FDF8F0',
                padding: '16px 36px',
                borderRadius: '40px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: 500,
                textTransform: 'uppercase',
                border: '1px solid rgba(253, 248, 240, 0.4)',
                cursor: 'pointer'
              }}
            >
              SPEAK WITH A CURATOR
            </button>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
};
