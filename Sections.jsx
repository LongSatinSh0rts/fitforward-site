/* Fitness Forward Miami – page sections (top): header, hero, disciplines, method, programs. */

function SiteHeader({ onBook }) {
  const { Button } = window.FitnessForwardDesignSystem_eb843f;
  const { Icon } = window;
  const [open, setOpen] = React.useState(false);
  const links = [['Method', 'method'], ['Programs', 'programs'], ['Coach', 'coach'], ['Stories', 'stories'], ['Booking', 'booking']];
  const go = (id) => {setOpen(false);const el = document.getElementById(id);if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });};
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px clamp(18px, 5vw, 56px)', background: 'rgba(250,246,241,0.85)', backdropFilter: 'blur(14px)',
      borderBottom: '1.5px solid var(--ff-200)'
    }}>
      <img src={window.FF_LOGO_BLACK} alt="Fitness Forward by CJR logo" style={{ height: 34 }} />
      <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="site-nav">
        {links.map(([l, id]) =>
        <a key={l} href={'#' + id} onClick={(e) => { e.preventDefault(); go(id); }} style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, color: 'var(--text-strong)', textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', minHeight: 44 }}>{l}</a>
        )}
      </nav>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <Button variant="volt" size="sm" {...window.LUNACAL.discovery} style={{ whiteSpace: 'nowrap', minHeight: 44 }}>Book a call</Button>
        <button onClick={() => setOpen((o) => !o)} className="nav-burger" style={{ display: 'none', background: 'none', border: '2px solid var(--ff-ink)', borderRadius: 10, width: 44, height: 44, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} aria-label="Menu">
          <Icon name={open ? 'x' : 'menu'} size={20} color="var(--ff-ink)" />
        </button>
      </div>
      {open &&
      <div className="nav-mobile" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--surface-page)', borderBottom: '2.5px solid var(--ff-ink)', padding: '12px 20px 18px', display: 'none', flexDirection: 'column', gap: 4 }}>
          {links.map(([l, id]) =>
        <a key={l} href={'#' + id} onClick={(e) => { e.preventDefault(); go(id); }} style={{ display: 'flex', alignItems: 'center', minHeight: 48, padding: '11px 6px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--text-strong)', textDecoration: 'none', cursor: 'pointer', borderBottom: '1.5px solid var(--ff-150)' }}>{l}</a>
        )}
        </div>
      }
    </header>);

}

function SiteHero({ onBook, layout, headline }) {
  const { Button, Tag, Badge } = window.FitnessForwardDesignSystem_eb843f;
  const { Icon } = window;
  const centered = false; // left-aligned hero
  const accent = 'var(--accent-pick, var(--ff-grape-600))';

  const Heading =
  <h1 className="ff-h ff-bagel" style={{
    fontFamily: "'Bagel Fat One', cursive", fontWeight: 800,
    fontSize: 'clamp(48px, 9.4vw, 138px)',
    lineHeight: 0.94, letterSpacing: '-0.04em', color: 'var(--text-strong)', margin: 0,
    maxWidth: 'none'
  }}>
      Go beyond reason.{' '}
      <span style={{ color: accent }}>Kick impossible</span>{' '}
      <span className="ff-highlight">to the curb.</span>
    </h1>;


  const Copy =
  <p style={{ fontSize: 'clamp(17px, 1.5vw, 20px)', lineHeight: 1.55, color: 'var(--text-body)', maxWidth: centered ? 600 : 480, margin: centered ? '0 auto 30px' : '0 0 30px', fontWeight: 500 }}>
      You are one entity. Train like it. Strength, nutrition and recovery
      engineered into a single blueprint – for the everyday and elite alike.
    </p>;


  const Actions =
  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28, justifyContent: centered ? 'center' : 'flex-start' }}>
      <Button variant="sticker" size="lg" {...window.LUNACAL.discovery} iconRight={<Icon name="arrow-right" size={20} color="#fff" />}>Book a free call</Button>
      <Button variant="secondary" size="lg" onClick={() => {const el = document.getElementById('method'); if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });}} iconLeft={<Icon name="play" size={18} />}>See the method</Button>
    </div>;


  const Tags =
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: centered ? 'center' : 'flex-start', width: 'fit-content' }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: 'var(--ff-volt)', border: '2.5px solid var(--ff-ink)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-hard)', fontFamily: 'var(--font-text)', fontWeight: 800, fontSize: 15, color: 'var(--ff-ink)' }}>
          <Icon name="dumbbell" size={17} color="var(--ff-ink)" />Training
        </span>
        <Tag color="punch">Adaptive &amp; inclusive</Tag>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Tag color="grape">Nutrition</Tag>
        <Tag color="grape">Recovery</Tag>
        <Tag color="grape">Performance</Tag>
      </div>
    </div>;


  return (
    <section style={{ padding: 'clamp(34px, 5vw, 72px) clamp(20px, 5vw, 56px) clamp(44px,5vw,80px)', maxWidth: 1340, margin: '0 auto' }}>
      <Badge tone="grape" dot style={{ marginBottom: 24 }}>Fitness Forward by CJR · Miami</Badge>
      {Heading}
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 'clamp(28px, 4vw, 60px)', alignItems: 'end', marginTop: 'clamp(28px, 3.5vw, 48px)' }}>
        <div>
          {Copy}
          {Actions}
        </div>
        <div style={{ justifySelf: 'end', width: '100%' }}>
          {Tags}
        </div>
      </div>
    </section>);

}

