// declaring global variables to use 

let expense_tab = document.querySelector(".expense-tab");
let income_tab = document.querySelector(".income-tab");
const expense = document.querySelector('#expense')
const income = document.querySelector('#income')
let element;
const amount = document.querySelector('.balance-amount');
const date_element = document.querySelector('.DATE');
const incomes = document.querySelector('.income-amount');
const outcomes = document.querySelector('.outcome-amount');
const expense_Title = document.querySelector('#expense-title')
const expense_amount = document.querySelector('#expense-amount')
let ul = document.querySelector('.list')
let listting = document.querySelector('#list')
let ule = document.querySelector('.lists')

const income_Title = document.querySelector('#income-title')
const income_amount = document.querySelector('#incomes-amount')

const add_income_btn = document.querySelector('#add-income')
const add_income_btns = document.querySelector('#add-incomes')
//toggling between tabsand switching between tabs
expense_tab.addEventListener('click', function () {
    active(expense_tab)
    inactive(income_tab)
    show(expense)
    hide(income)

})
income_tab.addEventListener('click', function () {
    active(income_tab)
    inactive(expense_tab)
    show(income)
    hide(expense)

})
function active(element) {
    element.style.opacity = 1

}
function inactive(element) {
    element.style.opacity = 0.3

}
console.log(amount)

function show(element) {
    element.style.display = "block"
}
function hide(element) {
    element.style.display = "none"
}
function clear(element, el) {
    element.value = '';
    el.value = '';
}

// working with Dom manipulation

function updateBalance(element, el) {
    let sum = 0
    let total = 0
    // perform the calculations depending on the desicion on the the argument of the function and calling it
    //anywhere in the code segment

    if (element === income) {
        let el = ul
        for (let item of el.children) {

            const valueelement = item.querySelector('span')
            let value = parseInt(valueelement.innerText)

            sum = sum + value


        }
        incomes.innerText = `${sum} $`
        if (localStorage.getItem('income_children' === null)) {
            let income_children = [...el.children]
            console.log(income_children)
        }

        else {
            JSON.parse(localStorage.getItem("income_children"));
        }

    }

    else if (element === expense) {
        let el = ule
        for (let item of el.children) {

            const valueelement = item.querySelector('span')
            let value = parseInt(valueelement.innerText)
            sum = sum + value

            outcomes.innerText = `${sum} $`
        }
    }





}
// date functions to display date element and formating it
let dateing = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
})
date_element.innerText = `${dateing}`

