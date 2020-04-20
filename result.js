// Psudo style
var UID = {
  _current: 0,
  getNew: function() {
    this._current++;
    return this._current;
  }
};

HTMLElement.prototype.pseudoStyle = function(element, prop, value) {
  var _this = this;
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName("head")[0];
  var _sheet =
    document.getElementById(_sheetId) || document.createElement("style");
  _sheet.id = _sheetId;
  var className = "pseudoStyle" + UID.getNew();

  _this.className += " " + className;

  _sheet.innerHTML +=
    " ." + className + ":" + element + "{" + prop + ":" + value + "}";
  _head.appendChild(_sheet);
  return this;
};
// Variable for selected option Value
let globalSelectValue;
// If a small nav button clicked
window.onclick = function(event) {
  // Showing or hiding small nav boxes on result.html
  let x = document.querySelector("#checkBoxContainer");
  if (event.target.closest("#homeType")) {
    if (x.style.display == "none" || x.style.display == "") {
      butDisplay("#checkBoxContainer", "homeType", "yes");
    } else {
      butDisplay("#checkBoxContainer", "homeType", "no");
    }
  } else if (event.target.closest("#checkBoxContainer") == null) {
    butDisplay("#checkBoxContainer", "homeType", "no");
  }
  let x_1 = document.querySelector("#priceButContainer");
  if (event.target.closest("#homePriceType")) {
    if (x_1.style.display == "none" || x_1.style.display == "") {
      butDisplay("#priceButContainer", "homePriceType", "yes");
    } else {
      butDisplay("#priceButContainer", "homePriceType", "no");
    }
  } else if (event.target.closest("#priceButContainer") == null) {
    butDisplay("#priceButContainer", "homePriceType", "no");
  }
  let x_2 = document.querySelector("#bedsButContainer");
  if (event.target.closest("#homeBedsType")) {
    if (x_2.style.display == "none" || x_2.style.display == "") {
      butDisplay("#bedsButContainer", "homeBedsType", "yes");
    } else {
      butDisplay("#bedsButContainer", "homeBedsType", "no");
    }
  } else if (event.target.closest("#bedsButContainer") == null) {
    butDisplay("#bedsButContainer", "homeBedsType", "no");
  }
  let x_3 = document.querySelector("#houseButContainer");
  if (event.target.closest("#houseType")) {
    if (x_3.style.display == "none" || x_3.style.display == "") {
      butDisplay("#houseButContainer", "houseType", "yes");
    } else {
      butDisplay("#houseButContainer", "houseType", "no");
    }
  } else if (event.target.closest("#houseButContainer") == null) {
    butDisplay("#houseButContainer", "houseType", "no");
  }
  let x_4 = document.querySelector("#moreMainContainer");
  if (event.target.closest("#moreButSmallnav")) {
    if (x_4.style.display == "none" || x_4.style.display == "") {
      butDisplay("#moreMainContainer", "moreButSmallnav", "yes");
    } else {
      butDisplay("#moreMainContainer", "moreButSmallnav", "no");
    }
  } else if (
    event.target.closest("#moreMainContainer") == null &&
    event.target.closest(".hoaTooltiptext") == null
  ) {
    butDisplay("#moreMainContainer", "moreButSmallnav", "no");
  }
  let chechboxArray = document.getElementsByClassName("customCheckbox");
  for (let i = 0; i < chechboxArray.length; i++) {
    if (event.target == chechboxArray[i]) {
      for (let j = 0; j < chechboxArray.length; j++) {
        document
          .getElementById(chechboxArray[j].id)
          .nextElementSibling.pseudoStyle("before", "box-shadow", "none");
      }
      document
        .getElementById(chechboxArray[i].id)
        .nextElementSibling.pseudoStyle(
          "before",
          "box-shadow",
          "0 0 0 0.4px rgb(0, 106, 255), 0 0 4px 0 #007FFF"
        );
    } else {
      document
        .getElementById(chechboxArray[i].id)
        .nextElementSibling.pseudoStyle("before", "box-shadow", "none");
    }
  }
  if (event.target.closest("#smallSearchResult")) {
    document.getElementById("smallSearchResult").style.boxShadow =
      "0 0 5px rgb(30, 142, 255)";
  } else {
    document.getElementById("smallSearchResult").style.boxShadow = null;
  }
  // TooltipBox for HOA filter
  let moreMainContainer = document.querySelector("#moreMainContainer");
  let hoaTooltiptext = document.querySelector(".hoaTooltiptext");
  let questionCircle = document.querySelector(".fa-question-circle");
  if (
    (event.target.closest(".hoaTooltiptext") &&
      !event.target.closest(".hoaTooltiptext__closeSign")) ||
    (event.target.closest(".hoaLabel") &&
      hoaTooltiptext.style.visibility == "hidden")
  ) {
    hoaTooltiptext.style.visibility = "visible";
    questionCircle.style.color = "#2a2a33";
    if (window.matchMedia("(max-width: 500px)").matches) {
    } else {
      hoaTooltiptext.style.top = `${Number(
        moreMainContainer.getBoundingClientRect().y
      )}px`;
      hoaTooltiptext.style.left = `${Number(
        moreMainContainer.getBoundingClientRect().x
      ) +
        1.6 * questionCircle.offsetLeft}px`;
    }
  } else if (
    event.target.closest(".hoaTooltiptext__closeSign") ||
    (event.target.closest(".hoaLabel") &&
      document.querySelector(".hoaTooltiptext").style.visibility == "visible")
  ) {
    document.querySelector(".hoaTooltiptext").style.visibility = "hidden";
    document.querySelector(".fa-question-circle").style.color = null;
  } else {
    document.querySelector(".hoaTooltiptext").style.visibility = "hidden";
    document.querySelector(".fa-question-circle").style.color = null;
  }
  if (document.getElementById("homeSectionContainer").style.display == "grid") {
    if (event.target.closest(".directionIcon")) {
      document.getElementById("homeSectionContainer").style.display = "none";
    } else if (
      !event.target.closest("#clickHome") &&
      !event.target.closest(".mainBigHomeContainer__smallHeader") &&
      !event.target.closest(".shareHomeContainer")
    ) {
      document.getElementById("homeSectionContainer").style.display = "none";
    }
  }
  // showing or hiding mobile menue
  if (event.target.closest("#phoneNavMenueCloseIcon")) {
    document.querySelector("#resultPhoneNavMenue").style.display = "none";
  }
  // showing or hiding mobile menue dropdowns
  if (event.target.closest("#phoneMenueMyZillowArrow")) {
    let phoneMenueMyZillow = document.querySelector("#phoneMenueMyZillow");
    let phoneMenueMyZillowArrow = document.querySelector(
      "#phoneMenueMyZillowArrow"
    );
    if (phoneMenueMyZillow.style.display == "block") {
      phoneMenueMyZillow.style.display = "none";
      phoneMenueMyZillowArrow.style.transform = "rotate(0deg)";
    } else {
      phoneMenueMyZillow.style.display = "block";
      phoneMenueMyZillowArrow.style.transform = "rotate(-180deg)";
    }
  }
  if (event.target.closest("#phoneMenueBuyArrow")) {
    let phoneMenueBuy = document.querySelector("#phoneMenueBuy");
    let phoneMenueBuyArrow = document.querySelector("#phoneMenueBuyArrow");
    if (phoneMenueBuy.style.display == "block") {
      phoneMenueBuy.style.display = "none";
      phoneMenueBuyArrow.style.transform = "rotate(0deg)";
    } else {
      phoneMenueBuy.style.display = "block";
      phoneMenueBuyArrow.style.transform = "rotate(-180deg)";
    }
  }
  if (event.target.closest("#phoneMenueRentArrow")) {
    let phoneMenueRent = document.querySelector("#phoneMenueRent");
    let phoneMenueRentArrow = document.querySelector("#phoneMenueRentArrow");
    if (phoneMenueRent.style.display == "block") {
      phoneMenueRent.style.display = "none";
      phoneMenueRentArrow.style.transform = "rotate(0deg)";
    } else {
      phoneMenueRent.style.display = "block";
      phoneMenueRentArrow.style.transform = "rotate(-180deg)";
    }
  }
  if (event.target.closest("#phoneMenueSellArrow")) {
    let phoneMenueSell = document.querySelector("#phoneMenueSell");
    let phoneMenueSellArrow = document.querySelector("#phoneMenueSellArrow");
    if (phoneMenueSell.style.display == "block") {
      phoneMenueSell.style.display = "none";
      phoneMenueSellArrow.style.transform = "rotate(0deg)";
    } else {
      phoneMenueSell.style.display = "block";
      phoneMenueSellArrow.style.transform = "rotate(-180deg)";
    }
  }
  if (event.target.closest("#phoneMenueHomeLoansArrow")) {
    let phoneMenueHomeLoans = document.querySelector("#phoneMenueHomeLoans");
    let phoneMenueHomeLoansArrow = document.querySelector(
      "#phoneMenueHomeLoansArrow"
    );
    if (phoneMenueHomeLoans.style.display == "block") {
      phoneMenueHomeLoans.style.display = "none";
      phoneMenueHomeLoansArrow.style.transform = "rotate(0)";
    } else {
      phoneMenueHomeLoans.style.display = "block";
      phoneMenueHomeLoansArrow.style.transform = "rotate(-180deg)";
    }
  }
  if (event.target.closest("#phoneMenueAgentFinderArrow")) {
    let phoneMenueAgentFinder = document.querySelector(
      "#phoneMenueAgentFinder"
    );
    let phoneMenueAgentFinderArrow = document.querySelector(
      "#phoneMenueAgentFinderArrow"
    );
    if (phoneMenueAgentFinder.style.display == "block") {
      phoneMenueAgentFinder.style.display = "none";
      phoneMenueAgentFinderArrow.style.transform = "rotate(0deg)";
    } else {
      phoneMenueAgentFinder.style.display = "block";
      phoneMenueAgentFinderArrow.style.transform = "rotate(-180deg)";
    }
  }
};
//showing mobile menue
const resultShowMobileMenue = () => {
  document.querySelector("#resultPhoneNavMenue").style.display = "block";
};
const resultHideMobileMenue = x => {
  document.querySelector(x).style.display = "none";
};
// invisible arrow in each button
document
  .querySelector("#homeType")
  .pseudoStyle(
    "after",
    "border-color",
    "transparent transparent transparent transparent"
  );