function SiteDisciplines() {
  const { Icon, Kicker, Reveal } = window;
  const items = [
  { icon: 'wrench', abbr: 'CES', name: 'Corrective Exercise Specialist', color: 'var(--ff-volt)',
    text: 'Pain has a source. We go there first – then build the practices that keep it from coming back.' },
  { icon: 'apple', abbr: 'CNC', name: 'Certified Nutritional Counselor', color: 'var(--ff-orchid)',
    text: 'Knowing what to eat was never the problem. Old beliefs run the kitchen. Embodiment as nutritional autonomy.' },
  { icon: 'chevrons-right', triple: true, abbr: 'PES', name: 'Performance Enhancement Specialist', color: 'var(--ff-grape-300)',
    text: 'Power is built in three planes, not one. Weekend golf or a bucket-list marathon – landing mechanics, sport-specific movement, force you can use.' },
  { icon: 'accessibility', abbr: 'A&I', name: 'Adaptive & Inclusive Trainer', color: 'var(--ff-punch)',
    text: 'No soldier is left behind. Empowering athletes of all physical and cognitive backgrounds to reach their goal and find their forward.' }];

  return (
    <section id="method" style={{ background: 'var(--ff-ink)', color: '#fff', padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 56px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Kicker color="var(--ff-orchid)">The method</Kicker>
        <h2 className="ff-h" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: 'clamp(30px, 4vw, 52px)', letterSpacing: '-0.03em', margin: '14px 0 8px', maxWidth: 760 }}>Four disciplines: One blueprint</h2>
        <p style={{ color: 'var(--ff-400)', fontSize: 18, maxWidth: 600, margin: '0 0 44px' }}>The four horsemen of my training philosophy. Each intertwining with another organically. </p>
        <div className="disc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, maxWidth: 820 }}>
          {items.map((it, i) =>
          <Reveal key={i} delay={i * 80}>
              <div style={{ background: 'var(--ff-900)', border: '1.5px solid var(--ff-700)', borderRadius: 'var(--radius-lg)', padding: 26, height: '100%', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <span style={{ display: 'inline-flex', width: 48, height: 48, borderRadius: 'var(--radius-md)', alignItems: 'center', justifyContent: 'center', background: it.color, flex: 'none' }}>
                    {it.triple ?
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ff-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6l4 6-4 6" />
                        <path d="M10 6l4 6-4 6" />
                        <path d="M17 6l4 6-4 6" />
                      </svg> :

                  <Icon name={it.icon} size={24} color="var(--ff-ink)" />
                  }
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 30, letterSpacing: '0.02em', color: it.color }}>{it.abbr}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-text)', fontWeight: 800, fontSize: 19, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>{it.name}</h3>
                <p style={{ color: 'var(--ff-400)', fontSize: 14.5, lineHeight: 1.5, margin: 0 }}>{it.text}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function SitePrograms({ onBook }) {
  const { Card, Tag, Badge, Button } = window.FitnessForwardDesignSystem_eb843f;
  const { Kicker, Icon } = window;
  const programs = [
  { name: '4-session combo', level: '1-on-1', price: '$135', unit: '/ 60 min', color: 'grape',
    blurb: 'Four focused sessions. Enough to learn how your body actually moves.', featured: false, ns: '4-session-combo', cal: 'fitnessforward/4-session-combo' },
  { name: '8-session combo', level: '1-on-1', price: '$120', unit: '/ 60 min', color: 'grape',
    blurb: 'Eight sessions. Long enough for momentum to stop being a decision.', featured: false, ns: '8-session-combo', cal: 'fitnessforward/8-session-combo' },
  { name: '12-session combo', level: '1-on-1', price: '$105', unit: '/ 60 min', color: 'punch',
    blurb: 'The full blueprint. Twelve sessions, the best rate, the whole arc of the change.', featured: true, ns: '12-session-combo', cal: 'fitnessforward/12-session-combo' }];

  return (
    <section id="programs" style={{ padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 56px)', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 52 }}>
        <div>
          <Kicker>Choose your track</Kicker>
          <h2 className="ff-h" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px, 4vw, 52px)', letterSpacing: '-0.03em', margin: '14px 0 0' }}>Find your forward</h2>
        </div>
      </div>
      <Card variant="bordered" padding="lg" className="discovery-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', marginBottom: 20 }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <Badge tone="volt">Start here</Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>30 min</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Discovery call</h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--text-body)', margin: 0, maxWidth: 640 }}>Thirty minutes. We map the blueprint and find out whether we build together.</p>
        </div>
        <Button variant="primary" size="lg" {...window.LUNACAL.discovery} iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>Book the call</Button>
      </Card>

      <div className="prog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
        {programs.map((p, i) =>
        <Card key={i} variant={p.featured ? 'sticker' : 'bordered'} padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Badge tone={p.color}>{p.level}</Badge>
              {p.featured && <Badge tone="outline">Best value</Badge>}
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', margin: 0 }}>{p.name.replace('-', '\u2011')}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)', margin: 0, flex: 1 }}>{p.blurb}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, borderTop: '1.5px solid var(--ff-150)', paddingTop: 16 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 30, color: 'var(--text-strong)' }}>{p.price}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{p.unit}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: -6 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--text-strong)', whiteSpace: 'nowrap' }}>+$45</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>/ outcall session</span>
            </div>
            <Button variant={p.featured ? 'volt' : 'primary'} full style={{ minHeight: 44 }} data-cal-namespace={p.ns} data-cal-link={p.cal} data-cal-config='{"layout":""}'>Reserve sessions</Button>
          </Card>
        )}
      </div>

      <Card variant="bordered" padding="lg" className="discovery-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', marginTop: 20 }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <Badge tone="grape">Self-guided</Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Via Hub Fit</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Programming only</h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--text-body)', margin: 0, maxWidth: 580 }}>Training blueprint – engineered with Coach Christopher’s intelligence and years of hands-on experience – delivered through Hub Fit. Your plan on your time.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 32, color: 'var(--text-strong)' }}>$85</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>/month</span>
          </div>
          <Button variant="primary" size="lg" onClick={() => window.open('https://hubfit.app', '_blank', 'noopener')} iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>Start on Hub Fit</Button>
        </div>
      </Card>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '18px 0 0', maxWidth: 720 }}>
        <span style={{ color: 'var(--text-strong)', fontWeight: 700 }}>Outcall</span> – your coach drives to you, instead of meeting at the Miami Strong facility in Edgewater.
      </p>
    </section>);

}

Object.assign(window, { SiteHeader, SiteHero, SiteDisciplines, SitePrograms });