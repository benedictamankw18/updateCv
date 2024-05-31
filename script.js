
const main = document.getElementsByTagName("main")[0];


window.onscroll = function() {scrollFunction()};
// window.onclick = function() {navBarClose()};



function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scroll-top").style.display = "block";
    document.getElementById("scroll-top").style.transition = "transform 01s ease";
  } else {
    document.getElementById("scroll-top").style.display = "none";
    document.getElementById("scroll-top").style.transition = "transform 01s ease";
  }
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsByClassName("top")[0].style.display = "block";
    document.getElementsByClassName("top")[0].style.transition = "transform 01s ease";
  } else {
    document.getElementsByClassName("top")[0].style.display = "none";
    document.getElementsByClassName("top")[0].style.transition = "transform 01s ease";
  }
}

const certLists = document.getElementsByClassName("list-cert")[0]; 
let clickCounter = 0;
const scroll_cert_pos_fill = document.getElementsByClassName("scroll-cert-pos-fill")[0]; 
let fill = 8;

function certScrollLeft() { 
    if (clickCounter < 10) {
      certLists.style.transition = "transform 01s ease";
        certLists.style.transform += `translateX(-270px)`;
        clickCounter++;
        scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
    }
}

function certScrollRight() { 
  if (clickCounter > 0) {
    certLists.style.transition = "transform 01s ease";
      certLists.style.transform += `translateX(270px)`;
      clickCounter--; 
      scroll_cert_pos_fill.style.width = `${clickCounter * fill + 20}px`;
  }
}

let navShow = false;

function navBarOpen(){
  document.getElementsByClassName("veiw-nav")[0].style.width = "200px";
  document.getElementsByClassName("veiw-nav")[0].style.display = "block";
  document.getElementsByClassName("show-text")[0].style.display = "none";
  document.getElementsByClassName("show")[0].style.display = "none";
  document.getElementsByClassName("hide-text")[0].style.display = "block";
  document.getElementsByClassName("hide")[0].style.display = "block";
  document.getElementsByClassName("veiw-nav")[0].style.transition = "width  6s ease";
  // document.getElementsByClassName("veiw-nav")[0].classList.remove('show');
  navShow = true;
}

