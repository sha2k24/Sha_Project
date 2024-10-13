class CarouselImageUpdater {
  constructor(imageIds, breakpoint) {
    this.imageIds = imageIds;
    this.breakpoint = breakpoint;
    this.defaultImages = {
      large: [
        'Sources/Corusal_d1.svg',
        'Sources/Corusal_d2.png',
        'Sources/Corusal_d3.png',
        'Sources/Corusal_d4.png'
      ],
      small: [
        'Sources/Corusal_1.svg',
        'Sources/Corusal_2.jpeg',
        'Sources/Corusal_3.jpeg',
        'Sources/Corusal_4.jpeg'
      ]
    };

    // Bind the resize event handler to maintain context
    this.updateImages = this.updateImages.bind(this);
    
    // Initial image update
    this.updateImages();
    
    // Add event listener for window resize
    window.addEventListener('resize', this.updateImages);
  }

  updateImages() {
    const screenWidth = window.innerWidth;
    const imagesToUse = screenWidth > this.breakpoint ? this.defaultImages.large : this.defaultImages.small;

    this.imageIds.forEach((id, index) => {
      const imgElement = document.getElementById(id);
      if (imgElement) {
        imgElement.src = imagesToUse[index];
      } else {
        console.warn(`Image element with ID "${id}" not found.`);
      }
    });
  }
}

// Usage
const carouselImageUpdater = new CarouselImageUpdater(['caro1', 'caro2', 'caro3', 'caro4'], 600);

