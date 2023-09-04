

import Navgation_01 from "./components/navigation/Navgation_01.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import SignUp from "./components/signup/SignUp.jsx";


import Content from "./components/content/Content.jsx";

import Cart from "./components/cart/Cart.jsx";
import Category from "./components/category/Category.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home.js";
import AudioList from "./components/List/AudioList/AudioList.jsx";
import ContactUs from "./ContactUs.js"
import AboutUs from "./AboutUs.js";
import VideoList from "./components/List/VideoList/VideoList.jsx";
import EBookList from "./components/List/EbookList/EBookList.jsx";
import Home2 from "./components/Home/Home2.js";
import Footer from "./components/footer/Footer.jsx";


function App() {

  return (
 
    <>
    <Navgation_01 /> 
    {/* <Footer /> */}
   

      <BrowserRouter>
        <Routes>

            <Route path = "/audiolist" element = {<AudioList/>}/>
            <Route path = "/ebooklist" element = {<EBookList/>}/>
           
            <Route path = "/videolist" element = {<VideoList/>}/>
        
            <Route path = "/" element = {<Home/>}/>
            <Route path = "category" element = {<Category/>}/>
            <Route path = "signin" element = {<SignIn/>}/>
            <Route path = "content" element = {<Content/>}/>
            <Route path = "AboutUs" element = {<AboutUs/>}/>
            <Route path = "ContactUs" element = {<ContactUs/>}/>
            <Route path = "cart" element = {<Cart/>}/>
            <Route path = "signup" element = {<SignUp/>}/>


          {/* list */}
   
            
            

        </Routes>
        <Outlet/>
      </BrowserRouter>
      <Footer/>
      </>
    // </div>
  );
}

export default App;
