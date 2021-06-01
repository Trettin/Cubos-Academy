import { useHistory, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Profile(props) {
  const history = useHistory();
  const auth = useAuth();

  return (
    <div>
      <Link to="/">Home</Link>
      <button onClick={() => auth.deslogar(() => history.push("/"))}>
        Logout
      </button>
      <h3>Olá, bem-vinds {auth.token.login}</h3>
    </div>
  );
}
