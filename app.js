'use strict';

var busmallarray = [];


var imageone = document.getElementById('img1');
var imagetwo = document.getElementById('img2');
var imagethree = document.getElementById('img3');
var sectionid = document.getElementById('items');


var finalresults = document.getElementById('finalResult');


var firstimage;
var secondimage;
var thirdimage;


var displayfirst;
var displaysecond;
var displaythird;



function Busmall(name, link) {
    this.name = name;
    this.link = link;
    this.votes = 0;
    this.displaytimes = 0;
    busmallarray.push(this);
}

//properities 

new Busmall('Banana', 'images/banana.jpg');
new Busmall('bathroom', 'images/bathroom.jpg');
new Busmall('boots', 'images/boots.jpg');
new Busmall('breakfast', 'images/breakfast.jpg');
new Busmall('bubblegum', 'images/bubblegum.jpg');
new Busmall('chair', 'images/chair.jpg');
new Busmall('cthulhu', 'images/cthulhu.jpg');
new Busmall('dog-duck', 'images/dog-duck.jpg');
new Busmall('dragon', 'images/dragon.jpg');
new Busmall('pen', 'images/pen.jpg');
new Busmall('pet-sweep', 'images/pet-sweep.jpg');
new Busmall('scissors', 'images/scissors.jpg');
new Busmall('shark', 'images/shark.jpg');
new Busmall('sweep', 'images/sweep.png');
new Busmall('tauntaun', 'images/tauntaun.jpg');
new Busmall('unicorn', 'images/unicorn.jpg');
new Busmall('water-can', 'images/water-can.jpg');
new Busmall('wine-glass', 'images/wine-glass.jpg');
new Busmall('usb', 'images/video/usb (1).gif');

//methods

//for loop for the next round


// arrayOfImages = [firstimage, secondimage, thirdimage];
// function noRepeatOnNextRound(){

//     for (var n = 1; n <= 25; n++){
//     if(firstimage === secondimage || )
//     }
    
//     }
    
    

//


//random images

function randomImages() {
    firstimage = Math.floor((Math.random() * busmallarray.length));

    secondimage;
    thirdimage;
    do { thirdimage = Math.floor((Math.random() * busmallarray.length)); }
    while (thirdimage === firstimage || thirdimage === secondimage);

    do {
        secondimage = Math.floor((Math.random() * busmallarray.length));
    }
    while (firstimage === secondimage || secondimage === thirdimage);

    // I am calling the display function after I sat an attribute for each picture so that they get changed by accessing the link
    displayimage(firstimage, secondimage, thirdimage);
}

randomImages();



function displayimage(displayimg1, displayimg2, displayimg3) {

    displayfirst = busmallarray[displayimg1];
    displaysecond = busmallarray[displayimg2];
    displaythird = busmallarray[displayimg3];

    displayfirst.displaytimes++;
    displaysecond.displaytimes++;
    displaythird.displaytimes++;

    imageone.setAttribute('src', displayfirst.link);
    imagetwo.setAttribute('src', displaysecond.link);
    imagethree.setAttribute('src', displaythird.link);

}


//add eventlistener
var totalClicks = 0;
sectionid.addEventListener('click', handler);

var clickedimage;
function handler(event) {

    if (event.target.id === 'img1') {
        randomImages();
        clickedimage = displayfirst;
        totalClicks++;
       clickedimage.votes++

    } else if (event.target.id === 'img2') {
        randomImages();
        clickedimage = displaysecond;
        totalClicks++;
        clickedimage.votes++

    } else if (event.target.id === 'img3') {
        randomImages();
        clickedimage = displaythird;
        totalClicks++;
        clickedimage.votes++
        
    }

    if(totalClicks >= 25){
        sectionid.removeEventListener('click', handler);

        showresults();
        }
        
}



//showing results part

function showresults(){
    
for (var i=0; i< busmallarray.length; i++){

    var listofitems = document.createElement('li');
    listofitems.textContent = 'Votes for ' + busmallarray[i].name + ' are: ' + busmallarray[i].votes + ', and it has been displayed ' + busmallarray[i].displaytimes + ' times.';
    finalresults.appendChild(listofitems);    

}


}




