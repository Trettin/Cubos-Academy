import "./App.css";
import "@fontsource/roboto";
import Header from "./components/Header";
import Card from "./components/Card";
import PokeSearch from "./components/PokeSearch";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
        <div className="main">
          <Card />
          <PokeSearch />
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;
