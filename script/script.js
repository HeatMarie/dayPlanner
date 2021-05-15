let currentDay = document.getElementById('currentDay')
const DateTime = luxon.DateTime;
const Duration = luxon.Duration;
let dt = DateTime.now().toLocaleString(DateTime.DATE_FULL);

const today = DateTime.local();
console.log("today", today)
let h = today.get('hour')
let daySuffix;
let dayToString = today.day.toString();
// determine which suffix to use on day
if (dayToString.endsWith("1")) {
  daySuffix = "st";
} else if (dayToString.endsWith("2")) {
  daySuffix = "nd";
} else if (dayToString.endsWith("3")) {
  daySuffix = "rd";
} else {
  daySuffix = "th";
}

// display the current day in the currendDay p
currentDay.innerText =
  today.weekdayLong + ", " + today.monthLong + " " + today.day + daySuffix;



/* Selects each element and gives it its special hour*/

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

console.log(hour5);

/* Sets the variable to obtain by element */

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

/* =============== 8AM =============== */
if (hour8.hour < today.hour) {
    hour08.style.backgroundColor = 'blue';
    hour08.style.color = 'white';
} else if (hour8.hour > today.hour){
    hour08.style.backgroundColor = 'purple';
    hour08.style.color = 'white';
} else {
    hour08.style.backgroundColor = 'white';
}

/* ============= 9AM ================= */

if (hour9.hour < today.hour) {
    hour09.style.backgroundColor = 'blue';
    hour09.style.color = 'white'
} else if (hour9.hour > today.hour){
    hour09.style.backgroundColor = 'purple';
    hour09.style.color = 'white';
} else {
    hour09.style.backgroundColor = 'white';
}

/* ============== 10AM ============== */

if (hour10.hour < today.hour) {
    hour010.style.backgroundColor = 'blue';
    hour010.style.color = 'white'
} else if (hour10.hour > today.hour){
    hour010.style.backgroundColor = 'purple';
    hour010.style.color = 'white';
} else {
    hour010.style.backgroundColor = 'white';
}

/* ============= 11AM =============== */

if (hour11.hour < today.hour) {
    hour011.style.backgroundColor = 'blue';
    hour011.style.color = 'white';
} else if (hour11.hour > today.hour){
    hour011.style.backgroundColor = 'purple';
    hour011.style.color = 'white';
} else {
    hour011.style.backgroundColor = 'white';
}


/* ============== 12PM ============= */

if (hour12.hour < today.hour) {
    hour012.style.backgroundColor = 'blue';
    hour012.style.color = 'white';
} else if (hour12.hour > today.hour){
    hour012.style.backgroundColor = 'purple';
    hour012.style.color = 'white';
} else {
    hour012.style.backgroundColor = 'white';
}

/* =========== 1PM ================ */

if (hour1.hour < today.hour) {
    hour01.style.backgroundColor = 'blue';
    hour01.style.color = 'white'
} else if (hour1.hour > today.hour){
    hour01.style.backgroundColor = 'purple';
    hour01.style.color = 'white';
} else {
    hour01.style.backgroundColor = 'white';
}

/* ========== 2pm ============== */

if (hour2.hour < today.hour) {
    hour02.style.backgroundColor = 'blue';
    hour02.style.color = 'white';
} else if (hour2.hour > today.hour){
    hour02.style.backgroundColor = 'purple';
    hour02.style.color = 'white';
} else {
    hour02.style.backgroundColor = 'white';
}

/* ================= 3pm ========== */

if (hour3.hour < today.hour) {
    hour03.style.backgroundColor = 'blue';
    hour03.style.color = 'white';
} else if (hour3.hour > today.hour){
    hour03.style.backgroundColor = 'purple';
    hour03.style.color = 'white';
} else {
    hour04.style.backgroundColor = 'white';
}

/* =========== 4pm ============= */

if (hour4.hour < today.hour) {
    hour04.style.backgroundColor = 'blue';
    hour04.style.color = 'white';
} else if (hour4.hour > today.hour){
    hour04.style.backgroundColor = 'purple';
    hour04.style.color = 'white';
} else {
    hour04.style.backgroundColor = 'white';
}

/* =========== 5PM ============ */

if (hour5.hour < today.hour) {
    hour05.style.backgroundColor = 'blue';
    hour05.style.color = 'white';
} else if (hour5.hour > today.hour){
    hour05.style.backgroundColor = 'purple';
    hour05.style.color = 'white';
} else {
    hour05.style.backgroundColor = 'white';
}





/* *********** Event Listener ************* */
const saveBtn = document.getElementsByClassName("saveBtn");

for (i of saveBtn) {
    i.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("click")
        saveTask()
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