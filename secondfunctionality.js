//add entry using DOM   Manipulation
function addingEntrys(element, el) {

    const listentry = document.createElement('li');
    const viewEntry = document.createElement("strong");
    listentry.innerText = element.value;
    const listentryamount = document.createElement('span')
    listentryamount.innerText = ` ${el.value}$`;
    listentryamount.style.padding = '60px'
    listentry.appendChild(listentryamount)
    listentry.appendChild(viewEntry);
    ule.appendChild(listentry);
    outcomes.innerText = `${el.value} $`



}
// controls all operation in relation to adding entry, clear the input field and upadting the balance

add_income_btns.addEventListener('click', () => {

    addingEntrys(expense_Title, expense_amount)
    clear(expense_Title, expense_amount)

    updateBalance(expense)

    let calculations = parseInt(incomes.innerText) - parseInt(outcomes.innerText)
    amount.innerText = `${calculations}$`


}
)