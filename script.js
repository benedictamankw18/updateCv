const openNavSmall = document.getElementsByClassName("show-small")[0]
const closeNavSmall = document.getElementsByClassName("hide-small")[0]
const sideNavSmall = document.querySelectorAll(".side-nav-icon-small")
var opensmall = false

let windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const main = document.getElementsByTagName("main")[0];

window.onscroll = function() {
  scrollFunction()
};

// function projectHieght(){
//   var project_cards = document.getElementsByClassName("project-veiw-card");
//   var countCard = 0;
//   project_cards.forEach(cards => {
//     countCard++;
//   });

// if(windowWidth >= 1025 && windowWidth <= 1200){
//  if ()
// }
// else if(windowWidth >= 481 && windowWidth <= 768){

// }else if(windowWidth >= 320 && windowWidth <= 480){
// }
// else if(windowWidth >= 100 && windowWidth <= 319){

// }
// window.onclick = function() {navBarClose()};

var smallNavHieght = 190;
var topShow = false;

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scroll-top").style.display = "block";
    document.getElementById("scroll-top").style.transition = "transform 01s ease";
  } else {
    document.getElementById("scroll-top").style.display = "none";
    document.getElementById("scroll-top").style.transition = "transform 01s ease";
  }
  if(opensmall){
    if(!topShow){
      smallNavHieght = 200
    }else{
      smallNavHieght = 190
    }
    document.getElementsByClassName("main-side-nav-small")[0].style.height = `${smallNavHieght}px`;
    sideNavSmall.forEach(t => {
      t.style.display = "none";
    });
    openNavSmall.style.display = "block";
    closeNavSmall.style.display= "none";
    opensmall= false
  }
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    smallNavHieght = 190
    document.getElementsByClassName("main-side-nav-small")[0].style.height = `${smallNavHieght}px`;
    document.getElementsByClassName("top")[0].style.display = "block";
    document.getElementsByClassName("top")[0].style.transition = "transform 01s ease";
    topShow = true;
  } else {
     smallNavHieght = 120
    document.getElementsByClassName("main-side-nav-small")[0].style.height = `${smallNavHieght}px`;
    document.getElementsByClassName("top")[0].style.display = "none";
    document.getElementsByClassName("top")[0].style.transition = "transform 01s ease";
    topShow = false;
  }
}

const certLists = document.getElementsByClassName("list-cert")[0]; 
let clickCounter = 0;
const scroll_cert_pos_fill = document.getElementsByClassName("scroll-cert-pos-fill")[0]; 
let fill = 8;


if(windowWidth >= 1025 && windowWidth <= 1200){
  
function certScrollLeft() { 
  if (clickCounter < 9) {
    certLists.style.transition = "transform 01s ease";
      certLists.style.transform += `translateX(-220px)`;
      clickCounter++;
      scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
  }
}

function certScrollRight(size) { 
if (clickCounter > 0) {
  certLists.style.transition = "transform 01s ease";
    certLists.style.transform += `translateX(220px)`;
    clickCounter--; 
    scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
}
}
}else if(windowWidth >= 769 && windowWidth <= 1024){
  
function certScrollLeft() { 
  if (clickCounter < 10) {
    certLists.style.transition = "transform 01s ease";
      certLists.style.transform += `translateX(-210px)`;
      clickCounter++;
      scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
  }
}

function certScrollRight(size) { 
if (clickCounter > 0) {
  certLists.style.transition = "transform 01s ease";
    certLists.style.transform += `translateX(210px)`;
    clickCounter--; 
    scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
}
}
}else if(windowWidth >= 481 && windowWidth <= 768){
  
function certScrollLeft() { 
  if (clickCounter < 10) {
    certLists.style.transition = "transform 01s ease";
      certLists.style.transform += `translateX(-230px)`;
      clickCounter++;
      scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
  }
}

function certScrollRight(size) { 
if (clickCounter > 0) {
  certLists.style.transition = "transform 01s ease";
    certLists.style.transform += `translateX(230px)`;
    clickCounter--; 
    scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
}
}
}else if(windowWidth >= 320 && windowWidth <= 480){
  
function certScrollLeft() { 
  if (clickCounter < 10) {
    certLists.style.transition = "transform 01s ease";
      certLists.style.transform += `translateX(-250px)`;
      clickCounter++;
      scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
  }
}

function certScrollRight(size) { 
if (clickCounter > 0) {
  certLists.style.transition = "transform 01s ease";
    certLists.style.transform += `translateX(250px)`;
    clickCounter--; 
    scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
}
}
}else if(windowWidth >= 100 && windowWidth <= 319){
  
function certScrollLeft() { 
  if (clickCounter < 10) {
    certLists.style.transition = "transform 01s ease";
      certLists.style.transform += `translateX(-270px)`;
      clickCounter++;
      scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
  }
}

function certScrollRight(size) { 
if (clickCounter > 0) {
  certLists.style.transition = "transform 01s ease";
    certLists.style.transform += `translateX(270px)`;
    clickCounter--; 
    scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
}
}
}else{
  
function certScrollLeft() { 
  if (clickCounter < 10) {
    certLists.style.transition = "transform 01s ease";
      certLists.style.transform += `translateX(-270px)`;
      clickCounter++;
      scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
  }
}

function certScrollRight(size) { 
if (clickCounter > 0) {
  certLists.style.transition = "transform 01s ease";
    certLists.style.transform += `translateX(270px)`;
    clickCounter--; 
    scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
}
}
}


