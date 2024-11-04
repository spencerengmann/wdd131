function addHighlight(input) {
    input.classList.add('highlight');
}
 
function removeHighlight(input) {
    input.classList.remove('highlight');
}
 
// Example usage inside validation checks:
if (!/^\d{16}$/.test(cardNumber)) {
    alert("Card number must be 16 digits.");
    addHighlight(document.getElementById('card-number'));
    isValid = false;
} else {
    removeHighlight(document.getElementById('card-number'));
}