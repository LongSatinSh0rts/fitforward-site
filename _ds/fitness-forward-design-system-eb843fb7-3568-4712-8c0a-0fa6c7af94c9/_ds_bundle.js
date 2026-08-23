/* @ds-bundle: {"format":3,"namespace":"FitnessForwardDesignSystem_eb843f","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"0abe6bc0289d","components/core/Badge.jsx":"d38b2df737bb","components/core/Button.jsx":"ad2f5f75eb49","components/core/Card.jsx":"0bf2a9d40fd9","components/core/Input.jsx":"bf4dc8c87820","components/core/ProgressBar.jsx":"4954af329e13","components/core/StatTile.jsx":"3db9bb430ce7","components/core/Switch.jsx":"fa7a1623f1bc","components/core/Tag.jsx":"b0e1a8d9f470","ui_kits/app/ActiveWorkout.jsx":"e5f7b4b07d94","ui_kits/app/BottomNav.jsx":"9fbc89005979","ui_kits/app/Dashboard.jsx":"6d3bb5891bc7","ui_kits/app/PlanProfile.jsx":"cf8057d96717","ui_kits/app/app-common.jsx":"0f1e59d15d5a","ui_kits/site/JoinModal.jsx":"631e1971889e","ui_kits/site/SiteClosing.jsx":"38532a678314","ui_kits/site/SiteCoach.jsx":"a9e4d6ed3fc0","ui_kits/site/SiteDisciplines.jsx":"33a59e16ea72","ui_kits/site/SiteHeader.jsx":"7d2f5c8faf4a","ui_kits/site/SiteHero.jsx":"025eafcd1d7c","ui_kits/site/SitePrograms.jsx":"6df37b6529b9","ui_kits/site/kit-common.jsx":"49dcb0b949bd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FitnessForwardDesignSystem_eb843f = window.FitnessForwardDesignSystem_eb843f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — Avatar
 * Round avatar with image or initials. Optional ink ring and a
 * status dot (online / streak).
 */
function Avatar({
  src,
  name = '',
  size = 44,
  tone = 'grape',
  // grape | volt | punch | ink
  ring = false,
  status = null,
  // null | 'online' | 'streak'
  style = {},
  ...rest
}) {
  const tones = {
    grape: {
      background: 'var(--ff-grape-600)',
      color: '#fff'
    },
    volt: {
      background: 'var(--ff-volt)',
      color: 'var(--ff-ink)'
    },
    punch: {
      background: 'var(--ff-punch)',
      color: '#fff'
    },
    ink: {
      background: 'var(--ff-ink)',
      color: '#fff'
    }
  };
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const t = tones[tone] || tones.grape;
  const statusColor = status === 'online' ? 'var(--status-go)' : 'var(--ff-volt)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size * 0.38,
      letterSpacing: '-0.02em',
      boxShadow: ring ? '0 0 0 2.5px var(--ff-ink)' : 'none',
      ...t
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: size * 0.30,
      height: size * 0.30,
      borderRadius: '50%',
      background: statusColor,
      boxShadow: '0 0 0 2.5px var(--surface-card)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — Badge
 * Small status / category pill. Mono label, uppercase, tracked.
 */
function Badge({
  children,
  tone = 'neutral',
  // neutral | volt | grape | punch | go | outline
  size = 'md',
  // sm | md
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--ff-150)',
      color: 'var(--ff-700)'
    },
    volt: {
      background: 'var(--ff-volt)',
      color: 'var(--ff-ink)'
    },
    grape: {
      background: 'var(--ff-grape-600)',
      color: '#fff'
    },
    punch: {
      background: 'var(--ff-punch)',
      color: '#fff'
    },
    go: {
      background: 'var(--status-go-soft)',
      color: 'var(--status-go)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ff-ink)',
      boxShadow: 'inset 0 0 0 1.5px var(--ff-ink)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: 10
    },
    md: {
      padding: '5px 12px',
      fontSize: 11
    }
  };
  const t = tones[tone] || tones.neutral;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...s,
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — Button
 * Pill-shaped, confident, springy. The signature "sticker" variant
 * adds a hard offset shadow that lifts on press.
 */
function Button({
  children,
  variant = 'primary',
  // primary | volt | secondary | ghost | sticker
  size = 'md',
  // sm | md | lg
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 13,
      gap: 6
    },
    md: {
      padding: '12px 22px',
      fontSize: 15,
      gap: 8
    },
    lg: {
      padding: '16px 30px',
      fontSize: 17,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--ff-ink)',
      color: '#fff',
      border: '2.5px solid var(--ff-ink)'
    },
    volt: {
      background: 'var(--ff-volt)',
      color: 'var(--ff-ink)',
      border: '2.5px solid var(--ff-ink)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ff-ink)',
      border: '2.5px solid var(--ff-ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2.5px solid transparent'
    },
    sticker: {
      background: 'var(--ff-grape-600)',
      color: '#fff',
      border: '2.5px solid var(--ff-ink)',
      boxShadow: 'var(--shadow-hard)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: "ff-button",
    "data-variant": variant,
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      letterSpacing: '-0.005em',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-spring), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out)',
      ...v,
      ...style
    }
  }, rest), iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — Card
 * Soft rounded surface container. Optional "sticker" hard offset
 * and "bordered" ink outline for the playful cut-out look.
 */
