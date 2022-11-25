import './App.css';
import Landing from './pages/Landing/Landing';
import Options from './pages/Options/Options';
import UseApp from './pages/UseApp/UseApp';
import ViewLogs from './pages/ViewLogs/ViewLogs';
import Log from './pages/Log/Log';
// import NavBar from './components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <NavBar/>  */}
      
      <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/options' element={<Options />}/>
      <Route path='/useapp' element={<UseApp />}/>
      <Route path='/viewlogs' element={<ViewLogs />}/>
      <Route path='/logfortoday' element={<Log />}/>
      </Routes> 
    </div>

  );
}

export default App;
