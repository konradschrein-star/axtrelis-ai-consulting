export default function BackgroundVideo() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <source src="/assets/animated-background.mp4" type="video/mp4" />
      </video>
    </>
  );
}
