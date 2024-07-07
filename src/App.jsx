import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
function App() {
  document.title = "Mahmoud's Portfolio";
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
