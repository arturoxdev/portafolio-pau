import type { ImageMetadata } from 'astro';
import virtualStagingPoster from '../assets/virtual-staging-poster.png';
import timeLapsePoster from '../assets/time-lapse-poster.png';
import carrusel01 from '../assets/carrusel/01.png';
import carrusel02 from '../assets/carrusel/02.png';
import carrusel03 from '../assets/carrusel/03.png';
import carrusel04 from '../assets/carrusel/04.png';
import carrusel05 from '../assets/carrusel/05.png';

export interface ProposalVideo {
  title: string;
  format: string;
  description: string;
  src: string;
  poster: ImageMetadata;
  width: number;
  height: number;
}

export interface ProposalCarousel {
  title: string;
  format: string;
  description: string;
  slides: { src: string; poster: ImageMetadata }[];
  width: number;
  height: number;
}

// Videos de ejemplo para la propuesta a Mazul. Agrega más objetos a la lista y aparecen en la sección.
export const proposal = {
  client: 'Mazul',
  intro:
    'Propongo piezas para cada canal: horizontales para YouTube y web, verticales para Reels y carruseles animados para Instagram. Virtual staging, time lapses y recorridos con ritmo que cierran con la marca.',
  videos: [
    {
      title: 'Virtual Staging',
      format: 'YouTube · 16:9',
      description: 'Del espacio vacío al espacio vivido: cada habitación se amuebla en pantalla para que el cliente imagine su estancia.',
      src: '/videos/virtual-staging.mp4',
      poster: virtualStagingPoster,
      width: 1280,
      height: 720,
    },
    {
      title: 'Time Lapse',
      format: 'Reel · 9:16',
      description: 'La luz del atardecer recorre los espacios en 10 segundos. Pensado para Instagram.',
      src: '/videos/time-lapse.mp4',
      poster: timeLapsePoster,
      width: 720,
      height: 1280,
    },
  ] satisfies ProposalVideo[],
  carousel: {
    title: 'Carrusel animado',
    format: 'Instagram · 4:5',
    description: 'Cinco láminas que se mueven solas: de la fachada a los detalles del interior, para recorrer la propiedad deslizando.',
    slides: [
      { src: '/videos/carrusel/01.mp4', poster: carrusel01 },
      { src: '/videos/carrusel/02.mp4', poster: carrusel02 },
      { src: '/videos/carrusel/03.mp4', poster: carrusel03 },
      { src: '/videos/carrusel/04.mp4', poster: carrusel04 },
      { src: '/videos/carrusel/05.mp4', poster: carrusel05 },
    ],
    width: 720,
    height: 900,
  } satisfies ProposalCarousel,
};
