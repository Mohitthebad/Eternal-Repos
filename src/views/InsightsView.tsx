import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface InsightsViewProps {
  openConciergeModal?: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      id: 1,
      category: 'INSTITUTIONAL PROTOCOL',
      title: 'Redefining the Final Journey: From Utility Transport to Ceremonial Sanctuary',
      date: 'August 2026',
      readTime: '4 min read',
      excerpt: 'How purpose-built coachbuilding and hospital discharge protocols are establishing a more dignified standard for families across Delhi NCR.',
      image: '/images/eternal_ceremonial_exterior_1.png'
    },
    {
      id: 2,
      category: 'FLEET OPERATIONS',
      title: 'Operational Readiness in Hospital Fleet Care and AMC Management',
      date: 'July 2026',
      readTime: '5 min read',
      excerpt: 'Structured maintenance schedules, hospital-grade sanitization, and white-glove driver protocols for tertiary healthcare networks.',
      image: '/images/craftsmanship.png'
    },
    {
      id: 3,
      category: 'DESIGN & COMFORT',
      title: 'Acoustic Isolation and Atmosphere Control in Ceremonial Mobility',
      date: 'June 2026',
      readTime: '3 min read',
      excerpt: 'Engineering whisper-quiet interiors with HEPA-14 atmosphere filtration and electrochromic privacy glass for family reflection.',
      image: '/images/eternal_glass_sanctuary.png'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0', color: '#2C1810' }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: '140px 40px 80px',
        backgroundColor: '#FDF8F0',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            INSIGHTS & ARTICLES
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
            Perspectives on Ceremonial Mobility
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
            Thought leadership and operational perspectives on dignity, coachbuilding precision, and institutional partnership in final journey care.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section style={{ padding: '100px 40px 140px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px'
          }}>
            {articles.map(art => (
              <article
                key={art.id}
                className="scroll-reveal"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 105, 20, 0.2)',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(44, 24, 16, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#8B6914';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'rgba(139, 105, 20, 0.2)';
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={art.image}
                    alt={art.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700 }}>
                        {art.category}
                      </span>
                      <span style={{ fontSize: '12px', color: '#736458' }}>
                        {art.readTime}
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '24px',
                      color: '#2C1810',
                      fontWeight: 500,
                      lineHeight: 1.3,
                      marginBottom: '14px'
                    }}>
                      {art.title}
                    </h3>

                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '15px',
                      color: '#5C4E43',
                      lineHeight: 1.7,
                      fontWeight: 300,
                      marginBottom: '24px'
                    }}>
                      {art.excerpt}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#8B6914',
                    fontSize: '12.5px',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    borderTop: '1px solid rgba(139, 105, 20, 0.15)',
                    paddingTop: '16px'
                  }}>
                    <span>Read Article</span>
                    <ArrowRight size={14} color="#8B6914" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
