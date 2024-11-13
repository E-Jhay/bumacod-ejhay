const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value
    const interest = document.getElementById('interest').value
    const term = document.getElementById('term').value
    const monthly = calculateMonthlyPayment(amount, interest,term)

    document.getElementById('monthly').textContent = `Monthly Payment: $${monthly}`
})

function calculateMonthlyPayment(loanAmount, interest, years) {
    // Convert annual interest rate to a monthly rate
    const monthlyRate = interest / 100 / 12;

    // Calculate total number of payments (months)
    const totalPayments = years * 12;

    // Calculate monthly payment using the loan formula
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                           (Math.pow(1 + monthlyRate, totalPayments) - 1);

    return monthlyPayment.toFixed(2); // Round to 2 decimal places
}
