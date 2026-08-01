import React, { useEffect } from 'react';
import { Compass, Target, ShieldCheck, Users, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  openConciergeModal?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = () => {

  // #6 + #12 + #19 Observers
  useEffect(() => {
    // Scroll reveal
    const revealEls = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObserver.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    revealEls.forEach(el => revealObserver.observe(el));
    // Reveal mask
    const maskEls = document.querySelectorAll('.reveal-mask');
    const maskObserver = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); maskObserver.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    maskEls.forEach(el => maskObserver.observe(el));
    return () => { revealObserver.disconnect(); maskObserver.disconnect(); };
  }, []);

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0', color: '#2C1810' }}>
      
      {/* 1 · EDITORIAL HEADER */}
      <section style={{
        padding: '50px 40px 30px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(40px, 5.5vw, 68px)',
          color: '#2C1810',
          marginBottom: '24px',
          fontWeight: 400,
          lineHeight: 1.12
        }}>
          Introducing a Dignified Standard <br />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1em', fontStyle: 'italic', color: '#8B6914' }}>For the Final Journey</span>
        </h1>

        <div style={{ width: '80px', height: '1.5px', backgroundColor: '#8B6914', margin: '0 auto 28px' }} />

        <p className="scroll-reveal" style={{
          fontSize: '18px',
          color: '#736458',
          maxWidth: '820px',
          margin: '0 auto',
          lineHeight: 1.85,
          fontWeight: 300
        }}>
          Eternal Repos is India's premier purpose-built ceremonial hearse mobility brand — born from the mobility engineering excellence of “Azimuth Business on Wheels” to bring solemn grace, institutional trust, and architectural beauty to every farewell.
        </p>
      </section>

      {/* 2 · ORIGIN STORY: AZIMUTH BUSINESS ON WHEELS & THE BIRTH OF ETERNAL */}
      <section style={{
        padding: '90px 40px',
        backgroundColor: '#2C1810',
        color: '#FDF8F0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center'
        }} className="responsive-grid">
          
          <div>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              THE ORIGIN STORY
            </span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 4vw, 48px)',
              color: '#FDF8F0',
              marginBottom: '24px',
              fontWeight: 400,
              lineHeight: 1.2
            }}>
              From Azimuth Engineering to Ceremonial Tribute
            </h2>

            <p style={{ fontSize: '16px', color: '#D9CBBE', lineHeight: 1.8, marginBottom: '20px', fontWeight: 300 }}>
              For over two decades, “Azimuth Business on Wheels” established itself as India's leading authority in custom mobility engineering — designing bespoke executive transport, mobile medical suites, and specialized high-spec vehicle platforms.
            </p>

            <p className="scroll-reveal scroll-reveal-delay-2" style={{ fontSize: '16px', color: '#D9CBBE', lineHeight: 1.8, marginBottom: '28px', fontWeight: 300 }}>
              Yet, despite India’s rapid advancement in luxury automotive craftsmanship, one vital area remained completely overlooked: “funeral mobility”. Families, hospitals, and diplomatic protocols were left with crude cargo conversions. Seeing this gap, Azimuth founded “Eternal Repos” — creating India's first purpose-built ceremonial hearse.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              borderLeft: '3px solid #8B6914',
              paddingLeft: '18px'
            }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic', color: '#8B6914', margin: 0 }}>
                “We don't modify vans. We engineer ceremonial sanctuaries that honor life.”
              </p>
            </div>
          </div>

          {/* #10 Sticky scroll story image with reveal mask */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #8B6914', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}>
              <img
                src="/images/eternal_ceremonial_exterior_1.png"
                alt="Eternal Hearse by Azimuth Business on Wheels"
                className="scroll-reveal"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3 · THE MARKET GAP & THE PROBLEM ETERNAL SOLVES */}
      <section style={{
        padding: '110px 40px',
        backgroundColor: '#FDF8F0'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              THE MARKET GAP IN FUNERAL MOBILITY
            </span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 4.5vw, 52px)',
              color: '#2C1810',
              fontWeight: 400
            }}>
              Transforming India's Funeral Transport Landscape
            </h2>
            <div style={{ width: '60px', height: '1.5px', backgroundColor: '#8B6914', margin: '16px auto' }} />
          </div>

          {/* Comparison Grid: Traditional vs Eternal Standard */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '36px'
          }} className="responsive-grid">
            
            {/* Traditional Mobility Problem */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '48px 40px',
              borderRadius: '20px',
              border: '1px solid rgba(192, 57, 43, 0.2)',
              boxShadow: '0 15px 35px rgba(44, 24, 16, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <AlertTriangle size={24} color="#C0392B" />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#C0392B', margin: 0, fontWeight: 600 }}>
                  The Traditional Reality
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Modified cargo utility vans — cold, clinical, and unbranded',
                  'Engine noise, loud vibrations, and medical starkness',
                  'Manual loading clatter without elevation assistance',
                  'Lack of acoustic insulation or privacy controls',
                  'Unpredictable hygiene standards and zero institutional SLA'
                ].map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#736458', lineHeight: 1.6 }}>
                    <span style={{ color: '#C0392B', fontWeight: 'bold' }}>✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eternal Solution Standard */}
            <div style={{
              backgroundColor: '#2C1810',
              color: '#FDF8F0',
              padding: '48px 40px',
              borderRadius: '20px',
              border: '1px solid #8B6914',
              boxShadow: '0 20px 45px rgba(44, 24, 16, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <CheckCircle2 size={24} color="#8B6914" />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#FDF8F0', margin: 0, fontWeight: 600 }}>
                  The Eternal Standard
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Purpose-built wide-body ceremonial hearse chassis',
                  'Patented whisper-quiet electro-hydraulic bier elevation',
                  '360° electrochromic smart privacy glass with daylight control',
                  'Hospital-grade antimicrobial surfaces & HEPA purification',
                  '100% turnkey institutional fleet management & 24/7 SLA dispatch'
                ].map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#D9CBBE', lineHeight: 1.6 }}>
                    <span style={{ color: '#8B6914', fontWeight: 'bold' }}>✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4 · MISSION & VISION — OPEN EDITORIAL SPREAD (NO CARDS) */}
      <section style={{
        backgroundColor: '#2C1810',
        color: '#FDF8F0',
        padding: '110px 40px',
        borderTop: '1px solid rgba(139, 105, 20, 0.3)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          
          {/* Section Eyebrow */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }} className="scroll-reveal">
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              FOUNDATIONAL COMMITMENT
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#FDF8F0', fontWeight: 400, margin: 0 }}>
              Mission & Vision
            </h2>
            <div style={{ width: '60px', height: '1.5px', backgroundColor: '#8B6914', margin: '18px auto 0' }} />
          </div>

          {/* Open 2-Column Split (Zero Card Boxes) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'flex-start',
            gap: '60px'
          }} className="responsive-grid">

            {/* Left: Mission */}
            <div className="scroll-reveal scroll-reveal-delay-1" style={{ padding: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 105, 20, 0.15)',
                  border: '1px solid #8B6914',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37',
                  boxShadow: '0 0 20px rgba(139, 105, 20, 0.2)'
                }}>
                  <Compass size={22} />
                </div>
                <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>
                  01 · OUR MISSION
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(28px, 3.2vw, 40px)',
                color: '#FDF8F0',
                lineHeight: 1.25,
                fontWeight: 400,
                marginBottom: '20px'
              }}>
                To Replace Medical Starkness With Solemn Grace
              </h3>

              <div style={{ width: '50px', height: '1px', backgroundColor: '#8B6914', marginBottom: '24px', opacity: 0.6 }} />

              <p style={{ fontSize: '16px', color: '#D9CBBE', lineHeight: 1.9, fontWeight: 300, margin: 0 }}>
                We exist to ensure that every human goodbye is conducted with sanctuary-level reverence, acoustic silence, and uncompromised dignity — serving families, healthcare systems, and state institutions.
              </p>
            </div>

            {/* Middle Gold Divider Line */}
            <div style={{ width: '1px', height: '100%', minHeight: '300px', backgroundColor: 'rgba(139, 105, 20, 0.3)' }} className="hidden-mobile" />

            {/* Right: Vision */}
            <div className="scroll-reveal scroll-reveal-delay-2" style={{ padding: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 105, 20, 0.15)',
                  border: '1px solid #8B6914',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37',
                  boxShadow: '0 0 20px rgba(139, 105, 20, 0.2)'
                }}>
                  <Target size={22} />
                </div>
                <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>
                  02 · OUR VISION
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(28px, 3.2vw, 40px)',
                color: '#FDF8F0',
                lineHeight: 1.25,
                fontWeight: 400,
                marginBottom: '20px'
              }}>
                The Universal Standard for Ceremonial Mobility
              </h3>

              <div style={{ width: '50px', height: '1px', backgroundColor: '#8B6914', marginBottom: '24px', opacity: 0.6 }} />

              <p style={{ fontSize: '16px', color: '#D9CBBE', lineHeight: 1.9, fontWeight: 300, margin: 0 }}>
                To establish Eternal Repos as the institutional gold standard across India, setting a national benchmark for ceremonial hearse engineering, white-glove driver protocols, and fleet reliability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5 · DELHI NCR LAUNCH CONTEXT — FIRST-MOVER POSITIONING */}
      <section style={{
        padding: '110px 40px',
        backgroundColor: '#FDF8F0',
        color: '#2C1810',
        borderBottom: '1px solid rgba(44, 24, 16, 0.08)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center'
          }} className="responsive-grid">
            
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
                DELHI NCR LAUNCH CONTEXT · FIRST-MOVER ADVANTAGE
              </span>

              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(34px, 4vw, 48px)',
                color: '#2C1810',
                marginBottom: '20px',
                fontWeight: 400,
                lineHeight: 1.15
              }}>
                Pioneering Ceremonial Mobility in the National Capital Region
              </h2>

              <p style={{ fontSize: '16px', color: '#736458', lineHeight: 1.8, marginBottom: '32px', fontWeight: 300 }}>
                As India’s administrative, diplomatic, and healthcare capital, “Delhi NCR” represents the ideal launchpad for Eternal Repos. Serving high-profile state honors, premier tertiary hospital networks, and discerning families across New Delhi, Gurugram, and Noida.
              </p>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ borderLeft: '2px solid #8B6914', paddingLeft: '14px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#8B6914', fontWeight: 600, display: 'block' }}>Delhi NCR</span>
                  <span style={{ fontSize: '11px', color: '#736458', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Exclusive Launch Region</span>
                </div>
                <div style={{ borderLeft: '2px solid #8B6914', paddingLeft: '14px' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#8B6914', fontWeight: 600, display: 'block' }}>100% SLA</span>
                  <span style={{ fontSize: '11px', color: '#736458', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Zero-Failure Guarantee</span>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '48px 40px',
              borderRadius: '20px',
              border: '1px solid rgba(139, 105, 20, 0.2)',
              boxShadow: '0 15px 35px rgba(44, 24, 16, 0.05)'
            }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', marginBottom: '20px', fontWeight: 500 }}>
                Institutional Launch Partners
              </h3>
              <p style={{ fontSize: '14px', color: '#736458', lineHeight: 1.7, marginBottom: '28px' }}>
                Eternal Repos offers turnkey fleet integration and white-glove driver leasing for:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Flagship Tertiary Hospital Networks',
                  'State & Diplomatic Ceremonial Divisions',
                  'Premium Funeral Management Firms',
                  'Municipal Corporations & Religious Trusts'
                ].map((partner, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ShieldCheck size={18} color="#8B6914" />
                    <span style={{ fontSize: '15px', color: '#2C1810', fontWeight: 500 }}>{partner}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6 · TEAM & LEADERSHIP AT LAUNCH */}
      <section style={{
        padding: '110px 40px',
        backgroundColor: '#2C1810',
        color: '#FDF8F0',
        borderTop: '1px solid rgba(139, 105, 20, 0.3)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }} className="scroll-reveal">
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              LEADERSHIP & MOBILITY ENGINEERING
            </span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(36px, 4.5vw, 52px)',
              color: '#FDF8F0',
              fontWeight: 400
            }}>
              The Team Behind Eternal
            </h2>
            <div style={{ width: '60px', height: '1.5px', backgroundColor: '#8B6914', margin: '16px auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                role: 'AZIMUTH ENGINEERING BOARD',
                title: 'Custom Mobility Architecture',
                desc: 'Senior automotive engineers and chassis specialists with over 20 years of bespoke vehicle design experience across India.'
              },
              {
                role: 'CEREMONIAL PROTOCOL TEAM',
                title: 'White-Glove Fleet Operations',
                desc: 'Trained hospitality and protocol directors overseeing driver etiquette, ceremonial attire, and seamless institutional coordination.'
              },
              {
                role: '24/7 DISPATCH CONCIERGE',
                title: 'Priority Logistics Desk',
                desc: 'Dedicated round-the-clock dispatch managers ensuring instant response times and zero-failure SLA execution for partner hospitals.'
              }
            ].map((team, idx) => (
              <div
                key={idx}
                className={`scroll-reveal scroll-reveal-delay-${idx + 1}`}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rx = ((y / rect.height) - 0.5) * -12;
                  const ry = ((x / rect.width) - 0.5) * 12;
                  el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03) translateY(-6px)`;
                  el.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(212, 175, 55, 0.25)';
                  el.style.borderColor = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)';
                  el.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.35)';
                  el.style.borderColor = 'rgba(139, 105, 20, 0.35)';
                }}
                style={{
                  backgroundColor: '#24140D',
                  padding: '44px 36px',
                  borderRadius: '20px',
                  border: '1px solid rgba(139, 105, 20, 0.35)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
                  transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                  willChange: 'transform'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 105, 20, 0.18)',
                  border: '1px solid #8B6914',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px',
                  boxShadow: '0 0 15px rgba(139, 105, 20, 0.2)'
                }}>
                  <Users size={22} color="#D4AF37" />
                </div>
                <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                  {team.role}
                </span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#FDF8F0', marginBottom: '12px', fontWeight: 500 }}>
                  {team.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#D9CBBE', lineHeight: 1.75, margin: 0, fontWeight: 300 }}>
                  {team.desc}
                </p>
              </div>
            ))}
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
