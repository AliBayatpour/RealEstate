// create dropdown options
initialization = () => {
  let dropdownRealEstate = document.querySelector("#myDropdown1");
  let dropdownRent = document.querySelector("#myDropdown2");
  let dropdownSale = document.querySelector("#myDropdown3");
  let dropdownHomes = document.querySelector("#myDropdown4");
  for (let item in locations) {
    dropdownRealEstate.innerHTML += `<span class="dropdown-content__stateSpans" onclick="DropDownInputAssign('${locations[item]}', 'all')">${locations[item]} real estate</span>`;
    dropdownRent.innerHTML += `<span class="dropdown-content__stateSpans" onclick="DropDownInputAssign('${locations[item]}', 'rent')">${locations[item]} homes for rent</span>`;
    dropdownSale.innerHTML += `<span class="dropdown-content__stateSpans" onclick="DropDownInputAssign('${locations[item]}', 'sale')">${locations[item]} homes for sale</span>`;
    dropdownHomes.innerHTML += `<span class="dropdown-content__stateSpans" onclick="DropDownInputAssign('${locations[item]}', 'all')">${locations[item]}</span>`;
  }
};
if (window.location.pathname.includes("result")) {
  document.body.style.overflow = "hidden";
} else {
  document.body.style.overflowX = "hidden";
}
// change page when sell box clicked
goToSell = () => {
  window.location.href = "./pages/foreclosureCenter/foreclosureCenter.html";
};
// DropDown Nav button.
document.addEventListener("mouseover", (event) => {
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

// showing or hiding mobile menue
const indexShowMobileMenue = (x) => {
  document.querySelector(x).style.display = "block";
  document.querySelector(x).style.overflowY = "scroll";
  document.body.style.overflow = "hidden";
};
const IndexHideMobileMenue = (x) => {
  document.querySelector(x).style.display = "none";
  document.querySelector(x).style.overflowY = null;
  document.body.style.overflow = null;
};
// Random coordinate generator
function getRndInteger(min, max) {
  return (Math.random() * (max - min) + min).toFixed(6);
}
// Change three box under banner when hover
function bigBox(x, y) {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    document.getElementById(y).style.backgroundColor = "rgb(0, 106, 255)";
    document.getElementById(y).style.color = "white";
    document.getElementById(x).style.marginTop = "0";
    document.getElementById(x).style.paddingBottom = "65px";
    document.getElementById(x).style.boxShadow =
      "rgb(150, 150, 150) 0px 5px 15px";
  }
}
function normalBox(x, y) {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    document.getElementById(y).style.backgroundColor = "white";
    document.getElementById(y).style.color = "rgb(0, 106, 255)";
    document.getElementById(x).style.marginTop = "10px";
    document.getElementById(x).style.paddingBottom = null;
    document.getElementById(x).style.boxShadow = "none";
  }
}
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

// Arrows rotate when clicked
function arrowRotation(x, z) {
  let y = document.getElementById(x);
  let i = document.getElementById(z);
  if (y.style.display === "block") {
    y.style.display = "none";
    i.style.transform = "rotate(360deg)";
  } else {
    y.style.display = "block";
    i.style.transform = "rotate(180deg)";
  }
}

// Moving arrow on the banner
function movingArrow() {
  let i = document.getElementById("movingArrow");
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 100) {
    i.style.opacity = "0";
  } else {
    i.style.opacity = "1";
  }
}

// if buy a home box clicked
focusFunc = () => {
  document.getElementById("searchBox").focus();
};

let indexPageInput = [];
// Getting input value from dropdown link on index.html and locate to result.html
function DropDownInputAssign(locationName, type) {
  indexPageInput[0] = locationName;
  indexPageInput[1] = type;
  window.document.location = "result.html" + "?inputLocation=" + indexPageInput;
}
// Getting input value from mainsearch on index.html and locate to result.html
function inputAssign(e, idName, type) {
  e.preventDefault();
  indexPageInput[0] = document.getElementById(idName).value;
  indexPageInput[1] = type;
  window.document.location = "result.html" + "?inputLocation=" + indexPageInput;
}

