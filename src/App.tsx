import { BrowserRouter } from "react-router-dom";
import Navigation from "./Nav-Component/Navigation";
import Hero from "./Hero-Component/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
        <Navigation />
        <Hero heading="Hi, I'm " />
      </div>
    </BrowserRouter>
  );
};

export default App;
