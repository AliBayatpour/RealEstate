// DropDown Nav button.
document.addEventListener("mouseover", event => {
  // Display Buy dropDown
  if (
    event.target.closest("#buyNavBut") ||
    event.target.closest("#buyNavDropDown")
  ) {
    document.getElementById("buyNavDropDown").style.opacity = "1";
    document.getElementById("buyNavDropDown").style.left = "0";
  } else {
    document.getElementById("buyNavDropDown").style.opacity = null;
    document.getElementById("buyNavDropDown").style.left = null;
  }
  // opacity Rent DropDown
  if (
    event.target.closest("#rentNavBut") ||
    event.target.closest("#rentNavDropDown")
  ) {
    document.getElementById("rentNavDropDown").style.opacity = "1";
    document.getElementById("rentNavDropDown").style.left = "0";
  } else {
    document.getElementById("rentNavDropDown").style.opacity = null;
    document.getElementById("rentNavDropDown").style.left = null;
  }
});

// mobile nav dropDown
const mobileMenuShowDropDown = (y, x) => {
  if (document.querySelector(x).style.display == "block") {
    document.querySelector(x).style.display = "none";
    y.style.transform = "rotate(0deg)";
  } else if (
    document.querySelector(x).style.display == "" ||
    document.querySelector(x).style.display == "none"
  ) {
    document.querySelector(x).style.display = "block";
    y.style.transform = "rotate(-180deg)";
  }
};

//  // showing or hiding mobile menue
const ShowMobileMenue = x => {
  document.querySelector(x).style.display = "block";
  document.querySelector(x).style.overflowY = "scroll";
  document.body.style.overflow = "hidden";
};
const HideMobileMenue = x => {
  document.querySelector(x).style.display = "none";
  document.querySelector(x).style.overflowY = null;
  document.body.style.overflow = null;
};
let indexPageInput = [];
// Getting input value from dropdown link on index.html and locate to result.html
function DropDownInputAssign(locationName, type) {
  indexPageInput[0] = locationName;
  indexPageInput[1] = type;
  window.document.location =
    "../../../result.html" + "?inputLocation=" + indexPageInput;
}
