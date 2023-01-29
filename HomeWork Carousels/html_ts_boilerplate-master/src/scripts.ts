/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import TimerCarousel from './timerCarousel';
import PreviewCarousel from './previewCarousel';
import Carousel from './carousel';
import DotCarousel from './dotCarousel';

const imageArr = [
  'https://picsum.photos/500/301',
  'https://picsum.photos/501/301',
  'https://picsum.photos/502/301',
  'https://picsum.photos/499/301',
  'https://picsum.photos/498/301'];

/* First carousel */
const carousel = new Carousel('simple-carousel', imageArr);

/* Second carousel */
const dotCarousel = new DotCarousel('dot-carousel', imageArr);

/* Third carousel */
const previewCarousel = new PreviewCarousel('preview-carousel', imageArr);

/* Fourth carousel */
const timerCarousel = new TimerCarousel('timer-carousel', imageArr);
