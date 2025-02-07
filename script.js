const wordButton = document.getElementById('wordButton');
const wordDisplay = document.getElementById('wordDisplay');
const catImage = document.getElementById('catImage');

wordButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * romanianWords.length);
    const randomWord = romanianWords[randomIndex];

    wordDisplay.textContent = randomWord;

    // Text-to-Speech
    const utterance = new SpeechSynthesisUtterance(randomWord);
    utterance.lang = 'ro-RO';
    speechSynthesis.speak(utterance);

    // Image animation logic
    if (randomWord === "Jizzy Boy Santana") {
        // Trigger jump animation for "Jizzy Boy Santana"
        catImage.classList.remove('show'); // Ensure 'show' class is removed
        catImage.classList.add('jump');   // Add 'jump' class

        setTimeout(() => {
            catImage.classList.remove('jump'); // Remove 'jump' class after animation
        }, 500); // Match animation duration (0.5s)

    } else {
        // For other words, use the regular "show" animation
        catImage.classList.remove('jump');  // Ensure 'jump' class is removed
        catImage.classList.add('show');   // Add 'show' class

        setTimeout(() => {
            catImage.classList.remove('show'); // Remove 'show' class after animation
        }, 500); // Keep same duration as jump animation for consistency
    }
});