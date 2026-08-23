/* Shared helpers for the Fitness Forward Miami site — Lucide Icon + mono Kicker. */

function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', name);
    ref.current.appendChild(el);
    window.lucide.createIcons({
      attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth },
    });
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}

function Kicker({ children, color = 'var(--text-muted)', style = {} }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13,
      letterSpacing: '0.18em', textTransform: 'uppercase', color, ...style,
    }}>{children}</span>
  );
}

/* Static passthrough — content always visible. (Entrance animations are frozen at
   frame 0 in throttled preview iframes, so we don't gate visibility on motion.) */
function Reveal({ children, style = {} }) {
  return style && Object.keys(style).length ? <div style={style}>{children}</div> : children;
}

Object.assign(window, { Icon, Kicker, Reveal });
