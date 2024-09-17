import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  document.title = "Mahmoud's Portfolio";
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      {/* <About /> */}
    </div>
  );
}

export default App;
