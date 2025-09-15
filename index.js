let img = document.getElementById("img");
function openImg() {
    img.style.border = "2px solid #333";
    img.style.width = "250px";
    img.style.height = "312px";
    let pic = document.createElement("img");
    pic.src = "Pic/Khurram.png";
    pic.style.width = "100%";
    pic.style.height = "100%";
    pic.style.objectFit = "cover";
    pic.classList.add("manPic");
    img.innerHTML = "";
    img.appendChild(pic);
}

//  introduction part
let intro = document.getElementById("intro");
let introSec = document.getElementById("introSec");
introSec.style.display = "none";
function openIntro() {
    introSec.style.display = "block";
    intro.innerHTML = "";
    intro.appendChild(introSec)
};

//  contact form part
let contact = document.getElementById("contact");
let contactForm = document.getElementById("contactForm");
contactForm.style.display = "none";
function seeContact() {
    contactForm.style.display = "flex";
    contact.innerHTML = "";
    contact.appendChild(contactForm);
}

//  function for submission
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
function submitForm(event){
    event.preventDefault();
    if(name.value.trim() === ""){
        alert("Please enter your name");
        name.style.borderColor = "red";
        return false
    }
    else if(email.value.trim() === ""){
        alert("Please enter an email address");
        email.style.borderColor = "red";
        return false;
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        alert("Please enter a valid email address");
        email.style.borderColor = "red";
        return false;
    }
    else {
        name.style.borderColor = "";
        email.style.borderColor = "";
        alert("Thanks for submission!");
        return true;
    }
}