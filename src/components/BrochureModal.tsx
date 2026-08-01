import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle, ShieldCheck } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Trigger virtual file download
    const element = document.createElement('a');
    const file = new Blob([
      `ETERNAL REPOS INDIA - INSTITUTIONAL DOSSIER 2026\n\n` +
      `Official Executive Presentation for Healthcare Institutions, Municipal Bodies, and Religious Trusts.\n\n` +
      `Pillars:\n` +
      `1. Silent Hydraulic Bier Engineering\n` +
      `2. Medical-Grade Dual HEPA-14 & Ionization Air Purification\n` +
      `3. 100% SLA Guarantee & 15-Minute Concierge Response\n` +
      `4. Custom Fleet Leasing & Turnkey Operation\n\n` +
      `Contact Direct: +91 1800-ETERNAL | concierge@eternalrepos.in`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Eternal_Institutional_Dossier_2026.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
        backgroundColor: '#2C1810',
        color: '#FDF8F0',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '580px',
        border: '1px solid rgba(139, 105, 20, 0.4)',
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)',
        position: 'relative',
        overflow: 'hidden'
      }} className="animate-fade-in">
        
        {/* Header */}
        <div style={{
          padding: '32px 32px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}>
          <div>
            <div style={{ backgroundColor: '#FDF8F0', padding: '10px 20px', borderRadius: '10px', display: 'inline-block', marginBottom: '14px' }}>
              <img src="/images/logo.png" alt="Eternal Repos" style={{ height: '58px', width: 'auto', display: 'block' }} />
            </div>
            <span style={{ color: '#8B6914', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>
              EXECUTIVE DOSSIER 2026
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#FDF8F0', marginTop: '4px' }}>
              Institutional Partnership Dossier
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              color: '#D9CBBE',
              backgroundColor: 'rgba(255,255,255,0.08)',
              padding: '6px',
              borderRadius: '50%'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Dossier Preview Card */}
        <div style={{ padding: '0 32px 32px' }}>
          <div style={{
            backgroundColor: '#24140D',
            borderRadius: '12px',
            border: '1px solid rgba(139, 105, 20, 0.25)',
            padding: '24px',
            marginBottom: '24px',
            display: 'flex',
            gap: '20px',
            alignItems: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '84px',
              backgroundColor: '#2C1810',
              borderRadius: '6px',
              border: '1px solid #8B6914',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <FileText size={28} color="#8B6914" />
              <span style={{ fontSize: '10px', color: '#8B6914', marginTop: '6px', letterSpacing: '0.1em', fontWeight: 600 }}>PDF</span>
            </div>

            <div>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#FDF8F0', marginBottom: '6px' }}>
                Eternal Repos — Enterprise Mobility Specifications
              </h4>
              <p style={{ fontSize: '13px', color: '#B8A99B', lineHeight: 1.5 }}>
                28-page comprehensive briefing on hydraulic bier patents, hospital SLA frameworks, fleet leasing economics, and hygiene protocols.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', fontSize: '13px', color: '#B8A99B' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={16} color="#D4AF37" /> ISO 9001 & NABH Compliance Integration Guidelines
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={16} color="#D4AF37" /> Financial Modeling & Leasing Terms for Healthcare Chains
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={16} color="#D4AF37" /> State Protocol & Municipal Governance Case Studies
            </div>
          </div>

          {downloaded ? (
            <div style={{
              backgroundColor: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid #D4AF37',
              borderRadius: '30px',
              padding: '16px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              color: '#D4AF37'
            }}>
              <CheckCircle size={20} />
              <span style={{ fontSize: '14px', letterSpacing: '0.05em' }}>Dossier Downloaded Successfully</span>
            </div>
          ) : (
            <button
              onClick={handleDownload}
              style={{
                width: '100%',
                backgroundColor: '#8B6914',
                color: '#FDF8F0',
                padding: '16px',
                borderRadius: '30px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 10px 30px rgba(139, 105, 20, 0.3)'
              }}
            >
              <Download size={18} /> DOWNLOAD DOSSIER (PDF, 8.4 MB)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
