import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
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
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-1px',
          }}
        >
          N
        </div>

        {/* Accent dot */}
        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '6px',
            height: '6px',
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
