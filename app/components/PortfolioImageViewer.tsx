'use client';

import { useState } from 'react';

interface PortfolioImageViewerProps {
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

export default function PortfolioImageViewer({ desktopImage, mobileImage, alt }: PortfolioImageViewerProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-center mb-3">
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${viewMode === 'desktop' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setViewMode('desktop')}
          >
            <i className="bi bi-laptop me-2"></i>Desktop View
          </button>
          <button
            type="button"
            className={`btn ${viewMode === 'mobile' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setViewMode('mobile')}
          >
            <i className="bi bi-phone me-2"></i>Mobile View
          </button>
        </div>
      </div>
      
      <div className="position-relative">
        {viewMode === 'desktop' ? (
          <div className="desktop-view">
            <img 
              src={desktopImage} 
              alt={`${alt} - Desktop View`}
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ) : (
          <div className="mobile-view d-flex justify-content-center">
            <div 
              className="mobile-frame"
              style={{
                width: '375px',
                height: '667px',
                border: '12px solid #333',
                borderRadius: '36px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#333',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '-4px'
                }}
              />
              <img 
                src={mobileImage} 
                alt={`${alt} - Mobile View`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="text-center mt-3">
        <small className="text-muted">
          Currently viewing: <strong>{viewMode === 'desktop' ? 'Desktop' : 'Mobile'}</strong> version
        </small>
      </div>
    </div>
  );
}
