
// Change header element
let header = document.querySelector('#page-header')

header.style.textAlign = 'left'

// Select multiple elements
let images = document.querySelectorAll('.dog-image')

for (let i = 0; i < images.length; i++) {
    images[i].style.borderRadius = '50px'
    images[i].style.borderStyle = 'solid'
}

let dogNames = document.querySelectorAll('.dog-name')

for (let i = 0; i < dogNames.length; i++) {
    dogNames[i].style.textAlign = 'left'
    dogNames[i].style.color = 'green'
}

let footer = document.querySelector('.footer')

footer.style.color = 'orange'