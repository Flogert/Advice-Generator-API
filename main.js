document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
    const url = `https://api.adviceslip.com/advice`;

    fetch(url)
        .then(res => res.json())
        .then(data => {

        document.querySelector('.adviceId').innerText = data.slip.id;
        document.querySelector('h1').innerText = data.slip.advice;

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

