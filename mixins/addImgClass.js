export function addImgClass(img) {
  img.naturalHeight > this.naturalWidth
    ? img.classList.add('portrait')
    : img.classList.add('landscape')
}
