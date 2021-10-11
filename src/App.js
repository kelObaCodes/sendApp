import "./App.css";
import Header from "./components/Header";
import SubHeading from "./components/SubHeading";
import Service from "./components/Service";
import Cargo from "./components/CargoDescription";
import CargoDetail from "./components/CargoDetails";
import AdditionalService from "./components/AdditionalServices";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="block-cover">
        <SubHeading />
        <Service />
        <Cargo />
        <CargoDetail />
        <AdditionalService />
      </div>
    </div>
  );
}

export default App;