function Card({
  children,
  variant = 'soft',
  // soft | bordered | sticker | flat | inverse
  padding = 'md',
  // none | sm | md | lg
  as: Tag = 'div',
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 16,
    md: 24,
    lg: 32
  };
  const variants = {
    soft: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      border: '1.5px solid var(--ff-150)'
    },
    bordered: {
      background: 'var(--surface-card)',
      border: '2.5px solid var(--ff-ink)'
    },
    sticker: {
      background: 'var(--surface-card)',
      border: '2.5px solid var(--ff-ink)',
      boxShadow: 'var(--shadow-hard-lg)'
    },
    flat: {
      background: 'var(--ff-100)',
      border: '1.5px solid transparent'
    },
    inverse: {
      background: 'var(--ff-ink)',
      color: 'var(--text-on-ink)',
      border: '2.5px solid var(--ff-ink)'
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding: pads[padding] ?? 24,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — Input
 * Labeled text field with a bold rounded frame. Focus ring uses
 * the grape accent. Supports leading icon, helper & error text.
 */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  iconLeft = null,
  helper,
  error,
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `ff-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const borderColor = error ? 'var(--ff-punch)' : 'var(--ff-300)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      display: 'inline-flex',
      color: 'var(--ff-500)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    className: "ff-input",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: iconLeft ? '13px 16px 13px 44px' : '13px 16px',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-strong)',
      background: disabled ? 'var(--ff-100)' : 'var(--surface-card)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--ff-punch)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — ProgressBar
 * Chunky rounded track for goals & plan completion. Optional label
 * row with value. Accepts 0–100.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = true,
  tone = 'grape',
  // grape | volt | punch | ink
  height = 12,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const tones = {
    grape: 'var(--ff-grape-600)',
    volt: 'var(--ff-volt-500)',
    punch: 'var(--ff-punch)',
    ink: 'var(--ff-ink)'
  };
  const fill = tones[tone] || tones.grape;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      background: 'var(--ff-200)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — StatTile
 * A single metric: big mono number, mono uppercase label, optional
 * delta and icon. The workhorse of dashboards and workout summaries.
 */
function StatTile({
  value,
  unit,
  label,
  delta,
  // e.g. "+12%" or "-3"
  deltaTone = 'go',
  // go | stop | neutral
  icon = null,
  variant = 'soft',
  // soft | volt | grape | ink
  style = {},
  ...rest
}) {
  const variants = {
    soft: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--ff-150)',
      muted: 'var(--text-muted)'
    },
    volt: {
      background: 'var(--ff-volt)',
      color: 'var(--ff-ink)',
      border: '2.5px solid var(--ff-ink)',
      muted: 'var(--ff-700)'
    },
    grape: {
      background: 'var(--ff-grape-600)',
      color: '#fff',
      border: '2.5px solid var(--ff-grape-600)',
      muted: 'var(--ff-grape-200)'
    },
    ink: {
      background: 'var(--ff-ink)',
      color: '#fff',
      border: '2.5px solid var(--ff-ink)',
      muted: 'var(--ff-400)'
    }
  };
  const deltaColors = {
    go: 'var(--status-go)',
    stop: 'var(--ff-punch)',
    neutral: 'var(--text-muted)'
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 20,
      borderRadius: 'var(--radius-lg)',
      background: v.background,
      color: v.color,
      border: v.border,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: v.muted
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: v.muted
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: v.muted
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      color: variant === 'soft' ? deltaColors[deltaTone] : v.color
    }
  }, delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — Switch
 * Pill toggle with a springy knob. On = volt fill with ink frame.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  size = 'md',
  // sm | md
  style = {},
  ...rest
}) {
  const dims = size === 'sm' ? {
    w: 40,
    h: 24,
    k: 16
  } : {
    w: 52,
    h: 30,
    k: 22
  };
  const pad = (dims.h - dims.k) / 2;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const control = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      width: dims.w,
      height: dims.h,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--ff-volt)' : 'var(--ff-200)',
      border: `2.5px solid ${checked ? 'var(--ff-ink)' : 'var(--ff-300)'}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base), border-color var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: pad - 2.5,
      left: checked ? dims.w - dims.k - pad - 2.5 : pad - 2.5,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: checked ? 'var(--ff-ink)' : 'var(--ff-white)',
      boxShadow: checked ? 'none' : 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-spring), background var(--dur-base)'
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), control);
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fitness Forward — Tag
 * Bold pill chip with an ink outline. Used for the four disciplines,
 * filters and selectable categories. Click-to-toggle when selectable.
 */
