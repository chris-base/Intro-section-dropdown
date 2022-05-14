// Opening the drawer on mobile by clicking the hamburger menu button
document.getElementById("headerMenuDropdown").addEventListener("click", function (event) {
  document.getElementById("drawerContainer").style.display = "flex";
});

// Closing the drawer on mobile by clicking the close button in the drawer
document.getElementById("drawerCloseButton").addEventListener("click", function (event) {
  document.getElementById("drawerContainer").style.display = "none";
});

// Used to check if the feature drop down is open
let isFeatureDropdownOpen = false;

// When clicking the features button in the header, check if the dropdown is already open
// If already open, close it and reset all variables/styling
// If not open, show dropdown, change isFeatureDropdownOpen, and change icon image
document.getElementById("featureHeaderForClick").addEventListener("click", function (event) {
  if (isFeatureDropdownOpen) {
    document.getElementById("featureDropdownContainer").style.display = "none";
    document.getElementById("featureDropDownIcon").style.backgroundImage = "url(../../public/icon-arrow-down.svg)";
    isFeatureDropdownOpen = false;
  } else {
    document.getElementById("featureDropdownContainer").style.display = "flex";
    document.getElementById("featureDropDownIcon").style.backgroundImage = "url(../../public/icon-arrow-up.svg)";
    isFeatureDropdownOpen = true;
  }
});

// General click on DOM to see if the click was within and divs checked
document.addEventListener("click", function (event) {
  // If the click was ouside the drawer, or the hamburger menu button
  var isClickInsideDrawer =
    document.getElementById("drawerWhiteContainer").contains(event.target) || document.getElementById("headerMenuDropdown").contains(event.target);

  // Hide the drawer if the click is outside of the divs above
  if (!isClickInsideDrawer) {
    document.getElementById("drawerContainer").style.display = "none";
  }

  // Check if click is outside of the feature dropdown box, or the feature button
  var isClickInsideFeatureDropdown =
    document.getElementById("featureDropdownContainer").contains(event.target) ||
    document.getElementById("featureHeaderForClick").contains(event.target);

  // If outside feature button/dropdown box, hide the dropdown box and change arrow icon
  if (!isClickInsideFeatureDropdown) {
    document.getElementById("featureDropdownContainer").style.display = "none";
    document.getElementById("featureDropDownIcon").style.backgroundImage = "url(../../public/icon-arrow-down.svg)";
    isFeatureDropdownOpen = false;
  }
});
