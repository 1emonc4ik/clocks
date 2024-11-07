const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),

    hNum = document.querySelector('.hours'),
    mNum = document.querySelector('.minutes'),
    sNum = document.querySelector('.seconds'),
    msNum = document.querySelector('.mseconds');


function clock() {
    // console.log(new Date()); //Data = dannie, Date = data-chislo
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`
    min.style = `transform: rotate(${minutes}deg)`
    hour.style = `transform: rotate(${hours}deg)`

    hNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours() // hours/30
    mNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes() // minutes/6
    sNum.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds() // seconds/6
    msNum.innerHTML = time.getMilliseconds() < 100 ? '0' + time.getMilliseconds() : time.getMilliseconds() // seconds/6

    setTimeout(() => clock(), 100);
}
clock()

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    let link = links[i]
    link.addEventListener("click", (ev) => {
        ev.preventDefault()
        for (let x = 0; x < tabs.length; x++) {
            let tab = tabs[x];
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        tab(link, tabs[i])
    })
}

function tab(link, tab) {
    link.classList.add('active')
    tab.classList.add('active')
}

//dz secundomer (моё решение)
/* function stopwatchStart() {
    let seconds = 0,
        minutes = 0,
        hours = 0;

    seconds++
    if (seconds <= 60) {
        seconds++
        console.log(seconds)
    }
    else {
        minutes++
        if (minutes <= 60) {
            minutes++
            console.log(minutes)

        }
        else {
            hours++
            if (hours >= 96) {
                alert("превышен максимальный допустимый порог. Для повышения порога - купите подписку")
            }
            else {
                hours++
            }
        }
    }
    const timeOut = setTimeout(() => stopwatchStart(), 1000);

    // NAchalo drugoy funksii
    stopwatchStop = () => {
        clearTimeout(timeOut)
        alert("test")
    }
    // NAchalo drugoy funksii2
    stopwatchClear = () => {

        alert("test")
    }
}

sBtn.addEventListener("click", () => {
    if (sBtn.textContent == "start") {
        stopwatchStart()
        sBtn.textContent = "stop"
    }
    else if (sBtn.textContent == "stop") {
        stopwatchStop()
        sBtn.textContent = "clear"
    }
    else {
        stopwatchClear()
        sBtn.textContent = "start"
    }
}) 
*/


const sState = document.querySelector('.tabsLink__span'),
    sBtn = document.querySelector('.stopwatch__btn'),
    sSeconds = document.querySelector('.stopwatch__seconds'),
    sMinutes = document.querySelector('.stopwatch__minutes'),
    sHours = document.querySelector('.stopwatch__hours'),
    sPlay = document.querySelector('.continue');

sPlay.style.display = "none"


window.addEventListener("click", (ev) => {
    if (ev.target.innerHTML === "start") {
        sBtn.textContent = "stop"
        sState.classList.add("active")
        let sec = 0
        setTimeout(() => stopwatch(sBtn, sec), 100);
    }
    else if (ev.target.innerHTML === "stop") {
        // stopwatchStop()
        sBtn.textContent = "clear"
        sState.classList.remove("active")
        sState.classList.add("active_clear")
        sPlay.style.display = "block"
    }
    else if (ev.target.innerHTML === "clear") {
        sPlay.style.display = "none"
        sBtn.innerHTML = "start"
        sState.classList.remove("active_clear")
        sSeconds.innerHTML = sMinutes.innerHTML = sHours.innerHTML = 0
    }
    else if (ev.target.classList.contains("continue")){
        sState.classList.remove("active_clear")
        sState.classList.add("active")
        sBtn.innerHTML = "stop"
        sPlay.style.display = "none"
        let sec = sSeconds.innerHTML
        setTimeout(() => stopwatch(sBtn, sec), 100);
        }
})

function stopwatch(btn, sec) {
    if (btn.innerHTML == 'stop') {
        if (sec === 59) {
            sec = 0
            sSeconds.innerHTML = sec
            if (+sMinutes.innerHTML == 59) {
                sMinutes.innerHTML = 0
                sHours.innerHTML++
                if (sHours.innerHTML >= 3) {
                    alert("превышен максимальный допустимый порог. Для повышения порога - купите подписку")
                    sHours.innerHTML = 0
                }
                else {
                    sHours.innerHTML++
                }
            } else {
                sMinutes.innerHTML++
            }
        }
        else {
            sec++
            sSeconds.innerHTML = sec
        }
        setTimeout(() => stopwatch(btn, sec), 1000);
        
    }

}