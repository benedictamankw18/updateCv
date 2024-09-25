
function displayContent() {
    const main = document.getElementsByTagName("main")[0];
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];
    const main_side_nav = document.getElementsByClassName("main-side-nav")[0]; 
    const main_side_nav_small = document.getElementsByClassName("main-side-nav-small")[0]; 
    const social = document.getElementsByClassName("social")[0]; 
    const warning = document.getElementsByClassName("warning")[0]; 
    if(windowWidth <= 319){
        main_side_nav.style.display = "none"; 
    main_side_nav_small.style.display = "none"; 
    social.style.display = "none";
    main.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";
    warning.style.display = "block";
    }
    else{
    main_side_nav.style.display = "block"; 
    main_side_nav_small.style.display = "block"; 
    social.style.display = "block";
    main.style.display = "block";
    header.style.display = "block";
    // warning.style.display = "none";
    footer.style.display = "block";
}
}


function hideLoading() {
    const loading_spin = document.getElementById("loading-spin");
    const welcome = document.getElementById("welcome-address");
    welcome.style.display = "none";
    loading_spin.style.display = "none";
}

setTimeout(function () {
    try {
        hideLoading(); 
        displayContent();
        
    } catch (error) {
        console.error("Error occurred:", error);
    }
}, 1000);