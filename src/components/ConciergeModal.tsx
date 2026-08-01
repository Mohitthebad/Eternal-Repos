import React, { useState } from 'react';
import { X, Shield, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Private Family',
    city: 'Delhi NCR',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(44, 24, 16, 0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#FDF8F0',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '560px',
        border: '1px solid rgba(139, 105, 20, 0.3)',
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.4)',
        position: 'relative',
        overflow: 'hidden'
      }} className="animate-fade-in">
        
        {/* Top Header */}
        <div style={{
          backgroundColor: '#2C1810',
          padding: '28px 32px',
          color: '#FDF8F0',
          position: 'relative',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              color: '#B8A99B',
              backgroundColor: 'rgba(255,255,255,0.05)',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D4AF37', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
            <Sparkles size={14} /> 24/7 Priority Protocol
          </div>
          <div style={{ backgroundColor: '#FDF8F0', padding: '10px 20px', borderRadius: '10px', display: 'inline-block', marginBottom: '18px' }}>
            <img src="/images/logo.png" alt="Eternal Repos" style={{ height: '64px', width: 'auto', display: 'block' }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 500, color: '#FDF8F0', margin: 0 }}>
            Private Concierge Request
          </h2>
          <p style={{ color: '#B8A99B', fontSize: '13px', marginTop: '6px', margin: 0 }}>
            Guaranteed discreet callback by an Eternal Executive Director within 15 minutes.
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <CheckCircle2 size={54} color="#8B6914" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#2C1810', marginBottom: '12px' }}>
                Your Request Has Been Received
              </h3>
              <p style={{ color: '#736458', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                An Eternal Senior Director is preparing your confidential consultation. If urgent assistance is required immediately, please dial our direct line below.
              </p>
              <a
                href="tel:18003837625"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#2C1810',
                  color: '#8B6914',
                  padding: '14px 28px',
                  borderRadius: '30px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  fontWeight: 600
                }}
              >
                <Phone size={20} /> Call +91 1800-ETERNAL
              </a>
              <div style={{ marginTop: '24px' }}>
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  style={{ color: '#8B6914', fontSize: '13px', textDecoration: 'underline' }}
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                  Full Name / Institution Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Royal Estate Concierge / Max Healthcare"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(44, 24, 16, 0.2)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                    Direct Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(44, 24, 16, 0.2)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                    City / Location
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(44, 24, 16, 0.2)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Other Metropolitan">Other Metropolitan</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                  Nature of Enquiry
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(44, 24, 16, 0.2)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                >
                  <option value="Private Family">Immediate Private Family Protocol</option>
                  <option value="Institutional Fleet Leasing">Institutional Fleet Leasing (Hospitals / Estates)</option>
                  <option value="Bespoke Coach Fabrication">Bespoke Vehicle Fabrication</option>
                  <option value="Diplomatic & State Transport">Diplomatic & State Transport</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C1810', fontWeight: 600, marginBottom: '6px' }}>
                  Confidential Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention any specific floral, protocol, or scheduling requirements..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(44, 24, 16, 0.2)',
                    backgroundColor: '#FFFFFF',
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
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  border: '1px solid #8B6914',
                  marginTop: '8px',
                  boxShadow: '0 8px 25px rgba(139, 105, 20, 0.25)',
                  cursor: 'pointer'
                }}
              >
                DISPATCH CONCIERGE REQUEST
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#736458', fontSize: '12px', marginTop: '4px' }}>
                <Shield size={14} color="#8B6914" /> Strict Non-Disclosure & Privacy Assurance
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
