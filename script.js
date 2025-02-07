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

    // Initially hide all images using display: none;
    catImage.style.display = 'none';
    alexImage.style.display = 'none';
    tataImage.style.display = 'none';
    mamaImage.style.display = 'none';
    ohotaImage.style.display = 'none';

    // Show correct image based on word by setting its display to 'block'
    if (randomWord === "Jizzy Boy Santana") {
        catImage.style.display = 'block';
    } else if (randomWord === "alex craia") {
        alexImage.style.display = 'block';
    } else if (randomWord === "tata fete") {
        tataImage.style.display = 'block';
    } else if (randomWord === "mama bebe") {
        mamaImage.style.display = 'block';
    } else if (randomWord === "ohota ohota") {
        ohotaImage.style.display = 'block';
    }
});