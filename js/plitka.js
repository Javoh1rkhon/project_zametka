let addExercise = document.querySelector('.add_exercise')
let closeAdd = document.querySelector('.close_add')
let content2 = document.querySelector('.content2')
let content = document.querySelector('.content')
let container = document.querySelector('.container')

addExercise.addEventListener('click', () => {
    content2.style.display = 'block'
    container.style.backgroundColor = '#898989'
    content2.classList.add('fade') 
})
closeAdd.addEventListener('click', () => {
    content2.style.display = 'none'
    container.style.backgroundColor = 'white'
})

container.addEventListener('click', (e) => {
    console.log('click');
    if (e.target === container) {
        content2.style.display = 'none'
        document.body.style.overflow = ''
        container.style.backgroundColor = 'white'
    }
})

content2.addEventListener('click', (e) => {
    console.log('click');
    if (e.target === content2) {
        content2.style.display = 'none'
        document.body.style.overflow = ''
        container.style.backgroundColor = 'white'
    }
})
content.addEventListener('click', (e) => {
    console.log('click');
    if (e.target === content) {
        content2.style.display = 'none'
        document.body.style.overflow = ''
        container.style.backgroundColor = 'white'
    }
})

const tablisa = document.querySelector('.tablisa')
const plitka = document.querySelector('.plitka')

plitka.addEventListener('click', () => {
    console.log('click');
    location.href = '/html/tablisa.html'
})