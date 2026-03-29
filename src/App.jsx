import { useState } from "react";

// ─── CLIENT DATA ─────────────────────────────────────────────────────────────
const D = {
  biz: {
    name: "Cruz Air LLC",
    phone: "(773) 484-3308",
    niche: "hvac",
    area: "Chicago & the Western Suburbs",
    years: 12,
    license: "IL-HVAC-039271",
    tag: "Your Comfort Is Our Mission",
    addr: "Chicago, IL",
    email: "info@cruzairllc.com",
    socials: [
      { label: "Facebook", url: "https://www.facebook.com/cruzairchicago", icon: "fb" },
    ],
  },
  hero: {
    h: "Chicago's Most Trusted HVAC Experts",
    sub: "From emergency furnace repairs to full AC installations — 52 five-star reviews and counting.",
    emergency: "24/7 Emergency Service",
    cta: "Call Now",
    cta2: "Get a Free Quote",
  },
  services: [
    { t: "AC Repair & Installation", d: "Fast, reliable cooling solutions to keep you comfortable all summer. We service all major brands with same-day diagnostics.", icon: "snowflake" },
    { t: "Furnace Repair", d: "Same-day furnace diagnostics and repairs when you need them most. Emergency service available around the clock.", icon: "flame" },
    { t: "HVAC Maintenance", d: "Preventive tune-ups that extend equipment life and cut energy bills. Annual plans with priority scheduling.", icon: "gauge" },
    { t: "Duct Cleaning & Sealing", d: "Breathe easier with professional air duct cleaning and sealing. Improves air quality and system efficiency.", icon: "fan" },
    { t: "Heat Pump Systems", d: "Energy-efficient heating and cooling in one system. Expert installation and ongoing maintenance support.", icon: "thermo" },
    { t: "Emergency Service", d: "24/7 availability for urgent heating and cooling breakdowns. We dispatch within 60 minutes.", icon: "shield" },
  ],
  reviews: {
    rating: 5.0,
    count: 52,
    list: [
      { n: "Maria G.", t: "Cruz Air saved us during a brutal cold snap. Technician was here in 45 minutes and had our furnace running perfectly!", s: 5 },
      { n: "David R.", t: "Professional, honest, and fair pricing. They explained everything before starting and the AC works better than ever.", s: 5 },
      { n: "Sandra T.", t: "We've used them three times now. Always on time, always courteous, always excellent work.", s: 5 },
      { n: "James K.", t: "Called at 10pm with a broken furnace in January. They had someone here by 11pm. Incredible service.", s: 5 },
    ],
  },
  why: [
    { t: "Same-Day Service", d: "We show up when you need us — not three days later." },
    { t: "Upfront Pricing", d: "No surprises. You approve the price before we start any work." },
    { t: "Licensed & Insured", d: "Fully licensed, bonded, and insured for your peace of mind." },
    { t: "5-Star Rated", d: "52 five-star Google reviews from real customers." },
  ],
  cta: { h: "Ready to Get Comfortable?", sub: "Whether it's an emergency or a routine tune-up, we're here to help." },
  hrs: { wd: "Mon–Fri: 7AM – 8PM", we: "Sat–Sun: 9AM – 5PM", em: true },
  // ─── IMAGES: drop .png or .jpg in public/assets/ — no code changes needed ──
  // Use base paths (no extension). Component tries .png first, then .jpg.
  images: {
    logo:   "/assets/logo",    // brand logo — nav bar
    photo1: "/assets/photo-1", // team/job-site photo — homepage strip
    photo2: "/assets/photo-2", // exterior/equipment photo — services page bg
  },
};

