import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { PROJECTS, STATS, LAUNCH_PROJECT, bg } from '../data'
import { Reveal, Counter, Countdown, ProjectCard, CtaBand } from '../components/ui'
import Seo from '../components/Seo'

export default function Home() {
  const { t, pick } = useLang()
  const up = PROJECTS.find((p) => p.name === LAUNCH_PROJECT) || PROJECTS[0]
  const why = [
    ['🤝', 'trust', 'trust_d'],
    ['🔍', 'transp', 'transp_d'],
    ['💎', 'value', 'value_d'],
  ]
  const tiles = [
    ['land.jpg', 'tile_plots'],
    ['villa.jpg', 'tile_villas'],
    ['house.jpg', 'tile_gated'],
  ]

  return (
    <>
      <Seo
        title="DTCP Approved Plots in Salem & Namakkal | Tamil Kumaran"
        description="Tamil Kumaran Real Estate & Properties: DTCP & RERA approved villa plots in Salem, Edappadi and Namakkal. Up to 70% bank loan. Book your site visit today."
        path="/"
      />

      <section className="hero" style={{ backgroundImage: bg('hero.jpg', 0.92, 0.6) }}>
        <div className="hero-in">
          <div>
            <Reveal><span className="chip">{t('badge_dtcp')}</span></Reveal>
            <Reveal delay={100}><h1>{t('hero_title')}</h1></Reveal>
            <Reveal delay={200}><p>{t('hero_sub')}</p></Reveal>
            <Reveal delay={300} className="btns">
              <Link className="btn gold" to="/projects">{t('view_projects')}</Link>
              <Link className="btn ghost" to="/contact?tab=sell">{t('sell_land')}</Link>
            </Reveal>
            <Reveal delay={400} className="badges">
              <span>✔ {t('badge_loan')}</span>
              <span>✔ {t('badge_area')}</span>
              <span>✔ {t('trust')} · {t('transp')} · {t('value')}</span>
            </Reveal>
          </div>

          <Reveal delay={300} className="hero-vis">
            <div className="hv-main" style={{ backgroundImage: bg('villa.jpg', 0, 0) }} />
            <div className="hv-sub" style={{ backgroundImage: bg('land.jpg', 0, 0) }} />
            <div className="hv-b1">✔ {t('badge_dtcp')}</div>
            <div className="hv-b2">🏦 {t('badge_loan')}</div>
          </Reveal>
        </div>
      </section>

      <section className="band img-band" style={{ backgroundImage: bg('villa.jpg', 0.92, 0.8) }}>
        <div className="sec center">
          <Reveal>
            <span className="chip">{t('launch_title')}</span>
            <h2 className="launch-h">{pick(up.title)}</h2>
            <p className="muted-w">{t('launch_sub')}</p>
          </Reveal>
          <Reveal delay={150}><Countdown /></Reveal>
          <Reveal delay={250}>
            <Link className="btn gold" to={`/contact?project=${encodeURIComponent(up.name)}`}>
              {t('site_visit')}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.k} delay={i * 120}>
              <div className="stat">
                <b><Counter to={s.n} suffix={s.s} /></b>
                <span>{t(s.k)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 10 }}>
        <Reveal><div className="title"><h2>{t('explore_t')}</h2></div></Reveal>
        <div className="tiles">
          {tiles.map(([img, k], i) => (
            <Reveal key={k} delay={i * 120}>
              <Link className="tile" to="/projects">
                <div className="tile-img" style={{ backgroundImage: bg(img, 0, 0) }} />
                <div className="tile-t">
                  <h3>{t(k)}</h3>
                  <span>{t('tile_more')}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 10 }}>
        <Reveal><div className="title"><h2>{t('why_title')}</h2></div></Reveal>
        <div className="grid">
          {why.map(([ic, k, d], i) => (
            <Reveal key={k} delay={i * 120}>
              <div className="card center">
                <div className="ico">{ic}</div>
                <h3>{t(k)}</h3>
                <p>{t(d)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 10 }}>
        <Reveal><div className="title"><h2>{t('featured')}</h2></div></Reveal>
        <div className="grid">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 120}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
        <div className="center" style={{ marginTop: 36 }}>
          <Link className="btn green" to="/projects">{t('view_all')}</Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
