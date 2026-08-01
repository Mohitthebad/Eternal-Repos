import React, { useState, useEffect } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

interface InstitutionsViewProps {
  openConciergeModal: () => void;
  openBrochureModal: () => void;
}

export const InstitutionsView: React.FC<InstitutionsViewProps> = ({ openConciergeModal, openBrochureModal }) => {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    contactName: '',
    workEmail: '',
    phone: '',
    preferredDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
            FOR HOSPITALS, CIVIC BODIES & TRUSTS
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
            A Higher Standard of Ceremonial Mobility.
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            lineHeight: 1.85,
            color: '#5C4E43',
            maxWidth: '780px',
            marginBottom: '40px',
            fontWeight: 300
          }}>
            Eternal Repos partners with flagship multi-specialty hospitals, municipal corporations, diplomatic protocols, and religious trusts to deliver purpose-built ceremonial mobility under structured operational guarantees.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={openBrochureModal}
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Download size={16} />
              Download Institutional Dossier
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
              Schedule a Leadership Briefing
            </button>
          </div>
        </div>
      </section>

      {/* 2. FOUR FULL-WIDTH SECTOR ROWS (Restrained editorial rows) */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              SECTOR PARTNERSHIPS
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 54px)', color: '#2C1810', fontWeight: 400 }}>
              Tailored Partnership Models
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                num: '01',
                sector: 'Flagship Hospitals',
                title: 'Discharge-to-Sanctuary Mobility',
                desc: 'Providing premier healthcare networks with dignified final transport that reinforces institutional care and supports grieving families.'
              },
              {
                num: '02',
                sector: 'Funeral Service Providers',
                title: 'Fleet Capability Expansion',
                desc: 'Expanding operational reach for funeral managers through turnkey vehicle leasing and white-glove driver support.'
              },
              {
                num: '03',
                sector: 'Municipal Bodies & Civic Trusts',
                title: 'Fleet Modernization Programs',
                desc: 'Replacing legacy transport infrastructure with purpose-built, hygienic, and dignified ceremonial suites.'
              },
              {
                num: '04',
                sector: 'Religious Trusts & NGOs',
                title: 'Custom Rites Integration',
                desc: 'Customizing vehicle features and floral mounts to respect specific sacred traditions and community requirements.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '40px 0',
                  borderTop: '1px solid rgba(139, 105, 20, 0.25)',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr 2fr',
                  gap: '32px',
                  alignItems: 'baseline'
                }}
              >
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#8B6914', fontWeight: 600 }}>
                  {item.num}
                </span>
                <div>
                  <span style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                    {item.sector}
                  </span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#2C1810', margin: 0, fontWeight: 500 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '16px', color: '#5C4E43', lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. DARK STANDARDS SECTION */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#2A140D',
        color: '#FDF8F0'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              INSTITUTIONAL RIGOR
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#FDF8F0', fontWeight: 400 }}>
              The Operational Standard
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px'
          }}>
            {[
              { title: 'Operational Readiness', desc: 'Continuous fleet maintenance and structured uptime management for uninterrupted availability.' },
              { title: 'Hygiene Protocols', desc: 'Hospital-grade UV-C sterilization and antimicrobial care after every ceremonial assignment.' },
              { title: 'Professional Presentation', desc: 'Uniformed white-glove personnel trained in discreet protocol and institutional etiquette.' },
              { title: 'Dedicated Coordination', desc: 'Single point of contact for hospital administration, emergency dispatch, and family liaison.' }
            ].map((std, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(139, 105, 20, 0.4)', paddingTop: '24px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#FDF8F0', marginBottom: '12px', fontWeight: 500 }}>
                  {std.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#D9CBBE', lineHeight: 1.75, margin: 0, fontWeight: 300 }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SHORT DEMONSTRATION FORM ONLY */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              DEMONSTRATION REQUEST
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4vw, 48px)', color: '#2C1810', fontWeight: 400 }}>
              Request an On-Site Demonstration
            </h2>
            <p style={{ fontSize: '16px', color: '#5C4E43', lineHeight: 1.7, marginTop: '12px', fontWeight: 300 }}>
              Inspect the ceremonial vehicle and discuss custom institutional leasing models.
            </p>
          </div>

          {formSubmitted ? (
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '48px',
              border: '1px solid #8B6914',
              textAlign: 'center'
            }}>
              <CheckCircle2 size={48} color="#8B6914" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', marginBottom: '12px' }}>
                Demonstration Requested
              </h3>
              <p style={{ fontSize: '16px', color: '#5C4E43', lineHeight: 1.7, margin: 0 }}>
                Our institutional protocol team will contact you shortly to confirm your requested date and briefing details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '48px',
              border: '1px solid rgba(139, 105, 20, 0.25)',
              boxShadow: '0 20px 50px rgba(44, 24, 16, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div>
                <label style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  Institution Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Flagship Hospital Network / Civic Trust"
                  value={formData.institutionName}
                  onChange={e => setFormData({ ...formData, institutionName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '10px',
                    border: '1px solid rgba(139, 105, 20, 0.3)',
                    backgroundColor: '#FDF8F0',
                    fontSize: '15px',
                    color: '#2C1810',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Contact Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    value={formData.contactName}
                    onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '10px',
                      border: '1px solid rgba(139, 105, 20, 0.3)',
                      backgroundColor: '#FDF8F0',
                      fontSize: '15px',
                      color: '#2C1810',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@institution.com"
                    value={formData.workEmail}
                    onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '10px',
                      border: '1px solid rgba(139, 105, 20, 0.3)',
                      backgroundColor: '#FDF8F0',
                      fontSize: '15px',
                      color: '#2C1810',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '10px',
                      border: '1px solid rgba(139, 105, 20, 0.3)',
                      backgroundColor: '#FDF8F0',
                      fontSize: '15px',
                      color: '#2C1810',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.preferredDate}
                    onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '10px',
                      border: '1px solid rgba(139, 105, 20, 0.3)',
                      backgroundColor: '#FDF8F0',
                      fontSize: '15px',
                      color: '#2C1810',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#8B6914',
                  color: '#FDF8F0',
                  padding: '16px',
                  borderRadius: '12px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13.5px',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '12px',
                  boxShadow: '0 10px 25px rgba(139, 105, 20, 0.25)',
                  transition: 'all 0.3s ease'
                }}
              >
                Submit Demonstration Request
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
