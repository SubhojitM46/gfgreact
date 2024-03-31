
import './App.css';
 import { useRoutes } from 'react-router-dom'
 import {appRoutes} from './routes'
import LandingPage from './Components/LandingPage';
//import LandingPage from './Components/LandingPage';
//import NavBar from './Components/NavBar';
function App() {
  const element= useRoutes(appRoutes)
  console.log(element)
  return (
    <div className="App">
   
      <LandingPage/>
      {element}
    </div>
  );
}

export default App;