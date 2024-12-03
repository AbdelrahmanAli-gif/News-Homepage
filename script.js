const navbarBtn = document.getElementsByClassName('navbar-btn')[0];
const navbarBtnImg = document.getElementsByClassName('navbar-btn-img')[0];
const navbarList = document.getElementsByClassName('navbar-list')[0];
const mainSectionImg = document.getElementsByClassName('main-section-img')[0];

let opened = false;

const openNavbarMenu = () => {
    if (!opened){
        navbarBtnImg.src = './images/icon-menu-close.svg';
        navbarList.style.setProperty('left', '30%');
        document.documentElement.style.setProperty('--beforeWidth', '30vw');  
        opened = !opened;
    }
    else {
        navbarBtnImg.src = './images/icon-menu.svg';
        navbarList.style.setProperty('left', '100%');
        document.documentElement.style.setProperty('--beforeWidth', '0vw');  
        opened = !opened;
    }
}

const getWindowSize = () => {
    let windowSize = window.innerWidth;
    if (windowSize < 600) {
        mainSectionImg.src = './images/image-web-3-mobile.jpg';
    } else {
        mainSectionImg.src = './images/image-web-3-desktop.jpg';
    }
}

window.onresize = getWindowSize;
navbarBtn.addEventListener('click', openNavbarMenu);