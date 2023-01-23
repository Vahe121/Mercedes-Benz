const header = document.querySelector(`.header_anim`)
let y = pageYOffset
const head_ul = document.querySelector(`.anim_ul`)

const home = document.querySelector(`.home`)


const menu_header = document.querySelector(`.header_media`)
const menu_anim = document.querySelector(`.header_media_anim`)
menu_header.addEventListener(`click`, ()=>{
    menu_anim.classList.toggle(`_anim_media`)
})

window.addEventListener(`scroll`, ()=>{
    if(pageYOffset > y){
        y = pageYOffset
        header.classList.remove(`_anim`)
        head_ul.style.cssText = ` 
        display: none;
        `
    }
    else{
        y = pageYOffset
        header.classList.add(`_anim`)
        head_ul.style.cssText = ` 
        display: flex;
        `
    }
    menu_anim.classList.remove(`_anim_media`)

});

const header_li = document.querySelectorAll(`.header_li`)
let li_arr = []
for(let i = 0; i < header_li.length; i++){
    li_arr[i] = header_li[i]
}
li_arr.forEach((item) =>{
    item.addEventListener(`mouseover`, ()=>{
        li_arr.forEach((item) =>{
            item.classList.add(`li_hover2`)
        })
        event.target.classList=`li_hover`
    })
    item.addEventListener(`mouseout`, ()=>{
        li_arr.forEach((item) =>{
            item.classList.remove(`li_hover2`)
        })
        event.target.classList.remove(`li_hover`)
    
    })
})



const animItem = document.querySelectorAll(`.animItem`)
const animation = document.querySelectorAll(`.animation`)
const blog = document.querySelector(`.blog`)
    window.addEventListener(`scroll`, animBoxFunc);
    function animBoxFunc() {
        for (let i = 0; i < animItem.length; i++) {
            const animBox = animItem[i];
            const animBoxHeight = animBox.offsetHeight;
            const animOffset = offset(animBox).top;
            const animStart = 2

            let animBoxPoint = window.innerHeight - animBoxHeight / animStart;
            if(animBoxHeight > window.innerHeight){
                animBoxPoint = window.innerHeight - window.innerHeight / animStart
            }

            if((pageYOffset > animOffset - animBoxPoint) && pageYOffset < (animOffset + animBoxHeight)){
                animation[i].classList.add(`box_activ`)
                if(i == 6){
                    blog.classList.add(`blog_color`)
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    
}
animBoxFunc() 

console.log(123);