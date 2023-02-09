export default function CurrencyInput({ inputChange }) {
  return (
    <input
      type="number"
      class="currencies-input"
      id="currencies-input"
      placeholder="Wpisz kwotę"
      onChange={(event)=>inputChange(event.target.value)}
    />
  );
}
