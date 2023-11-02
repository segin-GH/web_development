document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('input');
    const enterButton = document.getElementById('search');
    const outputBox = document.getElementById('output');

    enterButton.addEventListener('click', function() {
        const userInput = inputBox.value;
        if(userInput) {
            const pTag = document.createElement('p');
            pTag.textContent = userInput;
            outputBox.appendChild(pTag);
            inputBox.value = ''; // Clear the input box
        }
    });

    inputBox.addEventListener('keydown', function(event) {
        if(event.key === 'Enter') {
            enterButton.click();
        }
    });
});
