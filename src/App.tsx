import { BrowserRouter } from "react-router-dom";
import Navigation from "./Nav-Component/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
