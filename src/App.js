import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'
function App() {
  return (
    //className = classNameName
    //for =htmlFor
    //tabindex = tabIndex
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      {/* <Navbar title = "TextUtils"/> */}
      {/* <Navbar/> */}
      <div className="container my-3" >
      <TextForm heading = "Enter the text to analyze"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
