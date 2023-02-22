export default function Result({ result, inset }) {
  return (
    <div className="currency-converter" id="currency-converter">
      <span
        className="calculate-result"
        id="calculate-result"
      >{`${inset} ${result} PLN`}</span>
    </div>
  );
}
