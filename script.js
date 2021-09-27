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


    

     
     

//объявляем переменные
// var base = 60;
// var clocktimer, dateObj, dh, dm, ds, ms;
// var readout = '';
// var h = 1,
//   m = 1,
//   tm = 1,
//   s = 0,
//   ts = 0,
//   ms = 0,
//   init = 0;

//функция для очистки поля
// function ClearСlock() {
//   clearTimeout(clocktimer);
//   h = 1;
//   m = 1;
//   tm = 1;
//   s = 0;
//   ts = 0;
//   ms = 0;
//   init = 0;
//   readout = '00:00:00';
//   document.MyForm.stopwatch.value = readout;
// }

//функция для старта секундомера


/* function StartTIME() {
  var cdateObj = new Date();
  var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
  if (t > 999) {
    s++;
  }
  if (s >= (m * base)) {
    ts = 0;
    m++;
  } else {
    ts = parseInt((ms / 100) + s);
    if (ts >= base) {
      ts = ts - ((m - 1) * base);
    }
  }
  if (m > (h * base)) {
    tm = 1;
    h++;
  } else {
    tm = parseInt((ms / 100) + m);
    if (tm >= base) {
      tm = tm - ((h - 1) * base);
    }
  }
  ms = Math.round(t / 10);
  if (ms > 99) {
    ms = 0;
  }
  if (ms == 0) {
    ms = '00';
  }
  if (ms > 0 && ms <= 9) {
    ms = '0' + ms;
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
    ds = '00';
  }
  dm = tm - 1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
    dm = '00';
  }
  dh = h - 1;
  if (dh > 0) {
    if (dh < 10) {
      dh = '0' + dh;
    }
  } else {
    dh = '00';
  }
  readout = dh + ':' + dm + ':' + ds;
  document.MyForm.stopwatch.value = readout;
  clocktimer = setTimeout("StartTIME()", 1);
} */

//Функция запуска и остановки
// function StartStop() {
//   if (init == 0) {
//     ClearСlock();
//     dateObj = new Date();
//     StartTIME();
//     init = 1;
//   } else {
//     clearTimeout(clocktimer);
//     init = 0;
//   }
// }