// ─── SERVICE AREA DATA ────────────────────────────────────────────────────────
const SERVICE_AREA_DATA = {
  business: {
    name: "Cruz Air LLC",
    phone: "(773) 484-3308",
    niche: "HVAC",
    area: "Chicago & the Western Suburbs",
    years: 12,
  },
  cities: [
    {
      name: "Chicago",
      state: "IL",
      zip: "60639",
      slug: "chicago",
      description: "Cruz Air LLC is based in Chicago and proudly serves homeowners and businesses across the city. From Logan Square to Pilsen, our team knows Chicago's diverse housing stock — vintage six-flats, modern condos, and everything in between — delivering dependable HVAC service for every property type.",
      highlights: ["Based in Chicago", "All neighborhood types served", "Serving 60639 and surrounding zip codes"],
      localCta: "Get HVAC Service in Chicago",
    },
    {
      name: "Berwyn",
      state: "IL",
      zip: "60402",
      slug: "berwyn",
      description: "Berwyn is a vibrant suburb just west of Chicago known for its bungalow-style homes built in the 1920s–40s. Aging HVAC systems are common, and we help Berwyn homeowners upgrade to modern, energy-efficient heating and cooling with same-day service.",
      highlights: ["Older home HVAC specialists", "Quick 20-minute response time", "Serving 60402 zip code"],
      localCta: "Get HVAC Service in Berwyn",
    },
    {
      name: "Riverside",
      state: "IL",
      zip: "60546",
      slug: "riverside",
      description: "Riverside is a historic planned community along the Des Plaines River, designated a National Historic Landmark. Its classic homes require reliable heating through brutal Chicago winters and cooling through humid summers — we've got it covered.",
      highlights: ["Historic home specialists", "River-area humidity solutions", "Serving 60546 zip code"],
      localCta: "Get HVAC Service in Riverside",
    },
    {
      name: "Brookfield",
      state: "IL",
      zip: "60513",
      slug: "brookfield",
      description: "Home to the famous Brookfield Zoo, this western suburb has a mix of residential and commercial properties. We provide comfort solutions for families and HVAC service for businesses along Ogden Avenue and throughout the Brookfield community.",
      highlights: ["Residential & commercial service", "Ogden Ave corridor coverage", "Serving 60513 zip code"],
      localCta: "Get HVAC Service in Brookfield",
    },
    {
      name: "Lyons",
      state: "IL",
      zip: "60534",
      slug: "lyons",
      description: "Lyons sits at the confluence of the Des Plaines River and the Chicago Sanitary and Ship Canal. Its compact neighborhoods depend on reliable HVAC contractors who know the area. We dispatch fast and get the job done right the first time.",
      highlights: ["Same-day emergency dispatch", "Local expertise", "Serving 60534 zip code"],
      localCta: "Get HVAC Service in Lyons",
    },
    {
      name: "Forest Park",
      state: "IL",
      zip: "60130",
      slug: "forest-park",
      description: "Forest Park is known for its walkable downtown, Blue Line access, and diverse housing stock from vintage apartments to single-family homes. Each property has unique HVAC needs — our team has the experience to handle all of them efficiently.",
      highlights: ["All property types serviced", "Accessible scheduling", "Serving 60130 zip code"],
      localCta: "Get HVAC Service in Forest Park",
    },
  ],
};

// ─── TEMPLATE: TRUST SHIELD ───────────────────────────────────────────────────
const C = { p: "#1B365D", a: "#E8722A", bg: "#F8F9FB", sf: "#FFF", tx: "#1B365D", lt: "#5A6B80", ct: "#E8722A", ctT: "#FFF" };
const ff = "'Outfit',sans-serif";

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Ic = {
  snowflake: (c, z = 28) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="5.6" y1="5.6" x2="18.4" y2="18.4" /><line x1="18.4" y1="5.6" x2="5.6" y2="18.4" /><circle cx="12" cy="12" r="3" /></svg>,
  flame: (c, z = 28) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z" /></svg>,
  gauge: (c, z = 28) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  fan: (c, z = 28) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="2" /><path d="M12 2C9 2 7 5 7 8c0 2 2 4 5 4" /><path d="M12 22c3 0 5-3 5-6 0-2-2-4-5-4" /><path d="M2 12c0 3 3 5 6 5 2 0 4-2 4-5" /><path d="M22 12c0-3-3-5-6-5-2 0-4 2-4 5" /></svg>,
  thermo: (c, z = 28) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M14 4a2 2 0 00-4 0v10.5a4 4 0 104 0V4z" /><line x1="12" y1="10" x2="12" y2="16" /></svg>,
  shield: (c, z = 28) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round"><path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>,
  phone: (c, z = 18) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z" /></svg>,
  star: (c, z = 16) => <svg width={z} height={z} viewBox="0 0 24 24" fill={c} stroke={c} strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  check: (c, z = 18) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>,
  clock: (c, z = 14) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  map: (c, z = 14) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  mail: (c, z = 18) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>,
  menu: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
  x: (c) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
  arrow: (c, z = 16) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
  quote: (c, z = 32) => <svg width={z} height={z} viewBox="0 0 24 24" fill={c} opacity="0.15"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" /></svg>,
  tool: (c, z = 20) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
  fb: (c, z = 20) => <svg width={z} height={z} viewBox="0 0 24 24" fill={c}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
  ig: (c, z = 20) => <svg width={z} height={z} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill={c} stroke="none" /></svg>,
  gg: (c, z = 20) => <svg width={z} height={z} viewBox="0 0 24 24" fill={c}><path d="M21.8 12.2c0-.7-.1-1.3-.2-2H12v3.8h5.5a4.7 4.7 0 01-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5z" /><path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6C4.7 19.9 8.1 22 12 22z" /><path d="M6.4 13.9A6 6 0 016.1 12c0-.7.1-1.3.3-1.9V7.5H3A10 10 0 002 12c0 1.6.4 3.1 1 4.5l3.4-2.6z" /><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 2.9 14.7 2 12 2 8.1 2 4.7 4.1 3 7.5l3.4 2.6C7.2 7.7 9.4 5.9 12 5.9z" /></svg>,
};
const icon = (n, c, z) => (Ic[n] || Ic.tool)(c, z);
const Stars = ({ n = 5, c, z = 16 }) => <span style={{ display: "inline-flex", gap: 2 }}>{Array.from({ length: n }, (_, i) => <span key={i}>{Ic.star(c, z)}</span>)}</span>;