// hit enter on the main search bar
inputKeyUp = (e, type) => {
  e.which = e.which || e.keyCode;
  if (e.which == 13) {
    if (!window.location.pathname.includes("result")) {
      inputAssign(event, "searchBox", type);
    } else {
      inputAssign(event, "searchBoxResult", type);
    }
  }
};
//initial state check
let initialState = true;
// initially check the listingType checkBoxes
function initialCheck(id) {
  let checkArray = document.querySelectorAll(".checkbox");
  // what type of listing type you want?
  // rent or sale activate if you use dropdown buttons on index.html instead of searchbox
  switch (id) {
    case "all":
      listingType.sale = "houseForSaleCircle";
      listingType.potential = true;
      listingType.rent = "houseForRentCircle";
      listingType.sold = true;
      for (let checCount = 0; checCount < checkArray.length; checCount++) {
        checkboxClick(checkArray[checCount].id, false);
      }
      break;

    case "rent":
      checkboxClick("checkboxId_3", true);
      break;

    case "sale":
      checkboxClick("checkboxId_1", true);
      break;

    default:
      listingType.sale = "houseForSaleCircle";
      listingType.potential = true;
      listingType.rent = "houseForRentCircle";
      listingType.sold = true;
      for (let checCount = 0; checCount < checkArray.length; checCount++) {
        checkboxClick(checkArray[checCount].id, false);
      }
      break;
  }
}
// checkbox check
function checkboxClick(x, flag) {
  var UID = {
    _current: 0,
    getNew: function() {
      this._current++;
      return this._current;
    },
  };

  let cn = [];
  cn = document.querySelectorAll(".checkbox");
  for (let i = 0; i <= 3; i++) {
    if (cn[i].id == x) {
      var div = document.getElementById(cn[i].children[1].id);
      div.pseudoStyle("before", "box-shadow", "0 0 3px 0px blue");
      // put all the circles and textcircles into two arrays for circles and for text and an array for all or listing Type
      let circleArray = [];
      let circleTxtArray = [];
      let allnone = [];
      let colorfulCircles = document.getElementById("colorfulCircles");
      let textCircles = document.getElementById("textCircles");
      let buttonTxt = document.getElementById("buttonTxt");
      for (let cs = 0; cs <= 3; cs++) {
        circleArray[cs] = colorfulCircles.children[cs];
        circleTxtArray[cs] = textCircles.children[cs];
      }
      for (let cfo = 0; cfo <= 1; cfo++) {
        allnone[cfo] = buttonTxt.children[cfo];
      }
      textnodeArray = [];
      textnodeArray[0] = document.createTextNode("For Sale");
      textnodeArray[1] = document.createTextNode("Potential Listings");
      textnodeArray[2] = document.createTextNode("For Rent");
      textnodeArray[3] = document.createTextNode("Sold");
      textnodeArray[4] = document.createTextNode(", ");
      // If uncheck a box
      if (document.getElementById(cn[i].children[0].id).checked) {
        document.getElementById(cn[i].children[0].id).checked = false;
        document.getElementById(circleArray[i].id).style.display = "none";
        // First Remove all the child
        for (let ct = 0; ct <= 3; ct++) {
          let txt = document.getElementById(circleTxtArray[ct].id);
          let firsttxt = txt.firstChild;
          while (firsttxt) {
            firsttxt.remove();
            firsttxt = txt.firstChild;
          }
        }
        // Check how many checked box we have
        let countf = 0;
        for (let cf = 0; cf <= 3; cf++) {
          if (document.getElementById(cn[cf].children[0].id).checked) {
            countf++;
          }
        }

        switch (countf) {
          // If none of boxes checked
          case 0:
            document.getElementById(allnone[0].id).style.display =
              "inline-block";
            break;
          // If one or more boxes checked
          default:
            let count = 0;
            document.getElementById(allnone[1].id).style.display = "none";
            for (let ct = 0; ct <= 3; ct++) {
              if (document.getElementById(cn[ct].children[0].id).checked) {
                switch (ct) {
                  case 0:
                    if (count <= 0) {
                      document
                        .getElementById(circleTxtArray[0].id)
                        .appendChild(textnodeArray[0]);
                    } else {
                      document
                        .getElementById(circleTxtArray[0].id)
                        .appendChild(document.createTextNode(", "));
                      document
                        .getElementById(circleTxtArray[0].id)
                        .appendChild(textnodeArray[0]);
                    }
                    count++;
                    break;
                  case 1:
                    if (count <= 0) {
                      document
                        .getElementById(circleTxtArray[1].id)
                        .appendChild(textnodeArray[1]);
                    } else {
                      document
                        .getElementById(circleTxtArray[1].id)
                        .appendChild(document.createTextNode(", "));
                      document
                        .getElementById(circleTxtArray[1].id)
                        .appendChild(textnodeArray[1]);
                    }
                    count++;
                    break;
                  case 2:
                    if (count <= 0) {
                      document
                        .getElementById(circleTxtArray[2].id)
                        .appendChild(textnodeArray[2]);
                    } else {
                      document
                        .getElementById(circleTxtArray[2].id)
                        .appendChild(document.createTextNode(", "));
                      document
                        .getElementById(circleTxtArray[2].id)
                        .appendChild(textnodeArray[2]);
                    }
                    count++;
                    break;
                  case 3:
                    if (count <= 0) {
                      document
                        .getElementById(circleTxtArray[3].id)
                        .appendChild(textnodeArray[3]);
                    } else {
                      document
                        .getElementById(circleTxtArray[3].id)
                        .appendChild(document.createTextNode(", "));
                      document
                        .getElementById(circleTxtArray[3].id)
                        .appendChild(textnodeArray[3]);
                    }
                    count++;
                    break;
                }
              }
            }
            break;
        }
        if (flag) {
          listingTypefilterHomes(cn);
        } else {
          if (x == "checkboxId_4") {
            listingTypefilterHomes(cn);
          }
        }
      }
      // If check a box
      else {
        document.getElementById(cn[i].children[0].id).checked = true;
        document.getElementById(circleArray[i].id).style.display =
          "inline-block";
        // First remove all the text
        for (let ct = 0; ct <= 3; ct++) {
          let txt = document.getElementById(circleTxtArray[ct].id);
          let firsttxt = txt.firstChild;
          while (firsttxt) {
            firsttxt.remove();
            firsttxt = txt.firstChild;
          }
        }
        // Check how many checked box we have
        let countf = 0;
        for (let cf = 0; cf <= 3; cf++) {
          if (document.getElementById(cn[cf].children[0].id).checked) {
            countf++;
          }
        }
        if (countf == 1) {
          document.getElementById(allnone[0].id).style.display = "none";
        }
        // check for different states
        switch (countf) {
          // If all boxes checked
          case 4:
            for (let ct = 0; ct <= 3; ct++) {
              let txt = document.getElementById(circleTxtArray[ct].id);
              let firsttxt = txt.firstChild;
              while (firsttxt) {
                firsttxt.remove();
                firsttxt = txt.firstChild;
              }
              if (ct == 1) {
                document.getElementById(allnone[ct].id).style.display =
                  "inline-block";
              }
            }
            break;
          default:
            let count = 0;
            for (let ct = 0; ct <= 3; ct++) {
              if (document.getElementById(cn[ct].children[0].id).checked) {
                switch (ct) {
                  case 0:
                    if (count <= 0) {
                      document
                        .getElementById(circleTxtArray[0].id)
                        .appendChild(textnodeArray[0]);
                    } else {
                      document
                        .getElementById(circleTxtArray[0].id)
                        .appendChild(document.createTextNode(", "));
                      document
                        .getElementById(circleTxtArray[0].id)
                        .appendChild(textnodeArray[0]);
                    }
                    count++;
                    break;
                  case 1:
                    if (count <= 0) {
                      document
                        .getElementById(circleTxtArray[1].id)
                        .appendChild(textnodeArray[1]);
                    } else {
                      document
                        .getElementById(circleTxtArray[1].id)
                        .appendChild(document.createTextNode(", "));
                      document
                        .getElementById(circleTxtArray[1].id)
                        .appendChild(textnodeArray[1]);
                    }
                    count++;
                    break;
                  case 2:
                    if (count <= 0) {
                      document
                        .getElementById(circleTxtArray[2].id)
                        .appendChild(textnodeArray[2]);
                    } else {
                      document
                        .getElementById(circleTxtArray[2].id)
                        .appendChild(document.createTextNode(", "));
                      document
                        .getElementById(circleTxtArray[2].id)
                        .appendChild(textnodeArray[2]);
                    }
                    count++;
                    break;
                  case 3:
                    if (count <= 0) {
                      document
                        .getElementById(circleTxtArray[3].id)
                        .appendChild(textnodeArray[3]);
                    } else {
                      document
                        .getElementById(circleTxtArray[3].id)
                        .appendChild(document.createTextNode(", "));
                      document
                        .getElementById(circleTxtArray[3].id)
                        .appendChild(textnodeArray[3]);
                    }
                    count++;
                    break;
                }
              }
            }

            break;
        }
        if (flag) {
          listingTypefilterHomes(cn);
        } else {
          if (x == "checkboxId_4") {
            listingTypefilterHomes(cn);
          }
        }
      }
    } else {
      var div = document.getElementById(cn[i].children[1].id);
      div.pseudoStyle("before", "box-shadow", "none");
    }
  }
}
// Sort the array
sortArray = (sortType) => {
  switch (sortType) {
    //Price(High to Low)
    case "PrHighToLow":
      break;

    //Price(Low to high)
    case "PrHighToLow":
      break;

    //Newest
    case "PrHighToLow":
      break;

    //Bedrooms
    case "PrHighToLow":
      break;

    //Square Feet
    case "PrHighToLow":
      break;

    //Lot size
    case "PrHighToLow":
      break;

    default:
      break;
  }
};
//values in an object for filter
let listingType = {
  sale: false,
  potential: false,
  rent: false,
  sold: false,
  minPrice: 0,
  maxPrice: 2000000000,
  bedNumber: true,
  exactBedNumber: true,
  house: 1,
  apartment: 2,
  condo: 3,
  townhouse: 4,
  manufactured: 5,
  land: 6,
  bathNumber: 0,
  hoa: 2000000000,
  mustHaveOpenHouseObj: null,
  totalParkingObj: 0,
  mustHaveGarageObj: null,
  minLivingAreaObj: 0,
  maxLivingAreaObj: 200000000,
  minLotSizeObj: 0,
  maxLotSizeObj: 200000000,
  minYearBuiltObj: 0,
  maxYearBuiltObj: 200000000,
  basementObj: null,
  daysOnMarketObj: 5000,
  sortTypeObj: "highToLowSort",
};
// Price Filter
function priceFilter(minOrMax, price) {
  let priceNum = Number(price);
  let minInput = document.getElementById("minSearch");
  let maxInput = document.getElementById("maxSearch");
  let priceButId = document.getElementById("homePriceType");
  // Input from MinInput or MaxInput
  if (minOrMax === "min") {
    if (Number(priceNum) != 0) {
      minInput.value = priceNum;
    } else {
      minInput.value = null;
    }
    listingType.minPrice = priceNum;
  } else if (
    (minOrMax === "max" || minOrMax === "any") &&
    Number(priceNum) != 0
  ) {
    if (minOrMax !== "any") {
      maxInput.value = priceNum;
    } else if (minOrMax === "any") {
      maxInput.value = null;
    }
    listingType.maxPrice = priceNum;
  }
  // Check for different situations change the price button text properly
  if (
    minInput.value > 0 &&
    maxInput.value > 0 &&
    listingType.maxPrice !== 2000000000
  ) {
    if (minInput.value < 1000000 && maxInput.value < 1000000) {
      priceButId.innerHTML = `$ ${minInput.value / 1000}K - $ ${maxInput.value /
        1000}K`;
    } else if (minInput.value < 1000000 && maxInput.value >= 1000000) {
      priceButId.innerHTML = `$ ${minInput.value / 1000}K - $ ${maxInput.value /
        1000000}M`;
    } else if (minInput.value >= 1000000 && maxInput.value >= 1000000) {
      priceButId.innerHTML = `$ ${minInput.value /
        1000000}M - $ ${maxInput.value / 1000000}M`;
    }
  } else if (
    minInput.value >= 0 &&
    (!maxInput.value || listingType.maxPrice === 2000000000)
  ) {
    if (minInput.value != 0) {
      if (minInput.value < 1000000) {
        priceButId.innerHTML = `$ ${minInput.value / 1000}K+`;
      } else {
        priceButId.innerHTML = `$ ${minInput.value / 1000000}M+`;
      }
    } else {
      priceButId.innerHTML = `Price`;
    }
    listingType.maxPrice = 2000000000;
  } else if (!minInput.value && maxInput.value) {
    if (maxInput.value < 1000000) {
      priceButId.innerHTML = `Up to $${maxInput.value / 1000}K`;
    } else {
      priceButId.innerHTML = `Up to $${maxInput.value / 1000000}M`;
    }
    listingType.minPrice = 0;
  } else {
    priceButId.innerHTML = `Price`;
  }
  if (
    minInput.value != 0 &&
    listingType.maxPrice != 2000000000 &&
    minInput.value > listingType.maxPrice
  ) {
    priceButId.innerHTML = `Price`;
  }
  selectFiltered(listingType);
}
// Listing type filter
function listingTypefilterHomes(inputcn) {
  for (let c_0 = 0; c_0 < inputcn.length; c_0++) {
    if (document.getElementById(inputcn[c_0].children[0].id).checked) {
      switch (inputcn[c_0].children[0].value) {
        case "sale":
          listingType.sale = "houseForSaleCircle";
          break;
        case "potential":
          listingType.potential = true;
          break;
        case "rent":
          listingType.rent = "houseForRentCircle";
          break;
        case "sold":
          listingType.sold = true;
          break;
        default:
          break;
      }
    } else {
      switch (inputcn[c_0].children[0].value) {
        case "sale":
          listingType.sale = false;
          break;
        case "potential":
          listingType.potential = false;
          break;
        case "rent":
          listingType.rent = false;
          break;
        case "sold":
          listingType.sold = false;
          break;
        default:
          break;
      }
    }
  }
  selectFiltered(listingType);
}
// Bed filter
function bedFilter(elem) {
  let exactbedCheck = document.getElementById("exactMatch");
  if (exactbedCheck.checked) {
    document.getElementById("homeBedsType").innerHTML = `Beds: ${elem.value}`;
    switch (elem.value) {
      case "0":
        document.getElementById("homeBedsType").innerHTML = `Beds: Studio`;
        listingType.exactBedNumber = 0;
        break;
      case "1":
        listingType.exactBedNumber = 1;
        break;
      case "2":
        listingType.exactBedNumber = 2;
        break;
      case "3":
        listingType.exactBedNumber = 3;
        break;
      case "4":
        listingType.exactBedNumber = 4;
        break;
      case "5":
        listingType.exactBedNumber = 5;
        break;
      default:
        listingType.exactBedNumber = true;
        break;
    }
  } else {
    document.getElementById("homeBedsType").innerHTML = `Beds: ${elem.value}`;
    switch (elem.value) {
      case "0+":
        listingType.bedNumber = true;
        document.getElementById("homeBedsType").innerHTML = `Beds: Any`;
        break;
      case "1+":
        listingType.bedNumber = 1;
        break;
      case "2+":
        listingType.bedNumber = 2;
        break;
      case "3+":
        listingType.bedNumber = 3;
        break;
      case "4+":
        listingType.bedNumber = 4;
        break;
      case "5+":
        listingType.bedNumber = 5;
        break;
      default:
        listingType.bedNumber = true;
        break;
    }
  }
  selectFiltered(listingType);
}
// if exact Match checked in beds section
function exactBed() {
  let textButtonCange = document.getElementById("homeBedsType");
  let normalList = document.getElementById("normalBedList");
  let exactList = document.getElementById("exactBedList");
  let bedRadioHolder = document.querySelectorAll(".bedNum");
  let ExactBedRadioHolder = document.querySelectorAll(".bedNumExact");
  // exact bed checkbox checked
  if (document.getElementById("exactMatch").checked) {
    if (normalList.style.display != "none" || normalList.style.display != "") {
      normalList.style.display = "none";
    }
    if (exactList.style.display == "none" || exactList.style.display == "") {
      exactList.style.display = "flex";
    }
    // check previous state and choose new  radio button
    listingType.bedNumber = true;
    for (let i = 0; i < bedRadioHolder.length; i++) {
      if (bedRadioHolder[i].children[0].checked) {
        textButtonCange.innerHTML = `Beds: ${ExactBedRadioHolder[i].children[0].value}`;
        switch (bedRadioHolder[i].children[0].value) {
          case "0+":
            listingType.exactBedNumber = true;
            textButtonCange.innerHTML = `Beds`;
            break;
          case "1+":
            listingType.exactBedNumber = 1;
            ExactBedRadioHolder[i].children[0].checked = true;
            break;
          case "2+":
            listingType.exactBedNumber = 2;
            ExactBedRadioHolder[i].children[0].checked = true;
            break;
          case "3+":
            listingType.exactBedNumber = 3;
            ExactBedRadioHolder[i].children[0].checked = true;
            break;
          case "4+":
            listingType.exactBedNumber = 4;
            ExactBedRadioHolder[i].children[0].checked = true;
            break;
          case "5+":
            listingType.exactBedNumber = 5;
            ExactBedRadioHolder[i].children[0].checked = true;
            break;
          default:
            listingType.exactBedNumber = true;
            textButtonCange.innerHTML = `Beds`;
            break;
        }
      }
    }
  } else {
    if (normalList.style.display == "none" || normalList.style.display == "") {
      normalList.style.display = "flex";
    }
    if (exactList.style.display != "none") {
      exactList.style.display = "none";
    }
    // check previous state and choose new  radio button
    listingType.exactBedNumber = true;
    for (let i = 0; i < ExactBedRadioHolder.length; i++) {
      if (ExactBedRadioHolder[i].children[0].checked) {
        textButtonCange.innerHTML = `Beds: ${bedRadioHolder[i].children[0].value}`;
        switch (ExactBedRadioHolder[i].children[0].value) {
          case "0":
            listingType.bedNumber = true;
            textButtonCange.innerHTML = `Beds`;
            break;
          case "1":
            listingType.bedNumber = 1;
            bedRadioHolder[i].children[0].checked = true;
            break;
          case "2":
            listingType.bedNumber = 2;
            bedRadioHolder[i].children[0].checked = true;
            break;
          case "3":
            listingType.bedNumber = 3;
            bedRadioHolder[i].children[0].checked = true;
            break;
          case "4":
            listingType.bedNumber = 4;
            bedRadioHolder[i].children[0].checked = true;
            break;
          case "5":
            listingType.bedNumber = 5;
            bedRadioHolder[i].children[0].checked = true;
            break;
          default:
            listingType.bedNumber = true;
            textButtonCange.innerHTML = `Beds`;
            break;
        }
      }
    }
  }
  selectFiltered(listingType);
}
homeTypeFilter = (elem) => {
  if (elem.checked) {
    switch (elem.value) {
      case "House":
        listingType.house = 1;
        break;
      case "Apartment":
        listingType.apartment = 2;
        break;
      case "Condo":
        listingType.condo = 3;
        break;
      case "Townhouse":
        listingType.townhouse = 4;
        break;
      case "Manufactured":
        listingType.manufactured = 5;
        break;
      case "Land":
        listingType.land = 6;
        break;

      default:
        break;
    }
  } else {
    switch (elem.value) {
      case "House":
        listingType.house = null;
        break;
      case "Apartment":
        listingType.apartment = null;
        break;
      case "Condo":
        listingType.condo = null;
        break;
      case "Townhouse":
        listingType.townhouse = null;
        break;
      case "Manufactured":
        listingType.manufactured = null;
        break;
      case "Land":
        listingType.land = null;
        break;

      default:
        break;
    }
  }
  let homeTypeHolder = document.querySelectorAll(".homeTypeClass");
  let strHomeType = "";
  let checkedCount = 0;
  homeTypeHolder.forEach((homeTypeElem, index) => {
    if (homeTypeElem.checked && checkedCount < 5) {
      checkedCount++;
      if (strHomeType != "") {
        strHomeType += ", " + homeTypeElem.value;
      } else {
        strHomeType += homeTypeElem.value;
      }
    } else if (checkedCount == 5) {
      strHomeType = "House type";
    }
  });
  if (checkedCount == 0) {
    strHomeType = "House type";
  }
  document.getElementById("houseType").innerHTML = strHomeType;
  selectFiltered(listingType);
};
// Bath filter
bathFilter = (elem) => {
  listingType.bathNumber = elem.value;
  selectFiltered(listingType);
};
// Open house filter
openHouseFilter = (elem) => {
  switch (elem.checked) {
    case true:
      listingType.mustHaveOpenHouseObj = true;
      break;

    default:
      listingType.mustHaveOpenHouseObj = null;
      break;
  }
  selectFiltered(listingType);
};
garageFilter = (elem) => {
  switch (elem.checked) {
    case true:
      listingType.mustHaveGarageObj = true;
      break;

    default:
      listingType.mustHaveGarageObj = null;
      break;
  }
  selectFiltered(listingType);
};
yearBuiltFilter = (elem) => {
  switch (elem.id) {
    case "minYear":
      if (elem.value != "") {
        listingType.minYearBuiltObj = elem.value;
      } else if (elem.value == "") {
        listingType.minYearBuiltObj = 0;
      }
      break;
    case "maxYear":
      if (elem.value != "") {
        listingType.maxYearBuiltObj = elem.value;
      } else if (elem.value == "") {
        listingType.maxYearBuiltObj = 200000000;
      }
      break;

    default:
      break;
  }
  selectFiltered(listingType);
};
basementFilter = (elem) => {
  switch (elem.checked) {
    case true:
      listingType.basementObj = true;
      break;
    default:
      listingType.basementObj = null;
      break;
  }
  selectFiltered(listingType);
};
// Single story and must have pool filter
stories_pool_WaterFront_view_Filter = () => {
  selectFiltered(listingType);
};
// sorting High to low price
highToLowSort = () => {
  let n = list.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (Number(list[j].dataset.price) < Number(list[j + 1].dataset.price)) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
};

