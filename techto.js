function openSubMenu() {
    let menu = document.querySelector('.res');
    let menuContent = document.querySelector('.menu-content');
    let main = document.querySelector('.main');
    let about = document.querySelector('.about');
    let image = document.querySelector('.image');
    let footer = document.querySelector('.footer');
    let services = document.querySelector('.services');

    if (menu.innerHTML == "Menu") {
    menu.innerHTML = "Κλείσιμο";
    menuContent.style.display = "block";
    main.style.display = "none";
    about.style.display = "none";
    image.style.display = "none";
    footer.style.display = "flex";
    services.style.display = "none";
    
    } else {
    menu.innerHTML = "Menu";
    menuContent.style.display = "none";
    main.style.display = "flex";
    about.style.display = "flex";
    image.style.display = "block";
    footer.style.display = "flex";
    services.style.display = "flex";
    }
    }
    
    function eduOpen() {
    let subMenu = document.querySelector('.submenu');
    let subMenuDisplay = window.getComputedStyle(subMenu).getPropertyValue('display');
    let we = document.querySelector('.we');
    
    if (subMenuDisplay == "none" ) {
    subMenu.style.display = "block";
    we.style.backgroundColor = "#00738C";
    } else {
    we.style.backgroundColor = "#cde0ec";
    subMenu.style.display = "none";
    }
    }

    function myFunction() {
        alert("Επιτυχής εγγραφή. Ευχαριστούμε!");
    }