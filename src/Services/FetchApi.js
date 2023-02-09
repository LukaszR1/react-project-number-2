export default async function getCurrency({ currencies }) {
  const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/rates/A/${currencies}/`
    );
    return await response.json();
}
