import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter , Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingFlight from './pages/BookingFlight'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddFlight from './pages/AddFlight'
import AdminHome from './pages/AdminHome';
import Tours from './pages/tours';


function App() {
  return (
    <div className="App">

         
         
         <BrowserRouter>
             
             <ProtectedRoute path='/home' exact component={Home} />
             <Route path='/' exact component={Login} />
             <Route path='/register' exact component={Register} />
             <ProtectedRoute path='/booking/:carid' exact component={BookingFlight} />
             <ProtectedRoute path='/userbookings' exact component={UserBookings} />
             <ProtectedRoute path='/addflight' exact component={AddFlight} />
             <ProtectedRoute path='/tours' exact component={Tours} />
           
             <ProtectedRoute path='/admin' exact component={AdminHome} />
         
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/'/>
    }

}
