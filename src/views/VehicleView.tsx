import React, { useState } from 'react';

interface VehicleViewProps {
  openConciergeModal: () => void;
  openBrochureModal: () => void;
}

export const VehicleView: React.FC<VehicleViewProps> = ({ openConciergeModal }) => {
  const [activeTabSpec, setActiveTabSpec] = useState<'architecture' | 'sanctuary' | 'safety'>('architecture');

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0', color: '#2C1810' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{
        padding: '130px 40px 90px',
        backgroundColor: '#FDF8F0',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            THE ETERNAL CEREMONIAL VEHICLE
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
            The Silent Journey.
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            lineHeight: 1.85,
            color: '#5C4E43',
            maxWidth: '720px',
            marginBottom: '40px',
            fontWeight: 300
          }}>
            A purpose-built ceremonial vehicle engineered around families and the institutions that support them. Uniting quiet coachbuilding precision with state-protocol standards.
          </p>

          <button
            onClick={openConciergeModal}
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
              marginBottom: '60px'
            }}
          >
            Request a Demonstration
          </button>

          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.25)',
            boxShadow: '0 25px 60px rgba(44, 24, 16, 0.08)'
          }}>
            <img
              src="/images/eternal_hearse_light_theme.png"
              alt="The Eternal Ceremonial Vehicle"
              style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 2. STORY SECTION 1: QUIET BY DESIGN */}
      <section style={{ padding: '130px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
                ACOUSTIC ISOLATION
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 52px)', color: '#2C1810', marginBottom: '20px', fontWeight: 400 }}>
                Quiet by Design
              </h2>
              <p style={{ fontSize: '17px', color: '#5C4E43', lineHeight: 1.85, fontWeight: 300, marginBottom: '28px' }}>
                Engineered with multi-layered acoustic glass and vibration-dampening chassis mounts to create a peaceful, isolated sanctuary for family reflection.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Multi-layer acoustic glass isolation', 'Vibration-dampening air suspension', 'Whisper-quiet climate circulation'].map((item, i) => (
                  <li key={i} style={{ fontSize: '15px', color: '#8B6914', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8B6914' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(139, 105, 20, 0.25)' }}>
              <img
                src="/images/eternal_glass_sanctuary.png"
                alt="Panoramic Viewing Glass Sanctuary"
                style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORY SECTION 2: THE SANCTUARY INTERIOR */}
      <section style={{
        padding: '130px 40px',
        backgroundColor: '#F7F2E9',
        borderTop: '1px solid rgba(139, 105, 20, 0.2)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(139, 105, 20, 0.25)' }}>
              <img
                src="/images/eternal_bier_sanctuary.png"
                alt="The Sanctuary Interior"
                style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
                THE SANCTUARY INTERIOR
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 52px)', color: '#2C1810', marginBottom: '20px', fontWeight: 400 }}>
                A Calm Space for Families
              </h2>
              <p style={{ fontSize: '17px', color: '#5C4E43', lineHeight: 1.85, fontWeight: 300, marginBottom: '28px' }}>
                Every mechanical interaction is automated and silent. The patented electro-hydraulic bier elevates seamlessly, avoiding awkward manual handling.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Automated electro-hydraulic bier elevation', 'Champagne gold floral anchoring points', 'Warm dimmable twilight interior lighting'].map((item, i) => (
                  <li key={i} style={{ fontSize: '15px', color: '#8B6914', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8B6914' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REFINED TECHNICAL SPECIFICATIONS TABLE (No ratings or star language) */}
      <section style={{ padding: '130px 40px', backgroundColor: '#FDF8F0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              TECHNICAL DATA
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4.2vw, 54px)', color: '#2C1810', fontWeight: 400 }}>
              Technical Specifications
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            {[
              { id: 'architecture', label: 'Architecture & Frame' },
              { id: 'sanctuary', label: 'The Sanctuary' },
              { id: 'safety', label: 'Hygiene & Security' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTabSpec(tab.id as any)}
                style={{
                  backgroundColor: activeTabSpec === tab.id ? '#8B6914' : '#FFFFFF',
                  color: activeTabSpec === tab.id ? '#FDF8F0' : '#2C1810',
                  padding: '10px 24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(139, 105, 20, 0.3)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid rgba(139, 105, 20, 0.25)',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(44, 24, 16, 0.05)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <tbody>
                {activeTabSpec === 'architecture' && [
                  ['Chassis Architecture', 'Custom Long Wheelbase Heavy-Duty Coach Platform', 'Standard specification'],
                  ['Engine & Suspension', 'Low-Vibration Diesel Engine with Air Suspension', 'Standard specification'],
                  ['Overall Length', '6,200 mm Extended Coach Body', 'Standard specification'],
                  ['Viewing Chamber', '360° Electrochromic Dimmable Smart Glass', 'Included configuration']
                ].map(([label, val, cat], idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(139, 105, 20, 0.15)' }}>
                    <td style={{ padding: '20px 28px', color: '#8B6914', fontWeight: 600, width: '35%', fontSize: '15px' }}>{label}</td>
                    <td style={{ padding: '20px 28px', color: '#2C1810', fontSize: '15px', fontWeight: 300, width: '45%' }}>{val}</td>
                    <td style={{ padding: '20px 28px', color: '#736458', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', width: '20%' }}>{cat}</td>
                  </tr>
                ))}

                {activeTabSpec === 'sanctuary' && [
                  ['Bier Elevation', 'Patented Electro-Hydraulic Whisper Mechanism', 'Included configuration'],
                  ['Atmosphere Control', 'HEPA-14 Air Sterilization & Multi-Zone Temperature Management', 'Standard specification'],
                  ['Seating Area', 'Hand-Stitched Leather Family Seating Suite', 'Standard specification'],
                  ['Interior Illumination', 'Warm Indirect Dimmable LED Strip Lighting', 'Included configuration']
                ].map(([label, val, cat], idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(139, 105, 20, 0.15)' }}>
                    <td style={{ padding: '20px 28px', color: '#8B6914', fontWeight: 600, width: '35%', fontSize: '15px' }}>{label}</td>
                    <td style={{ padding: '20px 28px', color: '#2C1810', fontSize: '15px', fontWeight: 300, width: '45%' }}>{val}</td>
                    <td style={{ padding: '20px 28px', color: '#736458', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', width: '20%' }}>{cat}</td>
                  </tr>
                ))}

                {activeTabSpec === 'safety' && [
                  ['Hygiene Standard', 'Hospital-Grade UV-C & Antimicrobial Surface Sanitization', 'Standard specification'],
                  ['Security Features', 'GPS Tracking & Integrated Escort Coordination', 'Standard specification'],
                  ['Operational Readiness', 'Structured Fleet Maintenance Program', 'Institutional option'],
                  ['Chaperone Attire', 'White-Glove Uniformed Attire', 'Standard specification']
                ].map(([label, val, cat], idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(139, 105, 20, 0.15)' }}>
                    <td style={{ padding: '20px 28px', color: '#8B6914', fontWeight: 600, width: '35%', fontSize: '15px' }}>{label}</td>
                    <td style={{ padding: '20px 28px', color: '#2C1810', fontSize: '15px', fontWeight: 300, width: '45%' }}>{val}</td>
                    <td style={{ padding: '20px 28px', color: '#736458', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', width: '20%' }}>{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section style={{
        padding: '130px 40px',
        backgroundColor: '#2A140D',
        color: '#FDF8F0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{ color: '#8B6914', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            DEMONSTRATION & INSPECTION
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 5vw, 60px)',
            color: '#FDF8F0',
            marginBottom: '20px',
            fontWeight: 400
          }}>
            Experience the Vehicle in Person.
          </h2>
          <p style={{
            color: '#D9CBBE',
            fontSize: '17.5px',
            lineHeight: 1.8,
            marginBottom: '44px',
            fontWeight: 300
          }}>
            Schedule a demonstration or vehicle inspection with our protocol team in Delhi NCR.
          </p>

          <button
            onClick={openConciergeModal}
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
              boxShadow: '0 10px 30px rgba(139, 105, 20, 0.3)'
            }}
          >
            Request a Demonstration
          </button>
        </div>
      </section>

    </div>
  );
};
