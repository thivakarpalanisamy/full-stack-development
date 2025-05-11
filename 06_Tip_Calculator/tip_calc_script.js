document.getElementById("calculate").addEventListener("click", () => {
    const bill = parseFloat(document.getElementById("bill").value);
    const tip = parseFloat(document.getElementById("percent").value);
    const people = parseFloat(document.getElementById("people").value);
    const result = document.getElementById("result");

    if (bill > 0 && tip >= 0 && people > 0) {
        const tipAmount = bill * (tip / 100);
        const total = bill + tipAmount;
        const perPerson = total / people;

        result.innerText = `💰 Tip: ₹${tipAmount.toFixed(2)} | Total: ₹${total.toFixed(2)} | Per Person: ₹${perPerson.toFixed(2)}`;
    } else {
        result.innerText = "❌ Please enter valid numbers.";
    }
});