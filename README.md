# dayPlanner
Making a thing that makes me wish I was a little more organized. I should really consider using a day planner, but I've tried, I failed, so the whole let's start it up again feels a little mute. I digress. Anywho, about the code . . . 

## The Assignment

### Third-Party APIs: Work Day Scheduler

#### Task

- Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. 

- This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

- Use Luxon library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

#### Acceptance Criteria

- When the user opens the planner
    - the current day is displayed at the top of the calendar

- When the user scrolls down
    - they are presented with timeblocks for standard business hours

- When the user view the timeblocks for that day
    - each timeblock is color coded to indicate whether it is in the past, present, or future

- When the user clicks into a timeblock
    - they are able to enter an event

- When the user clicks the save button for that timeblock
    - the text for that event is saved in local storage

- When the user refreshes the page
    - the saved events persist

## The Results

<img src="./img/Capture.JPG">
<img src="./img/Capture2.JPG">


## Link to the Website 

https://heatmarie.github.io/dayPlanner/


## Comments 

So here we have it. A new day planner that I should really consider using. Will I? Probably not, and that is only because I struggle to actually plan things. So how did this project go? 

The first mission for me was making sure I understood luxon and putting it into the code. Surprisingly, after a view reads the process went smoothly.  

I got stuck on trying to loop through all the things. On Thursday night, I decided it was time to just make things work. There is no reason why I can't go back when I have the time to clean it up and make the code look pretty. 

It was in this project that I really understood what it means to first make a MVP (minimum viable product). I do believe that if I would have got things working first, then went back to figure out a better way to do things, I wouldn't have struggled so much. See, there is that fear of failing and never finishing things that causes anxiety and then you begin to question if you know what you are doing. 

In the end there is always something to learn, whether it is more about how certain code works, or the how to mentally get around the struggles. Either way, it's about learning something, isn't it? 

Update: 1/14/2022

It's amazing what time and just a little more experience can do. In the recent update to code, I found a few loops that seem to be working all nice and pretty. What took me days to figure out before is now taking me hours. There is still much progress that can be done and way more to learn. 

I ended up running pushing the hours and the elements into two arrays. From there, I doubled up a forEach loop on the hours and hour elements with an if statement to change the style for each element (lines 82 - 94). 

The code was cleaned up more during the local storage where the save function now contains a for loop, creating the key from the element's index value (because we used the array), and the name of the element. The value of course, is the elements index value. 

To get the items from storage again we did a forEach loop utilizing the element and the name. 

## Technologies Used 
- JavaScript
- Luxon
- CSS
- HTML


## Contact Information 

### Heather Bjoin 

h.m.bjoin@gmail.com


![GitHub followers](https://img.shields.io/github/followers/HeatMarie?color=%20%20%23c0640fb4&logo=Github&logoColor=%20%20%23c0640fb4&style=for-the-badge)

![GitHub User's stars](https://img.shields.io/github/stars/HeatMarie?color=%20%20%23c0640fb4&logo=github&logoColor=%20%20%23c0640fb4&style=for-the-badge)

![GitHub top language](https://img.shields.io/github/languages/top/HeatMarie/dayPlanner?color=%23c0640fb4&logo=github&logoColor=%23c0640fb4&style=for-the-badge)

![GitHub repo size](https://img.shields.io/github/repo-size/HeatMarie/dayPlanner?color=%23c0640fb4&logo=github&logoColor=%20%23c0640fb4&style=for-the-badge)

