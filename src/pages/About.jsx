import { useLang } from '../i18n'
import { bg } from '../data'
import { PageHead, Reveal, CtaBand } from '../components/ui'
import Seo from '../components/Seo'

export default function About() {
  const { t } = useLang()
  return (
    <>
      <Seo
        title="About Us | Tamil Kumaran Real Estate & Properties, Idappadi"
        description="Tamil Kumaran helps families in Salem buy approved plots with trust, transparency and value. Visit our office at Poolampatti Road, Idappadi."
        path="/about"
      />
      <PageHead title={t('about_title')} sub={`${t('trust')} · ${t('transp')} · ${t('value')}`} img="house.jpg" />

      <section className="sec">
        <div className="two">
          <Reveal>
            <h2 className="h2">Tamil Kumaran</h2>
            <p className="lead">{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
            <div className="chips">
              <span className="chip dk">{t('badge_dtcp')}</span>
              <span className="chip dk">{t('badge_loan')}</span>
              <span className="chip dk">{t('badge_area')}</span>
            </div>
          </Reveal>
          <Reveal delay={150} className="about-vis">
            <div className="av-main" style={{ backgroundImage: bg('house.jpg', 0, 0) }} />
            <div className="av-sub" style={{ backgroundImage: bg('keys.jpg', 0, 0) }} />
            <div className="hv-b2 av-b">✔ {t('badge_dtcp')}</div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="grid">
          <Reveal>
            <div className="card">
              <div className="ico">🎯</div><h3>{t('mission_t')}</h3><p>{t('mission_d')}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card">
              <div className="ico">🌟</div><h3>{t('vision_t')}</h3><p>{t('vision_d')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <Reveal><div className="title"><h2>{t('process_t')}</h2></div></Reveal>
        <div className="grid">
          {['s1', 's2', 's3', 's4'].map((s, i) => (
            <Reveal key={s} delay={i * 120}>
              <div className="card center step">
                <div className="num">{i + 1}</div>
                <h3>{t(s)}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
