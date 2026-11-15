import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowDown, ArrowUp, ChevronDown, ChevronRight, ExternalLink, Gift, Heart, MapPin, Menu, Music, Pause, Play, Send, Sparkles, Volume2, VolumeX, X } from 'lucide-react';
import { activities, config, type Activity } from './data/config';

const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } } };
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

function Section({ id, eyebrow, title, children, className = '' }: { id?: string; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: '-80px' });
  return <section id={id} ref={ref} className={`section ${className}`}><motion.div variants={reveal} initial="hidden" animate={visible ? 'visible' : 'hidden'}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children}</motion.div></section>;
}

function FloatingHearts() {
  return <div className="floating-hearts" aria-hidden="true">{['♡', '✦', '♡', '·', '♡'].map((heart, i) => <span key={i} style={{ '--i': i } as React.CSSProperties}>{heart}</span>)}</div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['memories', 'Memories'], ['adventures', 'Adventures'], ['notes', 'Love notes'], ['timeline', 'Our story']];
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <nav className="nav"><button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><span>our little</span> monthsary</button><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button><div className={`nav-links ${open ? 'open' : ''}`}>{links.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}<button className="nav-heart" onClick={() => go('surprise')}><Heart size={16} fill="currentColor" /> for you</button></div></nav>;
}

function Hero({ onOpen }: { onOpen: () => void }) {
  return <header className="hero"><div className="hero-scribble">a little love letter</div><div className="hero-copy"><p className="eyebrow">to {config.herName}</p><h1>To my<br /><em>favorite person.</em></h1><p className="hero-subtitle">Happy Monthsary, my love.</p><button className="envelope-button" onClick={onOpen}><span className="envelope"><span className="envelope-flap" /><span className="envelope-heart">♡</span></span><span>Open your letter <span className="button-arrow">♡</span></span></button><p className="scroll-hint"><ArrowDown size={15} /> scroll gently</p></div><div className="hero-stamp">♡<small>made for<br />you</small></div></header>;
}

