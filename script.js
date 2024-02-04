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
let detailsPageTwo = true;
let heigthFormula = window.innerHeight;
let ulHeightFormula = window.innerHeight * 0.03;
let popUpHeightFormula = window.innerHeight * 0.4;
let popUpTopFormula = window.innerHeight * 0.3;
let popUpWidthFormula = window.innerWidth * 0.9;
let popUp_btnHeightFormula = window.innerHeight * 0.03;
let popUp_btnBottomFormula = window.innerHeight * 0.38;
let popUp_btnLeftFormula = window.innerWidth * 0.40;
let btnHeightMarForm = window.innerHeight * 0.03;
let lowerBtn = window.innerHeight * 0.1;
let lowerBtnTwo = window.innerHeight * 0.05;
let padBot = window.innerHeight * 0.1;
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
    btn_group.style.bottom = lowerBtn + 'px';
    btn_group.style.zIndex = 100;
    firstPage.style.height = heigthFormula + 'px';
    secondPage.style.height = heigthFormula + 'px';
    thirdPage.style.height = heigthFormula + 'px';
    fourthPage.style.height = heigthFormula + 'px';
    fifthPage.style.height = heigthFormula + 'px';
    sixthPage.style.height = heigthFormula + 'px';
    seventhPage.style.height = heigthFormula + 'px';
    eightPage.style.height = heigthFormula + 'px';
    ninthPage.style.height = heigthFormula + 'px';
    tenthPage.style.height = heigthFormula + 'px';
    tenthPage.style.marginBottom = padBot + 'px';
    arrow_left.style.bottom = lowerBtnTwo + 'px';
    arrow_right.style.bottom = lowerBtnTwo + 'px';
    arrow_left.style.zIndex = 500;
    firstPage.style.backgroundImage = "url('longFiles/Invitation Cover_page-0001.jpg')";
    secondPage.style.backgroundImage = "url('longFiles/Invitation Page 2_page-0001.jpg')";
    thirdPage.style.backgroundImage = "url('longFiles/The Entourage Cover_page-0001.jpg')";
    fourthPage.style.backgroundImage = "url('longFiles/The Venue Cover_page-0001.jpg')";
    fifthPage.style.backgroundImage = "url('longFiles/The Venue Cover_page-0001.jpg')";
    sixthPage.style.backgroundImage = "url('longFiles/Wedding Details Cover_page-0001.jpg')";
    seventhPage.style.backgroundImage = "url('longFiles/Dresscode Cover_page-0001.jpg')";
    eightPage.style.backgroundImage = "url('longFiles/Dresscode Page 1_page-0001.jpg')";
    ninthPage.style.backgroundImage = "url('longFiles/Dresscode Page 2_page-0001.jpg')";
    tenthPage.style.backgroundImage = "url('longFiles/Dresscode Page 3_page-0001.jpg')";
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
    if (screenWidth <= 800) {
        thirdPage.style.backgroundImage = "url('longFiles/The Entourage Cover_page-0001.jpg')";
    } else {
        thirdPage.style.backgroundImage = "url('files/The Entourage Cover_page-0001.jpg')";
    }
}
function pageTwo() {
    if (screenWidth <= 800) {
        thirdPage.style.backgroundImage = "url('longFiles/Entourage Page 1_page-0001.jpg')";
    } else {
        thirdPage.style.backgroundImage = "url('files/Entourage Page 1_page-0001.png')";
    }

}
function pageThree() {
    if (screenWidth <= 800) {
        thirdPage.style.backgroundImage = "url('longFiles/Entourage Page 1 (Online)_page-0001.jpg')";
    } else {
        thirdPage.style.backgroundImage = "url('files/Entourage Page 1 (Online)_page-0001.jpg')";
    }

}
function pageFour() {
    if (screenWidth <= 800) {
        thirdPage.style.backgroundImage = "url('longFiles/Entourage Page 3_page-0001.jpg')";
    } else {
        thirdPage.style.backgroundImage = "url('files/Entourage Page 3_page-0001.jpg')";
    }

}
function pageFive() {
    if (screenWidth <= 800) {
        thirdPage.style.backgroundImage = "url('longFiles/Entourage Page 4_page-0001.jpg')";
    } else {
        thirdPage.style.backgroundImage = "url('files/Entourage Page 4_page-0001.jpg')";
    }

}
function pageSix() {
    if (screenWidth <= 800) {
        thirdPage.style.backgroundImage = "url('longFiles/Entourage Page 5_pages-to-jpg-0001.jpg')";
    } else {
        thirdPage.style.backgroundImage = "url('files/Entourage Page 5_pages-to-jpg-0001.png')";
    }
}

function detailsHome() {
    if (detailsPageTwo === false) {
        if (screenWidth <= 800) {
            sixthPage.style.backgroundImage = "url('longFiles/RSVP_page-0001.jpg')";
        } else {
            sixthPage.style.backgroundImage = "url('files/RSVP_page-0001.jpg')";
        }
        arrow_left.style.display = "none";
        arrow_right.style.display = "block";
}}
function detailsOne() {
    detailsTwo();
    if (detailsPageTwo === true) {
        detailsPageTwo = false;
        if (screenWidth <= 800) {
            sixthPage.style.backgroundImage = "url('longFiles/RSVP_page-0001.jpg')";
        } else {
            sixthPage.style.backgroundImage = "url('files/RSVP_page-0001.jpg')";
        }
}}
function detailsTwo() {
    if (detailsPageTwo === false) {
        if (screenWidth <= 800) {
            sixthPage.style.backgroundImage = "url('longFiles/Gifts_page-0001.jpg')";
        } else {
            sixthPage.style.backgroundImage = "url('files/Gifts_page-0001.jpg')";
        }
        arrow_right.style.display = "none";
        arrow_left.style.display = "block";
}}