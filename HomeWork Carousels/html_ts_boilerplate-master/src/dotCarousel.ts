/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Carousel from './carousel';

/* SECOND CAROUSEL */

export default class DotCarousel extends Carousel {
  dots: HTMLSpanElement[] = [];

  constructor(selector:string, images: string[]) {
    super(selector, images);
    this.images = images;
    this.currentImageIndex = 0;
    this.createDots();
    this.renderButtons();
    this.renderDots();
  }

  createDots() {
    for (let i = 0; i < this.images.length; i += 1) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) { dot.classList.add('active'); }
      this.dots.push(dot);
    }
  }

  renderDots() {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots');

    this.dots.forEach((dot) => {
      dotsContainer.appendChild(dot);
    });

    this.carousel.appendChild(dotsContainer);
  }

  renderButtons() {
    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');

    prevButton.addEventListener('click', () => {
      this.previousImage();
    });

    const nextButton = document.createElement('button');
    nextButton.classList.add('next');

    nextButton.addEventListener('click', () => {
      this.nextImage();
    });
  }

  updateDot(index: number) {
    this.dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  previousImage() {
    this.currentImageIndex -= 1;

    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }

    this.updateImage();
    this.updateDot(this.currentImageIndex);
  }

  nextImage() {
    this.currentImageIndex += 1;

    if (this.currentImageIndex === this.images.length) {
      this.currentImageIndex = 0;
    }

    this.updateImage();
    this.updateDot(this.currentImageIndex);
  }
}