let navShow = false;
let iconText =   document.getElementsByClassName("text-icon"); 

function navBarOpen(){
  document.getElementsByClassName("main-side-nav")[0].style.width = "200px";
  document.getElementsByClassName("show")[0].style.display = "none";
  document.getElementsByClassName("hide")[0].style.display = "block";
  for(var x in iconText){
    iconText[x].style.display = "inline";
    iconText[x].style.transition = "display  3s ease";
  }
  document.getElementsByClassName("main-side-nav")[0].style.transition = "width  0.3s ease";
  navShow = true;
}

function navBarClose(){
  document.getElementsByClassName("main-side-nav")[0].style.width = "70px";
  document.getElementsByClassName("show")[0].style.display = "block";
  document.getElementsByClassName("hide")[0].style.display = "none";
  for(var x in iconText){
    // console.info(iconText[x]);
    iconText[x].style.display = "none";
    iconText[x].style.transition = "display  3s ease 3s";
  }
   document.getElementsByClassName("main-side-nav")[0].style.transition = "width  0.3s ease";
 navShow = false;
}

document.getElementsByClassName("main-side-nav")[0].addEventListener("mouseout", function() {
  if(!navShow){
  document.getElementsByTagName("header")[0].addEventListener("click", function() {
    navBarClose();
    navShow=false;
  });
  document.getElementsByTagName("main")[0].addEventListener("click", function() {
      navBarClose();
      navShow=false;
    });
    document.getElementsByTagName("footer")[0].addEventListener("click", function() {
        navBarClose();
        navShow=false;
      });
      document.getElementsByClassName("social")[0].addEventListener("click", function() {
          navBarClose();
          navShow=false;
        });
  }
  
});

function getOption() {
  let obj = document.getElementById("PRO-LANG");
  let option = obj.options[obj.selectedIndex].text;
  if(option === "All"){
    let all =  document.getElementsByClassName("project-veiw-card");
    for(let i=0; i < all.length; i++){
      all[i].style.display = "block";
    }

      console.log(all);

  } else if(option === "JAVA"){
    let java =  document.getElementsByClassName("java");   

    for(let i=0; i < java.length; i++){
      java[i].style.display = "block";
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
    }
    
  } else if(option === "C++"){
    let java =  document.getElementsByClassName("java");
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "block";
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
    }
        
  } else if(option === "PYTHON"){
    let java =  document.getElementsByClassName("java");   

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "block";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
       
    }
    
       

  } else if(option === "WEBSITE DESIGN"){
    let java =  document.getElementsByClassName("java"); 
  
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
       
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "block";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
       
    }
    
       

  } else if(option === "MYSQL"){
    let java =  document.getElementsByClassName("java"); 
  
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
       
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "block";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
       
    }
    
       
    
  } else if(option === "JAVASCRIPT"){
    let java =  document.getElementsByClassName("java"); 
  
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
       
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "block";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
       
    }
    
       
    
  } else if(option === "CYBER SECURITY"){
    let java =  document.getElementsByClassName("java");   

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
       
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "block";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
       
    }
    
       
    
  } else if(option === "ETHICAL HACKING"){
    let java =  document.getElementsByClassName("java"); 
  
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
       
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "block";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
       
    }
    
       
    
  } else if(option === "NETWORKING"){
    let java =  document.getElementsByClassName("java");   

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
       
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "block";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
       
    }
    
       
      
  } else if(option === "VISUAL BASIC"){
    let java =  document.getElementsByClassName("java");   

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
       
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "block";
       
    }
    
  } else{
    let java =  document.getElementsByClassName("java");   

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
       
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
       
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
       
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
       
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
       
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
       
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
       
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
       
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
       
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
       
    }
  }  
}


var img_width = document.querySelectorAll(".cert");

function SmallNav(){
  if (opensmall){
    openNavSmall.style.display = "block";
    closeNavSmall.style.display= "none";
    if (topShow){
    smallNavHieght = 190
    console.log(1);
    }else{
    console.log(2);
    smallNavHieght = 120
    }
    document.getElementsByClassName("main-side-nav-small")[0].style.height = `${smallNavHieght}px`;
    sideNavSmall.forEach(t => {
      t.style.display = "none";
    });
    opensmall= false
  } else{
    if (topShow){
    console.log(3);
    smallNavHieght = 500
      }else{
    console.log(4);
    smallNavHieght = 430
      }
    document.getElementsByClassName("main-side-nav-small")[0].style.height = `${smallNavHieght}px`;
    sideNavSmall.forEach(t => {
      t.style.display = "block";
    });
    openNavSmall.style.display = "none";
    closeNavSmall.style.display= "block";
    opensmall= true
  }
}


