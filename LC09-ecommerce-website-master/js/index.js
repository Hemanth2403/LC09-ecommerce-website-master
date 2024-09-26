const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");


if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
  document.querySelector(".nav-link[href='#about']").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent the default anchor behavior
    var aboutSection = document.getElementById("about");
    if (aboutSection.style.display === "none") {
      aboutSection.style.display = "block";  // Show about section
    } else {
      aboutSection.style.display = "none";   // Hide about section if clicked again
    }
  });
  
}
document.getElementById("contact-link").addEventListener("click", function(event) {
  event.preventDefault();  // Prevent the default anchor behavior
  var contactInfo = document.getElementById("contact-info");
  if (contactInfo.style.display === "none") {
    contactInfo.style.display = "block";  // Show contact info
  } else {
    contactInfo.style.display = "none";   // Hide contact info if clicked again
  }
});
// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}
