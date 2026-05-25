import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [themeColor, setThemeColor] = useState("#0d6efd");

  

  const changeColor = (color, name) => {
    if (mode === "dark") {
      document.body.style.backgroundColor = color;
      setThemeColor(color);
      showAlert(name + " theme enabled", "success");
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      //document.title='TextUtils -Dark mode';
      // setInterval(() => {
      //   document.title = "Textutils is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setThemeColor("#0d6efd"); 
      showAlert("light mode has been enabled", "success");
      //document.title='TextUtils-Light mode';
    }
  };
  return (
    //className = classNameName
    //for =htmlFor
    //tabindex = tabIndex
    //a= Link 
    //href=to

    <BrowserRouter>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        changeColor={changeColor}
        themeColor={themeColor}
        
      />
      <Alert alert={alert} />
      {/* <Navbar title = "TextUtils"/> */}
      {/* <Navbar/> */}
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}></Route>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils-Word Counter, Character Counter,Remove extra Spaces"
                mode={mode}
                themeColor={themeColor}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


// import "./App.css";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import React, { useState } from "react";
// import Alert from "./components/Alert";
// import About from "./components/About";

// function App() {
//   const [mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null);
//   const [themeColor, setThemeColor] = useState("#0d6efd");

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });

//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const changeColor = (color, name) => {
//     if (mode === "dark") {
//       document.body.style.backgroundColor = color;
//       setThemeColor(color);
//       showAlert(name + " theme enabled", "success");
//     }
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#042743";
//       showAlert("Dark mode has been enabled", "success");

//       setInterval(() => {
//         document.title = "Textutils is amazing mode";
//       }, 2000);

//       setInterval(() => {
//         document.title = "Install Textutils Now";
//       }, 1500);
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//     }
//   };

//   return (
//     <>
//       <Navbar
//         title="TextUtils"
//         mode={mode}
//         toggleMode={toggleMode}
//         changeColor={changeColor}
//       />

//       <Alert alert={alert} />

//       <div className="container my-3">
//         <TextForm
//           showAlert={showAlert}
//           heading="Enter the text to analyze"
//           mode={mode}
//           themeColor={themeColor}
//         />
//         <About/>
//       </div>
//     </>
//   );
// }

// export default App;
