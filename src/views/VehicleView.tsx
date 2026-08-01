import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Eye, Wind, Flower2, ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

interface VehicleViewProps {
  openConciergeModal: () => void;
  openBrochureModal: () => void;
}

export const VehicleView: React.FC<VehicleViewProps> = ({ openConciergeModal, openBrochureModal }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);
  const [activeAngleIndex, setActiveAngleIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-swap card every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveHotspot((prev) => {
        const next = (prev === null || prev >= 5) ? 0 : prev + 1;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const vehicleAngles = [
    { title: 'Front 3/4 Perspective', src: '/images/vehicle_view_front_34.png', tag: 'Exterior Studio' },
    { title: 'Rear 3/4 Perspective', src: '/images/vehicle_view_rear_34.png', tag: 'Lift Gate' },
    { title: 'Rear Access Gate', src: '/images/vehicle_view_rear.png', tag: 'Loading Platform' },
    { title: 'Aerial Roof Architecture', src: '/images/vehicle_view_top.png', tag: 'Top-down Blueprint' },
    { title: 'Dual Side Profile', src: '/images/vehicle_view_side_opposite.png', tag: 'Perspective' },
    { title: 'Bier Electro-Hydraulic Sanctuary', src: '/images/eternal_bier_sanctuary.png', tag: 'Sanctuary Interior' },
    { title: 'Panoramic Glass Sanctuary', src: '/images/eternal_glass_sanctuary.png', tag: '360 Privacy Glass' },
    { title: 'Integrated Floral Mounts', src: '/images/eternal_floral_procession.png', tag: 'Procession' },
    { title: 'Climate Roof & Skylight', src: '/images/vehicle_features_roof.png', tag: 'Acoustic Roof' }
  ];

  const hotspots = [
    {
      id: 0,
      title: 'Hydraulic Bier System',
      icon: Sparkles,
      short: 'Patented Whisper Elevation',
      desc: 'Precision electro-hydraulic platform with auto-leveling suspension. Gently lowers and raises with silent fluid movement, eliminating all mechanical clatter.',
      x: '50%',
      y: '65%'
    },
    {
      id: 1,
      title: 'Panoramic Acoustic Glass',
      icon: Eye,
      short: '360° Dual-Tint Privacy',
      desc: 'Electrochromic smart glass that transitions from crystal daylight to 95% opacity dark shade at the touch of a button, guaranteeing family sanctuary privacy.',
      x: '35%',
      y: '35%'
    },
    {
      id: 2,
      title: 'Family Executive Lounge',
      icon: Shield,
      short: 'Ergonomic Ivory Leather',
      desc: 'Hand-stitched leather seating with integrated lumbar heating and whisper ventilation for up to 6 family members and solemn attendants.',
      x: '20%',
      y: '45%'
    },
    {
      id: 3,
      title: 'HEPA-14 Air Purification',
      icon: Wind,
      short: 'Medical-Grade Atmosphere',
      desc: 'Continuous dual ionization and medical-grade HEPA-14 filtration that recycles and purifies interior cabin air every 45 seconds.',
      x: '75%',
      y: '30%'
    },
    {
      id: 4,
      title: 'Dimmable Starlight Lighting',
      icon: Sparkles,
      short: 'Constellation & Halo Illumination',
      desc: 'Calm ambient gold ceiling lighting with fiber-optic starlight effect, mimicking a quiet twilight sky to evoke deep peace.',
      x: '55%',
      y: '20%'
    },
    {
      id: 5,
      title: 'Bespoke Floral Integration',
      icon: Flower2,
      short: 'Champagne Gold Anchors',
      desc: 'Integrated champagne gold floral holders and climate-controlled moisture trays, keeping garlands and orchids vibrant throughout the procession.',
      x: '65%',
      y: '75%'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#2C1810', color: '#FDF8F0' }}>
      
      {/* 1. HERO SHOWCASE (Multi-Angle Studio Gallery) */}
      <section style={{
        padding: '50px 30px 30px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 105, 20, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600 }}>
            PURPOSE-BUILT ARCHITECTURE · ALL STUDIO VIEWS
          </span>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#FDF8F0',
            marginTop: '8px',
            marginBottom: '10px',
            fontWeight: 400
          }}>
            The Silent Journey, <span style={{ fontStyle: 'italic', color: '#8B6914' }}>the Glass Sanctuary</span>
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#D9CBBE',
            lineHeight: 1.7,
            maxWidth: '720px',
            margin: '0 auto 20px',
            fontWeight: 300
          }}>
            Select any perspective below to inspect the engineered details, glass sanctuary, and bespoke interior suite.
          </p>
        </div>

        {/* Vehicle Main Interactive Angle Viewer (Fills Full Screen Viewport) */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative' }}>
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 105, 20, 0.35)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
            backgroundColor: '#1E100A',
            position: 'relative'
          }}>
            <img
              src={vehicleAngles[activeAngleIndex].src}
              alt={vehicleAngles[activeAngleIndex].title}
              style={{
                width: '100%',
                height: 'calc(100vh - 300px)',
                minHeight: '520px',
                maxHeight: '780px',
                objectFit: 'cover',
                display: 'block',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />

            {/* Active Angle Badge */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              backgroundColor: 'rgba(44, 24, 16, 0.88)',
              border: '1px solid #8B6914',
              padding: '10px 20px',
              borderRadius: '30px',
              backdropFilter: 'blur(10px)',
              textAlign: 'left'
            }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>
                {vehicleAngles[activeAngleIndex].tag}
              </span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#FDF8F0' }}>
                {vehicleAngles[activeAngleIndex].title}
              </span>
            </div>
          </div>

          {/* Angle Thumbnail Selector Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px',
            marginTop: '20px'
          }}>
            {vehicleAngles.map((angle, idx) => (
              <button
                key={idx}
                onClick={() => setActiveAngleIndex(idx)}
                style={{
                  backgroundColor: activeAngleIndex === idx ? 'rgba(139, 105, 20, 0.25)' : 'rgba(44, 24, 16, 0.6)',
                  border: activeAngleIndex === idx ? '2px solid #8B6914' : '1px solid rgba(139, 105, 20, 0.2)',
                  borderRadius: '12px',
                  padding: '6px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
              >
                <img
                  src={angle.src}
                  alt={angle.title}
                  style={{
                    width: '100%',
                    height: '65px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '4px',
                    opacity: activeAngleIndex === idx ? 1 : 0.75
                  }}
                />
                <span style={{
                  fontSize: '11px',
                  color: activeAngleIndex === idx ? '#FDF8F0' : '#D9CBBE',
                  fontWeight: activeAngleIndex === idx ? 600 : 400,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'block'
                }}>
                  {angle.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. HANGING PEG CAROUSEL: LUXURY ARCHITECTURE & INNOVATIONS */}
      <section style={{
        padding: '100px 20px 40px',
        background: 'radial-gradient(120% 100% at 50% 20%, #FDF8F0 0%, #F5EFE6 60%, #EFE5D7 100%)',
        color: '#2C1810',
        borderTop: '1px solid rgba(139, 105, 20, 0.25)',
        borderBottom: '1px solid rgba(139, 105, 20, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1350px', margin: '0 auto', textAlign: 'center' }}>
          
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#8B6914',
            textTransform: 'uppercase',
            fontWeight: 600,
            display: 'block',
            marginBottom: '10px'
          }}>
            LUXURY ARCHITECTURE & INNOVATIONS
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 4.5vw, 54px)',
            color: '#2C1810',
            fontWeight: 400,
            marginBottom: '12px'
          }}>
            Explore the Innovations
          </h2>
          <p style={{
            color: '#736458',
            fontSize: '16px',
            maxWidth: '640px',
            margin: '0 auto 40px',
            fontWeight: 400
          }}>
            Select any specification card hanging below to inspect engineered details and luxury features.
          </p>

          {/* Dashed Hanging Line Container with Sliding Physics */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              position: 'relative',
              height: '560px',
              margin: '20px 0',
              overflow: 'hidden',
              userSelect: 'none'
            }}
          >
            {/* Gold Dashed Curve SVG Line */}
            <svg
              width="100%"
              height="70"
              viewBox="0 0 1200 70"
              fill="none"
              preserveAspectRatio="none"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', pointerEvents: 'none', zIndex: 2 }}
            >
              <path
                d="M 0 35 Q 600 -15 1200 35"
                stroke="#8B6914"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                opacity="0.65"
              />
            </svg>

            {/* Left & Right Floating Rope Navigation Arrows */}
            <button
              onClick={() => {
                const prev = (activeHotspot === null || activeHotspot === 0) ? hotspots.length - 1 : activeHotspot - 1;
                setActiveHotspot(prev);
              }}
              aria-label="Previous specification"
              style={{
                position: 'absolute',
                left: '16px',
                top: '40px',
                zIndex: 40,
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(253, 248, 240, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1.5px solid #8B6914',
                color: '#8B6914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(44, 24, 16, 0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              <ChevronLeft size={22} color="#8B6914" />
            </button>

            <button
              onClick={() => {
                const next = (activeHotspot === null || activeHotspot === hotspots.length - 1) ? 0 : activeHotspot + 1;
                setActiveHotspot(next);
              }}
              aria-label="Next specification"
              style={{
                position: 'absolute',
                right: '16px',
                top: '40px',
                zIndex: 40,
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(253, 248, 240, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1.5px solid #8B6914',
                color: '#8B6914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(44, 24, 16, 0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              <ChevronRight size={22} color="#8B6914" />
            </button>

            {/* Absolutely Positioned Sliding Cards on Rope Track */}
            <div style={{ position: 'relative', width: '100%', height: '100%', paddingTop: '15px' }}>
              {hotspots.map((item, idx) => {
                const total = hotspots.length;
                let diff = idx - (activeHotspot ?? 0);
                if (diff < -3) diff += total;
                if (diff > 2) diff -= total;

                // Horizontal position centered at 50%
                const xPct = 50 + diff * 32;
                const t = Math.max(-0.2, Math.min(1.2, xPct / 100));
                
                // Curve Y position along M 0 35 Q 600 -15 1200 35
                const yOffset = 35 - 100 * t * (1 - t);
                const slope = -100 + 200 * t;
                const angle = (Math.atan2(slope, 1200) * (180 / Math.PI)) * 1.5;

                const isSelected = activeHotspot === item.id;
                const isVisible = Math.abs(diff) <= 2;
                const IconComp = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveHotspot(item.id)}
                    onMouseMove={(e) => {
                      const el = e.currentTarget;
                      const rect = el.getBoundingClientRect();
                      const rx = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
                      const ry = ((e.clientX - rect.left) / rect.width - 0.5) * -14;
                      el.style.transform = `translateX(-50%) rotate(${angle}deg) scale(${isSelected ? 1.07 : 0.95}) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = `translateX(-50%) rotate(${angle}deg) scale(${isSelected ? 1.04 : 0.92})`;
                    }}
                    style={{
                      position: 'absolute',
                      left: `${xPct}%`,
                      top: `${yOffset}px`,
                      width: '350px',
                      maxWidth: '85vw',
                      transform: `translateX(-50%) rotate(${angle}deg) scale(${isSelected ? 1.04 : 0.92})`,
                      transition: 'left 0.6s cubic-bezier(0.16, 1, 0.3, 1), top 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                      cursor: 'pointer',
                      zIndex: isSelected ? 30 : 20 - Math.abs(diff),
                      opacity: isVisible ? (isSelected ? 1 : 0.82) : 0,
                      pointerEvents: isVisible ? 'auto' : 'none'
                    }}
                  >
                    {/* Hanging Gold Peg Clip */}
                    <div style={{
                      position: 'absolute',
                      top: '-24px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '18px',
                      height: '32px',
                      backgroundColor: '#8B6914',
                      borderRadius: '4px',
                      border: '1px solid #D4AF37',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                      zIndex: 35,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ width: '4px', height: '14px', backgroundColor: '#FDF8F0', borderRadius: '2px' }} />
                    </div>

                    {/* Main Polaroid-Style Card */}
                    <div style={{
                      backgroundColor: isSelected ? '#FFFFFF' : '#FDF8F0',
                      borderRadius: '20px',
                      padding: '28px 24px',
                      border: isSelected ? '2px solid #8B6914' : '1px solid rgba(139, 105, 20, 0.25)',
                      boxShadow: isSelected
                        ? '0 25px 60px rgba(44, 24, 16, 0.18)'
                        : '0 10px 30px rgba(44, 24, 16, 0.06)',
                      textAlign: 'left',
                      position: 'relative'
                    }}>

                      {/* Top Header Row inside Card: Badge + Icon */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '20px'
                      }}>
                        {/* Top-left Badge Pill */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: isSelected ? 'rgba(139, 105, 20, 0.12)' : 'rgba(139, 105, 20, 0.08)',
                          border: '1px solid rgba(139, 105, 20, 0.3)',
                          padding: '4px 12px',
                          borderRadius: '20px'
                        }}>
                          <Sparkles size={12} color="#8B6914" />
                          <span style={{
                            fontSize: '10px',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#8B6914',
                            fontWeight: 700
                          }}>
                            {item.short}
                          </span>
                        </div>

                        {/* Top-right Quote Emblem */}
                        <div style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(139, 105, 20, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#8B6914'
                        }}>
                          <Quote size={16} />
                        </div>
                      </div>

                      {/* Main Quote Description */}
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14px',
                        lineHeight: 1.7,
                        color: '#2C1810',
                        fontWeight: 500,
                        fontStyle: 'italic',
                        marginBottom: '16px',
                        minHeight: '68px'
                      }}>
                        "{item.desc}"
                      </p>

                      {/* Star Verified Score Badge */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        backgroundColor: 'rgba(139, 105, 20, 0.08)',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        marginBottom: '24px'
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill="#8B6914" color="#8B6914" />
                        ))}
                        <span style={{ fontSize: '11px', color: '#8B6914', fontWeight: 600, marginLeft: '4px' }}>
                          5.0 Verified Spec
                        </span>
                      </div>

                      {/* Divider */}
                      <div style={{ height: '1px', backgroundColor: 'rgba(44, 24, 16, 0.08)', marginBottom: '18px' }} />

                      {/* Card Footer Row: Avatar Icon + Title + CTA */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px'
                      }}>
                        {/* Icon Avatar + Title */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: isSelected ? '#8B6914' : 'rgba(139, 105, 20, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <IconComp size={18} color={isSelected ? '#FDF8F0' : '#8B6914'} />
                          </div>
                          <div>
                            <div style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: '18px',
                              fontWeight: 600,
                              color: '#2C1810',
                              lineHeight: 1.2
                            }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: '11px', color: '#736458' }}>
                              Eternal Specification
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openConciergeModal();
                          }}
                          style={{
                            backgroundColor: isSelected ? '#8B6914' : '#2C1810',
                            color: '#FDF8F0',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '11px',
                            letterSpacing: '0.06em',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <span>Inspect</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERIOR HOSPITALITY SUITE WALKTHROUGH */}
      <section style={{ padding: '120px 40px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }} className="responsive-grid">
          
          <div>
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 600 }}>
              EXECUTIVE INTERIOR EXPERIENCE
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', color: '#FDF8F0', marginTop: '12px', marginBottom: '24px', lineHeight: 1.2 }}>
              A Living Lounge of Reverence
            </h2>

            <p style={{ fontSize: '16px', color: '#B8A99B', lineHeight: 1.8, marginBottom: '36px' }}>
              Unlike traditional mobility options, the Eternal interior functions as a serene private lounge. Soft warm lighting, tactile walnut surfaces, dual-zone climate management, and discreet acoustic insulation create an oasis of tranquility.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              {[
                { label: 'Acoustic Rating', val: '42 dB Silent Cabin' },
                { label: 'Climate Control', val: 'Dual-Zone Digital' },
                { label: 'Bier Elevation', val: 'Whisper Hydraulic' },
                { label: 'Seating Capacity', val: '6 Executive Family' }
              ].map((spec, i) => (
                <div key={i} style={{
                  backgroundColor: '#261B13',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                  <div style={{ fontSize: '11px', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {spec.label}
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: '#FDF8F0', marginTop: '4px' }}>
                    {spec.val}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button
                onClick={openConciergeModal}
                style={{
                  backgroundColor: '#8B6914',
                  color: '#FDF8F0',
                  padding: '16px 32px',
                  borderRadius: '30px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                BOOK VEHICLE INSPECTION
              </button>

              <button
                onClick={openBrochureModal}
                style={{
                  backgroundColor: 'transparent',
                  color: '#D4AF37',
                  padding: '16px 32px',
                  borderRadius: '30px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '17px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  cursor: 'pointer'
                }}
              >
                DOWNLOAD SPEC SHEET
              </button>
            </div>

          </div>

          <div>
            <img
              src="/images/interior_lounge.png"
              alt="Eternal Interior Suite"
              style={{
                width: '100%',
                borderRadius: '20px',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
              }}
            />
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
