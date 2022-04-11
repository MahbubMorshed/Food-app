import "./styles/index.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import Quotes from "./components/Quotes";
import ChiefSection from "./components/ChiefSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <Quotes />
        <ChiefSection />
      </div>
    </div>
  );
}

export default App;
