const text = 'Я учу JavaScript!'
function myMessage() {
    console.log(text);
}
myMessage();


let sliderImage = document.getElementById('slider__image');
let left = document.getElementById('left');
let right = document.getElementById('right');

function goToPrevious(){
    sliderImage.src = './assets/images/cat_1.jpg';
    }
goToPrevious();

function goToNext () {
    sliderImage.src = './assets/images/cat_2.jpg';
}
goToNext ();


let year;
const leapYear = 'Год является високосным (366 дней).';
const nonLeapYear = 'Год не високосный (у него 365 дней).';

    if (year % 4 == 0 && year % 100 !== 0 || year % 4 === 0 && year % 400 === 0){
        console.log (leapYear);
    } else {
        console.log (nonLeapYear);
    }
