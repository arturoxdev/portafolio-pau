import type { ImageMetadata } from 'astro';
import virtualStagingPoster from '../assets/virtual-staging-poster.png';
import timeLapsePoster from '../assets/time-lapse-poster.png';

export interface ProposalVideo {
  title: string;
  format: string;
  description: string;
  src: string;
  poster: ImageMetadata;
  width: number;
  height: number;
}

// Videos de ejemplo para la propuesta a Mazul. Agrega más objetos a la lista y aparecen en la sección.
export const proposal = {
  client: 'Mazul',
  intro:
    'Propongo piezas para cada canal: horizontales para YouTube y web, y verticales para Reels. Virtual staging, time lapses y recorridos con ritmo que cierran con la marca.',
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
};
