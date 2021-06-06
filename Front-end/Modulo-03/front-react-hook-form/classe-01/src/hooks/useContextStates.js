import { useContext } from "react";

import ResponseStates from "../context";

export default function useContextStates() {
  return useContext(ResponseStates);
}
