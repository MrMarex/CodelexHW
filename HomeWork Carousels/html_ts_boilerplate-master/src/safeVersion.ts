// /* eslint-disable max-classes-per-file */

// /* FIRST CAROUSEL */
// class Carousel {
//     currentImageIndex = 0;

//     images: string[] = [
//       'https://picsum.photos/500/301',
//       'https://picsum.photos/501/301',
//       'https://picsum.photos/502/301',
//       'https://picsum.photos/499/301',
//       'https://picsum.photos/498/301'];

//     constructor() {
//       this.render();
//     }

//     render() {
//       const carousel = document.createElement('div');
//       carousel.classList.add('carousel');

//       const image = document.createElement('img');
//       image.src = this.images[this.currentImageIndex];
//       carousel.appendChild(image);

//       const prevButton = document.createElement('button');
//       prevButton.classList.add('prev');
//       prevButton.addEventListener('click', () => {
//         this.previousImage();
//       });
//       carousel.appendChild(prevButton);

//       const nextButton = document.createElement('button');
//       nextButton.classList.add('next');
//       nextButton.addEventListener('click', () => {
//         this.nextImage();
//       });
//       carousel.appendChild(nextButton);

//       document.body.appendChild(carousel);
//     }

//     previousImage() {
//       this.currentImageIndex -= 1;
//       if (this.currentImageIndex < 0) {
//         this.currentImageIndex = this.images.length - 1;
//       }
//       const carousel = document.querySelector<HTMLDivElement>('.carousel');
//       const image = carousel.querySelector<HTMLImageElement>('img');
//       image.src = this.images[this.currentImageIndex];
//     }

//     nextImage() {
//       this.currentImageIndex += 1;
//       if (this.currentImageIndex === this.images.length) {
//         this.currentImageIndex = 0;
//       }
//       this.updateImage();
//     }

//     updateImage() {
//       const carousel = document.querySelector<HTMLDivElement>('.carousel');
//       const image = carousel.querySelector<HTMLImageElement>('img');
//       image.src = this.images[this.currentImageIndex];
//     }
//   }

//   /* SECOND CAROUSEL */

//   class DotCarousel extends Carousel {
//     dots: HTMLSpanElement[] = [];

//     constructor(images: string[]) {
//       super();
//       this.images = images;
//       this.currentImageIndex = 0;
//       this.createDots();
//       this.renderButtons();
//       this.renderDots();
//     }

//     createDots() {
//       for (let i = 0; i < this.images.length; i += 1) {
//         const dot = document.createElement('span');
//         dot.classList.add('dot');
//         if (i === 0) { dot.classList.add('active'); }
//         this.dots.push(dot);
//       }
//     }

//     renderDots() {
//       const carousel = document.querySelector<HTMLDivElement>('.carousel');
//       const dotsContainer = document.createElement('div');
//       dotsContainer.classList.add('dots');

//       this.dots.forEach((dot) => {
//         dotsContainer.appendChild(dot);
//       });

//       carousel.appendChild(dotsContainer);
//     }

//     renderButtons() {
//       const prevButton = document.createElement('button');
//       prevButton.classList.add('prev');
//       prevButton.addEventListener('click', () => {
//         this.previousImage();
//       });

//       const nextButton = document.createElement('button');
//       nextButton.classList.add('next');
//       nextButton.addEventListener('click', () => {
//         this.nextImage();
//       });
//     }

//     updateDot(index: number) {
//       this.dots.forEach((dot, i) => {
//         if (i === index) {
//           dot.classList.add('active');
//         } else {
//           dot.classList.remove('active');
//         }
//       });
//     }

//     previousImage() {
//       this.currentImageIndex -= 1;
//       if (this.currentImageIndex < 0) {
//         this.currentImageIndex = this.images.length - 1;
//       }
//       this.updateImage();
//       this.updateDot(this.currentImageIndex);
//     }

