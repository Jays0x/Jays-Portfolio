
const element = document.getElementById("my-element");
let texts = ["UI/UX Design.", "Front-End Development.", "Market Research.", "Graphic Design."];
let index = 0;
let currentText = "";
let currentIndex = 0;

function updateText() {
  currentText = texts[index].substring(0, currentIndex + 1);
  element.textContent = currentText;
  currentIndex++;

  if (currentIndex < texts[index].length) {
    setTimeout(updateText, 200);
  } else {
    index = (index + 1) % texts.length;
    currentIndex = 0;
    setTimeout(updateText, 2000);
  }
}

updateText();
// Menu  bar
var menuList = document.getElementById("menuList");

        menuList.style.maxHeight = "0px";

        function togglemenu(){
            if( menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "250px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }