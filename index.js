import { Transaction } from "./components/transaction.js";
import { Item } from "./components/item.js";


function addItem() {
    const add_el = document.querySelector('main .wallets h2')
    const container = document.querySelector('.wallet-container')

    add_el.onclick = () =>{
        const newItem = Item();
        container.append(newItem)
    }
} 
addItem() 


function addInfo() {
    const show_btn = document.querySelector('.transactions h2')
    const tbody = document.querySelector('.transactions tbody')


    show_btn.onclick = () =>{
        const newInfo = Transaction()
        tbody.append(newInfo)
    }
}
addInfo() 