function Tag({
  children,
  color = 'volt',
  // volt | punch | grape | mist | ink
  selected = true,
  selectable = false,
  onRemove,
  onClick,
  style = {},
  ...rest
}) {
  const colors = {
    volt: {
      background: 'var(--ff-volt)',
      color: 'var(--ff-ink)',
      border: 'var(--ff-ink)'
    },
    punch: {
      background: 'var(--ff-punch)',
      color: '#fff',
      border: 'var(--ff-punch)'
    },
    grape: {
      background: 'var(--ff-grape-600)',
      color: '#fff',
      border: 'var(--ff-grape-600)'
    },
    mist: {
      background: 'var(--ff-mist)',
      color: 'var(--ff-grape-700)',
      border: 'var(--ff-grape-300)'
    },
    ink: {
      background: 'var(--ff-ink)',
      color: '#fff',
      border: 'var(--ff-ink)'
    }
  };
  const c = colors[color] || colors.volt;
  const off = {
    background: 'transparent',
    color: 'var(--ff-600)',
    border: 'var(--ff-300)'
  };
  const active = selectable ? selected : true;
  const sty = active ? c : off;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: selectable ? 'button' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      border: `2.5px solid ${sty.border}`,
      background: sty.background,
      color: sty.color,
      cursor: selectable || onClick ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'all var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.7,
      fontSize: 14,
      lineHeight: 1
    },
    "aria-label": "Remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ActiveWorkout.jsx
