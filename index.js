const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    const billAmountNew = parseFloat(billAmount.value);
    const cashGivenNew = parseFloat(cashGiven.value);
    hideMessage();
    
    if(billAmountNew.valueOf()  > 0) {

        if (cashGivenNew.valueOf() >= billAmountNew.valueOf()) {

            

            const amountToBeReturned = cashGivenNew.valueOf() - billAmountNew.valueOf();
            calculateChange(amountToBeReturned);
            
            
        } else {
            showMessage("Do you wanna wash plates?");
            
        }
        

    } else {
        
        showMessage("Invalid Bill Amount");
    }
}
);

function calculateChange(amountToBeReturned) {

    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc( amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;        
    }

}
function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
