import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, VolumeX, ShieldCheck, Sparkles, Building2, Heart, Users, CheckCircle2 } from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openConciergeModal: () => void;
  openBrochureModal: () => void;
}

// Split letters helper
const SplitLetters: React.FC<{ text: string; baseDelay?: number }> = ({ text, baseDelay = 0 }) => (
  <>
    {text.split('').map((ch, i) => (
      <span key={i} className="split-letter" style={{ animationDelay: `${baseDelay + i * 0.04}s` }}>
        {ch === ' ' ? '\u00A0' : ch}
      </span>
    ))}
  </>
);

const MORPH_WORDS = ['Dignity.', 'Grace.', 'Reverence.', 'Honour.'];
const TYPEWRITER_PHRASES = [
  'From Transport to Tribute.',
  "India's Premier Ceremonial Hearse.",
  'Silent Sanctuary for the Final Journey.',
];

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, openConciergeModal }) => {
  // Morphing text
  const [morphIdx, setMorphIdx] = useState(0);
  const [morphClass, setMorphClass] = useState('morph-word-in');
  useEffect(() => {
    const interval = setInterval(() => {
      setMorphClass('morph-word-out');
      setTimeout(() => { setMorphIdx(i => (i + 1) % MORPH_WORDS.length); setMorphClass('morph-word-in'); }, 450);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Typewriter
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

  // Parallax
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Magnetic button
  const magnetRef = useRef<HTMLButtonElement>(null);
  const handleMagnet = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = magnetRef.current; if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.35;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleMagnetLeave = useCallback(() => { if (magnetRef.current) magnetRef.current.style.transform = 'translate(0,0)'; }, []);

  // Scroll reveal
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
          1 · FULL-WIDTH CINEMATIC HERO SECTION
         ========================================== */}
      <section style={{
        position: 'relative',
        minHeight: '92vh',
        background: 'radial-gradient(130% 110% at 50% 0%, #FDF8F0 0%, #F6EFE5 60%, #EFE5D6 100%)',
        color: '#2C1810',
        display: 'flex',
        alignItems: 'center',
        padding: '90px 40px',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        {/* Parallax Background Glow Orbs */}
        <div style={{
          position: 'absolute',
          top: `calc(10% + ${scrollY * 0.2}px)`,
          right: '-5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: `calc(5% - ${scrollY * 0.15}px)`,
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 105, 20, 0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }} />

        <div style={{
          maxWidth: '1380px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '48% 52%',
          gap: '50px',
          alignItems: 'center'
        }} className="hero-split-grid">
          
          {/* Left Column: Overlay Text & CTAs */}
          <div style={{
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            {/* Gold Pill Tag */}
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
              <span style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600 }}>
                PURPOSE-BUILT CEREMONIAL MOBILITY · DELHI NCR
              </span>
            </div>

            {/* Main Overlay Heading */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(38px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.14,
              letterSpacing: '-0.01em',
              color: '#2C1810',
              marginBottom: '18px',
              perspective: '600px'
            }}>
              <SplitLetters text="India's First Ultra-Premium" baseDelay={0.1} /><br />
              <span style={{ color: '#8B6914', fontStyle: 'italic' }}>Luxury Funeral Mobility </span>
              <span className={morphClass} style={{ color: '#2C1810', display: 'inline-block', minWidth: '150px' }}>
                {MORPH_WORDS[morphIdx]}
              </span>
            </h1>

            {/* Typewriter Subtext Tagline */}
            <p className="pull-quote" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '22px',
              fontStyle: 'italic',
              color: '#8B6914',
              marginBottom: '20px',
              letterSpacing: '0.02em',
              minHeight: '32px'
            }}>
              {typeText}<span className="typewriter-cursor" />
            </p>

            {/* Supporting Subtext */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16.5px',
              lineHeight: 1.8,
              color: '#5C4E43',
              maxWidth: '500px',
              marginBottom: '32px',
              fontWeight: 300
            }}>
              India’s pioneer in bespoke coachbuilding and turnkey fleet operations. Bringing solemn grace, state-protocol standards, and silent sanctuary luxury to final rites across Delhi NCR.
            </p>

            {/* Two CTA Buttons: View Our Vehicles & Partner With Us */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '36px'
            }}>
              {/* Button 1: View Our Vehicles */}
              <button
                ref={magnetRef}
                onClick={() => setActiveTab('vehicle')}
                className="magnetic-btn"
                onMouseMove={handleMagnet}
                onMouseLeave={handleMagnetLeave}
                style={{
                  backgroundColor: '#8B6914',
                  color: '#FDF8F0',
                  padding: '14px 32px',
                  borderRadius: '30px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(139, 105, 20, 0.28)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>View Our Vehicles</span>
                <ArrowRight size={16} color="#FDF8F0" />
              </button>

              {/* Button 2: Partner With Us */}
              <button
                onClick={openConciergeModal}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#2C1810',
                  padding: '13px 28px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  border: '1px solid rgba(139, 105, 20, 0.35)',
                  borderRadius: '30px',
                  boxShadow: '0 6px 18px rgba(44, 24, 16, 0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
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
                Partner With Us
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              paddingTop: '16px',
              borderTop: '1px solid rgba(139, 105, 20, 0.18)'
            }}>
              {[
                '100% SLA Guarantee',
                'Zero-Failure Uptime',
                'Delhi NCR Exclusive'
              ].map((badge, idx) => (
                <div key={idx} style={{
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: '#8B6914',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#8B6914' }} />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Cinematic Vehicle Image */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 35px 80px -15px rgba(44, 24, 16, 0.2)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              backgroundColor: '#FFFFFF'
            }}>
              <img
                src="/images/vehicle_view_front_34.png"
                alt="Eternal Repos Purpose-Built Ceremonial Hearse"
                className="ken-burns"
                style={{ width: '100%', height: 'auto', maxHeight: '620px', objectFit: 'cover', display: 'block' }}
              />

              {/* Floating Metallic Card Badge */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                backgroundColor: 'rgba(44, 24, 16, 0.88)',
                backdropFilter: 'blur(12px)',
                padding: '14px 22px',
                borderRadius: '14px',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
                color: '#FDF8F0'
              }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, marginBottom: '2px' }}>
                  STATE-PROTOCOL APPROVED
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 500 }}>
                  Ceremonial Sanctuary Fleet
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          2 · BRAND INTRODUCTION STRIP
         ========================================== */}
      <section style={{
        backgroundColor: '#2C1810',
        color: '#FDF8F0',
        padding: '40px 30px',
        borderTop: '1px solid rgba(139, 105, 20, 0.3)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.3)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }} className="scroll-reveal">
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontStyle: 'italic',
            color: '#FDF8F0',
            lineHeight: 1.4,
            fontWeight: 400,
            margin: 0
          }}>
            “We don't build vehicles. We create experiences that honour life and respect every goodbye.”
          </p>
        </div>
      </section>

      {/* ==========================================
          3 · WHY ETERNAL? SECTION (3 Key Differentiators)
         ========================================== */}
      <section style={{
        padding: '100px 40px',
        backgroundColor: '#FDF8F0',
        maxWidth: '1350px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }} className="scroll-reveal">
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
            UNCOMPROMISED DIGNITY
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 52px)', color: '#2C1810', fontWeight: 400, margin: 0 }}>
            Why Eternal?
          </h2>
          <div style={{ width: '60px', height: '1.5px', backgroundColor: '#8B6914', margin: '16px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px'
        }}>
          {[
            {
              title: 'Silent Luxury',
              subtitle: 'Thermostatic Sanctuary & Acoustic Isolation',
              desc: 'Whisper-quiet thermostatic climate control, electro-hydraulic bier elevation, and acoustic sound insulation designed for serene final honor.',
              icon: VolumeX
            },
            {
              title: 'Premium Design',
              subtitle: 'Bespoke Coachbuilding & Champagne Trim',
              desc: 'Custom-built coachwork featuring champagne gold exterior accents, fine hand-stitched leather interiors, and tempered viewing glass.',
              icon: Sparkles
            },
            {
              title: 'Institutional Trust',
              subtitle: '100% SLA Uptime & 24/7 Priority Concierge',
              desc: 'Rigorous 30-minute replacement SLA guarantees, government-accredited driver protocols, and 24/7 dedicated concierge dispatch.',
              icon: ShieldCheck
            }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`scroll-reveal scroll-reveal-delay-${idx + 1}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(44, 24, 16, 0.08), 0 0 25px rgba(212, 175, 55, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'rgba(139, 105, 20, 0.25)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 24, 16, 0.04)';
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '44px 36px',
                  borderRadius: '20px',
                  border: '1px solid rgba(139, 105, 20, 0.25)',
                  boxShadow: '0 15px 35px rgba(44, 24, 16, 0.04)',
                  transition: 'all 0.35s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 105, 20, 0.08)',
                  border: '1px solid rgba(139, 105, 20, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <IconComp size={24} color="#8B6914" />
                </div>
                <span style={{ fontSize: '10px', letterSpacing: '0.18em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                  {item.subtitle}
                </span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', marginBottom: '14px', fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#736458', lineHeight: 1.75, margin: 0, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          4 · INSTITUTIONAL TRUST BAR
         ========================================== */}
      <section style={{
        padding: '70px 40px',
        backgroundColor: '#F5EFE6',
        borderTop: '1px solid rgba(139, 105, 20, 0.2)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="scroll-reveal">
            <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600 }}>
              INSTITUTIONAL LEASING & PROTOCOL PARTNERS
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#2C1810', marginTop: '6px', fontWeight: 400 }}>
              Institutional Partner Ecosystem
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Premium Hospitals', desc: 'Tertiary & Multi-Specialty Centers', icon: Building2 },
              { title: 'Funeral Management', desc: 'Private & Luxury Funeral Houses', icon: Heart },
              { title: 'Municipal Corporations', desc: 'Smart City & Public Fleet Protocol', icon: Users },
              { title: 'Religious Trusts', desc: 'Heritage Estates & Sacred Bodies', icon: CheckCircle2 }
            ].map((partner, idx) => {
              const PartnerIcon = partner.icon;
              return (
                <div
                  key={idx}
                  className={`scroll-reveal scroll-reveal-delay-${idx + 1}`}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '24px 20px',
                    borderRadius: '14px',
                    border: '1px solid rgba(139, 105, 20, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: '0 8px 20px rgba(44, 24, 16, 0.03)'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(139, 105, 20, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <PartnerIcon size={20} color="#8B6914" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#2C1810', margin: 0, fontWeight: 600 }}>
                      {partner.title}
                    </h4>
                    <span style={{ fontSize: '12px', color: '#736458', display: 'block', marginTop: '2px' }}>
                      {partner.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          5 · TESTIMONIAL / QUOTE SECTION
         ========================================== */}
      <section style={{
        padding: '100px 40px',
        backgroundColor: '#2C1810',
        color: '#FDF8F0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }} className="scroll-reveal">
          <div style={{ width: '80px', height: '2px', backgroundColor: '#8B6914', margin: '0 auto 32px' }} />

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            fontStyle: 'italic',
            color: '#FDF8F0',
            lineHeight: 1.4,
            fontWeight: 400,
            marginBottom: '28px'
          }}>
            “From Utility to Legacy. From Transport to Tribute.”
          </p>

          <p style={{
            fontSize: '16px',
            color: '#D9CBBE',
            lineHeight: 1.8,
            maxWidth: '680px',
            margin: '0 auto',
            fontWeight: 300
          }}>
            Eternal Repos stands as India's premier standard for ceremonial hearse mobility, ensuring zero-failure execution for discerning families, high-profile protocols, and premier healthcare networks.
          </p>

          <div style={{ width: '80px', height: '2px', backgroundColor: '#8B6914', margin: '32px auto 0' }} />
        </div>
      </section>

      {/* Responsive Grid CSS */}
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
