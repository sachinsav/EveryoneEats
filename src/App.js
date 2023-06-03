import logo from './logo.svg';
import './App.css';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import Navbar from './components/navbar';
import Home from './components/home';
import FoodDetail from './components/fooddetail';
import FoodForm from './components/foodform';

function App() {
  const foodItem = [{name:"chapati",quantity:"2", address:"abc", distance:"2km", expiry:"4hours"},
  {name:"chapati",quantity:"2", address:"abc", distance:"2km", expiry:"4hours"},
  {name:"chapati",quantity:"2", address:"abc", distance:"2km", expiry:"4hours"}
  ]
  return (
    <div className="App">
      <Home />
      
    </div>
  );
}

export default App;
