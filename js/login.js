console.log("Welcome to Simple Interactive Bank");
document.getElementById('btn-submit').addEventListener('click', function(){
    
    const emailField=document.getElementById('email');
    const email=emailField.value;
    //console.log(email);
    const passwordField=document.getElementById('password');
    const password=passwordField.value;
     //console.log(password);
    if( email ==='ahsan.cse.101792@gmail.com' && password==='8840'){
        window.location.href='bank.html';
}
else
{
    alert('invalid user');
}

});







