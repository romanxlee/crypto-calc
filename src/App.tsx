import { useState, useEffect } from 'react'
import './App.css'
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import Currency from "./components/Currency";
import CurrencyPicker from "./components/CurrencyPicker";

const App = () => {
  const [current, setCurrent] = useState('BTC')

  const [rate, setRate] = useState(0)

  const setCurrency = (currency: string) => {
    setCurrent(currency)
    fetch(`https://rest.coinapi.io/v1/exchangerate/${currency}/USD?apikey=3A8F1902-F999-4BE8-9747-96C370691643`)
        .then((res) => res.json())
        .then((res) => {
            setRate(res.rate.toFixed(2))
        })
  }

  const [firstInput, changeFirst] = useState(0)
  const [secondInput, changeSecond] = useState(firstInput * rate)

  useEffect(() => {
      setCurrency(current)
  }, [])

  return (
    <div className="App min-h-screen flex flex-col justify-between bg-[#6e47ff] text-amber-400 font-mono">
      <TheHeader />
      <div className="flex flex-col w-3/4 my-0 mx-auto sm:flex-row">
        <Currency current={current} rate={rate} />
        <div className="flex flex-col justify-between items-center w-full">
            <p>Enter your amount:</p>
            <p>{current}</p>
            <input className="text-center w-1/2" type="number" value={firstInput} onInput={
                e => {
                    changeFirst(e.target.value)
                    changeSecond(e.target.value * rate)
                }}
            />
            <p>USD</p>
            <input className="text-center w-1/2" type="number" value={secondInput} onInput={
                e => {
                    changeSecond(e.target.value)
                    changeFirst(e.target.value / rate)
                }}
            />
        </div>
      </div>
      <CurrencyPicker setCurrency={setCurrency} />
      <TheFooter />
    </div>
  )
}

export default App
