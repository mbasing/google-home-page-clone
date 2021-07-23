import "./App.css";
import AboutUs from "./components/AboutUs";
import Country from "./components/Country";
import GoogleSearch from "./components/GoogleSearch";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Offerings from "./components/Offerings";
import Privacy from "./components/Privacy";
import Search from "./components/Search";

function App() {
  return (
    <div className="container">
      <Header />
      <Logo/>
      <Search />
      <GoogleSearch />
      <Offerings />
      <Country />
      <AboutUs />
      <Privacy />
    </div>
  );
}

export default App;
