'use client';

import { useState } from 'react';

interface InteractivePortfolioViewerProps {
  liveSiteUrl: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  title: string;
}

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export default function InteractivePortfolioViewer({ 
  liveSiteUrl, 
  desktopImage, 
  mobileImage, 
  alt, 
  title 
}: InteractivePortfolioViewerProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile' | 'live'>('desktop');
  const [browserDevice, setBrowserDevice] = useState<DeviceType>('desktop');
  const [isLoading, setIsLoading] = useState(false);

  const getDeviceDimensions = (device: DeviceType) => {
    switch (device) {
      case 'mobile':
        return { width: '375px', height: '667px' };
      case 'tablet':
        return { width: '768px', height: '1024px' };
      case 'desktop':
        return { width: '100%', height: '600px' };
      default:
        return { width: '100%', height: '600px' };
    }
  };

  const handleLiveView = () => {
    setViewMode('live');
    setIsLoading(true);
  };

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
          <button
            type="button"
            className={`btn ${viewMode === 'live' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={handleLiveView}
          >
            <i className="bi bi-globe me-2"></i>Live Site
          </button>
        </div>
      </div>
      
      <div className="position-relative">
        {viewMode === 'desktop' && (
          <div className="desktop-view">
            <img 
              src={desktopImage} 
              alt={`${alt} - Desktop View`}
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="text-center mt-3">
              <small className="text-muted">
                Static preview of desktop version
              </small>
            </div>
          </div>
        )}
        
        {viewMode === 'mobile' && (
          <div className="mobile-view d-flex justify-content-center flex-column align-items-center">
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
                  marginTop: '-4px',
                  zIndex: 10
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
            <div className="text-center mt-3">
              <small className="text-muted">
                Static preview of mobile version
              </small>
            </div>
          </div>
        )}
        
        {viewMode === 'live' && (
          <div className="live-view">
            <div className="alert alert-info d-flex align-items-center mb-3">
              <i className="bi bi-info-circle me-2"></i>
              <div>
                <strong>Interactive Live Preview:</strong> You can browse the actual website right here!
                <br />
                <small>Note: Some websites may block iframe embedding for security reasons.</small>
              </div>
            </div>
            
            <div className="browser-frame rounded shadow" style={{ border: '1px solid #dee2e6' }}>
              <div className="browser-header bg-light d-flex align-items-center px-3 py-2" style={{ borderBottom: '1px solid #dee2e6' }}>
                <div className="d-flex align-items-center me-3">
                  <div className="browser-dot bg-danger me-1" style={{ width: '12px', height: '12px', borderRadius: '50%' }}></div>
                  <div className="browser-dot bg-warning me-1" style={{ width: '12px', height: '12px', borderRadius: '50%' }}></div>
                  <div className="browser-dot bg-success" style={{ width: '12px', height: '12px', borderRadius: '50%' }}></div>
                </div>
                <div className="flex-grow-1">
                  <input 
                    type="text" 
                    value={liveSiteUrl} 
                    readOnly 
                    className="form-control form-control-sm"
                    style={{ fontSize: '12px' }}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn-group btn-group-sm me-2" role="group">
                    <button
                      type="button"
                      className={`btn ${browserDevice === 'desktop' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setBrowserDevice('desktop')}
                      title="Desktop View"
                    >
                      <i className="bi bi-laptop"></i>
                    </button>
                    <button
                      type="button"
                      className={`btn ${browserDevice === 'tablet' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setBrowserDevice('tablet')}
                      title="Tablet View"
                    >
                      <i className="bi bi-tablet"></i>
                    </button>
                    <button
                      type="button"
                      className={`btn ${browserDevice === 'mobile' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setBrowserDevice('mobile')}
                      title="Mobile View"
                    >
                      <i className="bi bi-phone"></i>
                    </button>
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => window.open(liveSiteUrl, '_blank')}
                    title="Open in new tab"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </button>
                </div>
              </div>
              
              <div className="iframe-container d-flex justify-content-center p-3" style={{ 
                height: browserDevice === 'desktop' ? '600px' : 'auto',
                minHeight: '600px',
                backgroundColor: '#f8f9fa'
              }}>
                {isLoading && (
                  <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-light">
                    <div className="text-center">
                      <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="text-muted">Loading live site...</p>
                    </div>
                  </div>
                )}
                
                {browserDevice === 'desktop' ? (
                  <div className="w-100 h-100">
                    <iframe 
                      src={liveSiteUrl}
                      title={`Live preview of ${title}`}
                      className="w-100 h-100 border-0"
                      style={{ minHeight: '600px' }}
                      onLoad={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                ) : (
                  <div className="device-frame" style={{
                    width: getDeviceDimensions(browserDevice).width,
                    height: getDeviceDimensions(browserDevice).height,
                    border: browserDevice === 'mobile' ? '12px solid #333' : '8px solid #333',
                    borderRadius: browserDevice === 'mobile' ? '36px' : '12px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    position: 'relative',
                    backgroundColor: '#fff'
                  }}>
                    {browserDevice === 'mobile' && (
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
                          marginTop: '-4px',
                          zIndex: 10
                        }}
                      />
                    )}
                    <iframe 
                      src={liveSiteUrl}
                      title={`Live preview of ${title}`}
                      className="w-100 h-100 border-0"
                      onLoad={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-center mt-3">
              <small className="text-muted">
                <i className="bi bi-lightning me-1"></i>
                Interactive live preview - Currently viewing: <strong>{browserDevice}</strong> device
              </small>
            </div>
          </div>
        )}
      </div>
      
      <div className="text-center mt-3">
        <small className="text-muted">
          Currently viewing: <strong>
            {viewMode === 'desktop' ? 'Desktop Preview' : 
             viewMode === 'mobile' ? 'Mobile Preview' : 
             'Live Interactive Site'}
          </strong>
        </small>
      </div>
    </div>
  );
}
