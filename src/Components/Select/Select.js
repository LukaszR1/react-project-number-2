export default function SelectCurrencies({ onChange, selectValue }) {
  return (
    <select
      className="form-select"
      id="select-currencies"
      aria-label="Default select example"
      value = {selectValue}
      onChange={(event) => onChange(event.target.value)}
    >
      <option>Wybierz walutę</option>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
    </select>
  );
}
