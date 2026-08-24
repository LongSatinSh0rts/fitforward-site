/* Fitness Forward Miami – page sections (bottom): coach, stories, booking, newsletter, footer. */

function SiteCoach() {
  const { Kicker } = window;
  return (
    <section id="coach" style={{ padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 56px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: 'clamp(28px,4vw,64px)', alignItems: 'center' }} className="coach-grid">
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '1/1', borderRadius: 'var(--radius-2xl)', border: '2.5px solid var(--ff-ink)', boxShadow: 'var(--shadow-hard-lg)', overflow: 'hidden', position: 'relative' }}>
            <img id="coach-photo" src="assets/coach-poster.jpg" alt="Coach Christopher Rosado, founder of Fit Forward Miami"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                objectPosition: '50% var(--coach-y, 16%)',
                transform: 'scale(var(--coach-zoom, 1.25))', transformOrigin: '50% var(--coach-y, 16%)' }} />
          </div>
        </div>
        <div>
          <Kicker color="var(--ff-grape-600)">Meet your coach</Kicker>
          <h2 className="ff-h" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4vw,52px)', letterSpacing: '-0.03em', margin: '14px 0 18px' }}>Christopher Rosado</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 560, margin: '0 0 18px' }}>
            I built Fit Forward Miami to train the whole entity. Education, culinary work, years of coaching –
            and an element of play – aimed at chronic pain and the plateaus that outlast it.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 560, margin: 0 }}>
            Executives, athletes, everyday performers. Same principle every time: one body, one plan,
            trained whole rather than in parts.
          </p>
        </div>
      </div>
    </section>);

}

