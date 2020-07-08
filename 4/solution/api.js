getQuestion = () => {
    const url = "https://jservice.io/api/random";
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    })
}