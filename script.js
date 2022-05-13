document.getElementById("headerMenuDropdown").addEventListener("click", function (event) {
  document.getElementById("drawerContainer").style.display = "flex";
});

document.getElementById("drawerCloseButton").addEventListener("click", function (event) {
  document.getElementById("drawerContainer").style.display = "none";
});

document.addEventListener("click", function (event) {
  var isClickInside =
    document.getElementById("drawerWhiteContainer").contains(event.target) || document.getElementById("headerMenuDropdown").contains(event.target);

  if (!isClickInside) {
    document.getElementById("drawerContainer").style.display = "none";
  }
});
