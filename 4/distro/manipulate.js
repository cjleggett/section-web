document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector("#title");
    let items = document.querySelectorAll("li");
    let list = document.querySelector("ul");

    // Changing the Header
    header.innerHTML = "Hello!";
    header.style.color = "blue";

    // Changing list item colors
    items.forEach(item => {
        item.style.color = "red";
    });

    // Add new list item
    let new_item = document.createElement("li");
    new_item.innerHTML = "Final Item (Different Color)";
    list.appendChild(new_item);
});