// This script is responsible from reading currencies data from file and transforming it into more readible json file.
// Building Backend server is not in the scope of this work, meanwhile this is an example, how data preparation and transformation
// to Json could look like.
// In real world scenario I would use node.js Express server as a backend server to publish this stringified data to Internet
// and then would fetch this data on frontend server for example with axios

import fs from "fs/promises";

async function readCurrencyRatesFromFile() {
  try {
    let currencyData = await fs.readFile("./data/www.crc", { encoding: "utf-8" });
    return currencyData;
  } catch (err) {
    console.log("There was an error while reading file. Please try again! Error information:\n");
    console.log(err);
  }
}

const transformRawCurrencyDataToObject = (rawCurrencyData) =>  {
  const rawCurrencies = rawCurrencyData.split('\n');
  let parsedCurrencies = {};

  rawCurrencies.forEach((rawCurrency) => {
    const currnecy = [...rawCurrency.split(',')];
    parsedCurrencies = {
      ...parsedCurrencies,
      ...{[currnecy[1]]: {
        name: currnecy[0],
        // code: currnecy[1],
        rate: currnecy[2],
      }}
    };
    
  })
  return parsedCurrencies;
}

const rawCurrencyData = await readCurrencyRatesFromFile();
const currencies = transformRawCurrencyDataToObject(rawCurrencyData);
console.log(JSON.stringify(currencies));

fs.writeFile ("./data/currencies.json", JSON.stringify(currencies), function(err) {
  if (err) throw err;
  console.log('complete');
  }
);

export default rawCurrencyData;