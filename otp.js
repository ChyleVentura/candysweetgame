const inputs = document.querySelectorAll('.otp-input input')
const verifyBtn = document.querySelector('.verify-btn')

inputs.forEach(input => {
    let lastInput = 0
    input.onkeyup = (e) =>{
        const currentInput = e.target
        const nextInput = input.nextElementSibling
        const prevInput = input.previousElementSibling

        console.log(input.value)
        
        if (input && e.keyCode === 8){
            if(lastInput === 1){
                prevInput.value = ''
                prevInput.focus()
            }
            verifyBtn.setAttribute('disabled', true)
            lastInput = 1
        }else {
            const reg = /^[0-9]+$/
            if(!reg.test(currentInput.value)){
                currentInput.value = currentInput.value.replace(/\D/,'')
            }else if(currentInput.value){
                if(nextInput){
                    nextInput.focus()
                }else{
                    verifyBtn.removeAttribute('disabled')
                    lastInput = 0
                }
            }
        }
    }
})