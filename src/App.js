import "./App.css";
import Header from "./Components/Header";
import CurrencyInput from "./Components/Input/Input";
import SelectCurrencies from "./Components/Select/Select";
import CounterButton from "./Components/Button/Button";
import { useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState("");

  function handleInputChange(value) {
    setInputValue(value);
  }
  console.log(inputValue);
  function handleSelectChange(value) {
    setSelectValue(value);
  }
  console.log(selectValue);

  function handleButtonClick() {
    if (inputValue && selectValue) {
      alert("wypełnij")
    }
  }

  return (
    <div className="container">
      <Header />
      <CurrencyInput inputChange={handleInputChange} />
      <SelectCurrencies onChange={handleSelectChange} />
      <CounterButton onClick={handleButtonClick} />
    </div>

    //     <div class="container-error">
    //       <p class="error-message" id="error-message"></p>
    //     </div>
    //     <div id="loader" class="loader"></div>
    //     <div class="currency-converter" id="currency-converter">
    //       <span class="calculate-result" id="calculate-result"></span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
