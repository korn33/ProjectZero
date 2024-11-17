import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCounter] = useState(0)

    const increment = () => {
        setCounter(count + 2)
    }

    return (
        <button className={classes.btn} onClick={increment}>
            count {count}
        </button>
    );
};