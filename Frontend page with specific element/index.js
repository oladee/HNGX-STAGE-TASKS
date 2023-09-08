let currentDay = document.getElementById('currentDay')
let utc = document.getElementById('utc');

const arrayOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']
let weekDay = new Date().getDay()
currentDay.innerText = arrayOfDays[weekDay]

function validUTCDate(date){
    const hours = String(date.getUTCHours()).padStart(2,'0');
    const minutes = String(date.getUTCMinutes()).padStart(2,'0');
    const seconds = String(date.getUTCSeconds()).padStart(2,'0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3,'0');

    return `${hours}:${minutes}:${seconds}:${milliseconds}`
}

setInterval(()=> {
    const currentTime = new Date()
    
    utc.innerText = validUTCDate(currentTime)
},1000)
