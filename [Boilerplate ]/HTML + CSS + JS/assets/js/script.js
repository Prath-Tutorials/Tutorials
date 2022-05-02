const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterButton = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = [];

// Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}


// Get a single quote
function newQuote(){
    loading();
    // Pick a random quotes form apiQuotes array

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    

    // Check if Author feild is blank
    if(!quote.author){
        quoteAuthor.textContent="Unknown";
    } else {
        quoteAuthor.textContent=quote.author;
    }

    // Check Quote Length to determine styling
    if (quote.text.length > 100){
        quoteText.classList.add('long-quote')
    } else
    {
        quoteText.classList.remove('long-quote')
    }

    // Set Quote and Hide Loadfer
    quoteText.textContent=quote.text;
    complete();

}


// Get Quotes from API
// Asynchronous fetch request 

async function getquotes(){
    loading();
    const apiURL = 'https://type.fit/api/quotes';
    try{
        const responds = await fetch(apiURL);
        apiQuotes = await responds.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}


// Tweet Quote
function tweetQuote(){
    const twitterURL =  `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
    window.open(twitterURL, '_blank');
}


// Event Listenter
newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);

// On Load
getquotes();



