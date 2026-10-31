import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { CO, PROJECTS, SHEET_URL, waLink } from '../data'
import { PageHead, Reveal } from '../components/ui'
import Seo from '../components/Seo'

// save the lead to Google Sheet in the background (does not block WhatsApp)
function saveLead(kind, data) {
  if (!SHEET_URL.includes('script.google.com')) return
  fetch(SHEET_URL, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    body: new URLSearchParams({ kind, ...data }),
  }).catch(() => {})
}

export default function Contact() {
  const { t } = useLang()
  const [sp] = useSearchParams()
  const [ok, setOk] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    saveLead('enq', d)
    const lines = [
      '*New Enquiry - Tamil Kumaran*',
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Interested in: ${d.project || 'General Enquiry'}`,
      `Message: ${d.message || '-'}`,
    ]
    window.open(waLink(lines.join('\n')), '_blank')
    setOk(true)
    e.target.reset()
    setTimeout(() => setOk(false), 4000)
  }

  return (
    <>
      <Seo
        title="Contact Us – Book a Site Visit in Salem | Tamil Kumaran"
        description="Call 7604841996 or WhatsApp us to book a site visit for DTCP & RERA approved plots in Salem. Office: Thiruvagoundanoor Bypass, Salem."
        path="/contact"
      />
      <PageHead title={t('contact_title')} sub={`${CO.phone} · ${CO.address}`} img="house.jpg" />
      <section className="sec">
        <div className="cgrid">
          <Reveal>
            <div className="card">
              <h3 style={{ marginBottom: 18 }}>{t('tab_enq')}</h3>
              <form className="form" onSubmit={submit}>
                <div className="row">
                  <div><label>{t('f_name')}</label><input name="name" required /></div>
                  <div><label>{t('f_phone')}</label><input name="phone" required pattern="[0-9]{10}" inputMode="numeric" maxLength={10} /></div>
                  {/* hidden spam trap: real visitors never fill this */}
                  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
                </div>
                <div>
                  <label>{t('f_interest')}</label>
                  <select name="project" defaultValue={sp.get('project') || ''}>
                    <option value="">{t('f_general')}</option>
                    {PROJECTS.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
                <div><label>{t('f_msg')}</label><textarea name="message" rows="4" /></div>
                <button className="btn red" type="submit">{t('f_send')}</button>
              </form>
              {ok && <p className="okmsg">✔ {t('ok')}</p>}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card info">
              <h3>{t('address_t')}</h3>
              <p>📍 {CO.address}</p>
              <p>{t('badge_area')}</p>
              <p style={{ margin: '14px 0' }}>
                <a href={`tel:+91${CO.phone}`}>📞 {CO.phone}</a><br />
                <a href={waLink('Hello Tamil Kumaran Real Estate')} target="_blank" rel="noreferrer">💬 WhatsApp: {CO.phone}</a><br />
                <a href={CO.insta} target="_blank" rel="noreferrer">📷 {CO.instaId}</a><br />
                <a href={CO.fb} target="_blank" rel="noreferrer">👍 {CO.fbName}</a>
              </p>
              <iframe
                title="map"
                loading="lazy"
                src="https://www.google.com/maps?q=Thiruvagoundanoor%20Bypass%2C%20Salem&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