// sorting Low to High price
lowToHighSort = () => {
  let n = list.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (Number(list[j].dataset.price) > Number(list[j + 1].dataset.price)) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
};

// sorting by days on market
daysSort = () => {
  // daysOnMarketData
  let n = list.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        Number(list[j].dataset.daysOnMarketData) >
        Number(list[j + 1].dataset.daysOnMarketData)
      ) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
};
// sorting number of bedrooms
bedroomsSort = () => {
  // daysOnMarketData
  let n = list.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        Number(list[j].dataset.bedroom) < Number(list[j + 1].dataset.bedroom)
      ) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
};
// sorting number of bathrooms
bathroomsSort = () => {
  // daysOnMarketData
  let n = list.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        Number(list[j].dataset.bathroom) < Number(list[j + 1].dataset.bathroom)
      ) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
};
// sorting based on square feet
squareFeetSort = () => {
  // daysOnMarketData
  let n = list.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        Number(list[j].dataset.livingAreaData) <
        Number(list[j + 1].dataset.livingAreaData)
      ) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
};
// sorting based on lot size
lotSort = () => {
  // daysOnMarketData
  let n = list.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        Number(list[j].dataset.lotSizeData) <
        Number(list[j + 1].dataset.lotSizeData)
      ) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
};
sortItemClick = (clickedElem, sortTypeName) => {
  let sortOptions = document.querySelectorAll(".sortOptionsContainer__option");
  // background-color: #F3F3EE;
  sortOptions.forEach((element) => {
    element.classList.remove("sortOptionsContainer__option--sortActive");
  });
  clickedElem.classList.add("sortOptionsContainer__option--sortActive");
  listingType.sortTypeObj = sortTypeName;
  selectFiltered(listingType);
  hideSort();
};