// contact_info('Unknown');
 
let MapValue; 

      console.log(MapValue);


function contact_info(value) {
    if (value === "Akwasi") {
        document.getElementsByTagName("person")[0].textContent = "MR. AKWASI AMANKWA";
        document.getElementsByTagName("name")[0].textContent = "MR. AKWASI AMANKWA";
        document.getElementById("email").textContent = "akwasiamankwa@gmail.com";
        document.getElementById("email").setAttribute("href", "mailto:akwasiamankwa@gmail.com");
        document.getElementById("phone").textContent = "+233-242-633-013";
        document.getElementById("phone").setAttribute("href", "tel:+233242633013");
        document.getElementById("whatsapp").textContent = "+233-242-633-013";
        document.getElementById("telegram").textContent = "UNKNOWN";
        document.getElementById("linkedin").textContent = "UNKNOWN";
        document.getElementById("facebook").textContent = "MR. AKWASI AMANKWA";
        document.getElementById("github").textContent = "UNKNOWN";
    } else if (value === "Beeni") {
        document.getElementsByTagName("person")[0].textContent = "MRS. FUASTINA BEENI";
        document.getElementsByTagName("name")[0].textContent = "MRS. FUASTINA BEENI";
        document.getElementById("email").textContent = "fuastinabeeni@gmail.com";
        document.getElementById("email").setAttribute("href", "mailto:fuastinabeeni@gmail.com");
        document.getElementById("phone").textContent = "+233-544-191-665";
        document.getElementById("phone").setAttribute("href", "tel:+233544191665");
        document.getElementById("whatsapp").textContent = "+233-544-191-665";
        document.getElementById("telegram").textContent = "UNKNOWN";
        document.getElementById("linkedin").textContent = "UNKNOWN";
        document.getElementById("facebook").textContent = "UNKNOWN";
        document.getElementById("github").textContent = "UNKNOWN";
    } else if (value === "Unknown") {
        document.getElementsByTagName("person")[0].textContent = "UNKNOWN";
        document.getElementsByTagName("name")[0].textContent = "UNKNOWN";
        document.getElementById("email").textContent = "UNKNOWN";
        document.getElementById("email").setAttribute("href", "mailto:");
        document.getElementById("phone").textContent = "UNKNOWN";
        document.getElementById("phone").setAttribute("href", "tel:000000000");
        document.getElementById("whatsapp").textContent = "UNKNOWN";
        document.getElementById("telegram").textContent = "UNKNOWN";
        document.getElementById("linkedin").textContent = "UNKNOWN";
        document.getElementById("facebook").textContent = "UNKNOWN";
        document.getElementById("github").textContent = "UNKNOWN";
    } else if (value === "Self") {
        document.getElementsByTagName("person")[0].textContent = "MR. BENEDICT AMANKWA";
        document.getElementsByTagName("name")[0].textContent = "MR. BENEDICT AMANKWA";
        document.getElementById("email").textContent = "benedictamankwa18@gmail.com";
        document.getElementById("email").setAttribute("href", "mailto:benedictamankwa18@gmail.com");
        document.getElementById("phone").textContent = "+233-594-500-785";
        document.getElementById("phone").setAttribute("href", "tel:+233594500785");
      document.getElementById("whatsapp").textContent = "+233-594-500-785";
        document.getElementById("whatsapp").setAttribute("href", "https://wa.me/233594500785");
        document.getElementById("telegram").textContent = "Kali0Nethunter";
        document.getElementById("telegram").setAttribute("href", "https://t.me/Kali0Nethunter");
        document.getElementById("linkedin").textContent = "Benedict (Osei) Amankwa";
        document.getElementById("linkedin").setAttribute("href", "https://www.linkedin.com/in/benedict-amankwa-282402211/?originalSubdomain=gh");
        document.getElementById("facebook").textContent = "UNKNOWN";
        document.getElementById("facebook").setAttribute("href", "https://www.facebook.com/benedictamankwa18");
      document.getElementById("github").textContent = "Benedict Osei Amankwa";
        document.getElementById("github").setAttribute("href", "https://github.com/benedictamankw18");
      
    } 
}
    

function toggleContactInfo() {
const contactInfo = document.querySelector('.contact-info');

  if (contactInfo.classList.contains('show')) {
    contactInfo.classList.remove('show');
    contactInfo.classList.add('hide');
    setTimeout(() => {
      contactInfo.style.display = 'none';
    }, 1000); // Match the duration of the moveOut animation
  } else {
    contactInfo.style.display = 'block';
    contactInfo.classList.remove('hide');
    contactInfo.classList.add('show');
  }
}

// Example: Attach this function to a button click
document.querySelector('.button').addEventListener('click', toggleContactInfo);