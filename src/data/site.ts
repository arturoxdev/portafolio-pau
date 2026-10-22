// Datos de contacto. Rellena `instagram` (sin @); los campos vacíos ocultan su botón.
export const site = {
  name: 'Paulina Guerrero López',
  shortName: 'Paulina G. L.',
  city: 'Ciudad de México',
  instagram: '',
  email: 'designpaulinagll@gmail.com',
  // Formato internacional sin espacios para los links; `phoneDisplay` es como se muestra.
  phone: '+525559437339',
  phoneDisplay: '+52 55 5943 7339',
  whatsappMessage: 'Hola Paulina, vi tu portafolio y me gustaría platicar sobre un proyecto.',
  role: 'Diseñadora digital · IA generativa',
  bio: [
    'Diseñadora digital desde 2023 y con IA generativa desde 2025. Creo imagen, video y postproducción para pauta, reels y redes de marcas como Luxury Habitat Real Estate.',
  ],
  // Herramientas que aparecen debajo de la bio; `use` es la nota pequeña junto al nombre y `url` el sitio oficial.
  tools: [
    { name: 'Adobe Premiere Pro', use: 'edición', url: 'https://www.adobe.com/mx/products/premiere.html' },
    { name: 'Photoshop', use: 'diseño', url: 'https://www.adobe.com/mx/products/photoshop.html' },
    { name: 'Illustrator', use: 'diseño', url: 'https://www.adobe.com/mx/products/illustrator.html' },
    { name: 'Adobe Firefly', use: 'IA', url: 'https://firefly.adobe.com/' },
    { name: 'Higgsfield', use: 'IA', url: 'https://higgsfield.ai/' },
    { name: 'Veo de Google', use: 'video IA', url: 'https://deepmind.google/models/veo/' },
    { name: 'Flow', use: 'video IA', url: 'https://labs.google/flow/about' },
    { name: 'Suno', use: 'música', url: 'https://suno.com/' },
    { name: 'ElevenLabs', use: 'voz', url: 'https://elevenlabs.io/' },
  ],
  stats: [
    { value: '8', label: 'videos' },
    { value: '1.2 K', label: 'likes' },
    { value: '9:16', label: 'formato' },
  ],
};

export const instagramUrl = site.instagram ? `https://www.instagram.com/${site.instagram}/` : '';
export const whatsappUrl = site.phone
  ? `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(site.whatsappMessage)}`
  : '';
