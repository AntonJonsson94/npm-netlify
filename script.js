const card = document.querySelector("#card");
const input = document.querySelector("#input");
const button = document.querySelector("#submit");
const form = document.querySelector("form");
function printMessage() {
    card.innerHTML = "";
    const message = document.createElement("p");
    message.innerText = `Hej ${input.value}!`;
    console.log(input.value);
    card.append(message);
}

form.addEventListener("submit", () => {
    printMessage();
});
