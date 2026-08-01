import React, { useState, useEffect } from 'react';
import { X, Sparkles, Maximize2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const GalleryView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  // #3 + #6 Scroll reveal observer
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    try {
      if (document.documentElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } catch (e) {
      // Ignore full screen permissions error if blocked
    }
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    } catch (e) {
      // Ignore exit full screen error
    }
  };

  const galleryItems = [
    {
      id: 1,
      category: 'vehicle',
      categoryLabel: 'Exterior Studio',
      title: 'Front 3/4 Ceremonial Perspective',
      subtitle: 'Wide-body chassis with champagne gold trim and panoramic glass',
      image: '/images/vehicle_view_front_34.png'
    },
    {
      id: 4,
      category: 'vehicle',
      categoryLabel: 'Exterior Studio',
      title: 'Dual Side Perspective',
      subtitle: 'Clean architectural lines designed for high-profile state protocols',
      image: '/images/vehicle_view_side_opposite.png'
    },
    {
      id: 5,
      category: 'vehicle',
      categoryLabel: 'Exterior Studio',
      title: 'Rear 3/4 Ceremonial Angle',
      subtitle: 'Gentle hydraulic lift gate with wide-access ceremonial entry',
      image: '/images/vehicle_view_rear_34.png'
    },
    {
      id: 6,
      category: 'vehicle',
      categoryLabel: 'Exterior Studio',
      title: 'Rear Gate Access View',
      subtitle: 'Flush-loading floor with whisper-quiet electro-hydraulic bier',
      image: '/images/vehicle_view_rear.png'
    },
    {
      id: 7,
      category: 'vehicle',
      categoryLabel: 'Blueprint Architecture',
      title: 'Aerial Roof & Skylight Architecture',
      subtitle: 'Top-down perspective showing full-length panoramic ceiling',
      image: '/images/vehicle_view_top.png'
    },
    {
      id: 8,
      category: 'detailing',
      categoryLabel: 'Craftsmanship Details',
      title: 'Climate Roof & Skylight Integration',
      subtitle: 'Solar-controlled glass with acoustic isolation and starlight LEDs',
      image: '/images/vehicle_features_roof.png'
    },
    {
      id: 9,
      category: 'sanctuary',
      categoryLabel: 'Sanctuary Pavilion',
      title: 'Electro-Hydraulic Bier Sanctuary',
      subtitle: 'Patented whisper elevation platform with auto-leveling suspension',
      image: '/images/eternal_bier_sanctuary.png'
    },
    {
      id: 10,
      category: 'sanctuary',
      categoryLabel: 'Sanctuary Pavilion',
      title: '360° Panoramic Acoustic Glass Sanctuary',
      subtitle: 'Electrochromic privacy glass with dimmable warmth control',
      image: '/images/eternal_glass_sanctuary.png'
    },
    {
      id: 12,
      category: 'vehicle',
      categoryLabel: 'State Protocol',
      title: 'Ceremonial Exterior Procession View I',
      subtitle: 'Dignified roadside presence during formal procession protocol',
      image: '/images/eternal_ceremonial_exterior_1.png'
    },
    {
      id: 13,
      category: 'vehicle',
      categoryLabel: 'State Protocol',
      title: 'Ceremonial Exterior Procession View II',
      subtitle: 'Polished walnut and gold trim highlighting architectural grace',
      image: '/images/eternal_ceremonial_exterior_2.png'
    },
    {
      id: 14,
      category: 'vehicle',
      categoryLabel: 'State Protocol',
      title: 'Ceremonial Hearse Perspective III',
      subtitle: 'Custom chassis tuned for vibration-free slow procession cruising',
      image: '/images/eternal_ceremonial_hearse_3.png'
    },
    {
      id: 15,
      category: 'vehicle',
      categoryLabel: 'State Protocol',
      title: 'Ceremonial Hearse Perspective IV',
      subtitle: 'State-protocol ready hearse mobility with institutional flags',
      image: '/images/eternal_ceremonial_hearse_4.png'
    },
    {
      id: 16,
      category: 'vehicle',
      categoryLabel: 'State Protocol',
      title: 'Ceremonial Hearse Perspective V',
      subtitle: 'Night procession setup featuring halo illumination accents',
      image: '/images/eternal_ceremonial_hearse_5.png'
    },
    {
      id: 17,
      category: 'detailing',
      categoryLabel: 'Craftsmanship Details',
      title: 'Integrated Floral Mounting & Garlands',
      subtitle: 'Champagne gold anchor points for orchids and floral wreaths',
      image: '/images/eternal_floral_procession.png'
    },
    {
      id: 18,
      category: 'vehicle',
      categoryLabel: 'Exterior Studio',
      title: 'Warm Ivory Theme Ceremonial Hearse',
      subtitle: 'Special edition warm ivory exterior with champagne gold trim',
      image: '/images/eternal_hearse_light_theme.png'
    },
    {
      id: 19,
      category: 'interior',
      categoryLabel: 'Interior Suite',
      title: 'Starlight Executive Lounge',
      subtitle: 'Fiber-optic twilight starlight ceiling with dimmable ambient glow',
      image: '/images/interior_lounge.png'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const activeItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FDF8F0' }}>
      
      {/* Editorial Header (Magazine Monograph Style - Compact) */}
      <section style={{
        padding: '30px 40px 15px',
        textAlign: 'center',
        maxWidth: '1050px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          color: '#2C1810',
          marginBottom: '8px',
          fontWeight: 400,
          lineHeight: 1.12
        }}>
          The Ceremonial <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1em', fontStyle: 'italic', color: '#8B6914', fontWeight: 400 }}>Chronicle</span>
        </h1>

        {/* Gold accent line */}
        <div style={{ width: '60px', height: '1.5px', backgroundColor: '#8B6914', margin: '8px auto 14px' }} />

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '17px',
          fontStyle: 'italic',
          color: '#736458',
          lineHeight: 1.6,
          maxWidth: '750px',
          margin: '0 auto 10px'
        }}>
          “A curated visual monograph documenting the craftsmanship, sanctuary engineering, and solemn elegance of India’s premier ceremonial hearse mobility platform.”
        </p>
      </section>

      {/* Category Filter Chips (Editorial Index Strip) */}
      <section style={{ padding: '0 40px 24px', maxWidth: '1250px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(139, 105, 20, 0.18)',
          paddingBottom: '16px'
        }}>
          {[
            { id: 'all', label: 'INDEX · ALL PLATES' },
            { id: 'vehicle', label: 'EXTERIOR ARCHITECTURE' },
            { id: 'interior', label: 'INTERIOR SANCTUARY' },
            { id: 'sanctuary', label: 'SANCTUARY PAVILIONS' },
            { id: 'detailing', label: 'CRAFTSMANSHIP DETAILS' },
          ].map(tab => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  padding: '9px 22px',
                  borderRadius: '30px',
                  backgroundColor: isActive ? '#8B6914' : 'transparent',
                  color: isActive ? '#FDF8F0' : '#2C1810',
                  border: isActive ? '1px solid #8B6914' : '1px solid rgba(139, 105, 20, 0.25)',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Editorial Exhibition Layout */}
      <section style={{ padding: '20px 40px 120px', maxWidth: '1350px', margin: '0 auto' }}>
        
        {/* 1. LEAD HERO FEATURED MONOGRAPH PLATE (Only visible when 'all' or 'vehicle' active) */}
        {(activeCategory === 'all' || activeCategory === 'vehicle') && filteredItems.length > 0 && (
          <div
            onClick={() => openImageModal(0)}
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '40px',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(139, 105, 20, 0.25)',
              boxShadow: '0 20px 50px rgba(44, 24, 16, 0.08)',
              marginBottom: '60px',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
            className="responsive-grid luxury-card-hover"
          >
            {/* Hero Image */}
            <div style={{ position: 'relative', height: '460px', overflow: 'hidden' }}>
              <img
                src={filteredItems[0].image}
                alt={filteredItems[0].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.8s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: '#2C1810',
                color: '#8B6914',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 700,
                border: '1px solid #8B6914'
              }}>
                LEAD MONOGRAPH PLATE 01
              </div>
            </div>

            {/* Editorial Copy Box */}
            <div style={{
              padding: '48px 40px 48px 10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
                CURATOR'S CHOICE · FLAGSHIP SPECIFICATION
              </span>

              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '38px',
                color: '#2C1810',
                lineHeight: 1.2,
                fontWeight: 400,
                marginBottom: '16px'
              }}>
                {filteredItems[0].title}
              </h2>

              <p style={{
                fontSize: '15px',
                color: '#736458',
                lineHeight: 1.8,
                marginBottom: '28px',
                fontWeight: 400
              }}>
                {filteredItems[0].subtitle}. Engineered from the chassis up for quiet dignity, smooth acceleration, and solemn presence across Delhi NCR.
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#2C1810',
                color: '#FDF8F0',
                padding: '12px 24px',
                borderRadius: '30px',
                fontSize: '11px',
                letterSpacing: '0.12em',
                fontWeight: 600,
                textTransform: 'uppercase',
                width: 'fit-content',
                border: '1px solid #8B6914'
              }}>
                <span>INSPECT MONOGRAPH PLATE</span>
                <ArrowRight size={13} color="#8B6914" />
              </div>
            </div>
          </div>
        )}

        {/* 2. EDITORIAL ASYMMETRIC GALLERY GRID — #3 stacked deck + #13 hover zoom */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '36px'
        }} className="responsive-grid">
          {filteredItems.slice(activeCategory === 'all' ? 1 : 0).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openImageModal(activeCategory === 'all' ? idx + 1 : idx)}
              className={`scroll-reveal scroll-reveal-delay-${(idx % 5) + 1}`}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(139, 105, 20, 0.2)',
                boxShadow: '0 15px 35px rgba(44, 24, 16, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.4s ease'
              }}
            >
              {/* Photo Frame — #13 gallery-thumb hover zoom */}
              <div className="gallery-thumb" style={{ height: '340px', backgroundColor: '#2C1810' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.8s ease'
                  }}
                />

                {/* Scrim Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(44, 24, 16, 0.08) 40%, rgba(44, 24, 16, 0.75) 100%)'
                }} />

                {/* Figure Number Tag */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(44, 24, 16, 0.85)',
                  border: '1px solid rgba(139, 105, 20, 0.35)',
                  color: '#8B6914',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700
                }}>
                  FIG. 0{idx + 2} · {item.categoryLabel}
                </div>

                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(44, 24, 16, 0.75)',
                  border: '1px solid rgba(139, 105, 20, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8B6914'
                }}>
                  <Maximize2 size={15} />
                </div>

                {/* #13 Hover overlay caption slide-up */}
                <div className="gallery-thumb-overlay">
                  <div className="gallery-thumb-caption">
                    <span style={{ fontSize: '9px', letterSpacing: '0.18em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '3px' }}>{item.categoryLabel}</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', color: '#FDF8F0' }}>{item.title}</span>
                  </div>
                </div>
              </div>

              {/* Caption Area */}
              <div style={{ padding: '24px 28px' }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '24px',
                  color: '#2C1810',
                  marginBottom: '6px',
                  fontWeight: 500,
                  lineHeight: 1.25
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#736458', lineHeight: 1.6, marginBottom: '14px' }}>
                  {item.subtitle}
                </p>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#8B6914',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  <span>INSPECT PLATE</span>
                  <ArrowRight size={12} color="#8B6914" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. EDITORIAL MONOGRAPH PULL QUOTE STRIP */}
        <div style={{
          margin: '80px 0 20px',
          padding: '60px 40px',
          backgroundColor: '#2C1810',
          color: '#FDF8F0',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid #8B6914'
        }}>
          <div style={{ width: '40px', height: '1.5px', backgroundColor: '#8B6914', margin: '0 auto 20px' }} />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: '#FDF8F0',
            lineHeight: 1.45,
            maxWidth: '850px',
            margin: '0 auto 16px'
          }}>
            “In moments of quiet farewell, true craftsmanship speaks without raising its voice.”
          </p>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6914', fontWeight: 600 }}>
            — CURATOR'S MONOGRAPH NOTES, ETERNAL ARCHIVES
          </span>
        </div>

      </section>

      {/* Cinematic Brand Film Modal Simulator */}
      {videoModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 10, 7, 0.94)',
          backdropFilter: 'blur(20px)',
          zIndex: 3000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1000px',
            backgroundColor: '#2C1810',
            borderRadius: '20px',
            border: '1px solid rgba(139, 105, 20, 0.4)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <button
              onClick={() => setVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: '#FDF8F0',
                backgroundColor: 'rgba(0,0,0,0.5)',
                padding: '8px',
                borderRadius: '50%',
                zIndex: 10,
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#000' }}>
              <img
                src="/images/eternal_ceremonial_exterior_1.png"
                alt="Brand Film Poster"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.85
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FDF8F0',
                textAlign: 'center',
                padding: '20px',
                background: 'linear-gradient(0deg, rgba(26,18,12,0.9) 0%, rgba(0,0,0,0.3) 100%)'
              }}>
                <Sparkles size={36} color="#8B6914" style={{ marginBottom: '16px' }} />
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: '#FDF8F0' }}>
                  "The Architecture of Farewell"
                </h2>
                <p style={{ color: '#D9CBBE', fontSize: '15px', maxWidth: '500px', margin: '8px 0 24px' }}>
                  A 3-minute cinematic film detailing India's first purpose-built ceremonial hearse.
                </p>
                <div style={{
                  backgroundColor: 'rgba(139, 105, 20, 0.2)',
                  border: '1px solid #8B6914',
                  color: '#8B6914',
                  padding: '12px 28px',
                  borderRadius: '30px',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  fontWeight: 600
                }}>
                  CINEMATIC STREAMING PREVIEW
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Edge-to-Edge Image Lightbox Modal */}
      {activeItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0A0806',
          zIndex: 3000,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflow: 'hidden'
        }} className="animate-fade-in">
          
          {/* Main Full-Bleed Image Viewport Area (Zero Extra Padding) */}
          <div style={{
            flex: 1,
            width: '100%',
            height: 'calc(100vh - 75px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundColor: '#0A0806'
          }}>
            {/* Left Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (selectedImageIndex !== null) {
                  const prevIndex = selectedImageIndex === 0 ? filteredItems.length - 1 : selectedImageIndex - 1;
                  setSelectedImageIndex(prevIndex);
                }
              }}
              aria-label="Previous Image"
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(20, 14, 10, 0.65)',
                border: '1px solid rgba(139, 105, 20, 0.4)',
                color: '#8B6914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 30,
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(139, 105, 20, 0.3)';
                e.currentTarget.style.color = '#FDF8F0';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(20, 14, 10, 0.65)';
                e.currentTarget.style.color = '#8B6914';
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Main Image (Maximized to Fill Viewport) */}
            <img
              src={activeItem.image}
              alt={activeItem.title}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />

            {/* Right Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (selectedImageIndex !== null) {
                  const nextIndex = selectedImageIndex === filteredItems.length - 1 ? 0 : selectedImageIndex + 1;
                  setSelectedImageIndex(nextIndex);
                }
              }}
              aria-label="Next Image"
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(20, 14, 10, 0.65)',
                border: '1px solid rgba(139, 105, 20, 0.4)',
                color: '#8B6914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 30,
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(139, 105, 20, 0.3)';
                e.currentTarget.style.color = '#FDF8F0';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(20, 14, 10, 0.65)';
                e.currentTarget.style.color = '#8B6914';
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Bottom Dark Caption Bar */}
          <div style={{
            width: '100%',
            height: '75px',
            backgroundColor: '#140D08',
            borderTop: '1px solid rgba(139, 105, 20, 0.2)',
            padding: '12px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            zIndex: 40
          }}>
            <div>
              <span style={{ fontSize: '9px', letterSpacing: '0.18em', color: '#8B6914', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                {activeItem.categoryLabel.toUpperCase()} · ARCHIVE {(selectedImageIndex ?? 0) + 1} OF {filteredItems.length}
              </span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#FDF8F0', margin: 0, fontWeight: 500, lineHeight: 1.1 }}>
                {activeItem.title}
              </h3>
              <p style={{ color: '#A69585', fontSize: '11px', margin: '2px 0 0', opacity: 0.9 }}>
                {activeItem.subtitle}
              </p>
            </div>

            <button
              onClick={closeImageModal}
              style={{
                backgroundColor: 'rgba(139, 105, 20, 0.15)',
                color: '#8B6914',
                border: '1px solid rgba(139, 105, 20, 0.4)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '10px',
                letterSpacing: '0.15em',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#8B6914';
                e.currentTarget.style.color = '#2C1810';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(139, 105, 20, 0.15)';
                e.currentTarget.style.color = '#8B6914';
              }}
            >
              CLOSE
            </button>
          </div>

        </div>
      )}

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
