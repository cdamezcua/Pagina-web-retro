function loadJPG() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const img = document.createElement("img");
        img.src = this.responseURL;
        document.getElementById("botonCompraDeBoletos").innerHTML = "";
        document.getElementById("botonCompraDeBoletos").appendChild(img)
    }
    xhttp.open("GET", "gifs/sold.gif", true);
    xhttp.send();
}
