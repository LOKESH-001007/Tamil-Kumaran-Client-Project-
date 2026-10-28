import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { LAUNCH_DATE, waLink, bg } from '../data'

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); o.disconnect() }
    }, { threshold: 0.12 })
    o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${show ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      o.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / 1600, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    o.observe(ref.current)
    return () => o.disconnect()
  }, [to])
  return <span ref={ref}>{n}{suffix}</span>
}

const parts = (target) => {
  const d = Math.max(0, new Date(target) - Date.now())
  return [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60]
}

export function Countdown() {
  const { t } = useLang()
  const [v, setV] = useState(parts(LAUNCH_DATE))
  useEffect(() => {
    const i = setInterval(() => setV(parts(LAUNCH_DATE)), 1000)
    return () => clearInterval(i)
  }, [])
  const labels = ['days', 'hours', 'mins', 'secs']
  return (
    <div className="cd">
      {v.map((x, i) => (
        <div className="cd-box" key={i}>
          <div className="cd-num">
            <span key={x} className="flip">{String(x).padStart(2, '0')}</span>
          </div>
          <small>{t(labels[i])}</small>
        </div>
      ))}
    </div>
  )
}

export function PageHead({ title, sub, img = 'hero.jpg' }) {
  return (
    <div className="ph" style={{ backgroundImage: bg(img, 0.88, 0.62) }}>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  )
}

export function ProjectCard({ p }) {
  const { t, pick } = useLang()
  return (
    <div className="card pc">
      <div className="pc-w">
        <div className="pc-img" style={{ backgroundImage: `url(${p.img}), linear-gradient(135deg,#0b4f35,#c9a227)` }} />
        <span className={`tag ${p.status}`}>{t(p.status)}</span>
      </div>
      <div className="pc-b">
        <h3>{pick(p.title)}</h3>
        <p>📍 {pick(p.place)}</p>
        <ul className="mini">
          {p.features.slice(0, 3).map((f, i) => <li key={i}>{f.icon} {pick(f)}</li>)}
        </ul>
        {p.price && <div className="price big">{pick(p.price)}</div>}
        <div className="pc-btns">
          <Link className="btn green sm" to="/projects">{t('view_details')}</Link>
          <a className="btn wa-b sm" href={waLink(`Hello, I am interested in ${p.name}.`)} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </div>
  )
}

export function CtaBand() {
  const { t } = useLang()
  return (
    <section className="band img-band" style={{ backgroundImage: bg('land.jpg', 0.92, 0.7) }}>
      <div className="sec center">
        <Reveal>
          <h2 className="cta-h">{t('cta_title')}</h2>
          <p className="muted-w">{t('cta_sub')}</p>
          <Link className="btn gold" to="/contact?tab=sell">{t('sell_land')}</Link>
        </Reveal>
      </div>
    </section>
  )
}

export function Lightbox({ items, start, onClose }) {
  const { t } = useLang()
  const [i, setI] = useState(start)
  const [zoom, setZoom] = useState(false)
  const n = items.length
  const go = (d) => { setZoom(false); setI((i + d + n) % n) }

  useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', k)
      document.body.style.overflow = ''
    }
  }, [i])

  const stop = (e) => e.stopPropagation()
  const cur = items[i]
  const isFile = cur.kind === 'video'
  const isYt = cur.kind === 'youtube'
  const isVid = isFile || isYt

  return createPortal(
    <div className="lb" onClick={onClose}>
      <button className="lb-x" onClick={onClose} aria-label="Close">✕</button>
      {n > 1 && <button className="lb-n prev" onClick={(e) => { stop(e); go(-1) }} aria-label="Previous">‹</button>}
      <div className={`lb-box ${isVid ? 'vid' : ''}`} onClick={stop}>
        {isYt ? (
          <iframe
            key={cur.src}
            className="lb-frame"
            src={`https://www.youtube-nocookie.com/embed/${cur.src}?autoplay=1&rel=0`}
            title={cur.label}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        ) : isFile ? (
          <video key={cur.src} className="lb-video" src={cur.src} controls autoPlay playsInline />
        ) : (
          <img src={cur.src} alt={cur.label} className={zoom ? 'z' : ''} onClick={() => setZoom(!zoom)} />
        )}
      </div>
      {n > 1 && <button className="lb-n next" onClick={(e) => { stop(e); go(1) }} aria-label="Next">›</button>}
      <div className="lb-c">
        {cur.label} · {i + 1}/{n}{!isVid && ` · ${t('tap_zoom')}`}
        {!isYt && <a href={cur.src} target="_blank" rel="noreferrer">↗</a>}
      </div>
    </div>,
    document.body
  )
}

export function ProjectGallery({ p }) {
  const { t } = useLang()
  const [open, setOpen] = useState(null)
  const items = [
    ...(p.posters || []).map((src) => ({ src, label: t('poster'), kind: 'poster' })),
    ...(p.photos || []).map((src) => ({ src, label: t('photo'), kind: 'photo' })),
    ...(p.layouts || []).map((src) => ({ src, label: t('layout'), kind: 'layout' })),
    ...(p.videos || []).map((src) => ({ src, label: t('video'), kind: 'video', thumb: p.img })),
    ...(p.youtube || []).map((src) => ({ src, label: t('video'), kind: 'youtube', thumb: `https://img.youtube.com/vi/${src}/hqdefault.jpg` })),
  ]
  if (!items.length) return null
  return (
    <div className="gal">
      <div className="gal-h">{t('gallery_t')}</div>
      <div className="thumbs">
        {items.map((it, i) => {
          const isVid = it.kind === 'video' || it.kind === 'youtube'
          return (
            <button key={it.kind + it.src} className="th" onClick={() => setOpen(i)}>
              <img src={isVid ? it.thumb : it.src} alt={`${p.name} – ${it.label}`} loading="lazy" width="78" height="98" />
              {isVid && <em className="play">▶</em>}
              {(it.kind === 'layout' || isVid) && <span>{it.label}</span>}
            </button>
          )
        })}
      </div>
      {open !== null && <Lightbox items={items} start={open} onClose={() => setOpen(null)} />}
    </div>
  )
}

export function ProjectGallery({ p }) {
  const { t } = useLang()
  const [open, setOpen] = useState(null)
  const items = [
    ...(p.posters || []).map((src) => ({ src, label: t('poster'), kind: 'poster' })),
    ...(p.layouts || []).map((src) => ({ src, label: t('layout'), kind: 'layout' })),
  ]
  if (!items.length) return null
  return (
    <div className="gal">
      <div className="gal-h">{t('gallery_t')}</div>
      <div className="thumbs">
        {items.map((it, i) => (
          <button key={it.src} className="th" onClick={() => setOpen(i)}>
            <img src={it.src} alt="" loading="lazy" />
            {it.kind === 'layout' && <span>{t('layout')}</span>}
          </button>
        ))}
      </div>
      {open !== null && <Lightbox items={items} start={open} onClose={() => setOpen(null)} />}
    </div>
  )
}
