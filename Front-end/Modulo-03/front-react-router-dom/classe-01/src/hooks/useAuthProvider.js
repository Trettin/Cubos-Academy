import { useState } from "react";

export default function useProvideAuth() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState("");

  const logar = async (callback) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    if (response.status === 404) return;
    setToken(data);
    callback();
  };

  const deslogar = (callback) => {
    setToken(null);
    callback();
  };

  return {
    token,
    logar,
    deslogar,
    user,
    setUser,
  };
}
