import './App.css';
import Landing from './pages/Landing/Landing';
import Options from './pages/Options/Options';
import UseApp from './pages/UseApp/UseApp';
import ViewDays from './pages/ViewDays/ViewDays';
import Day from './pages/Day/Day';
// import NavBar from './components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as dayService from "./services/dayService.js"

function App() {
  const navigate = useNavigate()
  const [days, setDays] = useState([])

  const handleAddDay = async (dayData) => {
    const newDay = await dayService.create(dayData)
    setDays([newDay, ...days])
    navigate('/days')
  }

  return (
    <div className="App">
      {/* <NavBar/>  */}
      
      <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/options' element={<Options />}/>
      <Route path='/useapp' element={<UseApp />}/>
      <Route path='/days' element={<ViewDays title="no" handle="mymy"/>}/>
      <Route path='/days/new' element={<Day handleAddDay={handleAddDay}/>}/>
      </Routes> 
    </div>

  );
}

export default App;
