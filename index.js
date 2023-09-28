const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const billAmountValue = parseFloat(billAmount.value);
const cashGivenValue = parseFloat(cashGiven.value);

// to check if your button are working
// checkButton.addEventListener("click", ()=> console.log("clicked"));

// checkButton.addEventListener("click", function(){
//     console.log(billAmount.value);
// });


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

    if (billAmount.Value <= 0){
        showMessage("Enter valid number");

    }
    else if (billAmount.Value === cashGiven.Value){
        showMessage("return no change");

    }
    else if (cashGiven.Value <= billAmount.Value){
        showMessage("You can wash plate");

    }

    else {
        const amountToBeReturned = cashGiven.value - billAmount.value;
                 calculateChange(amountToBeReturned);

    }



    // if (cashGiven.value === billAmount.value) {
    //     showMessage("Give no Change to customer");

    // }
    
    // if(billAmount.value  > 0) {
        

        

    //     if (cashGiven.value > billAmount.value) {
            

    //         const amountToBeReturned = cashGiven.value - billAmount.value;
    //         calculateChange(amountToBeReturned);
            
            
    //     } else {
    //         showMessage("Do you wanna wash plates?");
            
    //     }
        

    // } else {
        
    //     showMessage("Invalid Bill Amount");
    // }
});

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