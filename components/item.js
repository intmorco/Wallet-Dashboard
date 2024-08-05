export function Item() {
   
    const el = document.createElement('div')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')

    h3.innerHTML = "Visa"
    h4.innerHTML = "RUB"

    el.classList.add('wallet')
    el.classList.add('visa4')
    el.append(h3, h4)

   
    return el
}

