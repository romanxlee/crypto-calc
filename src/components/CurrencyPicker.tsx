import btc from '../logos/btc.svg';
import eth from '../logos/eth.svg';
import doge from '../logos/doge.svg';

const INITIAL_CURRENCIES = [
    {
    name: 'BTC',
    logo: btc,
    },
    {
    name: 'ETH',
    logo: eth,
    },
    {
    name: 'DOGE',
    logo: doge,
    }]

const currencyPicker = ({setCurrency}: {setCurrency: Function}) => {
    return (
        <div className="w-1/2 flex justify-between my-0 mx-auto">
            {INITIAL_CURRENCIES.map(item => (
                <button key={item.name} onClick={() => setCurrency(item.name)}>
                    <img src={item.logo} alt="logo" className="w-[60px] h-[60px]"/>
                    <span>{item.name}</span>
                </button>
            ))}
        </div>
    )
}

export default currencyPicker