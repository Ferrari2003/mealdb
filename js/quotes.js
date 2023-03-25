const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}


const loadQuote2 = async() => {
    try{
        const res = await  fetch('https://api.kanye.rest/');
    const data = await res.json();
    displayQuote(data);
    }
    catch(err){
        console.log(err)
    }
}

const displayQuote = quote => {
    const blockQuotes = document.getElementById('quote');
    blockQuotes.innerHTML = quote.quote;
}

loadQuote();

