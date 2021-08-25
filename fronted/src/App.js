import './App.css';
import CardPage from './pages/CardPage';
import RegisterForm from './pages/RegisterForm';
import { Route,Switch} from "react-router-dom";
import DashBoard from './pages/DashBoard';
import EditForm from './components/EditForm';
import AddForm from './components/form/AddForm';
import NavBar from './components/appbar/NavBar';
import Reserve from './components/reserve/Reserve';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route  exact path='/' component={DashBoard} />
      <Route  path='/AddForm' component={AddForm} />
      <Route  path='/EditForm' component={EditForm} />
      <Route  path='/Reserve' component={Reserve} />
      
    </div>
  );
}

export default App;