// Filter
function selectFiltered(listingTypeInput) {
  // Number of filters applied in more button
  let filterCounterArray = [];
  list = [];
  for (let count_m = 0; count_m < mainList.length; count_m++) {
    // My house feature's variable
    // Rent or sale
    let saleOrRent =
      mainList[count_m].children[1].children[2].children[0].className;
    // Price
    let priceOfHome =
      mainList[count_m].children[1].children[0].children[0].value;
    // Number of bedrooms
    let bedNum = mainList[count_m].children[1].children[0].children[1].value;
    // Home type
    let homeType = mainList[count_m].children[1].children[2].children[1].value;
    // Number of bathrooms
    let bathNum = mainList[count_m].children[1].children[0].children[4].value;
    // Homeowners association fee
    let myHoa = Number(mainList[count_m].dataset.maxHoa);
    // Open house or not
    let openHouseVar =
      mainList[count_m].dataset.mustHaveOpenHouse == "true" ? true : null;
    // Number of parkings
    let myParkingNum = Number(mainList[count_m].dataset.ParkingTotal);
    // Having garage
    let garageVar =
      Number(mainList[count_m].dataset.mustHaveGarage) >= 0 ? true : null;
    // living area size
    let myLivingAreaVar = Number(mainList[count_m].dataset.livingAreaData);
    // Lot size
    let myLotSizeVar = Number(mainList[count_m].dataset.lotSizeData);
    // Year Built
    let myYearBuiltVar = Number(mainList[count_m].dataset.yearBuiltData);
    // Basement
    let myBasementVar =
      mainList[count_m].dataset.basementData != "null" ? true : null;
    // Total stories
    let mytotalStoriesVar = Number(mainList[count_m].dataset.totalStoriesData);
    // Must have pool
    let myMustHavePoolVar =
      mainList[count_m].dataset.mustHavePoolData == "true" ? true : false;
    // WaterFront
    let myWaterFrontVar =
      mainList[count_m].dataset.waterFrontData == "true" ? true : false;
    // City view
    let myCityViewVar =
      mainList[count_m].dataset.viewData === "City" ? true : false;
    // Mountain view
    let myMountainViewVar =
      mainList[count_m].dataset.viewData === "Mountain" ? true : false;
    // Park view
    let myParkViewVar =
      mainList[count_m].dataset.viewData === "Park" ? true : false;
    // Water view
    let myWaterViewVar =
      mainList[count_m].dataset.viewData === "Water" ? true : false;
    // Days on market
    let myDaysOnMarketVar = Number(mainList[count_m].dataset.daysOnMarketData);
    // variables for conditions
    let {
      sale: obSale,
      rent: obRent,
      minPrice: obMinPr,
      maxPrice: obMaxPr,
      bedNumber: obBdNum,
      exactBedNumber: obExBdNum,
      house: obHouse,
      apartment: obApart,
      condo: obCondo,
      townhouse: obTownH,
      manufactured: obManu,
      land: obLnd,
      bathNumber: obBaNum,
      hoa: obHoa,
      mustHaveOpenHouseObj: obMuHaOpHou,
      totalParkingObj: obToPar,
      mustHaveGarageObj: obMuHaGa,
      minLivingAreaObj: obMnLivAre,
      maxLivingAreaObj: obMaLiAre,
      minLotSizeObj: obMiLoS,
      maxLotSizeObj: obMxLoS,
      minYearBuiltObj: obMnYeB,
      maxYearBuiltObj: obMxYeB,
      daysOnMarketObj: obDaOnMark,
    } = listingType;
    // listingType condition
    const listingTypeCondition = saleOrRent == obSale || saleOrRent == obRent;
    // Max and min price
    const homePriceCondition =
      obMinPr < obMaxPr && obMinPr < priceOfHome && priceOfHome < obMaxPr;
    // bedNumber
    const bedNumberCondition =
      (obBdNum === true || bedNum >= obBdNum) &&
      (obExBdNum === true || bedNum == obExBdNum);
    // homeType
    const homeTypeCondition =
      obHouse == homeType ||
      obApart == homeType ||
      obCondo == homeType ||
      obLnd == homeType ||
      obTownH == homeType ||
      obManu == homeType;
    // bathNumber
    const bathNumberCondition = bathNum >= obBaNum;
    // bath counter for more button
    filterCounterArray[0] = obBaNum == 0 ? 0 : 1;
    // hoa
    const hoaCondition = myHoa <= obHoa;
    // hoa counter for more button
    filterCounterArray[1] = obHoa == 2000000000 ? 0 : 1;
    // must have open house
    let openHouseIdHolder = document.getElementById("mustOpenHouse");
    const mustHaveOpenHouseCondition =
      (openHouseIdHolder.checked && openHouseVar) ||
      (!openHouseIdHolder.checked && obMuHaOpHou == null);
    // openHouse counter for more button
    filterCounterArray[2] = openHouseIdHolder.checked ? 1 : 0;
    // Parking number
    const parkingNumberCondition = myParkingNum >= obToPar;
    // parkingNumber counter for more button
    filterCounterArray[3] = obToPar == 0 ? 0 : 1;
    // Must have garage
    let garageIdHolder = document.getElementById("mustGarage");
    const mustHaveGarageCondition =
      (garageIdHolder.checked && garageVar) ||
      (!garageIdHolder.checked && obMuHaGa == null);
    // Garage counter for more button
    filterCounterArray[4] = garageIdHolder.checked ? 1 : 0;
    // Living area square feet
    const livingAreaCondition =
      myLivingAreaVar >= obMnLivAre && myLivingAreaVar <= obMaLiAre;
    // livingArea counter for more button
    filterCounterArray[5] = obMnLivAre == 0 && obMaLiAre == 200000000 ? 0 : 1;
    // Lot size
    const lotSizeCondition = myLotSizeVar >= obMiLoS && myLotSizeVar <= obMxLoS;
    // LotSize counter for more button
    filterCounterArray[6] = obMiLoS == 0 && obMxLoS == 200000000 ? 0 : 1;
    // Year built
    let minYearBuiltIdHolder = document.getElementById("minYear");
    let maxYearBuiltIdHolder = document.getElementById("maxYear");
    const yearBuiltCondition =
      myYearBuiltVar >= obMnYeB && myYearBuiltVar <= obMxYeB;
    // yearBuilt counter for more button
    filterCounterArray[7] =
      minYearBuiltIdHolder.value == "" && maxYearBuiltIdHolder.value == ""
        ? 0
        : 1;
    // Basement
    let basementIdHolder = document.getElementById("basement");
    const basementCondition =
      (document.getElementById("basement").checked && myBasementVar != null) ||
      !document.getElementById("basement").checked;
    filterCounterArray[8] = basementIdHolder.checked ? 1 : 0;
    // Single story
    let singleStoryIdHolder = document.getElementById("stories");
    const totalStoriesCondition =
      (document.getElementById("stories").checked == true &&
        mytotalStoriesVar == 1) ||
      document.getElementById("stories").checked == false
        ? true
        : false;
    filterCounterArray[9] = singleStoryIdHolder.checked ? 1 : 0;
    // Must have pool
    let mustHavePoolIdHolder = document.getElementById("pool");
    const mustHavePoolCondition =
      (mustHavePoolIdHolder.checked && myMustHavePoolVar) ||
      !mustHavePoolIdHolder.checked
        ? true
        : false;
    filterCounterArray[10] = mustHavePoolIdHolder.checked ? 1 : 0;

    // WaterFront
    let waterFrontIdHolder = document.getElementById("waterFront");
    const waterFrontCondition =
      (waterFrontIdHolder.checked && myWaterFrontVar) ||
      !waterFrontIdHolder.checked
        ? true
        : false;
    filterCounterArray[11] = waterFrontIdHolder.checked ? 1 : 0;
    // City view
    let cityViewIdHolder = document.getElementById("cityView");
    const cityViewCondition =
      (cityViewIdHolder.checked && myCityViewVar) || !cityViewIdHolder.checked
        ? true
        : false;
    filterCounterArray[12] = cityViewIdHolder.checked ? 1 : 0;
    // Mountain view
    let mountainViewIdHolder = document.getElementById("mountainView");
    const mountainViewCondition =
      (mountainViewIdHolder.checked && myMountainViewVar) ||
      !mountainViewIdHolder.checked
        ? true
        : false;
    filterCounterArray[13] = mountainViewIdHolder.checked ? 1 : 0;
    // Park view
    let parkViewIdHolder = document.getElementById("parkView");
    const parkViewCondition =
      (parkViewIdHolder.checked && myParkViewVar) || !parkViewIdHolder.checked
        ? true
        : false;
    filterCounterArray[14] = parkViewIdHolder.checked ? 1 : 0;
    // Water view
    let waterViewIdHolder = document.getElementById("waterView");
    const waterViewCondition =
      (waterViewIdHolder.checked && myWaterViewVar) ||
      !waterViewIdHolder.checked
        ? true
        : false;
    filterCounterArray[15] = waterViewIdHolder.checked ? 1 : 0;
    // Days on market
    const daysOnMarketCondition =
      myDaysOnMarketVar >= 0 && myDaysOnMarketVar <= 1 && obDaOnMark == 1
        ? true
        : myDaysOnMarketVar > 1 && myDaysOnMarketVar <= 7 && obDaOnMark == 7
        ? true
        : myDaysOnMarketVar > 7 && myDaysOnMarketVar <= 14 && obDaOnMark == 14
        ? true
        : myDaysOnMarketVar > 14 && myDaysOnMarketVar <= 30 && obDaOnMark == 30
        ? true
        : myDaysOnMarketVar > 30 && myDaysOnMarketVar <= 90 && obDaOnMark == 90
        ? true
        : myDaysOnMarketVar > 90 &&
          myDaysOnMarketVar <= 180 &&
          obDaOnMark == 180
        ? true
        : myDaysOnMarketVar > 180 &&
          myDaysOnMarketVar <= 360 &&
          obDaOnMark == 360
        ? true
        : myDaysOnMarketVar > 360 &&
          myDaysOnMarketVar <= 720 &&
          obDaOnMark == 720
        ? true
        : myDaysOnMarketVar > 720 &&
          myDaysOnMarketVar <= 1080 &&
          obDaOnMark == 1080
        ? true
        : obDaOnMark == 5000
        ? true
        : false;
    filterCounterArray[16] = obDaOnMark == 5000 ? 0 : 1;
    // Number of filters applied to more button
    // count sum of the filters applied
    let moreButSumFilters = filterCounterArray.reduce((total, num) => {
      return total + num;
    }, 0);
    if (moreButSumFilters > 0) {
      document.getElementById(
        "moreButSmallnav"
      ).innerHTML = `More: ${moreButSumFilters}`;
    } else {
      document.getElementById("moreButSmallnav").innerHTML = `More`;
    }
    // After evaluating, put eligibale homes for printing in mainList(conditions)
    if (
      listingTypeCondition &&
      homePriceCondition &&
      bedNumberCondition &&
      homeTypeCondition &&
      bathNumberCondition &&
      hoaCondition &&
      mustHaveOpenHouseCondition &&
      parkingNumberCondition &&
      mustHaveGarageCondition &&
      livingAreaCondition &&
      lotSizeCondition &&
      yearBuiltCondition &&
      basementCondition &&
      totalStoriesCondition &&
      mustHavePoolCondition &&
      waterFrontCondition &&
      cityViewCondition &&
      mountainViewCondition &&
      parkViewCondition &&
      waterViewCondition &&
      daysOnMarketCondition
    ) {
      list.push(mainList[count_m]);
    }
    document.querySelector(
      ".homeInfoHeader__resultNum"
    ).innerHTML = `${numberWithCommas(Number(list.length))} results`;
    document.querySelector(
      ".resultNumberOnMoreBut"
    ).innerHTML = `${numberWithCommas(Number(list.length))} results`;
  }

  switch (listingType.sortTypeObj) {
    case "highToLowSort":
      highToLowSort();
      break;
    case "lowToHighSort":
      lowToHighSort();
      break;
    case "daysSort":
      daysSort();
      break;
    case "bedroomsSort":
      bedroomsSort();
      break;
    case "bathroomsSort":
      bathroomsSort();
      break;
    case "squareFeetSort":
      squareFeetSort();
      break;
    case "lotSort":
      lotSort();
      break;
    default:
      break;
  }
  let homeDelete = document.getElementById("homeInfo");
  while (homeDelete.firstChild) {
    homeDelete.removeChild(homeDelete.firstChild);
  }
  let pageNumDelete = document.getElementById("orderedPageList");
  while (pageNumDelete.firstChild) {
    pageNumDelete.removeChild(pageNumDelete.firstChild);
  }
  currentPage = 1;
  let homeInfo = document.querySelector("#homeInfo");
  let pageButton = document.querySelector("#pageButtons");
  let noResultContainer = document.querySelector(
    ".mainSection__noResultContainer"
  );
  let homeInfoHeader = document.querySelector(".homeInfoHeader");
  if (list.length !== 0) {
    homeInfo.style.display = null;
    pageButton.style.display = null;
    noResultContainer.style.display = null;
    homeInfoHeader.style.display = null;
    load(function() {
      makeList();
      loadList();
    });
  } else {
    document.querySelector("#homeContainer").scrollTop = 0;
    homeInfo.style.display = "none";
    pageButton.style.display = "none";
    noResultContainer.style.display = "block";
    homeInfoHeader.style.display = "none";
    initMap();
  }
  let arraySum = filterCounterArray.reduce((total, num) => {
    return total + num;
  }, 0);
}
//relode the page when click on remove filters
removeFilterRelode = () => {
  location.reload(true);
};

