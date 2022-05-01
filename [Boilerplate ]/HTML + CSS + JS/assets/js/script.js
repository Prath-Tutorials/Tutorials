let apiQuotes = [];

// Get Quotes from API
// Asynchronous fetch request 

async function getquotes(){
    const apiURL = 'https://type.fit/api/quotes';
    try{
        const responds = await fetch(apiURL);
        apiQuotes = await responds.json();
        console.log(apiQuotes[20]);
    } catch (error) {
        // Catch Error Here
    }
}


// On Load
getquotes();