document
  .querySelector("#homeBedsType")
  .pseudoStyle(
    "after",
    "border-color",
    "transparent transparent transparent transparent"
  );
document
  .querySelector("#homePriceType")
  .pseudoStyle(
    "after",
    "border-color",
    "transparent transparent transparent transparent"
  );
document
  .querySelector("#houseType")
  .pseudoStyle(
    "after",
    "border-color",
    "transparent transparent transparent transparent"
  );
document
  .querySelector("#moreButSmallnav")
  .pseudoStyle(
    "after",
    "border-color",
    "transparent transparent transparent transparent"
  );

// id done button pushed on result.html dropdown button
function donePush(y, x) {
  let butContainer = document.getElementById(x);
  let dropDownContainer = document.querySelector(y);
  dropDownContainer.style.display = "none";
  butContainer.style.background = "white";
  butContainer.style.color = "rgb(0, 106, 255)";
  butContainer.pseudoStyle(
    "after",
    "border-color",
    "transparent transparent transparent transparent"
  );
}
function butDisplay(boxId, butId, flag) {
  let x = document.querySelector(boxId);
  let y = document.getElementById(butId);
  if (flag == "yes") {
    //visible arrow in the button
    y.pseudoStyle(
      "after",
      "border-color",
      "transparent transparent #fff transparent"
    );
    if (y == "homeType") {
      x.style.display = "flex";
    } else {
      x.style.display = "block";
    }
    y.style.background = "rgb(0, 106, 255)";
    y.style.color = "white";
    if (window.matchMedia("(max-width: 899px)").matches) {
      x.style.maxWidth = `${document.body.clientWidth}px`;
      x.style.width = `${document.body.clientWidth}px`;
      x.style.left = `-${Number(y.getBoundingClientRect().x) - 4}px`;
    } else {
      x.style.maxWidth = null;
    }
  } else if (flag != "yes") {
    //invisible arrow in the button
    y.pseudoStyle(
      "after",
      "border-color",
      "transparent transparent transparent transparent"
    );
    x.style.display = "none";
    y.style.background = "white";
    y.style.color = "rgb(0, 106, 255)";
  }
}
// Custom Select box
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
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
          // Get clicked data element's value
          switch (s.parentNode.id) {
            case "hoaSelect":
              listingType.hoa = Number(s.options[i].value);
              break;
            case "totalParkingSelect":
              listingType.totalParkingObj = Number(s.options[i].value);
              break;
            case "minLivingAreaSelect":
              listingType.minLivingAreaObj = Number(s.options[i].value);
              break;
            case "maxLivingAreaSelect":
              listingType.maxLivingAreaObj = Number(s.options[i].value);
              break;
            case "minLotSizeSelect":
              listingType.minLotSizeObj = Number(s.options[i].value);
              break;
            case "maxLotSizeSelect":
              listingType.maxLotSizeObj = Number(s.options[i].value);
              break;
            case "daysOnMarketSelect":
              listingType.daysOnMarketObj = Number(s.options[i].value);
              break;
            case "sortSelect":
              listingType.sortTypeObj = s.options[i].value;
              break;
            default:
              break;
          }
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].style.color = null;
            y[k].removeAttribute("class");
          }
          this.classList.add("same-as-selected");
          this.style.color = "white";
          break;
        }
      }
      h.click();
      selectFiltered(listingType);
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    // when click on select box with arrow rotate arrow
    let wrapperElem = this.parentElement.parentElement;
    if (wrapperElem.className === "homeInfoHeader__selectboxWrapper") {
      let selArrow = document.querySelector(".selectArrow");
      selArrow.classList.toggle("rotateArrow");
      // draw or hidden border
      if (selArrow.classList.length === 4) {
        wrapperElem.style.border = "dodgerblue 1px solid";
      } else {
        wrapperElem.style.border = null;
      }
    }
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    if (this.getBoundingClientRect().y > 430) {
      this.nextSibling.style.top = "auto";
      this.nextSibling.style.bottom = "100%";
    } else {
      this.nextSibling.style.top = null;
      this.nextSibling.style.bottom = null;
    }
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt, keepShadow = null) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      // close all selects and if it was select box with big arrow rotate arrow remove its border too
      let wrapperElem = x[i].parentElement.parentElement;
      if (wrapperElem.className === "homeInfoHeader__selectboxWrapper") {
        let selArrow = document.querySelector(".selectArrow");
        wrapperElem.style.border = null;
        selArrow.classList.remove("rotateArrow");
      }
      x[i].classList.add("select-hide");
      if (keepShadow === null) {
        x[i].previousElementSibling.style.boxShadow = "none";
      }
      x[i].previousElementSibling.style.border = null;
    } else {
      x[i].previousElementSibling.style.boxShadow = "0 0 5px rgb(30, 142, 255)";
      x[i].previousElementSibling.style.border = "#006aff 1px solid";
      x[i].previousElementSibling.style.outline = "none";
    }
  }
}
// change mobile nav style when scrolling
const mobileNavStyleControl = x => {
  if (window.matchMedia("(max-width: 680px)").matches) {
    let height;
    if (window.matchMedia("(max-width: 450px)").matches) {
      height = 206.08;
    } else {
      height = 260.75;
    }
    let i = document.querySelector(".mainBigHomeContainer__secondRow");
    let j = document.querySelectorAll(".HomeContainerIcon__icon");
    if (x.scrollTop > height) {
      i.style.backgroundColor = "#fff";
      i.style.backgroundImage = "none";
      i.style.borderBottom = "rgba(167, 166, 171, 0.5) 0.7px solid";
      j.forEach(element => {
        element.style.color = "#006aff";
      });
    } else {
      i.style.backgroundColor = null;
      i.style.backgroundImage = null;
      i.style.borderBottom = null;
      j.forEach(element => {
        element.style.color = null;
      });
    }
  }
};
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", () => {
  if (event.target.closest(".select-items")) {
    closeAllSelect(null, true);
  } else {
    closeAllSelect();
  }
});
if (!currentLocation) {
  autocomplete(document.getElementById("searchBoxResult"), locations);
}

