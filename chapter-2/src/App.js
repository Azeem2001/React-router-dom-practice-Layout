
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./compnents/pages/Home";
import About from "./compnents/pages/About";
import Contact from "./compnents/pages/Contact";
import Layout from "./compnents/pages/Layout";
import Post from "./compnents/pages/Post";
import PostDetails from "./compnents/pages/PostDetails";
import PostLayout from "./compnents/pages/PostLayout";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="post" element={<PostLayout />}>
              <Route index element={<Post />} />
              <Route path=":category" element={<PostDetails />} />
            </Route>
          </Route>
          <Route path="*"  element={<h1>error 404 has not found</h1>}/>

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
