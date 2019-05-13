class Base64 {
  constructor (pramas) {
    this.width = pramas.width
  }

  base64 (file) {
    if (!file) return Promise.resolve({})
    const reader = new FileReader()
    reader.readAsDataURL(file)
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        const image = new Image()
        image.src = e.target.result
        image.onload = () => {
          const compress64 = this.compress64(image, this.width || 200)
          resolve({
            compress64,
            base64: e.target.result
          })
        }
      }
    })
  }

  compress64 (img, width) {
    const canvas = document.createElement('canvas')
    canvas.width = Math.min(img.width, width)
    canvas.height = img.height * canvas.width / img.width
    const cxt = canvas.getContext('2d')
    cxt.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
    return canvas.toDataURL()
  }
}

export default Base64
