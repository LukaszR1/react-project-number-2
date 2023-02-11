import "./App.css";
import Header from "./Components/Header";
import CurrencyInput from "./Components/Input/Input";
import SelectCurrencies from "./Components/Select/Select";
import CounterButton from "./Components/Button/Button";
import { useState } from "react";
import getCurrency from "./services/FetchApi";
import AlertMessage from "./Components/Alert/Alert";
import Loader from "./Components/Loader/Loader";
import Result from "./Components/Result/Result";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState("");
  const [result, setResult] = useState(0);
  const [isLoading, setisLoading] = useState("");
  const [alert, setAlert] = useState("");
  function handleInputChange(value) {
    setInputValue(value);
  }
  console.log(inputValue);
  function handleSelectChange(value) {
    setSelectValue(value);
  }
  console.log(selectValue);

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
    setTimeout(() => {
      setisLoading(false);
getCurrency(selectValue).then((data) =>
      setResult((inputValue * data.rates[0].mid).toFixed(2))
    );
      
    }, 3000);
    
    setAlert("");
  }

  return (
    <div className="container">
      {" "}
      <div className="currency-container">
        <Header />
        <CurrencyInput inputChange={handleInputChange} />
        <SelectCurrencies onChange={handleSelectChange} />
        <CounterButton onClick={handleButtonClick} />
        <AlertMessage alert={alert} />
        <Loader isLoading={isLoading} />
        <Result result={result} />
        
      </div>{" "}
    </div>

  );
}

export default App;

