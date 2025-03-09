document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll('.fade');
    let index = 0;

    function showNextDiv() {
        // Hide all divs initially
        divs.forEach(div => div.classList.remove('active'));

        // Show the next div in the loop
        divs[index].classList.add('active');
        index = (index + 1) % divs.length; // Loop the index back to 0 when it exceeds the number of divs

        setTimeout(showNextDiv, 5000); // 1.5 seconds delay before the next fade-in
    }

    // Start showing divs one by one in a loop
    showNextDiv();
});