function Letter({ open, onContinue }: { open: boolean; onContinue: () => void }) {
  return <AnimatePresence>{open && <motion.section className="letter-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><div className="paper"><div className="paper-tape" /><p className="letter-date">{config.monthsaryDate} · for {config.herName}</p><div className="letter-copy">{config.letter.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><p className="signature">always yours,<br /><em>{config.yourName}</em> ♡</p><button className="primary-button" onClick={onContinue}>Let's make some memories <ChevronRight size={17} /></button></div></motion.section>}</AnimatePresence>;
}

function Memories() {
  const [selected, setSelected] = useState<number | null>(null);
  return <Section id="memories" eyebrow="01 · our little memories" title="The moments I want to keep."><p className="section-intro">Every ordinary day becomes a favorite when it has a little bit of you in it.</p><div className="gallery">{config.photos.map((photo, i) => <motion.button className="polaroid" style={{ '--rotate': photo.rotate } as React.CSSProperties} whileHover={{ y: -8, rotate: 0 }} whileTap={{ scale: .98 }} key={`${photo.src}-${i}`} onClick={() => setSelected(i)}><img src={assetUrl(photo.src)} alt={photo.alt} loading="lazy" onError={(e) => { e.currentTarget.src = assetUrl('/images/placeholder-memory.svg'); }} /><span>{photo.caption}</span></motion.button>)}</div><AnimatePresence>{selected !== null && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><button className="close-button" onClick={() => setSelected(null)} aria-label="Close photo"><X /></button><motion.img initial={{ scale: .9 }} animate={{ scale: 1 }} src={assetUrl(config.photos[selected].src)} alt={config.photos[selected].alt} onClick={(e) => e.stopPropagation()} /></motion.div>}</AnimatePresence></Section>;
}

function ActivityModal({ activity, onClose, onSaved }: { activity: Activity; onClose: () => void; onSaved: () => void }) {
  const [note, setNote] = useState('');
  const save = () => { localStorage.setItem('monthsary-selected-date', JSON.stringify({ activityId: activity.id, activityName: activity.name, note, savedAt: new Date().toISOString() })); onSaved(); };
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="date-modal" initial={{ y: 20, scale: .97 }} animate={{ y: 0, scale: 1 }} role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="close-button" onClick={onClose} aria-label="Close"><X /></button><span className="modal-kicker">a tiny plan for us</span><h3 id="modal-title">We're choosing<br /><em>{activity.name}</em> ♡</h3><p>Tell me anything you want me to remember for our little date.</p><textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="A note for our adventure..." rows={3} /><button className="primary-button full" onClick={save}>Save our plan <Heart size={16} fill="currentColor" /></button><small>Please contact the establishment before visiting to confirm details and comfort.</small></motion.div></motion.div>;
}

function Activities() {
  const [detail, setDetail] = useState<string | null>(null);
  const [chosen, setChosen] = useState<Activity | null>(null);
  const [saved, setSaved] = useState(false);
  return <Section id="adventures" eyebrow="02 · choose our adventure" title="What should we create together today?"><p className="section-intro">I planned four little adventures for us. Pick the one that makes you smile.</p><div className="activity-grid">{activities.map((activity) => <article className={`activity-card ${detail === activity.id ? 'expanded' : ''}`} key={activity.id}><img src={assetUrl(activity.image)} alt="" loading="lazy" /><div className="activity-body"><span className="activity-number">0{activities.indexOf(activity) + 1}</span><h3>{activity.name}</h3><p className="concept">{activity.concept}</p><p>{activity.description}</p><div className="activity-meta"><span><MapPin size={14} />{activity.location}</span></div><AnimatePresence>{detail === activity.id && <motion.div className="details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><strong>We can...</strong><ul>{activity.activities.map((item) => <li key={item}>{item}</li>)}</ul>{activity.bookingUrl && <a href={activity.bookingUrl} target="_blank" rel="noreferrer">Visit website <ExternalLink size={13} /></a>}</motion.div>}</AnimatePresence><div className="card-actions"><button className="text-button" onClick={() => setDetail(detail === activity.id ? null : activity.id)}>{detail === activity.id ? 'Hide details' : 'View details'} <ChevronDown size={15} /></button><button className="select-button" onClick={() => { setChosen(activity); setSaved(false); }}>Choose this date <ChevronRight size={15} /></button></div></div></article>)}</div><div className="comfort-note"><Heart size={16} fill="currentColor" /> Please choose what feels comfortable for your leg injury. We can take it slow, rest anytime, and change plans without pressure.</div><AnimatePresence>{chosen && !saved && <ActivityModal activity={chosen} onClose={() => setChosen(null)} onSaved={() => setSaved(true)} />}{chosen && saved && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><motion.div className="date-modal saved-modal" initial={{ scale: .8 }} animate={{ scale: 1 }}><Sparkles className="sparkle-icon" /><h3>It's a date, <em>love.</em></h3><p>Our little plan is saved. Whatever we do, my favorite part will be being beside you.</p><button className="primary-button full" onClick={() => setChosen(null)}>I can't wait ♡</button></motion.div></motion.div>}</AnimatePresence></Section>;
}

function LoveNotes() {
  const [open, setOpen] = useState<number | null>(null);
  return <Section id="notes" eyebrow="03 · little love notes" title="Little things I want you to remember."><p className="section-intro">Open one whenever you need a small reminder of how loved you are.</p><div className="notes-grid">{config.loveNotes.map((note, i) => <motion.button className={`note-card ${open === i ? 'opened' : ''}`} key={note} onClick={() => setOpen(open === i ? null : i)} whileHover={{ rotate: i % 2 ? 2 : -2 }}><span className="note-seal">{open === i ? '♡' : '✦'}</span><span>{open === i ? note : 'open me'}</span><small>{open === i ? `for ${config.herName}` : 'a tiny thought'}</small></motion.button>)}</div></Section>;
}

function Timeline() {
  return <Section id="timeline" eyebrow="04 · our monthsary timeline" title="A story still being written."><p className="section-intro">Fill in the little details that make this timeline yours.</p><div className="timeline">{config.timeline.map((item, i) => <div className="timeline-item" key={item.title}><div className="timeline-dot">{i === config.timeline.length - 1 ? <Heart size={13} fill="currentColor" /> : <span>0{i + 1}</span>}</div><div><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><p>{item.detail}</p></div></div>)}</div></Section>;
}

function Surprise() {
  const [open, setOpen] = useState(false);
  return <section id="surprise" className={`surprise-section ${open ? 'is-open' : ''}`}><div className="surprise-inner"><p className="eyebrow">05 · a little surprise</p>{!open ? <><button className="gift-button" onClick={() => setOpen(true)} aria-label="Open surprise gift"><Gift size={42} /></button><h2>There might be<br /><em>one more thing...</em></h2><p>For when you get to the end ♡</p></> : <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}><div className="big-heart">♡</div><h2>One more thing...</h2><p className="final-message">Of all the places we could go and all the things we could do, my favorite place will always be wherever I get to be with you.<br /><br />Thank you for being part of my life.<br /><br />I love you. ♡</p><p className="signature">forever choosing you,<br /><em>{config.yourName}</em></p></motion.div>}</div></section>;
}

function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const toggle = async () => { if (!audio.current) return; if (playing) audio.current.pause(); else await audio.current.play().catch(() => undefined); setPlaying(!playing); };
  return <div className="music-player"><audio ref={audio} src={config.music.url || assetUrl(`/music/${config.music.filename}`)} loop onEnded={() => setPlaying(false)} /><Music size={15} /><span>{config.music.label}</span><button onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}>{playing ? <Pause size={14} /> : <Play size={14} />}</button><button onClick={() => { setMuted(!muted); if (audio.current) audio.current.muted = !muted; }} aria-label={muted ? 'Unmute music' : 'Mute music'}>{muted ? <VolumeX size={14} /> : <Volume2 size={14} />}</button></div>;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [letterOpen, setLetterOpen] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 700); return () => window.clearTimeout(timer); }, []);
  return <>{loading && <motion.div className="loading-screen" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: .45, duration: .3 }} onAnimationComplete={() => setLoading(false)}><Heart fill="currentColor" /><span>for {config.herName}</span></motion.div>}<Navbar /><FloatingHearts /><main><Hero onOpen={() => { setLetterOpen(true); window.setTimeout(() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' }), 100); }} /><div id="letter"><Letter open={letterOpen} onContinue={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })} /></div><Memories /><Activities /><LoveNotes /><Timeline /><Surprise /></main><MusicPlayer /><button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={17} /></button><footer>Made with love, just for you. ♡</footer></>;
}
