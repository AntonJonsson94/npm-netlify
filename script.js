const body = document.querySelector("body");
function printMessage(name) {
    body.innerHTML = "";
    const message = document.createElement("p");
    message.innerText = `Hej ${name}!`;
    console.log(message);
    body.append(message);
}