// When focus happens In price button section
function focusInput(x) {
  if (x == "minSearch") {
    document.getElementById("priceListMax").style.visibility = "hidden";
    document.getElementById("priceListMin").style.visibility = "visible";
  } else {
    document.getElementById("priceListMin").style.visibility = "hidden";
    document.getElementById("priceListMax").style.visibility = "visible";
  }
}

let mainList = [];
let list = [];
let pageList = [];
let currentPage = 1;
let numberPerPage = 20;
let numberOfPages = 0;
let cities = [];
let beforeSplitSearchBarInput = [];
// Loading and showing homes on result.html
function loadUser() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "realstatebigDataset.json", true);
  xhr.onload = function() {
    if (this.status == 200) {
      let jsonData = JSON.parse(this.responseText);
      let data = jsonData.value;
      let undecoded = document.location.search.replace(/^.*?\=/, "");
      beforeSplitSearchBarInput = decodeURI(undecoded).split(",");
      let searchBarInput = beforeSplitSearchBarInput[0];
      document.querySelector(
        ".homeInfoHeader__headerText"
      ).innerHTML = `${searchBarInput} Real Estate & Homes`;
      document.getElementById("searchBoxResult").value = searchBarInput;
      for (var i in data) {
        if (searchBarInput == data[i].City && data[i].Media[0] != undefined) {
          // Container for each home
          let divArray = document.createElement("div");
          // Container for Image
          let imageHolder = document.createElement("div");
          imageHolder.id = "imageHolder" + i;
          imageHolder.className = "imageHolderClass";
          divArray.id = "myHome" + i;
          divArray.className = "home";
          divArray.width = "100%";
          // Store data information in each home element
          // give a random lattitude and longitude to each home
          divArray.dataset.lat = getRndInteger(38.251051, 45.134186);
          divArray.dataset.lon = getRndInteger(-118.560049, -94.547338);
          //HOA Fee
          divArray.dataset.maxHoa = data[i].AssociationFee;
          // OpenHouse
          if (data[i].AvailabilityDate != null) {
            divArray.dataset.mustHaveOpenHouse = true;
          } else {
            divArray.dataset.mustHaveOpenHouse = null;
          }
          // Parking spot
          if (data[i].ParkingTotal != null) {
            divArray.dataset.ParkingTotal = data[i].ParkingTotal;
          }
          // Garage
          if (data[i].GarageSpaces != null) {
            divArray.dataset.mustHaveGarage = data[i].GarageSpaces;
          }
          // Living area
          divArray.dataset.livingAreaData = data[i].LivingArea;
          // Lot size
          divArray.dataset.lotSizeData = data[i].LotSizeSquareFeet;
          // Year built
          divArray.dataset.yearBuiltData = data[i].YearBuilt;
          // Basement
          divArray.dataset.basementData = data[i].Basement;
          // Total stories
          divArray.dataset.totalStoriesData = data[i].StoriesTotal;
          // Pool
          divArray.dataset.mustHavePoolData = data[i].PoolPrivateYN;
          // Water front
          divArray.dataset.waterFrontData = data[i].WaterfrontYN;
          // View
          if (data[i].View) {
            if (data[i].View[1]) {
              let dat = data[i].View[1];
              dat == "Lake View";
              switch (dat) {
                case "Lake View" || "Water":
                  divArray.dataset.viewData = "Water";
                  break;
                case "Mountain":
                  divArray.dataset.viewData = "Mountain";
                  break;
                case "City":
                  divArray.dataset.viewData = "City";
                  break;
                case "Park":
                  divArray.dataset.viewData = "Park";
                  break;

                default:
                  break;
              }
            }
          }
          // Days on Market
          divArray.dataset.daysOnMarketData = data[i].DaysOnMarket;
          let image = document.createElement("img");
          image.className = "imageClass";
          image.style.width = "100%";
          image.src = data[i].Media[0].MediaURL;
          divArray.appendChild(imageHolder);
          // Adding Image
          imageHolder.appendChild(image);
          // Building a box for info under the pictures
          let infoContainer = document.createElement("div");
          infoContainer.id = "myHomeInfo" + i;
          infoContainer.className = "homeTextContainer";
          // Add information text about each home to the home container
          divArray.appendChild(infoContainer);
          let homeInfoFirstRow = document.createElement("div");
          homeInfoFirstRow.className = "homeInfoFirstRow";
          infoContainer.appendChild(homeInfoFirstRow);
          // Home address
          let homeInfoSecondRow = document.createElement("div");
          homeInfoSecondRow.innerHTML = `<span class="address">${data[i].UnparsedAddress}</span>`;
          homeInfoSecondRow.className = "homeInfoSecondRow";
          infoContainer.appendChild(homeInfoSecondRow);
          // For sale or for rent
          let homeInfoThirdRow = document.createElement("div");
          infoContainer.appendChild(homeInfoThirdRow);
          homeInfoThirdRow.className = "homeInfoThirdRow";
          let str = data[i].PropertySubType;
          // number of bedrooms
          divArray.dataset.bedroom = data[i].BedroomsTotal;
          divArray.dataset.bathroom = data[i].BathroomsHalf;
          // House or condo or Apartment
          let properStrValue;
          let properStr;
          switch (str) {
            case "Single Family Residence for sale" || "Duplex":
              properStr = "House";
              properStrValue = "1";
              break;
            case "Apartment":
              properStr = "Apartment";
              properStrValue = "2";
              break;
            case "Condominium":
              properStr = "Condo";
              properStrValue = "3";
              break;
            case "Townhouse":
              properStr = "Townhouse";
              properStrValue = "4";
              break;
            case "Manufactured":
              properStr = "Manufactured";
              properStrValue = "5";
              break;
            case "Lots":
              properStr = "Lots";
              properStrValue = "6";
              break;
            case "Land":
              properStr = "Land";
              properStrValue = "6";
              break;
            default:
              properStr = "House";
              properStrValue = "1";
              break;
          }
          // check if for sale or rent and then add home price
          if (data[i].SpecialListingConditions[2]) {
            if (data[i].SpecialListingConditions[2] === "Short Sale") {
              divArray.dataset.homeType = "sale";
              divArray.dataset.price = data[i].ListPrice;
              homeInfoFirstRow.innerHTML = `<li id="moneySpan" value=${
                data[i].ListPrice
              } class = "moneySection"> $${numberWithCommas(
                data[i].ListPrice
              )}</li>
                             <li class="number" value=${
                               data[i].BedroomsTotal
                             }>${data[i].BedroomsTotal}</li>
                            <span class="unit">bds</span> <span class= "line"></span> <li class="number" value = "${
                              data[i].BathroomsHalf
                            }">${data[i].BathroomsHalf}</li> 
                            <span class="unit">ba</span> <span class= "line"></span>
                             <li class="number" value=${
                               data[i].LotSizeSquareFeet
                             }>${
                data[i].LivingArea
              }</li> <span class="unit">sqft</span>`;
              homeInfoThirdRow.innerHTML = `<span class= "houseForSaleCircle"></span><li class="inlineText" value=${properStrValue}>${properStr}</li>&nbspfor sale`;
            }
          } else {
            divArray.dataset.homeType = "rent";
            divArray.dataset.price = Math.round(data[i].ListPrice / 150);
            homeInfoFirstRow.innerHTML = `<li class = "moneySection" value=${data[
              i
            ].ListPrice / 150}> $${numberWithCommas(
              Math.round(data[i].ListPrice / 150)
            )}/mo</li>
                         <li class="number" value=${data[i].BedroomsTotal}>${
              data[i].BedroomsTotal
            }</li>
                        <span class="unit">bds</span> <span class= "line"></span> <li class="number" value=${
                          data[i].BathroomsHalf
                        }>${data[i].BathroomsHalf}</li> 
                        <span class="unit">ba</span> <span class= "line"></span>
                         <li class="number" value=${data[i].LivingArea}>${
              data[i].LivingArea
            }</li> <span class="unit">sqft</span>`;
            homeInfoThirdRow.innerHTML = `<span class= "houseForRentCircle"></span><li class="inlineText" value=${properStrValue}>${properStr}</li>&nbspfor rent`;
          }
          homeInfoSecondRow.innerHTML = `<span class="address">${data[i].UnparsedAddress}</span>`;
          mainList.push(divArray);
        }
      }
      list = mainList;
      document.querySelector(
        ".homeInfoHeader__resultNum"
      ).innerHTML = `${numberWithCommas(Number(list.length))} results`;
    }
    // Start Pagination when everything is ready
    load(function() {
      initialCheck(beforeSplitSearchBarInput[1]);
    });
  };
  xhr.send();
}
// Pagination
function makeList() {
  numberOfPages = getNumberOfPages();
  createPageBut(numberOfPages);
}
function getNumberOfPages() {
  return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
  currentPage += 1;
  loadList();
}

