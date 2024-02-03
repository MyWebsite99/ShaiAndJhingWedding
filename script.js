let firstPage = document.getElementById('firstPage');
let secondPage = document.getElementById('secondPage');
let thirdPage = document.getElementById('thirdPage');
let fourthPage = document.getElementById('fourthPage');
let fifthPage = document.getElementById('fifthPage');
let sixthPage = document.getElementById('sixthPage');
let seventhPage = document.getElementById('seventhPage');
let eightPage = document.getElementById('eightPage');
let ninthPage = document.getElementById('ninthPage');
let tenthPage = document.getElementById('tenthPage');
let arrow_left = document.getElementById("arrow-left");
let arrow_right = document.getElementById("arrow-right");
let pageSix_wall = document.getElementById("pageSix_wall");
let detailsLast_wall = document.getElementById("detailsLast_wall");
let lastPage = false;
let detailsPageTwo = false;
document.getElementById("ul").style.width = window.innerWidth + 'px';
document.getElementById("firstPage").style.width = window.innerWidth + 'px';
document.getElementById("secondPage").style.width = window.innerWidth + 'px';
document.getElementById("thirdPage").style.width = window.innerWidth + 'px';
document.getElementById("fourthPage").style.width = window.innerWidth + 'px';
document.getElementById("fifthPage").style.width = window.innerWidth + 'px';
document.getElementById("sixthPage").style.width = window.innerWidth + 'px';
document.getElementById("seventhPage").style.width = window.innerWidth + 'px';
document.getElementById("eightPage").style.width = window.innerWidth + 'px';
document.getElementById("ninthPage").style.width = window.innerWidth + 'px';
document.getElementById("tenthPage").style.width = window.innerWidth + 'px';
document.getElementById("firstPage").style.height = window.innerHeight + 'px';
document.getElementById("secondPage").style.height = window.innerHeight + 'px';
document.getElementById("thirdPage").style.height = window.innerHeight + 'px';
document.getElementById("fourthPage").style.height = window.innerHeight + 'px';
document.getElementById("fifthPage").style.height = window.innerHeight + 'px';
document.getElementById("sixthPage").style.height = window.innerHeight + 'px';
document.getElementById("seventhPage").style.height = window.innerHeight + 'px';
document.getElementById("eightPage").style.height = window.innerHeight + 'px';
document.getElementById("ninthPage").style.height = window.innerHeight + 'px';
document.getElementById("tenthPage").style.height = window.innerHeight + 'px';

MusicOST = new Audio('files/BackgroundOST.mp3');

function AcceptBtn() {
    document.getElementById("popUp").style.display = "none";
    document.getElementById("popUp_btn").style.display = "none";
    MusicOST.play();
    MusicOST.loop = true;
}

function scrollHome() {
    firstPage.scrollIntoView();
}
function scrollHomeTwo() {
    secondPage.scrollIntoView();
}
function scrollEntourage() {
    thirdPage.scrollIntoView();
}
function scrollVenue() {
    fourthPage.scrollIntoView();
}
function scrollVenueTwo() {
    fifthPage.scrollIntoView();
}
function scrollVenueThree() {
    if (lastPage === true) {
        fourthPage.scrollIntoView();
}}
function scrollDetails() {
    sixthPage.scrollIntoView();
}
function scrollDressCode() {
    seventhPage.scrollIntoView();
}
function scrollDressCodeOne() {
    eightPage.scrollIntoView();
}
function scrollDressCodeTwo() {
    ninthPage.scrollIntoView();
}
function scrollDressCodeThree() {
    tenthPage.scrollIntoView();
}

function pageOne() {
    thirdPage.style.backgroundImage = "url('files/The Entourage Cover_page-0001.jpg')";
    lastPage = false;
    pageSix_wall.style.cursor = "auto";
}
function pageTwo() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 1_page-0001.jpg')";
    lastPage = false;
    pageSix_wall.style.cursor = "auto";
}
function pageThree() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 1 (Online)_page-0001.jpg')";
    lastPage = false;
    pageSix_wall.style.cursor = "auto";
}
function pageFour() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 3_page-0001.jpg')";
    lastPage = false;
    pageSix_wall.style.cursor = "auto";
}
function pageFive() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 4_page-0001.jpg')";
    lastPage = false;
    pageSix_wall.style.cursor = "auto";
}
function pageSix() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 5_pages-to-jpg-0001.jpg')";
    lastPage = true;
    pageSix_wall.style.cursor = "pointer";
}

function detailsHome() {
    detailsLast_wall.style.cursor = "auto";
    if (detailsPageTwo === false) {
    sixthPage.style.backgroundImage = "url('files/Wedding Details Cover_page-0001.jpg')";
    detailsPageOne = false;
    arrow_left.style.display = "none";}
    if (detailsPageTwo === true) {
        sixthPage.style.backgroundImage = "url('files/RSVP_page-0001.jpg')";
        detailsPageTwo = false;
        arrow_right.style.display = "block";
    }
}
function detailsOne() {
    arrow_left.style.display = "block";
    sixthPage.style.backgroundImage = "url('files/RSVP_page-0001.jpg')";
    detailsTwo();
    detailsPageTwo = true;
}
function detailsTwo() {
    if (detailsPageTwo === true) {
    sixthPage.style.backgroundImage = "url('files/Gifts_page-0001.jpg')";
    arrow_right.style.display = "none";
    detailsLast_wall.style.cursor = "pointer";
}}
function detailsLast() {
        if (detailsPageTwo === true) {
        seventhPage.scrollIntoView();
}}