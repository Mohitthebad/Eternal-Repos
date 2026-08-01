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
      
      {/* 1. HERO SECTION */}
      <section style={{
        padding: '140px 40px 100px',
        backgroundColor: '#FDF8F0',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            ABOUT ETERNAL REPOS
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
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.25)',
            boxShadow: '0 25px 60px rgba(44, 24, 16, 0.08)'
          }}>
            <img
              src="/images/craftsmanship.png"
              alt="Eternal Repos Bespoke Coachbuilding Craftsmanship"
              style={{ width: '100%', height: 'auto', maxHeight: '560px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 2. ORIGIN: WHY ETERNAL REPOS EXISTS */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            THE ORIGIN STORY
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
            Across India, final transport has historically relied on makeshift commercial vans, lacking privacy, acoustic insulation, or standardized operational protocols. Eternal Repos was established by Azimuth Business on Wheels to bridge this institutional gap. By engineering purpose-built ceremonial hearses with silent electro-hydraulic biers, climate-managed atmospheres, and white-glove personnel, we provide families and flagship institutions with an uncompromised standard of solemn reverence.
          </p>
        </div>
      </section>

      {/* 3. BELIEF STATEMENT (Dark Section) */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#2A140D',
        color: '#FDF8F0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#8B6914', margin: '0 auto 32px' }} />
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 4.8vw, 60px)',
            color: '#FDF8F0',
            fontWeight: 300,
            lineHeight: 1.35,
            fontStyle: 'italic',
            marginBottom: '32px'
          }}>
            “Dignity should not be an upgrade. It should be the standard.”
          </h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#8B6914', margin: '0 auto' }} />
        </div>
      </section>

      {/* 4. VISION AND MISSION (Two Clean Editorial Columns Only) */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px'
          }}>
            <div style={{ paddingLeft: '28px', borderLeft: '3px solid #8B6914' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
                OUR VISION
              </span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#2C1810', marginBottom: '16px', fontWeight: 500 }}>
                Category-Defining Mobility
              </h3>
              <p style={{ fontSize: '16.5px', color: '#5C4E43', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
                To establish purpose-built ceremonial hearses as the undeniable institutional standard across healthcare networks, civic bodies, and private protocols throughout India.
              </p>
            </div>

            <div style={{ paddingLeft: '28px', borderLeft: '3px solid #8B6914' }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
                OUR MISSION
              </span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#2C1810', marginBottom: '16px', fontWeight: 500 }}>
                Uncompromised Reverence
              </h3>
              <p style={{ fontSize: '16.5px', color: '#5C4E43', lineHeight: 1.85, fontWeight: 300, margin: 0 }}>
                To combine world-class coachbuilding precision with zero-failure SLA fleet management, bringing calm, discretion, and respect to every family journey.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
