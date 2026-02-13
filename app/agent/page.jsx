'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ChatAgent from '../components/ChatAgent';
import { businesses } from '../lib/businesses';

function AgentContent() {
  const searchParams = useSearchParams();
  const site = searchParams.get('site') ?? 'acme-plumbing';

  // Ads per business
  const ads = {
    'gs-pathfinder-labs': [
      '🚀 Launch your startup with GS Pathfinder Labs!',
      '💻 Custom Web Development & UI/UX Solutions.',
      '📊 Agile project management for your ideas.',
    ],
    'acme-plumbing': [
      '💧 Emergency plumbing? Call us now!',
      '🛁 Bathroom renovation specials this month!',
      '🚰 Leak fixing guaranteed within 3 hours.',
    ],
  };

  const currentAds = ads[site] || [];

  return (
    <div style={{
      padding: 0,
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #12193b, #1f2a6b)',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: 480, width: '100%', display: 'flex', flexDirection: 'column', height: '100vh' }}>
        
        {/* Sticky top section */}
        <div style={{ position: 'sticky', top: 0, zIndex: 10, display: 'flex', flexDirection: 'column', gap: 8, padding: 12, background: '#12193b' }}>
          
          {/* Ads Carousel */}
          {currentAds.length > 0 && (
            <div style={{
              overflow: 'hidden',
              borderRadius: 8,
              background: 'rgba(88, 152, 231, 0.2)',
              padding: '4px 0',
              fontSize: 14,
              color: '#f9f1f1',
              fontWeight: 'bold',
              position: 'relative',
            }}>
              <div style={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                animation: 'scroll 20s linear infinite',
              }}>
                {currentAds.map((ad, i) => (
                  <span key={i} style={{ padding: '0 50px' }}>{ad}</span>
                ))}
                {currentAds.map((ad, i) => (
                  <span key={`dup-${i}`} style={{ padding: '0 50px' }}>{ad}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Chat Agent */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 5 }}>
          <ChatAgent site={site} />
        </div>

       
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function AgentPage() {
  return (
    <Suspense fallback={<div style={{ padding: 20 }}>Loading...</div>}>
      <AgentContent />
    </Suspense>
  );
}
