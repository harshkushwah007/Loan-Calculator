function calculateLoan() {
    // Get values from input fields
    let loanAmount = parseFloat(document.getElementById("loan").value);
    let interestRate = parseFloat(document.getElementById("interest").value);
    let monthsToPay = parseInt(document.getElementById("month").value, 10);
  
    // Check for valid inputs
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(monthsToPay) || monthsToPay <= 0) {
      document.getElementById("payment").innerHTML = "Please enter valid inputs.";
      return;
    }
  
    // Calculate monthly interest
    let monthlyInterest = (loanAmount * (interestRate * 0.01)) / monthsToPay;
  
    // Calculate monthly payment
    let monthPayments = (loanAmount / monthsToPay + monthlyInterest).toFixed(2);
  
    // Display result
    document.getElementById("payment").innerHTML = `Monthly Payments: ${monthPayments}`;
  }
  