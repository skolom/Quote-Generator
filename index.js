const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById("quote")
const authEl = document.getElementById("author")


async function getQuote() {

    try {
        btnEl.innerText = "Loading..."
        btnEl.disable = true; 

        const rsp = await axios.get((`https://api.quotable.io/random`)); 

        quoteEl.innerText = rsp.data.content;
    
        authEl.innerText = ` ~ ${rsp.data.author}`;

        btnEl.innerText = "Get A Quote"
        btnEl.disable = false;




    } catch (error) {

        console.log(error);
        quoteEl.innerHTML = `An error occured, try again later`;
        authEl.innerText = `error happened`;
    }

}

getQuote();

btnEl.addEventListener("click", getQuote); 