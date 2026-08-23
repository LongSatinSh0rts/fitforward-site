/* Fitness Forward Miami – app root: tweaks state, section order, mount. */

// Wrapped, because this is a plain script sharing global scope with the others.
// tweaks-panel.js declares `function useTweaks` there, so a top-level
// `const useTweaks` here is a redeclaration that kills this entire script and
// leaves the page unmounted. Babel-in-the-browser hid it by rewriting const to
// var; the build keeps const. Nothing below needs to be global — this file only
// mounts the app.
(function () {

const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakSlider } = window;

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#e16567",
    "heroLayout": "split",
    "softTint": "#eeddec",
    "displayFont": "Groovy",
    "coachZoom": 1.05,
    "coachY": 25
  }/*EDITMODE-END*/;

  const DISPLAY_FONTS = { Groovy: "'Fredoka', cursive", Bubble: "'Bagel Fat One', cursive", Soul: "'Shrikhand', serif", Clean: "var(--font-display)" };

  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const { SiteHeader, SiteHero, SiteDisciplines, SitePrograms,
            SiteCoach, SiteStories, SiteBooking, SiteNewsletter, SiteFooter,
            SiteMerch } = window;

    React.useEffect(() => {
      const r = document.documentElement;
      r.style.setProperty('--accent-pick', t.accent);
      r.style.setProperty('--soft-surface', t.softTint);
      r.style.setProperty('--font-groovy', DISPLAY_FONTS[t.displayFont] || DISPLAY_FONTS.Groovy);
      r.style.setProperty('--coach-zoom', t.coachZoom);
      r.style.setProperty('--coach-y', t.coachY + '%');
    }, [t.accent, t.softTint, t.displayFont, t.coachZoom, t.coachY]);

    const book = () => window.open('https://lunacal.ai/fitnessforward', '_blank', 'noopener');

    return (
      <React.Fragment>
        <SiteHeader onBook={book} />
        <SiteHero onBook={book} layout={t.heroLayout} />
        <SiteDisciplines />
        <SitePrograms onBook={book} />
        <SiteCoach />
        <SiteStories />
        <SiteBooking />
        <SiteNewsletter />
        <SiteMerch />
        <SiteFooter onBook={book} />

        <TweaksPanel>
          <TweakSection label="Brand accent" />
          <TweakColor label="Accent color" value={t.accent}
            options={['#7951a0', '#e16567', '#9a6fb4']}
            onChange={(v) => setTweak('accent', v)} />
          <TweakSection label="Soft sections" />
          <TweakColor label="Tint" value={t.softTint}
            options={['#eeddec', '#fffce3', '#faf6f1']}
            onChange={(v) => setTweak('softTint', v)} />
          <TweakSection label="Display font" />
          <TweakRadio label="Headlines" value={t.displayFont} options={['Groovy', 'Bubble', 'Soul', 'Clean']}
            onChange={(v) => setTweak('displayFont', v)} />
          <TweakSection label="Coach photo" />
          <TweakSlider label="Magnify" value={t.coachZoom} min={1} max={2.5} step={0.05}
            onChange={(v) => setTweak('coachZoom', v)} />
          <TweakSlider label="Vertical position" value={t.coachY} min={0} max={100} step={1}
            onChange={(v) => setTweak('coachY', v)} />
        </TweaksPanel>
      </React.Fragment>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);

})();
