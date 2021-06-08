import "./App.css";
import "@fontsource/roboto";
import Header from "./components/Header";
import Card from "./components/Card";
import PokeSearch from "./components/PokeSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Card />
        <PokeSearch />
      </div>
    </div>
  );
}

export default App;
