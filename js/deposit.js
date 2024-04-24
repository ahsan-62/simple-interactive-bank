document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    depositField.value=' ';

    const depositTotal=document.getElementById('deposit-total');
    const previousTotal=depositTotal.innerText;

    const depositTotalAll=parseFloat(previousTotal)+newDepositAmount;
    depositTotal.innerText=depositTotalAll;

    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalString=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalString);
    const newBalanceTotal=previousBalanceTotal+newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;

});