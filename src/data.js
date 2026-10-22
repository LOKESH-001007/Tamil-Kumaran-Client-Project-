export const CO = {
  name: 'Tamil Kumaran',
  full: 'Tamil Kumaran Real Estate & Properties',
  phone: '7604841996',
  wa: '917604841996',
  insta: 'https://instagram.com/tamilkumaranrealestate',
  instaId: '@tamilkumaranrealestate',
  // Replace with your real Facebook page URL when you have it
  fb: 'https://www.facebook.com/search/top?q=Tamilkumaran%20Real%20Estate%20and%20Properties',
  fbName: 'Tamilkumaran Real Estate and Properties',
  address: 'Konapipe, Poolampatti Road, Idappadi - 637101',
}

// Countdown target date + which project it promotes (name must match below)
export const LAUNCH_DATE = '2026-12-15T10:00:00'
export const LAUNCH_PROJECT = 'The Icon Villas'

// Sample numbers: replace with real ones
export const STATS = [
  { n: 70, s: '%', k: 'stat_loan' },
  { n: 2, s: '', k: 'stat_dist' },
  { n: 250, s: '+', k: 'stat_fam' },
]

export const PROJECTS = [
  {
    id: 1,
    name: 'Tharapuram - Phase 2',
    title: { en: 'Tharapuram – Phase 2', ta: 'தாராபுரம் – Phase 2' },
    type: { en: 'Premium Villa Plots', ta: 'பிரீமியம் வில்லா பிளாட்கள்' },
    place: { en: 'Opposite Salem Airport, Tharapuram', ta: 'சேலம் ஏர்போர்ட் எதிரில், தாராபுரம்' },
    pitch: {
      en: 'Whether you buy to build a home or to invest, location matters most.',
      ta: 'வீடு கட்டுவதற்காக வாங்கினாலும், முதலீட்டிற்காக வாங்கினாலும் இடத்தின் லொகேஷன் மிக முக்கியம்!',
    },
    district: 'Salem',
    status: 'Ongoing',
    price: null,
       img: '/projects/p1.jpeg',
    posters: ['/projects/p1.jpeg', '/projects/p4.jpeg'],
    layouts: ['/projects/p2.jpeg', '/projects/p3.jpeg'],
    features: [
      { icon: '✅', en: 'RERA & DTCP Approved', ta: 'RERA & DTCP Approved' },
      { icon: '🛣️', en: '33 ft wide tar roads', ta: '33 அடி அகலமான தார் சாலைகள்' },
      { icon: '💡', en: 'Street lights & electricity', ta: 'தெருவிளக்குகள் & மின்சார வசதி' },
      { icon: '📹', en: 'CCTV security', ta: 'CCTV பாதுகாப்பு வசதி' },
      { icon: '🏡', en: 'Compound wall all around', ta: 'சுற்றிலும் காம்பவுண்ட் சுவர்' },
      { icon: '💧', en: 'Individual drinking water connection', ta: 'தனித்தனி குடிநீர் இணைப்பு' },
      { icon: '🚧', en: 'Concrete drainage', ta: 'கான்கிரீட் சாக்கடை வசதி' },
      { icon: '🛣️', en: 'Near the new Outer Ring Road', ta: 'புதிய Outer Ring Road அருகாமையில்' },
    ],
  },
  {
    id: 2,
    name: 'The Icon Villas',
    title: { en: 'The Icon Villas', ta: 'THE ICON VILLAS' },
    type: { en: 'Premium Gated Community Villa Plots', ta: 'Premium Gated Community Villa Plots' },
    place: {
      en: 'Behind Salem Junction, Pudhu Road – Bagalpatti (15 minutes from Junction)',
      ta: 'சேலம் ஜங்ஷன் பின்புறம், புது ரோடு – பாகல்பட்டி (ஜங்ஷனில் இருந்து 15 நிமிட பயணம்)',
    },
    pitch: {
      en: 'The right chance to own your family’s plot in Salem.',
      ta: 'சேலத்தில் உங்கள் குடும்பத்திற்கான சொந்த வீட்டு மனையை வாங்க இதுவே சரியான வாய்ப்பு!',
    },
    district: 'Salem',
    status: 'Ongoing',
    price: { en: '₹2,660 per sq ft', ta: 'ஒரு சதுர அடி ₹2,660' },
        img: '/projects/p5.jpeg',
    posters: ['/projects/p5.jpeg', '/projects/p7.jpeg'],
    layouts: ['/projects/p8.jpeg', '/projects/p10.jpeg'],
    features: [
      { icon: '✅', en: 'DTCP & RERA approved gated community', ta: 'DTCP & RERA அங்கீகாரம் பெற்ற Gated Community' },
      { icon: '📍', en: 'On-road project (on the main road)', ta: 'பிரதான சாலையிலேயே (On-Road Project)' },
      { icon: '📜', en: '50-year legal book – clear legal documents', ta: '50 வருட லீகல் புக் – தெளிவான சட்ட ஆவணங்கள்' },
      { icon: '🏦', en: 'Up to 70% bank loan', ta: '70% வரை வங்கிக் கடன் வசதி' },
      { icon: '💰', en: 'Book with just ₹5 lakh', ta: '₹5 லட்சம் மட்டும் செலுத்தி உடனே பதிவு செய்யலாம்' },
      { icon: '🗓️', en: 'Pay the balance in easy instalments', ta: 'மீதத் தொகையை எளிய தவணைகளில் செலுத்தலாம்' },
      { icon: '🏗️', en: 'All infrastructure ready for immediate construction', ta: 'உடனே வீடு கட்டத் தேவையான அனைத்து உள்கட்டமைப்பு வசதிகளும்' },
      { icon: '🤝', en: 'Direct sale by the company – no broker commission', ta: 'நிறுவனத்தின் நேரடி விற்பனை – இடைத்தரகர் கமிஷன் இல்லை' },
    ],
  },
]

export const waLink = (text) => `https://wa.me/${CO.wa}?text=${encodeURIComponent(text)}`

// helper for photo backgrounds (photo + dark green overlay + fallback colour)
export const bg = (file, a1 = 0.55, a2 = a1) =>
  `linear-gradient(120deg,rgba(6,50,33,${a1}),rgba(6,50,33,${a2})),url(/projects/${file}), linear-gradient(135deg,#0b4f35,#14774f)`

export const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxDNc-CQ7RKVC_hsiSfviYpsqpqS4LjVeilAkqoVv_ZxDtaoF9yScc1XB7wj2Ds6vgrSg/exec'