// Tries base.png first, then base.jpg, then hides if both fail.
// Prepends BASE_URL so images load correctly on GitHub Pages subpaths.
const Img = ({ base, alt = "", style: s, ariaHidden }) => {
  const prefix = import.meta.env.BASE_URL.replace(/\/$/, '');
  const fullBase = `${prefix}${base}`;
  const [src, setSrc] = useState(`${fullBase}.png`);
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <img src={src} alt={alt} aria-hidden={ariaHidden || undefined} style={s}
      onError={() => {
        if (src.endsWith(".png")) setSrc(`${fullBase}.jpg`);
        else setHidden(true);
      }}
    />
  );
};

// ─── CSS ─────────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
.nav-d{display:flex;gap:20px;align-items:center}
.nav-mb{display:none;background:none;border:none;cursor:pointer}
.mob-menu{display:none}
.mob-cta{display:none}
.ph-d{display:flex}
@media(max-width:640px){
  .svc-grid{grid-template-columns:1fr!important}
  .svc-grid>div:last-child{display:none}
  .nav-d{display:none}
  .nav-mb{display:block}
  .mob-menu.open{display:flex;flex-direction:column;position:fixed;inset:0;z-index:200;padding:80px 24px;gap:8px}
  .mob-cta{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:90;padding:12px;align-items:center;justify-content:center;gap:8px;text-decoration:none;font-weight:700;font-size:16px}
  .ph-d{display:none}
  .hero-h{font-size:28px!important}
  .sec-h{font-size:22px!important}
  .g3{grid-template-columns:1fr!important}
  .g2{grid-template-columns:1fr!important}
  .ctas{flex-direction:column}
  .ctas a{text-align:center;justify-content:center}
  .stat-bar{flex-direction:column!important;gap:16px!important}
  .contact-grid{grid-template-columns:1fr!important}
}
@media(min-width:641px) and (max-width:900px){
  .g3{grid-template-columns:1fr 1fr!important}
  .contact-grid{grid-template-columns:1fr!important}
}
`;

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────
const Btn = ({ href, bg, color: cl, children, style: s, onClick: oc }) => (
  <a href={href} onClick={oc} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: bg, color: cl, padding: "13px 26px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", cursor: "pointer", border: "none", transition: "opacity .2s", ...s }}>{children}</a>
);

const Nav = ({ page, go }) => {
  const [open, setOpen] = useState(false);
  const nav = p => e => { e.preventDefault(); go(p); setOpen(false); window.scrollTo(0, 0); };
  const lk = p => ({ color: "#FFF", textDecoration: "none", fontSize: 14, fontWeight: page === p ? 700 : 500, opacity: page === p ? 1 : 0.75, cursor: "pointer" });
  const pages = [["home", "Home"], ["services", "Services"], ["service-area", "Service Areas"], ["contact", "Contact"]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: C.p, color: "#FFF", fontFamily: ff }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: 62 }}>
        <a href="#" onClick={nav("home")} style={{ textDecoration: "none", color: "#FFF", display: "flex", alignItems: "center", gap: 10 }}>
          <Img base={D.images.logo} alt={D.biz.name} style={{ height: 38, width: "auto", maxWidth: 120, borderRadius: 4, objectFit: "contain" }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: -0.5 }}>{D.biz.name}</div>
            <div style={{ fontSize: 10, opacity: 0.55, letterSpacing: 1, textTransform: "uppercase" }}>{D.biz.tag}</div>
          </div>
        </a>
        <div className="nav-d">{pages.map(([p, l]) => <a key={p} href="#" onClick={nav(p)} style={lk(p)}>{l}</a>)}</div>
        <div className="ph-d" style={{ alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 11, background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: 20, fontWeight: 600 }}>24/7</span>
          <Btn href={`tel:${D.biz.phone}`} bg={C.ct} color={C.ctT} style={{ padding: "7px 14px", fontSize: 13 }}>{Ic.phone(C.ctT)} {D.biz.phone}</Btn>
        </div>
        <button className="nav-mb" onClick={() => setOpen(!open)}>{open ? Ic.x("#FFF") : Ic.menu("#FFF")}</button>
      </div>
      <div className={`mob-menu ${open ? "open" : ""}`} style={{ background: C.p }}>
        <button onClick={() => setOpen(false)} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer" }}>{Ic.x("#FFF")}</button>
        {pages.map(([p, l]) => <a key={p} href="#" onClick={nav(p)} style={{ color: "#FFF", textDecoration: "none", fontSize: 20, fontWeight: 700, padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>{l}</a>)}
        <Btn href={`tel:${D.biz.phone}`} bg={C.ct} color={C.ctT} style={{ marginTop: 20, justifyContent: "center", fontSize: 18, padding: 16, width: "100%" }}>{Ic.phone(C.ctT)} {D.biz.phone}</Btn>
      </div>
    </header>
  );
};

const Foot = ({ go }) => {
  const nav = p => e => { e.preventDefault(); go(p); window.scrollTo(0, 0); };
  return (
    <footer style={{ background: C.p, color: "rgba(255,255,255,0.8)", fontFamily: ff, padding: "44px 24px 28px" }}>
      <div className="g3" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: 16, color: "#FFF", marginBottom: 6 }}>{D.biz.name}</div>
          <p style={{ fontSize: 13, lineHeight: 1.6 }}>Serving {D.biz.area}.</p>
          {D.biz.license && <p style={{ fontSize: 11, opacity: 0.4, marginTop: 4 }}>License #{D.biz.license}</p>}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 11, color: "#FFF", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Pages</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[["home", "Home"], ["services", "Services"], ["service-area", "Service Areas"], ["contact", "Contact"]].map(([p, l]) =>
              <a key={p} href="#" onClick={nav(p)} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13 }}>{l}</a>
            )}
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 11, color: "#FFF", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Contact</div>
          <p style={{ fontSize: 14, fontWeight: 700, margin: "3px 0" }}>{D.biz.phone}</p>
          {D.biz.addr && <p style={{ fontSize: 12, margin: "3px 0" }}>{D.biz.addr}</p>}
          <p style={{ fontSize: 11, margin: "6px 0 2px", opacity: 0.5 }}>{D.hrs.wd}</p>
          <p style={{ fontSize: 11, opacity: 0.5 }}>{D.hrs.we}</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "28px auto 0", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16, fontSize: 11, opacity: 0.35, textAlign: "center" }}>
        © {new Date().getFullYear()} {D.biz.name}
      </div>
    </footer>
  );
};

const MobCTA = () => (
  <a className="mob-cta" href={`tel:${D.biz.phone}`} style={{ background: C.ct, color: C.ctT, fontFamily: ff, boxShadow: "0 -2px 12px rgba(0,0,0,0.15)" }}>
    {Ic.phone(C.ctT)} Call {D.biz.phone}
  </a>
);

const ContactForm = () => {
  const FORMSPREE = "https://formspree.io/f/mlgojvzr";
  const [f, setF] = useState({ name: "", phone: "", email: "", service: "", msg: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const inp = { fontFamily: ff, width: "100%", padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${C.p}22`, fontSize: 14, outline: "none", background: C.sf, color: C.tx };

  const submit = async () => {
    if (!f.name || !f.phone) { alert("Name and phone required."); return; }
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name: f.name, phone: f.phone, email: f.email, service: f.service, message: f.msg }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") return (
    <div style={{ background: `${C.p}0D`, borderRadius: 12, padding: 32, textAlign: "center" }}>
      <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${C.p}1A`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>{Ic.check(C.p, 26)}</div>
      <h3 style={{ fontFamily: ff, fontSize: 20, fontWeight: 700, color: C.tx, margin: "0 0 6px" }}>Message Sent!</h3>
      <p style={{ fontFamily: ff, fontSize: 14, color: C.lt }}>We'll respond shortly. Need help now? <a href={`tel:${D.biz.phone}`} style={{ color: C.p, fontWeight: 700 }}>{D.biz.phone}</a></p>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <input value={f.name} onChange={e => setF({ ...f, name: e.target.value })} placeholder="Your Name *" style={inp} />
      <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <input value={f.phone} onChange={e => setF({ ...f, phone: e.target.value })} placeholder="Phone *" style={inp} />
        <input value={f.email} onChange={e => setF({ ...f, email: e.target.value })} placeholder="Email" style={inp} />
      </div>
      <select value={f.service} onChange={e => setF({ ...f, service: e.target.value })} style={{ ...inp, color: f.service ? C.tx : C.lt }}>
        <option value="">Select Service...</option>
        {D.services.map((s, i) => <option key={i} value={s.t}>{s.t}</option>)}
      </select>
      <textarea value={f.msg} onChange={e => setF({ ...f, msg: e.target.value })} placeholder="Describe your issue..." rows={4} style={{ ...inp, resize: "vertical" }} />
      {status === "error" && (
        <p style={{ fontFamily: ff, fontSize: 13, color: "#C41E3A", textAlign: "center" }}>Something went wrong. Please call us directly at {D.biz.phone}.</p>
      )}
      <button onClick={submit} disabled={status === "submitting"} style={{ fontFamily: ff, background: status === "submitting" ? `${C.ct}99` : C.ct, color: C.ctT, padding: 14, borderRadius: 8, fontWeight: 700, fontSize: 16, border: "none", cursor: status === "submitting" ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        {Ic.mail(C.ctT)} {status === "submitting" ? "Sending..." : "Submit Request"}
      </button>
    </div>
  );
};

const InfoSidebar = () => (
  <div>
    <div style={{ background: C.p, borderRadius: 14, padding: 28, color: "#FFF", marginBottom: 16, display: "flex", gap: 24 }}>
      {/* Contact info */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: ff, fontSize: 17, fontWeight: 700, margin: "0 0 18px" }}>Get In Touch</h3>
        {[
          [`tel:${D.biz.phone}`, Ic.phone("#FFF"), "Call", D.biz.phone],
          [`mailto:${D.biz.email}`, Ic.mail("#FFF"), "Email", D.biz.email],
          [null, Ic.map("#FFF"), "Location", D.biz.addr],
        ].map(([h, ic, lab, val], i) => {
          const W = h ? "a" : "div";
          return <W key={i} href={h} style={{ display: "flex", alignItems: "center", gap: 12, color: "#FFF", textDecoration: "none", marginBottom: 14 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: `${C.a}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>{ic}</div>
            <div><div style={{ fontSize: 11, opacity: 0.55 }}>{lab}</div><div style={{ fontSize: 14, fontWeight: 600 }}>{val}</div></div>
          </W>;
        })}
      </div>
      {/* Socials */}
      {(D.biz.socials || []).filter(s => s.url).length > 0 && (
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.15)", paddingLeft: 24, display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
          <div style={{ fontSize: 11, opacity: 0.55, fontFamily: ff, marginBottom: 4 }}>Follow Us</div>
          {(D.biz.socials || []).filter(s => s.url).map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
              style={{ width: 42, height: 42, borderRadius: 10, background: `${C.a}30`, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = C.a}
              onMouseLeave={e => e.currentTarget.style.background = `${C.a}30`}
            >
              {Ic[s.icon] ? Ic[s.icon]("#FFF", 20) : Ic.arrow("#FFF", 20)}
            </a>
          ))}
        </div>
      )}
    </div>
    <div style={{ background: `${C.a}12`, borderRadius: 14, padding: 20, border: `1px solid ${C.a}30` }}>
      <h3 style={{ fontFamily: ff, fontSize: 15, fontWeight: 700, color: C.tx, margin: "0 0 10px" }}>Hours</h3>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.tx, padding: "5px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <span>Mon–Fri</span><span style={{ fontWeight: 600 }}>7AM – 8PM</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: C.tx, padding: "5px 0" }}>
        <span>Sat–Sun</span><span style={{ fontWeight: 600 }}>9AM – 5PM</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: 13, color: C.ct, fontWeight: 700 }}>
        {Ic.clock(C.ct)} 24/7 Emergency Available
      </div>
    </div>
  </div>
);

