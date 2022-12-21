import Provider from "./Components/Provider";
import Routes from "./Components/Routes";
import "./App.css"


function App() {
  return(
    <div className="App">
      <Provider>
        <Routes />
      </Provider>
    </div>
  ) 
}

export default App;
