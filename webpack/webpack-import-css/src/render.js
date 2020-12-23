import './css/render.css'

export default () => {
    const element = document.createElement('h2')

    element.textContent = 'Hello World'
    element.classList.add('headering')
    element.addEventListener('click', () => {
        alert("hello webpacl")
    })

    return element
}
