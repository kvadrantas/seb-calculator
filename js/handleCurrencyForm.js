// This is currency form submit handler. It is responsible for:
// - retrieving input values on submit;
// - currency conversion;
// - injecting results to DOM


function handleCurrencyForm() {
    const currencyFormDOM = document.getElementById("currencyForm");
    
    
    currencyFormDOM.addEventListener("submit", function (evt) {
      const payAmount = parseFloat(document.getElementById('payAmount').value);

      if (!payAmount) {
        alert("Please enter how many EUR you are going to pay");
        return 0;
      }

      const buyAmoutDOM = document.getElementById('buyAmount');
      const [selectedCurrencyCode, selectedCurrencyRate] = document.getElementById('selectedCurrency').value.split('/');
      const buyAmount = (payAmount * selectedCurrencyRate).toFixed(2);
  
      buyAmoutDOM.innerHTML = `
        ${payAmount} EUR = ${buyAmount} ${selectedCurrencyCode}
      `
      evt.preventDefault();
    });
}

export default handleCurrencyForm;