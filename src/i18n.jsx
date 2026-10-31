import { createContext, useContext, useEffect, useState } from 'react'

// key: [English, Tamil]
const D = {
  nav_home: ['Home', 'முகப்பு'],
  nav_about: ['About', 'எங்களைப் பற்றி'],
  nav_projects: ['Projects', 'திட்டங்கள்'],
  nav_emi: ['EMI Calculator', 'EMI கணிப்பான்'],
  nav_contact: ['Contact', 'தொடர்பு'],

  trust: ['Trust', 'நம்பிக்கை'],
  transp: ['Transparency', 'வெளிப்படைத்தன்மை'],
  value: ['Value', 'மதிப்பு'],

  badge_dtcp: ['DTCP & RERA Approved', 'DTCP & RERA அங்கீகாரம்'],
  badge_loan: ['Up to 70% Bank Loan', '70% வரை வங்கிக் கடன்'],
  badge_area: ['Salem District', 'சேலம் மாவட்டம்'],

  hero_title: ['Own Your Dream Land with Confidence', 'நம்பிக்கையுடன் உங்கள் கனவு நிலத்தை சொந்தமாக்குங்கள்'],
  hero_sub: [
    'DTCP & RERA approved plots in and around Salem with up to 70% bank loan support.',
    'சேலம் மற்றும் அதன் சுற்றுப்பகுதிகளில் DTCP & RERA அங்கீகரிக்கப்பட்ட மனைகள், 70% வரை வங்கிக் கடன் வசதியுடன்.',
  ],
  view_projects: ['View Projects', 'திட்டங்களைப் பார்க்க'],
  sell_land: ['Sell Your Land', 'உங்கள் நிலத்தை விற்கவும்'],

  launch_title: ['Special Price Offer Ends In', 'சிறப்பு விலை முடிய இன்னும்'],
  launch_sub: [
    'Book your plot with a small advance and pay the balance in easy instalments.',
    'சிறிய முன்பணம் செலுத்தி மனையை பதிவு செய்து, மீதத் தொகையை எளிய தவணைகளில் செலுத்துங்கள்.',
  ],
  days: ['Days', 'நாட்கள்'],
  hours: ['Hours', 'மணி'],
  mins: ['Minutes', 'நிமிடம்'],
  secs: ['Seconds', 'விநாடி'],

  stat_loan: ['Max Bank Loan', 'அதிகபட்ச வங்கிக் கடன்'],
  stat_dist: ['Active Projects', 'நடப்பில் உள்ள திட்டங்கள்'],
  stat_fam: ['Happy Families', 'மகிழ்ச்சியான குடும்பங்கள்'],

  explore_t: ['Land, Homes & Communities', 'நிலம், வீடு & குடியிருப்பு பகுதிகள்'],
  tile_plots: ['DTCP Approved Plots', 'DTCP அங்கீகரிக்கப்பட்ட மனைகள்'],
  tile_villas: ['Premium Villa Plots', 'பிரீமியம் வில்லா பிளாட்கள்'],
  tile_gated: ['Gated Communities', 'பாதுகாப்பான குடியிருப்பு பகுதிகள்'],
  tile_more: ['Explore →', 'பார்க்க →'],

  why_title: ['Why Choose Tamil Kumaran', 'ஏன் தமிழ் குமரன்?'],
  trust_d: ['Clear ownership and verified documents for every plot.', 'ஒவ்வொரு மனைக்கும் தெளிவான உரிமை மற்றும் சரிபார்க்கப்பட்ட ஆவணங்கள்.'],
  transp_d: ['Honest pricing with no hidden charges.', 'மறைமுக கட்டணங்கள் இல்லாத நேர்மையான விலை.'],
  value_d: ['Prime locations with strong appreciation.', 'சிறந்த இடங்கள், உயரும் மதிப்பு.'],

  featured: ['Featured Projects', 'சிறப்பு திட்டங்கள்'],
  view_all: ['View All Projects', 'அனைத்து திட்டங்களும்'],
  view_details: ['View Details', 'விவரங்கள்'],
  site_visit: ['Book Site Visit', 'Site Visit பதிவு செய்ய'],
  special_price: ['Special Price', 'சிறப்பு விலை'],
  poster: ['Poster', 'போஸ்டர்'],
  layout: ['Layout / Map', 'லேஅவுட் / வரைபடம்'],
    gallery_t: ['Gallery', 'படத்தொகுப்பு'],
  photo: ['Photo', 'புகைப்படம்'],
  video: ['Video', 'வீடியோ'],
  tap_zoom: ['Tap image to zoom', 'பெரிதாக்க படத்தைத் தொடவும்'],

  cta_title: ['Own land? Sell it with us.', 'நிலம் உள்ளதா? எங்களிடம் விற்கவும்.'],
  cta_sub: ['Fair price, genuine buyers, quick process.', 'நியாயமான விலை, உண்மையான வாங்குபவர்கள், விரைவான நடைமுறை.'],

  about_title: ['About Us', 'எங்களைப் பற்றி'],
  about_p1: [
    'Tamil Kumaran Real Estate & Properties helps families in and around Salem find approved, genuine plots they can trust.',
    'தமிழ் குமரன் ரியல் எஸ்டேட் & பிராபர்ட்டீஸ், சேலம் பகுதிகளில் குடும்பங்கள் நம்பிக்கையுடன் வாங்கக்கூடிய அங்கீகரிக்கப்பட்ட மனைகளை வழங்குகிறது.',
  ],
  about_p2: [
    'From site visit to registration and bank loan support, we stay with you at every step.',
    'இடம் பார்வையிடுவது முதல் பதிவு மற்றும் வங்கிக் கடன் வரை, ஒவ்வொரு படியிலும் உங்களுடன் இருக்கிறோம்.',
  ],
  mission_t: ['Our Mission', 'எங்கள் நோக்கம்'],
  mission_d: ['Make owning land simple, safe and affordable.', 'நிலம் வாங்குவதை எளிதாகவும் பாதுகாப்பாகவும் மலிவாகவும் மாற்றுவது.'],
  vision_t: ['Our Vision', 'எங்கள் தொலைநோக்கு'],
  vision_d: [
    'To be the most trusted real estate name in Salem.',
    'சேலத்தில் மிகவும் நம்பகமான ரியல் எஸ்டேட் நிறுவனமாக திகழ்வது.',
  ],
  process_t: ['Our Simple Process', 'எங்கள் எளிய நடைமுறை'],
  s1: ['Site Visit', 'இடம் பார்வை'],
  s2: ['Document Check', 'ஆவண சரிபார்ப்பு'],
  s3: ['Bank Loan', 'வங்கிக் கடன்'],
  s4: ['Registration', 'பதிவு'],

  projects_title: ['Our Projects', 'எங்கள் திட்டங்கள்'],
  All: ['All', 'அனைத்தும்'],
  Salem: ['Salem', 'சேலம்'],
  Ongoing: ['Ongoing', 'நடப்பில்'],
  Upcoming: ['Upcoming', 'விரைவில்'],
  Completed: ['Completed', 'முடிந்தது'],
  Other: ['Other', 'மற்றவை'],
  enquire: ['Enquire', 'விசாரிக்க'],
  no_proj: ['No projects found', 'திட்டங்கள் இல்லை'],

  emi_title: ['EMI Calculator', 'EMI கணிப்பான்'],
  e_price: ['Property Price (₹)', 'சொத்து மதிப்பு (₹)'],
  e_pct: ['Loan % of price (max 80)', 'கடன் % (அதிகபட்சம் 80)'],
  e_rate: ['Interest Rate (% p.a.)', 'வட்டி விகிதம் (% ஆண்டுக்கு)'],
  e_years: ['Tenure (years)', 'காலம் (ஆண்டுகள்)'],
  e_emi: ['Monthly EMI', 'மாதாந்திர EMI'],
  e_loan: ['Loan Amount', 'கடன் தொகை'],
  e_int: ['Total Interest', 'மொத்த வட்டி'],
  e_total: ['Total Payable', 'மொத்த செலுத்தல்'],
  e_down: ['Down Payment', 'முன்பணம்'],
  e_note: ['Indicative only. Final loan terms are decided by your bank.', 'இது தோராயமான கணக்கு மட்டுமே. இறுதி விதிமுறைகளை வங்கி முடிவு செய்யும்.'],
  e_help: ['Get Loan Help', 'கடன் உதவி பெற'],

  contact_title: ['Contact Us', 'தொடர்பு கொள்ளுங்கள்'],
  tab_enq: ['Enquiry', 'விசாரணை'],
  tab_sell: ['Sell Your Land', 'நிலம் விற்க'],
  f_name: ['Name', 'பெயர்'],
  f_phone: ['Phone (10 digits)', 'தொலைபேசி (10 இலக்கம்)'],
  f_interest: ['Interested In', 'ஆர்வமுள்ள திட்டம்'],
  f_general: ['General Enquiry', 'பொது விசாரணை'],
  f_msg: ['Message', 'செய்தி'],
  f_send: ['Send on WhatsApp', 'வாட்ஸ்அப்பில் அனுப்பு'],
  f_place: ['Land Location / Village', 'நில இருப்பிடம் / கிராமம்'],
  f_district: ['District', 'மாவட்டம்'],
  f_area: ['Area', 'பரப்பளவு'],
  f_unit: ['Unit', 'அலகு'],
  f_ltype: ['Land Type', 'நில வகை'],
  f_price: ['Expected Price', 'எதிர்பார்க்கும் விலை'],
  f_details: ['Details', 'விவரங்கள்'],
  Cent: ['Cent', 'சென்ட்'],
  Acre: ['Acre', 'ஏக்கர்'],
  Sqft: ['Sq.ft', 'சதுர அடி'],
  Residential: ['Residential', 'குடியிருப்பு'],
  Agricultural: ['Agricultural', 'விவசாயம்'],
  Commercial: ['Commercial', 'வணிகம்'],
  sell_note: ['Photos and documents can be sent on WhatsApp after you submit.', 'சமர்ப்பித்த பின் புகைப்படங்கள் மற்றும் ஆவணங்களை வாட்ஸ்அப்பில் அனுப்பலாம்.'],
  ok: ['Opening WhatsApp…', 'வாட்ஸ்அப் திறக்கிறது…'],
  address_t: ['Address', 'முகவரி'],
  call: ['Call', 'அழைக்க'],

  quick: ['Quick Links', 'விரைவு இணைப்புகள்'],
  reach: ['Reach Us', 'தொடர்புக்கு'],
  rights: ['All rights reserved.', 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'],
}

const Ctx = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  // t('key') -> text from the table above
  const t = (k) => D[k]?.[lang === 'ta' ? 1 : 0] ?? k
  // pick({ en, ta }) -> text for the current language (used for project data)
  const pick = (o) => (o && typeof o === 'object' ? o[lang] ?? o.en : o)

  return <Ctx.Provider value={{ lang, setLang, t, pick }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
