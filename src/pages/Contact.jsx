import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { CO, PROJECTS, waLink } from '../data'
import { PageHead, Reveal } from '../components/ui'

export default function Contact() {
  const { t } = useLang()
  const [sp] = useSearchParams()
  const [tab, setTab] = useState(sp.get('tab') === 'sell' ? 'sell' : 'enq')
  const [ok, setOk] = useState(false)

  const submit = (kind) => (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    const lines =
      kind === 'enq'
        ? ['*New Enquiry - Tamil Kumaran*', `Name: ${d.name}`, `Phone: ${d.phone}`, `Interested in: ${d.project || 'General Enquiry'}`, `Message: ${d.message || '-'}`]
        : ['*Sell Your Land - Tamil Kumaran*', `Name: ${d.name}`, `Phone: ${d.phone}`, `Location: ${d.place}`, `District: ${d.district}`, `Area: ${d.area} ${d.unit}`, `Land type: ${d.ltype}`, `Expected price: ${d.price || '-'}`, `Details: ${d.message || '-'}`]
    window.open(waLink(lines.join('\n')), '_blank')
    setOk(true)
    e.target.reset()
    setTimeout(() => setOk(false), 4000)
  }

  const Common = () => (
    <div className="row">
      <div><label>{t('f_name')}</label><input name="name" required /></div>
      <div><label>{t('f_phone')}</label><input name="phone" required pattern="[0-9]{10}" inputMode="numeric" maxLength={10} /></div>
    </div>
  )

  return (
    <>
      <PageHead title={t('contact_title')} sub={`${CO.phone} · ${CO.address}`} img="house.jpg" />
      <section className="sec">
        <div className="cgrid">
          <Reveal>
            <div className="card">
              <div className="tabs">
                <button className={tab === 'enq' ? 'on' : ''} onClick={() => setTab('enq')}>{t('tab_enq')}</button>
                <button className={tab === 'sell' ? 'on' : ''} onClick={() => setTab('sell')}>{t('tab_sell')}</button>
              </div>

              {tab === 'enq' ? (
                <form className="form" onSubmit={submit('enq')} key="enq">
                  <Common />
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
              ) : (
                <form className="form" onSubmit={submit('sell')} key="sell">
                  <Common />
                  <div className="row">
                    <div><label>{t('f_place')}</label><input name="place" required /></div>
                    <div>
                      <label>{t('f_district')}</label>
                      <select name="district">
                        <option value="Salem">{t('Salem')}</option>
                        <option value="Namakkal">{t('Namakkal')}</option>
                        <option value="Other">{t('Other')}</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div><label>{t('f_area')}</label><input name="area" type="number" min="0" step="any" required /></div>
                    <div>
                      <label>{t('f_unit')}</label>
                      <select name="unit">
                        <option value="Cent">{t('Cent')}</option>
                        <option value="Acre">{t('Acre')}</option>
                        <option value="Sq.ft">{t('Sqft')}</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <label>{t('f_ltype')}</label>
                      <select name="ltype">
                        <option value="Residential">{t('Residential')}</option>
                        <option value="Agricultural">{t('Agricultural')}</option>
                        <option value="Commercial">{t('Commercial')}</option>
                      </select>
                    </div>
                    <div><label>{t('f_price')}</label><input name="price" placeholder="₹" /></div>
                  </div>
                  <div><label>{t('f_details')}</label><textarea name="message" rows="3" /></div>
                  <p className="muted" style={{ fontSize: '.82rem' }}>{t('sell_note')}</p>
                  <button className="btn red" type="submit">{t('f_send')}</button>
                </form>
              )}
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
              <iframe title="map" loading="lazy" src="https://www.google.com/maps?q=Edappadi%2C%20Salem%20637101&output=embed" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}