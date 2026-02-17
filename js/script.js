function getQuote() {
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
        document.getElementById("quoteDisplay").innerHTML =
            data.content + " — " + data.author;
    })
    .catch(error => {
        document.getElementById("quoteDisplay").innerHTML =
            "Unable to load quote.";
    });
}

// Form validation
function validateForm() {
    document.getElementById("formMessage").innerHTML =
        "Thank you! Your message has been received.";
    return false;
}
