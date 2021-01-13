console.log('saltire_name_2', saltire_name)

export default () => {
    const element = document.createElement('h2')

    element.textContent = 'Hello World'
    element.addEventListener('click', () => {
        alert("hello webpacl")
    })

    return element
    // return 语句后的代码都会被 Tree Shaking 认为是无用代码被清除
    console.log('dead-code')
}

// Button 函数在 index.js 中未被引用，因此，也会被Tree Shaking 认为是无用代码被清除
export function Button() {
    const ele = document.createElement('h3')

    element.textContent = 'Hello World'

    return element
}
