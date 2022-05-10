// This is main calculator JS file. It is responsible for creating HTML content for calculator
// and injecting it into DOM

import currencies from '../data/currencies.json' assert {type: 'json'};
import handleCurrencyForm from './handleCurrencyForm.js';

const calcDOM = document.getElementById('seb-currency-calculator');

const currencyDropdownHTML = Object.keys(currencies).map((currencyCode) => 
    `<option value="${currencyCode}/${currencies[currencyCode].rate}">${currencyCode} / ${currencies[currencyCode].name}</option>`);
    
calcDOM.innerHTML = `
    <form id="currencyForm">
        <div class="calculator__container">
            <div class="calculator__pay-amout">
                <label for="payAmount">Amout (€)</label>
                <input id="payAmount" name="payAmount" type="number" step="0.01">
            </div>
            <div class="calculator__selected-currency">
                <select name="selectedCurrency" id="selectedCurrency">
                    ${currencyDropdownHTML}
                </select>
            </div>
            <button id="convertBtn" type="submit" class="calculator__button">Convert</button>
            <div id="buyAmount" class="calculator__buy-amount"></div>
        </div>
    </form>
`;

handleCurrencyForm();