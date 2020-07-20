// Wait for page to loaded:
document.addEventListener('DOMContentLoaded', function() {

    // Hide all pages
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    // Select all buttons
    document.querySelectorAll('button').forEach(button => {

        // When a button is clicked, switch to that page
        button.onclick = function() {
            showPage(this.dataset.page);
        }
    })

    window.onscroll = handleScroll;
});

// Changes styling near the center
function handleScroll() {
    if (document.querySelector('#page2').style.display === 'block' && 
        window.scrollY + window.innerHeight > document.body.offsetHeight / 2 - 100 &&
        window.scrollY + window.innerHeight < document.body.offsetHeight / 2 + 100) {
        document.querySelectorAll('h1').forEach(header => {
            header.style.color = 'blue';
        });
    } else {
        document.querySelectorAll('h1').forEach(header => {
            header.style.color = 'black';
        });
    }
}


// Shows one page and hides the other two
function showPage(page) {

    // Hide all of the divs:
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    // Show the div provided in the argument
    document.querySelector(`#${page}`).style.display = 'block';
}