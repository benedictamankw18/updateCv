
<?php
if (isset($_POST["contact"])) {
    echo "
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"./font-awesome-4.7.0/css/font-awesome.css\">
<link rel=\"stylesheet\" href=\"./font-awesome-4.7.0/css/font-awesome.min.css\">
    <title>Document</title>
</head>
<style>
    .contactDetail {
    position: fixed;
    width: 80%;
    background-color: antiquewhite;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 2px 2px 3px #ccc;
    text-align: left;
    padding: 0px 30px 30px;
    z-index: 20000;
    transition: transform 0.5s ease, opacity 0.5s ease; /* Smooth transition for scale and fade */
    transform: scale(0); /* Start small */
    opacity: 0; /* Initially invisible */
    top: 20%;
    margin-left: 10%;
    margin-right: auto;
}

.contactDetail.visible {
    display: block;
    transform: scale(1); /* Scale to original size */
    opacity: 1; /* Make visible */
}

.contactDetail.hidden {
    transform: scale(1.5); /* Scale up before hiding */
    opacity: 0; /* Fade out */
}

.HeaderContact {
    padding: 15px 0px 0px;
    font-size: 30px;
    text-align: center;
}

.contactDetailSingle{
        padding-top: 10px;
        text-align: left;
        padding-left: 300px;
        display: inline;
        margin-left: auto;
        margin-right: auto;
    }
.contactInfo{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        font-weight: 700;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        display: inline;
    }
.contactInfoDetail i{
        font-size: 15px;
    }
.contactInfoDetail{
        display: inline;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
    }
.contactInfoClose i{
        font-size: 30px;
        float: right;
        padding-top: 10px;
        color: red;
        cursor: pointer;
    }

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    .contactDetail{
    width: 80%;
    padding: 10px 20px 30px;
    }
    .contactDetailSingle{
        padding-left: 240px;
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .contactDetail{
    padding: 0px 20px 30px;
    width: 80%;
    }
    .contactDetailSingle{
        padding-left: 150px;
    }
    .HeaderContact{
        padding: 30px 0px 0px;
        font-size: 20px;
    }
    .contactInfoClose i{
        font-size: 30px;
        padding: 10px 0px 50px;
    }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .contactDetail{
    width: 80%;
    padding: 10px 20px 30px;
    }
    .contactDetailSingle{
        padding-left: 10px;
    }
    .HeaderContact{
        padding: 30px 0px 0px;
        font-size: 20px;
    }
    .contactInfoClose i{
        font-size: 30px;
        padding: 10px 0px 50px;
    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .contactDetail{
    width: 80%;
    padding: 10px 20px 30px;
    top: 2%;
    overflow-x: scroll;
    } 
    .contactInfo{
        padding-top: 10px;
        padding-left: 10px;
        display: block;
    }
    .HeaderContact{
        padding: 30px 0px 0px;
        font-size: 23px;
    }
    .contactInfoClose i{
        font-size: 30px;
        padding: 10px 0px 50px;
    }

}

@media screen and (min-width: 0px) and (max-width: 319px) {
    html{
        display: none;
    }
}
</style>
<body>
    
    
<div class=\"contactDetail\"  id=\"contactDetail\">
    <div class=\"contactInfoClose\" onclick=\"closeContact()\"><i class=\"fa fa-close\"></i></div>
    <h2 class=\"HeaderContact\">Contact Information Of {Me}</h2>
    <hr>
    <div class=\"contactDetailSingle\">
        <strong class=\"contactInfo\">Name: </strong> &nbsp;&nbsp;&nbsp;<article class=\"contactInfoDetail\"><i class=\"fa fa-info\"></i> Benedict Amankwa Osei</article>
    </div>
    <br>
    <div class=\"contactDetailSingle\">
        <strong class=\"contactInfo\">Email: </strong> &nbsp;&nbsp;&nbsp;<article class=\"contactInfoDetail\"><i class=\"fa fa-envelope-o\"></i> <a href=\"mailto:\">benedictamankwa18@gmil.com</a></article>
    </div>
    <br>
    <div class=\"contactDetailSingle\">
        <strong class=\"contactInfo\">Phone Number: </strong> &nbsp;&nbsp;&nbsp;<article class=\"contactInfoDetail\"><i class=\"fa fa-phone\"></i> <a href=\"tel:+\">0504221593</a></article>
    </div>
    <br>
    <div class=\"contactDetailSingle\">
        <strong class=\"contactInfo\">Whatsapp: </strong> &nbsp;&nbsp;&nbsp;<article class=\"contactInfoDetail\"><i class=\"fa fa-whatsapp\"></i> <a href=\"http://\">Benedict_Amankwa</a></article>
    </div>
    <br>
    <div class=\"contactDetailSingle\">
        <strong class=\"contactInfo\">Telegram: </strong> &nbsp;&nbsp;&nbsp;<article class=\"contactInfoDetail\"><i class=\"fa fa-telegram\"></i> <a href=\"http://\">Benedict Amankwa Osei</a></article>
    </div>
    <br>
    <div class=\"contactDetailSingle\">
        <strong class=\"contactInfo\">Linkedin: </strong> &nbsp;&nbsp;&nbsp;<article class=\"contactInfoDetail\"><i class=\"fa fa-linkedin-square\"></i> <a href=\"http://\">Benedict Amankwa Osei</a></article>
    </div>
    <br>
    <div class=\"contactDetailSingle\">
        <strong class=\"contactInfo\">Facebook: </strong> &nbsp;&nbsp;&nbsp;<article class=\"contactInfoDetail\"><i class=\"fa fa-facebook\"></i> <a href=\"http://\">Benedict Amankwa Osei</a></article>
    </div>
    <br>
    <div class=\"contactDetailSingle\">
        <strong class=\"contactInfo\">GitHub: </strong> &nbsp;&nbsp;&nbsp;<article class=\"contactInfoDetail\"><i class=\"fa fa-github\"></i> <a href=\"http://\">Benedict Amankwa Osei</a></article>
    </div>
    <br>
</div>

</body>

<script>
openContact();
    function closeContact() {
    document.getElementsByTagName(\"body\")[0].style.position = \"relative\";
    const contactDetail = document.getElementById(\"contactDetail\");
    contactDetail.classList.add(\"hidden\"); // Trigger hiding animation

    // Delay the display change to allow fade-out effect
    setTimeout(() => {
        contactDetail.style.display = \"none\"; // Finally hide it
        contactDetail.classList.remove(\"visible\"); // Remove visible class
    }, 500); // Match this to the CSS transition duration
}

// function openContact() {
//         $.ajax({
//             type: \"GET\",
//             url: \"contact.php\",
//             success: function(data) {
//                 $(\"#contact-info\").html(data);
//                 $(\"#contact-info\").show();
//             }
//         });
//     }


// function closeContact() {
//     document.getElementsByTagName(\"body\")[0].style.position = \"relative\";
//     const contactDetail = document.getElementById(\"contactDetail\");
//     contactDetail.classList.add(\"hidden\"); // Trigger hiding animation

//     // Delay the display change to allow fade-out effect
//     setTimeout(() => {
//         contactDetail.style.display = \"none\"; // Finally hide it
//         contactDetail.classList.remove(\"visible\"); // Remove visible class
//     }, 500); // Match this to the CSS transition duration
// }


function openContact() {
    document.getElementsByTagName(\"body\")[0].style.position = \"fixed\";
    const contactDetail = document.getElementById(\"contactDetail\");
    contactDetail.classList.remove(\"hidden\"); // Ensure hidden class is removed
    contactDetail.style.display = \"block\"; // Show first

    // Allow for a slight delay to ensure the element is displayed before scaling
    setTimeout(() => {
        contactDetail.classList.add(\"visible\"); // Fade in and scale to original size
    }, 10); // Short delay
}
</script>


</html>
";
}
?>




<!-- 
// Define contact information
$contactInfo = array(
    \"name\" => \"Benedict Amankwa\",
    \"email\" => \"benedict.amankwa@example.com\",
    \"phone\" => \"+1234567890\",
    \"address\" => \"123 Main St, Anytown, USA\"
);

// Display contact information

    echo \"<h2>Contact Information</h2>\";
    echo \"<p>Name: \" . $contactInfo[\"name\"] . \"</p>\";
    echo \"<p>Email: \" . $contactInfo[\"email\"] . \"</p>\";
    echo \"<p>Phone: \" . $contactInfo[\"phone\"] . \"</p>\";
    echo \"<p>Address: \" . $contactInfo[\"address\"] . \"</p>\"; -->
