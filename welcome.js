// function hideLoading() {
//     const welcome = document.getElementById("welcome-address");
//     const main = document.getElementsByTagName("main");
//     const header = document.getElementsByTagName("header");
//     const footer = document.getElementsByTagName("footer");

//     main.style.display = "block";
//     header.style.display = "block";
//     footer.style.display ="block";
//     welcome.style.display ="none";

//     console.log("now");

// }

// setTimeout(hideLoading, 100);


const main = document.getElementsByTagName("main")[0]; // Get the first element
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];
    

function hideLoading() {
    const welcome = document.getElementById("welcome-address");
    welcome.style.display = "none";
    console.log("WELCOME, HOW ARE YOU");
}

setTimeout(function () {
    try {
        hideLoading(); // Call the function inside the setTimeout callback
        
    main.style.display = "block";
    header.style.display = "block";
    footer.style.display = "block";
    } catch (error) {
        console.error("Error occurred:", error);
    }
}, 20000);