function SiteStories() {
  const { Avatar, Button } = window.FitnessForwardDesignSystem_eb843f;
  const { Icon, Kicker, ForwardMark } = window;
  const GOOGLE_REVIEWS = 'https://g.page/r/CZRoQxVcJ3NVEAE/review';

  const TESTIMONIALS = [
    {
      lead: 'CJR has completely changed my expectations of what a great trainer can be. Over the past years, he’s helped me build real consistency in the gym, get into strength training, and become noticeably stronger both physically and mentally.',
      highlight: ' What truly sets him apart is how much he cares beyond the workouts. I’ve learned how to show up for myself – something I never expected from a trainer, and it’s made a huge difference in my life. I can’t recommend him enough.',
      name: 'Joe Cavallini', meta: '1-on-1 coaching · Miami', tone: 'punch',
    },
    {
      lead: 'Christopher has been one of the best things to happen to my physical health. He takes his time with me and my goals. He helps not only build a plan for inside of the gym but outside as well.',
      highlight: ' He is knowledgeable and tailors each workout to me and my body and abilities while still pushing me to be the best I can be, to where I can grow. I cannot recommend him and his services enough.',
      name: 'Kendall Carrasco', meta: '1-on-1 coaching · Miami', tone: 'grape',
    },
    {
      lead: 'I have been working out intensely and regularly for 10+ years – I even used to work for Equinox – and I have been extremely impressed with the expertise, guidance, and care that Chris has brought to our sessions.',
      highlight: ' I initially wanted to work with Chris just for a short period to aid in recovery, but I’ve immediately seen improvements and have extended my program with him beyond the initial scope we agreed on. 10/10 recommend.',
      name: 'Giri Suarsana', meta: '1-on-1 coaching · Miami', tone: 'volt',
    },
  ];

  const [i, setI] = React.useState(0);
  const n = TESTIMONIALS.length;
  const go = (d) => setI((p) => (p + d + n) % n);
  const t = TESTIMONIALS[i];

  return (
    <section id="stories" style={{ background: 'var(--ff-ink)', color: '#fff', padding: 'clamp(48px,7vw,96px) clamp(20px,5vw,56px)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }} aria-live="polite" aria-atomic="false">
        <Kicker color="var(--ff-volt)">Results</Kicker>
        <h2 className="ff-h" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.6vw, 46px)', letterSpacing: '-0.03em', margin: '14px 0 10px', color: '#fff' }}>
          What clients say
        </h2>
        {/* This rating must stay visible. index.html declares aggregateRating in
            JSON-LD, and Google requires a rating in structured data to also be
            readable by a human on the same page. Removing this line without
            removing the schema exposes the site to a manual action. */}
        <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none',
          fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: '#fff',
          border: '2px solid var(--ff-volt)', borderRadius: 'var(--radius-pill)',
          padding: '8px 16px', marginBottom: 6, minHeight: 44,
        }}>
          <span style={{ color: 'var(--ff-volt)', fontSize: 16, letterSpacing: '2px' }}>★★★★★</span>
          <span>5.0 — 17 Google reviews</span>
        </a>
        <Icon name="quote" size={40} color="var(--ff-orchid)" style={{ marginTop: 18 }} />
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px,2.8vw,34px)', lineHeight: 1.32, letterSpacing: '-0.02em', color: '#fff', margin: '14px 0 28px', minHeight: '4.2em' }}>
          {t.lead}
          <span style={{ color: 'var(--ff-volt)' }}>{t.highlight}</span>
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 30 }}>
          <Avatar name={t.name} tone={t.tone} ring size={48} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap' }}>{t.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ff-400)', whiteSpace: 'nowrap' }}>{t.meta}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
          <button onClick={() => go(-1)} aria-label="Previous story" className="story-arrow">
            <ForwardMark height={30} style={{ transform: 'scaleX(-1)' }} />
          </button>
          <div style={{ display: 'flex', gap: 9 }}>
            {TESTIMONIALS.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Story ${idx + 1}`} aria-current={idx === i ? 'true' : undefined} style={{
                width: idx === i ? 42 : 26, height: 44, borderRadius: 0, cursor: 'pointer',
                border: 'none', padding: 0, background: 'none', display: 'inline-flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  display: 'block', width: idx === i ? 26 : 10, height: 10, borderRadius: 'var(--radius-pill)',
                  background: idx === i ? 'var(--ff-volt)' : 'var(--ff-600)',
                  transition: 'background var(--dur-base) var(--ease-out), width var(--dur-base) var(--ease-out)',
                }} />
              </button>
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next story" className="story-arrow">
            <ForwardMark height={30} />
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 34 }}>
          <Button variant="volt" size="lg" onClick={() => window.open(GOOGLE_REVIEWS, '_blank', 'noopener')} iconRight={<Icon name="arrow-up-right" size={18} color="var(--ff-ink)" />}>See more reviews on Google</Button>
        </div>
      </div>
    </section>);

}

const carouselArrow = {
  width: 48, height: 48, borderRadius: '50%', flex: 'none', cursor: 'pointer',
  background: 'var(--ff-volt)', border: '2.5px solid var(--ff-volt)',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  boxShadow: 'var(--shadow-hard)', transition: 'transform var(--dur-fast) var(--ease-spring)',
};

function SiteBooking() {
  const { Button } = window.FitnessForwardDesignSystem_eb843f;
  const { Kicker, Icon } = window;
  return (
    <section id="booking" style={{ padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 56px)', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="book-extras">
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2.5px solid var(--ff-ink)', boxShadow: 'var(--shadow-hard)', minHeight: 240 }}>
          <iframe title="Fit Forward Miami – Edgewater" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.0713324016332!2d-80.18732403045723!3d25.794159206064837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b57bd94b3c2f%3A0x5573275c15436894!2sFitness%20Forward%20by%20CJR!5e0!3m2!1sen!2sus!4v1775162596040!5m2!1sen!2sus" style={{ width: '100%', height: '100%', minHeight: 240, border: 0, display: 'block', filter: 'grayscale(0.2) contrast(1.05)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div style={{ background: 'var(--ff-volt)', border: '2.5px solid var(--ff-ink)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-hard)', padding: 'clamp(24px,3vw,34px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
          {[['map-pin', 'Fit Forward Miami', '1830 N Bayshore Dr, Miami FL 33132'], ['clock', 'Mon–Sat', 'Early mornings & evenings']].map(([ic, a, b]) =>
          <div key={a} style={{ display: 'flex', gap: 13, alignItems: 'center' }}>
              <span style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--ff-ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                <Icon name={ic} size={20} color="var(--ff-volt)" />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color: 'var(--ff-ink)' }}>{a}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ff-800)' }}>{b}</div>
              </div>
            </div>
          )}
          <Button variant="sticker" size="lg" full {...window.LUNACAL.discovery} iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>Book a free call</Button>
        </div>
      </div>
    </section>);

}

function SiteNewsletter() {
  const { Button, Input } = window.FitnessForwardDesignSystem_eb843f;
  const { Kicker, Icon } = window;
  const TRIAL_URL = 'https://app.hubfit.com/plan/6a2a5d0aac9f0808bb358999';
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const valid = /\S+@\S+\.\S+/.test(email);
  const submit = () => {
    if (!valid) return;
    // Capture the lead in Netlify Forms (best-effort)...
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'free-week', email: email }).toString(),
    }).catch(function () {/* proceed regardless */});
    // ...and in HubSpot, so the CRM list stays in sync (skipped until IDs are set).
    var hs = window.HUBSPOT || {};
    if (hs.portalId && hs.formGuid) {
      var host = hs.region && hs.region !== 'na1' ? 'api-' + hs.region + '.hsforms.com' : 'api.hsforms.com';
      fetch('https://' + host + '/submissions/v3/integration/submit/' + hs.portalId + '/' + hs.formGuid, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [{ name: 'email', value: email }],
          context: { pageUri: window.location.href, pageName: document.title },
        }),
      }).catch(function () {/* proceed regardless */});
    }
    // ...then send them straight to the Hub Fit 7-day trial signup.
    window.open(TRIAL_URL, '_blank', 'noopener');
    setSent(true);
  };
  return (
    <section id="freeweek" style={{ padding: '0 clamp(20px,5vw,56px) clamp(48px,7vw,80px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', background: 'var(--soft-surface, var(--surface-mist))', border: '2.5px solid var(--ff-ink)', borderRadius: 'var(--radius-2xl)', padding: 'clamp(32px,5vw,56px)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }} className="news-grid">
        <div>
          <Kicker color="var(--ff-grape-600)">One week free</Kicker>
          <h2 className="ff-h" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.4vw,42px)', letterSpacing: '-0.03em', margin: '12px 0 10px' }}>Your first week of programming – on me</h2>
          <p style={{ fontSize: 16, color: 'var(--text-body)', margin: 0, maxWidth: 460 }}>A full week of custom programming. Real coaching, real structure, no catch. Drop your email and you go straight to signup – instant access.</p>
        </div>
        <div>
          {sent ?
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface-card)', border: '2.5px solid var(--ff-ink)', borderRadius: 'var(--radius-lg)', padding: '18px 20px', boxShadow: 'var(--shadow-hard)' }}>
              <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--ff-volt)', border: '2px solid var(--ff-ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                <Icon name="check" size={20} color="var(--ff-ink)" />
              </span>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 3 }}>Your free week is opening now.</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.45 }}>Finish signing up in the new tab and you’re in. Didn’t open? <a href={TRIAL_URL} target="_blank" rel="noopener" style={{ color: 'var(--ff-grape-600)', fontWeight: 700 }}>Tap here to start your week.</a></div>
              </div>
            </div> :

          <div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' }}>
                <Input label="Email" type="email" name="email" autoComplete="email" inputMode="email" required placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} iconLeft={<Icon name="mail" size={18} />} style={{ flex: 1, minWidth: 200 }} />
                <Button variant="sticker" size="lg" disabled={!valid} onClick={submit} iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>Claim my free week</Button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>);

}

function SiteFooter({ onBook }) {
  const { Button } = window.FitnessForwardDesignSystem_eb843f;
  const { Icon } = window;
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' }); };
  const cols = [
  { h: 'Coaching', items: [
    { label: 'Discovery call', to: 'programs' },
    { label: '4-session combo', to: 'programs' },
    { label: '8-session combo', to: 'programs' },
    { label: '12-session combo', to: 'programs' }] },

  { h: 'Fit Forward Miami', items: [
    { label: 'The method', to: 'method' },
    { label: 'Meet Christopher', to: 'coach' },
    { label: 'Stories', to: 'stories' },
    { label: 'Booking', to: 'booking' }] },

  { h: 'Connect', items: [
    { label: 'Instagram', href: 'https://www.instagram.com/fitnessforwardcjr/' },
    { label: 'Email', href: 'mailto:Christopher@fitforwardmiami.com' },
    { label: 'Call or text', reveal: true, phone: '786-475-5778', href: 'tel:+17864755778' }] }];
  const [showPhone, setShowPhone] = React.useState(false);

  return (
    <footer style={{ background: 'var(--ff-ink)', color: '#fff', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,56px) 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) repeat(3, minmax(0,1fr))', gap: 36 }} className="footer-grid">
        <div>
          <img src={window.FF_LOGO_WHITE} alt="Fit Forward Miami logo" style={{ height: 44, marginBottom: 18 }} />
          <p style={{ color: 'var(--ff-400)', fontSize: 14, maxWidth: 280, lineHeight: 1.5 }}>Go beyond reason. Kick impossible to the curb. Human performance coaching in Miami – trained whole.</p>

          {/* NAP — name, address, phone. Search engines and AI systems cross-check
              this against every other listing, so it has to match the Google
              Business Profile and the JSON-LD character for character. Plain
              visible text on purpose: a phone behind a click is a phone a crawler
              never sees. */}
          <address style={{ fontStyle: 'normal', color: 'var(--ff-300)', fontSize: 13.5, lineHeight: 1.7, marginTop: 22, maxWidth: 280 }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14.5, marginBottom: 4 }}>Fit Forward Miami</div>
            1830 N Bayshore Dr, Floor 1<br />
            Quantum on the Bay Condominium<br />
            Miami, FL 33132<br />
            <a href="tel:+17864755778" style={{ color: 'var(--ff-volt)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>(786) 475-5778</a><br />
            <a href="mailto:Christopher@fitforwardmiami.com" style={{ color: 'var(--ff-300)', textDecoration: 'none' }}>Christopher@fitforwardmiami.com</a>
          </address>

          {/* Split shifts, exactly as the Google profile lists them — rounding
              these to "Mon–Sat, early mornings & evenings" is what put different
              hours on the site than on Maps. */}
          <div style={{ marginTop: 22, maxWidth: 300 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ff-orchid)', marginBottom: 10 }}>Hours</div>
            <table style={{ borderCollapse: 'collapse', color: 'var(--ff-300)', fontSize: 13, lineHeight: 1.6 }}>
              <tbody>
                {[['Mon', '8:00 AM – 1:00 PM · 4:00 – 7:00 PM'],
                  ['Tue', '7:00 AM – 12:00 PM · 4:00 – 7:00 PM'],
                  ['Wed', '3:00 – 7:00 PM'],
                  ['Thu', '7:00 AM – 12:00 PM · 4:00 – 7:00 PM'],
                  ['Fri', '6:00 AM – 2:00 PM'],
                  ['Sat', '9:00 AM – 1:00 PM'],
                  ['Sun', 'Closed']].map(([d, h]) => (
                    <tr key={d}>
                      <th scope="row" style={{ textAlign: 'left', fontWeight: 700, color: '#fff', paddingRight: 12, verticalAlign: 'top', fontFamily: 'var(--font-mono)', fontSize: 12 }}>{d}</th>
                      <td style={{ whiteSpace: 'nowrap' }}>{h}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {cols.map((c) =>
        <div key={c.h}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ff-orchid)', marginBottom: 16 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 2 }}>
              {c.items.map((it) =>
                <li key={it.label}>
                  {it.reveal ?
                    (showPhone ?
                      <a href={it.href} style={{ color: 'var(--ff-volt)', fontSize: 14, textDecoration: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)', display: 'inline-flex', alignItems: 'center', minHeight: 44 }}>{it.phone}</a> :
                      <a onClick={(e) => { e.preventDefault(); setShowPhone(true); }} style={{ color: 'var(--ff-300)', fontSize: 14, textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', minHeight: 44 }}>{it.label}</a>
                    ) :
                    <a
                      href={it.href || '#'}
                      target={it.href && it.href.startsWith('http') ? '_blank' : undefined}
                      rel={it.href && it.href.startsWith('http') ? 'noopener' : undefined}
                      onClick={it.to ? (e) => { e.preventDefault(); scrollTo(it.to); } : undefined}
                      style={{ color: 'var(--ff-300)', fontSize: 14, textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', minHeight: 44 }}>{it.label}</a>
                  }
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      <div style={{ maxWidth: 1280, margin: '40px auto 0', paddingTop: 22, borderTop: '1.5px solid var(--ff-700)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ff-500)' }}>© 2026 Fit Forward Miami · CJR Fitness Forward LLC</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ff-500)' }}>Built forward.</span>
      </div>
    </footer>);

}

Object.assign(window, { SiteCoach, SiteStories, SiteBooking, SiteNewsletter, SiteFooter });