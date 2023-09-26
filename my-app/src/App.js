
import './App.css';


const date = new Date ();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
}

if (currentTime < 12) {
  greeting = "Good Morning"
  customStyle.color = "red";
} else if (currentTime < 18){
  greeting = "Good Afternoon"
  customStyle.color = "blue";
} else {
  greeting = "Good Night"
  customStyle.color = "green";
}




 function App() {
  return (
    <div className="App">
      <h1 style={customStyle}>{greeting}</h1>
  </div>
  );
}

export default App;