// Form Validation
formValidation = elem => {
  if (elem.type === "email") {
    let check = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var emails = elem.value.split(",");
    let flag = true;
    emails.forEach(function(email) {
      if (check.test(email.trim()) && flag) {
        elem.style.backgroundColor = null;
      } else {
        flag = false
        elem.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
      }
    });
  } else {
    if (elem.value) {
      elem.style.backgroundColor = null;
    } else {
      elem.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
  }
};
shareFormSubmit = e => {
  e.preventDefault();
  hideShareForm();
  let inputs = document.querySelectorAll(".shareInput");
  inputs.forEach(element => {
    element.value = null;
  });
  document.querySelector(".shareFormTextArea").innerHTML =
    "Check out this home I found on Zillow.";
};
// More button dropDown
moreDropDownShowHide = (classNm) => {
  let moreButContainer = document.querySelector(`.${classNm}`);
  moreButContainer.classList.toggle('show');
  moreButContainer.classList.toggle('hide');
}
hideShareForm = event => {
  let FormContainer = document.querySelector(".shareHomeContainer");
  FormContainer.style.backgroundColor = "transparent";
  FormContainer.style.transform = "translateY(100%)";
};
// Show Form box
showShareForm = event => {
  let showFormContainer = document.querySelector(".shareHomeContainer");
  showFormContainer.style.transform = "translateY(-100%)";
  showFormContainer.style.backgroundColor = null;
};

shareFormShowHideCheck = event => {
  if (!event.target.closest(".shareHomeContainer__formWrapper")) {
    hideShareForm();
  }
};
