let currentDay = document.getElementById('currentDay')
const DateTime = luxon.DateTime;
const Duration = luxon.Duration;
let dt = DateTime.now().toLocaleString(DateTime.DATE_FULL);

let saveBtn = document.getElementsByClassName('saveBtn');


currentDay.innerHTML = dt;

const today = DateTime.local();
console.log("today", today)
let h = today.get('hour')

/* TODO: Check to see if this can become an array of some kind */

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

/*TODO: Again, find a better way to do this */

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



/* TODO: FIND A LOOP FOR THIS. BUT IF NO LOOP IS FOUND *SHRUG* I guess it's done? */

if (hour8.hour < today.hour) {
    hour08.style.backgroundColor = 'blue';
} else if (hour8.hour > today.hour){
    hour08.style.backgroundColor = 'purple';
} else {
    hour08.style.backgroundColor = 'white';
}

if (hour9.hour < today.hour) {
    hour09.style.backgroundColor = 'blue';
} else if (hour9.hour > today.hour){
    hour09.style.backgroundColor = 'purple';
} else {
    hour09.style.backgroundColor = 'white';
}

if (hour10.hour < today.hour) {
    hour010.style.backgroundColor = 'blue';
} else if (hour10.hour > today.hour){
    hour010.style.backgroundColor = 'purple';
} else {
    hour010.style.backgroundColor = 'white';
}

if (hour11.hour < today.hour) {
    hour011.style.backgroundColor = 'blue';
} else if (hour11.hour > today.hour){
    hour011.style.backgroundColor = 'purple';
} else {
    hour011.style.backgroundColor = 'white';
}


if (hour12.hour < today.hour) {
    hour012.style.backgroundColor = 'blue';
} else if (hour12.hour > today.hour){
    hour012.style.backgroundColor = 'purple';
} else {
    hour012.style.backgroundColor = 'white';
}

if (hour12.hour < today.hour) {
    hour012.style.backgroundColor = 'blue';
} else if (hour12.hour > today.hour){
    hour012.style.backgroundColor = 'purple';
} else {
    hour012.style.backgroundColor = 'white';
}

if (hour1.hour < today.hour) {
    hour01.style.backgroundColor = 'blue';
} else if (hour1.hour > today.hour){
    hour01.style.backgroundColor = 'purple';
} else {
    hour01.style.backgroundColor = 'white';
}

if (hour2.hour < today.hour) {
    hour02.style.backgroundColor = 'blue';
} else if (hour2.hour > today.hour){
    hour02.style.backgroundColor = 'purple';
} else {
    hour02.style.backgroundColor = 'white';
}

if (hour3.hour < today.hour) {
    hour03.style.backgroundColor = 'blue';
} else if (hour13.hour > today.hour){
    hour03.style.backgroundColor = 'purple';
} else {
    hour04.style.backgroundColor = 'white';
}

if (hour4.hour < today.hour) {
    hour04.style.backgroundColor = 'blue';
} else if (hour4.hour > today.hour){
    hour04.style.backgroundColor = 'purple';
} else {
    hour04.style.backgroundColor = 'white';
}



if (hour5.hour < today.hour) {
    hour05.style.backgroundColor = 'blue';
} else if (hour5.hour > today.hour){
    hour05.style.backgroundColor = 'purple';
} else {
    hour05.style.backgroundColor = 'white';
}





/* *********** Event Listener ************* */

