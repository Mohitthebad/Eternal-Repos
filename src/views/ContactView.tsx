import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ContactViewProps {
  openConciergeModal?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    organisation: '',
    phone: '',
    email: '',
    enquiryType: 'Institutional Partnership',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0', color: '#2C1810' }}>
      
      {/* HERO SECTION */}
      <section style={{
        padding: '140px 40px 100px',
        backgroundColor: '#FDF8F0',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            GET IN TOUCH
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
            Discreet. Dedicated. Available.
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
            Whether you require an emergency protocol response, a fleet demonstration for your institution, or a private consultation, our team is available 24/7.
          </p>
        </div>
      </section>

      {/* 3 SIMPLE ROWS & FORM */}
      <section style={{ padding: '100px 40px 140px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '80px',
            alignItems: 'start'
          }}>
            
            {/* Left: 3 Simple Text Rows */}
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '32px' }}>
                DIRECT CONTACT CHANNELS
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ borderBottom: '1px solid rgba(139, 105, 20, 0.2)', paddingBottom: '24px' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    24/7 DEDICATED PROTOCOL LINE
                  </span>
                  <a href="tel:+919876543210" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', textDecoration: 'none', fontWeight: 500 }}>
                    +91 98765 43210
                  </a>
                  <p style={{ fontSize: '14px', color: '#5C4E43', margin: '6px 0 0', fontWeight: 300 }}>
                    Immediate emergency dispatch & concierge response
                  </p>
                </div>

                <div style={{ borderBottom: '1px solid rgba(139, 105, 20, 0.2)', paddingBottom: '24px' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    INSTITUTIONAL DESK
                  </span>
                  <a href="mailto:concierge@eternalrepos.com" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', textDecoration: 'none', fontWeight: 500 }}>
                    concierge@eternalrepos.com
                  </a>
                  <p style={{ fontSize: '14px', color: '#5C4E43', margin: '6px 0 0', fontWeight: 300 }}>
                    Enterprise leasing, AMC inquiries & CXO briefings
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                    OPERATIONAL REGION
                  </span>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', fontWeight: 500 }}>
                    Delhi NCR & Sovereign Protocol
                  </div>
                  <p style={{ fontSize: '14px', color: '#5C4E43', margin: '6px 0 0', fontWeight: 300 }}>
                    Full operational coverage across New Delhi, Gurgaon, Noida & diplomatic routes
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div>
              {submitted ? (
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '48px',
                  border: '1px solid #8B6914',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={48} color="#8B6914" style={{ margin: '0 auto 20px' }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', marginBottom: '12px' }}>
                    Enquiry Received
                  </h3>
                  <p style={{ fontSize: '16px', color: '#5C4E43', lineHeight: 1.7, margin: 0 }}>
                    Thank you. A member of our executive protocol team will review your inquiry and reach out discreetly.
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
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={form.fullName}
                        onChange={e => setForm({ ...form, fullName: e.target.value })}
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
                      <label style={{ fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                        Organisation
                      </label>
                      <input
                        type="text"
                        placeholder="Company / Institution"
                        value={form.organisation}
                        onChange={e => setForm({ ...form, organisation: e.target.value })}
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
                      <label style={{ fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
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
                      <label style={{ fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@domain.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
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

                  <div>
                    <label style={{ fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                      Nature of Enquiry
                    </label>
                    <select
                      value={form.enquiryType}
                      onChange={e => setForm({ ...form, enquiryType: e.target.value })}
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
                    >
                      <option value="Institutional Partnership">Institutional Partnership / Hospital Fleet</option>
                      <option value="Vehicle Inspection">Vehicle Inspection & Demonstration</option>
                      <option value="Emergency Protocol">Emergency Protocol Transport</option>
                      <option value="Custom Coachbuilding">Custom Coachbuilding & Fabrication</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '11.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please share details about your requirement..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '10px',
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
                      width: '100%',
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
                      boxShadow: '0 10px 25px rgba(139, 105, 20, 0.25)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Speak With Our Team
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