function navBarClose(){
  document.getElementsByClassName("veiw-nav")[0].style.width = "0px";
  document.getElementsByClassName("veiw-nav")[0].style.display = "none";
  document.getElementsByClassName("show-text")[0].style.display = "block";
  document.getElementsByClassName("show")[0].style.display = "block";
  document.getElementsByClassName("hide-text")[0].style.display = "none";
  document.getElementsByClassName("hide")[0].style.display = "none";
  document.getElementsByClassName("veiw-nav")[0].style.transition = "width  6s ease";
  // document.getElementsByClassName("veiw-nav")[0].classList.toggle('show');
  navShow = false;
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   console.log("Working");

//   if (!event.target.matches('.hide')) {
//     var veiw = document.getElementsByClassName("veiw-nav");
//     for (var i = 0; i < veiw.length; i++) {
//       var openView = veiw[i];
//       console.log("loop!!");

//       if ((openView.classList.contains('show'))) {
//         openView.classList.remove('show');
//         openView.style.width = "0px";
//         console.log(openView.style.width); // Debugging: Check if this message appears in the console
//         console.log("last");

//     }
//       }
//   }
// }

document.getElementsByClassName("veiw-nav")[0].addEventListener("mouseout", function() {
  console.log('mouseout');
  if(navShow){
  document.getElementsByTagName("header")[0].addEventListener("click", function() {
  console.log('clicked on the header');
    navBarClose();
    navShow=false;
  });
  document.getElementsByTagName("main")[0].addEventListener("click", function() {
    console.log('clicked on the main');
      navBarClose();
      navShow=false;
    });
    document.getElementsByTagName("footer")[0].addEventListener("click", function() {
      console.log('clicked on the footer');
        navBarClose();
        navShow=false;
      });
      documentgetElementsByClassName("social")[0].addEventListener("click", function() {
        console.log('clicked on the social');
          navBarClose();
          navShow=false;
        });
  }
  
});


// function getOption() {
//   var obj = document.getElementById("mySelect");
//   document.getElementById("demo").innerHTML = 
//   obj.options[obj.selectedIndex].text;
// }


function getOption() {
  let obj = document.getElementById("PRO-LANG");
  let option = obj.options[obj.selectedIndex].text;
  
  if(option === "All"){
    let all =  document.getElementsByClassName("project-veiw-card");
    main.style.height = `${6800}px`;

    for(let i=0; i < all.length; i++){
      all[i].style.display = "block";
      console.log(all[i]);
    }

      console.log(all);

  } else if(option === "JAVA"){
    let java =  document.getElementsByClassName("java");   
    main.style.height = `${6800 - 2400}px`;

    for(let i=0; i < java.length; i++){
      java[i].style.display = "block";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(java);

  } else if(option === "C++"){
    let java =  document.getElementsByClassName("java");
    main.style.height = `${6800 - 2400}px`;   
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "block";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(cPP);
    
  } else if(option === "PYTHON"){
    let java =  document.getElementsByClassName("java");   
    main.style.height = `${6800 - 2400}px`;

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "block";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(python);

  } else if(option === "WEBSITE DESIGN"){
    let java =  document.getElementsByClassName("java"); 
    main.style.height = `${6800 - 2400}px`;
  
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "block";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(website);

  } else if(option === "MYSQL"){
    let java =  document.getElementsByClassName("java"); 
    main.style.height = `${6800 - 2400}px`;
  
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "block";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(mysql);
    
  } else if(option === "JAVASCRIPT"){
    let java =  document.getElementsByClassName("java"); 
    main.style.height = `${6800 - 2400}px`;
  
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "block";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(javascript);
    
  } else if(option === "CYBER SECURITY"){
    let java =  document.getElementsByClassName("java");   
    main.style.height = `${6800 - 2400}px`;

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "block";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(cyberSecurity);
    
  } else if(option === "ETHICAL HACKING"){
    let java =  document.getElementsByClassName("java"); 
    main.style.height = `${6800 - 2400}px`;
  
    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "block";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(ethical);
    
  } else if(option === "NETWORKING"){
    let java =  document.getElementsByClassName("java");   
    main.style.height = `${6800 - 2400}px`;

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "block";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "none";
      console.log(visual[i]);
    }
    
      console.log(networking);
      
  } else if(option === "VISUAL BASIC"){
    let java =  document.getElementsByClassName("java");   
    main.style.height = `${6800 - 2400}px`;

    for(let i=0; i < java.length; i++){
      java[i].style.display = "none";
      console.log(java[i]);
    } 
    let cPP =  document.getElementsByClassName("c-plus-plus"); 
    for(let i=0; i < cPP.length; i++){
      cPP[i].style.display = "none";
      console.log(cPP[i]);
    }   
    let python =  document.getElementsByClassName("python");   
    for(let i=0; i < python.length; i++){
      python[i].style.display = "none";
      console.log(python[i]);
    } 
    let website =  document.getElementsByClassName("website");  
    for(let i=0; i < website.length; i++){
      website[i].style.display = "none";
      console.log(website[i]);
    }  
    let mysql =  document.getElementsByClassName("mysql");   
    for(let i=0; i < mysql.length; i++){
      mysql[i].style.display = "none";
      console.log(mysql[i]);
    } 
    let javascript =  document.getElementsByClassName("javascript"); 
    for(let i=0; i < javascript.length; i++){
      javascript[i].style.display = "none";
      console.log(javascript[i]);
    }   
    let cyberSecurity =  document.getElementsByClassName("cyberSecurity");  
    for(let i=0; i < cyberSecurity.length; i++){
      cyberSecurity[i].style.display = "none";
      console.log(cyberSecurity[i]);
    }  
    let ethical =  document.getElementsByClassName("ethical-hacking");    
    for(let i=0; i < ethical.length; i++){
      ethical[i].style.display = "none";
      console.log(ethical[i]);
    }
    let networking =  document.getElementsByClassName("networking");   
    for(let i=0; i < networking.length; i++){
      networking[i].style.display = "none";
      console.log(networking[i]);
    } 
    let visual =  document.getElementsByClassName("visual-basic");    
    for(let i=0; i < visual.length; i++){
      visual[i].style.display = "block";
      console.log(visual[i]);
    }
    
      console.log(visual);
    
  } else{
    main.style.height = `${6800 - 3000}px`;

    console.log("how possible")
  }
  
  console.log(obj.options[obj.selectedIndex].text);
}

