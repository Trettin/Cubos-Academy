import ResponseStates from "./index";
import useContextStates from "../hooks/contextValues";

export default function ContextProvider(props) {
  const contextValues = useContextStates();

  return (
    <ResponseStates.Provider value={contextValues}>
      {props.children}
    </ResponseStates.Provider>
  );
}
