let currentDay = document.getElementById('currentDay')
const DateTime = luxon.DateTime;
const Duration = luxon.Duration;
let dt = DateTime.now().toLocaleString(DateTime.DATE_FULL);

const today = DateTime.local();
console.log("today", today)
let h = today.get('hour')



let ordinalNumber;
let dayToString = today.day.toString();
// determine which suffix to use on day
if (dayToString.includes('11' || '12' || '13')){
    ordinalNumber = "th"
} else if (dayToString.endsWith("1" || "31" || "21")) {
  ordinalNumber = "st";
} else if (dayToString.endsWith("2" || "22")) {
  ordinalNumber = "nd";
} else if (dayToString.endsWith("3" || "23")) {
  ordinalNumber = "rd";
} else {
  ordinalNumber = "th";
}

// display the current day in the currendDay p
currentDay.innerText =
  today.weekdayLong + ", " + today.monthLong + " " + today.day + ordinalNumber;



/* Selects each element and gives it its special hour*/

let hours = [];

let hour8 = today.set({hour: 8})
let hour9 = today.set({hour: 9})
let hour10 = today.set({hour: 10})
let hour11 = today.set({hour: 11})
let hour12 = today.set({hour: 12})
let hour1 = today.set({hour: 13})
let hour2 = today.set({hour: 14})
let hour3 = today.set({hour: 15})
let hour4 = today.set({hour: 16})
let hour5 = today.set({hour: 17})

hours.push(hour8, hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5)
console.log('hours', hours)


/* Sets the variable to obtain by element */
let hour_elements = [];
let hour08 = document.getElementById('hour8')
let hour09 = document.getElementById('hour9')
let hour010 = document.getElementById('hour10')
let hour011 = document.getElementById('hour11')
let hour012 = document.getElementById('hour12')
let hour01 = document.getElementById('hour1')
let hour02 = document.getElementById('hour2')
let hour03 = document.getElementById('hour3')
let hour04 = document.getElementById('hour4')
let hour05 = document.getElementById('hour5')

hour_elements.push(hour08, hour09, hour010, hour011, hour012, hour01, hour02, hour03, hour04, hour05);
console.log('hour elements', hour_elements)



hours.forEach(hour => {
    hour_elements.forEach(element => {
        if(hour.hour < today.hour) {
            element.style.backgroundColor = 'blue';
            element.style.color = 'white';
        } else if(hour.hour > today.hour) {
            element.style.backgroundColor = 'purple';
            element.style.color = 'white'
        } else {
            element.style.backgroundColor = 'white';
        }
        console.log(hour.hour)
    })
})


/* Each if statement runs through to check if the element is
   past: (less than/before the current hour
        properties given: 
            backgroundColor - blue;
            color - "white
    future:(greater than/after the current hour) 
        properties given: 
            backgroundColor: purple;
            color: white;
    present:(=== or really just not anything else)
        propertiess given: 
            backgroundColor: white;

*/

/* *********** Event Listener ************* */
const saveBtn = document.getElementsByClassName("saveBtn");

for (i of saveBtn) {
    i.addEventListener('click', function(event) {
        event.preventDefault();
        saveTask();
    })
}


/* ============= EventListener ============ */
const storage = window.localStorage;
const thisBetterWork = [];


/* ============== Local Storage =========== */


function saveTask() {
    
storage.setItem("hour8", hour08.value);
storage.setItem("hour9", hour09.value);
storage.setItem("hour10", hour010.value);
storage.setItem("hour11", hour011.value);
storage.setItem("hour12", hour012.value);
storage.setItem("hour1", hour01.value);
storage.setItem("hour2", hour02.value);
storage.setItem("hour3", hour03.value);
storage.setItem("hour4", hour04.value);
storage.setItem("hour5", hour05.value);
}


let userInput = storage.getItem('hour8')
hour08.innerHTML = userInput;  

hour09.innerHTML = storage.getItem('hour9')
 
 hour010.innerHTML = storage.getItem('hour10')

 hour011.innerHTML = storage.getItem('hour11')
 
 hour012.innerHTML = storage.getItem('hour12')
 
 hour01.innerHTML= storage.getItem('hour1')
 
 hour02.innerHTML= storage.getItem('hour2')

 hour03.innerHTML= storage.getItem('hour3')

 hour04.innerHTML = storage.getItem('hour4')

 hour05.innerHTML = storage.getItem('hour5')