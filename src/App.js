import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Log from './Components/Log'

import Edit from './Components/Forms'
import Details from './Components/LogDetails'


function App() {
  <div className='App'>
    <Router>
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/logs' element={<Log/>}/>
          <Route path='/logs/:index/edit' element={<Edit/>}/>
          <Route path='/logs/:index' element={<Details/>}/>
          <Route path='*'/>
        </Routes>
      </main>
    </Router>
  </div>;
}

export default App;
