/* -------------------------------------------------
                Income and Expenses Section
-------------------------------------------------- */
document.getElementById('btn-calculate').addEventListener('click', function(){
    //Income Amount
    const incomeInput = document.getElementById('income');
    const incomeAmount = incomeInput.value;
    incomeInput.value = incomeAmount;
    //Fost Cost
    const foodInput = document.getElementById('food');
    const foodCost = foodInput.value;
    foodInput.value = foodCost;
    //Rent Cost
    const rentInput = document.getElementById('rent');
    const rentCost = rentInput.value;
    rentInput.value = rentCost;
    //Clothes Cost
    const clothesInput = document.getElementById('clothes');
    const clothesCost = clothesInput.value;
    clothesInput.value = clothesCost;

    //Total Expenses/Cost 
    const expenses = document.getElementById('total-expense');
    const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
    expenses.innerText = totalExpenses;
     

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
    const savingPercentage = document.getElementById('save');
    const savingAmount = savingPercentage.value;
     
    //Saving Amount
    const savingCalc = (incomeAmount * savingAmount) / 100;
    const savings =document.getElementById('saving-amount');
    savings.innerText = savingCalc;

    //Remaining Balance after saving
    const balance = document.getElementById('balance');
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balance.innerText - savings.innerText;
}