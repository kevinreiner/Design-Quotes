const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
// function newQuote() {
    // Get Quotes From API
//    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//    console.log(quote);
// }

// Get Quotes From API
// async function getQuotes() {
//    loading();
//    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//    try {
//        const response = await fetch(apiURL);
//        apiQuotes = await response.json();
//        newQuote();
//    } catch (error) {
        // Catch Error Here
//    }
// }

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - {authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
// getQuotes();

// Show New Quote
function newQuote() {
    loading();
    // Pick a random quote from the quotes.js file
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    
    // Check Quote length to determine styling
    if (quote.quote.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
   // Set Quote, Hide Loader
    quoteText.textContent = quote.quote;
    complete();
}

// Entfernt den Fokus Zustand nach dem Klick
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.blur(); // Entfernt den Fokuszustand nach dem Klick
    });
  });


newQuote();