function previousPage() {
  currentPage -= 1;
  loadList();
}
function loadList() {
  var begin = (currentPage - 1) * numberPerPage;
  var end = begin + numberPerPage;
  pageList = list.slice(begin, end);
  // Change style of a button when clicked in pagination button list
  for (let i = 1; i <= numberOfPages; i++) {
    if (
      document.getElementById("pageButList_" + i).classList != "pageButList"
    ) {
      document
        .getElementById("pageButList_" + i)
        .classList.toggle("pageButList");
      document
        .getElementById("pageButList_" + i)
        .classList.toggle("activePageBut");
    }
  }
  document
    .getElementById("pageButList_" + currentPage)
    .classList.toggle("activePageBut");
  document
    .getElementById("pageButList_" + currentPage)
    .classList.toggle("pageButList");
  let unorderedList = document.getElementById("orderedPageList");
  // Three dots before the last page
  let dotsBefore = document.createElement("span");
  dotsBefore.id = "dotsBefore";
  dotsBefore.className = "paginationDots";
  dotsBefore.innerHTML = `&nbsp ... &nbsp`;
  // Three dots after the first page
  let dotsAfter = document.createElement("span");
  dotsAfter.id = "dotsAfter";
  dotsAfter.className = "paginationDots";
  dotsAfter.innerHTML = `&nbsp ... &nbsp`;
  let j = Number(currentPage + 3);
  let m = Number(currentPage - 3);
  for (let k = 1; k < numberOfPages; k++) {
    document.getElementById("pageButList_" + k).style.display = null;
  }
  // Check after the active button
  if (
    document.getElementById("pageButList_" + j) === null ||
    numberOfPages - currentPage == 3 ||
    numberOfPages == 5
  ) {
    if (document.getElementById("dotsBefore") != null) {
      let dotBef = document.getElementById("dotsBefore");
      unorderedList.removeChild(dotBef);
    }
  } else {
    if (currentPage >= 3) {
      for (let k = j; k < numberOfPages; k++) {
        document.getElementById("pageButList_" + k).style.display = "none";
      }
    } else {
      if (numberOfPages >= 5) {
        for (let k = 6; k < numberOfPages; k++) {
          document.getElementById("pageButList_" + k).style.display = "none";
        }
      }
    }
    if (
      document.getElementById("dotsBefore") == null &&
      numberOfPages - currentPage != 3
    ) {
      unorderedList.insertBefore(dotsBefore, unorderedList.lastChild);
    }
  }
  // Check before the active button
  if (
    document.getElementById("pageButList_" + m) === null ||
    currentPage == 4 ||
    numberOfPages == 5
  ) {
    if (document.getElementById("dotsAfter") != null) {
      let dotAft = document.getElementById("dotsAfter");
      unorderedList.removeChild(dotAft);
    }
  } else {
    for (let k = currentPage - 3; k >= 2; k--) {
      document.getElementById("pageButList_" + k).style.display = "none";
    }
    if (document.getElementById("dotsAfter") == null && currentPage != 4) {
      unorderedList.insertBefore(dotsAfter, unorderedList.children[1]);
    }
  }
  switch (currentPage) {
    case numberOfPages:
      document.getElementById("next").style.visibility = "hidden";
      document.getElementById("previous").style.visibility = null;
      break;

    case 1:
      document.getElementById("previous").style.visibility = "hidden";
      document.getElementById("next").style.visibility = null;
      break;

    default:
      document.getElementById("previous").style.visibility = null;
      document.getElementById("next").style.visibility = null;
      break;
  }
  drawList();
  check();
  document.getElementById("homeContainer").scrollTop = 0;
}
// Draw homes on screen
function drawList() {
  document.getElementById("homeInfo").innerHTML = "";
  for (let r = 0; r < pageList.length; r++) {
    document.getElementById("homeInfo").appendChild(pageList[r]);
  }
  initMap();
}
// check pagination buttons for enabling and disabling
function check() {
  document.getElementById("next").disabled =
    currentPage == numberOfPages ? true : false;
  document.getElementById("previous").disabled =
    currentPage == 1 ? true : false;
}
// Call back function for Drawing homes
function load(callback) {
  callback();
}
// Create pagination buttons
function createPageBut(numberofPages) {
  for (let i = 0; i < numberofPages; i++) {
    let pagebutLi = document.createElement("li");
    let pagebuta = document.createElement("div");
    pagebuta.className = "pageButList";
    pagebuta.id = "pageButList_" + (i + 1);
    pagebutLi.appendChild(pagebuta);
    pagebuta.innerHTML = `${i + 1}`;
    document.getElementById("orderedPageList").appendChild(pagebutLi);
    document.getElementById("orderedPageList").style.listStyle = "none";
  }
}
window.addEventListener("click", function() {
  let x = document.querySelector(".pageButList");
  if (event.target.closest(".pageButList")) {
    let num = event.target.id.split("_");
    currentPage = Number(num[1]);
    loadList();
  }
  // main search boxShadow on focus
  let searchIdVariable = document.getElementById("searchId");
  if (
    event.target.closest("#searchId") ||
    event.target.closest("#buy") ||
    event.target.closest("#rent")
  ) {
    searchIdVariable.style.border = null;
    setTimeout(() => {
      searchIdVariable.style.border = "#006AFF 2px solid";
    }, 50);
  } else if (!window.location.pathname.includes("result")) {
    searchIdVariable.style.border = null;
  }
  // Hide sort box
  if (
    event.target.closest(".sortContainer") &&
    !event.target.closest(".sortOptionsContainer")
  ) {
    hideSort();
  }
});
hideSort = () => {
  let sortContainer = document.querySelector(".sortContainer");
  sortContainer.style.opacity = "0";
  sortContainer.style.transform = "translate(-100%, -100%)";
};
// Show sort box
showSort = () => {
  let showSortContainer = document.querySelector(".sortContainer");
  showSortContainer.style.transform = null;
  showSortContainer.style.opacity = null;
};
// Show the Google map
showHideMap = () => {
  let mapContainer = document.querySelector(".mapContainer");
  let mobSortBut = document.querySelector(".mobSortBut");
  let mobMapBut = document.querySelector(".mobMapBut");
  if (mapContainer.style.display === "block") {
    mapContainer.style.display = "none";
    mobSortBut.style.display = null;
    mobMapBut.style.marginLeft = null;
    mobMapBut.innerHTML = `Map`;
  } else {
    mapContainer.style.display = "block";
    mobSortBut.style.display = "none";
    mobMapBut.style.marginLeft = "auto";
    mobMapBut.innerHTML = `List`;
  }
};
window.addEventListener("scroll", () => {
  let minSearchResultVar = document.getElementById("mainSearchResult");
  let searchIdVar = document.getElementById("searchId");
  let searchBoxVar = document.getElementById("searchBox");
  if (
    window.pageYOffset > 350 &&
    !window.location.pathname.includes("result")
  ) {
    minSearchResultVar.style.top = "0";
    minSearchResultVar.style.position = "fixed";
    minSearchResultVar.style.background = "white";
    minSearchResultVar.style.borderBottom = "1px solid #D1D1D5";
    minSearchResultVar.style.borderTop = "1px solid #D1D1D5";
    searchBoxVar.style.height = "45px";
    searchIdVar.style.height = "50px";
    searchIdVar.style.borderRadius = "2px";
    searchIdVar.style.margin = "15px 0";
  } else if (!window.location.pathname.includes("result")) {
    minSearchResultVar.style.top = null;
    minSearchResultVar.style.position = null;
    minSearchResultVar.style.background = null;
    minSearchResultVar.style.borderBottom = null;
    minSearchResultVar.style.borderTop = null;
    searchBoxVar.style.height = null;
    searchIdVar.style.height = null;
    searchIdVar.style.borderRadius = null;
    searchIdVar.style.margin = null;
  }
});

