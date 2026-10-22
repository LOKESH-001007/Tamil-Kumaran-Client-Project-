import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { PROJECTS, CO, waLink } from '../data'
import { PageHead, Reveal, ProjectGallery } from '../components/ui'

export default function Projects() {
  const { t, pick } = useLang()
  return (
    <>
      <PageHead title={t('projects_title')} sub={`${t('badge_dtcp')} · ${t('badge_loan')}`} img="land.jpg" />
      <section className="sec">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id}>
            <article className={`pj ${i % 2 ? 'rev' : ''}`}>
              <div className="pj-img" style={{ backgroundImage: `url(${p.img}), linear-gradient(135deg,#0b4f35,#c9a227)` }}>
                <span className={`tag ${p.status}`}>{t(p.status)}</span>
                {p.price && (
                  <div className="pj-price">
                    <small>{t('special_price')}</small>
                    <b>{pick(p.price)}</b>
                  </div>
                )}
              </div>
              <div className="pj-body">
                <span className="chip dk">{pick(p.type)}</span>
                <h2>{pick(p.title)}</h2>
                <p className="loc">📍 {pick(p.place)}</p>
                <p className="pitch">{pick(p.pitch)}</p>
                <ul className="feat">
                  {p.features.map((f, k) => (
                    <li key={k}><span>{f.icon}</span>{pick(f)}</li>
                  ))}
                </ul>
                <ProjectGallery p={p} />
                <div className="pc-btns">
                  <Link className="btn red" to={`/contact?project=${encodeURIComponent(p.name)}`}>{t('site_visit')}</Link>
                  <a className="btn wa-b" href={waLink(`Hello, I am interested in ${p.name}. I would like to book a site visit.`)} target="_blank" rel="noreferrer">WhatsApp</a>
                  <a className="btn ghost-g" href={`tel:+91${CO.phone}`}>📞 {CO.phone}</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}