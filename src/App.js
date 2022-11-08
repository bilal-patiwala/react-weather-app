import "./App.css";
import CityWeatherList from "./components/CityWeatherList";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <CityWeatherList/>
      </div>
    </div>
  );
};

export default App;
