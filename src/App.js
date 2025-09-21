import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/about';
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About us"/>
      <Textform/>
      <About/>
    </>
  );
}

export default App;
