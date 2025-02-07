const wordButton = document.getElementById('wordButton');
const wordDisplay = document.getElementById('wordDisplay');
const catImage = document.getElementById('catImage');
const alexImage = document.getElementById('alexImage');
const tataImage = document.getElementById('tataImage');
const mamaImage = document.getElementById('mamaImage');
const ohotaImage = document.getElementById('ohotaImage');

wordButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * romanianWords.length);
    const randomWord = romanianWords[randomIndex];

    wordDisplay.textContent = randomWord;

    // Text-to-Speech
    const utterance = new SpeechSynthesisUtterance(randomWord);
    utterance.lang = 'ro-RO';
    speechSynthesis.speak(utterance);

    // Reset all image sources to empty (hide all images)
    catImage.src = "";
    alexImage.src = "";
    tataImage.src = "";
    mamaImage.src = "";
    ohotaImage.src = "";

    // Show correct image based on word by setting its src
    if (randomWord === "Jizzy Boy Santana") {
        catImage.src = "cat.jpg";
    } else if (randomWord === "alex craia") {
        alexImage.src = "alex.jpg";
    } else if (randomWord === "tata fete") {
        tataImage.src = "tata.jpg";
    } else if (randomWord === "mama bebe") {
        mamaImage.src = "mama.jpg";
    } else if (randomWord === "ohota ohota") {
        ohotaImage.src = "ohota.jpg";
    }
    // For words without specific images, no image will be shown (as we reset src to "")
});