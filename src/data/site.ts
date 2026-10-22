import premiere from '../assets/tools/premiere.svg';
import photoshop from '../assets/tools/photoshop.svg';
import illustrator from '../assets/tools/illustrator.svg';
import firefly from '../assets/tools/firefly.svg';
import higgsfield from '../assets/tools/higgsfield.png';
import veo from '../assets/tools/veo.svg';
import flow from '../assets/tools/flow.png';
import suno from '../assets/tools/suno.png';
import elevenlabs from '../assets/tools/elevenlabs.svg';

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
    'Diseñadora de marketing con IA. Convierto renders y fotos en piezas para campaña (virtual staging, timelapses y reels) para marcas como Luxury Habitat Real Estate.',
  ],
  // Herramientas que aparecen debajo de la bio; `use` es la nota pequeña junto al nombre y `url` el sitio oficial.
  tools: [
    { name: 'Adobe Premiere Pro', icon: premiere, use: 'edición', url: 'https://www.adobe.com/mx/products/premiere.html' },
    { name: 'Photoshop', icon: photoshop, use: 'diseño', url: 'https://www.adobe.com/mx/products/photoshop.html' },
    { name: 'Illustrator', icon: illustrator, use: 'diseño', url: 'https://www.adobe.com/mx/products/illustrator.html' },
    { name: 'Adobe Firefly', icon: firefly, use: 'IA', url: 'https://firefly.adobe.com/' },
    { name: 'Higgsfield', icon: higgsfield, use: 'IA', url: 'https://higgsfield.ai/' },
    { name: 'Veo de Google', icon: veo, use: 'video IA', url: 'https://deepmind.google/models/veo/' },
    { name: 'Flow', icon: flow, use: 'video IA', url: 'https://labs.google/flow/about' },
    { name: 'Suno', icon: suno, use: 'música', url: 'https://suno.com/' },
    { name: 'ElevenLabs', icon: elevenlabs, use: 'voz', url: 'https://elevenlabs.io/' },
  ],
};

export const instagramUrl = site.instagram ? `https://www.instagram.com/${site.instagram}/` : '';
export const whatsappUrl = site.phone
  ? `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(site.whatsappMessage)}`
  : '';
