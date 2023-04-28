console.log("test");

function clickHere() {
    var htmlText = document.getElementById("test");
    if(htmlText.innerText == "test"){
        htmlText.innerHTML = "here's the new stuff!";
    }
    else {
        htmlText.innerHTML = "test";
    }
    // document.getElementById("test").innerText = "here's some new info!"
}