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

// Form Validation
formValidation = (elem, type = "input") => {
  if (type === "input") {
    if (elem.value) {
      elem.style.backgroundColor = null;
    } else {
      elem.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
  } else if (type === "select") {
    let selects = document.querySelectorAll(".custom-select");
    let flag = true;
    selects.forEach(sel => {
      if (sel.children[1].innerHTML === "-") {
        flag = false;
      } else {
        flag = flag && true;
      }
    });
    let submitBut = document.querySelector(".submitBut");
    if (flag === false) {
      submitBut.disabled = "true";
      submitBut.style.cursor = "not-allowed";
      submitBut.style.backgroundColor = "#ccc";
    } else {
      submitBut.disabled = false;
      submitBut.style.cursor = "pointer";
      submitBut.style.backgroundColor = "#006aff";
    }
  }
};

// custom select box
let selectHolderArr, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
selectHolderArr = document.getElementsByClassName("custom-select");
for (i = 0; i < selectHolderArr.length; i++) {
  selElmnt = selectHolderArr[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  selectHolderArr[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          formValidation(this.innerHTML, "select");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  selectHolderArr[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  let x,
    y,
    i,
    arrNo = [];
  x = document.querySelectorAll(".select-items");
  y = document.querySelectorAll(".select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

//drag and drop for uploading file
let dropArea = document.getElementById("drop-area");
// Adding some events and stop bubbling up
["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults);
});
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}
// adding some styles by adding and removing class
["dragenter", "dragover"].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight);
});

["dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight);
});

function highlight(e) {
  dropArea.classList.add("highlight");
}

function unhighlight(e) {
  dropArea.classList.remove("highlight");
}

//get all data and files on drop
dropArea.addEventListener("drop", handleDrop);
let fileName;
function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;
  handleFiles(files);
}
// what to do with files I chose a default foe files as parameter
handleFiles = (files = [{ name: "" }]) => {
  let gallaryHolder = document.getElementById("gallery");
  while (gallaryHolder.firstChild) {
    gallaryHolder.removeChild(gallaryHolder.firstChild);
  }
  let para = document.createElement("P");
  // if click on close icon beside each upload
  if (files[0].name === "") {
    para.innerHTML = "";
  } else {
    // if you upload something
    para.innerHTML = `<span style="color: #006aff;"><strong>${files[0].name}</strong><span onclick="handleFiles()" style="color:red; cursor: pointer"> &#10006;</span></span>`;
  }
  gallaryHolder.appendChild(para);
  let myFile = [];
  myFile = [...files];
  myFile.forEach(uploadFile);
};

uploadFile = file => {
  let formData = new FormData();
  formData.append("file", file);
};

// when submit the form relocate to form and show sucess message
submitContactForm = e => {
  e.preventDefault();
  window.document.location = "./form.html" + "?message=success";
};

// when page loads check if you should show a message
checkMessage = () => {
  let undecoded = document.location.search.replace(/^.*?\=/, "");
  decoded = decodeURI(undecoded);
  if (decoded === "success") {
    let messageContainer = document.createElement("div");
    messageContainer.innerHTML = `Your message has been sent successfully`;
    messageContainer.style.display = "flex";
    messageContainer.style.justifyContent = "center";
    messageContainer.style.alignItems = "center";
    messageContainer.style.backgroundColor = "green";
    messageContainer.style.color = "white";
    messageContainer.style.position = "fixed";
    messageContainer.style.bottom = "0";
    messageContainer.style.padding = "15px";
    document.body.appendChild(messageContainer);
    setTimeout(() => {
      document.body.removeChild(messageContainer);
    }, 4000);
  }
};
let indexPageInput = [];
// Getting input value from dropdown link on index.html and locate to result.html
function DropDownInputAssign(locationName, type) {
  indexPageInput[0] = locationName;
  indexPageInput[1] = type;
  window.document.location =
    "../../result.html" + "?inputLocation=" + indexPageInput;
}
