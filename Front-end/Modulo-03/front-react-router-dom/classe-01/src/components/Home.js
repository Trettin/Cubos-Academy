import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';

function Home() {
  const auth = useAuth();

  return (
    <div>
      Home
      {auth.token? <Link to='/profile'>Profile</Link> :<Link to="/login">Login</Link>}
    </div>
  );
}

export default Home;