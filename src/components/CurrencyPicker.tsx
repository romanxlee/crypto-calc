const INITIAL_CURRENCIES = ['BTC', 'ETH', 'DOGE']

const currencyPicker = ({setCurrency}: {setCurrency: Function}) => {
    return (
        <div className="w-1/2 flex justify-between my-0 mx-auto border border-solid border-black">
            {INITIAL_CURRENCIES.map(item => (
                <button key={item} onClick={() => setCurrency(item)}>{item}</button>
            ))}
        </div>
    )
}

export default currencyPicker