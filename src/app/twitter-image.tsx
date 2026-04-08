import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'NEXOVA - Strategy Beyond Limits';
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient accent in corner */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, rgba(0, 240, 255, 0) 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            zIndex: 1,
          }}
        >
          {/* Main heading */}
          <h1
            style={{
              fontSize: '110px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              margin: 0,
              lineHeight: 1,
              letterSpacing: '-2px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            NEXOVA
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '44px',
              color: '#00F0FF',
              margin: 0,
              fontWeight: '500',
              letterSpacing: '1px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            Strategy Beyond Limits
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            width: '180px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #00F0FF, transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
