//Doer not a maker
function applyGoatMode(){
    //select the body element
    const bodyElement = document.querySelector("body");
    console.log("this should be body", bodyElement);
    //apply a class of "".goat-mode" to the body element
    bodyElement.classList.add("goat-mode");

    // select ALL of the list items
    const listItems= document.querySelectorAll(".list-items")
    console.log(listItems);
    // turn their background colors ...
    for (let i = 0; i < listItems.length; i++){
        listItems[i].classList.add("gold-background");
    }

}
applyGoatMode();