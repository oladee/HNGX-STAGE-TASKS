let currentDay = document.getElementById('currentDay')
let utc = document.getElementById('utc');

const arrayOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']
let weekDay = new Date().getDay()
currentDay.innerText = arrayOfDays[weekDay]



setInterval(()=> {
    let currentTim = new Date().getTime()
    
    utc.innerText = currentTim.toString()
},1000)
