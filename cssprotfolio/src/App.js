import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Content/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Project/>
   <Contact/>
   </>
  );
}

export default App;
