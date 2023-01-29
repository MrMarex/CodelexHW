/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import DotCarousel from './dotCarousel';

/* THIRD CAROUSEL */
export default class PreviewCarousel extends DotCarousel {
  previews: HTMLDivElement[] = [];

  constructor(selector:string, images: string[]) {
    super(selector, images);
    this.images = images;
    this.currentImageIndex = 0;
    this.createPreviews();
    this.renderButtons();
    this.renderPreviews();
  }

  createPreviews() {
    for (let i = 0; i < this.images.length; i += 1) {
      const preview = document.createElement('div');
      preview.classList.add('preview-img');
      if (i === 0) { preview.classList.add('active'); }
      preview.style.backgroundImage = `url(${this.images[i]})`;
      this.previews.push(preview);
    }
  }

  renderPreviews() {
    const previewContainer = document.createElement('div');
    previewContainer.classList.add('previews');
    this.previews.forEach((preview) => {
      previewContainer.appendChild(preview);
    });

    this.carousel.appendChild(previewContainer);
  }

  updatePreviews(index: number) {
    this.previews.forEach((preview, i) => {
      if (i === index) {
        preview.classList.add('active');
      } else {
        preview.classList.remove('active');
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
    this.updatePreviews(this.currentImageIndex);
  }

  nextImage() {
    this.currentImageIndex += 1;

    if (this.currentImageIndex === this.images.length) {
      this.currentImageIndex = 0;
    }

    this.updateImage();
    this.updateDot(this.currentImageIndex);
    this.updatePreviews(this.currentImageIndex);
  }
}
