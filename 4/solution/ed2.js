document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#button1').addEventListener('click', manageClick);
});

manageClick = () => {
    
    // Do some initial stuff
    let x = 4;
    if (x === 4) {
        alert("Yay!")
    }

    // Make an API call
    fetch('some_stuff')
    .then(response => response.json())
    .then(items => {

        // Print items
        console.log(items);

        // Create new DOM object for each element
        items.forEach(manageItem);
    });
}

manageItem = item => {

    // Make DOM object from an item
    // What to do when our new item is clicked
    dom_item.addEventListener('click', itemClick);
    // add dom_item to the screen
}

itemClick = () => {
    // What to do when our new item is clicked
    // maybe there are a few lines here
    // who knows, this could be a really long function
}