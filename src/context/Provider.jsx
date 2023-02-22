import { useReducer } from "react";
import CounterContext from "./Context";
import counterReducer from "./counterReducer";

const initialState = {
  count: 0,
};

const CounterProvider = (props) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
