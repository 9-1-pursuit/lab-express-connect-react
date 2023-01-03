import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Log from './Components/Log'
import Forms from './Components/Forms'
import LogDetails from './Components/LogDetails'


function App() {
  <div className='App'>
    <Router>
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/logs' element={<Log/>}/>
          <Route path='/logs/:index/edit' element={<Forms/>}/>
          {/* I figured they do the same thing so why not just make one form */}
          <Route path='/logs/:index' element={<LogDetails/>}/>
          <Route path='*'/>
        </Routes>
      </main>
    </Router>
  </div>;
}

export default App;
