import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { PageHead, Reveal } from '../components/ui'

const f = (n) => '₹ ' + Math.round(n).toLocaleString('en-IN')

function Slider({ label, value, set, min, max, step = 1 }) {
  return (
    <div className="sl">
      <div className="sl-h">
        <label>{label}</label>
        <input type="number" value={value} min={min} max={max} onChange={(e) => set(+e.target.value || 0)} />
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(+e.target.value)} />
    </div>
  )
}

export default function EMI() {
  const { t } = useLang()
  const [price, setPrice] = useState(1000000)
  const [pct, setPct] = useState(70)
  const [rate, setRate] = useState(9)
  const [years, setYears] = useState(15)

  const loan = (price * Math.min(pct, 70)) / 100
  const n = Math.max(years, 1) * 12
  const r = rate / 12 / 100
  const emi = r ? (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loan / n
  const total = emi * n
  const interest = total - loan
  const share = total ? (loan / total) * 100 : 0

  return (
    <>
      <PageHead title={t('emi_title')} sub={t('badge_loan')} img="keys.jpg" />
      <section className="sec">
        <div className="emi">
          <Reveal>
            <div className="card">
              <Slider label={t('e_price')} value={price} set={setPrice} min={100000} max={20000000} step={50000} />
              <Slider label={t('e_pct')} value={Math.min(pct, 70)} set={setPct} min={10} max={70} />
              <Slider label={t('e_rate')} value={rate} set={setRate} min={6} max={18} step={0.1} />
              <Slider label={t('e_years')} value={years} set={setYears} min={1} max={30} />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="card center">
              <div className="donut" style={{ background: `conic-gradient(var(--gold) 0 ${share}%, var(--red) ${share}% 100%)` }} />
              <div className="legend">
                <span><i style={{ background: 'var(--gold)' }} />{t('e_loan')}</span>
                <span><i style={{ background: 'var(--red)' }} />{t('e_int')}</span>
              </div>
              <div className="emi-big">
                <small>{t('e_emi')}</small>
                <b>{f(emi)}</b>
              </div>
              <ul className="res">
                <li><span>{t('e_loan')}</span><b>{f(loan)}</b></li>
                <li><span>{t('e_down')}</span><b>{f(price - loan)}</b></li>
                <li><span>{t('e_int')}</span><b>{f(interest)}</b></li>
                <li><span>{t('e_total')}</span><b>{f(total)}</b></li>
              </ul>
              <p className="muted" style={{ fontSize: '.8rem', margin: '14px 0' }}>{t('e_note')}</p>
              <Link className="btn red" to="/contact">{t('e_help')}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}