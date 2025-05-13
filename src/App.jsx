import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Importing all the Pages
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import CarsForSale from './Pages/CarsForSale';
import ContactUs from './Pages/ContactUs';
import CarLoanCalculator from './Pages/CarLoanCalculator';
import ComparingPage from './Pages/ComparingPage';
import SignIn from './Pages/SignPages/SignIn';
import SignUp from './Pages/SignPages/SignUp';
import WishList from './Pages/WishList';
import SingleProduct from './Pages/SingleProduct';
import React from 'react'
import ReactDOM from 'react-dom/client'
import LiveChatPage from './Pages/LiveChatPage';

function App() {
  return (
  <BrowserRouter basename='/NobleDrive-Dealership/'>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/CarsForSale' element={<CarsForSale/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/CarLoanCalculator' element={<CarLoanCalculator/>}/>
        <Route path='/ComparingPage' element={<ComparingPage/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/WishList' element={<WishList/>}/>
        <Route path='/SingleProduct' element={<SingleProduct/>}/>
        <Route path='/LiveChatPage' element={<LiveChatPage/>}/>
      </Routes>
    </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App