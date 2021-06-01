import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login(props) {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div>
      <input type="text" onChange={(e) => auth.setUser(e.target.value)} />
      <button
        onClick={() => auth.logar(() => history.push(`/profile/${auth.user}`))}
      >
        Login
      </button>
    </div>
  );
}
