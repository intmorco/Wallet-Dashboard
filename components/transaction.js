export function Transaction() {
    /* <tbody>
        <tr>
            <td>123212</td>
            <td>VISA</td>
            <td>Автомобиль</td>
            <td>414,000,000</td>
            <td>4 дня назад</td>
        </tr>
    
    </tbody>
                
        <a href="#" class="view-all">Смотреть все оплаты</a> */



    const tr = document.createElement('tr')
    const id = document.createElement('td')
    const pocket = document.createElement('td')
    const category = document.createElement('td')
    const sum = document.createElement('td')
    const when = document.createElement('td')


    id.innerHTML =  123212
    pocket.innerHTML = "VISA"
    category.innerHTML = "Автомобиль"
    sum.innerHTML = "414,000,000"
    when.innerHTML = "4 дня назад"

    tr.append(id,pocket,category,sum,when)

    console.log(id)
    return tr
}