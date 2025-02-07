import React from "react";
import Component1 from "./Component1.jsx";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx"
import Photos from "./Photos.jsx";
import About from "./About me.jsx";
import Footer from "./Footer.jsx";

<link rel="stylesheet" href="bootstrap.css" />


function App(){
return(
  <>
  <Navbar></Navbar>
  <Component1></Component1>
 <Card></Card>
<Photos></Photos> 
<About></About>
<Footer></Footer>
  </>
);
}

export default App