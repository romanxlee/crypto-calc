const Currency = ({current, rate}: {current: string, rate: number}) => {
    return (
        <div className="w-full">
            <h3>Current currency: </h3>
            <p>{current}</p>
            <p>Exchange rate is:</p>
            <p>1 {current} is {rate} USD</p>
        </div>
    )
}

export default Currency