// ─── PAGES ───────────────────────────────────────────────────────────────────
const HomePage = ({ go }) => {
  const tc = e => { e.preventDefault(); go("contact"); window.scrollTo(0, 0); };
  return (
    <>
      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg,${C.p},#0F2440)`, color: "#FFF", padding: "72px 24px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: `${C.a}0A` }} />
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <h1 className="hero-h" style={{ fontFamily: ff, fontSize: 42, fontWeight: 800, lineHeight: 1.12, letterSpacing: -1.5, marginBottom: 14 }}>{D.hero.h}</h1>
          <p style={{ fontFamily: ff, fontSize: 16, opacity: 0.8, lineHeight: 1.6, marginBottom: 28 }}>{D.hero.sub}</p>
          <div className="ctas" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Btn href={`tel:${D.biz.phone}`} bg={C.a} color="#FFF">{Ic.phone("#FFF")} {D.hero.cta}</Btn>
            <Btn href="#" onClick={tc} bg="rgba(255,255,255,0.1)" color="#FFF" style={{ border: "2px solid rgba(255,255,255,0.3)" }}>{D.hero.cta2}</Btn>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
          {[["⭐ 5.0 Rating", `${D.reviews.count} Google Reviews`], ["🛡️ Licensed", `#${D.biz.license}`], ["⏰ 24/7", "Emergency Service"], [`${D.biz.years}+`, "Years Experience"]].map(([a, b], i) => (
            <div key={i} style={{ textAlign: "center" }}><div style={{ fontSize: 18, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 11, opacity: 0.6 }}>{b}</div></div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "68px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="sec-h" style={{ fontFamily: ff, fontWeight: 800, textAlign: "center", color: C.tx, margin: "0 0 36px" }}>What We Do Best</h2>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {D.services.map((s, i) => (
              <div key={i} style={{ background: C.sf, borderRadius: 14, padding: 28, boxShadow: "0 2px 8px rgba(0,0,0,0.05)", textAlign: "center", border: "1px solid rgba(0,0,0,0.04)" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${C.a}18`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{icon(s.icon, C.a, 28)}</div>
                <h3 style={{ fontFamily: ff, fontSize: 16, fontWeight: 700, color: C.tx, margin: "0 0 8px" }}>{s.t}</h3>
                <p style={{ fontFamily: ff, fontSize: 13, color: C.lt, lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: C.p, padding: "44px 24px" }}>
        <div className="stat-bar" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {[[D.reviews.count + "+", "5-Star Reviews"], [D.biz.years + "+", "Years Experience"], ["60", "Min Response Time"], ["100%", "Satisfaction Rate"]].map(([num, lab], i) => (
            <div key={i} style={{ textAlign: "center", color: "#FFF" }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: C.a }}>{num}</div>
              <div style={{ fontSize: 13, opacity: 0.7, marginTop: 2 }}>{lab}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team strip — swap photos by replacing files in public/assets/ */}
      <section style={{ padding: "56px 24px", background: C.bg }}>
        <div className="contact-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <Img base={D.images.photo1} alt={`${D.biz.name} team`} style={{ width: "100%", height: 350, marginTop: -50, objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: C.a, marginBottom: 10 }}>Who We Are</div>
            <h2 style={{ fontFamily: ff, fontSize: 28, fontWeight: 800, color: C.tx, margin: "0 0 14px", lineHeight: 1.2 }}>Local Experts You Can Trust</h2>
            <p style={{ fontFamily: ff, fontSize: 15, color: C.lt, lineHeight: 1.7, marginBottom: 20 }}>
              {D.biz.name} has been serving {D.biz.area} for over {D.biz.years} years. We're a local team that takes pride in every job — from a quick furnace fix to a full system installation.
            </p>
            {D.why.map((w, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${C.a}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{Ic.check(C.a, 13)}</div>
                <div>
                  <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 700, color: C.tx }}>{w.t}</span>
                  <span style={{ fontFamily: ff, fontSize: 13, color: C.lt }}> — {w.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: "68px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="sec-h" style={{ fontFamily: ff, fontWeight: 800, textAlign: "center", color: C.tx, margin: "0 0 32px" }}>What Customers Say</h2>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {D.reviews.list.slice(0, 3).map((r, i) => (
              <div key={i} style={{ background: C.sf, borderRadius: 14, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.04)", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 20 }}>{Ic.quote(C.a, 40)}</div>
                <Stars c={C.a} />
                <p style={{ fontFamily: ff, fontSize: 14, color: C.lt, lineHeight: 1.65, margin: "12px 0", fontStyle: "italic" }}>"{r.t}"</p>
                <p style={{ fontFamily: ff, fontSize: 13, fontWeight: 700, color: C.tx }}>— {r.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg,${C.a},${C.a}CC)`, color: "#FFF", padding: "52px 24px", textAlign: "center" }}>
        <h2 className="sec-h" style={{ fontFamily: ff, fontWeight: 800, margin: "0 0 10px" }}>{D.cta.h}</h2>
        <p style={{ fontFamily: ff, fontSize: 15, opacity: 0.9, margin: "0 0 24px" }}>{D.cta.sub}</p>
        <div className="ctas" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Btn href={`tel:${D.biz.phone}`} bg={C.p} color="#FFF" style={{ fontSize: 17, padding: "15px 36px" }}>{Ic.phone("#FFF")} {D.biz.phone}</Btn>
          <Btn href="#" onClick={tc} bg="rgba(255,255,255,0.2)" color="#FFF" style={{ border: "2px solid rgba(255,255,255,0.3)" }}>{Ic.mail("#FFF")} Contact Us</Btn>
        </div>
      </section>
    </>
  );
};

const ServicesPage = ({ go }) => {
  const tc = e => { e.preventDefault(); go("contact"); window.scrollTo(0, 0); };
  return (
    <>
      <section style={{ background: C.p, color: "#FFF", padding: "52px 24px", textAlign: "center" }}>
        <h1 className="hero-h" style={{ fontFamily: ff, fontWeight: 800, fontSize: 34 }}>Our Services</h1>
        <p style={{ fontFamily: ff, fontSize: 14, opacity: 0.7, marginTop: 6 }}>Complete HVAC solutions for {D.biz.area}</p>
      </section>
      <section style={{ padding: "60px 24px" }}>
        <div className="svc-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: 48, alignItems: "start" }}>
          <div>
            {D.services.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 20, padding: "28px 0", borderBottom: i < D.services.length - 1 ? `1px solid ${C.p}10` : "none", alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${C.a}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon(s.icon, C.a, 28)}</div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontFamily: ff, fontSize: 19, fontWeight: 700, color: C.tx, margin: "0 0 6px" }}>{s.t}</h2>
                  <p style={{ fontFamily: ff, fontSize: 14, color: C.lt, lineHeight: 1.65, margin: "0 0 14px" }}>{s.d}</p>
                  <div className="ctas" style={{ display: "flex", gap: 10 }}>
                    <Btn href={`tel:${D.biz.phone}`} bg={C.ct} color={C.ctT} style={{ padding: "9px 18px", fontSize: 13 }}>{Ic.phone(C.ctT, 14)} Call Now</Btn>
                    <Btn href="#" onClick={tc} bg="transparent" color={C.p} style={{ padding: "9px 18px", fontSize: 13, border: `1.5px solid ${C.p}` }}>Get Quote</Btn>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", alignSelf: "center" }}>
            <Img base={D.images.photo2} alt={`${D.biz.name} at work`} style={{ width: "100%", height: 580, objectFit: "cover", objectPosition: "center center", display: "block" }} />
          </div>
        </div>
      </section>
    </>
  );
};

const ContactPage = () => (
  <>
    <section style={{ background: C.p, color: "#FFF", padding: "52px 24px", textAlign: "center" }}>
      <h1 className="hero-h" style={{ fontFamily: ff, fontWeight: 800, fontSize: 34 }}>Contact Us</h1>
      <p style={{ fontFamily: ff, fontSize: 14, opacity: 0.7, marginTop: 6 }}>We respond within 30 minutes during business hours</p>
    </section>
    <section style={{ padding: "60px 24px" }}>
      <div className="contact-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        <div>
          <h2 style={{ fontFamily: ff, fontSize: 22, fontWeight: 700, color: C.tx, margin: "0 0 20px" }}>Request a Free Quote</h2>
          <ContactForm />
        </div>
        <InfoSidebar />
      </div>
    </section>
  </>
);

const ServiceAreaPage = ({ go }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const biz = SERVICE_AREA_DATA.business;
  const cities = SERVICE_AREA_DATA.cities;
  const tc = e => { e.preventDefault(); go("contact"); window.scrollTo(0, 0); };

  if (selectedCity) {
    const city = cities.find(c => c.slug === selectedCity);
    if (!city) { setSelectedCity(null); return null; }
    return (
      <>
        <section style={{ background: C.p, color: "#FFF", padding: "52px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <button onClick={() => setSelectedCity(null)} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#FFF", padding: "6px 14px", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 16, fontFamily: ff }}>
              ← All Service Areas
            </button>
            <h1 style={{ fontFamily: ff, fontSize: 34, fontWeight: 800 }}>HVAC Services in {city.name}, {city.state}</h1>
            <p style={{ fontFamily: ff, fontSize: 15, opacity: 0.75, marginTop: 6 }}>{biz.name} proudly serves {city.name} and surrounding areas</p>
          </div>
        </section>

        <section style={{ padding: "56px 24px" }}>
          <div className="contact-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div>
              <h2 style={{ fontFamily: ff, fontSize: 22, fontWeight: 700, color: C.tx, margin: "0 0 14px" }}>About Our Service in {city.name}</h2>
              <p style={{ fontFamily: ff, fontSize: 15, color: C.lt, lineHeight: 1.7, margin: "0 0 24px" }}>{city.description}</p>
              <div style={{ margin: "0 0 28px" }}>
                {city.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${C.a}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{Ic.check(C.a, 14)}</div>
                    <span style={{ fontFamily: ff, fontSize: 14, color: C.tx, fontWeight: 500 }}>{h}</span>
                  </div>
                ))}
              </div>
              <h3 style={{ fontFamily: ff, fontSize: 18, fontWeight: 700, color: C.tx, margin: "0 0 14px" }}>Services Available in {city.name}</h3>
              <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
                {D.services.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: `${C.p}08`, borderRadius: 8, fontSize: 13, fontFamily: ff, color: C.tx, fontWeight: 500 }}>
                    {icon(s.icon, C.a, 18)} {s.t}
                  </div>
                ))}
              </div>
              <div className="ctas" style={{ display: "flex", gap: 10 }}>
                <Btn href={`tel:${biz.phone}`} bg={C.ct} color={C.ctT}>{Ic.phone(C.ctT)} {city.localCta}</Btn>
                <Btn href="#" onClick={tc} bg="transparent" color={C.p} style={{ border: `1.5px solid ${C.p}` }}>{Ic.mail(C.p)} Get a Quote</Btn>
              </div>
            </div>

            <div>
              <div style={{ background: `linear-gradient(135deg,${C.p}12,${C.a}08)`, borderRadius: 16, height: 220, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, border: `1px dashed ${C.p}25` }}>
                <div style={{ textAlign: "center", color: C.lt }}>
                  {Ic.map(C.p, 32)}
                  <div style={{ fontFamily: ff, fontSize: 16, fontWeight: 600, color: C.tx, marginTop: 8 }}>{city.name}, {city.state} {city.zip}</div>
                  <div style={{ fontFamily: ff, fontSize: 12, marginTop: 4 }}>Service Area</div>
                </div>
              </div>
              <div style={{ background: C.p, borderRadius: 14, padding: 24, color: "#FFF" }}>
                <h3 style={{ fontFamily: ff, fontSize: 16, fontWeight: 700, margin: "0 0 14px" }}>Need HVAC help in {city.name}?</h3>
                <a href={`tel:${biz.phone}`} style={{ display: "flex", alignItems: "center", gap: 10, color: "#FFF", textDecoration: "none", fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
                  {Ic.phone("#FFF", 20)} {biz.phone}
                </a>
                <p style={{ fontSize: 13, opacity: 0.7, lineHeight: 1.5 }}>We dispatch to {city.name} within 60 minutes for emergency calls. Regular appointments available same-day.</p>
              </div>
              <div style={{ background: C.sf, borderRadius: 14, padding: 20, marginTop: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <Stars n={5} c={C.a} />
                  <span style={{ fontFamily: ff, fontSize: 14, fontWeight: 700, color: C.tx }}>{D.reviews.rating}/5</span>
                </div>
                <p style={{ fontFamily: ff, fontSize: 12, color: C.lt }}>Rated {D.reviews.rating} stars from {D.reviews.count} verified reviews across all service areas.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section style={{ background: C.p, color: "#FFF", padding: "56px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 className="hero-h" style={{ fontFamily: ff, fontWeight: 800, fontSize: 34, marginBottom: 8 }}>Areas We Service</h1>
          <p style={{ fontFamily: ff, fontSize: 15, opacity: 0.75, lineHeight: 1.6 }}>
            {biz.name} proudly serves {biz.area}. Select your city to learn more about our HVAC services in your area.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ background: `linear-gradient(135deg,${C.p}08,${C.a}06)`, borderRadius: 20, padding: 40, display: "flex", alignItems: "center", justifyContent: "center", border: `1px dashed ${C.p}20`, marginBottom: 20 }}>
            <div style={{ textAlign: "center" }}>
              {Ic.map(C.p, 40)}
              <h2 style={{ fontFamily: ff, fontSize: 20, fontWeight: 700, color: C.tx, margin: "12px 0 6px" }}>Our Service Area</h2>
              <p style={{ fontFamily: ff, fontSize: 14, color: C.lt }}>{biz.area}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 16 }}>
                {cities.map((city, i) => (
                  <span key={i} style={{ background: `${C.p}10`, padding: "4px 12px", borderRadius: 20, fontSize: 13, fontFamily: ff, color: C.p, fontWeight: 600 }}>{city.name}, {city.state}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="sec-h" style={{ fontFamily: ff, fontWeight: 800, textAlign: "center", color: C.tx, margin: "0 0 32px" }}>Select Your City</h2>
          <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {cities.map((city, i) => (
              <button key={i} onClick={() => { setSelectedCity(city.slug); window.scrollTo(0, 0); }}
                style={{ background: C.sf, border: `1px solid ${C.p}10`, borderRadius: 14, padding: 24, cursor: "pointer", textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", fontFamily: ff }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${C.a}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>{Ic.map(C.a, 18)}</div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: C.tx }}>{city.name}</div>
                    <div style={{ fontSize: 12, color: C.lt }}>{city.state} {city.zip}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: C.lt, lineHeight: 1.5, margin: "0 0 14px" }}>{city.description.slice(0, 110)}...</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: C.ct, fontSize: 13, fontWeight: 700 }}>
                  View services {Ic.arrow(C.ct, 14)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.p, color: "#FFF", padding: "48px 24px", textAlign: "center" }}>
        <h2 className="sec-h" style={{ fontFamily: ff, fontWeight: 800, margin: "0 0 8px" }}>Don't See Your City?</h2>
        <p style={{ fontFamily: ff, fontSize: 14, opacity: 0.75, margin: "0 0 20px" }}>We may still be able to help. Call us to check if we serve your area.</p>
        <Btn href={`tel:${biz.phone}`} bg={C.ct} color={C.ctT} style={{ fontSize: 17, padding: "15px 36px" }}>{Ic.phone(C.ctT)} {biz.phone}</Btn>
      </section>
    </>
  );
};

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const pages = { home: HomePage, services: ServicesPage, contact: ContactPage, "service-area": ServiceAreaPage };
  const Page = pages[page] || HomePage;
  return (
    <div style={{ fontFamily: ff, background: C.bg, color: C.tx, minHeight: "100vh", paddingBottom: 56 }}>
      <style>{CSS}</style>
      <Nav page={page} go={setPage} />
      <Page go={setPage} />
      <Foot go={setPage} />
      <MobCTA />
    </div>
  );
}
