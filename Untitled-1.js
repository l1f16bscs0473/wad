var balancee=document.getElementById("balance");

var Account=
    {title:"Asad GUjjar",
        currency:"PK_RS",
        balance:00,
        IBAN:"PKN143583"};

document.getElementById("title").innerHTML=Account.title;
document.getElementById("currency").innerHTML=Account.currency;
document.getElementById("balance").innerHTML=Account.balance;
document.getElementById("IBAN").innerHTML=Account.IBAN;

function deposit()
{
    var d=document.getElementById("Deposit Amount");
    if(event.keyCode===13){
        Account.balance =Account.balance + parseInt(document.getElementById("deposit").value);
        document.getElementById("balance").innerHTML=Account.balance;
    }
}

function withdraw()
{
    var d=document.getElementById("Deposit Amount");
    if(event.keyCode===13){
        Account.balance =Account.balance - parseInt(document.getElementById("withdraw").value);
        document.getElementById("balance").innerHTML=Account.balance;
    }
}