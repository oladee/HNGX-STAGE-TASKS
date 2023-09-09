let currentDay = document.getElementById('currentDay')
let utc = document.getElementById('utc');

// const arrayOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']
// let weekDay = new Date().getDay()
currentDay.innerText = new Date().toUTCString()



setInterval(()=> {
    let currentTime = Date.now()
    
    utc.innerText = currentTime 
},1000)
