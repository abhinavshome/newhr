/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function locationDropdown() {
  document.getElementById("location-dropdown").classList.toggle("show");
}

function userDropdown() {
  document.getElementById("user-dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
