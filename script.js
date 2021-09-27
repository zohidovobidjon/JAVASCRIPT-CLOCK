const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')


function clock() {
    /* 
        new Date() - получает с ПК время и дату
        getSeconds() - получает секунды
        getMinutes() - получает минуты
        getHours() - получает часы 

    */

    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30


    hour.style = `transform: rotate(${hours}deg)`
    min.style = `transform: rotate(${minutes}deg)`
    sec.style = `transform: rotate(${seconds}deg)`


    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()


    // Рекурсия - это когда функция вызывается внутри себя


    setTimeout(() => clock(), 1000)
}


clock()



const links = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem')



for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault()
        removeActiveClass()
        addActiveClass(links[i], content[i])

    })
}





function removeActiveClass() {
    links.forEach(link => {
        link.classList.remove('active')
    })

    content.forEach(item => {
        item.classList.remove('active')
    })
}

function addActiveClass(link, content) {
    link.classList.add('active')
    content.classList.add('active')
}



const stopHours = document.querySelector('.stopwatch__hours'),
     stopMin = document.querySelector('.stopwatch__minutes'),
     stopSec = document.querySelector('.stopwatch__seconds'),
     stopBtn = document.querySelector('.stopwatch__btn')
     
     
     
     stopBtn.addEventListener('click', function () {
        if (stopBtn.innerHTML == 'start') {
            stopBtn.innerHTML = 'stop'
        }else if (stopBtn.innerHTML == 'stop') {
            stopBtn.innerHTML = 'clear'
        }else if (stopBtn.innerHTML == 'clear' ) {
            stopBtn.innerHTML = 'start'
        }
     })
     
     
     function second() {
         if (stopBtn.innerHTML == 'stop') {
            stopSec.innerHTML++;
            if (stopSec.innerHTML > 59) {
                stopSec.innerHTML = 0
                stopMin.innerHTML++
                if (stopMin.innerHTML > 59) {
                    stopMin.innerHTML = 0
                    stopHours.innerHTML++
                }
            }
         }else if (stopBtn.innerHTML == 'start') {
            stopSec.innerHTML = 0
            stopMin.innerHTML = 0
            stopHours.innerHTML = 0
         }
        setTimeout(() => second(), 1000);
     }
     second()
