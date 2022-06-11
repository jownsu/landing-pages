const galleryImgs = document.querySelectorAll('#gallery a')
const galleryModal = document.querySelector('#galleryModal img')

galleryImgs.forEach((img) => {
  img.addEventListener('click', (e) => {
    galleryModal.src = e.target.src
  })
})
