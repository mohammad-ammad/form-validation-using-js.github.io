console.log('form validation');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
//alert hide
$('#success').hide();
$('#failure').hide();
// console.log(username,email,phone);
let user = false;
let emails = false;
let phone_no = false;
//validation.
//username
username.addEventListener('blur', () =>{
    console.log('username');
    const regex = /^([a-zA-Z]){5,9}([0-9]){1,5}$/;
    let str = username.value;
    if(regex.test(str)){
        console.log('right');
        username.classList.add('is-valid');  
        username.classList.remove('is-invalid');
        user = true;
    }
    else{
        console.log('wrong');
        username.classList.add('is-invalid');
        username.classList.remove('is-valid');
        user = false;
    }
    
    
})

//email
email.addEventListener('blur', () =>{
    console.log('email');
    const regax = /^([a-zA-Z0-9]+)@([a-z]+)\.([a-z]){2,7}$/;
    let str = email.value;
    if(regax.test(str)){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        emails = true;
    }
    else{
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        emails = false;
    }
    
})

//phone
phone.addEventListener('blur', () =>{
    console.log('phone');
    const regax = /^([0-9]){11}$/;
    let str = phone.value;
    if(regax.test(str)){
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        phone_no = true;
    }
    else{
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        phone_no = false;
    }
})

//submit
let mybtn = document.getElementById('mybtn');
let success = document.getElementById('success');
let failure = document.getElementById('failure');
mybtn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(user && emails && phone_no){
        console.log('yes');
        success.classList.add('show');
        $('#success').show();
        $('#failure').hide();
    }
    else{
        console.log('no');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
})