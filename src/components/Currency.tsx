const Currency = ({current}: {current: string}) => {
    return (
        <div className="border border-solid border-black">
            <h3>Current currency: </h3>
            <p>{current}</p>
        </div>
    )
}

export default Currency