const wordButton = document.getElementById('wordButton');
const wordDisplay = document.getElementById('wordDisplay');
const catImage = document.getElementById('catImage');
const alexImage = document.getElementById('alexImage');
const tataImage = document.getElementById('tataImage');

wordButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * romanianWords.length);
    const randomWord = romanianWords[randomIndex];

    wordDisplay.textContent = randomWord;

    // Text-to-Speech
    const utterance = new SpeechSynthesisUtterance(randomWord);
    utterance.lang = 'ro-RO';
    speechSynthesis.speak(utterance);

    // Image animation logic based on word
    catImage.classList.remove('show', 'jump'); // Ensure cat image classes are removed
    alexImage.classList.remove('show');        // Ensure alex image class is removed
    tataImage.classList.remove('show');        // Ensure tata image class is removed

    if (randomWord === "Jizzy Boy Santana") {
        catImage.classList.add('jump');   // Jump animation for cat

        setTimeout(() => {
            catImage.classList.remove('jump');
        }, 500);

    } else if (randomWord === "alex craia") {
        alexImage.classList.add('show');   // Show animation for alex

        setTimeout(() => {
            alexImage.classList.remove('show');
        }, 500);

    } else if (randomWord === "tata fete") {
        tataImage.classList.add('show');   // Show animation for tata

        setTimeout(() => {
            tataImage.classList.remove('show');
        }, 500);

    } else {
        // Default to cat image show animation for other words (or no image)
        catImage.classList.add('show');   // Show animation for cat

        setTimeout(() => {
            catImage.classList.remove('show');
        }, 500);
    }
});