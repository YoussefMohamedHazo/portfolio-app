import About from "./components/About";
import Certifiection from "./components/Certifiection";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <div className=" flex flex-col gap-40">
        <Skills />
      <Work />
      <Certifiection/>
      </div>
    
      <Contact />
    </div>
  );
}

export default App;
