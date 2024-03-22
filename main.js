let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn = document.querySelector("#btn");

btn.addEventListener("click", newQuotes);

function newQuotes()
{
    fetch("https://quotable.io/random")
        .then(res => res.json())
        .then(data => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `"${data.author}"`;
    })
}