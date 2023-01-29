/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import PreviewCarousel from './previewCarousel';

/* FOURTH CAROUSEL */

export default class TimerCarousel extends PreviewCarousel {
  currentImage: HTMLDivElement;

  fullScreenIndex = 0;

  constructor(selector:string, images: string[]) {
    super(selector, images);
    this.currentImage = this.previews[this.fullScreenIndex];
    this.startTimer();
    this.createFullscreenButton();
  }

  startTimer() {
    setInterval(() => {
      this.nextImage();
    }, 10000);
  }

  createFullscreenButton() {
    const button = document.createElement('button');
    button.classList.add('fullScreen-btn');
    button.innerText = 'Open Fullscreen';

    button.addEventListener('click', () => {
      this.previews[this.currentImageIndex].requestFullscreen();
    });

    this.carousel.appendChild(button);
  }
}
