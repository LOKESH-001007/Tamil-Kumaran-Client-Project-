import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../i18n'
import { CO, waLink } from '../data'

// developer credit (shown at the bottom of the footer)
const DEV = {
  name: 'Lokesh',
  wa: 'https://wa.me/919345894255?text=' + encodeURIComponent('Hi Lokesh, I saw your work on the Tamil Kumaran website.'),
  insta: 'https://instagram.com/codeto_client',
}

const WA_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'

function WaIcon({ size = 30, fill = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} aria-hidden="true">
      <path d={WA_PATH} />
    </svg>
  )
}

function IgIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const links = [
  ['/', 'nav_home'],
  ['/about', 'nav_about'],
  ['/projects', 'nav_projects'],
  ['/emi', 'nav_emi'],
  ['/contact', 'nav_contact'],
]

export function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    const f = () => setSc(window.scrollY > 30)
    f()
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className={`nav ${sc ? 'sc' : ''}`}>
      <Link to="/" className="logo">
        <span className="mono">TK</span>
        <span>
          <b>Tamil Kumaran</b>
          <small>{t('trust')} · {t('transp')} · {t('value')}</small>
        </span>
      </Link>
      <nav className={open ? 'open' : ''}>
        {links.map(([p, k]) => (
          <NavLink key={p} to={p} end={p === '/'}>{t(k)}</NavLink>
        ))}
      </nav>
      <div className="nav-r">
        <button className="lang" onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}>
          {lang === 'en' ? 'தமிழ்' : 'EN'}
        </button>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu"><i /><i /><i /></button>
      </div>
    </header>
  )
}

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="foot">
      <div className="foot-g">
        <div>
          <h4>{CO.full}</h4>
          <p>{t('trust')} · {t('transp')} · {t('value')}</p>
          <p style={{ marginTop: 10 }}>{t('badge_dtcp')} · {t('badge_loan')}</p>
          <p lang="ta" style={{ marginTop: 10 }}>சேலம் DTCP, RERA அங்கீகரிக்கப்பட்ட வீட்டு மனைகள் – தமிழ் குமரன் ரியல் எஸ்டேட்</p>
        </div>
        <div>
          <h4>{t('quick')}</h4>
          {links.map(([p, k]) => <Link key={p} to={p}>{t(k)}</Link>)}
        </div>
        <div>
          <h4>{t('reach')}</h4>
          <p>📍 {CO.address}</p>
          <a href={`tel:+91${CO.phone}`}>📞 {CO.phone}</a>
          <a href={waLink('Hello Tamil Kumaran Real Estate')} target="_blank" rel="noreferrer">💬 WhatsApp</a>
          <a href={CO.insta} target="_blank" rel="noreferrer">📷 {CO.instaId}</a>
          <a href={CO.fb} target="_blank" rel="noreferrer">👍 {CO.fbName}</a>
        </div>
      </div>

      <div className="copy">
        <div className="copy-row">
          <span>© {new Date().getFullYear()} {CO.full}. {t('rights')}</span>
          <span>Thiruvagoundanoor Bypass, Salem, Tamil Nadu</span>
        </div>
        <div className="dev">
          <span>Developed by <b>{DEV.name}</b></span>
          <i>•</i>
          <a href={DEV.wa} target="_blank" rel="noreferrer"><WaIcon size={18} />WhatsApp</a>
          <i>•</i>
          <a href={DEV.insta} target="_blank" rel="noreferrer"><IgIcon size={18} />Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa" href={waLink('Hello Tamil Kumaran Real Estate, I would like to know more about your plots.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <WaIcon size={30} fill="#fff" />
    </a>
  )
}
