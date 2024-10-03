import { useState } from "react";
const Clicker = (props) => {
    const [count, setCount] = useState(props.startFrom);
    // let count = props.startFrom; <- BAD WAY OF DOING IT IN REACT!

    const handleCountUp = () => {
        console.log("clicked");
        setCount(count+1)
        console.log(setCount)
    };

    return (
        <>
        <p>You have clicked {count} times</p>
        <button onClick={handleCountUp}>Click me</button>
        </>
    );
};

export default Clicker;