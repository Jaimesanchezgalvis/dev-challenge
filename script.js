// get data by fetch
function getdata() {
    fetch("./data.json")
        .then(res => res.json())
        .then(data => {
            createTable(data)
        });
    hideButton();
};
// hide button
function hideButton() {
    const button = document.querySelector(".btn");
    button.style.display = "none";
    createHome();
}
// create button home
function createHome() {
    let home = document.querySelector(".home");
    if (home.style.display === "none") {
        home.style.display = "block";
    } else {
        home.style.display = "none"
    }
}
// render data
function createTable(data) {
    // sort data
    data.sort(function (a, b) { return a.bestBid - b.bestBid });
    data.reverse();
    // create dynamic table
    for (let value of data) {
        content.innerHTML += `
        <tr>
        <th>${value.name}</th>
        <td>${value.bestBid}</td>
        <td>${value.bestAsk}</td>
        <td>${value.lastChangeBid}</td>
        <td>${value.lastChangeAsk}</td>
        </tr>
        `
    }
}