let dropdown_btn = false
let body = window.document.querySelector("body")
let screen_size = window.innerWidth


function size() {
    screen_size = window.innerWidth

    if(screen_size > 768) {
        body.classList.remove('overflow')
    }

    else if(screen_size <= 768 && dropdown_btn) {
        body.classList.add('overflow')
    }

    console.log(screen_size)
}



function overflow() {


    if(!dropdown_btn) {
        dropdown_btn = true
    }

    else {
        dropdown_btn = false
    }
    body.classList.toggle('overflow')


    

}