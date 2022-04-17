const form = document.querySelector(".input-section");
const textInput = form.elements[0];
const btn = document.querySelector(".btn");
const vowels = document.querySelector(".vowels");

function countVowels() {
    let count = 0;
    const textEntered = textInput.value;
    // console.log(textInput.value, textInput.value.length);

    // console.log(textInput.value);

    for (let i = 0; i < textEntered.length; i++) {
        // if ("aeiouAEIOU".indexOf(textEntered[i]) != -1) {
        if (
            textEntered[i] === "a" ||
            textEntered[i] === "e" ||
            textEntered[i] === "i" ||
            textEntered[i] === "o" ||
            textEntered[i] === "u" ||
            textEntered[i] === "A" ||
            textEntered[i] === "E" ||
            textEntered[i] === "I" ||
            textEntered[i] === "O" ||
            textEntered[i] === "U"
        ) {
            count++;
            // console.log(textEntered[i], count);
        }
    }
    // console.log(vowels);
    // console.log(count);

    vowels.textContent = count;
}

btn.addEventListener("click", countVowels);
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        countVowels();
    }
});
