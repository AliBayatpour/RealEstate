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
let ondrag = false;
// drag and drop image gallary for mobile phone
getImg = elem => {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slidesLength,
    myIndex,
    transferscale,
    getImgindex = [];
  let myItemWrapper;
  let itemsWrapper = document.querySelectorAll(".mainContent__itemsWrapper");
  itemsWrapper.forEach((element, index) => {
    element.onmousedown = dragStart;
    element.setAttribute("id", `itmId${index}`);
    element.addEventListener("touchstart", dragStart);
    element.addEventListener("touchend", dragEnd);
    element.addEventListener("touchmove", dragAction);
    getImgindex[index] = 0;
  });

  function dragStart(e) {
    itemsWrapper.forEach(element => {
      if (e.target.closest(`#${element.id}`)) {
        let str = element.id;
        myIndex = Number(str.charAt(str.length - 1));
        myItemWrapper = element;
        slidesLength = Number(element.childElementCount);
        transferscale = Number(element.firstElementChild.clientWidth);
      }
    });
    myItemWrapper.style.transition = null;
    e = e || window.event;
    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
      posInitial = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      posInitial = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function dragAction(e) {
    ondrag = true;
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
    myItemWrapper.style.right = posX2 - myItemWrapper.offsetLeft + "px";
  }
  function dragEnd(e) {
    e = e || window.event;
    myItemWrapper.style.transition = "all 200ms ease-out";
    let responsiveSlideLength;
    if (window.matchMedia("(max-width: 530px)").matches) {
      responsiveSlideLength = slidesLength - 1;
    } else {
      responsiveSlideLength = slidesLength - 2;
    }
    if (
      posFinal - posInitial < -threshold &&
      getImgindex[myIndex] < responsiveSlideLength
    ) {
      getImgindex[myIndex]++;
      myItemWrapper.style.right = transferscale * getImgindex[myIndex] + "px";
    } else if (posFinal - posInitial > threshold && getImgindex[myIndex] > 0) {
      getImgindex[myIndex]--;
      myItemWrapper.style.right = transferscale * getImgindex[myIndex] + "px";
    } else {
      myItemWrapper.style.right = transferscale * getImgindex[myIndex] + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }
};
changePage = () => {
  if (!ondrag) {
    window.location.href = "./buyersGuideSubPage/buyersGuideSubPage.html";
  } else {
    ondrag = false;
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
