export default function getCurrency(currency) {
  const response = fetch(
    `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/`
  );
  return response.json();
}
