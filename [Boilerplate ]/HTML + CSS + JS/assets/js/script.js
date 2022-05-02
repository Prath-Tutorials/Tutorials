const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const quoteTwitter = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')

let apiQuotes = [];


// Get a single quote
function newQupte(){
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

    quoteText.textContent=quote.text;

    console.log(quote.author);
}


// Get Quotes from API
// Asynchronous fetch request 

async function getquotes(){
    const apiURL = 'https://type.fit/api/quotes';
    try{
        const responds = await fetch(apiURL);
        apiQuotes = await responds.json();
        newQupte();
    } catch (error) {
        // Catch Error Here
    }
}


// On Load
getquotes();