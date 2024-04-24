document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
    withdrawField.value=" ";
     

    const withdrawTotal=document.getElementById('withdraw-total');
    const previousTotal=withdrawTotal.innerText;

    const withdrawTotalAll=parseFloat(previousTotal)+newWithdrawAmount;
    withdrawTotal.innerText=withdrawTotalAll;

    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalString=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalString);
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    balanceTotal.innerText=newBalanceTotal;
})