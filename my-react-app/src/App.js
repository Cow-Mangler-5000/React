import './App.css'

function App(){
  return(
    <div className="App">
      <p>Hello World!</p>
      <div id="testing"></div>
    </div>
  )
}

var test = document.getElementById("testing");
test.textContent = "ADD LOREM HERE101"

export default App;