const card = document.querySelector("#card");
const input = document.querySelector("#input");
const button = document.querySelector("#submit");

function printMessage() {
    card.innerHTML = "";
    const message = document.createElement("p");
    message.innerText = `Hej ${input.value}!`;

    card.append(message);
}

button.addEventListener("click", () => {
    printMessage();
});
