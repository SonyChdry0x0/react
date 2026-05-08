import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'
function App() {
  return (
    //className = classNameName
    //for =htmlFor
    //tabindex = tabIndex
    <>
      <Navbar title="TextUtils" aboutText="About Textutils"/>
      {/* <Navbar title = "TextUtils"/> */}
      {/* <Navbar/> */}
      <div className="container">
      <TextForm heading = "Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
