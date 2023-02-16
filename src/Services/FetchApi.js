export default async function getCurrency(currency) {
   const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/`
    );
    return await response.json();
}
