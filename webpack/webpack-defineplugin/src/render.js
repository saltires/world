console.log('saltire_name_2', saltire_name)

export default () => {
    const element = document.createElement('h2')

    element.textContent = 'Hello World'
    element.addEventListener('click', () => {
        alert("hello webpacl")
    })

    return element
}
