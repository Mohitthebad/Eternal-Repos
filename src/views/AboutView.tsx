import React, { useEffect } from 'react';

interface AboutViewProps {
  openConciergeModal?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = () => {
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
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0', color: '#2C1810' }}>
      
      {/* CHAPTER 1: BRAND BELIEF */}
      <section style={{
        padding: '140px 40px 100px',
        backgroundColor: '#FDF8F0',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            CHAPTER 01 · BRAND BELIEF
          </span>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(44px, 5.2vw, 72px)',
            color: '#2C1810',
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: '28px',
            maxWidth: '900px'
          }}>
            Built Around a Simple Belief.
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18.5px',
            lineHeight: 1.85,
            color: '#5C4E43',
            maxWidth: '820px',
            marginBottom: '60px',
            fontWeight: 300
          }}>
            We believe the final journey demands the same engineering discipline, aesthetic restraint, and solemn dignity that we afford to every cherished milestone in human life.
          </p>

          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.2)'
          }}>
            <img
              src="/images/craftsmanship.png"
              alt="Eternal Repos Bespoke Coachbuilding Craftsmanship"
              style={{ width: '100%', height: 'auto', maxHeight: '540px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* CHAPTER 2: WHY THE COMPANY EXISTS */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            CHAPTER 02 · THE ORIGIN
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 54px)', color: '#2C1810', fontWeight: 400, marginBottom: '28px' }}>
            Why Eternal Repos Exists
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            lineHeight: 1.9,
            color: '#5C4E43',
            fontWeight: 300,
            marginBottom: '0'
          }}>
            Across India, ceremonial transport has historically relied on makeshift commercial vans, lacking privacy, acoustic insulation, or standardized operational protocols. Eternal Repos was established by Azimuth Business on Wheels to bridge this institutional gap. By engineering purpose-built ceremonial hearses with silent electro-hydraulic biers, climate-managed atmospheres, and white-glove personnel, we provide families and flagship institutions with an uncompromised standard of solemn reverence.
          </p>
        </div>
      </section>

      {/* CHAPTER 3: THE STANDARD IT SEEKS TO CREATE (MATURE COMPARISON) */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#F7F2E9',
        borderTop: '1px solid rgba(139, 105, 20, 0.2)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              CHAPTER 03 · THE STANDARD
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 54px)', color: '#2C1810', fontWeight: 400 }}>
              The Standard We Seek to Create
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px'
          }}>
            <div style={{ borderTop: '2px solid rgba(139, 105, 20, 0.3)', paddingTop: '28px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#736458', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '20px' }}>
                WHAT FAMILIES OFTEN ENCOUNTER
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Vehicles adapted for the purpose', 'Limited climate control', 'Inconsistent presentation', 'Fragmented coordination'].map((item, idx) => (
                  <li key={idx} style={{ fontSize: '16.5px', color: '#5C4E43', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#736458' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: '2px solid #8B6914', paddingTop: '28px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '20px' }}>
                THE ETERNAL APPROACH
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Purpose-built architecture', 'Calm, managed interiors', 'Consistent presentation', 'Structured coordination'].map((item, idx) => (
                  <li key={idx} style={{ fontSize: '16.5px', color: '#2C1810', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8B6914' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SINGLE POWERFUL DARK STATEMENT SECTION (No paragraph, no icons, no CTA) */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#2A140D',
        color: '#FDF8F0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 4.8vw, 62px)',
            color: '#FDF8F0',
            fontWeight: 300,
            lineHeight: 1.35,
            fontStyle: 'italic',
            margin: 0
          }}>
            “Dignity should not be an upgrade. It should be the standard.”
          </h2>
        </div>
      </section>

      {/* CHAPTER 4: VISION AND MISSION */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              CHAPTER 04 · DIRECTION
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 54px)', color: '#2C1810', fontWeight: 400 }}>
              Vision and Mission
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px'
          }}>
            <div style={{ paddingLeft: '28px', borderLeft: '3px solid #8B6914' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#2C1810', marginBottom: '16px', fontWeight: 500 }}>
                Category-Defining Mobility
              </h3>
              <p style={{ fontSize: '16.5px', color: '#5C4E43', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
                To establish purpose-built ceremonial hearses as the undeniable institutional standard across healthcare networks, civic bodies, and private protocols throughout India.
              </p>
            </div>

            <div style={{ paddingLeft: '28px', borderLeft: '3px solid #8B6914' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#2C1810', marginBottom: '16px', fontWeight: 500 }}>
                Uncompromised Reverence
              </h3>
              <p style={{ fontSize: '16.5px', color: '#5C4E43', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
                To combine coachbuilding precision with structured fleet management, bringing calm, discretion, and respect to every family journey.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
