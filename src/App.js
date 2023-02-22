import getCurrency from "./services/fetchApi";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import CurrencyInput from "./components/Input";
import SelectCurrencies from "./components/Select";
import CounterButton from "./components/Button";
import AlertMessage from "./components/Alert";
import Loader from "./components/Loader";
import Result from "./components/Result";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("Wybierz walutę");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState("");
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
    setIsLoading(true);
    getCurrency(selectValue)
      .then((data) => {
        setInset(`${inputValue}  ${selectValue} = `);
        setResult((inputValue * data.rates[0].mid).toFixed(2));
        setAlert("");
      })
      .catch((error) => setAlert(error.message))
      .finally(() => {
        setInputValue("");
        setSelectValue("Wybierz walutę");
        setIsLoading(false);
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
