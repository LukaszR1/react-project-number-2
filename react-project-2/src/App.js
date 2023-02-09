
import './App.css';
import Header from './Components/Header';
import CurrencyInput from './Components/Input/Input';
import SelectCurrencies from './Components/Select/Select'

function App() {
  return (

<div className="container" >
      <Header />
      <CurrencyInput />
      <SelectCurrencies />

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