//     nextImage() {
//       this.currentImageIndex += 1;
//       if (this.currentImageIndex === this.images.length) {
//         this.currentImageIndex = 0;
//       }
//       this.updateImage();
//       this.updateDot(this.currentImageIndex);
//     }
//   }

//   /* THIRD CAROUSEL */
//   class PreviewCarousel extends DotCarousel {
//     previews: HTMLDivElement[] = [];

//     constructor(images: string[]) {
//       super(images);
//       this.images = images;
//       this.currentImageIndex = 0;
//       this.createPreviews();
//       this.renderButtons();
//       this.renderPreviews();
//     }

//     createPreviews() {
//       for (let i = 0; i < this.images.length; i += 1) {
//         const preview = document.createElement('div');
//         preview.classList.add('preview-img');
//         if (i === 0) { preview.classList.add('active'); }
//         preview.style.backgroundImage = `url(${this.images[i]})`;
//         this.previews.push(preview);
//       }
//     }

//     renderPreviews() {
//       const carousel = document.querySelector<HTMLDivElement>('.carousel');
//       const previewContainer = document.createElement('div');
//       previewContainer.classList.add('previews');
//       this.previews.forEach((preview) => {
//         previewContainer.appendChild(preview);
//       });

//       carousel.appendChild(previewContainer);
//     }

//     updatePreviews(index: number) {
//       this.previews.forEach((preview, i) => {
//         if (i === index) {
//           preview.classList.add('active');
//         } else {
//           preview.classList.remove('active');
//         }
//       });
//     }

//     previousImage() {
//       this.currentImageIndex -= 1;
//       if (this.currentImageIndex < 0) {
//         this.currentImageIndex = this.images.length - 1;
//       }
//       this.updateImage();
//       this.updateDot(this.currentImageIndex);
//       this.updatePreviews(this.currentImageIndex);
//     }

//     nextImage() {
//       this.currentImageIndex += 1;
//       if (this.currentImageIndex === this.images.length) {
//         this.currentImageIndex = 0;
//       }
//       this.updateImage();
//       this.updateDot(this.currentImageIndex);
//       this.updatePreviews(this.currentImageIndex);
//     }
//   }

//   /* FOURTH CAROUSEL */

//   class TimerCarousel extends PreviewCarousel {
//     currentImage: HTMLDivElement;

//     fullScreenIndex = 0;

//     constructor(images: string[]) {
//       super(images);
//       this.currentImage = this.previews[this.fullScreenIndex];
//       this.startTimer();
//       this.createFullscreenButton();
//     }

//     startTimer() {
//       setInterval(() => {
//         this.nextImage();
//       }, 10000);
//     }

//     createFullscreenButton() {
//       const button = document.createElement('button');
//       button.innerText = 'Open Fullscreen';
//       button.addEventListener('click', () => {
//         this.previews[this.currentImageIndex].requestFullscreen();
//       });
//       document.querySelector('.carousel').appendChild(button);
//     }
//   }

//   /* INITIALIZE OBJECTS */

//   /* First carousel */
//   const carousel = new Carousel();

//   /* Second carousel */
//   const dotCarousel = new DotCarousel([
//     'https://picsum.photos/500/301',
//     'https://picsum.photos/501/301',
//     'https://picsum.photos/502/301',
//     'https://picsum.photos/499/301',
//     'https://picsum.photos/498/301']);

//   /* Third carousel */
//   const previewCarousel = new PreviewCarousel([
//     'https://picsum.photos/500/301',
//     'https://picsum.photos/501/301',
//     'https://picsum.photos/502/301',
//     'https://picsum.photos/499/301',
//     'https://picsum.photos/498/301']);

//   /* Fourth carousel */
//   const timerCarousel = new TimerCarousel([
//     'https://picsum.photos/500/301',
//     'https://picsum.photos/501/301',
//     'https://picsum.photos/502/301',
//     'https://picsum.photos/499/301',
//     'https://picsum.photos/498/301']);