try { (() => {
/* Member app — Active Workout screen (dark, live). */

function ActiveWorkout({
  onClose
}) {
  const {
    Button,
    ProgressBar,
    Badge
  } = window.FitnessForwardDesignSystem_eb843f;
  const exercises = [{
    name: 'Barbell Back Squat',
    sets: 4,
    reps: '8'
  }, {
    name: 'Romanian Deadlift',
    sets: 3,
    reps: '10'
  }, {
    name: 'Walking Lunges',
    sets: 3,
    reps: '12 / leg'
  }, {
    name: 'Hip Thrust',
    sets: 4,
    reps: '10'
  }, {
    name: 'Calf Raises',
    sets: 3,
    reps: '15'
  }, {
    name: 'Band Finisher',
    sets: 1,
    reps: 'AMRAP'
  }];
  const [idx, setIdx] = React.useState(0);
  const [set, setSet] = React.useState(1);
  const ex = exercises[idx];
  const totalSets = exercises.reduce((a, e) => a + e.sets, 0);
  const doneSets = exercises.slice(0, idx).reduce((a, e) => a + e.sets, 0) + (set - 1);
  const next = () => {
    if (set < ex.sets) setSet(set + 1);else if (idx < exercises.length - 1) {
      setIdx(idx + 1);
      setSet(1);
    }
  };
  const finished = idx === exercises.length - 1 && set === ex.sets;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--ff-ink)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(window.StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'var(--ff-800)',
      border: 'none',
      borderRadius: '50%',
      width: 38,
      height: 38,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(window.AppIcon, {
    name: "chevron-down",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 26,
      color: '#fff'
    }
  }, "24:18"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--ff-800)',
      border: 'none',
      borderRadius: '50%',
      width: 38,
      height: 38,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    "aria-label": "Pause"
  }, /*#__PURE__*/React.createElement(window.AppIcon, {
    name: "pause",
    size: 20,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: doneSets,
    max: totalSets,
    tone: "volt",
    showValue: false,
    height: 10
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ff-orchid)',
      marginTop: 10
    }
  }, "Exercise ", idx + 1, " of ", exercises.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "grape",
    style: {
      alignSelf: 'center',
      marginBottom: 18
    }
  }, "Set ", set, " of ", ex.sets), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: '#fff',
      fontSize: 36,
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      margin: '0 0 18px'
    }
  }, ex.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 40,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 46,
      color: 'var(--ff-volt)',
      lineHeight: 1
    }
  }, ex.reps), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ff-500)',
      marginTop: 6
    }
  }, "Reps")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 46,
      color: '#fff',
      lineHeight: 1
    }
  }, "135"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ff-500)',
      marginTop: 6
    }
  }, "lbs")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, finished ? /*#__PURE__*/React.createElement(Button, {
    variant: "volt",
    size: "lg",
    full: true,
    onClick: onClose,
    iconLeft: /*#__PURE__*/React.createElement(window.AppIcon, {
      name: "check",
      size: 20,
      color: "var(--ff-ink)"
    })
  }, "Finish workout") : /*#__PURE__*/React.createElement(Button, {
    variant: "volt",
    size: "lg",
    full: true,
    onClick: next,
    iconRight: /*#__PURE__*/React.createElement(window.AppIcon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ff-ink)"
    })
  }, set < ex.sets ? 'Complete set' : 'Next exercise'), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ff-400)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "+ Add note")));
}
Object.assign(window, {
  ActiveWorkout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ActiveWorkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/BottomNav.jsx
try { (() => {
/* Member app — bottom tab navigation. */

function BottomNav({
  active,
  onChange
}) {
  const tabs = [{
    id: 'home',
    icon: 'house',
    label: 'Home'
  }, {
    id: 'plan',
    icon: 'calendar-days',
    label: 'Plan'
  }, {
    id: 'log',
    icon: 'plus',
    label: ''
  }, {
    id: 'stats',
    icon: 'chart-no-axes-column',
    label: 'Stats'
  }, {
    id: 'profile',
    icon: 'user',
    label: 'Profile'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '10px 14px 26px',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(14px)',
      borderTop: '1.5px solid var(--ff-200)'
    }
  }, tabs.map(t => {
    if (t.id === 'log') {
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        onClick: () => onChange('log'),
        "aria-label": "Log",
        style: {
          width: 52,
          height: 52,
          borderRadius: '50%',
          flex: 'none',
          background: 'var(--ff-volt)',
          border: '2.5px solid var(--ff-ink)',
          boxShadow: 'var(--shadow-hard)',
          cursor: 'pointer',
          marginTop: -22,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(window.AppIcon, {
        name: "plus",
        size: 26,
        color: "var(--ff-ink)",
        strokeWidth: 2.6
      }));
    }
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        flex: 1,
        color: on ? 'var(--ff-grape-600)' : 'var(--ff-400)'
      }
    }, /*#__PURE__*/React.createElement(window.AppIcon, {
      name: t.icon,
      size: 23,
      color: on ? 'var(--ff-grape-600)' : 'var(--ff-400)',
      strokeWidth: on ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase'
      }
    }, t.label));
  }));
}
Object.assign(window, {
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/BottomNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
/* Member app — Home dashboard. */

function Dashboard({
  onStart
}) {
  const {
    Card,
    Button,
    StatTile,
    ProgressBar,
    Badge,
    Avatar
  } = window.FitnessForwardDesignSystem_eb843f;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '8px 0 22px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Tuesday \xB7 Week 3"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      letterSpacing: '-0.03em',
      margin: '4px 0 0'
    }
  }, "Let's move, Maya")), /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Lopez",
    tone: "punch",
    ring: true,
    status: "streak",
    size: 46
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "lg",
    style: {
      marginBottom: 18,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "volt",
    style: {
      marginBottom: 14
    }
  }, "Today \xB7 Strength"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: '#fff',
      fontSize: 27,
      letterSpacing: '-0.02em',
      margin: '0 0 6px'
    }
  }, "Lower Body Power"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ff-400)',
      fontSize: 14.5,
      margin: '0 0 20px'
    }
  }, "6 exercises \xB7 ~45 min \xB7 barbell + bands"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "volt",
    onClick: onStart,
    iconRight: /*#__PURE__*/React.createElement(window.AppIcon, {
      name: "arrow-right",
      size: 18,
      color: "var(--ff-ink)"
    })
  }, "Start workout"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ff-orchid)'
    }
  }, "Last: 4 days ago"))), /*#__PURE__*/React.createElement(Card, {
    variant: "soft",
    padding: "md",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17
    }
  }, "This week"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "3 / 4 sessions")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 75,
    tone: "grape",
    showValue: false,
    height: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 16,
      justifyContent: 'space-between'
    }
  }, ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 30,
      borderRadius: 8,
      background: [0, 1, 3].includes(i) ? 'var(--ff-grape-500)' : 'var(--ff-150)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Streak",
    value: "9",
    unit: "days",
    variant: "volt",
    icon: /*#__PURE__*/React.createElement(window.AppIcon, {
      name: "flame",
      size: 18,
      color: "var(--ff-ink)"
    })
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Calories",
    value: "1,840",
    delta: "+8% wk",
    icon: /*#__PURE__*/React.createElement(window.AppIcon, {
      name: "zap",
      size: 18,
      color: "var(--text-muted)"
    })
  })));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/PlanProfile.jsx
