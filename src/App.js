import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar />
      {/* <Textform />  will use default heading */}
      {/* Or explicitly pass a heading */}
      <Textform heading="enter the text here "/>
    </>
  );
}

export default App;
