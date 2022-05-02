import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import Currency from "./components/Currency";
import CurrencyPicker from "./components/CurrencyPicker";

const App = () => {
  const [count, setCount] = useState(0)
  const [current, setCurrent] = useState('BTC')
  const setCurrency = (currency: string) => {
    setCurrent(currency)
  }

  const [rate, setRate] = useState(0)

  const getRate = () => {
    fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=3A8F1902-F999-4BE8-9747-96C370691643')
        .then((res) => res.json())
        // .then((res) => console.log(res))
        .then((res) => setRate(res.rate.toFixed(2)))
  }

  return (
    <div className="App">
      <TheHeader />
      <Currency current={current} />
      <CurrencyPicker setCurrency={setCurrency} />
      <h1>{rate}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button onClick={getRate}>GET DATA</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <TheFooter />
    </div>
  )
}

export default App
