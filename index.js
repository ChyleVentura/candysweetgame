const closeBtn = document.querySelector('.close-button')
const popupWindow = document.querySelector('.popup-contact-form')
const heroBtn = document.querySelector('.hero button')
const popupWrapper = document.querySelector('.popup-wrapper')

closeBtn.addEventListener('click', e =>{
    popupWindow.classList.remove("open-popup")
    popupWrapper.setAttribute('style','display:none')
})

heroBtn.addEventListener('click', e=>{
    popupWindow.classList.add("open-popup")
    popupWrapper.setAttribute('style','display:block')
})
