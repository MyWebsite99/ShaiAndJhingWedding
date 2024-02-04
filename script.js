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
let ul = document.getElementById("ul");
let btn_group = document.getElementById("btn_group");
let popUp = document.getElementById("popUp");
let popUp_btn = document.getElementById("popUp_btn");
let detailsPageTwo = false;
let heigthFormula = window.innerHeight * 0.8;
let ulHeightFormula = window.innerHeight * 0.03;
let popUpHeightFormula = window.innerHeight * 0.4;
let popUpTopFormula = window.innerHeight * 0.3;
let popUpWidthFormula = window.innerWidth * 0.9;
let popUp_btnHeightFormula = window.innerHeight * 0.03;
let popUp_btnBottomFormula = window.innerHeight * 0.38;
let popUp_btnLeftFormula = window.innerWidth * 0.45;
let heightMarForm = window.innerHeight * 0.1; 
let btnHeightMarForm = window.innerHeight * 0.03;
let screenWidth = window.innerWidth; 

if (screenWidth <= 800) {
    popUp.style.width = popUpWidthFormula + 'px';
    popUp.style.height = popUpHeightFormula + 'px';
    popUp.style.top = popUpTopFormula + 'px';
    popUp.style.margin = '0px ' + btnHeightMarForm + 'px 0px ' + btnHeightMarForm + 'px';
    popUp_btn.style.bottom = popUp_btnBottomFormula + 'px';
    popUp_btn.style.left = popUp_btnLeftFormula + 'px';
    popUp_btn.style.height = popUp_btnHeightFormula + 'px';
    ul.style.width = window.innerWidth + 'px';
    ul.style.height = ulHeightFormula + 'px';
    btn_group.style.height = heigthFormula + 'px';
    btn_group.style.zIndex = 100;
    firstPage.style.height = heigthFormula + 'px';
    firstPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    secondPage.style.height = heigthFormula + 'px';
    secondPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    thirdPage.style.height = heigthFormula + 'px';
    thirdPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    fourthPage.style.height = heigthFormula + 'px';
    fourthPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    fifthPage.style.height = heigthFormula + 'px';
    fifthPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    sixthPage.style.height = heigthFormula + 'px';
    sixthPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    seventhPage.style.height = heigthFormula + 'px';
    seventhPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    eightPage.style.height = heigthFormula + 'px';
    eightPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    ninthPage.style.height = heigthFormula + 'px';
    ninthPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
    tenthPage.style.height = heigthFormula + 'px';
    tenthPage.style.margin = heightMarForm + 'px 0px ' + heightMarForm + 'px 0px'; 
}

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
}
function pageTwo() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 1_page-0001.jpg')";
}
function pageThree() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 1 (Online)_page-0001.jpg')";
}
function pageFour() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 3_page-0001.jpg')";
}
function pageFive() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 4_page-0001.jpg')";
}
function pageSix() {
    thirdPage.style.backgroundImage = "url('files/Entourage Page 5_pages-to-jpg-0001.jpg')";
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