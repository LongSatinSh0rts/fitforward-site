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
            The first Fit Forward Miami drop is in the works. T-shirts, caps, stickers and more. Under wraps a little longer.
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



/* ── Chronic pain ────────────────────────────────────────────────────────────
   The most differentiated thing about this practice, previously one clause in
   a bio. Given its own section because it is the search anyone in pain types. */
function SiteChronicPain() {
  const { Kicker } = window;
  const P = { fontSize: 17, lineHeight: 1.65, color: 'var(--text-body)', maxWidth: 660, margin: '0 0 18px' };
  return (
    <section id="chronic-pain" style={{ padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,56px)', maxWidth: 1340, margin: '0 auto' }}>
      <Kicker>Corrective exercise</Kicker>
      <h2 className="ff-h" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 52px)', letterSpacing: '-0.03em', margin: '14px 0 26px', maxWidth: 760 }}>
        Training with chronic pain in Miami
      </h2>
      <p style={{ ...P, fontWeight: 700, color: 'var(--text-strong)', fontSize: 19 }}>
        You&rsquo;ve been told to rest. You rested. It didn&rsquo;t work.
      </p>
      <p style={P}>
        Most programs treat pain as a reason to stop training. I treat it as information
        about how you move. Every plan starts by mapping what your body is actually doing
        &mdash; the compensation, the old injury you stopped mentioning, the range you
        quietly gave up &mdash; and then builds strength around it instead of hammering
        through it.
      </p>
      <p style={{ ...P, fontWeight: 700, color: 'var(--text-strong)' }}>
        Corrective exercise isn&rsquo;t a gentler workout. It&rsquo;s a more accurate one.
      </p>
      <p style={{ ...P, margin: 0 }}>
        If a plateau has outlasted two programs and a year of your patience, that plateau
        is not about effort. Bring it to the discovery call.
      </p>
    </section>);
}

/* ── FAQ ─────────────────────────────────────────────────────────────────────
   Word-for-word identical to the FAQPage block in index.html. Structured data
   that is not visible on the page is a guideline violation, so these two have
   to be edited together or not at all. */
const FF_FAQ = [
  {
    "q": "Where is Fit Forward Miami located?",
    "a": "Fit Forward Miami trains clients at 1830 N Bayshore Dr, Floor 1, Miami, FL 33132 — the Miami Strong facility inside Quantum on the Bay, on the Edgewater waterfront. Outcall sessions are available across Miami — Wynwood, Midtown, Brickell, Downtown and the Design District — for an additional $45 per session. Remote programming is available anywhere."
  },
  {
    "q": "How much does personal training cost in Miami with Fit Forward?",
    "a": "In-person 60-minute sessions run $135 each in a 4-session package, $120 each in an 8-session package, and $105 each in a 12-session package. Remote programming only is $85 per month through Hubfit. The 30-minute discovery call is free. Outcall adds $45 per session."
  },
  {
    "q": "Do you train people with chronic pain or old injuries?",
    "a": "Yes — that is the core of the practice. Fit Forward Miami is built around corrective exercise for chronic pain and the plateaus that outlast it. Every program starts by mapping your history and constraints, then builds strength around them rather than training through them."
  },
  {
    "q": "Do you offer online coaching or only in person?",
    "a": "Both. In-person coaching happens at the Miami Strong facility in Edgewater or at your location via outcall. Remote programming is delivered through Hubfit at $85 per month and works from anywhere in the world, with a free 7-day trial before you commit."
  },
  {
    "q": "Do I need to be in shape before I start training?",
    "a": "No. Programs are built from where you actually are, not from where a template says you should be. Clients range from people returning after injury or a long layoff to lifters chasing a plateau that generic programming has not moved."
  },
  {
    "q": "What happens on the free discovery call?",
    "a": "A 30-minute conversation about your goals, your training history, your pain and your schedule. You leave with a clear read on what a program would look like and what it would cost. There is no obligation and no charge."
  },
  {
    "q": "Who is the coach at Fit Forward Miami?",
    "a": "Christopher Rosado, a Miami-based coach with eight years of experience across personal training, nutrition coaching, corrective exercise and culinary arts. He describes his role as Human Performance Architect — building strength, nutrition and recovery into a single blueprint rather than treating them separately."
  }
];

function SiteFAQ() {
  const { Kicker } = window;
  return (
    <section id="faq" style={{ padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,56px)', maxWidth: 1340, margin: '0 auto' }}>
      <Kicker>Before you book</Kicker>
      <h2 className="ff-h" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 52px)', letterSpacing: '-0.03em', margin: '14px 0 30px', maxWidth: 820 }}>
        Questions people ask before the first call
      </h2>
      <div style={{ display: 'grid', gap: 22, maxWidth: 860 }}>
        {FF_FAQ.map((item, i) => (
          <div key={i} style={{ borderTop: '2px solid var(--ff-200)', paddingTop: 18 }}>
            <h3 style={{ fontFamily: 'var(--font-text)', fontWeight: 800, fontSize: 19, lineHeight: 1.35, color: 'var(--text-strong)', margin: '0 0 10px' }}>{item.q}</h3>
            <p style={{ fontSize: 16.5, lineHeight: 1.62, color: 'var(--text-body)', margin: 0 }}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>);
}

Object.assign(window, { ForwardMark, ForwardDivider, SiteMerch, SiteChronicPain, SiteFAQ });
