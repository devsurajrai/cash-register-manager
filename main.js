let enterBtn = document.querySelector(".cash-reg__btn--enter")
let resetBtn = document.querySelector(".cash-reg__btn--reset")
let returnAmount = document.querySelector(".cash-reg__output")
let customerAmount = document.querySelector(".cash-reg__input-customer")
let receivedAmount = document.querySelector("#received-amount")
let billAmount = document.querySelector("#bill-amount")
let billAmountError = document.querySelector(".cash-reg__input--bill-error")
let receivedAmountError = document.querySelector(".cash-reg__input--customer-error")
let twoThousand = document.querySelector('#two-thousand')
let fiveHundred = document.querySelector('#five-hundred')
let hundred = document.querySelector('#hundred')
let twenty = document.querySelector('#twenty')
let ten = document.querySelector('#ten')
let five = document.querySelector('#five')
let balAmount = document.querySelector('#total-amount')
let one = document.querySelector('#one')

notesArr = [2000, 500, 100, 20, 10, 5, 1];
notesSelectorsArr = [twoThousand, fiveHundred, hundred, twenty, ten, five, one];

function changeCalculation() {

    bal = parseInt(receivedAmount.value) - parseInt(billAmount.value)
    let totalBal = bal
    balAmount.innerHTML = totalBal

    for (i = 0; i < notesArr.length; i++) {
        let noOfNotes = 0
        if (bal >= notesArr[i]) {
            while (bal >= notesArr[i]) {
                bal -= notesArr[i]
                noOfNotes++
            }
            console.log(noOfNotes)
            notesSelectorsArr[i].innerHTML = noOfNotes
        }
    }
}

let isBillAmount = false;
let enterEventHandler = () => {
    if (isBillAmount == false) {
        if (parseInt(billAmount.value) > 0) {
            customerAmount.classList.add('display-block')
            billAmountError.innerHTML = ''
            isBillAmount = true
        } else {
            billAmountError.innerHTML = "Error: Please Enter A Valid Amount"
        }
    } else {
        if (parseInt(receivedAmount.value) === parseInt(billAmount.value)) {
            receivedAmountError.innerHTML = "Nothing To Be Returned ! Please Thank The Customer"
            receivedAmountError.style.fontSize = "20px"
            receivedAmountError.style.color = "white"
        } else if (parseInt(receivedAmount.value) > parseInt(billAmount.value)) {
            returnAmount.classList.add("display-block")
            receivedAmountError.innerHTML = ''
            resetBtn.classList.add('display-inline')
            changeCalculation()
        } else {
            if (parseInt(receivedAmount.value) < parseInt(billAmount.value)) {
                if (receivedAmount.value) {
                    receivedAmountError.innerHTML = "Error: Entered Value is Less Than Bill Amount"
                }
            }
        }
    }
}


enterBtn.addEventListener('click', enterEventHandler)
resetBtn.addEventListener('click', () => window.location.reload())