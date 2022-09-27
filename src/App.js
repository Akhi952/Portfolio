import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
   <div>
    <NavBar/>
    <SocialLinks/>
    <Home/>
    <About/>
    <Experience/>
    <Contact/>
   </div>
  );
}

export default App;
