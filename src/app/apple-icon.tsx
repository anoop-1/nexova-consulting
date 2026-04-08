import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0B',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Letter N */}
        <div
          style={{
            fontSize: '140px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          N
        </div>

        {/* Accent dot */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '28px',
            height: '28px',
            background: '#00F0FF',
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
