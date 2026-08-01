import React, { useState } from 'react';
import { Phone, MapPin, Mail, ShieldCheck, CheckCircle2, Send, Clock } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    city: 'Delhi NCR',
    natureOfInquiry: 'Vehicle Fabrication',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0' }}>
      
      {/* 1 · EDITORIAL HEADER (Compact) */}
      <section style={{
        padding: '30px 40px 15px',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4.5vw, 54px)',
          color: '#2C1810',
          marginBottom: '8px',
          fontWeight: 400,
          lineHeight: 1.15
        }}>
          Discreet. Dedicated. <br />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1em', fontStyle: 'italic', color: '#8B6914' }}>Always Available</span>
        </h1>

        <div style={{ width: '60px', height: '1.5px', backgroundColor: '#8B6914', margin: '8px auto 14px' }} />

        <p style={{
          fontSize: '16px',
          color: '#736458',
          lineHeight: 1.7,
          fontWeight: 300,
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Our executive concierge directors are available 24 hours a day, 365 days a year for institutional fleet leasing, bespoke vehicle fabrication, and priority mobilization.
        </p>
      </section>

      {/* 2 · MAIN CONTENT GRID */}
      <section style={{ padding: '10px 40px 80px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.25fr',
          gap: '50px'
        }} className="responsive-grid">
          
          {/* Left Column: Direct Hotlines, WhatsApp, Response Promise & Address */}
          <div>
            
            {/* Response Time Promise Badge */}
            <div style={{
              backgroundColor: '#2C1810',
              color: '#FDF8F0',
              padding: '36px 32px',
              borderRadius: '20px',
              border: '1px solid #8B6914',
              marginBottom: '32px',
              boxShadow: '0 20px 45px rgba(44, 24, 16, 0.12)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B6914', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>
                <Clock size={14} /> RESPONSE TIME PROMISE
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#FDF8F0', marginBottom: '8px', fontWeight: 500 }}>
                “We respond within 24 business hours”
              </h3>

              <p style={{ color: '#D9CBBE', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', fontWeight: 300 }}>
                For priority hospital dispatches or diplomatic emergencies, our dedicated hotline operates 24/7 with immediate response.
              </p>

              {/* WhatsApp Business Click-to-Chat Button (WhatsApp Icon Only) */}
              <a
                href="https://wa.me/919818000000?text=Hello%20Eternal%20Repos%20Concierge,%20I%20would%20like%20to%20inquire%20about%20ceremonial%20services."
                target="_blank"
                rel="noreferrer"
                title="Chat via WhatsApp Business"
                aria-label="Chat via WhatsApp Business"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  boxShadow: '0 8px 22px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(37, 211, 102, 0.35)';
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path fill="#FFFFFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.758 0-3.46-.46-4.956-1.332l-.356-.209-3.684.966.983-3.593-.229-.365c-.958-1.528-1.464-3.298-1.464-5.114 0-5.32 4.323-9.643 9.645-9.643 2.578 0 5.001 1.004 6.822 2.827 1.82 1.823 2.824 4.246 2.824 6.82 0 5.322-4.323 9.644-9.645 9.644m0-21.688C5.782.155.155 5.782.155 12.443c0 2.13.555 4.21 1.61 6.04L0 24l5.688-1.491c1.764.96 3.755 1.464 5.78 1.464 11.756 0 17.632-9.524 11.756-17.632A12.213 12.213 0 0 0 12.051.155z"/>
                </svg>
              </a>
            </div>

            {/* Prominent Contact Info Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid rgba(139, 105, 20, 0.2)',
              marginBottom: '32px',
              boxShadow: '0 15px 35px rgba(44, 24, 16, 0.04)'
            }}>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#2C1810', marginBottom: '20px', fontWeight: 500 }}>
                Direct Hotline & Email
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="tel:+911140008800"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#2C1810' }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(139, 105, 20, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} color="#8B6914" />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>24/7 Central Dispatch</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600 }}>+91 (0) 11 4000 8800</span>
                  </div>
                </a>

                <a
                  href="mailto:concierge@eternalrepos.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#2C1810' }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(139, 105, 20, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} color="#8B6914" />
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>Official Inquiry Email</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600 }}>concierge@eternalrepos.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Address & Embedded Google Maps */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid rgba(139, 105, 20, 0.2)',
              boxShadow: '0 15px 35px rgba(44, 24, 16, 0.04)'
            }}>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#2C1810', marginBottom: '12px', fontWeight: 500 }}>
                Delhi NCR Headquarters
              </h4>

              <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#736458', lineHeight: 1.6, marginBottom: '20px' }}>
                <MapPin size={18} color="#8B6914" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Eternal Repos HQ, Azimuth Mobility Complex, Plot 42, Sector 44, Institutional Area, Gurugram, Delhi NCR - 122003, India</span>
              </div>

              {/* Embedded Google Maps Container */}
              <div style={{
                width: '100%',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(139, 105, 20, 0.25)'
              }}>
                <iframe
                  title="Eternal Repos Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.730390161405!2d77.0673!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d4e9b94cfd%3A0x6b772c51010!2sSector%2044%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Complete Inquiry Form */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '48px 40px',
            borderRadius: '20px',
            border: '1px solid rgba(139, 105, 20, 0.25)',
            boxShadow: '0 20px 45px rgba(44, 24, 16, 0.05)'
          }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#2C1810', marginBottom: '8px', fontWeight: 500 }}>
              Confidential Service Inquiry
            </h3>
            <p style={{ fontSize: '14px', color: '#736458', marginBottom: '32px', fontWeight: 300 }}>
              Submit your specific requirements below. Our concierge team will review and contact you within 24 business hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '50px 20px' }}>
                <CheckCircle2 size={56} color="#8B6914" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', marginBottom: '10px' }}>
                  Inquiry Successfully Received
                </h4>
                <p style={{ color: '#736458', fontSize: '15px', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>
                  Thank you. An Executive Director has been assigned to your case and will respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* 1. Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 700, marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
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

                {/* 2. Organisation & City (2-column) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="responsive-grid">
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 700, marginBottom: '6px' }}>
                      Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Company / Hospital / Firm"
                      value={form.organisation}
                      onChange={e => setForm({ ...form, organisation: e.target.value })}
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
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 700, marginBottom: '6px' }}>
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. New Delhi / Gurugram"
                      value={form.city}
                      onChange={e => setForm({ ...form, city: e.target.value })}
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

                {/* 3. Phone & Email (2-column) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="responsive-grid">
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 700, marginBottom: '6px' }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
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
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 700, marginBottom: '6px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
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

                {/* 4. Nature of Inquiry Dropdown */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 700, marginBottom: '6px' }}>
                    Nature of Inquiry *
                  </label>
                  <select
                    value={form.natureOfInquiry}
                    onChange={e => setForm({ ...form, natureOfInquiry: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(44, 24, 16, 0.2)',
                      backgroundColor: '#FDF8F0',
                      fontSize: '14px',
                      outline: 'none',
                      color: '#2C1810'
                    }}
                  >
                    <option value="Vehicle Fabrication">Vehicle Fabrication (Custom Coachbuilding)</option>
                    <option value="Vehicle Leasing">Vehicle Leasing (Turnkey Fleet Leasing)</option>
                    <option value="Fleet Maintenance (AMC)">Fleet Maintenance (AMC)</option>
                    <option value="Refrigeration Systems">Refrigeration Systems Maintenance</option>
                    <option value="Branding & Customisation">Branding & Customisation</option>
                    <option value="Hygiene & Sanitization">Hygiene & Sanitization Protocols</option>
                    <option value="General Concierge">General Concierge / Protocol Consultation</option>
                  </select>
                </div>

                {/* 5. Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 700, marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding your inquiry, fleet size, or institutional specifications..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(44, 24, 16, 0.2)',
                      backgroundColor: '#FDF8F0',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#2C1810',
                    color: '#FDF8F0',
                    padding: '16px',
                    borderRadius: '30px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    border: '1px solid #8B6914',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(139, 105, 20, 0.25)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Send size={16} color="#8B6914" />
                  <span>Submit Inquiry</span>
                </button>

                <div style={{ textAlign: 'center', fontSize: '11px', color: '#736458', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '6px' }}>
                  <ShieldCheck size={14} color="#8B6914" /> Strict Non-Disclosure & Confidentiality Assured
                </div>
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
