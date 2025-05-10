const myCheckBox = document.getElementById('myCheckBox');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const paypal = document.getElementById('paypal');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');
const btn = document.getElementById('btn');

btn.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = 'You are subscribed:)'
    }else{
        subResult.textContent = 'You are not subscribed:('
    }

    if(visa.checked){
        paymentResult.textContent = 'You are payment with visa'
    }else if(mastercard.checked){
        paymentResult.textContent = 'You are payment with mastercard'
    }else if(paypal.checked){
        paymentResult.textContent = 'You are payment with paypal'
    }else{
        paymentResult.textContent = 'Please select a payment method'
    }
}
