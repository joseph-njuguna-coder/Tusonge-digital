// Real projects first. Fields: title, category, also (extra filter categories), image (file in /public/images), summary, url (optional), sample (true = demo app).
// Placeholder cards (bottom) are clearly labelled and should be replaced as real work comes in.
export const categories = ['All','Website Development','Application Development','Branding','Digital Marketing','Video Production']

const art = {
  'Website Development': '/images/service-web.svg',
  'Application Development': '/images/service-apps.svg',
  'Branding': '/images/service-brand.svg',
  'Digital Marketing': '/images/service-marketing.svg',
  'Video Production': '/images/service-video.svg',
}
const placeholder = p => ({ ...p, placeholder: true, image: art[p.category] })

export const projects = [
  { title: 'GMK Engineering', category: 'Website Development', cover: true, image: '/images/projects/gmk-engineering.jpg',
    url: 'https://gmkengineering.co.ke', tags: ['Social media management'],
    summary: 'Corporate website for a Kenyan milling and engineering company: services, industries, projects, catalogue and quote requests.' },
  { title: 'The Perfect Intern', category: 'Application Development', cover: true, image: '/images/projects/perfect-intern.jpg',
    summary: 'Internship platform with an admin dashboard covering companies, internships, interns, finance and analytics.' },
  { title: 'Morning Bird Insurance', category: 'Website Development', cover: true, image: '/images/projects/morning-bird.jpg', url: 'https://morningbirdinsurance.co.ke', tags: ['Social media management'],
    summary: 'Website for an insurance broker offering motor, medical, travel, home and life cover, with quote and call actions.' },
  { title: 'Nida', category: 'Application Development', cover: true, sample: true, image: '/images/projects/nida.jpg', url: 'https://manyumba.co.ke', tags: ['Social media management'],
    summary: 'Installable property management web app. A sample app showing what we build.' },
  { title: '@mwalimu', category: 'Website Development', also: ['Digital Marketing'], cover: true, image: '/images/projects/mwalimu.jpg',
    url: 'https://mwalimu.co.ke', tags: ['SEO', 'SEM'],
    summary: 'Kenya education platform with an articles knowledge hub, exams and featured content. Developed by Tusonge Digital, with ongoing SEO and SEM improvements.' },
  { title: 'Nuga Best', category: 'Website Development', cover: true, image: '/images/projects/nuga-best.jpg',
    summary: 'Website for a wellness centre on Thika Road, Nairobi: therapy services, a product catalogue with pricing and photos, and session booking.' },
  { title: 'HIT Kenya', category: 'Website Development', also: ['Branding'], cover: true, image: '/images/projects/hit-kenya.jpg', tags: ['Brand identity'],
    summary: 'Website for a premium events, entertainment, media and marketplace platform, with ticket verification. Brand identity by Tusonge Digital.' },
  { title: 'Sache Fitness Group', category: 'Digital Marketing', image: art['Digital Marketing'], url: 'https://sachefitnessgroup.com',
    tags: ['Social media management'], summary: 'Social media management for Sache Fitness Group.' },
  { title: 'Sache Fitness Group', category: 'Branding', image: art['Branding'], url: 'https://sachefitnessgroup.com',
    tags: ['Brand identity'], summary: 'Brand identity for Sache Fitness Group.' },
  { title: 'Mwangi Creatives', category: 'Branding', cover: true, image: '/images/projects/mwangi-creatives.jpg',
    url: 'https://mwangicreative.africa', tags: ['Brand identity partner'],
    summary: 'Brand identity partnership with Mwangi Creatives, a creative studio offering design, covers, websites, branding and motion.' },
  placeholder({ title: 'Promo video', category: 'Video Production', hue: 330 }),
]
