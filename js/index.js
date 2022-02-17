/* -------------------------------------------------
                Income and Expenses Section
-------------------------------------------------- */
document.getElementById('btn-calculate').addEventListener('click', function(){
    const incomeInput = document.getElementById('income');
    // console.log(incomeInput)
    const incomeAmount = incomeInput.value;
    // console.log(incomeAmount)
    incomeInput.value = incomeAmount;
    // console.log(incomeAmount);
    const foodInput = document.getElementById('food');
    const foodCost = foodInput.value;
    // console.log(foodCost);
    foodInput.value = foodCost;
    // console.log(foodCost);

    const rentInput = document.getElementById('rent');
    const rentCost = rentInput.value;
    rentInput.value = rentCost;
    // console.log(rentCost)
    const clothesInput = document.getElementById('clothes');
    const clothesCost = clothesInput.value;
    clothesInput.value = clothesCost;
    // console.log(clothesCost)
    //Total Expenses 
    const expenses = document.getElementById('total-expense');
    const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
    expenses.innerText = totalExpenses;
    console.log(totalExpenses)
    //Balance after expenses
    const balance = document.getElementById('balance');
    const balanceAmount = parseFloat(incomeAmount) - totalExpenses;
    balance.innerText = balanceAmount;
})

/*---------------------------------------------------------
                        Saving Section
----------------------------------------------------------*/
function savings(){
    const incomeInput = document.getElementById('income');
    const incomeAmount = incomeInput.value;
    // incomeInput.value = parseFloat(incomeAmount);
    // console.log(incomeAmount);
    const savingPercentage = document.getElementById('save');
    const savingAmount = savingPercentage.value;
    // savingPercentage.value = parseFloat(savingAmount)
    // console.log(savingAmount);
    //Saving Amount
    const savingCalc = (incomeAmount * savingAmount) / 100;
    // console.log(savingCalc);
    const savings =document.getElementById('saving-amount');
    savings.innerText = savingCalc;
    //Remaining Balance
    const balance = document.getElementById('balance');
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balance.innerText - savings.innerText;
}