// Google Map
function initMap() {
  let x = document.createElement("IMG");
  x.setAttribute("src", "redCircleFlag");
  //New map
  let map;
  if (window.matchMedia("(max-width: 900px)").matches) {
    map = new google.maps.Map(document.querySelector(`.mapContainer`), {
      center: { lat: 39.381266, lng: -106.8022211 },
      zoom: 4,
    });
  } else {
    map = new google.maps.Map(document.querySelector(`.map`), {
      center: { lat: 39.381266, lng: -106.8022211 },
      zoom: 5,
    });
  }
  // Add a marker
  let image;
  // red circle for sale on map
  let imageSale = {
    url: "https://i.postimg.cc/0yJBf6Xh/red-Circle-Flag.png",
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(15, 15),
  };
  // violet circle for rent on map
  let imageRent = {
    url: "https://i.postimg.cc/GpwSScZt/violet-Circle-Flag.png",
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(15, 15),
  };
  // only show something if there are homes available
  let homeInfoCheck = document.querySelector("#homeInfo").firstChild;
  if (homeInfoCheck) {
    for (var i = 0; i < pageList.length; i++) {
      // check if it's for sale or for rent
      if (pageList[i].dataset.homeType === "sale") {
        image = imageSale;
      } else if (pageList[i].dataset.homeType === "rent") {
        image = imageRent;
      }
      // what to show when a circle on map clicked(building content for infoWindow)
      // image source of the home
      let mapImageSrc = pageList[i].firstChild.firstChild.src;
      // home price
      let mapHomePrice =
        pageList[i].children[1].firstChild.firstChild.innerHTML;
      let mapBedNum = pageList[i].children[1].firstChild.children[1].innerHTML;
      let mapBathNum = pageList[i].children[1].firstChild.children[4].innerHTML;
      let mapSqfNum = pageList[i].children[1].firstChild.children[7].innerHTML;
      // what to show for each home on map
      let mapMarkerContent = `<div id=${pageList[i].id} style="display: flex"><div style="padding-right: 5px"><img src="${mapImageSrc}" style="width: 60px;"/></div>
      <p><strong>${mapHomePrice}</strong> <br>${mapBedNum} bd, ${mapBathNum} ba<br> ${mapSqfNum} sqf</p>
      </div>`;
      // creating a new infoWindow
      let infowindow = new google.maps.InfoWindow({
        content: mapMarkerContent,
      });
      // build marker
      let marker = new google.maps.Marker({
        position: {
          lat: Number(pageList[i].dataset.lat),
          lng: Number(pageList[i].dataset.lon),
        },
        map: map,
        icon: image,
      });
      // create an event listener for each marker
      marker.addListener("mouseover", function() {
        infowindow.open(map, marker);
      });
      marker.addListener("mouseout", function() {
        infowindow.close();
      });
      marker.addListener("click", function() {
        let showHomeIndex = String(infowindow.content)
          .split("myHome")[1]
          .split(" ", 1);
        housePageBuilder(showHomeIndex, getImg);
      });
      google.maps.event.addDomListener(
        document.getElementById(pageList[i].id),
        "mouseover",
        function() {
          infowindow.open(map, marker);
        }
      );
      google.maps.event.addDomListener(
        document.getElementById(pageList[i].id),
        "mouseout",
        function() {
          infowindow.close();
        }
      );
    }
  }
}
// Insert comma in the numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// check if we click outside a home-builder-page
function checkClickArea(e) {
  if (e.target.parentNode.parentNode.className == "home") {
    let stringvar = e.target.parentNode.parentNode.id;
    let stringvarSplit = stringvar.split("e");
    let dataIndex = Number(stringvarSplit[1]);
    housePageBuilder(dataIndex, getImg);
  } else if (e.target.parentNode.parentNode.parentNode.className == "home") {
    let stringvar = e.target.parentNode.parentNode.parentNode.id;
    let stringvarSplit = stringvar.split("e");
    let dataIndex = Number(stringvarSplit[1]);
    housePageBuilder(dataIndex, getImg);
  }
}
// drag and drop image gallary for mobile phone
getImg = () => {
  let picLeftColumn = document.getElementById("picLeftColumn");
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    transferscale,
    threshold = 100,
    slides = document.querySelectorAll(".homeBox"),
    slidesLength = slides.length,
    getImgindex = 0;

  picLeftColumn.onmousedown = dragStart;
  picLeftColumn.addEventListener("touchstart", dragStart);
  picLeftColumn.addEventListener("touchend", dragEnd);
  picLeftColumn.addEventListener("touchmove", dragAction);

  function dragStart(e) {
    transferscale = Number(picLeftColumn.firstElementChild.clientWidth);
    picLeftColumn.style.transition = null;
    e = e || window.event;
    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
      posInitial = e.touches[0].clientX;
    } else {
      e.preventDefault();
      posX1 = e.clientX;
      posInitial = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function dragAction(e) {
    e = e || window.event;
    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
      posFinal = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
      posFinal = e.clientX;
    }

    picLeftColumn.style.right = posX2 - picLeftColumn.offsetLeft + "px";
  }
  function dragEnd(e) {
    e = e || window.event;
    picLeftColumn.style.transition = "all 200ms ease-out";
    if (posFinal - posInitial < -threshold && getImgindex < slidesLength - 1) {
      getImgindex++;
      picLeftColumn.style.right = transferscale * getImgindex + "px";
    } else if (posFinal - posInitial > threshold && getImgindex > 0) {
      getImgindex--;
      picLeftColumn.style.right = transferscale * getImgindex + "px";
    } else {
      picLeftColumn.style.right = transferscale * getImgindex + "px";
    }
    document.querySelector(
      ".picContainer__picCounter"
    ).innerHTML = `${getImgindex + 1} of ${slidesLength}`;
    document.onmouseup = null;
    document.onmousemove = null;
  }
};
// images of home will be saved in this array
let imageArr = [];
// Build a page for each home
function housePageBuilder(index, callback) {
  document.getElementById("picLeftColumn").style.right = 0;
  galleryCounter = 1;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "realstatebigDataset.json", true);
  xhr.onload = function() {
    if (this.status == 200) {
      // Create some variables
      let jsonData = JSON.parse(this.responseText);
      let data = jsonData.value;
      let image = document.createElement("img");
      image.className = "homeBox";
      image.style.width = "100%";
      image.src = data[index].Media[0].MediaURL;
      // Removing old information from the page
      let e = document.getElementById("picLeftColumn");
      let first = e.firstElementChild;
      while (first) {
        first.remove();
        first = e.firstElementChild;
      }
      let element = document.getElementById("rentOrSale");
      if (element) {
        element.parentNode.removeChild(element);
      }
      imageArr = [];
      // Insert pictures of each home in each home-page
      for (let i = 0; i < data[index].Media.length; i++) {
        let otherImage = document.createElement("img");
        let otherImageBox = document.createElement("div");
        otherImageBox.className = "homeBox";
        otherImageBox.style.width = "100%";
        otherImage.style.width = "100%";
        otherImage.src = data[index].Media[i].MediaURL;
        otherImageBox.id = "smallImage" + i;
        otherImageBox.appendChild(otherImage);
        imageArr.push(otherImageBox);
        e.appendChild(imageArr[i]);
      }
      document.querySelector(
        ".picContainer__picCounter"
      ).innerHTML = `1 of ${data[index].Media.length}`;
      // Insert text information to each home-page
      document.getElementById("homeSectionContainer").style.display = "grid";
      let priceSection = document.getElementById("priceSection");
      let rentOrSale = document.createElement("div");
      rentOrSale.id = "rentOrSale";
      rentOrSale.className = "homeContainer__rentOrSale";
      // Home Features in big Item Holder
      let featureClassHolder = document.querySelectorAll(".featureTable");
      for (let count_fe = 0; count_fe < featureClassHolder.length; count_fe++) {
        switch (count_fe) {
          case 0:
            featureClassHolder[0].children[1].innerHTML = `${data[index].PropertySubType}`;
            break;
          case 1:
            featureClassHolder[1].children[1].innerHTML = `${data[index].YearBuilt}`;
            break;
          case 2:
            featureClassHolder[2].children[1].innerHTML = `${data[index].Heating}`;
            break;
          case 3:
            featureClassHolder[3].children[1].innerHTML = `${data[index].Cooling}`;
            break;
          case 4:
            featureClassHolder[4].children[1].innerHTML = `${data[index].ParkingTotal} spaces`;
            break;
          case 5:
            featureClassHolder[5].children[1].innerHTML = `${data[index].LotSizeAcres} acres`;
            break;
          case 6:
            featureClassHolder[6].children[1].innerHTML = `${(
              data[index].ListPrice / data[index].LotSizeSquareFeet
            ).toFixed(2)}$`;
            break;
          default:
            break;
        }
      }
      // For sale or for rent check
      if (data[index].SpecialListingConditions[2]) {
        if (data[index].SpecialListingConditions[2] === "Short Sale") {
          priceSection.innerHTML = `<div class= "homeContainer__mainInfo"><span class ="moneySection"> $${numberWithCommas(
            data[index].ListPrice
          )}</span> 
                    <span class="number">${data[index].BedroomsTotal}</span>
                    <span class="unit">bds</span> <span class= "line"></span> <span class="number">${
                      data[index].BathroomsHalf
                    }</span> 
                    <span class="unit">ba</span> <span class= "line"></span>
                    <span class="number">${
                      data[index].LivingArea
                    }</span> <span class="unit">sqft</span></div>
                    <div class= "homeContainer__addSec"><span class="homeInfoSecondRow">${
                      data[index].UnparsedAddress
                    }</span></div>`;
          rentOrSale.innerHTML = `<div class= "lineText"><span class= "houseForSaleCircle"></span> &nbspHouse for sale<span class="line"></span>
                    <span class= "zestimateText"> Zestimate</span><span class= "r">R</span>:
                    <span class= "zestimatePrice">$${numberWithCommas(
                      data[index].ListPrice + 35000
                    )}</span></div>
                    <div class = "estPaymentText">Est. payment:
                    <span class = "estPaymentNumber"> $${data[index]
                      .LotSizeSquareFeet * 2}/mo</span>
                    <a id="prequalifiedLink" href="./pages/form/form.html"><span id="roundDollar">$</span><span class="prequallified">Get pre-qualified</span></a></div>`;
          document.getElementById("priceSection").appendChild(rentOrSale);
          let lastRow = document.getElementById("lastRow");
          lastRow.innerHTML = `<button id="getMoreInfoBut" onclick="location.href = './pages/form/form.html'">Request a tour</button>`;
        }
      } else {
        priceSection.innerHTML = `<div class= "homeContainer__mainInfo"><span class ="moneySection"> $${numberWithCommas(
          Math.round(data[index].ListPrice / 150)
        )}/mo</span> 
                <span class="number">${data[index].BedroomsTotal}</span>
                <span class="unit">bds</span> <span class= "line"></span> <span class="number">${
                  data[index].BathroomsHalf
                }</span> 
                <span class="unit">ba</span> <span class= "line"></span>
                <span class="number">${
                  data[index].LivingArea
                }</span> <span class="unit">sqft</span></div>
                <div class= "homeContainer__addSec"><span class="homeInfoSecondRow">${
                  data[index].UnparsedAddress
                }</span></div>`;
        rentOrSale.innerHTML = `<span class= "houseForRentCircle"></span> House for rent <span class="line"></span>
                <span class= "zestimateText"> Rent Zestimate</span><span class= "r">R</span>:
                <span class= "zestimatePrice">$${numberWithCommas(
                  Math.round(data[index].ListPrice / 150)
                )}/mo</span>`;
        lastRow.innerHTML = `<button class= "requestApplyBut" onclick="location.href = './pages/form/form.html'">Request to apply</button><button class= "requestTourBut" onclick="location.href = './pages/form/form.html'">Request a tour</button>`;
        document.getElementById("priceSection").appendChild(rentOrSale);
      }
      document.getElementById(
        "disclaimer"
      ).innerHTML = `${data[index].Disclaimer}`;
      let xhrImg = new XMLHttpRequest();
      xhrImg.open("GET", "https://randomuser.me/api/", true);
      xhrImg.onload = function() {
        if (this.status == 200) {
          let jsonPerson = JSON.parse(this.responseText);
          let person = jsonPerson.results;
          document.querySelector(
            ".overview__agentImg"
          ).src = `${person[0].picture.large}`;
        }
      };
      xhrImg.send();
      document.querySelector(
        ".overview__AgentName"
      ).innerHTML = `${data[index].ListAgentFullName}`;
      document.getElementById("bottomInfoRow").scrollTop = 0;
      document.getElementById("clickHome").scrollTop = 0;
      document.querySelector(".picContainer").scrollTop = 0;
      document.querySelector("#picLeftColumn").scrollTop = 0;
      if (window.matchMedia("(max-width: 700px)").matches) {
        callback();
      }
    }
  };
  xhr.send();
}
// Custom Auto complete on the home page
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = `<i class="fas fa-search"></i><strong>${arr[i].substr(
          0,
          val.length
        )}</strong>`;
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += `<input type='hidden' value='${arr[i]}'>`;
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
        (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
  increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
  decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}
