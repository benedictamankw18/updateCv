
function displayContent() {
    const main = document.getElementsByTagName("main")[0];
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];
    const main_side_nav = document.getElementsByClassName("main-side-nav")[0]; 
    const social = document.getElementsByClassName("social")[0]; 
    
    main.style.display = "block";
    header.style.display = "block";
    footer.style.display = "block";
    main_side_nav.style.display = "flex"; 
    social.style.display = "block";
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