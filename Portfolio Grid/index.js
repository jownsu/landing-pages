const imgLink = document.querySelectorAll('#work .card-body a')
const modalImg = document.querySelector('#workModal img')
const portItems = document.querySelectorAll('._port-item')
const collapses = document.querySelectorAll('.collapse')

imgLink.forEach((img) => {
  img.addEventListener('click', (e) => {
    modalImg.src = e.target.src
  })
})

portItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    collapses.forEach((collapse) => {
      var bsCollapse = new bootstrap.Collapse(collapse, {
        toggle: false,
      })
      bsCollapse.hide()
    })
  })
})
