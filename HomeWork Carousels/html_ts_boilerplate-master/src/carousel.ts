/* FIRST CAROUSEL */
export default class Carousel {
  currentImageIndex = 0;

  carousel: HTMLDivElement;

  images: string[] = [];

  constructor(selector:string, imagesArr: string[]) {
    this.images = imagesArr;
    this.render(selector);
    this.carousel = document.querySelector(`.${selector}`);
  }

  render(carouselID:string) {
    const carousel = document.querySelector<HTMLDivElement>(`.${carouselID}`);
    carousel.classList.add('carousel');

    const image = document.createElement('img');
    image.src = this.images[this.currentImageIndex];
    carousel.appendChild(image);

    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');

    prevButton.addEventListener('click', () => {
      this.previousImage();
    });

    carousel.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.classList.add('next');

    nextButton.addEventListener('click', () => {
      this.nextImage();
    });

    carousel.appendChild(nextButton);

    document.querySelector<HTMLDivElement>('.main-container').appendChild(carousel);
  }

  previousImage() {
    this.currentImageIndex -= 1;

    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }

    const image = this.carousel.querySelector<HTMLImageElement>('img');
    image.src = this.images[this.currentImageIndex];
  }

  nextImage() {
    this.currentImageIndex += 1;

    if (this.currentImageIndex === this.images.length) {
      this.currentImageIndex = 0;
    }

    this.updateImage();
  }

  updateImage() {
    const image = this.carousel.querySelector<HTMLImageElement>('img');
    image.src = this.images[this.currentImageIndex];
  }
}
