
import './App.css';


const fname = "Merve"
const lname = "Ayaz"
const currentDate = new Date()

const currentYear = currentDate.getFullYear();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Created by {fname + " " + lname} </p>
        <p>Copyright {currentYear}</p>
      </header>
    </div>
  );
}

export default App;
