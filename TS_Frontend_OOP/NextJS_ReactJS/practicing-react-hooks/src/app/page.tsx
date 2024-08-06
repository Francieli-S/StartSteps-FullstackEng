import Counter from "../../components/Counter";
import CounterReducer from "../../components/CounterReducer";
import InputWithFocus from "../../components/InputWithFocus";

export default function Home() {
  return (
    <>
    <Counter />
    <br />
    <InputWithFocus />
    <br />
    <CounterReducer />
    </>
  );
}
