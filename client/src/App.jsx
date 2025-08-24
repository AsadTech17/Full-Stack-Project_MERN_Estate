import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { signInSuccess } from "./redux/user/userSlice";
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/updateListing'
import Listing from './pages/Listing';
import Search from './pages/Search'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      dispatch(signInSuccess(savedUser));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
     <Header/>
      <Routes>
         <Route path="/" element = {<Home/>}/>
         <Route path="/sign-in" element = {<Signin/>}/>
         <Route path="/sign-up" element = {<SignUp/>}/>
         <Route path="/about" element = {<About/>}/>
         <Route path="/search" element = {<Search/>}/>
          <Route path='/listing/:listingId' element={<Listing />} />
         <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-listing" element={<CreateListing/>} />
            <Route path="/update-listing/:listingId" element={<UpdateListing/>} />
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
