import './App.css';
import Landing from './pages/Landing/Landing';
import Options from './pages/Options/Options';
import UseApp from './pages/UseApp/UseApp';
import ViewDays from './pages/ViewDays/ViewDays';
import Day from './pages/Day/Day';
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
      <Route path='/viewlogs' element={<ViewDays/>}/>
      <Route path='/logfortoday' element={<Day />}/>
      </Routes> 
    </div>

  );
}

export default App;