// Like and dislike
phoneLikeDislike = (elem, e) => {
  e.stopPropagation();
  let col = "#006aff";
  if (window.matchMedia("(max-width: 600px)").matches) {
    let x = document.querySelector("#clickHome");
    let height = 260.75;
    if (window.matchMedia("(max-width: 450px)").matches) {
      height = 206.08;
    }
    if (x.scrollTop > height) {
      col = "#006aff";
    } else {
      col = "#fff";
    }
    if (elem.firstElementChild.classList[0] === "far") {
      elem.innerHTML = `<i class="fas fa-heart HomeContainerIcon__icon" style="font-size:20px; color:${col}"></i>`;
    } else if (elem.firstElementChild.classList[0] === "fas") {
      elem.innerHTML = `<i class="far fa-heart HomeContainerIcon__icon" style="font-size:20px; color:${col}"></i>`;
    }
  } else {
    let newTag = document.createElement("i");
    newTag.style.color = "#006aff";
    newTag.style.fontSize = "20px";
    if (elem.firstElementChild.classList[0] === "far") {
      elem.removeChild(elem.children[0]);
      newTag.setAttribute("class", "fas fa-heart");
      elem.insertBefore(newTag, elem.firstChild);
    } else if (elem.firstElementChild.classList[0] === "fas") {
      elem.removeChild(elem.children[0]);
      newTag.setAttribute("class", "far fa-heart");
      elem.insertBefore(newTag, elem.firstChild);
    }
  }
};
let locations = [
  "Mission Dolores",
  "Potrero",
  "Diamond Heights",
  "West Portal",
  "San Francisco",
  "Mission Terrace",
  "Central Sunset",
  "Bayview",
  "Merced Manor",
  "Sunnyside",
  "Noe Valley",
  "Ingleside",
  "Portola",
  "Lakeshore",
  "Bernal Heights",
  "Lakeside",
  "Excelsior",
  "Outer Sunset",
  "Castro",
  "Midtown Terrace",
  "St Francis Woods",
  "Balboa Terrace",
  "Silver Terrace",
  "San Francisco State University",
  "Central Waterfront",
  "Inner Sunset",
  "Parkmerced",
  "Mission District",
  "Golden Gate Heights",
  "Forest Hill",
  "Visitacion Valley",
  "Forest Knolls",
  "Ingleside Terrace",
  "Dolores Heights",
  "Golden Gate Park",
  "Westwood Park",
  "Westwood Highlands",
  "Twin Peaks",
  "Mission Bay",
  "Inner Parkside",
  "Parnassus",
  "Corona Heights",
  "Duboce Triangle",
  "Hunters Point",
  "Dogpatch",
  "Oceanview",
  "Miraloma Park",
  "Stonestown",
  "Outer Mission",
  "Buena Vista Park",
  "Sherwood Forest",
  "Merced Heights",
  "Ashbury Heights",
  "Forest Hill Extension",
  "Glen Park",
  "Clarendon Heights",
  "Upper Market",
  "Mt Davidson Manor",
  "Cole Valley",
  "Ingleside Heights",
  "Monterey Heights",
];
if (!window.location.pathname.includes("result")) {
  autocomplete(document.getElementById("searchBox"), locations);
}
