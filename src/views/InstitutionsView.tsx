import React, { useState, useEffect } from 'react';
import { Building2, CheckCircle2, Download } from 'lucide-react';

interface InstitutionsViewProps {
  openConciergeModal: () => void;
  openBrochureModal: () => void;
}

export const InstitutionsView: React.FC<InstitutionsViewProps> = ({ openConciergeModal, openBrochureModal }) => {
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

  const [demoRequested, setDemoRequested] = useState(false);
  const [instForm, setInstForm] = useState({
    institution: '',
    type: 'Hospital Network',
    contactPerson: '',
    email: '',
    phone: '',
    fleetSize: '1-3 Vehicles'
  });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoRequested(true);
  };

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0' }}>
      
      {/* 1. HERO SECTION (McKinsey meets Apple) */}
      <section style={{
        padding: '100px 40px 60px',
        backgroundColor: '#FDF8F0',
        color: '#2C1810',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 90px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '60px',
          alignItems: 'center'
        }} className="responsive-grid">
          
          <div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(42px, 5vw, 68px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#2C1810',
              marginBottom: '24px'
            }}>
              Elevating Institutional Standard <br />
              <span style={{ fontStyle: 'italic', color: '#8B6914' }}>With Zero-Failure Uptime</span>
            </h1>

            <p style={{
              fontSize: '17px',
              color: '#736458',
              lineHeight: 1.8,
              maxWidth: '640px',
              marginBottom: '40px',
              fontWeight: 300
            }}>
              Eternal Repos partners with flagship multi-specialty hospitals, municipal bodies, state diplomatic protocols, and religious trusts to deliver institutional mobility under strict SLA guarantees.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button
                onClick={openBrochureModal}
                style={{
                  backgroundColor: '#8B6914',
                  color: '#FDF8F0',
                  padding: '18px 36px',
                  borderRadius: '30px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(139, 105, 20, 0.25)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Download size={18} /> DOWNLOAD DOSSIER (PDF)
              </button>

              <button
                onClick={openConciergeModal}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#2C1810',
                  padding: '18px 36px',
                  borderRadius: '30px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '18px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  border: '1px solid rgba(139, 105, 20, 0.4)',
                  boxShadow: '0 8px 20px rgba(44, 24, 16, 0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                SCHEDULE CXO BRIEFING
              </button>
            </div>
          </div>

          {/* Institutional Fleet Image & Quick SLA Stat Box */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '20px',
            border: '1px solid rgba(139, 105, 20, 0.25)',
            boxShadow: '0 20px 50px rgba(44, 24, 16, 0.08)'
          }}>
            <img
              src="/images/eternal_ceremonial_hearse_4.png"
              alt="State Protocol Ceremonial Fleet"
              style={{
                width: '100%',
                height: '145px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '14px',
                border: '1px solid rgba(139, 105, 20, 0.2)'
              }}
            />

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#2C1810', marginBottom: '12px', fontWeight: 500 }}>
              Institutional Performance Metrics
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { metric: '99.98%', label: 'On-Time Dispatch SLA' },
                { metric: '< 15 Min', label: 'Priority Concierge Dispatch' },
                { metric: '100%', label: 'ISO & UV-C Audit Compliance' },
                { metric: 'Zero', label: 'Upfront Capital Expenditure' }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '12px 14px',
                  backgroundColor: '#FDFBF7',
                  borderRadius: '10px',
                  border: '1px solid rgba(139, 105, 20, 0.2)'
                }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#8B6914', fontWeight: 600, lineHeight: 1.1 }}>
                    {item.metric}
                  </div>
                  <div style={{ fontSize: '11px', color: '#736458', letterSpacing: '0.03em', marginTop: '4px', lineHeight: 1.3 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. TARGET INSTITUTION SECTORS */}
      <section style={{
        padding: '100px 40px',
        backgroundColor: '#2C1810',
        color: '#FDF8F0',
        borderTop: '1px solid rgba(139, 105, 20, 0.3)'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }} className="scroll-reveal">
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600 }}>
              TAILORED ENTERPRISE MODELS
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', color: '#FDF8F0', marginTop: '8px', fontWeight: 400 }}>
              Who We Partner With
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Premier Hospital Networks',
                target: 'Tertiary & Multi-Specialty Centers',
                desc: 'Seamless discharge-to-sanctuary transport. Enhances hospital protocol branding and provides compassionate reassurance to grieving families.'
              },
              {
                title: 'Municipal Corporations',
                target: 'Smart City & Public Protocol',
                desc: 'Turnkey fleet modernization programs replacing legacy transport vehicles with dignified, purpose-built ceremonial mobility suites.'
              },
              {
                title: 'Religious Trusts & Estates',
                target: 'Heritage Institutions',
                desc: 'Bespoke vehicle customization respecting sacred traditions, floral integration, and specific ceremonial requirements.'
              },
              {
                title: 'Diplomatic & State Protocol',
                target: 'Embassies & Royal Estates',
                desc: 'High-security tarmac clearance, airport repatriation logistics, and official state funeral mobility with escort coordination.'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`scroll-reveal scroll-reveal-delay-${idx + 1}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(212, 175, 55, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'rgba(139, 105, 20, 0.35)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.35)';
                }}
                style={{
                  backgroundColor: '#24140D',
                  padding: '40px 32px',
                  borderRadius: '18px',
                  border: '1px solid rgba(139, 105, 20, 0.35)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.35s ease',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontSize: '11px', color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  {card.target}
                </span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#FDF8F0', margin: '10px 0 14px', fontWeight: 500 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: '#D9CBBE', lineHeight: 1.75, margin: 0, fontWeight: 300 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SCHEDULE DEMONSTRATION & PARTNERSHIP ENQUIRY FORM */}
      <section style={{
        padding: '100px 40px',
        backgroundColor: '#F5EFE6',
        borderTop: '1px solid rgba(44, 24, 16, 0.08)'
      }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600 }}>
              INSTITUTIONAL FLEET DEMO
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', color: '#2C1810', marginTop: '8px' }}>
              Request On-Site Vehicle Demonstration
            </h2>
            <p style={{ color: '#736458', fontSize: '15px' }}>
              Our executive director team will bring an Eternal Phantom suite directly to your hospital or institution for evaluation.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '48px',
            borderRadius: '20px',
            border: '1px solid rgba(139, 105, 20, 0.2)',
            boxShadow: '0 20px 45px rgba(44, 24, 16, 0.06)'
          }}>
            {demoRequested ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={60} color="#8B6914" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#2C1810', marginBottom: '12px' }}>
                  Demonstration Request Confirmed
                </h3>
                <p style={{ color: '#736458', fontSize: '15px', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto 24px' }}>
                  Our Director of Institutional Relations will reach out to schedule your on-site executive presentation.
                </p>
                <button
                  onClick={() => setDemoRequested(false)}
                  style={{ color: '#8B6914', fontSize: '14px', textDecoration: 'underline' }}
                >
                  Submit Another Institutional Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="responsive-grid">
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                      Institution Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apollo Super Speciality Hospital"
                      value={instForm.institution}
                      onChange={e => setInstForm({ ...instForm, institution: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(44, 24, 16, 0.2)',
                        backgroundColor: '#FDF8F0',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                      Institution Type
                    </label>
                    <select
                      value={instForm.type}
                      onChange={e => setInstForm({ ...instForm, type: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(44, 24, 16, 0.2)',
                        backgroundColor: '#FDF8F0',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    >
                      <option value="Hospital Network">Hospital Network</option>
                      <option value="Municipal Corporation">Municipal Corporation</option>
                      <option value="Diplomatic & State Protocol">Diplomatic & State Protocol</option>
                      <option value="Religious Trust / Estate">Religious Trust / Estate</option>
                      <option value="Private Funeral Enterprise">Private Funeral Enterprise</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="responsive-grid">
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                      Contact Executive & Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. A. Sharma (Chief Medical Officer)"
                      value={instForm.contactPerson}
                      onChange={e => setInstForm({ ...instForm, contactPerson: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(44, 24, 16, 0.2)',
                        backgroundColor: '#FDF8F0',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                      Official Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="cmo@hospital.com"
                      value={instForm.email}
                      onChange={e => setInstForm({ ...instForm, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(44, 24, 16, 0.2)',
                        backgroundColor: '#FDF8F0',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#2C1810',
                    color: '#FDF8F0',
                    padding: '18px',
                    borderRadius: '30px',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    border: '1px solid #8B6914',
                    marginTop: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(139, 105, 20, 0.2)'
                  }}
                >
                  REQUEST ON-SITE VEHICLE DEMO
                </button>
              </form>
            )}
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
