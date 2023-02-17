export default function CurrencyInput({ inputChange, value }) {
  return (
    <input
      type="number"
      className="currencies-input"
      id="currencies-input"
      placeholder="Wpisz kwotę"
      value={value}
      onChange={(event) => inputChange(event.target.value)}
    />
  );
}
