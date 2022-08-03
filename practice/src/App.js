
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./compnents/pages/Home";
import About from "./compnents/pages/About";
import Contact from "./compnents/pages/Contact";
import Nav from "./compnents/pages/Nav";
import Post from "./compnents/pages/Post";
import DashBoard from "./compnents/pages/DashBoard";
import Login from "./compnents/pages/Login";
import Logout from "./compnents/pages/Logout";
function App() {
  let isLogged = false;
  let data = {
    'st':"User not logged in"
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route  path='/' element={<h1>Hello React Router</h1>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Post/:category/:id" element={<Post />} />   
          <Route path="/login" element={<Login />}/>  
          <Route path="/logout" element={<Logout />}/>  
          <Route path="/dashboard" element={isLogged ? <DashBoard/> : <Navigate to="/login" replace state={data}/>}/>
               
          <Route path="*" element={<h1>Error 404 page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
