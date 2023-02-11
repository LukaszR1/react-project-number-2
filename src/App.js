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
  const [selectValue, setSelectValue] = useState("Wybierz walutę");
  const [result, setResult] = useState(0);
  const [isLoading, setisLoading] = useState("");
  const [alert, setAlert] = useState("");
  function handleInputChange(value) {
    setInputValue(value);
  }
  
  function handleSelectChange(value) {
    setSelectValue(value);
  }
 

  function handleButtonClick() {
    if (inputValue <= 0 || inputValue === "") {
      setAlert("wartość musi być większą od zera");
    } else if (selectValue === "Wybierz walutę" ) {
      setAlert("wybierz walutę");
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      getCurrency(selectValue).then((data) =>{  setResult((inputValue * data.rates[0].mid).toFixed(2))
      setAlert("")
    setInputValue(0)
    setSelectValue("Wybierz walutę")}
      
      ).catch((error)=> setAlert(error))
      
    }, 3000);
    

  }

  return (
    <div className="container">
      {" "}
      <div className="currency-container">
        <Header />
        <CurrencyInput inputChange={handleInputChange} value={inputValue} />
        <SelectCurrencies onChange={handleSelectChange} selectValue={selectValue} />
        <CounterButton onClick={handleButtonClick} />
        <AlertMessage alert={alert} />
        <Loader isLoading={isLoading} />
        <Result result={result} />
        
      </div>{" "}
    </div>

  );
}

export default App;

