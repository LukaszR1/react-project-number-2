import "./App.css";
import Header from "./Components/Header";
import CurrencyInput from "./Components/Input";
import SelectCurrencies from "./Components/Select";
import CounterButton from "./Components/Button";
import { useState } from "react";
import getCurrency from "./services/fetchApi";
import AlertMessage from "./Components/Alert";
import Loader from "./Components/Loader";
import Result from "./Components/Result";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("Wybierz walutę");
  const [result, setResult] = useState(0);
  const [isLoading, setisLoading] = useState("");
  const [alert, setAlert] = useState("");
  const [inset, setInset] = useState("");
  function handleInputChange(value) {
    setInputValue(value);
  }

  function handleSelectChange(value) {
    setSelectValue(value);
  }

  function handleButtonClick() {
    if (inputValue <= 0 || inputValue === "") {
      setAlert("wartość musi być większą od zera");
    } else if (selectValue === "Wybierz walutę") {
      setAlert("wybierz walutę");
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    setisLoading(true);

    getCurrency(selectValue)
      .then((data) => {
        setInset(`${inputValue}  ${selectValue} ${"="}`);
        setResult((inputValue * data.rates[0].mid).toFixed(2));
        setAlert("");
      })
      .catch((error) => setAlert(error.message))
      .finally(() => {
        setInputValue("");
        setSelectValue("Wybierz walutę");
        setisLoading(false);
      });
  }

  return (
    <div className="container">
      <div className="currency-container">
        <Header />
        <CurrencyInput inputChange={handleInputChange} value={inputValue} />
        <SelectCurrencies
          onChange={handleSelectChange}
          selectValue={selectValue}
        />
        <CounterButton onClick={handleButtonClick} />
        <AlertMessage alert={alert} />
        <Loader isLoading={isLoading} />
        <Result result={result} inset={inset} />
      </div>
    </div>
  );
}

export default App;

