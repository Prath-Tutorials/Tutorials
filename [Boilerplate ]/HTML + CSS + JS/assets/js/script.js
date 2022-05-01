let apiQuotes = [];

// Get a single quote
function newQupte(){
    // Pick a random quotes form apiQuotes array

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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