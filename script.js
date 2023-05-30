const card = document.querySelector("#card");

function printMessage() {
    const message = document.createElement("p");
    message.innerText = "Hejsan";

    card.append(message);
}
printMessage();
