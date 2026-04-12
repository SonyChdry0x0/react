
import './App.css';
let name = "sony"
function App() {
  return (
    //class = className
    //for =htmlFor
    //tabindex = tabIndex
    <>
    <nav>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>  
      </ul>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque praesentium ad quam suscipit possimus culpa est voluptatibus reprehenderit. Laboriosam dignissimos repellendus est. Tempora cumque atque itaque et cupiditate aliquam quos?
      </p>
    </div>
    </>
    
  );
}

export default App;
