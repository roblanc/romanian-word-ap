const wordButton = document.getElementById('wordButton');
const wordDisplay = document.getElementById('wordDisplay');

wordButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * romanianWords.length);
    const randomWord = romanianWords[randomIndex];

    wordDisplay.textContent = randomWord; // Display the word visually (optional)

    // Text-to-Speech
    const utterance = new SpeechSynthesisUtterance(randomWord);
    utterance.lang = 'ro-RO'; // Set language to Romanian

    speechSynthesis.speak(utterance);
});