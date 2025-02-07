const wordButton = document.getElementById('wordButton');
const wordDisplay = document.getElementById('wordDisplay');
const catImage = document.getElementById('catImage');
const alexImage = document.getElementById('alexImage');
const tataImage = document.getElementById('tataImage');
const mamaImage = document.getElementById('mamaImage');
const ohotaImage = document.getElementById('ohotaImage');

const romanianWords = [
    "mama bebe",
    "tata fete",
    "Jizzy Boy Santana",
    "alex craia",
    "ohota ohota"
];

wordButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * romanianWords.length);
    const randomWord = romanianWords[randomIndex];

    wordDisplay.textContent = randomWord;

    // Text-to-Speech
    const utterance = new SpeechSynthesisUtterance(randomWord);
    utterance.lang = 'ro-RO';
    speechSynthesis.speak(utterance);

    // Reset all image classes
    catImage.classList.remove('show', 'jump');
    alexImage.classList.remove('show');
    tataImage.classList.remove('show');
    mamaImage.classList.remove('show');
    ohotaImage.classList.remove('show');

    // Image animation logic based on word
    if (randomWord === "Jizzy Boy Santana") {
        catImage.classList.add('jump');
        setTimeout(() => {
            catImage.classList.remove('jump');
        }, 2000); // Changed to 2000ms (2 seconds)

    } else if (randomWord === "alex craia") {
        alexImage.classList.add('show');
        setTimeout(() => {
            alexImage.classList.remove('show');
        }, 2000); // Changed to 2000ms

    } else if (randomWord === "tata fete") {
        tataImage.classList.add('show');
        setTimeout(() => {
            tataImage.classList.remove('show');
        }, 2000); // Changed to 2000ms

    } else if (randomWord === "mama bebe") {
        mamaImage.classList.add('show');
        setTimeout(() => {
            mamaImage.classList.remove('show');
        }, 2000); // Changed to 2000ms

    } else if (randomWord === "ohota ohota") {
        ohotaImage.classList.add('show');
        setTimeout(() => {
            ohotaImage.classList.remove('show');
        }, 2000); // Changed to 2000ms
    }
    // No 'else' needed now, as we handle all words explicitly
});