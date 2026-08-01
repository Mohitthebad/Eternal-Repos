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
    contactPerson: '',
    role: '',
    workEmail: '',
    phone: '',
    serviceRequired: 'Fleet Leasing Solutions',
    additionalRequirements: ''
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
            marginBottom: '24px',
            maxWidth: '900px'
          }}>
            A Higher Standard for Institutional Mobility
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
            Purpose-built ceremonial mobility for organisations that value reliability, discretion, professional presentation and family experience.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '60px' }}>
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
              Download Partnership Dossier
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
              Schedule an Institutional Briefing
            </button>
          </div>

          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.2)'
          }}>
            <img
              src="/images/eternal_ceremonial_exterior_1.png"
              alt="Institutional Ceremonial Vehicle Handover"
              style={{ width: '100%', height: 'auto', maxHeight: '540px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 2. SECTOR MODULES (4 Open Rows) */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              SECTOR PARTNERSHIPS
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 54px)', color: '#2C1810', fontWeight: 400 }}>
              Tailored Sector Solutions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                sector: 'Hospitals',
                desc: 'Extend compassionate care through a dignified and professionally coordinated departure experience.'
              },
              {
                sector: 'Funeral Service Providers',
                desc: 'Strengthen service quality through purpose-built ceremonial mobility.'
              },
              {
                sector: 'Municipal Organisations',
                desc: 'Support public funeral mobility through dependable, scalable and professional vehicle solutions.'
              },
              {
                sector: 'Religious Trusts & NGOs',
                desc: 'Enable communities to serve families with consistency, dignity and respect for tradition.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '36px 0',
                  borderTop: '1px solid rgba(139, 105, 20, 0.25)',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 2fr',
                  gap: '32px',
                  alignItems: 'baseline'
                }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', margin: 0, fontWeight: 500 }}>
                  {item.sector}
                </h3>
                <p style={{ fontSize: '16.5px', color: '#5C4E43', lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. DARK STANDARDS SECTION (4 Standards) */}
      <section style={{
        padding: '140px 40px',
        backgroundColor: '#2A140D',
        color: '#FDF8F0'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              OPERATIONAL STANDARDS
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.5vw, 54px)', color: '#FDF8F0', fontWeight: 400 }}>
              The Operational Record
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px'
          }}>
            {[
              { title: 'Operational Readiness', desc: 'Structured maintenance schedules and continuous fleet care ensuring high vehicle availability.' },
              { title: 'Professional Presentation', desc: 'Uniformed personnel trained in discreet protocol and institutional etiquette.' },
              { title: 'Hygiene Protocols', desc: 'Hospital-grade UV-C sterilization and antimicrobial surface sanitization protocols.' },
              { title: 'Dedicated Coordination', desc: 'Single point of contact for hospital administration, emergency response, and family liaison.' }
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

      {/* 4. DEMONSTRATION FORM (Matching Master Prompt Spec) */}
      <section style={{ padding: '140px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              DEMONSTRATION REQUEST
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(34px, 4vw, 48px)', color: '#2C1810', fontWeight: 400 }}>
              Request an On-Site Demonstration
            </h2>
          </div>

          {formSubmitted ? (
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '48px',
              border: '1px solid #8B6914',
              textAlign: 'center'
            }}>
              <CheckCircle2 size={48} color="#8B6914" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', marginBottom: '12px' }}>
                Demonstration Requested
              </h3>
              <p style={{ fontSize: '16px', color: '#5C4E43', lineHeight: 1.7, margin: 0 }}>
                Our institutional protocol team will contact you shortly to confirm your briefing details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '44px',
              border: '1px solid rgba(139, 105, 20, 0.25)',
              boxShadow: '0 16px 40px rgba(44, 24, 16, 0.04)',
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
                    borderRadius: '8px',
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
                    Contact Person
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    value={formData.contactPerson}
                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '8px',
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
                    Role / Title
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Director of Operations / Administrator"
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '8px',
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
                      borderRadius: '8px',
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
                      borderRadius: '8px',
                      border: '1px solid rgba(139, 105, 20, 0.3)',
                      backgroundColor: '#FDF8F0',
                      fontSize: '15px',
                      color: '#2C1810',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  Service Required
                </label>
                <select
                  value={formData.serviceRequired}
                  onChange={e => setFormData({ ...formData, serviceRequired: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    border: '1px solid rgba(139, 105, 20, 0.3)',
                    backgroundColor: '#FDF8F0',
                    fontSize: '15px',
                    color: '#2C1810',
                    outline: 'none'
                  }}
                >
                  <option value="Fleet Leasing Solutions">Fleet Leasing Solutions</option>
                  <option value="Ceremonial Vehicle Fabrication">Ceremonial Vehicle Fabrication</option>
                  <option value="Fleet Maintenance & AMC">Fleet Maintenance & AMC</option>
                  <option value="Mortuary Cooling Solutions">Mortuary Cooling Solutions</option>
                  <option value="Branding & Customisation">Branding & Customisation</option>
                  <option value="Hygiene & Sanitisation">Hygiene & Sanitisation</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  Additional Requirements <span style={{ textTransform: 'none', color: '#736458', fontWeight: 300 }}>(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Fleet size, preferred demonstration dates, or specific briefing notes..."
                  value={formData.additionalRequirements}
                  onChange={e => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '8px',
                    border: '1px solid rgba(139, 105, 20, 0.3)',
                    backgroundColor: '#FDF8F0',
                    fontSize: '15px',
                    color: '#2C1810',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#8B6914',
                  color: '#FDF8F0',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13.5px',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '8px',
                  boxShadow: '0 8px 20px rgba(139, 105, 20, 0.25)'
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
