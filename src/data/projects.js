// PLACEHOLDERS: replace with real work. Add `image: '/images/x.jpg'` (file in /public/images) to show a photo.
export const categories = ['All','Website Development','Application Development','Branding','Digital Marketing','Video Production']
export const projects = [
  { title: 'Corporate website', category: 'Website Development', hue: 248 },
  { title: 'Booking system', category: 'Application Development', hue: 205 },
  { title: 'Brand identity', category: 'Branding', hue: 22 },
  { title: 'Social campaign', category: 'Digital Marketing', hue: 150 },
  { title: 'Promo video', category: 'Video Production', hue: 330 },
  { title: 'E-commerce store', category: 'Website Development', hue: 270 },
].map(p => ({
  ...p,
  placeholder: true,
  // Sample artwork per category. Replace with a real project screenshot: image: '/images/my-project.jpg'
  image: p.image || ({
    'Website Development': '/images/service-web.svg',
    'Application Development': '/images/service-apps.svg',
    'Branding': '/images/service-brand.svg',
    'Digital Marketing': '/images/service-marketing.svg',
    'Video Production': '/images/service-video.svg',
  })[p.category],
}))
