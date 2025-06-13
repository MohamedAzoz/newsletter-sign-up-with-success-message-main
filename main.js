// "use strict"

let container=document.querySelector('.container')
let container__Success=document.querySelector('.container__Success')
let container__Success__email=document.querySelector('.container__Success__email')
let email=document.getElementById('email')
let invalid_email=document.getElementById('invalid_email')
let submit=document.getElementById('submit')


// function send() {
//     let pattern=/\w+@\w+\.com/g;
//     if(email.value==''){
//         container__Success.classList.replace('show','hidden')
//         container.classList.replace('hidden','show')
//         email.classList.replace('correct','error')
//         console.log("false");
//     }
//     else if((pattern.test(email.value))==false){
//         container__Success.classList.replace('show','hidden')
//         container.classList.replace('hidden','show')
//         email.classList.replace('correct','error')
//         console.log("false");
//     }
//     else{
//         container__Success.classList.replace('hidden','show')
//         container.classList.replace('show','hidden')
//         email.classList.replace('error','correct')
//         console.log("true");
//     }
// }


submit.addEventListener('click',function(){
    let value=email.value.trim()
    let em=/\w+@\w+\.com/ig;

    if(em.test(email.value) && value!=''){
        container.classList.replace('show','hidden');
        container__Success.classList.replace('hidden','show');
        invalid_email.classList.add('hidden');
        container__Success__email.textContent=value
        console.log("true");
    }
    else{
        container__Success.classList.replace('show','hidden');
        container.classList.replace('hidden','show');
        // email.classList.add('error');
        email.style.color='hsl(4, 100%, 67%)';
        email.style.border='0.125rem solid hsl(4, 100%, 67%)';
        email.style.backgroundColor='hsla(4, 93.40%, 88.00%, 0.60)';
        invalid_email.classList.remove('hidden');
        console.log("false");
    }
});
