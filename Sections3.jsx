/* Fitness Forward Miami – forward-arrows motif helpers. */

/* Reusable forward-arrows mark (cleaned, transparent). Scales by height. */
function ForwardMark({ height = 34, opacity = 1, style }) {
  return (
    <img
      src="assets/mark-arrows-slim.png"
      alt=""
      aria-hidden="true"
      style={{ height, width: 'auto', display: 'block', opacity, ...style }} />
  );
}

/* Thin centered band of marks – a forward-motion divider between sections. */
function ForwardDivider({ bg = 'var(--ff-ink)' }) {
  return (
    <div style={{ background: bg, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, padding: '6px 20px 26px' }}>
      <ForwardMark height={26} opacity={0.9} />
      <ForwardMark height={26} opacity={0.55} />
      <ForwardMark height={26} opacity={0.28} />
    </div>
  );
}

/* ---- Merch teaser: backlit silhouettes behind frosted glass, on a grape feature band ---- */
function SiteMerch() {
  const { Kicker, Icon } = window;
  const tiles = [
    { src: 'assets/merch-sil-hat.png',       fit: 'contain', blur: 4 },
    { src: 'assets/merch-sil-stickers2.png', fit: 'contain', blur: 5 },
    { src: 'assets/mark-arrows-dark.png',    fit: 'contain', blur: 5, mark: true },
  ];
  const notify = null;
  return (
    <section id="merch" style={{
      background: 'linear-gradient(165deg, var(--ff-punch-400) 0%, var(--ff-punch-600) 100%)',
      color: '#fff', padding: 'clamp(48px,7vw,92px) clamp(20px,5vw,56px)',
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ maxWidth: 640, marginBottom: 'clamp(28px,3.5vw,48px)' }}>
          <Kicker color="var(--ff-volt)">The shop</Kicker>
          <h2 className="ff-h" style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff',
            fontSize: 'clamp(30px,4.4vw,58px)', letterSpacing: '-0.03em', lineHeight: 1.04,
            margin: '14px 0 14px',
          }}>
            Merch is almost <span style={{ color: 'var(--ff-volt)' }}>here.</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.4vw,18px)', lineHeight: 1.6, color: 'var(--ff-punch-100)', margin: 0, maxWidth: 540 }}>
            The first Fitness Forward drop is in the works. T-shirts, caps, stickers and more. Under wraps a little longer.
            <br />
            <span style={{ display: 'inline-block', marginTop: 10, fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--ff-volt)' }}>Coming Soon – End of Summer!</span>
          </p>
        </div>

        <div className="merch-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'clamp(16px,2vw,26px)' }}>
          {tiles.map((t) =>
            <div key={t.src} className="merch-tile" style={{
              background: 'rgba(0,0,0,0.18)', border: '1.5px solid var(--ff-punch-600)',
              borderRadius: 22, padding: 14,
            }}>
              <div style={{
                position: 'relative', borderRadius: 14, overflow: 'hidden',
                aspectRatio: '4 / 3',
                background: 'radial-gradient(circle at 50% 38%, var(--ff-volt-200) 0%, var(--ff-mist) 62%, var(--ff-punch-200) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src={t.src} alt="" aria-hidden="true" style={{
                  maxWidth: t.mark ? '54%' : '82%', maxHeight: t.mark ? '54%' : '84%',
                  objectFit: 'contain', filter: `blur(${t.blur}px)`,
                  opacity: t.mark ? 0.7 : 0.9,
                }} />
                <span style={{
                  position: 'absolute', top: 12, left: 12,
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: 'var(--ff-ink)', color: 'var(--ff-volt)',
                  borderRadius: 'var(--radius-pill)', padding: '6px 12px',
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  <Icon name="lock" size={13} color="var(--ff-volt)" />
                  Coming soon
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);
}

Object.assign(window, { ForwardMark, ForwardDivider, SiteMerch });
