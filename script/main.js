

const step1 = document.getElementById('step1')
const step2 = document.getElementById('step2')
const step3 = document.getElementById('step3')
const step4 = document.getElementById('step4')
const step5 = document.getElementById('step5')

function showStep2() {
    
    step1.classList.add('hidden');
    step2.classList.remove('hidden');

}
function showStep1() {
   
    step1.classList.remove('hidden');
    step2.classList.add('hidden');

}
 
function showStep3() {
    
    step2.classList.add('hidden');
    step3.classList.remove('hidden');

}
function backToStep2() {
    showStep2()
    step3.classList.add('hidden');
}

function showStep4() {
    
    step3.classList.add('hidden');
    step4.classList.remove('hidden');

}

function backToStep3() {
    showStep3()
    step4.classList.add('hidden');
}

function showStep5() {
   
    step4.classList.add('hidden');
    step5.classList.remove('hidden');
    setTimeout(()=>{
        step5.classList.add('hidden') 
        showStep1()}, 3000)

}