try { (() => {
/* Member app — Plan & Profile screens. */

function PlanScreen({
  onStart
}) {
  const {
    Card,
    Badge,
    Tag
  } = window.FitnessForwardDesignSystem_eb843f;
  const days = [{
    day: 'Mon',
    name: 'Lower Body Power',
    tag: 'Strength',
    color: 'volt',
    done: true
  }, {
    day: 'Tue',
    name: 'Lower Body Power',
    tag: 'Strength',
    color: 'volt',
    today: true
  }, {
    day: 'Wed',
    name: 'Mobility & Core',
    tag: 'Wellness',
    color: 'grape'
  }, {
    day: 'Thu',
    name: 'Upper Body Push',
    tag: 'Strength',
    color: 'volt'
  }, {
    day: 'Fri',
    name: 'Conditioning',
    tag: 'Fitness',
    color: 'punch'
  }, {
    day: 'Sat',
    name: 'Active Recovery',
    tag: 'Wellness',
    color: 'grape'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 120px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      letterSpacing: '-0.03em',
      margin: '8px 0 4px'
    }
  }, "Your plan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, "Total Transformation \xB7 Week 3 of 12"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: d.today ? 'sticker' : 'soft',
    padding: "md",
    onClick: d.today ? onStart : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      cursor: d.today ? 'pointer' : 'default',
      opacity: d.done ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      flex: 'none',
      width: 42
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, d.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: d.today ? 'var(--ff-grape-600)' : 'var(--text-strong)'
    }
  }, String(i + 9))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1.5,
      alignSelf: 'stretch',
      background: 'var(--ff-150)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: d.color,
    style: {
      fontSize: 10,
      padding: '4px 10px'
    }
  }, d.tag))), d.done ? /*#__PURE__*/React.createElement(window.AppIcon, {
    name: "circle-check-big",
    size: 24,
    color: "var(--status-go)"
  }) : d.today ? /*#__PURE__*/React.createElement(window.AppIcon, {
    name: "play",
    size: 22,
    color: "var(--ff-grape-600)"
  }) : /*#__PURE__*/React.createElement(window.AppIcon, {
    name: "chevron-right",
    size: 22,
    color: "var(--ff-400)"
  })))));
}
function ProfileScreen() {
  const {
    Card,
    Avatar,
    Badge,
    StatTile,
    Switch,
    Button
  } = window.FitnessForwardDesignSystem_eb843f;
  const [reminders, setReminders] = React.useState(true);
  const [coach, setCoach] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '12px 0 22px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Lopez",
    tone: "punch",
    ring: true,
    size: 84
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-0.02em',
      margin: '14px 0 4px'
    }
  }, "Maya Lopez"), /*#__PURE__*/React.createElement(Badge, {
    tone: "grape"
  }, "Total Transformation \xB7 Wk 3")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Workouts",
    value: "34",
    variant: "soft"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Streak",
    value: "9",
    variant: "volt"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "PRs",
    value: "7",
    variant: "grape"
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "soft",
    padding: "none",
    style: {
      overflow: 'hidden'
    }
  }, [{
    label: 'Rest-day reminders',
    state: reminders,
    set: setReminders
  }, {
    label: 'Coach check-ins',
    state: coach,
    set: setCoach
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 18px',
      borderBottom: i === 0 ? '1.5px solid var(--ff-150)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, r.label), /*#__PURE__*/React.createElement(Switch, {
    checked: r.state,
    onChange: r.set
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true,
    iconLeft: /*#__PURE__*/React.createElement(window.AppIcon, {
      name: "settings",
      size: 18
    })
  }, "Account settings")));
}
Object.assign(window, {
  PlanScreen,
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/PlanProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-common.jsx
try { (() => {
/* Member app — shared helpers: Icon wrapper, phone status bar. */

function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', name);
    ref.current.appendChild(el);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        stroke: color,
        'stroke-width': strokeWidth
      }
    });
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}
function StatusBar({
  dark
}) {
  const color = dark ? '#fff' : 'var(--ff-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 26px 6px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14,
      color
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.AppIcon, {
    name: "signal",
    size: 16,
    color: color
  }), /*#__PURE__*/React.createElement(window.AppIcon, {
    name: "wifi",
    size: 16,
    color: color
  }), /*#__PURE__*/React.createElement(window.AppIcon, {
    name: "battery-full",
    size: 18,
    color: color
  })));
}
window.AppIcon = Icon;
Object.assign(window, {
  AppIcon: Icon,
  StatusBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-common.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/JoinModal.jsx
try { (() => {
/* Marketing site — interactive "Join" modal (2-step, fake submit). */

function JoinModal({
  open,
  onClose
}) {
  const {
    Button,
    Input,
    Tag,
    Card
  } = window.FitnessForwardDesignSystem_eb843f;
  const [step, setStep] = React.useState(0);
  const [goals, setGoals] = React.useState(['Strength']);
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setDone(false);
      setGoals(['Strength']);
    }
  }, [open]);
  if (!open) return null;
  const allGoals = ['Strength', 'Fat loss', 'Mobility', 'Nutrition', 'Energy', 'Sleep'];
  const toggle = g => setGoals(gs => gs.includes(g) ? gs.filter(x => x !== g) : [...gs, g]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(10,8,12,0.55)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(480px, 100%)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: '2.5px solid var(--ff-ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ff-ink)',
      padding: '18px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-yellow-trim.png",
    alt: "Fitness Forward",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      display: 'inline-flex'
    },
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "x",
    size: 22,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--ff-volt)',
      border: '2.5px solid var(--ff-ink)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "check",
    size: 32,
    color: "var(--ff-ink)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      margin: '0 0 8px'
    }
  }, "You're in. Let's move."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      margin: '0 0 22px'
    }
  }, "Your free week is unlocked. Chris will reach out within 24 hours."), /*#__PURE__*/React.createElement(Button, {
    variant: "volt",
    full: true,
    onClick: onClose
  }, "Back to site")) : step === 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Kicker, {
    color: "var(--ff-grape-600)"
  }, "Step 1 of 2"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      margin: '12px 0 6px'
    }
  }, "What are you chasing?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      margin: '0 0 20px'
    }
  }, "Pick everything that fits. We'll tune your plan around it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 28
    }
  }, allGoals.map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g,
    color: "grape",
    selectable: true,
    selected: goals.includes(g),
    onClick: () => toggle(g)
  }, g))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    disabled: goals.length === 0,
    onClick: () => setStep(1),
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      name: "arrow-right",
      size: 18,
      color: "#fff"
    })
  }, "Continue")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Kicker, {
    color: "var(--ff-grape-600)"
  }, "Step 2 of 2"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      margin: '12px 0 20px'
    }
  }, "Where do we send it?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Chris",
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      name: "user",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      name: "mail",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setStep(0)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "volt",
    full: true,
    onClick: () => setDone(true)
  }, "Claim free week"))))));
}
Object.assign(window, {
  JoinModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/JoinModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteClosing.jsx
try { (() => {
/* Marketing site — testimonial + closing CTA + footer. */

function SiteTestimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(48px,7vw,96px) clamp(20px,5vw,56px)',
      maxWidth: 920,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "quote",
    size: 44,
    color: "var(--ff-orchid)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(24px,3.2vw,40px)',
      lineHeight: 1.22,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '18px 0 28px'
    }
  }, "\"I came for a workout plan and left with a whole new operating system.", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ff-grape-600)'
    }
  }, " Chris doesn't sell shortcuts \u2014 he builds momentum."), "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(window.KitAvatar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Maya Lopez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Total Transformation \xB7 12 weeks"))));
}
function KitAvatar() {
  const {
    Avatar
  } = window.FitnessForwardDesignSystem_eb843f;
  return /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Lopez",
    tone: "punch",
    ring: true,
    size: 48
  });
}
function SiteCTA({
  onJoin
}) {
  const {
    Button
  } = window.FitnessForwardDesignSystem_eb843f;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 clamp(20px,5vw,56px) clamp(48px,7vw,96px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--ff-grape-600)',
      border: '2.5px solid var(--ff-ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      padding: 'clamp(40px,6vw,80px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.Kicker, {
    color: "var(--ff-volt)"
  }, "No more circles"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: '#fff',
      fontSize: 'clamp(32px,5vw,68px)',
      letterSpacing: '-0.035em',
      lineHeight: 0.98,
      margin: '16px 0 26px'
    }
  }, "Your forward", /*#__PURE__*/React.createElement("br", null), "starts today."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "volt",
    size: "lg",
    onClick: onJoin,
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      name: "arrow-right",
      size: 20,
      color: "var(--ff-ink)"
    })
  }, "Claim your free week"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff'
    }
  }, "Talk to Chris"))));
}
function SiteFooter() {
  const cols = [{
    h: 'Programs',
    items: ['Foundations', 'Transformation', 'Reset & Recover', 'Nutrition only']
  }, {
    h: 'Company',
    items: ['The method', 'Meet Chris', 'Stories', 'Careers']
  }, {
    h: 'Support',
    items: ['Help center', 'Contact', 'Privacy', 'Terms']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ff-ink)',
      color: '#fff',
      padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,56px) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) repeat(3, minmax(0,1fr))',
      gap: 36
    },
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white-trim.png",
    alt: "Fitness Forward",
    style: {
      height: 46,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ff-400)',
      fontSize: 14,
      maxWidth: 280,
      lineHeight: 1.5
    }
  }, "Go beyond reason. Kick impossible to the curb.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ff-orchid)',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 10
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--ff-300)',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '40px auto 0',
      paddingTop: 22,
      borderTop: '1.5px solid var(--ff-700)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ff-500)'
    }
  }, "\xA9 2026 Fitness Forward by CJR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ff-500)'
    }
  }, "Built forward.")));
}
Object.assign(window, {
  SiteTestimonial,
  KitAvatar,
  SiteCTA,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteClosing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteCoach.jsx
try { (() => {
/* Marketing site — coach bio (Christopher J. Rosado) + stat band. */

function SiteCoach() {
  const {
    StatTile,
    Avatar,
    Badge
  } = window.FitnessForwardDesignSystem_eb843f;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-mist)',
      padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)',
      gap: 'clamp(28px,4vw,64px)',
      alignItems: 'center'
    },
    className: "coach-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-2xl)',
      border: '2.5px solid var(--ff-ink)',
      background: 'linear-gradient(160deg, var(--ff-volt), var(--ff-volt-500))',
      boxShadow: 'var(--shadow-hard-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-black-trim.png",
    alt: "",
    style: {
      width: '62%',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(0,0,0,0.5)'
    }
  }, "Replace with coach photo"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Kicker, {
    color: "var(--ff-grape-600)"
  }, "Meet your coach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,52px)',
      letterSpacing: '-0.03em',
      margin: '14px 0 18px'
    }
  }, "Christopher J. Rosado"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 540,
      margin: '0 0 24px'
    }
  }, "Founder of Fitness Forward. Chris built the program after years of watching people bounce between fad diets and burnout. His belief is simple: train the whole person, and the impossible starts looking ordinary."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "grape"
  }, "NASM Certified"), /*#__PURE__*/React.createElement(Badge, {
    tone: "grape"
  }, "Precision Nutrition"), /*#__PURE__*/React.createElement(Badge, {
    tone: "grape"
  }, "10+ yrs coaching")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Clients",
    value: "2.4k",
    variant: "ink"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Avg rating",
    value: "4.9",
    unit: "/5",
    variant: "grape"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Programs",
    value: "12",
    variant: "soft"
  })))));
}
Object.assign(window, {
  SiteCoach
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteCoach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteDisciplines.jsx
try { (() => {
/* Marketing site — the four disciplines band (on ink). */

function SiteDisciplines() {
  const items = [{
    icon: 'heart-pulse',
    name: 'Health',
    color: 'var(--ff-volt)',
    text: 'Build a body that works — strength, mobility & longevity first.'
  }, {
    icon: 'dumbbell',
    name: 'Fitness',
    color: 'var(--ff-punch)',
    text: 'Training plans that progress with you, never against you.'
  }, {
    icon: 'sparkles',
    name: 'Wellness',
    color: 'var(--ff-orchid)',
    text: 'Sleep, stress & recovery treated as part of the work.'
  }, {
    icon: 'apple',
    name: 'Nutrition',
    color: 'var(--ff-volt)',
    text: 'Food as fuel — flexible, sustainable, no crash diets.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ff-ink)',
      color: '#fff',
      padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(window.Kicker, {
    color: "var(--ff-orchid)"
  }, "The method"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: '#fff',
      fontSize: 'clamp(30px, 4vw, 52px)',
      letterSpacing: '-0.03em',
      margin: '14px 0 8px',
      maxWidth: 720
    }
  }, "Four disciplines. One philosophy: forward."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ff-400)',
      fontSize: 18,
      maxWidth: 560,
      margin: '0 0 44px'
    }
  }, "We don't separate the gym from the kitchen from your head. They move together."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 18
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--ff-900)',
      border: '1.5px solid var(--ff-700)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      alignItems: 'center',
      justifyContent: 'center',
      background: it.color,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: it.icon,
    size: 24,
    color: "var(--ff-ink)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: '#fff',
      margin: '0 0 8px'
    }
  }, it.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ff-400)',
      fontSize: 14.5,
      lineHeight: 1.5,
      margin: 0
    }
  }, it.text))))));
}
Object.assign(window, {
  SiteDisciplines
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteDisciplines.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteHeader.jsx
try { (() => {
/* Marketing site — sticky top navigation with the wordmark. */

function SiteHeader({
  onJoin
}) {
  const {
    Button
  } = window.FitnessForwardDesignSystem_eb843f;
  const links = ['Disciplines', 'Programs', 'Coaching', 'Stories'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px clamp(20px, 5vw, 56px)',
      background: 'rgba(250,246,241,0.82)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1.5px solid var(--ff-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-black-trim.png",
    alt: "Fitness Forward by CJR",
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    },
    className: "site-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    style: {}
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "volt",
    size: "sm",
    onClick: onJoin
  }, "Join now")));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteHero.jsx
try { (() => {
/* Marketing site — hero. Big groovy statement + the brand promise. */

function SiteHero({
  onJoin
}) {
  const {
    Button,
    Tag,
    Badge
  } = window.FitnessForwardDesignSystem_eb843f;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)',
      gap: 'clamp(28px, 4vw, 64px)',
      alignItems: 'center',
      padding: 'clamp(40px, 6vw, 84px) clamp(20px, 5vw, 56px)',
      maxWidth: 1280,
      margin: '0 auto'
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "grape",
    dot: true,
    style: {
      marginBottom: 22
    }
  }, "By Christopher J. Rosado"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(44px, 6.4vw, 88px)',
      lineHeight: 0.94,
      letterSpacing: '-0.035em',
      color: 'var(--text-strong)',
      margin: '0 0 22px'
    }
  }, "Go beyond", /*#__PURE__*/React.createElement("br", null), "reason.", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ff-grape-600)'
    }
  }, "Kick", /*#__PURE__*/React.createElement("br", null), "impossible"), ' ', /*#__PURE__*/React.createElement("span", {
    className: "ff-highlight"
  }, "to the curb.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(17px, 1.5vw, 20px)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: 480,
      margin: '0 0 30px',
      fontWeight: 500
    }
  }, "A multidisciplinary approach to health, fitness, wellness & nutrition \u2014 coaching that meets you where you are and moves you forward."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sticker",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      name: "arrow-right",
      size: 20,
      color: "#fff"
    }),
    onClick: onJoin
  }, "Start your journey"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(window.Icon, {
      name: "play",
      size: 18
    })
  }, "Watch the method")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "volt"
  }, "Health"), /*#__PURE__*/React.createElement(Tag, {
    color: "punch"
  }, "Fitness"), /*#__PURE__*/React.createElement(Tag, {
    color: "grape"
  }, "Wellness"), /*#__PURE__*/React.createElement(Tag, {
    color: "mist"
  }, "Nutrition"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-2xl)',
      background: 'linear-gradient(150deg, var(--ff-grape-600), var(--ff-grape-800))',
      border: '2.5px solid var(--ff-ink)',
      boxShadow: 'var(--shadow-hard-lg)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-yellow-trim.png",
    alt: "",
    style: {
      width: '64%',
      opacity: 0.96
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Replace with hero photo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -22,
      left: -22,
      padding: '14px 18px',
      background: 'var(--ff-volt)',
      border: '2.5px solid var(--ff-ink)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-hard)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "trophy",
    size: 26,
    color: "var(--ff-ink)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1,
      color: 'var(--ff-ink)'
    }
  }, "2,400+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ff-700)'
    }
  }, "Lives moved forward")))));
}
Object.assign(window, {
  SiteHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SitePrograms.jsx
try { (() => {
/* Marketing site — program cards. Composes Card, Tag, Badge, Button. */

function SitePrograms({
  onJoin
}) {
  const {
    Card,
    Tag,
    Badge,
    Button
  } = window.FitnessForwardDesignSystem_eb843f;
  const programs = [{
    name: 'Forward Foundations',
    level: 'Beginner',
    weeks: 8,
    price: 49,
    color: 'volt',
    blurb: 'Your first eight weeks. Build the habit, learn the lifts, find your footing.',
    tags: ['Strength', 'Mobility'],
    featured: false
  }, {
    name: 'Total Transformation',
    level: 'All levels',
    weeks: 12,
    price: 89,
    color: 'grape',
    blurb: 'The full multidisciplinary system — training, nutrition & weekly check-ins.',
    tags: ['Strength', 'Nutrition', 'Coaching'],
    featured: true
  }, {
    name: 'Reset & Recover',
    level: 'Wellness',
    weeks: 6,
    price: 39,
    color: 'punch',
    blurb: 'Lower-intensity block built around sleep, stress and getting back to baseline.',
    tags: ['Wellness', 'Mobility'],
    featured: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 56px)',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Kicker, null, "Choose your track"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px, 4vw, 52px)',
      letterSpacing: '-0.03em',
      margin: '14px 0 0'
    }
  }, "Programs that move you")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(window.Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "See all programs")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 20
    }
  }, programs.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: p.featured ? 'sticker' : 'bordered',
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.color === 'volt' ? 'volt' : p.color === 'grape' ? 'grape' : 'punch'
  }, p.level), p.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Most popular")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0,
      flex: 1
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    color: "mist"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      borderTop: '1.5px solid var(--ff-150)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--text-strong)'
    }
  }, "$", p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "/ mo \xB7 ", p.weeks, " weeks")), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? 'volt' : 'primary',
    full: true,
    onClick: onJoin
  }, "Join this track")))));
}
Object.assign(window, {
  SitePrograms
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SitePrograms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/kit-common.jsx
try { (() => {
/* Shared kit helpers — Lucide icon wrapper + small layout atoms.
   Exported to window so sibling babel scripts can use them. */

function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', name);
    ref.current.appendChild(el);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        stroke: color,
        'stroke-width': strokeWidth
      }
    });
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}
function Kicker({
  children,
  color = 'var(--text-muted)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, children);
}
Object.assign(window, {
  Icon,
  Kicker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/kit-common.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

})();
