"use client"
import { useContext, useReducer } from "react"
import { LangContext } from "../context/LangWrapper"
type ActionType = {
    type: "reset" | "increment" | "decrement"
}
type StateType = {
    count: number
}
function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case "reset":
            return { count: 0 }
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
            return state
    }
}
const CounterReducer: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const lang = useContext(LangContext)
    return (
        <div>
            {lang === "en" ? "Count" : "Zahlen"}: {state.count}
            <div>
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
                <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
                <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            </div>
        </div>
    )
}
export default CounterReducer;