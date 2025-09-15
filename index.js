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
    }
    else if(email.value.trim() === ""){
        alert("Please enter an email address");
    }
    else if(email.value.trim() !== "@"){
        alert("Please enter a valid email address");
    }
    else {
        alert("Thanks for submission!");
    }
}