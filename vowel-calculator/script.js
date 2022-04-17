const textInput = document.getElementById("string");
const btn = document.querySelector(".btn");
const vowels = document.querySelector(".vowels");

function countVowels() {
    let count = 0;
    const textEntered = String(textInput.Value);
    // console.log(textInput.value, textInput.value.length);

    for (let i = 0; i < textEntered.length; i++) {
        if ("aeiouAEIOU".indexOf(textEntered[i]) != -1) {
            count++;
        }
    }
    // console.log(vowels);

    vowels.textContent = count;
}

btn.addEventListener("click", countVowels);
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        countVowels();
    }
});
