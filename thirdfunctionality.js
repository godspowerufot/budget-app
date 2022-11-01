
//add entry using DOM   Manipulation
function addingEntry(element, el) {

    const listentry = document.createElement('li');
    const viewEntry = document.createElement("strong");
    listentry.innerText = element.value;
    const listentryamount = document.createElement('span')
    listentryamount.innerText = ` ${el.value} $`

    listentryamount.style.padding = '60px'

    listentry.appendChild(listentryamount)
    listentry.appendChild(viewEntry);
    ul.appendChild(listentry);
    incomes.innerText = `${el.value} $`
    /*  this  code segment controls the addition of the income and upadting it to the balance */
    let calculations = parseInt(incomes.innerText) + parseInt(amount.innerText);
    amount.innerText = `${calculations}$`
}


// controls all operation in relation to adding entry, clear the input field and upadting the balance

add_income_btn.addEventListener('click', function () {


    addingEntry(income_Title, income_amount)
    clear(income_Title, income_amount)
    updateBalance(income)
})