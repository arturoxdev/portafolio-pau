import type { ImageMetadata } from 'astro';
import sanJeronimo from '../assets/covers/san-jeronimo.png';
import sanAndres from '../assets/covers/san-andres.png';
import lasAguilas from '../assets/covers/las-aguilas.png';
import cancionLasAguilas from '../assets/covers/cancion-las-aguilas.png';
import shakespeare from '../assets/covers/shakespeare.png';
import aldamaCoyoacan from '../assets/covers/aldama-coyoacan.png';
import delPedregal from '../assets/covers/del-pedregal.png';
import equinoccio from '../assets/covers/equinoccio.png';
import sanJeronimoPoster from '../assets/san-jeronimo-poster.png';

export interface Video {
  title: string;
  subtitle: string;
  client: string;
  url: string;
  cover: ImageMetadata;
  // Si existe, la tarjeta reproduce el video dentro del feed en lugar de mostrar la portada.
  clip?: { src: string; poster: ImageMetadata };
}

const tiktok = (id: string) => `https://www.tiktok.com/@luxuryhabitatmx/video/${id}`;
const client = 'Luxury Habitat';

// Orden y links tomados de la presentación "Portafolio Paulina.pdf".
export const videos: Video[] = [
  { title: 'San Jerónimo', subtitle: 'La Magdalena Contreras', client, url: tiktok('7693609749341932820'), cover: sanJeronimo, clip: { src: '/videos/san-jeronimo.mp4', poster: sanJeronimoPoster } },
  { title: 'San Andrés', subtitle: 'Casa de 3 niveles', client, url: tiktok('7694440216261627157'), cover: sanAndres },
  { title: 'Las Águilas', subtitle: 'Moderno industrial', client, url: tiktok('7652500636650458385'), cover: lasAguilas },
  { title: 'Canción Las Águilas', subtitle: 'Recorrido en una canción', client, url: tiktok('7585328645745429771'), cover: cancionLasAguilas },
  { title: 'Shakespeare', subtitle: 'Departamento de 2 niveles', client, url: tiktok('7639111833906957569'), cover: shakespeare },
  { title: 'Aldama Coyoacán', subtitle: 'Especial Día del Amor', client, url: tiktok('7607472144888466705'), cover: aldamaCoyoacan },
  { title: 'Del Pedregal', subtitle: 'Jardines del Pedregal', client, url: tiktok('7692211719808077077'), cover: delPedregal },
  { title: 'Equinoccio', subtitle: 'Lujo frente al mar', client, url: tiktok('7619495792956509447'), cover: equinoccio },
];
