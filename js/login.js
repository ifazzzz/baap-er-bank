// step-1: add event handler with submit button clicked
document.getElementById('btn-submit').addEventListener('click', function(){
// step-2: get email address inside the email input field
// always remeber to use .value to get text from an inout field
const emailfield = document.getElementById('email-use');
const email = emailfield.value;
// step-3: get password
// 3.a : set id on the html element
// 3.b : get the element
// 3.c : get the value from the element
const passwordfield = document.getElementById('user-password');
const password = passwordfield.value;
// step-4: verify valid user or not
if (email === 'ifaz@gmail.com' && password === 'marakha360') {
    // use window.location to go to another field
    window.location.href = 'bank.html';
}
else{
    alert('mara khao miya password janona')
}
})